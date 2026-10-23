"""Build the four foundation lessons before the existing case course (stdlib only)."""
from pathlib import Path
from html import escape
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[1]
SLIDES = ROOT / 'slides'
DOCS = ROOT / 'docs/seo-geo'
DOMAIN = 'https://xueai.miyang.cn'
DATA = json.loads((DOCS / 'foundation-lessons.json').read_text())
LESSONS = DATA['lessons']
CASES = json.loads((DOCS / 'knowledge-map.json').read_text())
ASSETS = {a['key']: a for a in json.loads((DOCS / 'image-manifest.json').read_text())}


def inline(text):
    tokens = []

    def reserve(value):
        tokens.append(value)
        return '\x00' + str(len(tokens) - 1) + '\x00'

    text = re.sub(r'`([^`]+)`', lambda m: reserve('<code>' + escape(m[1]) + '</code>'), text)

    def link(m):
        assert m[2].startswith('https://'), m[2]
        return reserve('<a href="' + escape(m[2], quote=True) + '">' + escape(m[1]) + '</a>')

    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', link, text)
    text = escape(text)
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
    return re.sub(r'\x00(\d+)\x00', lambda m: tokens[int(m[1])], text)


def figure(key):
    a = ASSETS[key]
    src = a['path'].removeprefix('slides/')
    captions = {
        'F-01': '标题说明主题，描述补充信息；Keywords 只在自己的系统确有用途时选填。',
        'F-02': '清楚的标题层级和图片说明，帮助读者定位信息，不是固定的排名加分公式。',
        'F-03': '网站的访问、抓取、传输与地图各管一段；门开着也不代表一定被收录。',
        'F-04': '把具体问题、实测与出处整理清楚，提供可以继续核对的答案材料。',
        'A2-03': '首页、价格和教程各有职责，标题与描述也要对应各页的实际内容。',
        'A2-06': '用相关内链连接首页、分类、文章和服务，链接文字说明目的地。',
        'A2-04': '公开可抓取与参与索引是两个目标；noindex 必须能够被爬虫读取。',
        'A5-06': '技术负责可发现与可读取，内容提供事实解答，评估持续检查答案变化。'
    }
    return f'''<figure id="fig-{key.lower()}" class="sc-figure" data-asset-key="{key}">
<a class="sc-image-link" href="{src}" aria-label="打开原尺寸图片"><img src="{src}" width="{a['width']}" height="{a['height']}" loading="lazy" decoding="async" alt="{escape(a['alt'], quote=True)}"></a>
<figcaption>{captions[key]}</figcaption></figure>'''


def markdown(text):
    lines = text.strip().splitlines()
    result = []
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        if line.startswith('```'):
            code = []
            i += 1
            while i < len(lines) and not lines[i].startswith('```'):
                code.append(lines[i])
                i += 1
            assert i < len(lines), 'Unclosed code block'
            result.append('<pre><code>' + escape('\n'.join(code)) + '</code></pre>')
            i += 1
        elif line.startswith('<!-- figure:'):
            result.append(figure(re.fullmatch(r'<!-- figure:(\S+) -->', line)[1]))
            i += 1
        elif line.startswith('### '):
            result.append('<h3>' + inline(line[4:]) + '</h3>')
            i += 1
        elif re.match(r'^(?:- |\d+\. )', line):
            kind = 'ul' if line.startswith('- ') else 'ol'
            result.append('<' + kind + '>')
            while i < len(lines) and re.match(r'^(?:- |\d+\. )', lines[i]):
                result.append('<li>' + inline(re.sub(r'^(?:- |\d+\. )', '', lines[i])) + '</li>')
                i += 1
            result.append('</' + kind + '>')
        else:
            paragraph = [line]
            i += 1
            while i < len(lines) and lines[i].strip():
                assert not lines[i].startswith(('```', '<!--', '##')), lines[i]
                paragraph.append(lines[i].strip())
                i += 1
            result.append('<p>' + inline(' '.join(paragraph)) + '</p>')
    return '\n'.join(result)


def exercises(lesson):
    q, options, correct, why = lesson['quiz']
    n = lesson['order']
    choices = ''.join(f'<label class="sc-option"><input type="radio" name="foundation-q{n}" value="{i}"><span>{escape(s)}</span></label>' for i, s in enumerate(options))
    fields = []
    for name, label, hint in lesson['fields']:
        fid = f'foundation-{n}-{name}'
        control = f'<textarea id="{fid}" name="{name}" rows="3" maxlength="20000" placeholder="{escape(hint, quote=True)}"></textarea>'
        fields.append(f'<label class="sc-field wide" for="{fid}"><span>{escape(label)}</span>{control}</label>')
    preview = '<div class="sc-search-preview" aria-label="文案示意预览"><strong data-preview-title>你的页面标题</strong><p data-preview-description>这页适合谁，解决什么问题。</p><p>文案预览，实际搜索展示可能不同。</p></div>' if lesson['workbook_mode'] == 'title' else ''
    return f'''<details class="sc-teaching-extras paywall-locked"><summary>动手练习与检查工具</summary>
<section class="sc-section"><h2>判断一下</h2><div class="toy sc-quiz" data-sc-quiz data-correct="{correct}" data-explanation="{escape(why, quote=True)}"><div class="toy-head"><span class="toy-t">基础判断题</span><span class="toy-badge">单选</span></div><div class="toy-body"><fieldset><legend>{escape(q)}</legend>{choices}</fieldset><button type="button" class="sc-button">核对解释</button><p class="sc-feedback" data-feedback role="status" aria-live="polite">选择后查看解释。</p><details><summary>直接阅读答案说明</summary><p>{escape(why)}</p></details></div></div></section>
<section class="sc-section"><h2>动手 · 写下自己的检查记录</h2><div class="toy"><div class="toy-head"><span class="toy-t">基础工作单</span><span class="toy-badge">填写与导出</span></div><div class="toy-body"><p class="toy-hint">只整理你填写的内容，不自动核验网站或查询 AI。离开前可以导出 JSON。</p><form id="foundation-worksheet-{n}" data-sc-workbook="{lesson['workbook_mode']}"><div class="sc-form-grid">{''.join(fields)}</div>{preview}<div class="sc-actions"><button type="submit" class="sc-button">整理记录</button><button type="button" class="sc-button secondary" data-export>导出 JSON</button></div><pre class="sc-output" data-output role="status" aria-live="polite">填写后点击“整理记录”。输入不会自动保存。</pre></form></div></div></section></details>'''


for lesson in LESSONS:
    raw = (ROOT / lesson['source_file']).read_text()
    chunks = re.split(r'(?m)^## (.+)\n', raw)
    intro = markdown(chunks[0])
    sections = []
    toc = []
    for index in range(1, len(chunks), 2):
        number = (index + 1) // 2
        anchor = f'f{lesson["order"]:02d}-{number}'
        toc.append(f'<li><a href="#{anchor}">{escape(chunks[index])}</a></li>')
        points = [p for p in lesson['topics'] if p[2] == number]
        ids = ''.join(f'<span id="{p[0].lower()}" class="sc-point-anchor" aria-hidden="true"></span>' for p in points)
        lock = ' paywall-locked' if number > 1 else ''
        sections.append(f'<section id="{anchor}" class="reveal sc-section{lock}" data-foundation-section>{ids}<h2>{escape(chunks[index])}</h2><div class="sc-author-passage">{markdown(chunks[index+1])}</div></section>')
    previous = LESSONS[lesson['order'] - 2] if lesson['order'] > 1 else None
    following = LESSONS[lesson['order']] if lesson['order'] < 4 else CASES['lessons'][0]
    before = f'<a href="{Path(previous["file"]).name}"><small>上一篇基础</small>{escape(previous["title"])}</a>' if previous else '<a href="seo-guide.html"><small>从这里开始</small>查看基础与案例完整目录</a>'
    after = f'<a class="next" href="{Path(following["file"]).name}"><small>{"下一篇基础" if lesson["order"] < 4 else "进入案例实战"}</small>{escape(following["title"])}</a>'
    url = DOMAIN + '/' + lesson['file']
    image = DOMAIN + '/' + ASSETS[lesson['figures'][0]]['path']
    ld = {'@context': 'https://schema.org', '@type': ['Article', 'LearningResource'], 'headline': lesson['title'], 'name': lesson['title'], 'description': lesson['description'], 'url': url, 'inLanguage': 'zh-CN', 'author': {'@type': 'Person', 'name': '黄啊码'}, 'publisher': {'@type': 'Organization', 'name': '小山学堂'}, 'datePublished': '2026-10-18', 'dateModified': '2026-10-18', 'learningResourceType': '课程', 'isPartOf': {'@type': 'Course', 'name': '被搜到：SEO 与 GEO', 'url': DOMAIN + '/slides/seo-guide.html'}, 'image': image, 'isAccessibleForFree': False, 'hasPart': {'@type': 'WebPageElement', 'isAccessibleForFree': False, 'cssSelector': '.paywall-locked'}}
    html = f'''<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{escape(lesson['title'])} | 被搜到：SEO 与 GEO</title><meta name="description" content="{escape(lesson['description'], quote=True)}"><meta name="author" content="黄啊码"><meta name="robots" content="index, follow">
<link rel="canonical" href="{url}"><link rel="alternate" hreflang="zh-CN" href="{url}"><link rel="alternate" hreflang="x-default" href="{url}">
<meta property="og:type" content="article"><meta property="og:site_name" content="小山学堂"><meta property="og:title" content="{escape(lesson['title'], quote=True)}"><meta property="og:description" content="{escape(lesson['description'], quote=True)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="{image}">
<script id="xueaiThemeBridge" src="theme-bridge.js?v=20260816k"></script>
<link rel="stylesheet" href="lesson.css?v=20260827a"><link rel="stylesheet" href="taste.css?v=20260810a"><link rel="stylesheet" href="seo.css?v=20260811a"><link rel="stylesheet" href="seo-course.css?v=20261018a"><link rel="stylesheet" href="lesson-dark-compat.css?v=20260816k">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False)}</script><noscript><style>.reveal{{opacity:1;transform:none}}</style></noscript></head>
<body><main class="lesson" data-seo-foundation="{lesson['order']}">
<nav class="sc-breadcrumb" aria-label="章节位置"><a href="seo-guide.html">SEO 与 GEO · 本章目录</a><span>基础 {lesson['order']} / 4</span><a href="seo-gallery.html">配图索引</a></nav>
<header class="lesson-header"><div class="kicker">先打地基 · {lesson['order']} / 4</div><h1>{escape(lesson['title'])}</h1><div class="subtitle sc-author-intro">{intro}</div><div class="chips"><span class="chip">基础知识</span><span class="chip">图文</span><span class="chip">可选练习</span></div><p class="sc-meta">黄啊码 · SEO 基础 · 整理 2026-10-18</p></header>
<aside class="sc-brief xa-tldr"><strong>一句话速览</strong><p>{escape(lesson['summary'])}</p></aside>
<details class="sc-outline"><summary>这一篇先搞懂哪些事</summary><ol>{''.join(toc)}</ol></details>
{''.join(sections)}{exercises(lesson)}<nav class="sc-next" aria-label="本章前后课件">{before}{after}</nav></main>
<script src="i18n.js?v=20260903a"></script><script src="lesson.js"></script><script src="taste.js?v=20260810a"></script><script src="nav-inject.js?v=20261018b"></script><script src="seo-course.js?v=20261018a"></script><script src="watermark.js?v=20260806c"></script><script src="paywall.js?v=20260903a"></script></body></html>'''
    (ROOT / lesson['file']).write_text(html)
    lesson['source_sha256'] = hashlib.sha256(raw.encode()).hexdigest()
    lesson['section_count'] = (len(chunks) - 1) // 2

(DOCS / 'foundation-lessons.json').write_text(json.dumps(DATA, ensure_ascii=False, indent=2) + '\n')

# Existing case prose and its source ranges remain intact; only add the route back to foundations.
for case in CASES['lessons']:
    path = ROOT / case['file']
    raw = path.read_text()
    raw = re.sub(r'(?<!案例)第 (\d+) / 14 讲', r'案例第 \1 / 14 讲', raw)
    raw = raw.replace('原文整理</span>', '案例实战</span>')
    raw = raw.replace(f'被搜到 · {case["order"]} / 14', f'案例实战 · {case["order"]} / 14')
    if case['order'] == 1:
        raw = raw.replace('<a href="seo-guide.html"><small>开始之前</small>查看本章目录与学习路径</a>', f'<a href="{Path(LESSONS[-1]["file"]).name}"><small>上一篇基础</small>{escape(LESSONS[-1]["title"])}</a>')
    raw = raw.replace('nav-inject.js?v=20261018a', 'nav-inject.js?v=20261018b')
    path.write_text(raw)

guide = SLIDES / 'seo-guide.html'
old = guide.read_text()
head = old.split('</head>')[0] + '</head>'
head = re.sub(r'<title>.*?</title>', '<title>被搜到：SEO 与 GEO · 4 篇基础与 14 讲案例</title>', head)
head = re.sub(r'<meta name="description"[^>]+>', '<meta name="description" content="先用四篇认识 TDK、站内优化、技术基础、内容和外链，再进入十四讲 SEO/GEO 案例实战。">', head)
approved = '用案例的方式聊从SEO到GEO的落地进程，抛开纯概念，在案例中穿插知识，让每个知识点的落地都有迹可循，每讲穿插相关配图，练习与检查工具可按需展开。'


def cards(lessons, prefix):
    return '<div class="sc-guide-grid">' + ''.join(f'<a class="sc-guide-card" href="{Path(l["file"]).name}"><small>{prefix} {l["order"]:02d}</small><h2>{escape(l["title"])}</h2><p>{escape(l["description"])}</p></a>' for l in lessons) + '</div>'


guide.write_text(head + f'''<body><main class="lesson"><header class="lesson-header"><div class="kicker">被搜到 · 基础与案例完整学习路径</div><h1>SEO 与 GEO：从被发现到被信任</h1><p class="subtitle">{approved}</p><div class="chips"><span class="chip">4 篇基础 + 14 讲案例</span><span class="chip">48 处正文配图</span><span class="chip">可选练习</span></div></header>
<aside class="sc-brief"><strong>怎样使用</strong><p>第一次接触 SEO，就从下面四篇基础开始：挂门牌、做装修、查基建、备好内容和外链。已经认识这些概念，可以直接跳到案例实战。案例保持原来的 14 讲顺序，每讲的练习与检查工具按需展开。</p></aside>
<section class="sc-section" id="foundations"><h2>先打地基 · 4 篇基础知识</h2><p>先把常用概念讲成人话，再带着它们走进案例。</p>{cards(LESSONS, '基础')}</section>
<section class="sc-section" id="cases"><h2>案例实战 · 14 讲落地过程</h2><p>从站点搜不到、内容没客户，一路拆到 GEO 的证据、评估和业务承接。</p>{cards(CASES['lessons'], '案例')}</section>
<div class="sc-sources"><p>课程原作：洛小山；内容与配图：黄啊码。<a href="seo-gallery.html">配图索引</a> · <a href="../docs/seo-geo/README.md">内容与维护说明</a> · <a href="learn.html#{Path(LESSONS[0]['file']).name}">在课程阅读器中学习</a></p></div></main><script src="lesson.js"></script></body></html>''')

gallery = SLIDES / 'seo-gallery.html'
raw = gallery.read_text()
raw = re.sub(r'<section class="sc-section" id="foundation-gallery">[\s\S]*?</section>', '', raw)
block = '<section class="sc-section" id="foundation-gallery"><h2>基础知识 · 新增小狗配图</h2><p>依据原有正文插画风格生成四张新图，小狗双眼睁开；每张只解释一个基础主题。</p><div class="sc-gallery-grid">' + ''.join(figure(l['figures'][0]) for l in LESSONS) + '</div></section>'
raw = raw.replace('</header>', '</header>' + block, 1)
raw = raw.replace('返回 14 讲目录', '返回基础与案例目录')
raw = raw.replace('按五篇来源整理 28 张有效配图，其中六张角色已统一为双眼睁开的黄啊码小狗。', '五篇来源保留 28 张素材，基础知识新增四张小狗配图。')
gallery.write_text(raw)

# Parse just the existing JSON-formatted p-seo block; other course sections are untouched.
course_path = SLIDES / 'course-data.js'
course = course_path.read_text()
start = re.search(r'^    \{\n\s+"id": "p-seo"', course, re.M).start()
end = course.index("    {\n      id: 'p8',", start)
part = json.loads(course[start:end].strip().rstrip(','))
part['topics'] = [t for t in part['topics'] if t['id'] != 't-seo-foundations']
part['topics'].insert(0, {'id': 't-seo-foundations', 'title': '先打地基：SEO 基础知识', 'desc': '从 TDK、站内装修和技术基建，认识内容、外链与 GEO。', 'routes': ['use', 'pro', 'pm', 'build'], 'lessons': [{'file': Path(l['file']).name, 'title': l['title'], 'desc': l['description'], 'tag': '基础', 'navTitle': l['nav_title']} for l in LESSONS]})
part['desc'] = '先用 4 篇基础认识 TDK、站内优化、技术基建、内容与外链，再用 14 讲案例聊 SEO 到 GEO 的落地过程。每讲穿插相关配图，练习与检查工具按需展开。'
replacement = '\n'.join('    ' + line for line in json.dumps(part, ensure_ascii=False, indent=2).splitlines()) + ',\n'
course_path.write_text(course[:start] + replacement + course[end:])

CASES['foundation_manifest'] = 'foundation-lessons.json'
CASES['learning_path'] = [l['file'] for l in LESSONS + CASES['lessons']]
CASES['counts'].update({'foundation_lessons': 4, 'total_lessons': 18, 'foundation_topics': sum(len(l['topics']) for l in LESSONS), 'active_images': len(ASSETS), 'new_foundation_images': 4, 'total_figure_placements': 48})
(DOCS / 'knowledge-map.json').write_text(json.dumps(CASES, ensure_ascii=False, indent=2) + '\n')
(DOCS / 'urls.txt').write_text('\n'.join(DOMAIN + '/' + p for p in CASES['learning_path']) + '\n')
print(json.dumps({'foundations': len(LESSONS), 'case_lessons': len(CASES['lessons']), 'foundation_topics': sum(len(l['topics']) for l in LESSONS), 'foundation_figures': sum(len(l['figures']) for l in LESSONS)}, ensure_ascii=False))
