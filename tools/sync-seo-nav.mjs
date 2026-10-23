// 从唯一课程数据源重建 SEO/GEO 导航段，其他篇章逐字保留。
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const slides = path.join(root, 'slides');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(slides, 'course-data.js'), 'utf8'), context);
const part = context.window.COURSE.parts.find(p => p.id === 'p-seo');
if (!part) throw new Error('Missing p-seo');
const entries = part.topics.flatMap(topic => topic.lessons.map(lesson => {
  if (!fs.existsSync(path.join(slides, lesson.file))) throw new Error('Missing lesson: ' + lesson.file);
  const item = { file: lesson.file, title: lesson.navTitle || lesson.title };
  const translated = ['en', 'ko'].filter(lang => fs.existsSync(path.join(slides, lesson.file.replace(/\.html$/, '.' + lang + '.html'))));
  if (translated.length) item.tr = translated.join(' ');
  const routes = topic.routes || part.routes || ['use', 'pro', 'pm', 'build'];
  if (routes.length !== 4) item.rt = routes.join(' ');
  return '  ' + JSON.stringify(item) + ',';
}));
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'docs/seo-geo/knowledge-map.json'), 'utf8'));
if (entries.length !== manifest.learning_path.length) throw new Error('SEO/GEO learning path count mismatch');
const target = path.join(slides, 'nav-inject.js');
const text = fs.readFileSync(target, 'utf8');
const block = '// SEO_GEO_ORDER_BEGIN — node tools/sync-seo-nav.mjs\n' + entries.join('\n') + '\n// SEO_GEO_ORDER_END';
let updated;
if (text.includes('// SEO_GEO_ORDER_BEGIN')) {
  updated = text.replace(/\/\/ SEO_GEO_ORDER_BEGIN[^\n]*\n[\s\S]*?\/\/ SEO_GEO_ORDER_END/, block);
} else {
  const old = /^  \{ file: 'seo-(?:1|2|3|4|5|final)\.html'.*\},\n/gm;
  const matches = [...text.matchAll(old)];
  if (matches.length !== 6) throw new Error('Expected original six-page SEO block');
  const start = matches[0].index;
  const end = matches.at(-1).index + matches.at(-1)[0].length;
  updated = text.slice(0, start) + block + '\n' + text.slice(end);
}
fs.writeFileSync(target, updated);
console.log('SEO/GEO navigation: ' + entries.length + ' entries synchronized.');
