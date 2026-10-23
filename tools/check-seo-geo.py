"""stdlib-only checks for the authored course, references and offline assets."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
from collections import Counter
import hashlib
import json
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT/'docs/seo-geo/knowledge-map.json').read_text())
IMAGES = json.loads((ROOT/'docs/seo-geo/image-manifest.json').read_text())
SOURCES = json.loads((ROOT/'docs/seo-geo/source-texts.json').read_text())
AUTHORING = json.loads((ROOT/'docs/seo-geo/authoring-layout.json').read_text())
FOUNDATIONS = json.loads((ROOT/'docs/seo-geo/foundation-lessons.json').read_text())['lessons']

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.ids=[]; self.links=[]; self.images=[]; self.figures=[]; self.ld=[]; self.ld_open=False; self.buffer=[]; self.h1=0; self.meta={}; self.canonical=[]; self.text=[]; self.passages=[]
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.append(a['id'])
        if tag=='h1': self.h1+=1
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a['href'])
        if tag=='img': self.images.append(a)
        if tag=='figure' and a.get('data-asset-key'):self.figures.append(a['data-asset-key'])
        if a.get('data-source-key'):self.passages.append((a['data-source-key'],int(a['data-source-start']),int(a['data-source-end'])))
        if tag=='meta' and a.get('name'): self.meta[a['name']]=a.get('content','')
        if tag=='script' and a.get('type')=='application/ld+json': self.ld_open=True; self.buffer=[]
    def handle_data(self, data):
        if self.ld_open:self.buffer.append(data)
        else:self.text.append(data)
    def handle_endtag(self, tag):
        if tag=='script' and self.ld_open:self.ld.append(json.loads(''.join(self.buffer)));self.ld_open=False

assert len(DATA['lessons'])==14
assert len(DATA['knowledge_points'])==96
assert len(FOUNDATIONS)==4
assert len(IMAGES)==32 and sum(i['regenerated'] for i in IMAGES)==6
assert sum(i.get('newly_generated',False) for i in IMAGES)==4
assert len({p['id'] for p in DATA['knowledge_points']})==96
all_pages={}
checked_links=0
source_fragments=0
figure_placements=0
def normalized(text):
    text=re.sub(r'(?m)^(?:[-*] |\d+\. )','',text)
    return re.sub(r'[\s*#`\\]','',text)
for lesson in DATA['lessons']:
    target=ROOT/lesson['file'];raw=target.read_text();p=Page(raw);all_pages[lesson['file']]=p
    assert p.h1==1,(target,'h1')
    assert len(p.ids)==len(set(p.ids)),(target,'duplicate ids')
    assert p.meta.get('description') and len(p.canonical)==1,(target,'metadata')
    assert len(p.ld)==1 and p.ld[0]['headline']==lesson['title'],(target,'structured data')
    assert p.ld[0]['url']==p.canonical[0],(target,'canonical mismatch')
    assert p.ld[0]['dateModified']=='2026-10-18'
    assert 'data-sc-quiz' in raw and ('data-sc-workbook' in raw or 'data-sc-checklist' in raw)
    assert '未完待续' not in raw and '/Users/' not in raw
    assert '2082285719100268653' not in raw
    assert '来源与核对' not in raw and '<footer class="sc-sources"' not in raw
    assert 'sc-teaching-extras' in raw and '<details class="sc-teaching-extras" open' not in raw
    layout=AUTHORING[str(lesson['order'])]
    excerpts=[layout['intro'],*[p for u in layout['units'] for p in u['passages']]]
    assert p.passages==[(x['source_key'],x['start'],x['end']) for x in excerpts],(target,'source passage order')
    rendered=re.findall(r'<div class="sc-author-passage"[^>]*>([\s\S]*?)</div>',raw)
    assert len(rendered)==len(excerpts)
    for excerpt,html in zip(excerpts,rendered):
        original=SOURCES[excerpt['source_key']]['text'][excerpt['start']:excerpt['end']]
        assert original==excerpt['text'],(target,'source changed',excerpt['source_key'])
        actual=''.join(Page(html).text)
        assert normalized(actual)==normalized(original),(target,'rendered source mismatch',excerpt['source_key'],excerpt['start'])
        source_fragments+=1
    assert 2<=len(p.images)<=4,(target,'illustration count')
    assert p.figures==lesson['figures'],(target,'figure order')
    figure_placements+=len(p.images)
    for pid in lesson['knowledge_points']:
        assert p.ids.count(pid.lower())==1,(target,pid)
        unit=next(u for u in layout['units'] if pid in u['points'])
        body=re.search(r'<section id="'+re.escape(unit['key'])+r'"[\s\S]*?</section>',raw).group(0)
        assert 'data-source-section' in body and 'sc-author-passage' in body,(target,pid,'missing source body')
    for img in p.images:
        assert img.get('alt') and img.get('width') and img.get('height'),(target,'image attributes')
        assert (target.parent/unquote(urlparse(img['src']).path)).is_file(),(target,img['src'])
    for href in p.links:
        u=urlparse(href)
        if u.scheme or u.netloc:continue
        linked=(target.parent/unquote(u.path)).resolve() if u.path else target
        assert linked.is_file(),(target,href,'missing link')
        if u.fragment and linked.suffix=='.html':
            ids=Page(linked.read_text()).ids
            assert unquote(u.fragment) in ids,(target,href,'missing anchor')
        checked_links+=1
foundation_figures=0
foundation_topics=0
def markdown_text(raw):
    raw=re.sub(r'<!-- figure:.*? -->','',raw)
    raw=re.sub(r'(?m)^```[^\n]*\n?','',raw)
    raw=re.sub(r'\[([^\]]+)\]\([^)]+\)',r'\1',raw)
    return normalized(raw)
for lesson in FOUNDATIONS:
    target=ROOT/lesson['file'];raw=target.read_text();p=Page(raw);all_pages[lesson['file']]=p
    assert p.h1==1 and len(p.ids)==len(set(p.ids)),(target,'headings and ids')
    assert p.meta.get('description')==lesson['description'] and len(p.canonical)==1
    assert len(p.ld)==1 and p.ld[0]['headline']==lesson['title']
    assert p.ld[0]['url']==p.canonical[0] and p.ld[0]['dateModified']=='2026-10-18'
    assert 'data-sc-quiz' in raw and 'data-sc-workbook' in raw
    assert '<details class="sc-teaching-extras paywall-locked" open' not in raw
    assert '来源与核对' not in raw and '/Users/' not in raw and '未完待续' not in raw
    assert p.figures==lesson['figures'] and len(p.images)==2,(target,'foundation figures')
    source=(ROOT/lesson['source_file']).read_text()
    assert hashlib.sha256(source.encode()).hexdigest()==lesson['source_sha256']
    chunks=re.split(r'(?m)^## (.+)\n',source)
    intro=re.search(r'<div class="subtitle sc-author-intro">([\s\S]*?)</div>',raw)[1]
    rendered=[intro,*re.findall(r'<div class="sc-author-passage">([\s\S]*?)</div>',raw)]
    expected=[chunks[0],*[chunks[i] for i in range(2,len(chunks),2)]]
    assert len(rendered)==len(expected)==lesson['section_count']+1
    for fragment,original in zip(rendered,expected):
        fragment=re.sub(r'<figure\b[\s\S]*?</figure>','',fragment)
        assert normalized(''.join(Page(fragment).text))==markdown_text(original),(target,'markdown render mismatch')
    for pid,title,section in lesson['topics']:
        assert p.ids.count(pid.lower())==1 and 1<=section<=lesson['section_count'],(target,pid)
        foundation_topics+=1
    for img in p.images:
        assert img.get('alt') and img.get('width') and img.get('height')
        assert (target.parent/unquote(urlparse(img['src']).path)).is_file()
    for href in p.links:
        u=urlparse(href)
        if u.scheme or u.netloc:continue
        linked=(target.parent/unquote(u.path)).resolve() if u.path else target
        assert linked.is_file(),(target,href,'missing link')
        if u.fragment and linked.suffix=='.html':assert unquote(u.fragment) in Page(linked.read_text()).ids
        checked_links+=1
    foundation_figures+=len(p.images)
assert foundation_topics==26 and foundation_figures==8
assert Page((ROOT/FOUNDATIONS[-1]['file']).read_text()).links.count(Path(DATA['lessons'][0]['file']).name)==1
assert Path(FOUNDATIONS[-1]['file']).name in Page((ROOT/DATA['lessons'][0]['file']).read_text()).links
for img in IMAGES:
    p=ROOT/img['path'];assert p.is_file(),p
    assert hashlib.sha256(p.read_bytes()).hexdigest()==img['sha256'],p
    assert p.stat().st_size==img['bytes'],p
    assert img['width']>0 and img['height']>0
for name in ['seo-guide.html','seo-gallery.html']:
    p=Page((ROOT/'slides'/name).read_text())
    for img in p.images:assert (ROOT/'slides'/img['src']).is_file()
    if name=='seo-gallery.html':assert len(p.images)==32
    if name=='seo-guide.html':
        assert '4 篇基础 + 14 讲案例' in ''.join(p.text)
        assert [href for href in p.links if href.endswith('.html')][:18]==[Path(l['file']).name for l in FOUNDATIONS+DATA['lessons']]
payload=r"""const fs=require('node:fs'),vm=require('node:vm'); const s={window:{}};
vm.runInNewContext(fs.readFileSync('slides/course-data.js','utf8'),s);
const p=s.window.COURSE.parts.find(x=>x.id==='p-seo');
const files=p.topics.flatMap(t=>t.lessons.map(x=>x.file));
const raw=fs.readFileSync('slides/nav-inject.js','utf8');
const block=raw.match(/\/\/ SEO_GEO_ORDER_BEGIN[^\n]*\n([\s\S]*?)\/\/ SEO_GEO_ORDER_END/)[1];
const nav=JSON.parse('['+block.trim().replace(/,$/,'')+']');
if(JSON.stringify(files)!==JSON.stringify(nav.map(x=>x.file)))throw Error('navigation mismatch');
console.log(JSON.stringify(files));"""
registered=json.loads(subprocess.check_output(['node','-e',payload],cwd=ROOT,text=True))
assert registered==[Path(l['file']).name for l in FOUNDATIONS+DATA['lessons']]
assert DATA['learning_path']==[l['file'] for l in FOUNDATIONS+DATA['lessons']]
counts={'lessons':18,'foundation_lessons':4,'case_lessons':14,'foundation_topics':foundation_topics,'case_knowledge_points':96,'images':32,'regenerated_images':6,'new_foundation_images':4,
        'source_fragments_verified':source_fragments,'lesson_figure_placements':figure_placements+foundation_figures,
        'figures_per_lesson':[len(p.images) for p in all_pages.values()],
        'local_lesson_links_verified':checked_links,'registered_and_navigable':len(registered),
        'visible_text_chinese_characters':sum(len(re.findall(r'[\u4e00-\u9fff]',''.join(p.text))) for p in all_pages.values())}
print(json.dumps(counts,ensure_ascii=False,indent=2))
