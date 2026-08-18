/* ── 课程主题桥 ──────────────────────────────────────────────
   课程页可能独立打开，也可能装在 learn.html 的 iframe 里：
   1. 独立打开时读本机保存的主题；
   2. iframe 内由外壳通过 postMessage 实时同步；
   3. 同标签页的 storage 变化也同步。
   只操作 html[data-theme]，具体颜色全部由 lesson.css 的变量负责。 */
(function initCourseTheme(){
  var KEY = 'ai_course_theme';

  /* 新版课程页在 <head> 已同步加载 theme-bridge.js。优先交给它处理，
     下方代码仅保留给尚未迁移或离线缓存中的旧页面兜底。 */
  if(window.XueaiThemeBridge){
    try{ window.XueaiThemeBridge.apply(localStorage.getItem(KEY) || 'light'); }
    catch(e){ window.XueaiThemeBridge.apply('light'); }
    return;
  }

  /* 旧课页里仍有一批历史硬编码（#0066ff、white、#111 等）。
     不批量重写近千份 HTML：在 CSSOM 层把“骨架用途”的确定色值归一到变量，
     浅色外观基本不变，深色则自动换值。语义色和图片/SVG 不碰。 */
  function normalizeLegacyPalette(){
    var root = document.documentElement;
    if(root.hasAttribute('data-xueai-palette-normalized')) return;
    root.setAttribute('data-xueai-palette-normalized', '');

    function normalizeProperty(style, prop){
      if(!style || !prop || prop.indexOf('--') === 0) return;
      var value = style.getPropertyValue(prop);
      if(!value) return;
      var next = value;

      /* 历史主题蓝：十六进制、rgb、rgba 都从当前主题主色派生。 */
      next = next.replace(/#0066ff/gi, 'var(--accent)');
      next = next.replace(/rgb\\(\\s*0\\s*,\\s*102\\s*,\\s*255\\s*\\)/gi, 'var(--accent)');
      next = next.replace(
        /rgba\\(\\s*0\\s*,\\s*102\\s*,\\s*255\\s*,\\s*([\\d.]+)\\s*\\)/gi,
        function(_, alpha){
          return 'color-mix(in srgb, var(--accent) ' +
            Math.round(Math.max(0, Math.min(1, Number(alpha))) * 100) +
            '%, transparent)';
        }
      );

      /* 只归一“背景属性”里的白/米白，绝不改白色文字和图标。 */
      if(prop === 'background' || prop === 'background-color'){
        next = next
          .replace(/#ffffff(?![\\da-f])/gi, 'var(--card)')
          .replace(/#fff(?![\\da-f])/gi, 'var(--card)')
          .replace(/\\bwhite\\b/gi, 'var(--card)')
          .replace(/#f7f5f0(?![\\da-f])/gi, 'var(--bg)')
          .replace(/#f8f9fa(?![\\da-f])/gi, 'var(--bg-dim)');
      }

      /* 只处理“整个值就是深色”的文字；图表描边、阴影等保持原语义。 */
      if(prop === 'color' &&
         /^(?:#1c1c1e|#111827|#111111|#111|#000000|#000|rgb\\(\\s*(?:0\\s*,\\s*0\\s*,\\s*0|17\\s*,\\s*17\\s*,\\s*17|28\\s*,\\s*28\\s*,\\s*30)\\s*\\))$/i.test(next.trim())){
        next = 'var(--text)';
      }

      if(next !== value){
        style.setProperty(prop, next, style.getPropertyPriority(prop));
      }
    }

    function walkRules(rules){
      if(!rules) return;
      for(var i = 0; i < rules.length; i++){
        var rule = rules[i];
        if(rule.style){
          for(var j = rule.style.length - 1; j >= 0; j--){
            normalizeProperty(rule.style, rule.style[j]);
          }
        }
        try{ if(rule.cssRules) walkRules(rule.cssRules); }catch(e){}
      }
    }

    for(var i = 0; i < document.styleSheets.length; i++){
      try{ walkRules(document.styleSheets[i].cssRules); }catch(e){}
    }
    document.querySelectorAll('[style]').forEach(function(el){
      for(var i = el.style.length - 1; i >= 0; i--){
        normalizeProperty(el.style, el.style[i]);
      }
    });
  }

  function ensureLegacyVariables(){
    if(document.getElementById('xueaiThemeLegacyVars')) return;
    var style = document.createElement('style');
    style.id = 'xueaiThemeLegacyVars';
    style.textContent =
      ':root[data-theme="light"]{--accent:#146b54;}' +
      ':root[data-theme="dark"]{' +
        '--bg-color:#101512;--card-bg:#171d19;--surface:#171d19;--surface2:#1b221e;' +
        '--text-main:#e9ece9;--text-sub:#a3ada8;--accent:#5cb595;' +
      '}';
    document.head.appendChild(style);
  }

  function applyTheme(value){
    var theme = value === 'dark' ? 'dark' : 'light';
    ensureLegacyVariables();
    document.documentElement.setAttribute('data-theme', theme);
    normalizeLegacyPalette();
    try{
      window.dispatchEvent(new CustomEvent('xueai-themechange', {
        detail: {theme: theme}
      }));
    }catch(e){}
  }

  try{ applyTheme(localStorage.getItem(KEY) || 'light'); }
  catch(e){ applyTheme('light'); }

  window.addEventListener('message', function(e){
    if(e.origin !== location.origin) return;
    var data = e.data;
    if(!data || data.type !== 'xueai-theme') return;
    applyTheme(data.theme);
  });

  window.addEventListener('storage', function(e){
    if(e.key === KEY) applyTheme(e.newValue);
  });
})();

// ── SLIDE_ORDER 由 ops/gen-nav-order.py 从 course-data.js 生成，请勿手改 ──
const SLIDE_ORDER = [
  { file: 'llm-story.html',                  title: '完整目录', tr: 'en ko' },
  { file: 'roadmap.html',                    title: '选学习路线' },
  { file: '0-intro.html',                    title: '我们在哪里', tr: 'en ko' },
  { file: '0-how.html',                      title: '怎样学才有效', tr: 'en ko' },
  { file: '0-why.html',                      title: '为什么要打基础', tr: 'en ko' },
  { file: 'zero-0.html',                     title: 'AI 能干哪些神奇的活', tr: 'en ko' },
  { file: 'zero-1.html',                     title: '它其实在玩「接话茬」', tr: 'en ko' },
  { file: 'zero-2.html',                     title: '它不是搜索引擎', tr: 'en ko' },
  { file: 'zero-3.html',                     title: '它会一本正经地胡说', tr: 'en ko' },
  { file: 'zero-4.html',                     title: '把它当不了解你的新同事', tr: 'en ko' },
  { file: 'zero-5.html',                     title: '万能开场白：先问我', tr: 'en ko' },
  { file: 'zero-q-prompt.html',              title: '提示词到底怎么写才好', tr: 'en ko' },
  { file: 'zero-q-prompt-engineering.html',  title: '提示词工程有什么意义', tr: 'en ko' },
  { file: 'zero-q-model-agent-app.html',     title: '模型、Agent、应用的关系', tr: 'en ko' },
  { file: 'zero-q-agent.html',               title: 'Agent 到底强在哪', tr: 'en ko' },
  { file: 'zero-q-skill.html',               title: '最近很火的 Skill 是什么', tr: 'en ko' },
  { file: 'zero-q-vibe-coding.html',         title: 'Vibe Coding 是什么', tr: 'en ko' },
  { file: 'zero-q-china-models.html',        title: '国产大模型怎么选', tr: 'en ko' },
  { file: 'zero-q-companies.html',           title: '还有哪些重要的 AI 公司', tr: 'en ko' },
  { file: 'zero-q-token.html',               title: 'Token 是什么', tr: 'en ko' },
  { file: 'zero-q-context-window.html',      title: '为什么聊久了会忘事', tr: 'en ko' },
  { file: 'zero-q-reasoning.html',           title: '推理模型是什么', tr: 'en ko' },
  { file: 'zero-q-parameters.html',          title: '参数越多越聪明吗', tr: 'en ko' },
  { file: 'zero-q-multimodal.html',          title: '为什么有的 AI 看不懂图', tr: 'en ko' },
  { file: 'zero-q-finetune-vs-rag.html',     title: '微调和喂资料的区别', tr: 'en ko' },
  { file: 'zero-q-knowledge-base.html',      title: '企业知识库是什么', tr: 'en ko' },
  { file: 'zero-q-acronyms.html',            title: 'AI 缩写怎么分', tr: 'en ko' },
  { file: 'zero-q-nvidia-gpu.html',          title: '英伟达为什么值钱', tr: 'en ko' },
  { file: 'zero-q-train-or-prompt.html',     title: '训模型还是改提示词', tr: 'en ko' },
  { file: 'zero-q-jargon-translator.html',   title: 'AI 圈黑话翻译器', tr: 'en ko' },
  { file: 'zero-q-opensource-free.html',     title: '开源模型等于免费吗', tr: 'en ko' },
  { file: 'zero-q-benchmark.html',           title: '跑分第一为什么不行', tr: 'en ko' },
  { file: 'zero-q-ai-learning.html',         title: 'AI 是在学习吗', tr: 'en ko' },
  { file: 'zero-q-ai-detector.html',         title: 'AI 检测器可信吗', tr: 'en ko' },
  { file: 'zero-q-prompt-course.html',       title: '提示词秘籍值得买吗', tr: 'en ko' },
  { file: 'zero-q-randomness.html',          title: '为什么每次答案不一样', tr: 'en ko' },
  { file: 'zero-q-ai-customer-service.html', title: 'AI 客服为什么蠢', tr: 'en ko' },
  { file: 'zero-q-siri-vs-chatgpt.html',     title: 'Siri 和 ChatGPT 的区别', tr: 'en ko' },
  { file: 'zero-q-free-vs-paid.html',        title: '免费的 AI 够用吗', tr: 'en ko' },
  { file: 'zero-q-api-vs-membership.html',   title: 'API 和会员的区别', tr: 'en ko' },
  { file: 'zero-q-image-cost.html',          title: '生成一张图为什么贵', tr: 'en ko' },
  { file: 'zero-q-video-cost.html',          title: 'AI 视频为什么按秒收费', tr: 'en ko' },
  { file: 'zero-q-relay.html',               title: '什么是 API 中转站', tr: 'en ko' },
  { file: 'zero-q-reverse-proxy.html',       title: '拼车号、共享号是什么', tr: 'en ko' },
  { file: 'zero-q-privacy.html',             title: '聊天记录会被拿去训练吗', tr: 'en ko' },
  { file: 'zero-6.html',                     title: '放心用，还是要核实', tr: 'en ko' },
  { file: 'zero-final.html',                 title: '你的下一步', tr: 'en ko' },
  { file: 'training-data.html',              title: '训练数据规模', tr: 'en ko' },
  { file: 'train-vs-infer.html',             title: '训练 vs 推理', tr: 'en ko' },
  { file: '1-2-vocab.html',                  title: '词表与训练', tr: 'en ko' },
  { file: '1-2-base.html',                   title: 'Base 模型', tr: 'en ko' },
  { file: '1-2-gpt.html',                    title: 'GPT 的跃进', tr: 'en ko' },
  { file: '1-2-api.html',                    title: 'chat/completions 之谜', tr: 'en ko' },
  { file: '1-2-fake-chat.html',              title: '伪造聊天记录', tr: 'en ko' },
  { file: '1-2-sft.html',                    title: 'Chat Template + SFT', tr: 'en ko' },
  { file: '1-2-prompt-power.html',           title: '上下文窗口是关键', tr: 'en ko' },
  { file: '1-2-hallucination.html',          title: '大模型幻觉', tr: 'en ko' },
  { file: '1-2-mitigation-prompt.html',      title: 'Prompt Engineering', tr: 'en ko' },
  { file: '1-2-mitigation-rag.html',         title: 'RAG 检索增强', tr: 'en ko' },
  { file: 'rag-advanced.html',               title: 'RAG 代价与优化', tr: 'en ko' },
  { file: '1-2-mitigation-temp.html',        title: 'Temperature & Top-P', tr: 'en ko' },
  { file: '1-2-mitigation-eval.html',        title: '评测 + 人工审核', tr: 'en ko' },
  { file: 'summary-1.html',                  title: '大模型原理篇汇总（上）', tr: 'en ko' },
  { file: 'summary-1b.html',                 title: '大模型原理篇汇总（下）', tr: 'en ko' },
  { file: 'build-1.html',                    title: '把那件事定下来', tr: 'en ko' },
  { file: 'interview-1.html',                title: '他们会这样考你 · 30 问', tr: 'en ko' },
  { file: '5-1.html',                        title: '上下文窗口', tr: 'en ko' },
  { file: '5-2.html',                        title: '上下文溢出策略', tr: 'en ko' },
  { file: '6-0a.html',                       title: '为什么选 Markdown', tr: 'en ko' },
  { file: '6-0b.html',                       title: 'MD 语法与工程渲染', tr: 'en ko' },
  { file: '6-1.html',                        title: 'Prompt 角色扮演', tr: 'en ko' },
  { file: '6-2.html',                        title: 'Prompt 进阶技巧', tr: 'en ko' },
  { file: '6-3.html',                        title: '输出格式取舍', tr: 'en ko' },
  { file: '6-4.html',                        title: '流式返回与格式', tr: 'en ko' },
  { file: 'prompt-attack.html',              title: 'Prompt 注入原理', tr: 'en ko' },
  { file: 'prompt-attack-cases.html',        title: '12 个攻击案例', tr: 'en ko' },
  { file: 'prompt-defense.html',             title: 'Prompt 防御实战', tr: 'en ko' },
  { file: 'ai-safety-redlines.html',         title: 'AI 安全红线', tr: 'en ko' },
  { file: 'ai-safety-governance.html',       title: '风险分级与责任', tr: 'en ko' },
  { file: '7-1.html',                        title: 'Agent 概念', tr: 'en ko' },
  { file: '7-2.html',                        title: '工具调用', tr: 'en ko' },
  { file: '7-2a.html',                       title: '一次对话背后的5条消息', tr: 'en ko' },
  { file: '7-2b.html',                       title: '工具描述的学问', tr: 'en ko' },
  { file: '7-2c.html',                       title: '多工具编排', tr: 'en ko' },
  { file: '7-2d.html',                       title: 'MCP 协议', tr: 'en ko' },
  { file: '7-3.html',                        title: 'ReAct 实战', tr: 'en ko' },
  { file: '7-3a.html',                       title: '上下文窗口', tr: 'en ko' },
  { file: '7-3b.html',                       title: '上下文压缩四层策略', tr: 'en ko' },
  { file: '7-3c.html',                       title: '长期记忆', tr: 'en ko' },
  { file: '7-4a.html',                       title: 'ReAct 循环', tr: 'en ko' },
  { file: '7-4b.html',                       title: 'Agent 卡死的5种模式', tr: 'en ko' },
  { file: '7-4c.html',                       title: '权限与安全', tr: 'en ko' },
  { file: '7-5.html',                        title: 'Skill 技能', tr: 'en ko' },
  { file: '7-5a.html',                       title: 'Skill 的本质', tr: 'en ko' },
  { file: '7-5b.html',                       title: '解剖一个真实 Skill', tr: 'en ko' },
  { file: '7-4.html',                        title: '脚手架工程', tr: 'en ko' },
  { file: '7-6a.html',                       title: '5道工程护栏', tr: 'en ko' },
  { file: '7-6b.html',                       title: '多 Agent 协作', tr: 'en ko' },
  { file: '7-6c.html',                       title: '可观测性', tr: 'en ko' },
  { file: '7-summary.html',                  title: 'Agent 工程全景图', tr: 'en ko' },
  { file: 'vector-db-1.html',                title: '从 Embedding 到 Milvus', tr: 'en ko' },
  { file: 'vector-db-2.html',                title: 'Milvus 心智模型', tr: 'en ko' },
  { file: 'vector-db-3.html',                title: 'Milvus 实操', tr: 'en ko' },
  { file: 'vector-db-4.html',                title: '从检索到 RAG', tr: 'en ko' },
  { file: 'vector-db-5.html',                title: 'Agent 知识库工具', tr: 'en ko' },
  { file: '8-1.html',                        title: '多轮对话成本', tr: 'en ko' },
  { file: '8-2.html',                        title: 'KV Cache', tr: 'en ko' },
  { file: '8-2b.html',                       title: '显式缓存', tr: 'en ko' },
  { file: '8-3.html',                        title: '动态时间戳', tr: 'en ko' },
  { file: '8-4.html',                        title: '综合成本优化', tr: 'en ko' },
  { file: '8-5.html',                        title: '图片 Token 计费', tr: 'en ko' },
  { file: '8-5b.html',                       title: '按任务匹配分辨率', tr: 'en ko' },
  { file: '8-6.html',                        title: '语法层优化', tr: 'en ko' },
  { file: '8-7.html',                        title: '语义层优化', tr: 'en ko' },
  { file: '8-8.html',                        title: '输出层+KV进阶', tr: 'en ko' },
  { file: 'cost-eval.html',                  title: '模型选型：能力 vs 成本', tr: 'en ko' },
  { file: 'engineering-philosophy.html',     title: '大道至简', tr: 'en ko' },
  { file: 'ai-tips-boundary.html',           title: '人机知识边界', tr: 'en ko' },
  { file: 'ai-tips-context.html',            title: '好提问 vs 坏提问', tr: 'en ko' },
  { file: 'ai-tips-verify.html',             title: 'AI 说的能信吗', tr: 'en ko' },
  { file: 'ai-tips-iterate.html',            title: '迭代的艺术', tr: 'en ko' },
  { file: 'ai-tips-scenarios.html',          title: '场景速查', tr: 'en ko' },
  { file: 'summary-2.html',                  title: 'Harness 核心篇汇总（上）', tr: 'en ko' },
  { file: 'summary-2b.html',                 title: 'Harness 核心篇汇总（下）', tr: 'en ko' },
  { file: 'summary-final.html',              title: '课程总结', tr: 'en ko' },
  { file: 'summary-final-1.html',            title: '总结（上）', tr: 'en ko' },
  { file: 'summary-final-2.html',            title: '总结（下）', tr: 'en ko' },
  { file: 'build-2.html',                    title: '让它连跑五次都能用', tr: 'en ko' },
  { file: 'interview-2.html',                title: '他们会这样考你 · 30 问', tr: 'en ko' },
  { file: '9-0.html',                        title: 'Alice 开发实录', tr: 'en ko' },
  { file: '9-1.html',                        title: '文生图 vs 垫图', tr: 'en ko' },
  { file: '9-2.html',                        title: '用 AI 给 AI 写 Prompt', tr: 'en ko' },
  { file: '9-3.html',                        title: '角色一致性', tr: 'en ko' },
  { file: '9-4.html',                        title: '模型会挂，然后呢', tr: 'en ko' },
  { file: '9-5.html',                        title: '生图产品化清单', tr: 'en ko' },
  { file: '9-6.html',                        title: '教科书 vs 真实 N 步', tr: 'en ko' },
  { file: '9-7.html',                        title: 'Agent 为什么会卡死', tr: 'en ko' },
  { file: '9-8.html',                        title: '防呆设计', tr: 'en ko' },
  { file: '9-9.html',                        title: '流式体验', tr: 'en ko' },
  { file: '9-10.html',                       title: '一条消息的真实成本', tr: 'en ko' },
  { file: '9-11.html',                       title: '越长越贵越笨', tr: 'en ko' },
  { file: '9-12.html',                       title: '压缩的艺术', tr: 'en ko' },
  { file: '9-13.html',                       title: '用户的话能删吗', tr: 'en ko' },
  { file: '9-14.html',                       title: '本地 vs LLM 压缩', tr: 'en ko' },
  { file: '9-15.html',                       title: '上下文 ≠ 记忆', tr: 'en ko' },
  { file: '9-16.html',                       title: '什么值得记', tr: 'en ko' },
  { file: '9-17.html',                       title: '记忆冲突', tr: 'en ko' },
  { file: '9-18.html',                       title: '记忆注入的成本', tr: 'en ko' },
  { file: '9-19.html',                       title: 'System Prompt 分层', tr: 'en ko' },
  { file: '9-20.html',                       title: '按需加载', tr: 'en ko' },
  { file: '9-21.html',                       title: 'Skill 模块化', tr: 'en ko' },
  { file: '9-22.html',                       title: '提示词与缓存', tr: 'en ko' },
  { file: '9-23.html',                       title: '何时需要多 Agent', tr: 'en ko' },
  { file: '9-24.html',                       title: '并发的代价', tr: 'en ko' },
  { file: '9-25.html',                       title: '脑暴模式', tr: 'en ko' },
  { file: '9-26.html',                       title: '定时任务成本', tr: 'en ko' },
  { file: '9-27.html',                       title: 'AI 的自由度', tr: 'en ko' },
  { file: '9-28.html',                       title: '弹窗与安全平衡', tr: 'en ko' },
  { file: '9-29.html',                       title: '可观测性', tr: 'en ko' },
  { file: '9-30.html',                       title: 'MCP 双向协议', tr: 'en ko' },
  { file: '9-31.html',                       title: '懒连接', tr: 'en ko' },
  { file: '9-32.html',                       title: 'AI 自加工具', tr: 'en ko' },
  { file: '9-summary.html',                  title: '实战全景图', tr: 'en ko' },
  { file: '9-final.html',                    title: '聊天套壳 vs Agent 产品', tr: 'en ko' },
  { file: 'build-3.html',                    title: '接上第一个真工具', tr: 'en ko' },
  { file: 'interview-3.html',                title: '他们会这样考你 · 30 问', tr: 'en ko' },
  { file: '10-1.html',                       title: 'Workflow vs Agent', tr: 'en ko' },
  { file: '10-2.html',                       title: '五种 Workflow 模式', tr: 'en ko' },
  { file: '10-3.html',                       title: '上下文工程方法论', tr: 'en ko' },
  { file: '10-4.html',                       title: '上下文三板斧', tr: 'en ko' },
  { file: '10-5.html',                       title: 'ACI 工具界面设计', tr: 'en ko' },
  { file: '10-6.html',                       title: 'Think Tool', tr: 'en ko' },
  { file: '10-7.html',                       title: '用 Agent 优化工具', tr: 'en ko' },
  { file: '10-8.html',                       title: '评测方法论', tr: 'en ko' },
  { file: '10-9.html',                       title: '三种 Grader', tr: 'en ko' },
  { file: '10-10.html',                      title: '评测的坑', tr: 'en ko' },
  { file: '10-11.html',                      title: '长任务失败模式', tr: 'en ko' },
  { file: '10-12.html',                      title: '双角色 Harness', tr: 'en ko' },
  { file: '10-13.html',                      title: 'Managed Agent', tr: 'en ko' },
  { file: '10-14.html',                      title: 'Session vs Context', tr: 'en ko' },
  { file: '10-15.html',                      title: '三类安全风险', tr: 'en ko' },
  { file: '10-16.html',                      title: '沙箱与凭证隔离', tr: 'en ko' },
  { file: '10-17.html',                      title: 'Contextual Retrieval', tr: 'en ko' },
  { file: '10-summary.html',                 title: '进阶全景图', tr: 'en ko' },
  { file: '10-final.html',                   title: 'Do the simplest thing', tr: 'en ko' },
  { file: 'build-4.html',                    title: '搭你的第一个评测集', tr: 'en ko' },
  { file: 'interview-4.html',                title: '他们会这样考你 · 30 问', tr: 'en ko' },
  { file: '11-1.html',                       title: '从脚手架到自我改进', tr: 'en ko' },
  { file: '11-2.html',                       title: 'Harness 三大设计模式', tr: 'en ko' },
  { file: '11-3.html',                       title: '上下文工程自动进化', tr: 'en ko' },
  { file: '11-4.html',                       title: '工作流自动搜索', tr: 'en ko' },
  { file: '11-5.html',                       title: '让 Harness 改进自己', tr: 'en ko' },
  { file: '11-6.html',                       title: '进化搜索', tr: 'en ko' },
  { file: '11-7.html',                       title: '未来挑战七道关', tr: 'en ko' },
  { file: 'build-5.html',                    title: '立三条长跑规矩', tr: 'en ko' },
  { file: 'interview-5.html',                title: '他们会这样考你 · 30 问', tr: 'en ko' },
  { file: 'vibe-1.html',                     title: '为什么要给 AI 立规矩', tr: 'en ko' },
  { file: 'vibe-2.html',                     title: '四步流程', tr: 'en ko' },
  { file: 'vibe-3.html',                     title: 'PlayGround 试衣间', tr: 'en ko' },
  { file: 'vibe-3b.html',                    title: '样式收敛', tr: 'en ko' },
  { file: 'vibe-4.html',                     title: '注释三要素与代码保护', tr: 'en ko' },
  { file: 'vibe-5.html',                     title: '调试铁律', tr: 'en ko' },
  { file: 'vibe-6.html',                     title: '不接受分期交付', tr: 'en ko' },
  { file: 'vibe-7.html',                     title: '三份文档与方法论沉淀', tr: 'en ko' },
  { file: 'vibe-8.html',                     title: '把环境事实写进 Rule', tr: 'en ko' },
  { file: 'vibe-9.html',                     title: '破坏性操作的三道闸', tr: 'en ko' },
  { file: 'vibe-10.html',                    title: '长对话锚定与写作规范', tr: 'en ko' },
  { file: 'vibe-final.html',                 title: '规则的价值', tr: 'en ko' },
  { file: 'build-6.html',                    title: '沉淀你自己的协作规范', tr: 'en ko' },
  { file: 'interview-7.html',                title: '他们会这样考你 · 30 问', tr: 'en ko' },
  { file: 'taste-1.html',                    title: '判断力开始涨价', tr: 'en ko' },
  { file: 'taste-2.html',                    title: 'AI 味儿从哪来', tr: 'en ko' },
  { file: 'taste-3.html',                    title: '层级：唯一主角', tr: 'en ko' },
  { file: 'taste-4.html',                    title: '留白与对齐', tr: 'en ko' },
  { file: 'taste-5.html',                    title: '克制：做预算', tr: 'en ko' },
  { file: 'taste-6.html',                    title: '一致性与系统感', tr: 'en ko' },
  { file: 'taste-7.html',                    title: '审美词汇表', tr: 'en ko' },
  { file: 'taste-8.html',                    title: '生 UI 提示词', tr: 'en ko' },
  { file: 'taste-9.html',                    title: '生图三件套', tr: 'en ko' },
  { file: 'taste-10.html',                   title: '把设计看进去', tr: 'en ko' },
  { file: 'taste-11.html',                   title: '把参考喂给 AI', tr: 'en ko' },
  { file: 'taste-final.html',                title: '审美验收清单', tr: 'en ko' },
  { file: 'ixd-1.html',                      title: '能跑通不等于好用', tr: 'en ko' },
  { file: 'ixd-2.html',                      title: '状态三件套', tr: 'en ko' },
  { file: 'ixd-3.html',                      title: '防错与可逆', tr: 'en ko' },
  { file: 'ixd-4.html',                      title: '流程克制', tr: 'en ko' },
  { file: 'ixd-5.html',                      title: '习惯用法与能供性', tr: 'en ko' },
  { file: 'ixd-6.html',                      title: '控件怎么选', tr: 'en ko' },
  { file: 'ixd-7.html',                      title: '界面文案', tr: 'en ko' },
  { file: 'ixd-8.html',                      title: '目标导向提需求', tr: 'en ko' },
  { file: 'ixd-9.html',                      title: '状态机写进提示词', tr: 'en ko' },
  { file: 'ixd-final.html',                  title: '交互验收清单', tr: 'en ko' },
  { file: 'psy-1.html',                      title: '感知性能 ≠ 真实性能' },
  { file: 'psy-2.html',                      title: '等待心理学三定律' },
  { file: 'psy-3.html',                      title: '劳动错觉' },
  { file: 'psy-4.html',                      title: '峰终定律' },
  { file: 'psy-5.html',                      title: '信任校准' },
  { file: 'psy-9.html',                      title: '算法厌恶' },
  { file: 'psy-6.html',                      title: '防御心理三板斧' },
  { file: 'psy-7.html',                      title: '心智模型错配' },
  { file: 'psy-8.html',                      title: '拟人化与道歉' },
  { file: 'psy-10.html',                     title: '蜜月悬崖' },
  { file: 'psy-11.html',                     title: 'AI 标签折扣' },
  { file: 'psy-12.html',                     title: '认知卸载' },
  { file: 'psy-13.html',                     title: '情感依恋' },
  { file: 'psy-14.html',                     title: '付费心理' },
  { file: 'psy-15.html',                     title: '定价心理' },
  { file: 'psy-16.html',                     title: '反馈心理' },
  { file: 'psy-books.html',                  title: 'PM 心理学书单' },
  { file: 'psy-final.html',                  title: '心理学篇收官' },
  { file: 'psy-interview.html',              title: '他们会这样考你 · 40 问' },
  { file: 'cost-1.html',                     title: '和用户对赌的生意' },
  { file: 'cost-2.html',                     title: 'BPE 与 Token 税' },
  { file: 'cost-3.html',                     title: '报价表与三大梯队' },
  { file: 'cost-4.html',                     title: '200 Token 断崖' },
  { file: 'cost-5.html',                     title: '32k 红线' },
  { file: 'cost-6.html',                     title: '图片 Token' },
  { file: 'cost-7.html',                     title: '输入主导的 Agent' },
  { file: 'cost-8.html',                     title: 'Agent 四大陷阱' },
  { file: 'cost-9.html',                     title: '语法层：词法税' },
  { file: 'cost-10.html',                    title: '语义层：双重蒸馏' },
  { file: 'cost-11.html',                    title: '架构层：KV Cache' },
  { file: 'cost-12.html',                    title: '输出层：管住嘴' },
  { file: 'cost-final.html',                 title: '算力极简主义' },
  { file: 'ds-1.html',                       title: '为什么还要懂数据结构' },
  { file: 'ds-2.html',                       title: '数组与 message list' },
  { file: 'ds-3.html',                       title: '栈：撤销与调用' },
  { file: 'ds-4.html',                       title: '队列与任务调度' },
  { file: 'ds-5.html',                       title: '哈希表' },
  { file: 'ds-6.html',                       title: '缓存与 KV Cache' },
  { file: 'ds-7.html',                       title: '树与 AST' },
  { file: 'ds-8.html',                       title: '图与 DAG' },
  { file: 'ds-9.html',                       title: '词表与 Trie' },
  { file: 'ds-10.html',                      title: '向量与近邻搜索' },
  { file: 'ds-summary.html',                 title: '数据结构篇汇总' },
  { file: 'ds-build.html',                   title: '实战：验收 AI 的代码' },
  { file: 'ds-interview.html',               title: '他们会这样考你 · 30 问' },
  { file: 'algo-1.html',                     title: 'Big-O 复杂度直觉' },
  { file: 'algo-2.html',                     title: '注意力的 O(n²) 账单' },
  { file: 'algo-3.html',                     title: '二分查找' },
  { file: 'algo-4.html',                     title: '排序算法赛跑' },
  { file: 'algo-5.html',                     title: 'Rerank 重排序' },
  { file: 'algo-6.html',                     title: '递归' },
  { file: 'algo-7.html',                     title: '分治与递归摘要' },
  { file: 'algo-8.html',                     title: 'BFS 与 DFS' },
  { file: 'algo-9.html',                     title: '贪心与采样' },
  { file: 'algo-10.html',                    title: 'Beam Search' },
  { file: 'algo-11.html',                    title: '还要刷 LeetCode 吗' },
  { file: 'algo-12.html',                    title: '用 AI 学算法' },
  { file: 'algo-summary.html',               title: '算法篇汇总' },
  { file: 'algo-build.html',                 title: '实战：复杂度体检' },
  { file: 'algo-interview.html',             title: '他们会这样考你 · 30 问' },
  { file: '12-1.html',                       title: '79 个 Workspace 成员', tr: 'en ko' },
  { file: '12-2.html',                       title: 'Rust 技术选型', tr: 'en ko' },
  { file: '12-3.html',                       title: '从 main() 到首轮采样', tr: 'en ko' },
  { file: '12-4.html',                       title: 'Session Actor', tr: 'en ko' },
  { file: '12-5.html',                       title: 'Compaction 阈值', tr: 'en ko' },
  { file: '12-6.html',                       title: 'PromptContext', tr: 'en ko' },
  { file: '12-7.html',                       title: 'Toolset 注册表', tr: 'en ko' },
  { file: '12-8.html',                       title: 'ToolKind 只读语义', tr: 'en ko' },
  { file: '12-9.html',                       title: '实现族与动态 MCP', tr: 'en ko' },
  { file: '12-10.html',                      title: 'Canonical input', tr: 'en ko' },
  { file: '12-11.html',                      title: 'Token 估算与阈值', tr: 'en ko' },
  { file: '12-12.html',                      title: '混合检索排序', tr: 'en ko' },
  { file: '12-13.html',                      title: 'Dream 机制', tr: 'en ko' },
  { file: '12-14.html',                      title: 'Agent 与 Persona 合并', tr: 'en ko' },
  { file: '12-15.html',                      title: '子 Agent 隔离维度', tr: 'en ko' },
  { file: '12-16.html',                      title: '多 Agent 组织方式', tr: 'en ko' },
  { file: '12-17.html',                      title: '五种沙箱 Profile', tr: 'en ko' },
  { file: '12-18.html',                      title: '工具授权链', tr: 'en ko' },
  { file: '12-19.html',                      title: 'Hooks 阻断语义', tr: 'en ko' },
  { file: '12-20.html',                      title: 'MCP 连接与恢复', tr: 'en ko' },
  { file: '12-21.html',                      title: 'Marketplace 信任', tr: 'en ko' },
  { file: '12-22.html',                      title: 'Grok vs Claude 对照', tr: 'en ko' },
  { file: '12-23.html',                      title: '工程复盘与边界', tr: 'en ko' },
  { file: '12-24.html',                      title: '设计工作台', tr: 'en ko' },
  { file: 'interview-6.html',                title: '他们会这样考你 · 30 问', tr: 'en ko' },
  { file: 'dsh-1.html',                      title: '一切皆插件' },
  { file: 'dsh-6.html',                      title: 'Profile 与 Bundle' },
  { file: 'dsh-2.html',                      title: '日志重建不变量' },
  { file: 'dsh-3.html',                      title: '双队列 Inbox' },
  { file: 'dsh-7.html',                      title: '取消与崩溃恢复' },
  { file: 'dsh-8.html',                      title: 'Goal 与溯源鉴权' },
  { file: 'dsh-4.html',                      title: 'Compaction 双路径' },
  { file: 'dsh-9.html',                      title: 'Token 计量' },
  { file: 'dsh-10.html',                     title: 'Spill 落盘' },
  { file: 'dsh-11.html',                     title: '会话检索' },
  { file: 'dsh-12.html',                     title: '工具流水线' },
  { file: 'dsh-13.html',                     title: 'render intent' },
  { file: 'dsh-14.html',                     title: '先读后写' },
  { file: 'dsh-17.html',                     title: '独有工具面' },
  { file: 'dsh-15.html',                     title: '审批与权限预设' },
  { file: 'dsh-16.html',                     title: '执行世界' },
  { file: 'dsh-5.html',                      title: 'Code Mode 沙箱' },
  { file: 'dsh-18.html',                     title: 'Subagent seam' },
  { file: 'dsh-19.html',                     title: '编排原语' },
  { file: 'dsh-20.html',                     title: 'Skill 与自我修改' },
  { file: 'dsh-21.html',                     title: 'MCP 与扩展' },
  { file: 'dsh-22.html',                     title: 'LLM 适配层' },
  { file: 'dsh-26.html',                     title: '测试基础设施' },
  { file: 'dsh-23.html',                     title: '持久化治理' },
  { file: 'dsh-24.html',                     title: '凭据与存储' },
  { file: 'dsh-25.html',                     title: '多入口' },
  { file: 'dsh-27.html',                     title: 'Agent Notes' },
  { file: 'dsh-28.html',                     title: 'KV Cache 纪律' },
  { file: 'dsh-29.html',                     title: '终章 · 该抄什么' },
  { file: 'oss-1.html',                      title: '权重是什么', tr: 'en ko' },
  { file: 'oss-2.html',                      title: '真开源 vs 假开源', tr: 'en ko' },
  { file: 'oss-3.html',                      title: '开源是一门生意', tr: 'en ko' },
  { file: 'oss-4.html',                      title: '涌现', tr: 'en ko' },
  { file: 'oss-5.html',                      title: '为什么要把模型做小', tr: 'en ko' },
  { file: 'oss-6.html',                      title: '蒸馏是怎么做的', tr: 'en ko' },
  { file: 'oss-7.html',                      title: '蒸馏的代价', tr: 'en ko' },
  { file: 'oss-8.html',                      title: '你的电脑能跑多大的模型', tr: 'en ko' },
  { file: 'oss-9.html',                      title: 'Ollama 与 LM Studio', tr: 'en ko' },
  { file: 'exam.html',                       title: '自测中心', tr: 'en ko' },
  { file: 'exam-1.html',                     title: '大模型原理篇自测 · 50 题', tr: 'en ko' },
  { file: 'exam-2.html',                     title: 'Harness 核心篇自测 · 50 题', tr: 'en ko' },
  { file: 'exam-3.html',                     title: '动手实战篇自测 · 50 题', tr: 'en ko' },
  { file: 'exam-4.html',                     title: '工程进阶篇自测 · 50 题', tr: 'en ko' },
  { file: 'exam-5.html',                     title: '自我改进篇自测 · 50 题', tr: 'en ko' },
  { file: 'exam-7.html',                     title: '协作方法论篇自测 · 50 题', tr: 'en ko' },
  { file: 'exam-6.html',                     title: 'Grok 专题自测 · 50 题', tr: 'en ko' },
  { file: 'exam-all.html',                   title: '全站综合考 · 35 题', tr: 'en ko' },
  { file: 'opc-1.html',                      title: '六种武器' },
  { file: 'opc-2.html',                      title: '确权要趁早' },
  { file: 'opc-3.html',                      title: '商标类别' },
  { file: 'opc-4.html',                      title: '商标被驳回' },
  { file: 'opc-5.html',                      title: '域名议价' },
  { file: 'opc-6.html',                      title: '软著与备案' },
  { file: 'opc-7.html',                      title: '专利或商业秘密' },
  { file: 'opc-8.html',                      title: 'ICP 备案与证' },
  { file: 'opc-9.html',                      title: '注册资本' },
  { file: 'opc-10.html',                     title: '合伙人' },
  { file: 'opc-11.html',                     title: '平均分配的陷阱' },
  { file: 'opc-12.html',                     title: '股权五维度' },
  { file: 'opc-13.html',                     title: '代持与退出' },
  { file: 'opc-14.html',                     title: '真出海与假出海' },
  { file: 'opc-15.html',                     title: '长尾与选型' },
  { file: 'opc-final.html',                  title: '新创业公式' },
  { file: 'seo-1.html',                      title: '为什么没人来', tr: 'en ko' },
  { file: 'seo-2.html',                      title: 'SEO 最低可行清单', tr: 'en ko' },
  { file: 'seo-3.html',                      title: 'GEO 让 AI 引用你', tr: 'en ko' },
  { file: 'seo-4.html',                      title: '拆本站真实改造', tr: 'en ko' },
  { file: 'seo-5.html',                      title: '一个人的优先级', tr: 'en ko' },
  { file: 'seo-final.html',                  title: '被搜到验收清单', tr: 'en ko' },
  { file: 'lei-1.html',                      title: '谁适合创业', tr: 'en ko' },
  { file: 'lei-2.html',                      title: '心理准备', tr: 'en ko' },
  { file: 'lei-3.html',                      title: '选方向', tr: 'en ko' },
  { file: 'lei-4.html',                      title: '起名', tr: 'en ko' },
  { file: 'lei-5.html',                      title: '互联网七字诀', tr: 'en ko' },
  { file: 'lei-6.html',                      title: '口碑的本质', tr: 'en ko' },
  { file: 'lei-7.html',                      title: '第一笔钱', tr: 'en ko' },
  { file: 'lei-8.html',                      title: '融资时机', tr: 'en ko' },
  { file: 'lei-9.html',                      title: '估值的艺术', tr: 'en ko' },
  { file: 'lei-10.html',                     title: '股权就是拼图', tr: 'en ko' },
  { file: 'lei-11.html',                     title: '合伙人', tr: 'en ko' },
  { file: 'lei-12.html',                     title: '现金流与报酬包', tr: 'en ko' },
  { file: 'lei-final.html',                  title: '写给一人公司', tr: 'en ko' },
  { file: 'lei-test.html',                   title: '创业成功率测试', tr: 'en ko' },
];
// ── SLIDE_ORDER 生成结束 ──

// 嵌入模式：被 learn.html 的 iframe 加载时（?embed=1 或在 iframe 内），
// 不注入顶部浮条 / 底部翻页条 / 拍脸图广告，避免与 Wiki 外层 UI 重复。
// PV 统计仍照常上报。
const EMBED_MODE = (function(){
  try {
    if (/[?&]embed=1\b/.test(location.search)) return true;
    if (window.self !== window.top) return true; // 在 iframe 内
  } catch (e) { return true; }
  return false;
})();

// ── i18n 适配：i18n.js 未加载时按中文兜底 ──
const I18N = window.XUEAI_I18N || {
  lang: 'zh',
  t: function (k) { return ({
    toc: '目录', tocTitle: '在课程阅读器中打开，左侧带完整目录', askAuthor: '请教作者',
    today: '今日', total: '总学习', backHomeTitle: '返回首页 (Cmd+↑返回目录)',
    prevTitle: '上一页 (Cmd+←)', nextTitle: '下一页 (Cmd+→)', lastPage: '已是最后一页',
    navHint: '→ 下一步<br>⌘→ 换页',
    navUntranslated: '暂无译文', navUntranslatedTitle: '这一节还没有中文版'
  })[k] || k; },
  baseFile: function (f) { return f; },
  locFile: function (f) { return f; },
  slideTitle: function (f, zh) { return zh; }
};

(function() {

  const cur = I18N.baseFile(location.pathname.split('/').pop());
  const idx = SLIDE_ORDER.findIndex(s => s.file === cur);

  // 无论是否在序列中，都注入顶部栏（请教作者 + PV）
  (function injectTopBar() {
    if (EMBED_MODE) {
      // 嵌入模式下仅静默上报 PV，不渲染浮条
      fetch('/pv').catch(() => {});
      return;
    }
    const style = document.createElement('style');
    style.textContent = `
      #nav-top-bar {
        position: fixed; top: 14px; left: 50%; transform: translateX(-50%);
        display: flex; align-items: center;
        background: rgba(255,255,255,0.82); backdrop-filter: blur(16px);
        border: 1px solid rgba(0,0,0,0.08);
        border-radius: 40px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        padding: 0;
        z-index: 9999; font-family: -apple-system, "PingFang SC", sans-serif;
        overflow: hidden;
        max-width: calc(100vw - 16px);
      }
      #nav-author-link, #nav-toc-link {
        font-size: 12px; font-weight: 600; color: #6b6b70;
        text-decoration: none;
        padding: 7px 16px;
        transition: background 0.15s, color 0.15s;
        white-space: nowrap;
        display: flex; align-items: center; gap: 5px;
      }
      #nav-author-link:hover, #nav-toc-link:hover { background: rgba(0,102,255,0.06); color: #0066ff; }
      #nav-toc-link { color: #0066ff; }
      .nav-top-sep {
        width: 1px; height: 20px; background: rgba(0,0,0,0.08); flex-shrink: 0;
      }
      #nav-pv-badge {
        display: flex; align-items: center; gap: 6px;
        padding: 7px 16px;
        font-size: 12px;
      }
      .nav-pv-label { color: #9a9a9f; font-weight: 500; }
      .nav-pv-num-today { color: #0066ff; font-weight: 800; }
      .nav-pv-sep { width:1px; height:12px; background:rgba(0,0,0,0.1); margin: 0 2px; }
      .nav-pv-num-total { color: #7c3aed; font-weight: 800; }
      [data-theme="dark"] #nav-top-bar {
        background: rgba(20,26,22,0.88);
        border-color: rgba(255,255,255,0.10);
        box-shadow: 0 2px 14px rgba(0,0,0,0.28);
      }
      [data-theme="dark"] #nav-author-link { color: var(--sub,#a3ada8); }
      [data-theme="dark"] #nav-toc-link,
      [data-theme="dark"] .nav-pv-num-today { color: var(--accent,#5cb595); }
      [data-theme="dark"] .nav-pv-label { color: var(--faint,#6f7975); }
      [data-theme="dark"] .nav-top-sep,
      [data-theme="dark"] .nav-pv-sep { background: rgba(255,255,255,0.10); }
      @media (max-width: 768px) {
        #nav-top-bar { top: 8px; border-radius: 20px; }
        #nav-author-link, #nav-toc-link, #nav-pv-badge { padding: 6px 10px; font-size: 11px; }
        .nav-pv-sep { margin: 0; }
      }
    `;
    document.head.appendChild(style);

    const topBar = document.createElement('div');
    topBar.id = 'nav-top-bar';
    topBar.innerHTML = `
      <a id="nav-toc-link" href="${I18N.locFile('learn.html')}#${encodeURIComponent(cur)}" title="${I18N.t('tocTitle')}">☰ ${I18N.t('toc')}</a>
      <div class="nav-top-sep"></div>
      <a id="nav-author-link" href="https://luoxiaoshan.cn/" target="_blank">${I18N.t('askAuthor')}</a>
      <div class="nav-top-sep"></div>
      <div id="nav-pv-badge">
        <span class="nav-pv-label">${I18N.t('today')}</span>
        <span class="nav-pv-num-today" id="nav-pv-today">—</span>
        <div class="nav-pv-sep"></div>
        <span class="nav-pv-label">${I18N.t('total')}</span>
        <span class="nav-pv-num-total" id="nav-pv-total">—</span>
      </div>
    `;
    document.body.appendChild(topBar);

    fetch('/pv')
      .then(r => r.json())
      .then(d => {
        function fmt(n) {
          n = Number(n) || 0;
          if (I18N.lang === 'zh' && n >= 10000) return (n / 10000).toFixed(1).replace(/\.0$/, '') + ' 万';
          if (I18N.lang !== 'zh' && n >= 10000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
          return n.toLocaleString('en-US');
        }
        document.getElementById('nav-pv-today').textContent = fmt(d.today);
        document.getElementById('nav-pv-total').textContent = fmt(d.total);
      })
      .catch(() => {});
  })();

  // 嵌入模式 或 不在序列中：不注入底部翻页条（外层 Wiki 已有上一节/下一节）
  if (EMBED_MODE || idx < 0) return;

  const total = SLIDE_ORDER.length;
  const prev  = idx > 0           ? SLIDE_ORDER[idx - 1] : null;
  const next  = idx < total - 1   ? SLIDE_ORDER[idx + 1] : null;

  /* 邻居有没有当前语言的译版。`tr` 由 ops/gen-nav-order.py 在生成期写入，
     因为浏览器探测不到文件是否存在，而 I18N.locFile() 只会无条件拼 `.en.html`：
     邻居没译就直接点出 404（I18N-GAP 的 P9）。中文源页永远都在，所以只查英韩。 */
  function reachable(item) {
    if (!item) return false;
    if (I18N.lang === 'zh') return true;
    return (' ' + (item.tr || '') + ' ').indexOf(' ' + I18N.lang + ' ') >= 0;
  }

  /* 去不了的邻居：按钮置灰，文案换成「暂无译文」而不是留邻居的中文标题——
     标题查不到时 slideTitle() 会回退中文（P7），那样英韩页上就是一个
     点不动、还写着中文的按钮，两个毛病叠在一起。 */
  function navLabel(item, arrow) {
    if (!item) return arrow === '←' ? '' : I18N.t('lastPage');
    const text = reachable(item)
      ? I18N.slideTitle(item.file, item.title)
      : I18N.t('navUntranslated');
    return arrow === '←' ? '← ' + text : text + ' →';
  }

  function navTitleAttr(item, key) {
    if (item && !reachable(item)) return I18N.t('navUntranslatedTitle');
    return I18N.t(key);
  }

  /* 「有邻居但去不了」才加这个类。首页的上一页、末页的下一页压根没有邻居，
     那是另一回事，继续走 :disabled 的 0.25 淡出。 */
  function untranslated(item) {
    return item && !reachable(item) ? ' snav-untranslated' : '';
  }

  const prevOk = reachable(prev);
  const nextOk = reachable(next);

  // 注入样式
  const style = document.createElement('style');
  style.textContent = `
    #slide-nav {
      position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%) translateY(80px);
      display: flex; align-items: center; gap: 10px;
      background: rgba(28,28,30,0.88); backdrop-filter: blur(12px);
      border-radius: 40px; padding: 8px 14px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.18);
      z-index: 9999; font-family: -apple-system, "PingFang SC", sans-serif;
      user-select: none;
      opacity: 0;
      transition: opacity 0.25s ease, transform 0.25s ease;
      pointer-events: none;
      max-width: calc(100vw - 16px);
    }
    #slide-nav.visible {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
      pointer-events: auto;
    }
    /* 触发区：底部不可见热区 */
    #slide-nav-trigger {
      position: fixed; bottom: 0; left: 0; right: 0; height: 60px;
      z-index: 9998; pointer-events: auto;
    }
    .snav-btn {
      background: transparent; border: none; color: rgba(255,255,255,0.55);
      font-size: 13px; font-weight: 600; cursor: pointer;
      padding: 5px 12px; border-radius: 20px; transition: all 0.15s;
      display: flex; align-items: center; gap: 4px;
      max-width: 34vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .snav-btn:hover:not(:disabled) { background: rgba(255,255,255,0.1); color: white; }
    .snav-btn:disabled { opacity: 0.25; cursor: not-allowed; }
    /* 邻居还没有当前语言译版时的置灰态。不能沿用上面那档 0.25：那是给首页/末页
       那种**空白**按钮用的，没人需要读它；这里要让「暂无译文」看得清，
       0.25 合成下来只有 1.5:1，等于没写。改用 0.42 + 斜体，对比度约 4:1，
       靠字重与斜体表达不可点，而不是靠淡到看不见。
       药丸底色 rgba(28,28,30,.88) 在浅色与暗黑下都一样，所以这一档不用分主题。 */
    .snav-btn:disabled.snav-untranslated {
      opacity: 1;
      color: rgba(255,255,255,0.42);
      font-style: italic;
      font-weight: 500;
    }
    .snav-info {
      font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.7);
      padding: 0 8px; min-width: 64px; text-align: center;
    }
    .snav-sep { width: 1px; height: 16px; background: rgba(255,255,255,0.15); }
    .snav-home {
      background: transparent; border: none; color: rgba(255,255,255,0.45);
      font-size: 12px; cursor: pointer; padding: 5px 10px; border-radius: 20px;
      transition: all 0.15s;
    }
    .snav-home:hover { color: white; background: rgba(255,255,255,0.08); }
    @media (max-width: 768px) {
      #slide-nav { bottom: 10px; gap: 6px; padding: 6px 8px; }
      .snav-btn { font-size: 12px; padding: 4px 8px; max-width: 30vw; }
      .snav-info { min-width: 48px; padding: 0 4px; font-size: 11px; }
      .snav-home { padding: 4px 8px; font-size: 11px; }
    }
  `;
  document.head.appendChild(style);

  // 注入 DOM
  const nav = document.createElement('div');
  nav.id = 'slide-nav';
  nav.innerHTML = `
    <button class="snav-home" onclick="location.href='${I18N.locFile('home.html')}'" title="${I18N.t('backHomeTitle')}">☰</button>
    <div class="snav-sep"></div>
    <button class="snav-btn${untranslated(prev)}" id="snav-prev" onclick="location.href='${prevOk ? I18N.locFile(prev.file) : ''}'" ${!prevOk ? 'disabled' : ''} title="${navTitleAttr(prev, 'prevTitle')}">
      ${navLabel(prev, '←')}
    </button>
    <div class="snav-info">${idx + 1} / ${total}</div>
    <button class="snav-btn${untranslated(next)}" id="snav-next" onclick="location.href='${nextOk ? I18N.locFile(next.file) : ''}'" ${!nextOk ? 'disabled' : ''} title="${navTitleAttr(next, 'nextTitle')}">
      ${navLabel(next, '→')}
    </button>
    <div class="snav-sep"></div>
    <div style="font-size:10px;color:rgba(255,255,255,0.3);padding:0 4px;line-height:1.4;text-align:center">${I18N.t('navHint')}</div>
  `;
  // 触发热区
  const trigger = document.createElement('div');
  trigger.id = 'slide-nav-trigger';
  document.body.appendChild(trigger);
  document.body.appendChild(nav);

  // 鼠标移入底部热区或导航条时显示
  let hideTimer = null;
  function showNav() {
    clearTimeout(hideTimer);
    nav.classList.add('visible');
  }
  function scheduleHide() {
    hideTimer = setTimeout(() => nav.classList.remove('visible'), 800);
  }
  trigger.addEventListener('mouseenter', showNav);
  trigger.addEventListener('mouseleave', scheduleHide);
  nav.addEventListener('mouseenter', showNav);
  nav.addEventListener('mouseleave', scheduleHide);

  // 前 3 次访问自动弹出 2 秒
  const AUTO_SHOW_KEY = 'slide_nav_auto_count';
  const count = parseInt(localStorage.getItem(AUTO_SHOW_KEY) || '0', 10);
  if (count < 3) {
    localStorage.setItem(AUTO_SHOW_KEY, count + 1);
    setTimeout(() => {
      showNav();
      setTimeout(() => scheduleHide(), 2000);
    }, 600);
  }

  // 键盘快捷键
  document.addEventListener('keydown', e => {
    const cmd = e.metaKey || e.ctrlKey;

    // Cmd + ↑ → 返回目录
    if (cmd && e.key === 'ArrowUp') {
      e.preventDefault();
      // 判断当前页属于哪个篇章
      const base = cur.replace('.html','');
      const ch4Files = ['10-1','10-2','10-3','10-4','10-5','10-6','10-7',
        '10-8','10-9','10-10','10-11','10-12','10-13','10-14','10-15','10-16',
        '10-17','10-summary','10-final'];
      const ch3Files = ['9-1','9-2','9-3','9-4','9-5','9-6','9-7','9-8','9-9','9-10',
        '9-11','9-12','9-13','9-14','9-15','9-16','9-17','9-18','9-19','9-20',
        '9-21','9-22','9-23','9-24','9-25','9-26','9-27','9-28','9-29','9-30',
        '9-31','9-32','9-summary','9-final'];
      const ch2Files = ['5-1','5-2','6-0a','6-0b','6-1','6-2','6-3','6-4',
        'prompt-attack','prompt-attack-cases','prompt-defense',
        '7-1','7-2','7-3','7-4','7-5','vector-db-1','vector-db-2','vector-db-3',
        'vector-db-4','vector-db-5','8-1','8-2','8-2b','8-3','8-4','8-5','8-5b',
        '8-6','8-7','8-8','cost-eval','engineering-philosophy','summary-2','summary-2b'];
      if (ch4Files.includes(base)) { location.href = I18N.locFile('learn.html') + '#10-1.html'; }
      else if (ch3Files.includes(base)) { location.href = I18N.locFile('learn.html') + '#9-1.html'; }
      else { location.href = I18N.locFile(ch2Files.includes(base) ? 'story-2.html' : 'llm-story.html'); }
      return;
    }

    // Cmd + → → 下一页（邻居没有当前语言的译版就不动，与按钮的置灰口径一致）
    if (cmd && e.key === 'ArrowRight') {
      e.preventDefault();
      if (nextOk) location.href = I18N.locFile(next.file);
      return;
    }

    // Cmd + ← → 上一页
    if (cmd && e.key === 'ArrowLeft') {
      e.preventDefault();
      if (prevOk) location.href = I18N.locFile(prev.file);
      return;
    }

    // 单独 → → 页面内下一步（nextStep 或 playDemo）
    if (!cmd && e.key === 'ArrowRight') {
      if (typeof window.nextStep === 'function') {
        e.preventDefault();
        window.nextStep();
      } else if (typeof window.playDemo === 'function') {
        e.preventDefault();
        window.playDemo();
      }
      return;
    }

    // 单独 ← → 页面内上一步（如果有）
    if (!cmd && e.key === 'ArrowLeft') {
      if (typeof window.prevStep === 'function') {
        e.preventDefault();
        window.prevStep();
      }
      return;
    }
  });

  // ── 触摸滑动翻页 ──────────────────────────────────────────
  (function initTouchSwipe() {
    let startX = 0, startY = 0;
    document.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    document.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0 && nextOk) location.href = I18N.locFile(next.file);   // 左滑 → 下一页
      if (dx > 0 && prevOk) location.href = I18N.locFile(prev.file);   // 右滑 → 上一页
    }, { passive: true });
  })();

})();

// ── 幻灯片适配：CSS 等比缩放 + 竖屏提示（可关闭，不强拦截）──────────
(function initSlideAdapt() {

  // 注入 meta viewport
  if (!document.querySelector('meta[name="viewport"]')) {
    const m = document.createElement('meta');
    m.name = 'viewport';
    m.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
    document.head.appendChild(m);
  }

  // 纯 CSS 方案：避免 iOS Safari 的 vh / scale / autosize 陷阱
  const style = document.createElement('style');
  style.textContent = `
    html, body {
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }

    :root {
      --slide-pad-x: 8px;
      --slide-pad-top: 40px;
      --slide-pad-bottom: 56px;
    }

    /* 横屏：按 16:9 反推宽度，确保上下留白且不裁剪 */
    @media (orientation: landscape) {
      .slide {
        width: min(94vw, calc((100vh - var(--slide-pad-top) - var(--slide-pad-bottom)) * 16 / 9)) !important;
        max-width: 1440px !important;
      }
    }

    /* 支持 dvh 的浏览器优先用 dvh（iOS 更稳定） */
    @supports (height: 100dvh) {
      @media (orientation: landscape) {
        .slide {
          width: min(94vw, calc((100dvh - var(--slide-pad-top) - var(--slide-pad-bottom)) * 16 / 9)) !important;
        }
      }
    }
  `;
  document.head.appendChild(style);

  // ── 竖屏画布缩放：强制设定桌面分辨率后整体缩小 ──
  function applyCanvasScale() {
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 1024px)').matches;
    
    let styleEl = document.getElementById('mobile-canvas-scale');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'mobile-canvas-scale';
      document.head.appendChild(styleEl);
    }

    if (isPortrait && isSmallScreen) {
      const vw = window.innerWidth;
      
      // 基准设计分辨率：宽 960px，高 540px
      const designW = 960;
      const designH = 540;
      
      // 缩放比例
      const scale = vw / designW;
      const topGap = 60; // 顶部导航栏空间
      const leftOffset = (vw - designW * scale) / 2;
      const bodyH = Math.round(designH * scale + topGap + 20);

      styleEl.textContent = `
        body {
          height: ${bodyH}px !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          display: block !important;
        }
        .slide, .slide-container {
          width: ${designW}px !important;
          height: ${designH}px !important;
          max-width: none !important;
          max-height: none !important;
          aspect-ratio: auto !important;
          margin: 0 !important;
          flex-shrink: 0 !important;
          position: absolute !important;
          left: ${leftOffset}px !important;
          top: ${topGap}px !important;
          transform-origin: top left !important;
          transform: scale(${scale}) !important;
        }
      `;
    } else {
      styleEl.textContent = '';
    }
  }

  window.addEventListener('orientationchange', () => {
    setTimeout(applyCanvasScale, 150);
  });
  window.addEventListener('resize', () => {
    applyCanvasScale();
  });

  applyCanvasScale();
})();

// ── 站内推荐弹层（后台称「拍脸图」，独立脚本，下架时删除此段及 splash.js 即可） ──
// 嵌入模式（Wiki iframe 内）不弹。
// 脚本名不得含 ad：旧名 interstitial-ad.js 命中广告拦截插件的 `-ad.js` 规则，
// 当天 23,039 次页面加载里只有 141 次真正请求到它，详见 splash.js 头部注释。
(function () {
  if (EMBED_MODE) return;
  var s = document.createElement('script');
  s.src = 'splash.js?v=20260807';
  s.async = true;
  document.head.appendChild(s);
})();

// ── 行为埋点（管理后台用户画像；带 xueai_sess Cookie 自动关联登录用户） ──
// 原先此处直接一发 /api/visit（只记路径，且 EMBED 模式不上报，阅读器内
// 行为全丢）。现由 track.js 接管：会话 + 行为链路 + 每页停留时长上报到
// /api/track，服务端同步写回 legacy visits/users 表，旧统计口径不断档。
// EMBED 模式（learn.html iframe 内）也照常加载，学习行为不再丢失。
(function () {
  try {
    var s = document.createElement('script');
    s.src = 'track.js?v=20260806';
    s.async = true;
    document.head.appendChild(s);
  } catch (e) { /* 埋点加载失败不影响浏览 */ }
})();

// ── 问问 Alice：划词提问/吐槽 + Alice 悬浮窗（独立脚本，下架删除此段即可）──
// 「我要吐槽」也在这个脚本里：由 Alice 对话式引导后转交 /api/feedback，
// 独立的 feedback.js 表单面板已于 2026-08-08 下线。
// EMBED 模式（learn.html iframe 内）也照常加载：阅读器里同样可以划词提问。
(function () {
  try {
    var s = document.createElement('script');
    s.src = 'ask-alice.js?v=20260817b';
    s.async = true;
    document.head.appendChild(s);
  } catch (e) { /* 加载失败不影响浏览 */ }
})();

// ── 嵌入模式下的站内跳页：交给外壳换 hash，别让 iframe 自己跳 ──
// 课件正文里的站内链接（如 interview-* 的「用这些课程页组织答案」）写的是相对
// 路径。iframe 自己跳过去的话，外壳 learn.html 的 hash 和左侧目录都不会动，用户
// 落在一个没有目录、没有翻页条的裸页上，回不来。改成通知外壳换 hash 后，进度、
// 目录高亮、上一节/下一节都照常跟随。
// hash 里存的是中文基名（三个语言外壳共用一套 hash），所以要先还原语言后缀。
(function () {
  if (!EMBED_MODE) return;

  // 只接管指向同目录课程页的链接，外链和目录外的页面一律放行
  function targetLesson(a) {
    if (a.target && a.target !== '_self') return null;
    const href = a.getAttribute('href') || '';
    if (!/^[\w.-]+\.html(#.*)?$/.test(href)) return null;
    const file = I18N.baseFile(href.split('#')[0]);
    return SLIDE_ORDER.some(s => s.file === file) ? file : null;
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // 新标签页打开，不拦
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    const file = targetLesson(a);
    if (!file) return;
    try {
      window.top.location.hash = '#' + encodeURIComponent(file);
      e.preventDefault();
    } catch (err) { /* 拿不到外壳（理论上跨域）时按普通链接走 */ }
  }, true);
})();

// 付费墙已停用，课程全部免费开放。
