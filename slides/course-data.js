/**
 * 课程结构化数据 —— 门户首页 (home.html) 与 Wiki 学习页 (learn.html) 的统一数据源。
 * 维护一处即可，新增/调整课程内容只改这里。
 *
 * 结构：篇章(part) → 主题(topic) → 知识点(lesson)
 * lesson.file 对应 slides/ 下的某个 .html
 * lesson.tag  用于显示彩色标签（交互/动画/概念/案例/安全 等）
 */
window.COURSE = {
  meta: {
    title: '学 AI 产品，从入门到精通',
    subtitle: '从大模型底层原理到 AI Agent Harness',
    brand: '小山学堂',
    author: '洛小山',
    authorUrl: 'https://luoxiaoshan.cn/',
    github: 'https://github.com/itshen/learn-ai',
  },
  parts: [
    /* 开篇：课程的第一站，先定位自己再讲怎么学。放在零基础入门篇之前，新访客默认落地
       在这里（learn.html 取 FLAT[0]）。暂时复用 prologue 标记，首页会渲染成 INTRO
       徽章，与零基础入门篇重复；待 Ask Alice 分支落地后换成专用的 preface 样式。 */
    {
      id: 'p-start',
      num: '课程开篇',
      title: '开始之前',
      desc: '四节开篇小课：先按目标挑一条学习路线，再用达克曲线找到自己现在的位置，讲清怎么学才能真的过脑子，以及为什么值得先花时间弄懂原理。原理通了，后面所有方案你都能自己看懂。',
      color: '#64748b',
      group: 'main',
      routes: ['use', 'pro', 'pm', 'build'],
      prologue: true,
      topics: [
        {
          id: 't-intro',
          title: '入门与定位',
          desc: '先搞清楚我们在哪里、为什么要打基础',
          lessons: [
            /* 路线选择放在全课第一节：五条路线最后都汇到「入门与定位」，
               所有人必经此处。注册成课时它才有阅读器外壳，也才进得了翻页序列。 */
            { file: 'roadmap.html', title: '先选一条适合你的路', desc: '五档学习路线按目标划好范围：只想会用 AI、把 AI 用到专业、做 AI 产品、自己动手搭、全都要。选完课程目录自动精简，随时能改', tag: '开篇' , navTitle: '选学习路线'},
            { file: '0-intro.html', title: '我们在哪里？达克效应', desc: '用达克曲线定位学员当前位置，明确课程目标：从愚昧之巅走向平稳高原', tag: '开篇' , navTitle: '我们在哪里'},
            { file: '0-how.html', title: '怎样学，知识才能过脑子', desc: '看完 ≠ 学到：每个案例都要停下来反思、代入自己的业务场景、尝试输出', tag: '开篇' , navTitle: '怎样学才有效'},
            { file: '0-why.html', title: '为什么要花时间讲原理', desc: 'AI 所有 Harness 操作本质都是对 message list 的处理。理解它，才能看懂所有方案', tag: '开篇' , navTitle: '为什么要打基础'},
          ],
        },
      ],
    },
    {
      id: 'p0',
      num: '零基础入门',
      title: '写给第一次接触 AI 的你',
      desc: '不讲术语、不讲数学，用八节交互小课建立对 AI 的正确直觉：它能干哪些神奇的活、为什么会一本正经地胡说、怎么和它说话、什么能放心交给它。另附「小白三千问」：一页一问，把新手最常见的疑惑一次说清。零基础的家人朋友也能看懂，全章免登录开放。',
      color: '#0891b2',
      group: 'main',
      routes: ['use', 'pro', 'pm', 'build'],
      prologue: true,
      topics: [
        {
          id: 't-zero-what',
          title: 'AI 是个什么东西',
          desc: '先看它的能力，再看穿它的底牌',
          lessons: [
            { file: 'zero-0.html', title: 'AI 能干哪些神奇的活', desc: '六个真实使用现场：整理纪要、看懂报告、给任何人讲任何事、陪练面试、做小工具、生成海报。以前是人学软件，现在是软件听人话', tag: '交互' },
            { file: 'zero-1.html', title: '它其实在玩「接话茬」', desc: '不需要任何基础：AI 每次只做一件事——猜下一个字。两个小游戏，建立你对 AI 的第一个正确直觉', tag: '交互' },
            { file: 'zero-2.html', title: '它不是搜索引擎', desc: '搜索给书架，AI 给结论。理解「凭记忆回答」的三个后果：会记串、知识有截止日期、没有出处可查', tag: '概念' },
            { file: 'zero-3.html', title: '它会一本正经地胡说', desc: '三个找茬游戏：亲手从 AI 的回答里抓出编造的句子，再带走三个实用的小习惯', tag: '交互' },
          ],
        },
        {
          id: 't-zero-talk',
          title: '怎么和它说话',
          desc: '两个立刻能用的说话技巧',
          lessons: [
            { file: 'zero-4.html', title: '把它当不了解你的新同事', desc: '三档提问对比 + 提示词积木组装器：背景、要求、限制——信息给一分，它答一分', tag: '交互' },
            { file: 'zero-5.html', title: '万能开场白：先问我几个问题', desc: '说不清需求没关系，让它来问你。点选式对话演示，亲手体验回答质量翻倍的瞬间', tag: '交互' , navTitle: '万能开场白：先问我'},
          ],
        },
        {
          id: 't-zero-faq-usage',
          title: '小白三千问 · 会用篇',
          desc: '一页一问：怎么用得更好、工具怎么选',
          lessons: [
            { file: 'zero-q-prompt.html', title: '提示词到底怎么写才好？', desc: '一个万能骨架（背景+要求+限制）+ 拼图组装器：亲手拼不同的提示词，实时看 AI 回答质量的变化', tag: '交互' , navTitle: '提示词到底怎么写才好'},
            { file: 'zero-q-prompt-engineering.html', title: '「提示词工程」有什么意义？', desc: '你的一次聊天 vs 产品团队的一百万次调用：拖动滑块，亲眼看一段废话被放大成多大的账单', tag: '交互' , navTitle: '提示词工程有什么意义'},
            { file: 'zero-q-model-agent-app.html', title: '模型、Agent、应用是什么关系？', desc: '发动机、整车、网约车的三层类比 + 对号入座小游戏：听到新闻就知道说的是哪一层', tag: '交互' , navTitle: '模型、Agent、应用的关系'},
            { file: 'zero-q-agent.html', title: 'Agent 到底强在哪？', desc: '同一件报销的事，聊天 AI 和 Agent 干起来完全不同——点开播放，看 Agent 一步步把活干完', tag: '交互' , navTitle: 'Agent 到底强在哪'},
            { file: 'zero-q-skill.html', title: '最近很火的 Skill 是什么？', desc: '一张写给 AI 的「经验小抄」。对比播放：没带小抄的管家来回跑 4 趟，带了小抄的一趟搞完', tag: '交互' , navTitle: '最近很火的 Skill 是什么'},
            { file: 'zero-q-vibe-coding.html', title: 'Vibe Coding 是什么？不会写代码也能做软件吗？', desc: '点选一个生活需求，看「一句话描述 → AI 生成 → 改两轮 → 能用了」的全过程；学三个月 vs 描述十分钟的时间对比', tag: '交互' , navTitle: 'Vibe Coding 是什么'},
            { file: 'zero-q-china-models.html', title: '国产大模型有哪些？该怎么选？', desc: '通义、Kimi、DeepSeek、豆包、GLM……点选你的场景，对号入座。数据基于全球盲测榜', tag: '交互' , navTitle: '国产大模型怎么选'},
            { file: 'zero-q-companies.html', title: '还有哪些重要的 AI 公司？', desc: 'OpenAI、Anthropic、Google、Meta、xAI……配对小游戏把公司和代表作对上号，再看一份友好图鉴', tag: '交互' , navTitle: '还有哪些重要的 AI 公司'},
          ],
        },
        {
          id: 't-zero-faq-basics',
          title: '小白三千问 · 概念扫盲',
          desc: '一页一问：新闻高频词的零基础版',
          lessons: [
            { file: 'zero-q-token.html', title: 'Token 是什么？为什么 AI 按它收费？', desc: '交互分词器：点一句话看它被切成多少颗 Token，账单实时跳动；中英文消耗差异一目了然', tag: '交互' , navTitle: 'Token 是什么'},
            { file: 'zero-q-context-window.html', title: '为什么聊久了它会「忘事」？', desc: 'AI 的工作台就那么大：拖动对话轮数，看台面放满后最早的纸条怎么掉下去，掉的那一刻它开始答非所问', tag: '交互' , navTitle: '为什么聊久了会忘事'},
            { file: 'zero-q-reasoning.html', title: '「推理模型」「深度思考」是什么？', desc: '同一道题两种模式对比：秒答 vs 先想再答；时间和费用差多少、什么问题值得开思考，四题小测帮你建立手感', tag: '交互' , navTitle: '推理模型是什么'},
            { file: 'zero-q-parameters.html', title: '参数越多越聪明吗？', desc: '「千亿参数」是什么概念？拖动规模滑块建立直觉，再看小模型赢在哪：速度、成本、专精场景', tag: '交互' , navTitle: '参数越多越聪明吗'},
            { file: 'zero-q-multimodal.html', title: '为什么有的 AI 看不懂图片？', desc: '「会说话」和「会看」是两套本事。给两个模型各发一张猫图，亲眼看差别，再讲清「眼睛」的原理', tag: '交互' , navTitle: '为什么有的 AI 看不懂图'},
            { file: 'zero-q-finetune-vs-rag.html', title: '微调是什么？和「喂资料」有什么区别？', desc: '重新上课 vs 开卷考试：两种让 AI 懂你的路子并排演示，四个真实场景点选对号入座', tag: '交互' , navTitle: '微调和喂资料的区别'},
            { file: 'zero-q-knowledge-base.html', title: '企业都在建的「知识库」是什么？', desc: '三步动画：文件切块入库 → 提问时检索 → 塞进上下文再回答；同一个问题有无知识库的回答对比', tag: '交互' , navTitle: '企业知识库是什么'},
            { file: 'zero-q-acronyms.html', title: 'GPT、LLM、AIGC…这些缩写怎么分？', desc: '配对小游戏把缩写和人话解释连上线，通关后送一张「谁包含谁」的关系图', tag: '交互' , navTitle: 'AI 缩写怎么分'},
            { file: 'zero-q-nvidia-gpu.html', title: '英伟达为什么那么值钱？', desc: 'AI 时代的卖铲人：一个博士逐题算 vs 一万个小学生同时算，看懂显卡为什么是抢手货', tag: '交互' , navTitle: '英伟达为什么值钱'},
          ],
        },
        {
          id: 't-zero-faq-myth',
          title: '小白三千问 · 祛魅打假',
          desc: '一页一问：拆穿吹牛话术与常见误解',
          lessons: [
            { file: 'zero-q-train-or-prompt.html', title: '「我训了个模型」到底训了什么？', desc: '四层梯子：改提示词、挂知识库、微调、从头预训练，每层标注真实成本；听五句吹牛，判断说话人到底在哪层', tag: '交互' , navTitle: '训模型还是改提示词'},
            { file: 'zero-q-jargon-translator.html', title: 'AI 圈黑话翻译器', desc: '自研、套壳、数字员工、赋能…点击发布会原话翻译成人话，附含金量分级和三个当场问出底细的追问', tag: '交互' , navTitle: 'AI 圈黑话翻译器'},
            { file: 'zero-q-opensource-free.html', title: '「开源模型」等于免费吗？', desc: '权重、数据、方法三件套逐项检查主流模型开放了什么；满血版 vs 蒸馏版对比，你本地跑的多半是小号', tag: '交互' , navTitle: '开源模型等于免费吗'},
            { file: 'zero-q-benchmark.html', title: '「跑分第一」的模型，为什么用起来不行？', desc: '榜单分和真实好用度的反转演示 + 三个原因：刷榜、过拟合题库、场景不匹配；顺便说清什么榜更可信', tag: '交互' , navTitle: '跑分第一为什么不行'},
            { file: 'zero-q-ai-learning.html', title: 'AI 越聊越懂我，是它在学习吗？', desc: '你以为模型在长大，实际是一张笔记被塞回对话：双画面对比动画 + 新开对话「失忆」演示', tag: '交互' , navTitle: 'AI 是在学习吗'},
            { file: 'zero-q-ai-detector.html', title: 'AI 检测器说「这是 AI 写的」，可信吗？', desc: '六段文字猜检测器判定，亲手体验误伤名场面；为什么原理上就做不准，被冤枉了怎么办', tag: '交互' , navTitle: 'AI 检测器可信吗'},
            { file: 'zero-q-prompt-course.html', title: '「提示词秘籍」值得买吗？', desc: '把付费课卖点逐条拆开：哪些本站免费教过、哪些是正确的常识、哪些纯属包装。骨架免费，功夫在多用', tag: '交互' , navTitle: '提示词秘籍值得买吗'},
            { file: 'zero-q-randomness.html', title: '同一个问题，为什么每次答案不一样？', desc: '同题连问三次看三种回答，配「下一个字」概率骰子动画；这是设计而非故障，什么场景需要稳定输出', tag: '交互' , navTitle: '为什么每次答案不一样'},
            { file: 'zero-q-ai-customer-service.html', title: 'AI 客服为什么那么蠢？', desc: '同一句投诉发给聊天 AI 和客服机器人，差距一目了然；三个原因：省钱用小模型、护栏锁死、老技术冒充新 AI', tag: '交互' , navTitle: 'AI 客服为什么蠢'},
            { file: 'zero-q-siri-vs-chatgpt.html', title: 'Siri 和 ChatGPT 是一种东西吗？', desc: '同一句话两代助手的处理路径动画：命令匹配听不懂就道歉，生成式什么说法都接得住', tag: '交互' , navTitle: 'Siri 和 ChatGPT 的区别'},
          ],
        },
        {
          id: 't-zero-faq-money',
          title: '小白三千问 · 花钱与安全',
          desc: '一页一问：费用、账号与隐私',
          lessons: [
            { file: 'zero-q-free-vs-paid.html', title: '免费的 AI 够用吗？什么时候值得付费？', desc: '免费版透视：模型档位、次数、上下文、高峰排队四项逐个点亮；三类人对号入座，各给一句结论', tag: '交互' , navTitle: '免费的 AI 够用吗'},
            { file: 'zero-q-api-vs-membership.html', title: 'API 是什么？和开会员有什么区别？', desc: '包月自助餐 vs 按量散称：拖动用量滑块算两种方式各花多少钱，找到你的分界点', tag: '交互' , navTitle: 'API 和会员的区别'},
            { file: 'zero-q-image-cost.html', title: '生成一张图为什么贵几十倍？', desc: '一次问答几厘钱，一张图两三毛。成本条动画 + 三个原因：像素多、要画几十遍、显卡被独占', tag: '交互' , navTitle: '生成一张图为什么贵'},
            { file: 'zero-q-video-cost.html', title: 'AI 视频为什么按秒收费？', desc: '拖动滑块看看：10 秒视频 = 240 帧连贯的图 + 物理合理 + 音画同步。省钱顺序也一并分享', tag: '交互' , navTitle: 'AI 视频为什么按秒收费'},
            { file: 'zero-q-relay.html', title: '什么是 API 中转站？', desc: '三折价格背后：你的每句话都要经过一个无法核实的中间人。路径动画讲清三个结构性风险', tag: '交互' , navTitle: '什么是 API 中转站'},
            { file: 'zero-q-reverse-proxy.html', title: '「拼车号」「共享号」是什么？', desc: '9.9 的 Plus 拼车 = 三十人合租单人间。动画演示：记录互看、封号连坐、钥匙在别人手里', tag: '交互' , navTitle: '拼车号、共享号是什么'},
            { file: 'zero-q-privacy.html', title: '我的聊天记录会被拿去训练吗？', desc: '一句话发出去之后经过哪些环节、哪步可能进语料；训练开关怎么关，免费版和企业版差在哪', tag: '交互' , navTitle: '聊天记录会被拿去训练吗'},
          ],
        },
        /* 放在小白三千问之后：本主题的「你的下一步」是零基础入门篇的收官分流页，
           要紧挨大模型原理篇，才接得上它「进入大模型原理篇」的按钮。 */
        {
          id: 't-zero-trust',
          title: '什么能放心交给它',
          desc: '一套三秒钟的信任判断法',
          lessons: [
            { file: 'zero-6.html', title: '放心用，还是要核实？', desc: '八道判断题小游戏 + 信任四象限：有标准答案吗？错了后果大吗？健康钱法律三条红线', tag: '交互' , navTitle: '放心用，还是要核实'},
            { file: 'zero-final.html', title: '你的下一步', desc: '六个直觉行囊盘点 + 三道题分流测试，找到最适合你的学习路径', tag: '收官' },
          ],
        },
      ],
    },
    {
      id: 'p1',
      num: '大模型原理',
      title: '大模型是怎么来的',
      desc: '从训练数据、Token 到 GPT 跃进，再到大模型幻觉的成因与四种应对方案，建立对大模型底层原理的完整认知。',
      color: '#0066ff',
      group: 'main',
      routes: ['pro', 'pm', 'build'],   // 原理整章进「用到专业」：知道它为什么会编，用起来才有判断力
      topics: [
        {
          id: 't-basic',
          title: '基础原理',
          desc: '训练数据、训练 vs 推理、词表与注意力',
          lessons: [
            { file: 'training-data.html', title: 'AI 的食物：训练数据', desc: '15T Token 是什么概念？语料构成可视化 + 数据规模直觉滑块', tag: '交互' , navTitle: '训练数据规模'},
            { file: 'train-vs-infer.html', title: '训练 vs 推理：两个不同的过程', desc: '对话不是学习，参数冻结，按 Token 计费，这些是 AI 产品必懂的底层逻辑', tag: '概念' , navTitle: '训练 vs 推理'},
            { file: '1-2-vocab.html', title: '词表与训练', desc: '从语料到词间矩阵，Token 化 + 注意力权重交互演示', tag: '交互' },
            { file: '1-2-base.html', title: 'Base 模型：Token 推 Token 机器', desc: '训练结束后得到什么？逐步生成 + 概率分布实时更新', tag: '动画' , navTitle: 'Base 模型'},
            { file: '1-2-gpt.html', title: 'GPT 的跃进：PreTraining 改变一切', desc: 'CNN / RNN / BERT / GPT 四种算法可交互对比，记忆衰减可视化', tag: '交互' , navTitle: 'GPT 的跃进'},
          ],
        },
        {
          id: 't-chat',
          title: '从补全到对话',
          desc: '补全机器是如何变成聊天机器人的',
          lessons: [
            { file: '1-2-api.html', title: 'chat/completions 之谜', desc: '明明是对话，为什么 API 叫「补全」？打字机动画解读', tag: '动画' },
            { file: '1-2-fake-chat.html', title: '伪造聊天记录', desc: 'OpenAI 最初的实验：把补全机器变成聊天机器人', tag: '动画' },
            { file: '1-2-sft.html', title: 'Chat Template + SFT', desc: 'Jinja 格式、指令微调，大模型终于学会说话', tag: '概念' },
            { file: '1-2-prompt-power.html', title: '上下文窗口是关键', desc: '提示词为什么够用？Token 截断可视化，无需重新训练', tag: '交互' },
          ],
        },
        {
          id: 't-hallucination',
          title: '幻觉与四种应对',
          desc: '幻觉成因，以及 Prompt / RAG / Temperature / 评测四种缓解方案',
          lessons: [
            { file: '1-2-hallucination.html', title: '大模型幻觉演示', desc: '三类典型幻觉：事实错误 / 自信编造 / 知识截止', tag: '案例' , navTitle: '大模型幻觉'},
            { file: '1-2-mitigation-prompt.html', title: '应对 1：Prompt Engineering', desc: '约束指令 + 局限性：模型不知道自己不知道什么', tag: '概念' , navTitle: 'Prompt Engineering'},
            { file: '1-2-mitigation-rag.html', title: '应对 2：RAG 检索增强生成', desc: '真实文档注入上下文，5 步交互流程动画，对比有无 RAG 的差异', tag: '交互' , navTitle: 'RAG 检索增强'},
            { file: 'rag-advanced.html', title: 'RAG 的代价与优化策略', desc: '成本分析表 + 关键词触发 / 模型路由 / 语义缓存 / 精准切块四种策略', tag: 'PM 进阶' , navTitle: 'RAG 代价与优化'},
            { file: '1-2-mitigation-temp.html', title: '应对 3：Temperature & Top-P', desc: '拖动滑块，实时看概率分布和输出变化', tag: '交互' , navTitle: 'Temperature & Top-P'},
            { file: '1-2-mitigation-eval.html', title: '应对 4：评测 + 人工审核', desc: '外部纠错层，冷启动阶段兜底策略（HITL）', tag: '概念' , navTitle: '评测 + 人工审核'},
          ],
        },
        {
          id: 't-summary1',
          title: '篇章汇总',
          desc: '大模型原理篇核心知识回顾',
          lessons: [
            { file: 'summary-1.html', title: '汇总（上）· 大模型是什么 + 幻觉', desc: '训练本质 / Token / Base→SFT→Chat / 四种幻觉类型与根因', tag: '汇总' , navTitle: '大模型原理篇汇总（上）'},
            { file: 'summary-1b.html', title: '汇总（下）· 缓解策略 + 决策框架', desc: '四种缓解策略对比 / 常见误区清单 / 方案选择判断矩阵', tag: '汇总' , navTitle: '大模型原理篇汇总（下）'},
          ],
        },
        {
          id: 't-build1',
          title: '你现在能做什么',
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'build-1.html', title: '把那件事定下来', desc: '需求收敛四段演示；三档任务：写四行需求、用五个真实输入试它、划一条人机分界线', tag: '实战' },
          ],
        },
        {
          id: 't-interview1',
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'interview-1.html', title: '大模型基础 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：概率预测 / message list / 幻觉解释 / RAG vs 重训 / Temperature / 上下文窗口', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p2',
      num: 'Harness 核心',
      title: 'AI Harness',
      desc: '上下文工程、Prompt 进阶与安全、Agent 设计与工具调用、五层成本优化体系，把大模型真正落地为可用产品。',
      color: '#7c3aed',
      group: 'main',
      routes: ['use', 'pro', 'pm', 'build'],   // Harness 核心篇有三个主题任何人都用得上，篇章并集含 use
      topics: [
        {
          id: 't-context',
          title: '上下文工程',
          desc: 'AI 的工作记忆与溢出处理',
          lessons: [
            { file: '5-1.html', title: '上下文窗口：AI 的工作记忆', desc: '窗口构成可视化，拖动模拟溢出效果，主流模型容量对比', tag: '交互' , navTitle: '上下文窗口'},
            { file: '5-2.html', title: '上下文溢出：三种处理策略', desc: '直接截断 / 摘要压缩 / 选择性保留，可视化对比每种策略的利弊', tag: '交互' , navTitle: '上下文溢出策略'},
          ],
        },
        {
          id: 't-prompt',
          title: 'Prompt 工程',
          desc: 'Markdown、角色扮演、进阶技巧与输出格式',
          lessons: [
            { file: '6-0a.html', title: '为什么大模型选择 Markdown', desc: '纯文本模型 + 排版需求 = MD 成为首选，逐步推演 HTML/Word/LaTeX 为何不行', tag: '动画' , navTitle: '为什么选 Markdown'},
            { file: '6-0b.html', title: 'Markdown 语法与渲染 Pipeline', desc: '常用语法速查 + 实时编辑器 + marked.js / markdown-it 渲染方案', tag: '交互' , navTitle: 'MD 语法与工程渲染'},
            { file: '6-1.html', title: '你说什么，它就变什么', desc: '五种角色实时切换，输出格式控制，System Prompt 核心原理', tag: '交互' , navTitle: 'Prompt 角色扮演'},
            { file: '6-2.html', title: 'Prompt 进阶技巧', desc: 'Few-Shot / CoT / 约束条件 / 任务拆解，好坏对比交互演示', tag: '交互' },
            { file: '6-3.html', title: '输出格式取舍', desc: '纯文本 / JSON / Markdown / YAML / XML，场景适配度对比与权衡', tag: '交互' },
            { file: '6-4.html', title: '流式返回与格式配合', desc: 'JSON 全文才能解析 / MD 逐字显示 / XML 捕获标签即渲染，动态演示', tag: '交互' , navTitle: '流式返回与格式'},
          ],
        },
        {
          id: 't-security',
          title: 'Prompt 安全',
          routes: ['pm', 'build'],   // Prompt 注入与防护，做产品才需要
          desc: 'Prompt Injection 原理、案例与防御实战',
          lessons: [
            { file: 'prompt-attack.html', title: 'Prompt Injection：为什么会被攻击', desc: 'SQL 注入类比 → Message List 本质 → 缺乏参数化 → 5 大攻击类型概览', tag: '安全' , navTitle: 'Prompt 注入原理'},
            { file: 'prompt-attack-cases.html', title: 'Prompt Injection：12 个攻击案例', desc: '越权指令 / 角色扮演 / Few-Shot / 结构注入 / 隐喻伪装，中招版 vs 防御版', tag: '安全' , navTitle: '12 个攻击案例'},
            { file: 'prompt-defense.html', title: 'Prompt 防御：三层拦截实战', desc: '输入层正则 → 提示词层约束 → 输出层泄漏检测 → 二次审核，可模拟攻击全链路', tag: '实战' , navTitle: 'Prompt 防御实战'},
            { file: 'ai-safety-redlines.html', title: 'AI 安全红线：四条底线', desc: '不能做的事、做了会怎样，产品经理必须守住的四类安全边界', tag: '安全' , navTitle: 'AI 安全红线'},
            { file: 'ai-safety-governance.html', title: '风险分级与责任：谁来管、怎么管', desc: 'AI 输出的风险分级模型，各角色的责任分工与治理框架', tag: '安全' , navTitle: '风险分级与责任'},
          ],
        },
        {
          id: 't-agent',
          title: 'Agent 工程',
          routes: ['pm', 'build'],   // Agent 工程，产品路线要懂能力边界
          desc: 'Agent 能力、工具调用、ReAct、记忆、Skill 与脚手架',
          lessons: [
            { file: '7-1.html', title: 'Agent：能干活的 AI', desc: '四大能力 Plan / Tool / Memory / Act，点击查看真实案例', tag: '交互' , navTitle: 'Agent 概念'},
            { file: '7-2.html', title: '工具调用的秘密', desc: '模型输出 JSON → 框架解析执行 → 结果注回，四步流程可视化', tag: '交互' , navTitle: '工具调用'},
            { file: '7-2a.html', title: '一次对话背后的 5 条消息', desc: '拆解 Function Calling 真实链路：用户看到 1 条回复，背后是 5 条 API 消息', tag: '深入' , navTitle: '一次对话背后的5条消息'},
            { file: '7-2b.html', title: '工具描述的学问', desc: '同样功能，好描述 vs 坏描述成功率差 3 倍，对比实验', tag: '深入' },
            { file: '7-2c.html', title: '多工具编排：并发 vs 串行', desc: 'isConcurrencySafe 决定工具能否并行，调度策略可视化', tag: '深入' , navTitle: '多工具编排'},
            { file: '7-2d.html', title: 'MCP 协议：工具的 USB 接口', desc: 'stdio / SSE / Streamable HTTP 三种传输方式对比，数据流动画', tag: '深入' , navTitle: 'MCP 协议'},
            { file: '7-3.html', title: 'ReAct 实战：查询天气完整链路', desc: 'Thought / Action / Observation 逐步演示，7 步完整 Agent 链路', tag: '动画' , navTitle: 'ReAct 实战'},
            { file: '7-3a.html', title: '短期记忆 = 上下文窗口', desc: '消息列表可视化，每条消息的 Token 占用和角色标记', tag: '深入' , navTitle: '上下文窗口'},
            { file: '7-3b.html', title: '上下文压缩：四层防线', desc: '60% 裁剪 → 75% 微压缩 → 85% 折叠 → 95% 紧急，拖动滑块看压缩过程', tag: '深入' , navTitle: '上下文压缩四层策略'},
            { file: '7-3c.html', title: '长期记忆：向量检索', desc: 'Embedding → 向量数据库 → 语义搜索，topK 与 minScore 的设计决策', tag: '深入' , navTitle: '长期记忆'},
            { file: '7-4a.html', title: 'ReAct 循环：思考→行动→观察', desc: '一个删除 console.log 的任务经历 14 轮循环，含自我纠错', tag: '深入' , navTitle: 'ReAct 循环'},
            { file: '7-4b.html', title: 'Agent 卡死的 5 种模式', desc: '参数格式错误、幻觉工具、无限递归、信息不足、API 异常', tag: '深入' , navTitle: 'Agent 卡死的5种模式'},
            { file: '7-4c.html', title: '权限与安全', desc: '5 种权限模式 + LLM 风险分级 + Human-in-the-loop 设计', tag: '深入' },
            { file: '7-5.html', title: 'Skill：让 Agent 少走弯路', desc: 'Skill = 流程说明 + 工具调用指引，用「阳台收衣服」类比好循环 vs 差循环', tag: '交互' , navTitle: 'Skill 技能'},
            { file: '7-5a.html', title: 'Skill 的本质', desc: '好循环 vs 差循环升级版，Skill 如何改变 Agent 执行路径', tag: '深入' },
            { file: '7-5b.html', title: '解剖一个真实 Skill', desc: '从真实源码学 SKILL.md 的结构设计', tag: '深入' },
            { file: '7-4.html', title: '脚手架工程：从试验品到产品', desc: '模拟 Agent 查机票订酒店，无脚手架 vs 有脚手架完整对比，5 大能力详解', tag: '交互' , navTitle: '脚手架工程'},
            { file: '7-6a.html', title: '5 道工程护栏', desc: '迭代上限、输出截断、超时控制、中断恢复、上下文急救', tag: '深入' , navTitle: '5道工程护栏'},
            { file: '7-6b.html', title: '多 Agent 协作', desc: '子 Agent 调度、Worker Thread、并行 vs 串行执行策略', tag: '深入' },
            { file: '7-6c.html', title: '可观测性', desc: '事件流可视化、Token 追踪、OpenTelemetry 集成', tag: '深入' },
            { file: '7-summary.html', title: 'Agent 工程全景图', desc: '从四大能力到工程落地，一页看清 Agent 的完整知识地图', tag: '汇总' },
          ],
        },
        {
          id: 't-vector-db',
          title: '向量数据库',
          routes: ['pm', 'build'],
          desc: '从 Embedding 与 Milvus 到 RAG 和 Agent 知识库；可先复习<a href="7-3c.html">长期记忆 / 向量检索</a>、<a href="rag-advanced.html">RAG 的代价与优化策略</a>和<a href="1-2-mitigation-rag.html">RAG 检索增强生成</a>',
          lessons: [
            { file: 'vector-db-1.html', title: '从 Embedding 到 Milvus', desc: '语义相似度、ANN 与向量数据库的职责边界', tag: '入门' },
            { file: 'vector-db-2.html', title: 'Milvus 心智模型', desc: 'Collection、Schema、Entity、Index、Search、Query 与 Load', tag: '基础' },
            { file: 'vector-db-3.html', title: 'Milvus 实操', desc: '连接、建表、批量写入、索引、搜索、查询和删除', tag: '实战' },
            { file: 'vector-db-4.html', title: '从检索到 RAG', desc: '切分、过滤、混合检索、RRF、重排与评测', tag: 'RAG' },
            { file: 'vector-db-5.html', title: 'Milvus 作为 Agent 知识库工具', desc: 'search_knowledge 工具、ToolMessage、记忆分层与测试', tag: 'Agent' },
          ],
        },
        {
          id: 't-cost',
          title: '成本优化与选型',
          routes: ['pm', 'build'],   // 成本与选型，产品路线的刚需
          desc: 'KV Cache、缓存、图片 Token、语法/语义/输出层优化与模型选型',
          lessons: [
            { file: '8-1.html', title: '多轮对话为什么越来越贵', desc: 'Token 累积成本可视化，拖动轮次查看费用如何指数增长', tag: '交互' , navTitle: '多轮对话成本'},
            { file: '8-2.html', title: 'KV Cache：用空间换时间（和钱）', desc: '类比理解 + 节省效果计算器，拖动轮次查看节省比例', tag: '交互' , navTitle: 'KV Cache'},
            { file: '8-2b.html', title: '显式缓存：实战对比', desc: 'cache_control 写法、缓存命中判断、价格折扣对比，真实省钱效果演示', tag: '交互' , navTitle: '显式缓存'},
            { file: '8-3.html', title: '动态时间戳：最贵的 System Prompt', desc: '错误设计 vs 正确设计，三种时间处理方案对比切换', tag: '反例' , navTitle: '动态时间戳'},
            { file: '8-4.html', title: '综合成本优化：从系统角度省钱', desc: '5 层优化策略，成本构成可视化，节省 70-90% 的系统设计', tag: '系统设计' , navTitle: '综合成本优化'},
            { file: '8-5.html', title: '图片 Token：像素也在烧钱', desc: '图片计费公式、缩放机制、分辨率陷阱、按任务分级策略', tag: '多模态' , navTitle: '图片 Token 计费'},
            { file: '8-5b.html', title: '按任务匹配分辨率', desc: '高/中/低三档分辨率策略，不同场景的 Token 消耗对比与选型建议', tag: '多模态' },
            { file: '8-6.html', title: '语法层优化：写给机器的提示词', desc: 'YAML vs JSON、CSV vs 数组、压缩 JSON 输出，格式性 Token 省 10-30%', tag: '提示词工程' , navTitle: '语法层优化'},
            { file: '8-7.html', title: '语义层优化：不要把上下文当垃圾桶', desc: '动态 Few-Shot、LLMLingua-2 压缩、关键信息放首尾，提升信息密度', tag: 'RAG' , navTitle: '语义层优化'},
            { file: '8-8.html', title: '输出层 + KV Cache 进阶', desc: '负向约束、Diff 润色、停止序列；KV Cache 的工具陷阱与滑动窗口问题', tag: '架构' , navTitle: '输出层+KV进阶'},
            { file: 'cost-eval.html', title: '模型选型：能力 vs 成本', desc: '主流模型能力/成本矩阵、选型决策树、不同场景的模型匹配策略', tag: '选型' },
            { file: 'engineering-philosophy.html', title: '大道至简：坚守第一性原理', desc: 'AI Harness 的本质 / 做 vs 不做的取舍 / 会被时代淘汰的 Harness / 终极问题', tag: '收官' , navTitle: '大道至简'},
          ],
        },
        {
          id: 't-tips',
          title: '实用技巧',
          desc: '人机边界、提问方式、迭代方法、场景判断与幻觉验证，一份用 AI 的日常指南',
          lessons: [
            { file: 'ai-tips-boundary.html', title: '人机知识边界：四象限策略', desc: '什么交给 AI、什么自己来，用四象限快速判断任务分配', tag: '技巧' , navTitle: '人机知识边界'},
            { file: 'ai-tips-context.html', title: '好提问 vs 坏提问', desc: '上下文决定输出质量，同一个问题好坏对比演示', tag: '技巧' },
            { file: 'ai-tips-verify.html', title: 'AI 说的能信吗？找出幻觉', desc: '三种快速验证方法，识别 AI 自信说错的场景', tag: '技巧' , navTitle: 'AI 说的能信吗'},
            { file: 'ai-tips-iterate.html', title: '迭代的艺术：知道何时收手', desc: '从粗到精的迭代节奏，以及何时该停止追问 AI', tag: '技巧' , navTitle: '迭代的艺术'},
            { file: 'ai-tips-scenarios.html', title: '场景速查：什么时候放心用', desc: '高可信 / 需验证 / 慎用 / 不用，AI 适用场景四分类', tag: '技巧' , navTitle: '场景速查'},
          ],
        },
        {
          id: 't-summary2',
          title: '课程收官',
          routes: ['pm', 'build'],   // 篇章收官，跟着正课走
          desc: 'Harness 核心篇回顾 + 完整课程总结',
          lessons: [
            { file: 'summary-2.html', title: '汇总（上）· Prompt 工程 + Agent', desc: '上下文溢出策略 / Prompt 六要素 / 工具调用真相 / Skill + 脚手架', tag: '汇总' , navTitle: 'Harness 核心篇汇总（上）'},
            { file: 'summary-2b.html', title: '汇总（下）· 成本优化 + PM 视角', desc: '五层成本体系 / KV Cache 原理 / 图片 Token / 课程完整能力清单', tag: '汇总' , navTitle: 'Harness 核心篇汇总（下）'},
            { file: 'summary-final.html', title: '课程总结 · 产品经理的第一节 AI 课', desc: '从大模型原理到工程落地，完整课程一页回顾', tag: '汇总' , navTitle: '课程总结'},
            { file: 'summary-final-1.html', title: '总结（上）· 原理 + Harness', desc: '大模型认知框架 / 幻觉应对 / Prompt 与 Agent 核心要点', tag: '汇总' , navTitle: '总结（上）'},
            { file: 'summary-final-2.html', title: '总结（下）· 实战 + 成本', desc: '安全防御 / 成本优化 / 用 AI 的正确姿势 / 下一步学习路径', tag: '汇总' , navTitle: '总结（下）'},
          ],
        },
        {
          id: 't-build2',
          title: '你现在能做什么',
          routes: ['pm', 'build'],   // 落地清单，跟着正课走
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'build-2.html', title: '让它连跑五次都能用', desc: '同一输入五连跑演示；三档任务：写第一版提示词、给不稳定归类、加示例与违禁项重跑对比', tag: '实战' },
          ],
        },
        {
          id: 't-interview2',
          title: '他们会这样考你',
          routes: ['pm', 'build'],   // 面试题，跟着正课走
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'interview-2.html', title: 'AI Harness · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：上下文溢出 / Prompt 工程 / 注入防御 / 工具调用 / 成本账单 / KV Cache / 输出格式', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p3',
      num: '动手实战',
      title: '实战 · 从 Demo 到产品',
      desc: '以真实 AI Agent 桌面应用为例，拆解生图产品化、Agent 循环控制、上下文压缩、长期记忆、Prompt Harness、多 Agent 协作、权限安全与 MCP 生态，走完从「调通 API」到「用户能用」的完整实战路径。',
      color: '#059669',
      group: 'main',
      prereq: '建议先学过 Harness 核心',
      routes: ['pm', 'build'],
      topics: [
        {
          id: 't-alice-intro',
          title: '开篇',
          desc: '本章从哪来：一个真实产品的开发实录',
          lessons: [
            { file: '9-0.html', title: '本章从哪来：Alice 开发实录', desc: '本章是作者开发 AI Agent 桌面应用 Alice 的经验总结：约 50 万行代码、132 个工具、8 大模块与本章 8 个小节一一对应', tag: '开篇' , navTitle: 'Alice 开发实录'},
          ],
        },
        {
          id: 't-imagegen',
          title: 'AI 生图',
          desc: '文生图、垫图、角色一致性、多模型降级与产品化',
          lessons: [
            { file: '9-1.html', title: '文生图 vs 垫图：两种完全不同的事', desc: '一个从文字出发，一个从图片出发。产品经理要分清什么时候用哪种', tag: '概念' , navTitle: '文生图 vs 垫图'},
            { file: '9-2.html', title: '用 AI 给 AI 写 Prompt', desc: '用户说「画个夕阳下的猫」，生图模型需要的是完全不同的描述，解法是用 LLM 做翻译', tag: '实战' },
            { file: '9-3.html', title: '角色一致性：最难的产品问题', desc: '同一个 IP 每次画都长不一样。为什么难、产品上怎么思考这个问题', tag: '案例' , navTitle: '角色一致性'},
            { file: '9-4.html', title: '模型会挂，然后呢？', desc: '多模型降级链的产品逻辑：优先级、白名单、探活、全挂时的体验兜底', tag: '实战' , navTitle: '模型会挂，然后呢'},
            { file: '9-5.html', title: '生图的产品化清单', desc: '从「调通了 API」到「用户能用」之间还差哪些东西，一张 checklist 数清楚', tag: '系统设计' , navTitle: '生图产品化清单'},
          ],
        },
        {
          id: 't-agentloop',
          title: 'Agent Loop',
          routes: ['build'],   // Agent Loop 实现细节
          desc: '生产级循环的控制、防护与流式体验',
          lessons: [
            { file: '9-6.html', title: '教科书的 3 步 vs 真实的 N 步', desc: 'ReAct 不止 Think-Act-Observe 三步，生产环境每轮还要做什么', tag: '概念' , navTitle: '教科书 vs 真实 N 步'},
            { file: '9-7.html', title: '为什么 Agent 会卡死', desc: '真实场景中循环挂掉的几种典型模式，以及用户会看到什么', tag: '案例' , navTitle: 'Agent 为什么会卡死'},
            { file: '9-8.html', title: '防呆设计：怎么让循环自己停下来', desc: '上限、检测、降级三类策略的思路，产品经理该在哪里画线', tag: '实战' , navTitle: '防呆设计'},
            { file: '9-9.html', title: '流式体验：别让用户干等', desc: '工具在后台跑 30 秒，用户看到的应该是什么？进度感设计', tag: '交互' , navTitle: '流式体验'},
            { file: '9-10.html', title: '一条消息背后的真实成本', desc: '用户发一句话，底层可能跑 10+ 轮循环、几十条 API 消息，由此建立成本意识', tag: '深入' , navTitle: '一条消息的真实成本'},
          ],
        },
        {
          id: 't-ctxmgmt',
          title: '上下文管理',
          routes: ['build'],   // 上下文管理实现细节
          desc: '对话越长越贵越笨：压缩的艺术与取舍',
          lessons: [
            { file: '9-11.html', title: '对话越长越贵、越长越笨', desc: '费用递增 + 注意力衰减 + 窗口有限，三个必须管理上下文的理由', tag: '概念' , navTitle: '越长越贵越笨'},
            { file: '9-12.html', title: '压缩是一门取舍的艺术', desc: '有的能删、有的不能删、有的要花钱压，这是产品经理的决策框架', tag: '实战' , navTitle: '压缩的艺术'},
            { file: '9-13.html', title: '用户说的话能不能删？', desc: '「圣物」问题：AI 的输出可以压缩，但用户的原话删了就回不来', tag: '概念' , navTitle: '用户的话能删吗'},
            { file: '9-14.html', title: '本地压缩 vs LLM 压缩', desc: '零成本快但粗 vs 有成本慢但精，什么时候用哪种', tag: '深入' , navTitle: '本地 vs LLM 压缩'},
          ],
        },
        {
          id: 't-memory',
          title: '长期记忆',
          routes: ['build'],   // 长期记忆实现细节
          desc: '让 AI 认识你：记忆的提取、冲突与注入',
          lessons: [
            { file: '9-15.html', title: '上下文 ≠ 记忆', desc: '白板（上下文窗口）和笔记本（长期记忆）的区别，为什么需要两套系统', tag: '概念' },
            { file: '9-16.html', title: '什么值得记、什么不值得记', desc: '不是所有对话都有价值：守门员思路与筛选逻辑', tag: '实战' , navTitle: '什么值得记'},
            { file: '9-17.html', title: '记忆冲突：用户改了主意怎么办', desc: '新旧记忆冲突的四种处理策略：新增 / 合并 / 冲突标记 / 跳过', tag: '案例' , navTitle: '记忆冲突'},
            { file: '9-18.html', title: '记忆注入的成本问题', desc: '记了 1000 条，每次全塞进去？还是按需检索？两种策略的代价', tag: '深入' , navTitle: '记忆注入的成本'},
          ],
        },
        {
          id: 't-prompteng',
          title: 'Prompt Harness',
          routes: ['build'],   // Prompt Harness 实现细节
          desc: '从字符串到架构：分层、按需加载与 Skill 模块化',
          lessons: [
            { file: '9-19.html', title: 'System Prompt 不是一坨文本', desc: '分层管理的必要性：身份、环境、工具指引各自独立，互不干扰', tag: '架构' , navTitle: 'System Prompt 分层'},
            { file: '9-20.html', title: '不用的东西别给 AI 看', desc: '100 个工具全塞 system？Token 爆炸。这就需要按需加载的设计思路', tag: '实战' , navTitle: '按需加载'},
            { file: '9-21.html', title: 'Skill：可运营的 Prompt 模块', desc: '文件即配置、版本可追溯，让 Prompt 也能像代码一样管理', tag: '实战' , navTitle: 'Skill 模块化'},
            { file: '9-22.html', title: '提示词和缓存的微妙关系', desc: '改一个字 System Prompt，整条 KV Cache 作废。怎么减少手抖的成本', tag: '深入' , navTitle: '提示词与缓存'},
          ],
        },
        {
          id: 't-multiagent',
          title: '多 Agent',
          routes: ['build'],   // 多 Agent 实现细节
          desc: '并行、脑暴、定时任务与协作成本',
          lessons: [
            { file: '9-23.html', title: '什么时候需要多个 Agent', desc: '并行加速、角色分工、风险隔离，三种真实场景', tag: '概念' , navTitle: '何时需要多 Agent'},
            { file: '9-24.html', title: '并发的代价：谁能同时跑', desc: '「看」可以并行，「改」必须排队，为什么以及怎么判断', tag: '实战' , navTitle: '并发的代价'},
            { file: '9-25.html', title: '脑暴：让多个 AI 吵架', desc: '同一问题多角度独立思考，汇总共识与分歧，这是群体智慧的 AI 版', tag: '交互' , navTitle: '脑暴模式'},
            { file: '9-26.html', title: '定时任务的成本陷阱', desc: 'Agent 定时跑任务，上下文是累积还是重建？一个选择差 10 倍成本', tag: '反例' , navTitle: '定时任务成本'},
          ],
        },
        {
          id: 't-security',
          title: '权限与安全',
          routes: ['build'],   // 权限与安全的落地实现
          desc: 'Agent 的缰绳：权限分级、审批与可观测性',
          lessons: [
            { file: '9-27.html', title: 'AI 该有多大的自由', desc: '完全自主 vs 每步审批，五种权限模式和适用场景', tag: '概念' , navTitle: 'AI 的自由度'},
            { file: '9-28.html', title: '弹窗太多用户烦，不弹又不安全', desc: 'Human-in-the-loop 的平衡点：风险分级思路', tag: '实战' , navTitle: '弹窗与安全平衡'},
            { file: '9-29.html', title: 'Agent 干了什么你知道吗', desc: '事件流与 Token 追踪。不看日志你永远不知道出了什么错', tag: '架构' , navTitle: '可观测性'},
          ],
        },
        {
          id: 't-mcp',
          title: 'MCP 实战',
          routes: ['build'],   // MCP 实战代码
          desc: '工具生态的双向连接：消费、提供与自配置',
          lessons: [
            { file: '9-30.html', title: 'MCP 不只是「调工具」', desc: '同一个协议两个方向：消费别人的工具 vs 把自己暴露给别人', tag: '概念' , navTitle: 'MCP 双向协议'},
            { file: '9-31.html', title: '懒连接：不用别连', desc: '注册了 10 个 MCP 服务，启动时全连一遍？还是用到再连？', tag: '实战' , navTitle: '懒连接'},
            { file: '9-32.html', title: 'AI 自己加工具', desc: 'Agent 运行时发现需要新工具，自己配置 MCP 连接，这就是自配置思路', tag: '深入' , navTitle: 'AI 自加工具'},
          ],
        },
        {
          id: 't-summary3',
          title: '实战收官',
          desc: '全景回顾与核心洞察',
          lessons: [
            { file: '9-summary.html', title: '实战全景图', desc: '生图、循环、记忆、Prompt、多 Agent、安全、MCP，一张图串起来', tag: '汇总' },
            { file: '9-final.html', title: '聊天套壳 vs 真正的 Agent 产品', desc: '同一个 Loop 支撑 N 种场景，差异不在代码，在产品决策', tag: '收官' , navTitle: '聊天套壳 vs Agent 产品'},
          ],
        },
        {
          id: 't-build3',
          title: '你现在能做什么',
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'build-3.html', title: '接上第一个真工具', desc: '工具调用闭环四段演示；三档任务：选定工具、写三行描述、跑通闭环并故意搞一次破坏', tag: '实战' },
          ],
        },
        {
          id: 't-interview3',
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'interview-3.html', title: '实战 · 从 Demo 到产品 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：Demo 到上线的差距 / Agent 卡死 / 上下文压缩 / 记忆设计 / 多 Agent / MCP / 成本账单', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p4',
      num: '工程进阶',
      title: '进阶 · AI 工程设计模式',
      desc: '基于 Anthropic 公开的 Claude Code 源码与工程博客，深入拆解生产级 Agent 的设计模式：上下文工程、工具设计、评测方法论、长运行 Agent、脑手分离架构与安全容器化。',
      color: '#dc2626',
      group: 'main',
      prereq: '建议先学过动手实战',
      routes: ['pm', 'build'],
      topics: [
        {
          id: 't-agent-patterns',
          title: 'Agent 设计模式',
          desc: 'Anthropic 官方总结的五种 Workflow + 自主 Agent',
          lessons: [
            { file: '10-1.html', title: 'Workflow vs Agent：先搞清楚你要什么', desc: '预定义流程 vs 模型自主决策，Anthropic 定义的两大类 Agent 系统', tag: '设计模式' , navTitle: 'Workflow vs Agent'},
            { file: '10-2.html', title: '五种 Workflow 模式', desc: 'Prompt Chaining / Routing / Parallelization / Orchestrator-Workers / Evaluator-Optimizer', tag: '设计模式' },
            { file: '10-3.html', title: '从 Prompt 工程到上下文工程', desc: '在每一轮推理时策展最优的 Token 组合，写好提示词只是其中一环', tag: '方法论' , navTitle: '上下文工程方法论'},
            { file: '10-4.html', title: '上下文的三板斧', desc: 'Compaction、结构化笔记、子 Agent 架构，长任务的三种上下文管理策略', tag: '方法论' , navTitle: '上下文三板斧'},
          ],
        },
        {
          id: 't-tool-design',
          title: '工具设计的艺术',
          desc: '如何为 Agent 写出好工具：命名、描述、参数与 ACI',
          lessons: [
            { file: '10-5.html', title: 'ACI：Agent-Computer Interface', desc: '工具是 Agent 和世界之间的契约。像设计人机界面一样设计 Agent 界面', tag: '设计模式' , navTitle: 'ACI 工具界面设计'},
            { file: '10-6.html', title: 'Think Tool：让 AI 先想后做', desc: '在复杂工具链中给 Agent 一个暂停思考的空间，τ-bench 性能提升 54%', tag: '深入' , navTitle: 'Think Tool'},
            { file: '10-7.html', title: '用 Agent 优化 Agent 的工具', desc: 'Claude Code 实践：用 AI 写工具描述、跑评测、自动迭代优化', tag: '实战' , navTitle: '用 Agent 优化工具'},
          ],
        },
        {
          id: 't-evals',
          title: 'Agent 评测',
          desc: '不评测就是在裸奔。如何系统化验证 Agent 质量',
          lessons: [
            { file: '10-8.html', title: '为什么评测比训练更重要', desc: '没有评测，修一个 bug 制造三个。Anthropic 的 Eval 方法论', tag: '方法论' , navTitle: '评测方法论'},
            { file: '10-9.html', title: '三种 Grader：代码、模型、人工', desc: '静态断言 vs LLM-as-Judge vs 人工校准，每种适合什么场景', tag: '实战' , navTitle: '三种 Grader'},
            { file: '10-10.html', title: '评测的坑：噪音、作弊与退化', desc: '基础设施噪音可造成 6pp 误差、模型会识别考试、改 Prompt 可能让 Eval 掉 3%', tag: '案例' , navTitle: '评测的坑'},
          ],
        },
        {
          id: 't-long-running',
          title: '长运行 Agent',
          desc: '从一轮对话到跑几小时：Harness 的设计与演进',
          routes: ['build'],   // 工程实现细节，产品路线跳过
          lessons: [
            { file: '10-11.html', title: '为什么 Agent 跑不了长任务', desc: '一口气做太多、做完就收工，两种典型失败模式', tag: '案例' , navTitle: '长任务失败模式'},
            { file: '10-12.html', title: 'Initializer + Coding Agent', desc: '初始化 Agent 搭环境、编码 Agent 增量推进，双角色 Harness 设计', tag: '设计模式' , navTitle: '双角色 Harness'},
            { file: '10-13.html', title: 'Managed Agent：脑手分离', desc: '把思考和执行拆到不同进程，像操作系统一样虚拟化 Agent', tag: '架构' , navTitle: 'Managed Agent'},
            { file: '10-14.html', title: 'Session ≠ Context Window', desc: '会话日志是持久的事件流、上下文窗口是临时的工作记忆，两者必须分离', tag: '深入' , navTitle: 'Session vs Context'},
          ],
        },
        {
          id: 't-security-advanced',
          title: '安全与容器化',
          desc: 'Anthropic 如何在产品中约束 Claude',
          routes: ['build'],   // 工程实现细节，产品路线跳过
          lessons: [
            { file: '10-15.html', title: '三类风险：滥用、失控、外部攻击', desc: 'Anthropic 的安全分类框架：用户滥用 / 模型 Misbehavior / Prompt Injection', tag: '安全' , navTitle: '三类安全风险'},
            { file: '10-16.html', title: '沙箱与凭证隔离', desc: '生成的代码和密钥永远不在同一个容器里。结构性安全比靠提示词更可靠', tag: '安全' },
          ],
        },
        {
          id: 't-summary4',
          title: '进阶收官',
          desc: '全景回顾与核心设计原则',
          lessons: [
            { file: '10-17.html', title: 'Contextual Retrieval：更好的 RAG', desc: '在检索前先给 Chunk 加上下文，Anthropic 的 RAG 升级方案', tag: '深入' , navTitle: 'Contextual Retrieval'},
            { file: '10-summary.html', title: '进阶全景图', desc: '设计模式、工具、评测、长运行、安全，一张图串起来', tag: '汇总' },
            { file: '10-final.html', title: '做最简单的、能跑的东西', desc: 'Anthropic 的核心工程哲学："Do the simplest thing that works"', tag: '收官' , navTitle: 'Do the simplest thing'},
          ],
        },
        {
          id: 't-build4',
          title: '你现在能做什么',
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'build-4.html', title: '搭你的第一个评测集', desc: '改动前后跑分对比演示；三档任务：攒十条真实用例、写通过标准跑基线、用分数说话', tag: '实战' },
          ],
        },
        {
          id: 't-interview4',
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'interview-4.html', title: 'AI 工程设计模式 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：上下文工程 / 长任务 / grep vs RAG / ACI 工具设计 / 评测基建 / LLM-as-Judge / 沙箱隔离', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p5',
      num: '自我改进',
      title: 'Harness 与自我改进',
      desc: '从 Harness 设计模式到递归自我改进：当 Agent 开始优化自己的脚手架，AI 工程进入新阶段。基于 Lilian Weng 2026 年前沿综述。',
      color: '#7c3aed',
      group: 'main',
      prereq: '建议先学过工程进阶',
      routes: ['build'],
      topics: [
        {
          id: 't-harness-intro',
          title: 'Harness 概论',
          desc: '递归自我改进与 Harness 的核心地位',
          lessons: [
            { file: '11-1.html', title: '从脚手架到自我改进系统', desc: '递归自我改进（RSI）的历史与近期路径：模型改进 Harness，不直接改写权重', tag: '前沿' , navTitle: '从脚手架到自我改进'},
            { file: '11-2.html', title: 'Harness 三大设计模式', desc: '工作流自动化 / 文件系统持久记忆 / 子 Agent 与后台任务，构建 Agent 运行时的三个基石', tag: '设计模式' },
          ],
        },
        {
          id: 't-harness-optimize',
          title: 'Harness 优化',
          desc: '从上下文工程到工作流自动搜索',
          lessons: [
            { file: '11-3.html', title: '上下文工程：从手写到自动进化', desc: 'ACE → MCE → Meta-Harness：优化对象从 prompt 内容演进到管理机制代码', tag: '前沿' , navTitle: '上下文工程自动进化'},
            { file: '11-4.html', title: '工作流设计：从手工到自动搜索', desc: 'AI Scientist / ADAS / AFlow，用 MCTS 和 Meta-Agent 搜索最优工作流', tag: '前沿' , navTitle: '工作流自动搜索'},
          ],
        },
        {
          id: 't-harness-self',
          title: '自我改进与进化',
          desc: '让 Harness 改进自己、用进化算法搜索设计空间',
          lessons: [
            { file: '11-5.html', title: '让 Harness 改进自己', desc: 'STOP 递归改善器 + Self-Harness 的 propose-evaluate-accept 循环', tag: '前沿' },
            { file: '11-6.html', title: '进化搜索：让最强 Harness 存活', desc: 'AlphaEvolve / DGM / SIA，用进化算法在庞大设计空间中发现最优 Agent', tag: '前沿' , navTitle: '进化搜索'},
          ],
        },
        {
          id: 't-harness-future',
          title: '未来与反思',
          desc: '自我改进面临的根本挑战',
          lessons: [
            { file: '11-7.html', title: '未来挑战：自我改进的七道关', desc: '弱评估器 / 记忆退化 / 奖励黑客 / 多样性坍缩 / 人类角色，通往完整 RSI 的瓶颈', tag: '前沿' , navTitle: '未来挑战七道关'},
          ],
        },
        {
          id: 't-build5',
          title: '你现在能做什么',
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'build-5.html', title: '立三条长跑规矩', desc: '上下文占用曲线与压缩阈值演示；三档任务：找到失忆轮次、写三条规矩、跑通落盘再读回', tag: '实战' },
          ],
        },
        {
          id: 't-interview5',
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'interview-5.html', title: 'Harness 与自我改进 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：Harness 本质 / 设计模式 / 上下文自动进化 / 奖励黑客 / RSI 进展与风险', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p7',
      num: '协作方法论',
      title: 'Vibe Coding 方法论',
      desc: '产品五连的第一章，也是后面四章的地基：手上没有一套稳定的协作流程，谈好看、好用、用户觉得好用都是空的。基于作者开源的 xs_vibe_rules 仓库，把多个真实项目沉淀出的 AI 协作规范拆成课程：流程控制、质量底线、文档沉淀、安全闸门与写作风格，让 AI 写得快也写得稳。',
      color: '#0d9488',
      group: 'indie',
      cluster: 'chain',
      routes: ['use', 'pro', 'pm', 'build'],   // 一个人做产品就要自己指挥 AI 写代码；两个主题任何人都用得上，篇章并集含 use
      topics: [
        {
          id: 't-vibe-why',
          routes: ['use', 'pro', 'pm', 'build'],   // AI 为什么会写崩，跟 AI 打交道的人都该知道
          title: '理念与入门',
          desc: '为什么 AI 写得快反而容易搞砸，Rules 为什么是最稳的约束方式',
          lessons: [
            { file: 'vibe-1.html', title: '为什么要给 AI 立规矩', desc: 'Vibe Coding 的四类典型事故，以及 Rule 是最稳上下文注入方式的原理', tag: '交互' },
          ],
        },
        {
          id: 't-vibe-flow',
          routes: ['pro', 'pm', 'build'],   // 四步流程与 PlayGround，偏动手
          title: '流程控制',
          desc: '在 AI 动手之前设好人工断点',
          lessons: [
            { file: 'vibe-2.html', title: '四步流程：复述、PRD、确认、编码', desc: '把需求确认环节搬进人机协作，批量修改先列计划，新功能先查重', tag: '交互' , navTitle: '四步流程'},
            { file: 'vibe-3.html', title: 'PlayGround：组件的试衣间', desc: '简化版 Storybook 思路：先做独立 demo 调好再集成，demo 只增不删', tag: '交互' , navTitle: 'PlayGround 试衣间'},
          ],
        },
        {
          id: 't-vibe-quality',
          routes: ['pro', 'pm', 'build'],   // 注释、调试、交付粒度，偏代码
          title: '质量底线',
          desc: '样式复用、注释、调试与完整实现的硬性要求',
          lessons: [
            { file: 'vibe-3b.html', title: '样式收敛：一个按钮不要八套 CSS', desc: '样式为什么会增殖、怎么分批收进 token，以及哪些差异该留着', tag: '交互' , navTitle: '样式收敛'},
            { file: 'vibe-4.html', title: '注释三要素与代码保护', desc: '背景、设计意图、关键约束缺一不可；禁止静默删除代码与依赖', tag: '交互' },
            { file: 'vibe-5.html', title: '调试铁律：先 Log 再改码', desc: '禁止猜测性修复，修复前回答三个问题，改完声明影响范围', tag: '交互' , navTitle: '调试铁律'},
            { file: 'vibe-6.html', title: '不接受分期交付', desc: 'AI 爱做「先上简版」的真实原因，以及为什么要打破这个模式', tag: '交互' },
          ],
        },
        {
          id: 't-vibe-docs',
          routes: ['pro', 'pm', 'build'],   // 三份文档与方法论沉淀，做产品要懂
          title: '文档与沉淀',
          desc: '让决策跨越对话和时间留存下来',
          lessons: [
            { file: 'vibe-7.html', title: '三份文档与方法论沉淀', desc: 'FEATURES / CHANGELOG / RELEASE_NOTES 各管一个维度，METHODOLOGY 沉淀产品品味', tag: '交互' },
          ],
        },
        {
          id: 't-vibe-env',
          routes: ['pro', 'pm', 'build'],   // 环境事实与破坏性操作，偏工程
          title: '环境与安全',
          desc: '把环境事实写死，给破坏性操作上闸',
          lessons: [
            { file: 'vibe-8.html', title: '把环境事实写进 Rule', desc: '模型配置、技术栈锁定、数据格式三分法与 isComposing 这类必踩的坑', tag: '交互' },
            { file: 'vibe-9.html', title: '破坏性操作的三道闸', desc: '数据库先备份、不可逆操作先给回退方案、发版前做 diff 审查', tag: '交互' },
          ],
        },
        {
          id: 't-vibe-comm',
          routes: ['use', 'pro', 'pm', 'build'],   // 长对话不跑偏、去 AI 腔，不写代码也天天用
          title: '沟通与写作',
          desc: '对抗上下文漂移，消灭 AI 腔',
          lessons: [
            { file: 'vibe-10.html', title: '长对话锚定与写作规范', desc: '超过 10 轮强制复述目标；违禁句式清单让文案摆脱 AI 腔', tag: '交互' },
          ],
        },
        {
          id: 't-vibe-final',
          routes: ['use', 'pro', 'pm', 'build'],   // 规则全景与怎么改成自己的，和理念、沟通两节凑成不写代码也能看的小闭环
          title: '专题收官',
          desc: '把这套规则改造成你自己的',
          lessons: [
            { file: 'vibe-final.html', title: '规则的价值：每条解决一个真实问题', desc: '全景图回顾 + 使用方法 + 适配自己项目的四个动作', tag: '收官' , navTitle: '规则的价值'},
          ],
        },
        {
          id: 't-build6',
          routes: ['pro', 'pm', 'build'],   // 动手任务，跟着这章走
          title: '你现在能做什么',
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'build-6.html', title: '沉淀你自己的协作规范', desc: '四步流程对比演示；三档任务：写第一条 Rule、真需求走一遍流程、导出建造日志整理成规范 v1', tag: '实战' },
          ],
        },
        {
          id: 't-interview7',
          routes: ['pro', 'pm', 'build'],   // 面试题，跟着这章走
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'interview-7.html', title: 'Vibe Coding 方法论 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：为什么立规矩 / 质量责任 / 代码合入把关 / 拒绝分期 / 决策沉淀 / 安全闸门', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p-taste',
      num: '专题篇章',
      title: '审美工程：让 AI 做出有品味的东西',
      desc: '协作流程立住之后，第一个卡住你的是审美。AI 把执行门槛打掉之后，人人都能十分钟做出能用的东西，「能用」本身开始贬值，品味成了新的分水岭。这一章教两项可训练的技能：识别美，四个抓手（层级、留白、克制、一致性）每个配 A/B 找茬交互；把审美翻译给 AI 听，审美词汇表、生 UI 与生图的提示词写法、垫图与参考库。天赋型的「创造美」教不了，但「看出哪里不对」和「说清要什么」，练了就会。',
      color: '#db2777',
      group: 'indie',
      cluster: 'chain',
      routes: ['pm', 'build'],
      topics: [
        {
          id: 't-taste-why',
          title: '品味成了新瓶颈',
          desc: '执行能力被拉平之后，判断力开始涨价',
          lessons: [
            { file: 'taste-1.html', title: '执行免费了，判断力开始涨价', desc: '当人人都能十分钟做出能用的东西，「能用」就开始贬值。三个界面先凭直觉投一票，学完这章回来再投一次，看你的眼睛变了没有', tag: '开篇' , navTitle: '判断力开始涨价'},
            { file: 'taste-2.html', title: '「AI 味儿」是怎么来的', desc: '紫色渐变、毛玻璃、圆角卡片三件套：AI 默认输出训练数据的平均值，平均值就是平庸。在一张典型的 AI 生成页面上点出「AI 味」特征，集齐揭晓成因', tag: '交互' , navTitle: 'AI 味儿从哪来'},
          ],
        },
        {
          id: 't-taste-eye',
          title: '识别美的四个抓手',
          desc: '层级、留白、克制、一致性，每个都配找茬',
          lessons: [
            { file: 'taste-3.html', title: '层级：一屏只有一个主角', desc: '什么都想强调等于什么都没强调。字号、字重、颜色三根杠杆怎么分配注意力，A/B 找茬揪出抢戏的界面', tag: '交互' , navTitle: '层级：唯一主角'},
            { file: 'taste-4.html', title: '留白与对齐：大多数丑都丑在间距', desc: '说不上哪里丑的界面，问题多半在间距。拖动滑块看呼吸感怎么来的，再学 8pt 网格这个偷懒神器', tag: '交互' , navTitle: '留白与对齐'},
            { file: 'taste-5.html', title: '克制：给颜色和字体做预算', desc: '一个主色、两种字重、一套圆角。往界面里加颜色看它变成年会海报，再一键做减法，感受高级感回来的瞬间', tag: '交互' , navTitle: '克制：做预算'},
            { file: 'taste-6.html', title: '一致性：系统感从哪来', desc: '好看的站点背后都有一套设计变量。拆开本站真实的 CSS：控件高度、圆角、配色为什么全站只有一档，改一处全站生效', tag: '案例' , navTitle: '一致性与系统感'},
          ],
        },
        {
          id: 't-taste-speak',
          title: '把审美翻译给 AI 听',
          desc: '审美词汇量决定 AI 产出质量',
          lessons: [
            { file: 'taste-7.html', title: '「好看」的一百种具体说法', desc: '信息密度、视觉噪音、呼吸感、对比度层级…点选审美词汇看释义与正反案例。说得出名字，才指挥得动 AI', tag: '交互' , navTitle: '审美词汇表'},
            { file: 'taste-8.html', title: '生 UI：从形容词到规格书', desc: '「做个好看的页面」和「参考 Linear 的信息密度、只用一个主色」差出一个档次。三档提示词对比产出，现场看差距', tag: '实战' , navTitle: '生 UI 提示词'},
            { file: 'taste-9.html', title: '生图：构图、光影、色彩的语言', desc: '生图提示词的审美三件套：构图、光影、色彩。三组对比图建立直觉，再从四张候选图里挑出对的那张', tag: '实战' , navTitle: '生图三件套'},
          ],
        },
        {
          id: 't-taste-library',
          title: '建立自己的参考库',
          desc: '会看，然后让 AI 照着你的参考出活',
          lessons: [
            { file: 'taste-10.html', title: '怎么看设计才算看进去了', desc: '收藏一百个网站没用，要按顺序拆：先看层级，再量间距，最后数颜色。用这套流程现场拆一个好设计', tag: '方法' , navTitle: '把设计看进去'},
            { file: 'taste-11.html', title: '把参考喂给 AI', desc: '光靠嘴描述风格太低效。垫图、风格描述、设计变量三种喂法的适用场景与话术模板，让 AI 照着你的参考库出活', tag: '实战' , navTitle: '把参考喂给 AI'},
          ],
        },
        {
          id: 't-taste-final',
          title: '专题收官',
          desc: '点头之前，过一遍清单',
          lessons: [
            { file: 'taste-final.html', title: '验收清单：点头之前过一遍', desc: 'AI 交付的界面和图片，按清单逐项检查：层级、间距、克制、一致性、细节。交互式清单可勾选，附延伸阅读', tag: '收官' , navTitle: '审美验收清单'},
          ],
        },
      ],
    },
    {
      id: 'p-ixd',
      num: '专题篇章',
      title: '交互工程：让 AI 做出好用的东西',
      desc: '好不好看一眼能看出来，好不好用要用起来才知道，所以交互的病比审美的病更隐蔽。AI 默认交付的交互是「能跑通」级别：空态一片空白、报错弹 alert、删除不带确认、五步向导一步不少。这一章接着审美工程往下走：先学识别（状态三件套、防错与可逆、流程克制、习惯用法），再抠界面细节（控件怎么选、文案怎么说），最后把交互要求翻译给 AI 听（目标导向描述需求、状态机与边界写进提示词）。素材整理自交互设计的经典教材《About Face 4》。',
      color: '#2563eb',
      group: 'indie',
      cluster: 'chain',
      routes: ['pm', 'build'],
      topics: [
        {
          id: 't-ixd-why',
          title: '好用也成了瓶颈',
          desc: '「能跑通」和「好用」隔着一整章',
          lessons: [
            { file: 'ixd-1.html', title: '能跑通了，然后呢？', desc: '把「体贴软件」的特质清单反过来用，就是 AI 默认交互的找茬清单。在一个能跑通的应用里逐个点出五处不体贴，看看你平时都默默忍了什么', tag: '开篇' , navTitle: '能跑通不等于好用'},
          ],
        },
        {
          id: 't-ixd-spot',
          title: '识别好交互的四个抓手',
          desc: '状态、防错、流程、习惯用法',
          lessons: [
            { file: 'ixd-2.html', title: '状态三件套：loading、空态、错误态', desc: '界面的三种非正常时刻恰恰是体验分水岭。空态该教下一步，loading 该报进度，错误该说人话给出路。三组 A/B 对决亲手挑', tag: '交互' , navTitle: '状态三件套'},
            { file: 'ixd-3.html', title: '防错与可逆：让用户敢点', desc: '与其事后报错，先让错误发生不了；撤销让探索变安全，确认弹窗是最弱的防错。亲手改造三个危险按钮', tag: '交互' , navTitle: '防错与可逆'},
            { file: 'ixd-4.html', title: '流程克制：每多一步掉一批人', desc: '不直接服务目标的操作都是负担。把一个五步注册流程逐步砍到两步，看漏斗里的人怎么留下来', tag: '交互' , navTitle: '流程克制'},
            { file: 'ixd-5.html', title: '习惯用法：别让 AI 发明新交互', desc: '用户靠习惯用法操作软件，学一次到处用。识别哪个控件在装创新，哪个长得像按钮的不是按钮', tag: '交互' , navTitle: '习惯用法与能供性'},
          ],
        },
        {
          id: 't-ixd-detail',
          title: '界面的细节',
          desc: '控件怎么选，文案怎么说',
          lessons: [
            { file: 'ixd-6.html', title: '控件选对了吗：单选、多选、开关与下拉', desc: '互斥选一个用单选钮，可勾多个用复选框，立即生效用开关，选项超过一屏才配用下拉。六个场景连连看，配一张能抄进提示词的速查表', tag: '交互' , navTitle: '控件怎么选'},
            { file: 'ixd-7.html', title: '界面会说话：用户怎么理解你的文案', desc: '「删除这 3 条」比「确定」诚实。按钮动词要说清后果，标签用用户的词，别把数据库字段名端给用户。亲手改写五个偷懒按钮', tag: '交互' , navTitle: '界面文案'},
          ],
        },
        {
          id: 't-ixd-translate',
          title: '把交互翻译给 AI 听',
          desc: '目标导向 + 状态机，AI 才知道你要什么',
          lessons: [
            { file: 'ixd-8.html', title: '目标导向：用目标描述需求，别用功能清单', desc: '给 AI「小美要三分钟交完报销单」比给它「要有上传、表单、按钮」产出好得多。两种提示词对决，再练习把功能清单改写成场景', tag: '实战' , navTitle: '目标导向提需求'},
            { file: 'ixd-9.html', title: '把状态机和边界写进提示词', desc: '每个界面把状态列全，把边界情况说死，把防错要求写明。状态机补全器 + 边界轮盘，配可复制的验收话术模板', tag: '实战' , navTitle: '状态机写进提示词'},
          ],
        },
        {
          id: 't-ixd-final',
          title: '专题收官',
          desc: '上线前的第二张清单',
          lessons: [
            { file: 'ixd-final.html', title: '交互验收清单：上线前的第二张清单', desc: '状态齐不齐、危险操作可逆吗、流程还能砍吗、控件选对了吗、文案说人话吗。交互式清单可勾选，与审美、心理学两张清单配成一套', tag: '收官' , navTitle: '交互验收清单'},
          ],
        },
      ],
    },
    {
      id: 'p-psy',
      num: '专题篇章',
      title: 'AI 产品心理学：让用户觉得好用',
      desc: '审美和交互解决了做得好看、做得好用，还剩第三件事：让用户觉得好用。AI 产品天生慢、会错、不透明，这三个毛病工程上短期都只能缓解，但用户的评价由感知决定，感知可以设计。这一章沿用户旅程铺十六个心理效应：等待焦虑、劳动错觉、峰终定律、信任校准、算法厌恶、防御心理、蜜月悬崖、AI 标签折扣、认知卸载、情感依恋，一路讲到付费疼痛、定价锚点和沉默偏差。每一课都是一个心理效应加一组当场能拨的工程开关。',
      color: '#0d9488',
      group: 'indie',
      cluster: 'chain',
      routes: ['pm', 'build'],
      topics: [
        {
          id: 't-psy-perceive',
          title: '感知性能',
          desc: '用户的秒表和服务器的秒表走得不一样',
          lessons: [
            { file: 'psy-1.html', title: '工程指标及格了，用户为什么还骂慢？', desc: '同一个 5 秒请求，空白冻结、转圈、流式、步骤外显四种呈现并排跑，亲身体验物理时长相同、体感差三倍；再认识用户秒表的三个走时怪癖', tag: '开篇' , navTitle: '感知性能 ≠ 真实性能'},
          ],
        },
        {
          id: 't-psy-wait',
          title: '等待与过程设计',
          desc: '难受的从来不是那 5 秒本身',
          lessons: [
            { file: 'psy-2.html', title: '等待心理学：难受的从来不是那 5 秒', desc: '排队研究三条定律配迪士尼与休斯顿机场案例；拖动耗时滑块看三档呈现决策：1 秒内直接出、10 秒内必须流式、超 10 秒转异步', tag: '交互' , navTitle: '等待心理学三定律'},
            { file: 'psy-3.html', title: '劳动错觉：让 AI 把努力演出来', desc: '哈佛实验：展示工作过程让用户多等反而更满意。秒回 vs 过程外显的 A/B 投票实验，思考外显与检索来源的一鱼三吃，外加三条不能越过的边界', tag: '交互' , navTitle: '劳动错觉'},
            { file: 'psy-4.html', title: '峰终定律：用户只记得峰值和结尾', desc: '四种会话剧本对比平均分与记忆分怎么背离；冷水实验的产品版：旗舰模型花在第一印象、校验前置护住最后一步、中段放心省钱', tag: '交互' , navTitle: '峰终定律'},
          ],
        },
        {
          id: 't-psy-trust',
          title: '信任与防御',
          desc: '既不能全信，也不能不敢用',
          lessons: [
            { file: 'psy-5.html', title: '信任校准：最好的用户是半信半疑的', desc: '全信的把编造判例抄进法庭文书，不信的把 AI 变成摆设。六个场景亲手判断信任状态；可点开的引用、置信度代理信号、有条件的警告', tag: '交互' , navTitle: '信任校准'},
            { file: 'psy-9.html', title: '算法厌恶：AI 犯一次错，就被永久拉黑', desc: 'Dietvorst 实验：人看到算法犯一次错就弃用，哪怕它整体比人准。先投票亲测自己的偏心，再玩归因翻译器和微调权开关，看弃用率仪表怎么被四个杠杆拉回来', tag: '交互' , navTitle: '算法厌恶'},
            { file: 'psy-6.html', title: '防御心理：用户不是不会用，是不敢用', desc: '数据、能力、责任三种防御，控制感、可逆性、透明三板斧；三个高防御设计亲手改造，小心埋着的安慰剂陷阱；转人工按钮的悖论', tag: '交互' , navTitle: '防御心理三板斧'},
          ],
        },
        {
          id: 't-psy-mind',
          title: '心智模型与拟人化',
          desc: '用户拿错说明书，怪不到用户头上',
          lessons: [
            { file: 'psy-7.html', title: '心智模型：用户拿错了说明书', desc: '把 AI 当搜索引擎、当数据库、当会学习的学徒、当计算器，四种错配四类差评。四段对话找茬，再给空状态示例、边界前置、记忆外显四个纠正手段', tag: '交互' , navTitle: '心智模型错配'},
            { file: 'psy-8.html', title: '拟人化的度，与 AI 道歉的艺术', desc: 'CASA 范式：用户必然把 AI 当人，你只能选档位。五类产品对号入座；同一个错误四种道歉文案对比，三要素配方与服务补救悖论', tag: '交互' , navTitle: '拟人化与道歉'},
          ],
        },
        {
          id: 't-psy-longterm',
          title: '长期使用',
          desc: '蜜月期过了，关系才刚开始',
          lessons: [
            { file: 'psy-10.html', title: '蜜月悬崖：宣传拉高的期望，要用留存来还', desc: '期望确认理论：满意度等于体验减期望。先玩抽卡机看懂「演示是 P99、用户拿到 P50」，再拖宣传强度滑块看注册转化和三十日留存此消彼长，最后在期望曲线编辑器上拨三个杠杆', tag: '交互' , navTitle: '蜜月悬崖'},
            { file: 'psy-11.html', title: 'AI 标签折扣：同样的内容，标上 AI 就掉价', desc: '标注 AI 生成后评价系统性下降，用 AI 干活的人还怕被同事看见。双盲评分实验亲测折扣，五个场景判断标签亮不亮，措辞梯子看折扣差，最后选出用户敢分享的导出页', tag: '交互' , navTitle: 'AI 标签折扣'},
            { file: 'psy-12.html', title: '认知卸载：用户一边用你，一边怕自己废掉', desc: '谷歌效应证明人会把「能查到的」从脑子里删掉，AI 把外包范围从记忆扩大到思考。选外包清单看哪些卸载危险，拖 Copilot 到 Autopilot 的定位滑块，拨开关把回答从「替你想」改成「带你想」', tag: '交互' , navTitle: '认知卸载'},
            { file: 'psy-13.html', title: '情感依恋：用户爱上你的产品之后', desc: '依恋是真实的，Replika 2023 事件证明了深度和风险。依恋信号分级器给六条用户消息判级，点开 Replika 四幕时间线，再拨三层安全阀：身份提醒、脆弱话题转介、无常性披露', tag: '交互' , navTitle: '情感依恋'},
          ],
        },
        {
          id: 't-psy-money',
          title: '付费与定价',
          desc: '收钱也是一门心理设计',
          lessons: [
            { file: 'psy-14.html', title: '付费心理：为一个概率商品掏钱，痛在哪', desc: '打表焦虑模拟器亲手体验按量计费怎么让每次追问都疼一下，切到包月看同一段对话的心情差；心理账户四题看同一笔钱换框架痛感差多少；三个额度开关把免费额度从成本变成转化器', tag: '交互' , navTitle: '付费心理'},
            { file: 'psy-15.html', title: '定价心理：锚点、诱饵与体面的价格歧视', desc: '复刻经济学人的诱饵实验：没人选的档位撤掉后销量大变；拨开关搭自己的定价页锚点；判断五种价格歧视哪些体面哪些找死；最后选出不挨骂的涨价邮件', tag: '交互' , navTitle: '定价心理'},
          ],
        },
        {
          id: 't-psy-feedback',
          title: '反馈设计',
          desc: '坏消息怎么才能听得见',
          lessons: [
            { file: 'psy-16.html', title: '反馈心理：用户为什么不点踩', desc: '一千个不满意的用户，点踩的只有十几个。反馈漏斗模拟器看沉默偏差怎么层层吃掉信号，六种用户行为判读隐性信号（重新生成、复制、编辑），点踩后的体验对决：反馈要有即时回报', tag: '交互' , navTitle: '反馈心理'},
          ],
        },
        {
          id: 't-psy-books',
          title: '延伸书单',
          desc: '这章的规律都有出处',
          lessons: [
            { file: 'psy-books.html', title: '九本书，把这一章读厚', desc: '卡尼曼、诺曼、西奥迪尼、塞勒到《媒体等同》，九本书拆出十九条 PM 必须懂的心理学原理，每条标注 AI 产品落点与回看课节；按你产品当前的困惑选书，读完做一轮原理连线小测', tag: '书单' , navTitle: 'PM 心理学书单'},
          ],
        },
        {
          id: 't-psy-final',
          title: '专题收官',
          desc: '十六个效应一张对照表',
          lessons: [
            { file: 'psy-final.html', title: '收官 · 十六个效应一张表，外加上线前十四问', desc: '从感知性能到沉默偏差，十六个心理效应 × 工程杠杆完整对照，右列全是学过的开关；可勾选的上线前十四问检查清单，附十一份延伸阅读', tag: '收官' , navTitle: '心理学篇收官'},
          ],
        },
        {
          id: 't-psy-interview',
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'psy-interview.html', title: 'AI 产品心理学 · 40 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：感知性能 / 峰终取舍 / 信任校准 / 防御拆除 / 算法厌恶 / 标签折扣 / 情感依恋 / 付费与定价 / 沉默偏差 / 体验指标怎么写进 OKR', tag: '考察' , navTitle: '他们会这样考你 · 40 问'},
          ],
        },
      ],
    },
    {
      id: 'p-cost',
      num: '专题篇章',
      title: 'Token 降本增效：AI 应用的成本工程',
      desc: '前面三章都在让用户满意，这一章问另一个问题：这笔账划不划算。产品用得越好，用户用得越多，利润反而越薄——AI 商业化是一场和用户的对赌。这一章基于作者的团队内部分享整理：先看懂 Token 怎么数、报价表里的梯队与跳档陷阱（输出 200 断崖、输入 32k 红线、图片像素税、Agent 的输入主导），再沿语法、语义、架构、输出四层把成本一层层抠下来。省 Token 的本质是提高信息密度：高信噪比 = 高智能。',
      color: '#16a34a',
      group: 'indie',
      cluster: 'chain',
      routes: ['pm', 'build'],
      topics: [
        {
          id: 't-cost-why',
          title: '定价即架构',
          desc: '成本构成、Token 怎么数、报价表怎么读',
          lessons: [
            { file: 'cost-1.html', title: '和用户对赌的生意', desc: '看到消费账单会窒息吗？Token 成本不只是财务账单，更是延迟与吞吐量的直接映射。这一章讲怎么把它抠下来', tag: '开篇' , navTitle: '和用户对赌的生意'},
            { file: 'cost-2.html', title: 'Token 怎么数：BPE 与隐形的 Token 税', desc: '从字符到子词的演进、BPE 的合并规则，以及中文为什么天生贵 2 倍；「给主人留下些什么吧」的诡异合并', tag: '交互' , navTitle: 'BPE 与 Token 税'},
            { file: 'cost-3.html', title: '报价表速览与三大梯队', desc: 'T0 旗舰 / T1 主力 / T2 走量怎么分工；光知道哪个贵不够，要盯住价格跳变的边界线', tag: '选型' , navTitle: '报价表与三大梯队'},
          ],
        },
        {
          id: 't-cost-cliff',
          title: '三大跳档陷阱',
          desc: '藏在价格边界线里的账单刺客',
          lessons: [
            { file: 'cost-4.html', title: 'GLM 的短输出博弈：200 Token 断崖', desc: '输出 199 和 201 是两种价格，连输入都回溯涨价；拖动滑块看账单跳变，四种应对策略', tag: '交互' , navTitle: '200 Token 断崖'},
            { file: 'cost-5.html', title: 'Qwen 的阶梯逃逸：32k 红线', desc: '多 1k Token 整单翻倍的全量结算逻辑；预算感知截断，别再为 RAG 垃圾付双倍的钱', tag: '交互' , navTitle: '32k 红线'},
            { file: 'cost-6.html', title: '图片 Token：像素也要交税', desc: '输入分辨率实时算 Token 的计算器；32 像素对齐跳档、分辨率诅咒与图片成本三条红线', tag: '交互' , navTitle: '图片 Token'},
          ],
        },
        {
          id: 't-cost-agent',
          title: 'Agent 的账单',
          desc: '循环执行让成本累积膨胀',
          lessons: [
            { file: 'cost-7.html', title: '输入主导：62:1 的 I/O Ratio', desc: 'Agent 每一轮都要重读全部历史。逐轮点开一个 Excel 任务，看 Input 怎么滚到 31,460 Token', tag: '交互' , navTitle: '输入主导的 Agent'},
            { file: 'cost-8.html', title: 'Agent 四大成本陷阱与熔断', desc: '工具返回爆炸、思考税、死循环、历史雪球：每个陷阱配一个能落地的策略，外加三条红线', tag: '深入' , navTitle: 'Agent 四大陷阱'},
          ],
        },
        {
          id: 't-cost-practice',
          title: '四层实战优化',
          desc: '语法、语义、架构、输出，一层层抠',
          lessons: [
            { file: 'cost-9.html', title: '语法层：Prompt 是写给机器的', desc: '加粗的 ** 就吃掉 8.5% Token；复杂对象用 YAML、扁平列表用 CSV、后台输出强制 Minified JSON', tag: '实战' , navTitle: '语法层：词法税'},
            { file: 'cost-10.html', title: '语义层：双重蒸馏', desc: '中段迷失效应：塞得越多越抓不住重点。动态 Few-Shot 从 4000 砍到 500，LLMLingua-2 压缩 5-20 倍', tag: '实战' , navTitle: '语义层：双重蒸馏'},
            { file: 'cost-11.html', title: '架构层：KV Cache 的注意事项', desc: '前缀匹配最高省 90%；动态切换工具为什么把缓存全打穿，滑动窗口 vs 章节缓存', tag: '实战' , navTitle: '架构层：KV Cache'},
            { file: 'cost-12.html', title: '输出层：管住模型的嘴', desc: '明确的负向约束砍掉 30% 废话；润色用 Diff 别重写整段；停止序列做物理截断', tag: '实战' , navTitle: '输出层：管住嘴'},
          ],
        },
        {
          id: 't-cost-final',
          title: '专题收官',
          desc: '省钱的尽头是信息密度',
          lessons: [
            { file: 'cost-final.html', title: '算力时代的极简主义', desc: '每一个 Token 都在为最终结果贡献价值吗？全景清单回顾 + 十八份按主题分类的延伸阅读', tag: '收官' , navTitle: '算力极简主义'},
          ],
        },
      ],
    },
    {
      id: 'p-ds',
      num: '编程基础篇',
      title: '数据结构：AI 世界的骨架',
      desc: '不背定义、不手写链表。用你已经学过的 AI 概念当例子——message list 是数组、KV Cache 是缓存、RAG 检索是近邻搜索——把八种核心数据结构一次看懂。学完你能看懂 AI 生成的代码在用什么结构，也能看懂大模型肚子里装的是什么。',
      color: '#0284c7',
      group: 'indie',
      cluster: 'hardcore',
      routes: ['use', 'pro', 'pm', 'build'],   // 科普主题（为什么要懂、线性结构）全路线可见，工程主题只在 build
      topics: [
        {
          id: 't-ds-why',
          routes: ['use', 'pro', 'pm', 'build'],   // 为什么要懂 + 收纳隐喻，人人该看
          title: '为什么 AI 时代还要懂',
          desc: '你可以不写代码，但要会验收 AI 写的代码',
          lessons: [
            { file: 'ds-1.html', title: '都 2026 年了，为什么还要懂数据结构？', desc: '一个贯穿全章的隐喻：数据结构 = 收纳方式。亲手玩一局「找钥匙」，体会选错收纳有多慢；再看不懂结构的人怎么把 AI 写的慢代码直接上线', tag: '交互' , navTitle: '为什么还要懂数据结构'},
          ],
        },
        {
          id: 't-ds-linear',
          routes: ['use', 'pro', 'pm', 'build'],   // 对话数组、撤销、排队，零代码也看得懂
          title: '线性结构：你天天在用',
          desc: '数组、栈、队列，AI 对话和 Agent 调度的地基',
          lessons: [
            { file: 'ds-2.html', title: '数组：你聊的每句话都躺在里面', desc: 'message list 就是一个数组：对话历史怎么排队、上下文截断为什么掐头不掐尾；顺便看数组中间插一条数据有多贵', tag: '交互' , navTitle: '数组与 message list'},
            { file: 'ds-3.html', title: '栈：Cmd+Z 和「爆栈」的秘密', desc: '后进先出：撤销键、函数调用、Agent 的子任务都靠它。亲手压栈弹栈，再看一次没写终止条件的递归是怎么把栈压爆的', tag: '交互' , navTitle: '栈：撤销与调用'},
            { file: 'ds-4.html', title: '队列：Agent 的活是排着队干的', desc: '先进先出：任务队列、消息队列、生产者消费者。拖动生产和消费的速度，看队列什么时候积压、什么时候空转', tag: '交互' , navTitle: '队列与任务调度'},
          ],
        },
        {
          id: 't-ds-hash',
          routes: ['pm', 'build'],   // 缓存与账单直觉，产品路线刚需
          title: '哈希与缓存：空间换时间',
          desc: '查得快和省钱，背后是同一招',
          lessons: [
            { file: 'ds-5.html', title: '哈希表：为什么它找东西快到不讲理', desc: '把 key 亲手塞进桶里，看哈希函数怎么把「翻一遍」变成「直达」；再看两个 key 撞进同一个桶时怎么收场', tag: '交互' , navTitle: '哈希表'},
            { file: 'ds-6.html', title: '缓存：AI 账单的隐形折扣', desc: 'KV Cache 和语义缓存都是同一招：算过的别再算。拖动命中率滑块实时看账单变化——Harness 核心篇成本优化的底层原理', tag: '交互' , navTitle: '缓存与 KV Cache'},
          ],
        },
        {
          id: 't-ds-tree',
          routes: ['build'],   // AST 与图遍历，动手才需要
          title: '树与图：AI 的主场',
          desc: 'Coding Agent 和知识图谱眼里的世界',
          lessons: [
            { file: 'ds-7.html', title: '树：Coding Agent 眼里全是它', desc: '文件目录、JSON、网页 DOM、代码语法树——AI 读你的项目时看到的是一棵棵树。点开一段代码，亲眼看它变成 AST', tag: '交互' , navTitle: '树与 AST'},
            { file: 'ds-8.html', title: '图：从知识图谱到多 Agent 协作', desc: '节点加关系就是图：社交网络、知识图谱、Agent 工作流 DAG。点一个节点，看关系怎么一层层扩散出去', tag: '交互' , navTitle: '图与 DAG'},
          ],
        },
        {
          id: 't-ds-llm',
          routes: ['pro', 'pm', 'build'],   // 分词与向量检索底层，讲 RAG 方案要用
          title: '大模型肚子里的数据结构',
          desc: '前面章节埋的伏笔，这里揭底',
          lessons: [
            { file: 'ds-9.html', title: '词表与 Trie：Tokenizer 的切词秘密', desc: '大模型原理篇见过分词，这次看底层：一棵前缀树怎么把「五花肉」整块认出来。亲手沿着 Trie 走一次分词', tag: '交互' , navTitle: '词表与 Trie'},
            { file: 'ds-10.html', title: '向量：RAG 检索是在「找最近的邻居」', desc: 'Embedding 把语义变成坐标，相似度就是距离。在平面上拖动查询点看最近邻怎么变，再看 HNSW 为什么能在亿级向量里瞬间找到', tag: '交互' , navTitle: '向量与近邻搜索'},
          ],
        },
        {
          id: 't-ds-summary',
          routes: ['build'],   // 汇总跟完整章走
          title: '篇章汇总',
          desc: '数据结构篇核心知识回顾',
          lessons: [
            { file: 'ds-summary.html', title: '汇总 · 八种结构一张决策表', desc: '数组/栈/队列/哈希/树/图/Trie/向量各自的强项弱项与 AI 里的真身；点选场景，看该用哪种收纳方式', tag: '汇总' , navTitle: '数据结构篇汇总'},
          ],
        },
        {
          id: 't-ds-build',
          routes: ['build'],   // 动手任务
          title: '你现在能做什么',
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'ds-build.html', title: '把 AI 写的代码「验收」一遍', desc: '三档任务：让 AI 解释它选的数据结构、要求换一种实现对比利弊、给你自己的项目挑一次收纳方式', tag: '实战' , navTitle: '实战：验收 AI 的代码'},
          ],
        },
        {
          id: 't-ds-interview',
          routes: ['build'],   // 面试题跟完整章走
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'ds-interview.html', title: '数据结构 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：数组 vs 链表 / 哈希碰撞 / 树的遍历 / 缓存设计 / 向量检索 / 场景选型', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p-algo',
      num: '编程基础篇',
      title: '算法：AI 的思考方式',
      desc: '从「这段代码要跑多久」的直觉开始，把复杂度、查找排序、递归分治、图搜索、贪心采样五类经典思想讲透——每一类都对应大模型里的一个真实机制：注意力是 O(n²)、Rerank 是排序、Compaction 是分治、解码是贪心与采样。最后回答那个终极问题：AI 都会做题了，还要不要刷 LeetCode。',
      color: '#db2777',
      group: 'indie',
      cluster: 'hardcore',
      routes: ['use', 'pro', 'pm', 'build'],   // Big-O 直觉与学习观全路线可见，其余只在 build
      topics: [
        {
          id: 't-algo-bigo',
          routes: ['use', 'pro', 'pm', 'build'],   // 复杂度直觉 + 上下文账单，人人该看
          title: '复杂度：一眼看穿代码值不值',
          desc: '不用数学，建立对「快慢」的直觉',
          lessons: [
            { file: 'algo-1.html', title: 'Big-O：一眼看穿代码要跑多久', desc: '拖动数据量滑块，看 O(1)、O(log n)、O(n)、O(n²) 四条曲线怎么分道扬镳；数据翻十倍，谁不动声色、谁当场爆炸', tag: '交互' , navTitle: 'Big-O 复杂度直觉'},
            { file: 'algo-2.html', title: '为什么上下文越长越贵？O(n²) 的账单', desc: '注意力机制要让每个 Token 看所有 Token：拖动上下文长度，看计算量和账单按平方往上蹿——长对话变卡变贵的根源', tag: '交互' , navTitle: '注意力的 O(n²) 账单'},
          ],
        },
        {
          id: 't-algo-sort',
          routes: ['build'],
          title: '查找与排序',
          desc: '砍一半的艺术，和排序在 AI 里的真身',
          lessons: [
            { file: 'algo-3.html', title: '二分查找：猜数字游戏的最优解', desc: '玩一局 1 到 100 猜数字，体会每猜一次范围砍一半；十亿条数据 30 次就能找到——log n 快到什么程度', tag: '交互' , navTitle: '二分查找'},
            { file: 'algo-4.html', title: '排序：冒泡和快排的赛跑', desc: '两种排序同场竞技的可视化动画：看冒泡怎么一步步挪、快排怎么分区跳跃；数据量一大差距有多悬殊', tag: '动画' , navTitle: '排序算法赛跑'},
            { file: 'algo-5.html', title: '排序在 AI 里的真身：Rerank', desc: 'RAG 检索回来的段落不能直接用：先粗排再精排。亲手调整权重，看候选段落怎么重新洗牌——推荐流和搜索结果同理', tag: '交互' , navTitle: 'Rerank 重排序'},
          ],
        },
        {
          id: 't-algo-recur',
          routes: ['build'],
          title: '递归与分治',
          desc: '把大事拆成同一件小事',
          lessons: [
            { file: 'algo-6.html', title: '递归：把大事拆成同一件小事', desc: '遍历目录、拆解任务、画分形树，套路都一样：自己调用自己。看 Agent 怎么把「做个官网」递归拆成能动手的小任务', tag: '交互' , navTitle: '递归'},
            { file: 'algo-7.html', title: '分治：上下文压缩的算法原理', desc: '动手实战篇的 Compaction 其实是分治：把长对话切段、各自摘要、再合并。亲手跑一次递归摘要，看信息怎么被层层压缩', tag: '交互' , navTitle: '分治与递归摘要'},
          ],
        },
        {
          id: 't-algo-search',
          routes: ['build'],
          title: '搜索与决策',
          desc: '走迷宫、掷骰子、往前多看几步',
          lessons: [
            { file: 'algo-8.html', title: 'BFS 与 DFS：Agent 在代码库里找文件', desc: '走迷宫动画看两种搜索的性格：一层层扫 vs 一条道走到黑；Coding Agent 的 grep 检索、网络爬虫都是它们的变体', tag: '交互' , navTitle: 'BFS 与 DFS'},
            { file: 'algo-9.html', title: '贪心与采样：AI 选词时的两种性格', desc: '每步都挑最大的就是贪心解码，按概率掷骰子就是采样——Temperature 背后的算法学。亲手对比两种策略生成的句子', tag: '交互' , navTitle: '贪心与采样'},
            { file: 'algo-10.html', title: 'Beam Search：往前多看几步再选', desc: '贪心一步错步步错，Beam Search 同时留几条候选路往前探。交互对比两种策略走出的句子，理解「先想再答」的直觉来源', tag: '交互' , navTitle: 'Beam Search'},
          ],
        },
        {
          id: 't-algo-learn',
          routes: ['use', 'pro', 'pm', 'build'],   // 还要不要刷题、怎么用 AI 学，人人该看
          title: 'AI 时代的算法学习观',
          desc: '还要不要刷题，以及怎么用 AI 学',
          lessons: [
            { file: 'algo-11.html', title: 'AI 都会做题了，还要刷 LeetCode 吗？', desc: '面试现状实话实说：什么岗位还在考、考到什么档位、什么岗位早就不看了。点选你的目标岗位，对号入座', tag: '交互' , navTitle: '还要刷 LeetCode 吗'},
            { file: 'algo-12.html', title: '用 AI 学算法的正确姿势', desc: '让它出题、让它当考官、让它逐行讲复杂度——三个立刻能用的提示词模板，把 AI 从「替你做题」变成「陪你练题」', tag: '实战' , navTitle: '用 AI 学算法'},
          ],
        },
        {
          id: 't-algo-summary',
          routes: ['build'],
          title: '篇章汇总',
          desc: '算法篇核心知识回顾',
          lessons: [
            { file: 'algo-summary.html', title: '汇总 · 五类算法思想对照表', desc: '复杂度/查找排序/递归分治/图搜索/贪心采样，每类对应 AI 里的一个真实机制；一张表带走全章', tag: '汇总' , navTitle: '算法篇汇总'},
          ],
        },
        {
          id: 't-algo-build',
          routes: ['build'],
          title: '你现在能做什么',
          desc: '学完这章，你今天能动手做什么',
          lessons: [
            { file: 'algo-build.html', title: '给 AI 写的代码做一次复杂度体检', desc: '三档任务：让 AI 自报复杂度、要求优化一档并说清代价、用大数据量实测验证它没吹牛', tag: '实战' , navTitle: '实战：复杂度体检'},
          ],
        },
        {
          id: 't-algo-interview',
          routes: ['build'],
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'algo-interview.html', title: '算法 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：Big-O 直觉 / 二分的前提 / 递归的风险 / BFS vs DFS / 采样策略 / AI 时代还考算法吗', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p6',
      num: '专题篇章',
      title: '解剖 Grok Build：Rust 写的生产级 Coding Agent',
      desc: '这一章要读 Rust 源码，不看不影响任何后续内容。适合想自己动手写一个 Coding Agent 的人：基于 xAI 公开的 Grok Build 源码，沿着 79 个 Workspace 成员拆解运行时、工具、记忆、安全与扩展设计。其中八个不依赖源码也成立的结论，已经提炼进工程进阶篇，那边看不过瘾再回来这里深潜。',
      color: '#f59e0b',
      group: 'indie',
      cluster: 'hardcore',
      routes: [],   // 硬核选修，只在完整目录里
      hardcore: true,
      topics: [
        {
          id: 't-grok-map',
          title: '系统地图',
          desc: '79 个 Workspace 成员的分层架构与 Rust 选型',
          lessons: [
            { file: '12-1.html', title: '79 个 Workspace 成员如何组成产品', desc: '按入口、Agent 运行时、工具和基础设施还原 Cargo Workspace 的真实分层', tag: '架构' , navTitle: '79 个 Workspace 成员'},
            { file: '12-2.html', title: 'Rust 技术选型：事实与推断', desc: '从源码可验证事实出发，分析类型系统、并发安全和分发方式带来的工程取舍', tag: '概念' , navTitle: 'Rust 技术选型'},
            { file: '12-3.html', title: '从真实 main() 到第一轮采样', desc: '追踪入口、会话创建、提示词渲染、模型采样与流式返回的完整调用链', tag: '深入' , navTitle: '从 main() 到首轮采样'},
          ],
        },
        {
          id: 't-grok-core',
          title: 'Agent 核心循环',
          desc: 'Session Actor、Compaction 与 System Prompt',
          lessons: [
            { file: '12-4.html', title: 'Session Actor：线程、状态与取消边界', desc: '梳理会话状态所有权、消息流转、后台任务与 CancellationToken 的中断路径', tag: '深入' , navTitle: 'Session Actor'},
            { file: '12-5.html', title: 'Compaction：85% 阈值与可选 two-pass', desc: '核对自动压缩阈值、memory flush、two-pass 和超时预算的真实配置', tag: '交互' , navTitle: 'Compaction 阈值'},
            { file: '12-6.html', title: 'PromptContext：可检查的渲染输入', desc: '拆解可序列化上下文、TemplateOverride 和 TemplateRenderer 的模板渲染边界', tag: '概念' , navTitle: 'PromptContext'},
          ],
        },
        {
          id: 't-grok-tools',
          title: '工具系统',
          desc: '注册表、分类学与内置工具集',
          lessons: [
            { file: '12-7.html', title: '进程级外部 Toolset Preset 注册表', desc: '理解构建函数、Public 与 Internal 可见性，以及晚注册对后续解析的影响', tag: '架构' , navTitle: 'Toolset 注册表'},
            { file: '12-8.html', title: 'ToolKind 提供默认只读语义', desc: '从枚举与 is_read_only() 追踪只读默认值和能力过滤边界', tag: '设计模式' , navTitle: 'ToolKind 只读语义'},
            { file: '12-9.html', title: '实现族、注册表与动态 MCP', desc: '区分内置工具实现族、静态注册表与运行时发现的 MCP 工具', tag: '深入' , navTitle: '实现族与动态 MCP'},
            { file: '12-10.html', title: 'Canonical input 是稳定投影', desc: '用 CanonicalToolMeta 和输入投影解释跨工具实现的稳定合约', tag: '案例' , navTitle: 'Canonical input'},
          ],
        },
        {
          id: 't-grok-memory',
          title: '上下文与记忆',
          desc: 'Token 估算、混合检索与 Dream 机制',
          lessons: [
            { file: '12-11.html', title: '估算、百分比与严格阈值', desc: '区分 Token 估算、使用率计算和 exceeds_threshold 的严格比较语义', tag: '交互' , navTitle: 'Token 估算与阈值'},
            { file: '12-12.html', title: '从文件变更到混合排序', desc: '追踪 FTS、向量检索、时间衰减和 MMR 重排组成的记忆召回流水线', tag: '深入' , navTitle: '混合检索排序'},
            { file: '12-13.html', title: 'Dream 的真实机制', desc: '核对空闲门控、DreamLock、后台整理和记忆写回的实际边界', tag: '前沿' , navTitle: 'Dream 机制'},
          ],
        },
        {
          id: 't-grok-subagent',
          title: '子 Agent 与多 Agent',
          desc: 'Agent 定义 + Persona 叠加的两层体系',
          lessons: [
            { file: '12-14.html', title: 'AgentDefinition 与 Persona 如何合并', desc: '拆解 Agent 定义、Persona 覆盖与最终会话行为的合并顺序', tag: '设计模式' , navTitle: 'Agent 与 Persona 合并'},
            { file: '12-15.html', title: '子 Agent 的四个隔离维度', desc: '从上下文来源、恢复模式、工作树和任务状态分析隔离边界', tag: '深入' , navTitle: '子 Agent 隔离维度'},
            { file: '12-16.html', title: '多 Agent 的组织方式', desc: '基于公开证据比较 Agent、Persona、协调者与并行任务的组织方式', tag: '案例' , navTitle: '多 Agent 组织方式'},
          ],
        },
        {
          id: 't-grok-security',
          title: '权限、沙箱与安全',
          desc: '内核级沙箱、权限演进与 Hooks 拦截',
          lessons: [
            { file: '12-17.html', title: '五种沙箱 Profile', desc: '比较 workspace、devbox、read-only、strict、off 与自定义 Profile 的边界', tag: '安全' },
            { file: '12-18.html', title: '从工具请求到受限执行', desc: '沿 ToolKind、权限决策和平台沙箱追踪完整授权链', tag: '安全' , navTitle: '工具授权链'},
            { file: '12-19.html', title: 'Hooks：明确 deny 才阻断', desc: '核对生命周期事件、matcher、PreToolUse 阻断和故障 fail-open 语义', tag: '实战' , navTitle: 'Hooks 阻断语义'},
          ],
        },
        {
          id: 't-grok-eco',
          title: 'MCP 与生态',
          desc: 'MCP 客户端、OAuth、连接恢复与插件信任',
          lessons: [
            { file: '12-20.html', title: 'MCP 连接、发现与恢复', desc: '确认客户端角色，拆解 OAuth、工具命名、能力发现、状态合并与重连', tag: '深入' , navTitle: 'MCP 连接与恢复'},
            { file: '12-21.html', title: 'Plugin Marketplace 的发现与信任', desc: '区分目录、安装、运行时发现、启用状态与插件根信任', tag: '架构' , navTitle: 'Marketplace 信任'},
          ],
        },
        {
          id: 't-grok-beyond',
          title: '超越源码',
          desc: '完整对照、经验教训与设计启示',
          lessons: [
            { file: '12-22.html', title: 'Grok Build 与 Claude Code 证据化对照', desc: '按源码、仓库文档和公开产品行为完成多维比较，保留未知项', tag: '汇总' , navTitle: 'Grok vs Claude 对照'},
            { file: '12-23.html', title: 'Grok Build 工程复盘与证据边界', desc: '用类型、状态机、测试和仓库政策复盘工程优点与适用限制', tag: '收官' , navTitle: '工程复盘与边界'},
            { file: '12-24.html', title: 'Coding Agent 设计工作台', desc: '围绕九个系统维度输出架构决定、故障路径、验证方式和结课成果', tag: '收官' , navTitle: '设计工作台'},
          ],
        },
        {
          id: 't-interview6',
          title: '他们会这样考你',
          desc: '面试官、老板、技术同事会怎样考察本章内容',
          lessons: [
            { file: 'interview-6.html', title: 'Grok Build 专题 · 30 道灵魂拷问', desc: '每题附考察意图、答题框架与加分点：运行时循环 / Compaction / 工具权限 / 记忆检索 / 沙箱安全 / MCP 集成', tag: '考察' , navTitle: '他们会这样考你 · 30 问'},
          ],
        },
      ],
    },
    {
      id: 'p-dsh',
      num: '专题篇章',
      title: '解剖 DeepSeek Harness：一切皆插件的 Agent 底座',
      desc: '这一章要读 TypeScript 源码，不看不影响任何后续内容。DeepSeek 在 2026 年开源的 Agent Harness 把模型、工具、会话、沙箱、UI 全部做成可替换的 Cordis 插件，还立了一条运行时不变量：模型看到的一切必须能从会话日志逐字重建。本章沿源码拆解它的插件内核、Turn/Step 循环、双队列 Inbox、Compaction 双路径与 Code Mode 沙箱，并逐课与 Claude Code、Grok Build 做证据化对照。',
      color: '#4d6bfe',
      group: 'indie',
      cluster: 'hardcore',
      routes: [],   // 硬核选修，只在完整目录里
      hardcore: true,
      topics: [
        {
          id: 't-dsh-map',
          title: '系统地图',
          desc: 'Cordis 插件内核与配置三层结构',
          lessons: [
            { file: 'dsh-1.html', title: '一切皆插件：官宣与源码对照', desc: '把发布文案里的四种模式、会话日志、插件生态逐条对到仓库里的 YAML 预设与包结构', tag: '架构' , navTitle: '一切皆插件' },
            { file: 'dsh-6.html', title: 'Profile / Bundle / Patch：用户能把产品改到什么程度', desc: '配置三层结构怎么让用户不改源码就换掉深层能力', tag: '架构' , navTitle: 'Profile 与 Bundle' },
          ],
        },
        {
          id: 't-dsh-loop',
          title: '会话与循环',
          desc: '日志不变量、双队列 Inbox、取消恢复与 Goal',
          lessons: [
            { file: 'dsh-2.html', title: 'Model-visible ⟺ logged：一条会崩给你看的不变量', desc: '从 invariant.ts 的逐字节比对讲起：为什么模型看到的一切必须能从日志重建', tag: '深入' , navTitle: '日志重建不变量' },
            { file: 'dsh-3.html', title: 'followup / steer / inject：双队列 Inbox', desc: '拆解 next-turn 与 next-step 两条队列的入队、claim 与唤醒语义，对照 Claude Code 的中断模型', tag: '交互' , navTitle: '双队列 Inbox' },
            { file: 'dsh-7.html', title: 'Esc 之后发生了什么：取消、崩溃恢复与重入', desc: '每轮一个 AbortSignal，中断也要写回日志，崩溃重启还能接着跑', tag: '深入' , navTitle: '取消与崩溃恢复' },
            { file: 'dsh-8.html', title: 'Goal：消息溯源即权限', desc: '长期目标怎么存、谁有权改，鉴权看消息来源', tag: '设计模式' , navTitle: 'Goal 与溯源鉴权' },
          ],
        },
        {
          id: 't-dsh-context',
          title: '上下文工程',
          desc: 'Compaction 双路径、计量、Spill 与检索',
          lessons: [
            { file: 'dsh-4.html', title: 'Compaction 双路径与 replaceGeneration', desc: '压力触发与溢出恢复两条正交路径，以及用世代号证明「压缩确实发生过」才允许重试', tag: '深入' , navTitle: 'Compaction 双路径' },
            { file: 'dsh-9.html', title: 'Token 计量：决策用重放，展示用投影', desc: '两套计量各干各的，压缩决策从不信 UI 上那个数', tag: '概念' , navTitle: 'Token 计量' },
            { file: 'dsh-10.html', title: 'Spill：工具输出太大怎么办', desc: '超限输出落盘存档，给模型留一张取回凭证', tag: '实战' , navTitle: 'Spill 落盘' },
            { file: 'dsh-11.html', title: '会话检索与跨会话引用', desc: '旧会话是可检索的资料库，引用还能带出处', tag: '深入' , navTitle: '会话检索' },
          ],
        },
        {
          id: 't-dsh-tools',
          title: '工具系统',
          desc: '三段瀑布、输出契约、文件编辑与独有工具面',
          lessons: [
            { file: 'dsh-12.html', title: '工具执行流水线：三段瀑布与单调 Guard', desc: 'pre-execute 到 post-execute 的三段管线，Guard 只能收紧不能放行', tag: '架构' , navTitle: '工具流水线' },
            { file: 'dsh-13.html', title: '工具输出契约：值与展示分离', desc: '同一个结果，模型看的和人看的可以不一样', tag: '设计模式' , navTitle: 'render intent' },
            { file: 'dsh-14.html', title: '文件编辑的工程学：先读后写', desc: 'read / edit / write 三件套，没读过的文件不许改', tag: '实战' , navTitle: '先读后写' },
            { file: 'dsh-17.html', title: 'DSH 独有的工具面：terminal / lsp / jobs', desc: '别家没有的几个工具各解决什么问题', tag: '案例' , navTitle: '独有工具面' },
          ],
        },
        {
          id: 't-dsh-security',
          title: '审批与沙箱',
          desc: '两个独立旋钮与可整体替换的执行世界',
          lessons: [
            { file: 'dsh-15.html', title: '审批与权限：两个旋钮，一个下拉框', desc: '沙箱模式和审批策略是两个独立旋钮，预设只是常用组合', tag: '安全' , navTitle: '审批与权限预设' },
            { file: 'dsh-16.html', title: '沙箱：从 seatbelt 到执行世界', desc: 'ctx.fs 和 ctx.subprocess 同享一个路径命名空间，执行环境可以整体换掉', tag: '安全' , navTitle: '执行世界' },
          ],
        },
        {
          id: 't-dsh-code',
          title: '代码模式',
          desc: '让模型写程序来编排工具调用',
          lessons: [
            { file: 'dsh-5.html', title: 'Code Mode：一段代码顶多轮工具调用', desc: '官宣叫 PTC，源码叫 code mode：worker 沙箱的隔离、通信协议与双重记账', tag: '前沿' , navTitle: 'Code Mode 沙箱' },
          ],
        },
        {
          id: 't-dsh-orch',
          title: '编排与子 Agent',
          desc: 'Subagent 接缝与四种编排原语',
          lessons: [
            { file: 'dsh-18.html', title: 'Subagent 是一个 seam：从进程内到委派 Claude Code', desc: '子 Agent 是能力接缝，进程内、远程、别家产品都能接', tag: '架构' , navTitle: 'Subagent seam' },
            { file: 'dsh-19.html', title: 'workflow / schedule / plan / todo：编排原语的取舍', desc: '四种编排原语各管什么，为什么没做成一个大而全', tag: '概念' , navTitle: '编排原语' },
            { file: 'dsh-20.html', title: 'Skill、Preset 与自我修改', desc: 'cordis_define 让 Agent 在运行时改写自己的运行时', tag: '前沿' , navTitle: 'Skill 与自我修改' },
          ],
        },
        {
          id: 't-dsh-integration',
          title: '模型与外部接入',
          desc: 'LLM 适配层、MCP 与测试基础设施',
          lessons: [
            { file: 'dsh-21.html', title: 'MCP 与 Extensions：外部工具接入的两条路', desc: '桥接生态标准与原生扩展怎么分工', tag: '深入' , navTitle: 'MCP 与扩展' },
            { file: 'dsh-22.html', title: 'LLM 适配层：单次尝试、显式重试、双流持久', desc: '推理流与正文流分开存，重试是显式事件', tag: '深入' , navTitle: 'LLM 适配层' },
            { file: 'dsh-26.html', title: '测试一个非确定性系统', desc: '确定性回放、性质测试、专门骗 LLM 客户端的故障服务器', tag: '实战' , navTitle: '测试基础设施' },
          ],
        },
        {
          id: 't-dsh-persist',
          title: '持久化与基建',
          desc: '日志治理、凭据存储与多入口内核',
          lessons: [
            { file: 'dsh-23.html', title: '持久化治理：版本、fork 边界与拒绝解读', desc: '日志格式怎么演进，分叉边界怎么定，读不懂的数据宁可拒绝', tag: '架构' , navTitle: '持久化治理' },
            { file: 'dsh-24.html', title: '凭据、设置、存储与遥测', desc: '不起眼但全是坑：凭据每次现取、配置不落盘', tag: '实战' , navTitle: '凭据与存储' },
            { file: 'dsh-25.html', title: '多入口与 Typert：一个内核，五张面孔', desc: 'Web、headless、ACP、SDK、HTTP 共享同一个内核', tag: '架构' , navTitle: '多入口' },
          ],
        },
        {
          id: 't-dsh-method',
          title: '工程方法论',
          desc: '用 AI 开发 AI 的规训体系',
          lessons: [
            { file: 'dsh-27.html', title: 'Agent Notes 与 AGENTS.md：用 AI 开发 AI 的规训', desc: '四状态设计笔记和给 AI 看的编码规范，团队立刻能抄', tag: '汇总' , navTitle: 'Agent Notes' },
            { file: 'dsh-28.html', title: 'KV Cache 是接口', desc: 'prompt 前缀稳定性当成兼容性承诺来维护', tag: '前沿' , navTitle: 'KV Cache 纪律' },
          ],
        },
        {
          id: 't-dsh-final',
          title: '超越源码',
          desc: '五种工程观与最小可抄清单',
          lessons: [
            { file: 'dsh-29.html', title: '终章：五种工程观，我们该抄什么', desc: '五家 harness 设计哲学总表，附最小可抄清单和体量陷阱清单', tag: '收官' , navTitle: '终章 · 该抄什么' },
          ],
        },
      ],
    },
    {
      id: 'p-oss',
      num: '专题篇章',
      title: '开源、蒸馏与本地部署',
      desc: '新闻里天天说某某模型开源了，开源的到底是什么？这一章从权重讲起，教你自己看懂一张许可证，搞清楚各家开源背后的商业算盘。再往下是模型如何从大变小：涌现、蒸馏，以及蒸馏带来的同质化代价。最后动手，算清楚自己的电脑能跑多大的模型，用 Ollama 或 LM Studio 真正跑起来。',
      color: '#4f46e5',
      group: 'indie',
      cluster: 'hardcore',
      routes: [],   // 硬核选修，只在完整目录里
      topics: [
        {
          id: 't-oss-what',
          title: '开源到底开的是什么',
          desc: '权重、许可证与各家的商业算盘',
          lessons: [
            { file: 'oss-1.html', title: '权重是什么？一个模型的全部本事', desc: '训练几个月最后凝结成的那个文件：它长什么样、多大、为什么说拥有权重就是拥有控制权', tag: '概念' , navTitle: '权重是什么'},
            { file: 'oss-2.html', title: '真开源 vs 假开源：怎么看懂一张许可证', desc: '三个问题定位开放程度；用同一套尺子横量 Qwen、Mistral、DeepSeek、Llama 与只给 API 的模型', tag: '选型' , navTitle: '真开源 vs 假开源'},
            { file: 'oss-3.html', title: '开源是一门生意：各家在图什么', desc: '六家厂商的开源策略与变现路径；衍生模型数量为什么比下载量更能说明问题', tag: '案例' , navTitle: '开源是一门生意'},
          ],
        },
        {
          id: 't-oss-small',
          title: '大模型如何变小',
          desc: '涌现、蒸馏，以及必须付出的代价',
          lessons: [
            { file: 'oss-4.html', title: '涌现：能力为什么会突然出现', desc: '跨过某个规模阈值后能力阶跃式跳升；以及这个现象在学术上尚存的争议', tag: '概念' , navTitle: '涌现'},
            { file: 'oss-5.html', title: '为什么要把模型做小', desc: '成本、速度、私有化三个现实动机，和小模型做不到的那些事', tag: '方法论' },
            { file: 'oss-6.html', title: '蒸馏是怎么做的：从老师到学生', desc: '五步流程、软标签与温度系数；用 DeepSeek-R1 同批开源的六个蒸馏模型做样本', tag: '案例' , navTitle: '蒸馏是怎么做的'},
            { file: 'oss-7.html', title: '蒸馏的代价：模型正在变得越来越像', desc: '口癖、格式怪癖与身份混淆的整批继承；为什么多模型交叉验证可能是假的', tag: '深入' , navTitle: '蒸馏的代价'},
          ],
        },
        {
          id: 't-oss-local',
          title: '在自己的机器上跑起来',
          desc: '算清楚，再装上',
          lessons: [
            { file: 'oss-8.html', title: '你的电脑能跑多大的模型', desc: '选显卡或 Mac 型号实时出结论；显存换算公式、量化档位与 MoE 的显存速度错位', tag: '交互' },
            { file: 'oss-9.html', title: 'Ollama 与 LM Studio 怎么上手', desc: '从安装到跑通的完整命令、模型标签的读法、量化档位怎么选，以及三个最常见的坑', tag: '实战' , navTitle: 'Ollama 与 LM Studio'},
          ],
        },
      ],
    },
    {
      id: 'p-exam',
      num: '自测中心',
      title: '七套篇章自测 · 350 道题',
      desc: '六个正课篇章各配一套 50 道题的卷子，Grok Build 专题另有一套，全部依据对应内容编写。模拟考试从题库随机抽 25 题、选项打乱，刷两遍也不重样；顺序刷题则逐题即时判定并展开解析。全部学完还有一份全站综合考，从 350 题里按卷均摊抽 35 题，专治跨章节的概念混淆。答错的考点会记进个人中心的薄弱点，直接给出补课链接。',
      color: '#7c3aed',
      group: 'extra',
      routes: ['pm', 'build'],
      exam: true,
      topics: [
        {
          id: 't-exam-entry',
          title: '怎么用这七套卷',
          desc: '两种模式的区别与使用建议',
          lessons: [
            { file: 'exam.html', title: '自测中心 · 七套篇章自测', desc: '模拟考试与顺序刷题的差别、七套卷子的考点分布、成绩与薄弱点是怎么记录的', tag: '交互' , navTitle: '自测中心'},
          ],
        },
        {
          id: 't-exam-base',
          title: '基础与 Harness',
          desc: '第一、二篇章的自测卷',
          lessons: [
            { file: 'exam-1.html', title: '大模型基础 · 篇章自测', desc: '50 题：训练三阶段 / Token 与分词 / 参数冻结 / Temperature / 幻觉四型 / RAG 与四种缓解策略', tag: '交互' , navTitle: '大模型原理篇自测 · 50 题'},
            { file: 'exam-2.html', title: 'AI Harness · 篇章自测', desc: '50 题：上下文溢出 / Prompt 工程 / 注入攻防 / 工具调用与 MCP / KV Cache 与成本优化', tag: '交互' , navTitle: 'Harness 核心篇自测 · 50 题'},
          ],
        },
        {
          id: 't-exam-build',
          title: '实战与工程设计',
          desc: '第三、四篇章的自测卷',
          lessons: [
            { file: 'exam-3.html', title: '实战 · 从 Demo 到产品 · 篇章自测', desc: '50 题：生图产品化 / Agent 卡死与防呆 / 上下文压缩 / 长期记忆 / 多 Agent / MCP 生态', tag: '交互' , navTitle: '动手实战篇自测 · 50 题'},
            { file: 'exam-4.html', title: 'AI 工程设计模式 · 篇章自测', desc: '50 题：Workflow vs Agent / 上下文三板斧 / ACI 工具设计 / 评测与 Grader / 沙箱隔离', tag: '交互' , navTitle: '工程进阶篇自测 · 50 题'},
          ],
        },
        {
          id: 't-exam-deep',
          title: '前沿、方法论与源码专题',
          desc: '第五、协作方法论篇与 Grok 专题的自测卷',
          lessons: [
            { file: 'exam-5.html', title: 'Harness 与自我改进 · 篇章自测', desc: '50 题：Harness 三大模式 / 上下文自动进化 / 工作流搜索 / 递归自我改进与七道关', tag: '交互' , navTitle: '自我改进篇自测 · 50 题'},
            { file: 'exam-7.html', title: 'Vibe Coding 方法论 · 篇章自测', desc: '50 题：流程控制与人工断点 / 质量底线 / 拒绝分期 / 文档沉淀 / 破坏性操作三道闸', tag: '交互' , navTitle: '协作方法论篇自测 · 50 题'},
            { file: 'exam-6.html', title: 'Grok Build 专题 · 篇章自测', desc: '50 题：运行时循环 / Compaction / 工具审批 / 双路记忆检索 / 五种沙箱 / MCP 集成', tag: '交互' , navTitle: 'Grok 专题自测 · 50 题'},
          ],
        },
        {
          id: 't-exam-all',
          title: '学完整门课再来',
          desc: '跨全站的综合验收',
          lessons: [
            { file: 'exam-all.html', title: '全站综合考 · 七卷抽 35 题', desc: '从 350 题里每卷均摊抽 5 题，专考跨章节容易串的概念：压缩与记忆的边界 / Workflow 与 Agent 选型 / Harness 与提示词工程的关系', tag: '交互' , navTitle: '全站综合考 · 35 题'},
          ],
        },
      ],
    },
    {
      id: 'p9',
      num: '课后甜点',
      title: '一人公司 OPC',
      desc: 'AI 让一个人就能做出产品，也让能被抢走的东西变多了。这一章讲确权与合规：商标、软著、专利、域名、备案、注册资本、股权。每一节都有法条出处和真实案例，做早了是投入，做晚了是损失。前两节免登录，其余登录后学习。',
      color: '#b45309',
      group: 'extra',
      routes: ['use', 'pro', 'pm', 'build'],
      bonus: true,
      topics: [
        {
          id: 't-opc-basics',
          routes: ['use', 'pro', 'pm', 'build'],
          title: '确权的地基',
          desc: '给每样资产配对的那把锁',
          lessons: [
            { file: 'opc-1.html', title: '六种武器：给每样资产配对的锁', desc: '商标锁名字、软著锁代码、专利锁技术方案、商业秘密锁诀窍、著作权锁内容、域名锁入口', tag: '开篇' , navTitle: '六种武器'},
            { file: 'opc-2.html', title: '确权要趁早：做早了是投入，做晚了是损失', desc: '两条时间线对照：同一件事早做几百块、晚做几十万，还有些损失根本补不回来', tag: '交互' , navTitle: '确权要趁早'},
          ],
        },
        {
          id: 't-opc-tm',
          routes: ['use', 'pro', 'pm', 'build'],
          title: '商标与域名',
          desc: '品牌的户籍和入口',
          lessons: [
            { file: 'opc-3.html', title: '商标一个不够：35、42、41 一起拿', desc: '35 类是商业变现的许可证，42 类管软件平台，41 类管课程内容；附类别清单生成器', tag: '交互' , navTitle: '商标类别'},
            { file: 'opc-4.html', title: '被驳回不等于名字没了', desc: '真实案例复盘：驳回、撤三、复审三步怎么走，举证责任在谁身上，十五日复审期限', tag: '案例' , navTitle: '商标被驳回'},
            { file: 'opc-5.html', title: '域名全拿下：十万的报价怎么谈到五千', desc: '真实议价过程复盘：手上握着多少后缀，谈判桌上就有多少筹码', tag: '案例' , navTitle: '域名议价'},
          ],
        },
        {
          id: 't-opc-code',
          routes: ['pm', 'build'],
          title: '代码、内容与技术',
          desc: '版权自动产生，证据要自己挣',
          lessons: [
            { file: 'opc-6.html', title: '软著与备案：版权自动产生，证据要自己挣', desc: '软著登记、著作权备案、可信时间戳的分工；外包开发的著作权归属陷阱', tag: '交互' , navTitle: '软著与备案'},
            { file: 'opc-7.html', title: '专利还是商业秘密：先申请，后公开', desc: '公开换独占还是保密换无限期；新颖性一旦丢失不可逆，顺序错了没有补救', tag: '交互' , navTitle: '专利或商业秘密'},
          ],
        },
        {
          id: 't-opc-entity',
          routes: ['pm', 'build'],
          title: '主体与上线合规',
          desc: '备案、许可、注册资本',
          lessons: [
            { file: 'opc-8.html', title: 'ICP 备案是地基，ICP 证是收费执照', desc: '备案管能不能开门，ICP 证管能不能收钱：注册资本 100 万加第二类增值电信业务', tag: '交互' , navTitle: 'ICP 备案与证'},
            { file: 'opc-9.html', title: '注册资本别乱写：五年内要真金白银缴足', desc: '新公司法五年实缴；一人公司要能证明公司财产独立于自己的财产，证明不了就连带', tag: '交互' , navTitle: '注册资本'},
          ],
        },
        {
          id: 't-opc-equity',
          routes: ['pm', 'build'],
          title: '合伙与股权',
          desc: '互补、控制权、代持与退出',
          lessons: [
            { file: 'opc-10.html', title: '合伙人要互补：能力重叠的两个人别合伙', desc: '互补排在志同道合前面；做不到极致互信宁可不合伙；先用项目跑一段试婚期', tag: '交互' , navTitle: '合伙人'},
            { file: 'opc-11.html', title: '三个人各 1/3 是最贵的公平', desc: '过半数与三分之二两条表决线；股权结构模拟器算给你看，核心创始人为什么要 70%', tag: '交互' , navTitle: '平均分配的陷阱'},
            { file: 'opc-12.html', title: '股权别靠感觉分：五个维度算一遍', desc: '综合能力、出资额、机会成本、idea 来源、责任担当；最容易漏掉的两项占四成', tag: '交互' , navTitle: '股权五维度'},
            { file: 'opc-13.html', title: '先签代持协议，成熟了再动工商登记', desc: '离职不签字为什么能锁死公司；代持协议的效力与边界、分期成熟、退出与回购', tag: '交互' , navTitle: '代持与退出'},
          ],
        },
        {
          id: 't-opc-strategy',
          routes: ['pm', 'build'],
          title: '战略与收官',
          desc: '出海、选型和新创业公式',
          lessons: [
            { file: 'opc-14.html', title: '服务器放哪不重要，用户在哪才关键', desc: '假出海躲不掉境内义务，法规看的是向谁提供服务；真出海是一个独立项目', tag: '交互' , navTitle: '真出海与假出海'},
            { file: 'opc-15.html', title: '大厂看不上的长尾，才是一个人的机会', desc: 'ROI 门槛帮你挡掉了最强的对手；国产模型能力差距已小、价格差距还大，按场景选型', tag: '交互' , navTitle: '长尾与选型'},
            { file: 'opc-final.html', title: '新创业公式：先找买单的人，再用 AI 做出来', desc: '15 节全景图、确权合规自查十五条、七字真言与止损，以及本周就做的三件事', tag: '收官' , navTitle: '新创业公式'},
          ],
        },
      ],
    },
    {
      id: 'p-seo',
      num: '课后甜点',
      title: '被搜到：SEO 与 GEO',
      desc: '产品做出来了、确权了，接下来的问题是有没有人找得到。这一章讲两件事：SEO 的最低可行清单（能被抓、能被读懂、能被收录），以及 GEO 这个新战场（让 ChatGPT、Perplexity、Kimi、豆包在回答问题时愿意引用你）。全章用小山学堂自己的一次真实改造当案例，不教黑帽，不承诺排名，只给能自己动手核对的清单。前两节免登录，其余登录后学习。',
      color: '#4338ca',
      group: 'extra',
      routes: ['use', 'pro', 'pm', 'build'],
      bonus: true,
      topics: [
        {
          id: 't-seo-why',
          routes: ['use', 'pro', 'pm', 'build'],
          title: '先搞清被发现这件事',
          desc: '做完不等于有人来',
          lessons: [
            { file: 'seo-1.html', title: '做出来了，为什么没人来', desc: '三条流量入口各有各的脾气：搜索引擎主动搜、AI 引擎直接问、社交传播替你说。先玩一遍收录漏斗，看你的产品卡在哪一层', tag: '开篇' , navTitle: '为什么没人来'},
          ],
        },
        {
          id: 't-seo-field',
          routes: ['use', 'pro', 'pm', 'build'],
          title: '两个战场',
          desc: '搜索引擎给链接，AI 引擎给答案',
          lessons: [
            { file: 'seo-2.html', title: 'SEO 最低可行清单：能被抓、能被读懂、能被收录', desc: '只讲做了就有效的部分：一页一个主题、title 说人话、正文别全靠 JS 渲染、sitemap 与站长平台提交。抓取模拟器亲手切两态，看爬虫到底拿到了什么', tag: '实战' , navTitle: 'SEO 最低可行清单'},
            { file: 'seo-3.html', title: 'GEO：让 AI 引擎愿意引用你', desc: '用户不再只搜，还在问。自包含段落、FAQ 结构化数据、llms.txt 与新鲜度信号，四个杠杆各配一个当场能玩的教具，附 AI 爬虫点名册', tag: '交互' , navTitle: 'GEO 让 AI 引用你'},
          ],
        },
        {
          id: 't-seo-case',
          routes: ['pm', 'build'],
          title: '拆一个真实案例',
          desc: '用本站的改造记录当解剖台',
          lessons: [
            { file: 'seo-4.html', title: '拆本站：Google 收录 693 页，Bing 只有 50 页', desc: '小山学堂 2026 年 8 月真实审计复盘：sitemap 漏了全部英韩页、Q&A 页白扔了 FAQ 引用、日志把爬虫全丢弃。每个缺口讲清怎么发现、改了什么、拿什么验收', tag: '案例' , navTitle: '拆本站真实改造'},
          ],
        },
        {
          id: 't-seo-final',
          routes: ['pm', 'build'],
          title: '优先级与收官',
          desc: '一个人没有 SEO 团队，只有排序能力',
          lessons: [
            { file: 'seo-5.html', title: '一个人的优先级：先写能被搜到的问题', desc: '先写用户真的会打出来的那句问题，再堆功能；用真实经历换可信度。反面清单也在这一节：买外链、关键词堆砌、AI 批量灌水页，哪些是找死', tag: '实战' , navTitle: '一个人的优先级'},
            { file: 'seo-final.html', title: '被搜到验收清单：上线前再过一遍', desc: '十二项可勾选清单：一页一主题、正文服务端可见、sitemap、一句话答案块、FAQ 结构化数据、llms.txt。附「怎么知道有效」的四个度量口径', tag: '收官' , navTitle: '被搜到验收清单'},
          ],
        },
      ],
    },
    {
      id: 'p8',
      num: '课后甜点',
      title: '雷军创业课',
      desc: '这不是 AI 课，是正课学完后的一道甜点：整理自雷军的创业公开课口述，涵盖产品、口碑、找钱、估值、股权与现金流。给想靠 AI 做一人公司（OPC）的你，补上「做生意」的方法论。全章免登录开放。',
      color: '#f97316',
      group: 'extra',
      routes: ['pm', 'build'],
      bonus: true,
      freeAll: true,
      topics: [
        {
          id: 't-lei-mind',
          title: '创业者的自我修养',
          desc: '决心、勇气与向死而生的心理建设',
          lessons: [
            { file: 'lei-1.html', title: '谁适合创业：莫名其妙的自信', desc: '创业不是人干的事：面对困难的勇气、描绘蓝图的能力，与金山对抗微软十六年的信念', tag: '开篇' , navTitle: '谁适合创业'},
            { file: 'lei-2.html', title: '心理准备：第一天就想好怎么死', desc: '90% 的创业公司都会死；静悄悄地干、早死早超生、只给自己四年。危机感才是护身符', tag: '交互' , navTitle: '心理准备'},
          ],
        },
        {
          id: 't-lei-dir',
          title: '方向与起点',
          desc: '喜欢的、能干的、市场足够大的',
          lessons: [
            { file: 'lei-3.html', title: '选方向：Go Big Market', desc: '兴趣是第一驱动力，但天花板由市场决定：毒霸与词霸、多玩与 YY 的两次教训', tag: '交互' , navTitle: '选方向'},
            { file: 'lei-4.html', title: '起名：赢在起跑线', desc: '有商标、有域名、含义不错、朗朗上口；从大米到小米的取名全过程', tag: '交互' , navTitle: '起名'},
          ],
        },
        {
          id: 't-lei-product',
          title: '产品与口碑',
          desc: '专注、极致、口碑、快',
          lessons: [
            { file: 'lei-5.html', title: '互联网七字诀', desc: '一年只出一款手机的自信、把自己逼疯的极致，与一夜应战价格战的快', tag: '交互' },
            { file: 'lei-6.html', title: '口碑的本质是超出预期', desc: '金碧辉煌的帆船酒店为什么输给海底捞：预期管理，与用心可以被用户感知', tag: '交互' , navTitle: '口碑的本质'},
          ],
        },
        {
          id: 't-lei-money',
          title: '找钱与融资',
          desc: '信用是融资的全部前提',
          lessons: [
            { file: 'lei-7.html', title: '第一笔钱：从身边人开始', desc: '天使投资的本质是熟人信用；商业计划书没那么重要，一句话说清生意才重要', tag: '交互' , navTitle: '第一笔钱'},
            { file: 'lei-8.html', title: '融资时机：有钱才能融到钱', desc: '钱花掉一半就启动融资；让投资人来找你；VC 凭什么要赚十倍', tag: '交互' , navTitle: '融资时机'},
            { file: 'lei-9.html', title: '估值的艺术：融资卖的是信心', desc: '先找不可能投你的人问价、从中间价往上走；做价过高的三种副作用', tag: '交互' , navTitle: '估值的艺术'},
          ],
        },
        {
          id: 't-lei-equity',
          title: '股权与合伙人',
          desc: '创业是一场分享 100% 梦想的拼图',
          lessons: [
            { file: 'lei-10.html', title: '股权就是拼图：切忌均分', desc: '50/50 的隐患、三人各 1/3 的死局；极左极右都不行，团队里必须有权威', tag: '交互' , navTitle: '股权就是拼图'},
            { file: 'lei-11.html', title: '合伙人：先分梦想，再分股份', desc: '股份锁定四年、退出机制提前谈；换合伙人的概率高达三分之一', tag: '交互' , navTitle: '合伙人'},
          ],
        },
        {
          id: 't-lei-ops',
          title: '经营基本功',
          desc: '现金流和人是公司的命',
          lessons: [
            { file: 'lei-12.html', title: '现金流与报酬包', desc: '没有收入你能活几个月；工资股票自选的 package 制度让报酬不再攀比', tag: '交互' },
          ],
        },
        {
          id: 't-lei-final',
          title: '专题收官',
          desc: '把雷军的课变成 OPC 的行动清单',
          lessons: [
            { file: 'lei-final.html', title: '写给 AI 时代的一人公司', desc: '22 段口述的全景回顾，映射成 OPC 创业自查清单：方向、口碑、现金、股权', tag: '收官' , navTitle: '写给一人公司'},
            { file: 'lei-test.html', title: '测一测你的 AI 创业成功率', desc: '12 道题综合全篇章的核心判断，算出成功率、六维雷达画像和回炉处方', tag: '交互' , navTitle: '创业成功率测试'},
          ],
        },
      ],
    },
  ],
};

/* ── 标签配色 ── */
window.TAG_STYLE = {
  '交互':   { bg: '#dcfce7', fg: '#15803d' },
  '动画':   { bg: '#dcfce7', fg: '#166534' },
  '概念':   { bg: '#fef9c3', fg: '#a16207' },
  '案例':   { bg: '#fef2f2', fg: '#dc2626' },
  '开篇':   { bg: '#fef2f2', fg: '#dc2626' },
  '安全':   { bg: '#fef2f2', fg: '#dc2626' },
  '反例':   { bg: '#fef2f2', fg: '#dc2626' },
  '实战':   { bg: '#dbeafe', fg: '#1d4ed8' },
  'PM 进阶':{ bg: '#dbeafe', fg: '#1d4ed8' },
  '系统设计':{ bg: '#dbeafe', fg: '#1d4ed8' },
  '深入':   { bg: '#ffedd5', fg: '#ea580c' },
  '多模态': { bg: '#fef3c7', fg: '#92400e' },
  '选型':   { bg: '#fef3c7', fg: '#d97706' },
  '提示词工程': { bg: '#e0f2fe', fg: '#0369a1' },
  'RAG':    { bg: '#f3e8ff', fg: '#7e22ce' },
  '架构':   { bg: '#dcfce7', fg: '#166534' },
  '汇总':   { bg: '#ede9fe', fg: '#6d28d9' },
  '收官':   { bg: '#fef9c3', fg: '#a16207' },
  '技巧':   { bg: '#ecfdf5', fg: '#065f46' },
  '设计模式':{ bg: '#fef2f2', fg: '#dc2626' },
  '方法论': { bg: '#fff7ed', fg: '#c2410c' },
  '规范':   { bg: '#ccfbf1', fg: '#0f766e' },
  '前沿':   { bg: '#f3e8ff', fg: '#7c3aed' },
  '考察':   { bg: '#fee2e2', fg: '#b91c1c' },
};

/* ── 工具：扁平化所有 lesson，便于上一节/下一节导航 ── */
window.COURSE_FLAT = (function () {
  const flat = [];
  window.COURSE.parts.forEach(function (part) {
    part.topics.forEach(function (topic) {
      topic.lessons.forEach(function (lesson) {
        flat.push(Object.assign({}, lesson, {
          partId: part.id, partTitle: part.title, partNum: part.num,
          topicId: topic.id, topicTitle: topic.title,
        }));
      });
    });
  });
  return flat;
})();
