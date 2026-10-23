# 四篇基础知识的编辑与维护

四篇基础知识来自用户在本轮会话提供的同一份 SEO 入门稿。保留“门牌、装修、水电、货架、吆喝”的讲法，以及极客数码、二手 iPhone、验机、电池、平台对比和价格这些例子。极客数码按教学假设标明，没有当作真实客户或商家背书。

正文源文件为本目录的四篇 Markdown；篇名、26 项基础索引、题目和工作单维护在 `../foundation-lessons.json`。这 26 项是基础课索引，与原 96 项案例知识点有重叠，不作为新增 26 项独立研究发现。

## 构建

在仓库根目录依次执行：

```sh
python3 tools/build-seo-foundations.py
node tools/sync-seo-nav.mjs
python3 tools/check-seo-geo.py
```

构建器生成四页基础课，更新目录、配图索引、课程注册与网址清单，并将案例第一讲的“上一篇”接到最后一篇基础。原 14 讲的正文来源范围及 96 处原文片段保留。维护其他课程部分时，不经过本脚本重写。

原来的十四讲外部草稿构建器属于最初整理阶段的工作文件，不是当前仓库的完整构建入口。后续直接维护仓库中四篇基础 Markdown 与现有案例 HTML；重建 SEO/GEO 导航使用同步工具。

## 技术口径修订

以下修订已写进正文，避免让新手把写作习惯和比喻背成平台硬规则。核对日期：2026-10-18。Google 的资料只用于解释其公开规则，不将其推导为百度或所有 AI 平台的共同规则。

- Title 没有公开的“占 80%”评分比例；25～30 字、Description 70～80 字保留为试写参考，实际展示按内容和宽度处理。标题、摘要都可能被重组。出处：[标题](https://developers.google.com/search/docs/appearance/title-link)、[摘要](https://developers.google.com/search/docs/appearance/snippet)。
- Description 不直接用作 Google 排名因素；没有“点击增加必然拉升排名”的承诺。出处：[Google 官方说明](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag)。
- Google 忽略 meta keywords；3～5 个词和英文逗号是旧系统字段的选填格式，不写成搜索排名要求。不替其他引擎估算权重。出处：[支持与忽略的 meta 标签](https://developers.google.com/search/docs/crawling-indexing/special-tags)。
- 一个清晰 H1 是本文的组织建议，多 H1 并非自动惩罚条件；网址带参数不等于不能索引，URL 层级和点击深度分开。出处：[SEO 入门指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)、[URL 结构](https://developers.google.com/search/docs/crawling-indexing/url-structure)。
- 图片可被结合视觉与上下文理解；alt 同时服务可访问性。内链帮助发现与继续阅读，不将停留时长写成直接排名兑换关系。
- “3 秒跑一半”不作为本课程实测。核心网页指标与真实用户样本分开记录；移动优先机制按 Google 的公开范围解释。出处：[Web Vitals](https://web.dev/articles/vitals)、[移动索引](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)。
- Sitemap 是发现线索而非收录保证；robots.txt 不是访问控制，noindex 必须能被读取。出处：[Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)、[robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)。
- Schema 标记与可见事实一致，不承诺富媒体、点击翻倍或 AI 引用。Google FAQ 富媒体已停止展示；其 AI 功能无额外专用 Schema 要求。出处：[结构化数据](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)、[功能更新](https://developers.google.com/search/updates)、[AI 功能](https://developers.google.com/search/docs/appearance/ai-features)。
- 长尾词不保证低竞争、收录或成交；E-E-A-T 不写成单一排名分数；外链不按“一条顶十万条”兑换。买卖、自动刷链接与付费关系按公开政策说明。出处：[SEO 入门指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)、[垃圾内容政策](https://developers.google.com/search/docs/essentials/spam-policies)。
- GEO 区分检索、训练知识、引用与推荐。清单、问答、数据和外部证据是组织材料的方法，不承诺模型天然认同或自动推荐。
- 原稿代码中的“国内领先”“36 道官方质检”“一年质保”“7 天无理由”等未经核实的承诺未作为真实商家能力发布；改为清楚标明教学假设的验机指南示例。

## 配图

内置 `image_gen` 生成四张新插画 F-01～F-04，以 A2-03 为同系列角色和画风参考，每张小狗双眼睁开。文件在 `slides/images/seo-geo/foundations/`，完整提示词、参考角色、尺寸和哈希见 `../image-manifest.json`。

每篇基础另复用一张与内容对应的原有图片，合计 8 处正文配图；全章 32 张素材、48 处正文配图。图片没有当作平台真实抓取、排名或推荐的测试证据。

四篇基础页面沿用仓库已有的登录阅读组件。当前本地作者预览单独展示完整内容，不代表改变线上权限或已更新 PR。
