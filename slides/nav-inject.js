// 页面顺序
const SLIDE_ORDER = [
  { file: 'index.html',                 title: '课程首页',               num: 0  },
  { file: 'llm-story.html',            title: '完整目录',               num: 0  },
  { file: '0-intro.html',               title: '我们在哪里',             num: 0  },
  { file: '0-why.html',                 title: '为什么要打基础',          num: 0  },
  { file: 'training-data.html',         title: '训练数据规模',          num: 1  },
  { file: 'train-vs-infer.html',        title: '训练 vs 推理',          num: 2  },
  { file: '1-2-vocab.html',             title: '词表与训练',             num: 3  },
  { file: '1-2-base.html',              title: 'Base 模型',              num: 4  },
  { file: '1-2-gpt.html',               title: 'GPT 的跃进',             num: 5  },
  { file: '1-2-api.html',               title: 'chat/completions 之谜',  num: 6  },
  { file: '1-2-fake-chat.html',         title: '伪造聊天记录',           num: 7  },
  { file: '1-2-sft.html',               title: 'Chat Template + SFT',    num: 8  },
  { file: '1-2-prompt-power.html',      title: '上下文窗口是关键',       num: 9  },
  { file: '1-2-hallucination.html',     title: '大模型幻觉',             num: 10 },
  { file: '1-2-mitigation-prompt.html', title: 'Prompt Engineering',     num: 11 },
  { file: '1-2-mitigation-rag.html',    title: 'RAG 检索增强',           num: 12 },
  { file: 'rag-advanced.html',          title: 'RAG 代价与优化',         num: 13 },
  { file: '1-2-mitigation-temp.html',   title: 'Temperature & Top-P',    num: 14 },
  { file: '1-2-mitigation-eval.html',   title: '评测 + 人工审核',        num: 15 },
  { file: 'summary-1.html',            title: '第一篇章汇总（上）',      num: 0  },
  { file: 'summary-1b.html',           title: '第一篇章汇总（下）',      num: 0  },
  { file: '5-1.html',                  title: '上下文窗口',              num: 16 },
  { file: '5-2.html',                  title: '上下文溢出策略',          num: 17 },
  { file: '6-0a.html',                title: '为什么选 Markdown',        num: 18 },
  { file: '6-0b.html',                title: 'MD 语法与工程渲染',        num: 19 },
  { file: '6-1.html',                  title: 'Prompt 角色扮演',         num: 20 },
  { file: '6-2.html',                  title: 'Prompt 进阶技巧',         num: 21 },
  { file: '6-3.html',                  title: '输出格式取舍',            num: 22 },
  { file: '6-4.html',                  title: '流式返回与格式',          num: 23 },
  { file: 'prompt-attack.html',        title: 'Prompt 注入原理',         num: 24 },
  { file: 'prompt-attack-cases.html', title: '12 个攻击案例',           num: 25 },
  { file: 'prompt-defense.html',      title: 'Prompt 防御实战',         num: 26 },
  { file: '7-1.html',                  title: 'Agent 概念',              num: 27 },
  { file: '7-2.html',                  title: '工具调用',                num: 28 },
  { file: '7-3.html',                  title: 'ReAct 实战',              num: 29 },
  { file: '7-5.html',                  title: 'Skill 技能',              num: 30 },
  { file: '7-4.html',                  title: '脚手架工程',              num: 31 },
  { file: '8-1.html',                  title: '多轮对话成本',            num: 32 },
  { file: '8-2.html',                  title: 'KV Cache',                num: 33 },
  { file: '8-2b.html',                 title: '显式缓存',                num: 34 },
  { file: '8-3.html',                  title: '动态时间戳',              num: 35 },
  { file: '8-4.html',                  title: '综合成本优化',            num: 36 },
  { file: '8-5.html',                  title: '图片 Token 计费',          num: 37 },
  { file: '8-5b.html',                 title: '按任务匹配分辨率',          num: 38 },
  { file: '8-6.html',                  title: '语法层优化',               num: 39 },
  { file: '8-7.html',                  title: '语义层优化',               num: 40 },
  { file: '8-8.html',                  title: '输出层+KV进阶',            num: 41 },
  { file: 'engineering-philosophy.html', title: '大道至简',               num: 0  },
  { file: 'summary-2.html',            title: '第二篇章汇总（上）',      num: 0  },
  { file: 'summary-2b.html',           title: '第二篇章汇总（下）',      num: 0  },
];

(function() {

  const cur = location.pathname.split('/').pop();
  const idx = SLIDE_ORDER.findIndex(s => s.file === cur);
  if (idx < 0) return; // 不在序列中则不注入

  const total = SLIDE_ORDER.length;
  const prev  = idx > 0           ? SLIDE_ORDER[idx - 1] : null;
  const next  = idx < total - 1   ? SLIDE_ORDER[idx + 1] : null;

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
    }
    .snav-btn:hover:not(:disabled) { background: rgba(255,255,255,0.1); color: white; }
    .snav-btn:disabled { opacity: 0.25; cursor: not-allowed; }
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
    #nav-top-bar {
      position: fixed; top: 12px; left: 50%; transform: translateX(-50%);
      display: flex; align-items: center; gap: 12px;
      z-index: 9999; font-family: -apple-system, "PingFang SC", sans-serif;
    }
    #nav-author-link {
      font-size: 13px; font-weight: 600; color: var(--sub, #6b6b70);
      text-decoration: none; transition: color 0.15s;
    }
    #nav-author-link:hover { color: var(--accent, #0066ff); }
    #nav-pv-badge {
      display: flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.72); backdrop-filter: blur(8px);
      border: 1.5px solid rgba(0,102,255,0.15);
      border-radius: 10px; padding: 4px 12px;
      font-size: 12px; font-weight: 700;
    }
    .nav-pv-sep { width:1px; height:12px; background:rgba(0,0,0,0.1); }
    .nav-pv-label { color: var(--sub, #6b6b70); font-weight: 600; }
    .nav-pv-num-today { color: var(--accent, #0066ff); font-size: 14px; font-weight: 900; min-width: 24px; text-align:right; }
    .nav-pv-num-total { color: #7c3aed; font-size: 14px; font-weight: 900; min-width: 28px; text-align:right; }
  `;
  document.head.appendChild(style);

  // 注入 DOM
  const nav = document.createElement('div');
  nav.id = 'slide-nav';
  nav.innerHTML = `
    <button class="snav-home" onclick="location.href='index.html'" title="返回首页 (Cmd+↑返回目录)">☰</button>
    <div class="snav-sep"></div>
    <button class="snav-btn" id="snav-prev" onclick="location.href='${prev ? prev.file : ''}'" ${!prev ? 'disabled' : ''} title="上一页 (Cmd+←)">
      ← ${prev ? prev.title : ''}
    </button>
    <div class="snav-info">${idx + 1} / ${total}</div>
    <button class="snav-btn" id="snav-next" onclick="location.href='${next ? next.file : ''}'" ${!next ? 'disabled' : ''} title="下一页 (Cmd+→)">
      ${next ? next.title : '已是最后一页'} ${next ? '→' : ''}
    </button>
    <div class="snav-sep"></div>
    <div style="font-size:10px;color:rgba(255,255,255,0.3);padding:0 4px;line-height:1.4;text-align:center">→ 下一步<br>⌘→ 换页</div>
  `;
  // 顶部栏：请教作者 + PV 数据
  const topBar = document.createElement('div');
  topBar.id = 'nav-top-bar';
  topBar.innerHTML = `
    <a id="nav-author-link" href="https://luoxiaoshan.cn/" target="_blank">请教作者</a>
    <div id="nav-pv-badge">
      <span class="nav-pv-label">今日</span>
      <span class="nav-pv-num-today" id="nav-pv-today">—</span>
      <div class="nav-pv-sep"></div>
      <span class="nav-pv-label">总学习</span>
      <span class="nav-pv-num-total" id="nav-pv-total">—</span>
    </div>
  `;
  document.body.appendChild(topBar);

  // 拉取 PV 数据
  fetch('/pv')
    .then(r => r.json())
    .then(d => {
      function fmt(n) {
        if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
        if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
        return n;
      }
      document.getElementById('nav-pv-today').textContent = fmt(d.today);
      document.getElementById('nav-pv-total').textContent = fmt(d.total);
    })
    .catch(() => {});

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
      const ch2Files = ['5-1','5-2','6-0a','6-0b','6-1','6-2','6-3','6-4',
        'prompt-attack','prompt-attack-cases','prompt-defense',
        '7-1','7-2','7-3','7-4','7-5','8-1','8-2','8-2b','8-3','8-4','8-5','8-5b',
        '8-6','8-7','8-8','engineering-philosophy','summary-2','summary-2b'];
      const base = cur.replace('.html','');
      location.href = ch2Files.includes(base) ? 'story-2.html' : 'llm-story.html';
      return;
    }

    // Cmd + → → 下一页
    if (cmd && e.key === 'ArrowRight') {
      e.preventDefault();
      if (next) location.href = next.file;
      return;
    }

    // Cmd + ← → 上一页
    if (cmd && e.key === 'ArrowLeft') {
      e.preventDefault();
      if (prev) location.href = prev.file;
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
})();
