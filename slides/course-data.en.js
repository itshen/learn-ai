/**
 * Course structured data (English) — unified data source for the portal homepage
 * (home.html) and the Wiki learning page (learn.html).
 *
 * Structure: Part → Topic → Lesson
 * lesson.file maps to an .html under slides/
 * lesson.tag is used to display colored badges
 */
window.COURSE = {
  meta: {
    title: 'AI from Fundamentals to Mastery',
    subtitle: 'From LLM Fundamentals to AI Agent Harness',
    brand: 'Xiaoshan Academy',
    author: 'Luo Xiaoshan (洛小山)',
    authorUrl: 'https://luoxiaoshan.cn/',
    github: 'https://github.com/itshen/learn-ai',
  },
  parts: [
    /* Opening chapter: the first stop of the course — locate yourself, then learn how to
       learn. Sits before Part 0, so new visitors land here by default (learn.html takes
       FLAT[0]). Temporarily reuses the prologue flag, which renders the same INTRO badge
       as Part 0; a dedicated preface style follows once the Ask Alice branch lands. */
    {
      id: 'p-start',
      num: 'Start Here',
      title: 'Before You Begin',
      desc: 'Three opening lessons: locate yourself on the Dunning-Kruger curve, learn how to study so the knowledge actually sticks, and see why the fundamentals are worth your time — once they click, every later solution explains itself.',
      color: '#64748b',
      prologue: true,
      topics: [
        {
          id: 't-intro',
          title: 'Orientation',
          desc: 'Figure out where we are and why foundations matter',
          lessons: [
            { file: '0-intro.html', title: 'Where Are We? The Dunning-Kruger Effect', desc: 'Use the Dunning-Kruger curve to locate where learners stand; clarify the course goal: from the peak of ignorance to the plateau of competence', tag: 'Intro' },
            { file: '0-how.html', title: 'How to Actually Learn', desc: 'Watching ≠ learning: pause at every case study, map it to your own business, and try to articulate it', tag: 'Intro' },
            { file: '0-why.html', title: 'Why Spend Time on Fundamentals', desc: 'Every AI Harness operation is essentially processing a message list. Understand it, and every solution makes sense', tag: 'Intro' },
          ],
        },
      ],
    },
    {
      id: 'p0',
      num: 'Part 0',
      title: 'For Those Meeting AI for the First Time',
      desc: 'No jargon, no math. Eight short interactive lessons that build the right instincts about AI: the amazing things it can do, why it bluffs with a straight face, how to talk to it, and what you can safely hand over. Friendly to complete beginners — the whole chapter is free, no login required.',
      color: '#0891b2',
      prologue: true,
      topics: [
        {
          id: 't-zero-what',
          title: 'What Exactly Is AI',
          desc: 'First see what it can do, then see through how it works',
          lessons: [
            { file: 'zero-0.html', title: 'The Amazing Things AI Can Do', desc: 'Six real-life scenes: turning rambling notes into minutes, decoding medical reports, explaining anything to anyone, mock interviews, building tools, generating posters. We used to learn software; now software listens to us', tag: 'Interactive' },
            { file: 'zero-1.html', title: 'It Plays "Finish the Sentence"', desc: 'Zero background needed: AI does exactly one thing — guess the next word. Two mini-games build your first correct instinct about AI', tag: 'Interactive' },
            { file: 'zero-2.html', title: 'It Is Not a Search Engine', desc: 'Search hands you a bookshelf; AI hands you a conclusion. Three consequences of "answering from memory": mixed-up facts, a knowledge cutoff, and no sources to check', tag: 'Concept' },
            { file: 'zero-3.html', title: 'It Bluffs with a Straight Face', desc: 'Three spot-the-fake games: catch fabricated sentences in AI answers with your own eyes, then take home three life-saving habits', tag: 'Interactive' },
          ],
        },
        {
          id: 't-zero-talk',
          title: 'How to Talk to It',
          desc: 'Two speaking techniques you can use right away',
          lessons: [
            { file: 'zero-4.html', title: 'Treat It Like a Colleague Who Doesn\'t Know You', desc: 'Three-level prompt comparison + a prompt building-block assembler: context, request, constraints — it answers exactly as much as you tell it', tag: 'Interactive' },
            { file: 'zero-5.html', title: 'The Magic Opener: "Ask Me a Few Questions First"', desc: 'Can\'t articulate what you need? Let it interview you. A click-through dialogue demo where answer quality visibly doubles', tag: 'Interactive' },
          ],
        },
        {
          id: 't-zero-faq-usage',
          title: 'Using It Well',
          desc: 'One question per page: use it better, pick the right tools',
          lessons: [
            { file: 'zero-q-prompt.html', title: 'How Do You Actually Write a Good Prompt?', desc: 'One universal skeleton (context + request + constraints) + a puzzle assembler: snap different prompts together and watch answer quality change live', tag: 'Interactive' },
            { file: 'zero-q-prompt-engineering.html', title: "What's the Point of Prompt Engineering?", desc: "Your one chat vs a product team's one million calls: drag the slider and watch a chunk of filler blow up into a real bill", tag: 'Interactive' },
            { file: 'zero-q-model-agent-app.html', title: 'Models, Agents, Apps — How Do They Relate?', desc: "Engine, full car, ride-share — a three-layer analogy + a matching game: hear the news and know which layer they're talking about", tag: 'Interactive' },
            { file: 'zero-q-agent.html', title: 'What Makes Agents So Powerful?', desc: 'Same expense-report job, chat AI and an Agent work it completely differently — hit play and watch the Agent finish the work step by step', tag: 'Interactive' },
            { file: 'zero-q-skill.html', title: "What Is This \"Skill\" Everyone's Talking About?", desc: 'A cheat sheet of experience written for AI. Play the comparison: the butler without it runs 4 extra trips; with it, done in one', tag: 'Interactive' },
            { file: 'zero-q-vibe-coding.html', title: 'What Is Vibe Coding? Can You Build Software Without Writing Code?', desc: 'Pick an everyday need and watch the full loop: one-sentence brief → AI generates → two revision rounds → it works; three months of study vs ten minutes of describing', tag: 'Interactive' },
            { file: 'zero-q-china-models.html', title: 'What Chinese AI Models Are Out There? How to Choose?', desc: 'Qwen (Tongyi), Kimi, DeepSeek, Doubao, GLM… click your scenario and find your match. Data from the global blind-test leaderboard', tag: 'Interactive' },
            { file: 'zero-q-companies.html', title: 'Which Other AI Companies Matter?', desc: 'OpenAI, Anthropic, Google, Meta, xAI… a matching game pairs each company with its flagship, then a friendly field guide', tag: 'Interactive' },
          ],
        },
        {
          id: 't-zero-faq-basics',
          title: 'Concept Primer',
          desc: 'One question per page: a zero-background take on the words in the news',
          lessons: [
            { file: 'zero-q-token.html', title: 'What Is a Token? Why Does AI Charge by It?', desc: 'Interactive tokenizer: tap a sentence, watch it slice into tokens, and the bill jumps live; Chinese vs English cost is obvious', tag: 'Interactive' },
            { file: 'zero-q-context-window.html', title: 'Why Does It "Forget" After a Long Chat?', desc: "AI's desk is only so big: drag the turn count, watch the earliest notes fall off when the desk fills — that's the moment it starts answering the wrong question", tag: 'Interactive' },
            { file: 'zero-q-reasoning.html', title: 'What Are "Reasoning Models" and "Deep Thinking"?', desc: 'Same puzzle, two modes: instant vs deep thinking; watch the time and cost gap, then a four-question quiz to feel when thinking is worth turning on', tag: 'Interactive' },
            { file: 'zero-q-parameters.html', title: 'Does More Parameters Mean Smarter?', desc: 'What does "100 billion parameters" even mean? Drag the scale slider to build intuition, then see where small models win: speed, cost, specialist jobs', tag: 'Interactive' },
            { file: 'zero-q-multimodal.html', title: "Why Can't Some AIs See Pictures?", desc: '"Can talk" and "can see" are two different skills. Send the same cat photo to two models, see the gap, then unpack how the "eyes" work', tag: 'Interactive' },
            { file: 'zero-q-finetune-vs-rag.html', title: 'What Is Fine-Tuning? How Is It Different from "Feeding It Docs"?', desc: 'Back to class vs an open-book exam: two ways to make AI know your stuff, side by side, then match four real scenarios', tag: 'Interactive' },
            { file: 'zero-q-knowledge-base.html', title: 'What Is This "Knowledge Base" Every Company Is Building?', desc: 'Three-step animation: chunk files into the store → retrieve on ask → stuff into context then answer; same question with and without a knowledge base', tag: 'Interactive' },
            { file: 'zero-q-acronyms.html', title: 'GPT, LLM, AIGC… How Do You Tell These Acronyms Apart?', desc: 'A matching game pairs each acronym with its plain-language meaning; finish it and you get a who-contains-whom map', tag: 'Interactive' },
            { file: 'zero-q-nvidia-gpu.html', title: 'Why Is NVIDIA Worth So Much?', desc: 'The gold-rush shovel seller: one PhD grinding problems one by one vs ten thousand kids starting at once — see why GPUs are the hot commodity', tag: 'Interactive' },
          ],
        },
        {
          id: 't-zero-faq-myth',
          title: 'Debunking the Hype',
          desc: 'One question per page: puncture the hype and common myths',
          lessons: [
            { file: 'zero-q-train-or-prompt.html', title: '"I Trained a Model" — What Did They Actually Train?', desc: 'A four-rung ladder: rewrite the prompt, hang a knowledge base, fine-tune, pretrain from scratch — each rung tagged with real cost; hear five boasts and place the speaker', tag: 'Interactive' },
            { file: 'zero-q-jargon-translator.html', title: 'AI Jargon Translator', desc: 'In-house, wrapper, digital employee, empower… tap a launch-event line for the plain-language version, plus a gold-content rating and three follow-ups that get the real story on the spot', tag: 'Interactive' },
            { file: 'zero-q-opensource-free.html', title: "Does an “Open-Source Model” Mean It's Free?", desc: 'Weights, data, method — a three-piece check of what mainstream models actually open; full-size vs distilled, and what you run locally is usually the small one', tag: 'Interactive' },
            { file: 'zero-q-benchmark.html', title: 'Why Does the "#1 on the Leaderboard" Model Feel Worse in Real Use?', desc: 'A reversal demo of leaderboard score vs real usefulness + three reasons: gaming the board, overfitting the question bank, scenario mismatch; and which boards you can actually trust', tag: 'Interactive' },
            { file: 'zero-q-ai-learning.html', title: 'The More We Chat, the Better It Knows Me — Is It Learning?', desc: "You think the model is growing; it's a little notebook stuffed back into the chat — split-screen animation + a new-chat \"memory wipe\" demo", tag: 'Interactive' },
            { file: 'zero-q-ai-detector.html', title: 'When an AI Detector Says "This Was Written by AI," Can You Trust It?', desc: "Guess how the detector will call six passages, and feel the classic false-positive moments yourself; why it can't work in principle, and what to do if you're wrongly accused", tag: 'Interactive' },
            { file: 'zero-q-prompt-course.html', title: 'Are "Secret Prompt Playbooks" Worth Buying?', desc: "Tear through the paid-course talking points one by one: what this site already teaches free, what's just common sense, what's pure packaging. The skeleton is free — the work is using it", tag: 'Interactive' },
            { file: 'zero-q-randomness.html', title: 'Why Is the Answer Different Every Time?', desc: "Ask the same question three times and get three answers, plus a \"next word\" probability-dice animation; it's design, not a bug — and when you need stable output", tag: 'Interactive' },
            { file: 'zero-q-ai-customer-service.html', title: 'Why Is AI Customer Service So Dumb?', desc: 'Send the same complaint to a chat AI and a support bot — the gap is obvious; three reasons: a cheap small model, guardrails locked tight, old tech wearing an AI sticker', tag: 'Interactive' },
            { file: 'zero-q-siri-vs-chatgpt.html', title: 'Are Siri and ChatGPT the Same Thing?', desc: "Path animation of the same sentence through two generations of assistant: command matching apologizes when it doesn't understand; generative AI can pick up any phrasing", tag: 'Interactive' },
          ],
        },
        {
          id: 't-zero-faq-money',
          title: 'Spending & Safety',
          desc: 'One question per page: cost, accounts, and privacy',
          lessons: [
            { file: 'zero-q-free-vs-paid.html', title: 'Is Free AI Enough? When Is Paying Worth It?', desc: 'Free-tier X-ray: model tier, quota, context, peak-hour queues — light up all four; three kinds of people find their match, each with one-line advice', tag: 'Interactive' },
            { file: 'zero-q-api-vs-membership.html', title: 'What Is an API? How Is It Different from a Membership?', desc: 'Monthly buffet vs pay-as-you-go by the gram: drag the usage slider to see what each way costs, and find your crossover', tag: 'Interactive' },
            { file: 'zero-q-image-cost.html', title: 'Why Does One Image Cost Dozens of Times More?', desc: 'A chat costs a fraction of a cent; one image costs a few cents. Cost-bar animation + three reasons: way more pixels, painted dozens of times, GPU monopolized', tag: 'Interactive' },
            { file: 'zero-q-video-cost.html', title: 'Why Is AI Video Billed by the Second?', desc: 'Drag the slider: 10 seconds of video = 240 coherent frames + physics that hold + audio in sync. A save-money order comes with it', tag: 'Interactive' },
            { file: 'zero-q-relay.html', title: 'What Is an API Relay Reseller?', desc: 'Behind that 70%-off price: every word you send passes an unverifiable middleman. A route animation lays out three structural risks', tag: 'Interactive' },
            { file: 'zero-q-reverse-proxy.html', title: 'What Are "Carpool" and "Shared" Accounts?', desc: "A ¥9.9 Plus carpool = 30 people sharing a studio. Animation: histories in the open, one ban takes everyone down, the key sits in someone else's hands", tag: 'Interactive' },
            { file: 'zero-q-privacy.html', title: 'Will My Chat History Be Used for Training?', desc: 'After you hit send, which steps a sentence passes and which one may enter the training data; how to flip the training switch off, and how the free tier differs from enterprise', tag: 'Interactive' },
          ],
        },
        {
          id: 't-zero-trust',
          title: 'What You Can Safely Hand Over',
          desc: 'A three-second trust test',
          lessons: [
            { file: 'zero-6.html', title: 'Trust It, or Verify?', desc: 'An eight-question judgment game + the trust quadrant: is there one right answer? How costly is a mistake? Three red lines: health, money, law', tag: 'Interactive' },
            { file: 'zero-final.html', title: 'Your Next Step', desc: 'Pack your six instincts, then a three-question quiz routes you to the learning path that fits you best', tag: 'Wrap-up' },
          ],
        },
      ],
    },
    {
      id: 'p1',
      num: 'Part 1',
      title: 'How LLMs Came to Be',
      desc: 'From training data and Tokens to the GPT breakthrough, then to the causes of LLM hallucinations and four mitigation strategies — building a complete understanding of LLM fundamentals.',
      color: '#0066ff',
      topics: [
        {
          id: 't-basic',
          title: 'Core Principles',
          desc: 'Training data, training vs inference, vocabulary and attention',
          lessons: [
            { file: 'training-data.html', title: 'AI\'s Food: Training Data', desc: 'What does 15T Tokens look like? Corpus composition visualization + data-scale intuition slider', tag: 'Interactive' },
            { file: 'train-vs-infer.html', title: 'Training vs Inference: Two Different Processes', desc: 'Conversations are not learning; parameters are frozen; billing is per Token — essentials every AI PM must know', tag: 'Concept' },
            { file: '1-2-vocab.html', title: 'Vocabulary & Training', desc: 'From corpus to word-pair matrices: Tokenization + attention-weight interactive demo', tag: 'Interactive' },
            { file: '1-2-base.html', title: 'Base Model: A Token-Predicting Machine', desc: 'What do you get after training? Step-by-step generation with live probability distribution updates', tag: 'Animation' },
            { file: '1-2-gpt.html', title: 'The GPT Breakthrough: PreTraining Changes Everything', desc: 'Interactive comparison of CNN / RNN / BERT / GPT, with memory-decay visualization', tag: 'Interactive' },
          ],
        },
        {
          id: 't-chat',
          title: 'From Completion to Chat',
          desc: 'How a completion machine became a chatbot',
          lessons: [
            { file: '1-2-api.html', title: 'The chat/completions Mystery', desc: 'It\'s clearly a conversation — so why is the API called "completions"? A typewriter animation explains', tag: 'Animation' },
            { file: '1-2-fake-chat.html', title: 'Faking a Chat History', desc: 'OpenAI\'s original experiment: turning a completion machine into a chatbot', tag: 'Animation' },
            { file: '1-2-sft.html', title: 'Chat Template + SFT', desc: 'Jinja formatting, instruction fine-tuning — LLMs finally learn to talk', tag: 'Concept' },
            { file: '1-2-prompt-power.html', title: 'The Context Window Is Key', desc: 'Why are prompts powerful enough? Token truncation visualization — no retraining needed', tag: 'Interactive' },
          ],
        },
        {
          id: 't-hallucination',
          title: 'Hallucinations & Four Mitigations',
          desc: 'Why hallucinations happen, and four mitigation strategies: Prompt / RAG / Temperature / Evaluation',
          lessons: [
            { file: '1-2-hallucination.html', title: 'LLM Hallucination Demo', desc: 'Three classic types: factual errors / confident fabrication / knowledge cutoff', tag: 'Case Study' },
            { file: '1-2-mitigation-prompt.html', title: 'Mitigation 1: Prompt Engineering', desc: 'Constraint instructions + limitations: the model doesn\'t know what it doesn\'t know', tag: 'Concept' },
            { file: '1-2-mitigation-rag.html', title: 'Mitigation 2: RAG — Retrieval-Augmented Generation', desc: 'Inject real documents into the context; 5-step animated flow; compare with and without RAG', tag: 'Interactive' },
            { file: 'rag-advanced.html', title: 'The Cost & Optimization of RAG', desc: 'Cost analysis table + four strategies: keyword trigger / model routing / semantic cache / precise chunking', tag: 'PM Advanced' },
            { file: '1-2-mitigation-temp.html', title: 'Mitigation 3: Temperature & Top-P', desc: 'Drag the slider to see probability distributions and output changes in real time', tag: 'Interactive' },
            { file: '1-2-mitigation-eval.html', title: 'Mitigation 4: Evaluation + Human Review', desc: 'External correction layer — a cold-start fallback strategy (HITL)', tag: 'Concept' },
          ],
        },
        {
          id: 't-summary1',
          title: 'Part Recap',
          desc: 'Part 1 key takeaways review',
          lessons: [
            { file: 'summary-1.html', title: 'Recap (Part A) · What LLMs Are + Hallucinations', desc: 'Training essence / Token / Base→SFT→Chat / four hallucination types and root causes', tag: 'Recap' },
            { file: 'summary-1b.html', title: 'Recap (Part B) · Mitigation Strategies + Decision Framework', desc: 'Four mitigation strategies compared / common misconceptions / solution selection matrix', tag: 'Recap' },
          ],
        },
        {
          id: 't-build1',
          title: 'What You Can Do Now',
          desc: 'After this chapter, what you can start doing today',
          lessons: [
            { file: 'build-1.html', title: 'Lock That One Job Down', desc: 'Four-step demo of tightening a requirement; three tasks: write a four-line spec, try it on five real inputs, draw a human–AI boundary', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-interview1',
          title: 'They Will Quiz You',
          desc: 'How interviewers, bosses, and tech colleagues will test you on this chapter',
          lessons: [
            { file: 'interview-1.html', title: 'LLM Fundamentals · 30 Tough Questions', desc: 'Each with intent, framework, and bonus points: probability prediction / message list / hallucination explanation / RAG vs retraining / Temperature / context window', tag: 'Quiz' },
          ],
        },
      ],
    },
    {
      id: 'p2',
      num: 'Part 2',
      title: 'AI Harness',
      desc: 'Context engineering, advanced Prompt techniques and security, Agent design and tool calling, a five-layer cost optimization system — turning LLMs into real products.',
      color: '#7c3aed',
      topics: [
        {
          id: 't-context',
          title: 'Context Engineering',
          desc: 'AI\'s working memory and overflow handling',
          lessons: [
            { file: '5-1.html', title: 'Context Window: AI\'s Working Memory', desc: 'Window composition visualization; drag to simulate overflow; compare capacities of mainstream models', tag: 'Interactive' },
            { file: '5-2.html', title: 'Context Overflow: Three Handling Strategies', desc: 'Truncation / summary compression / selective retention — visual comparison of each strategy\'s trade-offs', tag: 'Interactive' },
          ],
        },
        {
          id: 't-prompt',
          title: 'Prompt Engineering',
          desc: 'Markdown, role-play, advanced techniques, and output formatting',
          lessons: [
            { file: '6-0a.html', title: 'Why LLMs Chose Markdown', desc: 'Plain-text model + formatting needs = MD as the best choice; step-by-step reasoning why HTML / Word / LaTeX don\'t work', tag: 'Animation' },
            { file: '6-0b.html', title: 'Markdown Syntax & Rendering Pipeline', desc: 'Common syntax cheat sheet + live editor + marked.js / markdown-it rendering solutions', tag: 'Interactive' },
            { file: '6-1.html', title: 'You Say It, AI Becomes It', desc: 'Five roles switch in real time; output format control; System Prompt core principles', tag: 'Interactive' },
            { file: '6-2.html', title: 'Advanced Prompt Techniques', desc: 'Few-Shot / CoT / constraints / task decomposition — good vs bad interactive comparison', tag: 'Interactive' },
            { file: '6-3.html', title: 'Output Format Trade-offs', desc: 'Plain text / JSON / Markdown / YAML / XML — scenario fit comparison and trade-offs', tag: 'Interactive' },
            { file: '6-4.html', title: 'Streaming Output & Format Pairing', desc: 'JSON needs full text to parse / MD streams char-by-char / XML renders on tag capture — live demo', tag: 'Interactive' },
          ],
        },
        {
          id: 't-security',
          title: 'Prompt Security',
          desc: 'Prompt Injection: principles, cases, and defense in practice',
          lessons: [
            { file: 'prompt-attack.html', title: 'Prompt Injection: Why Attacks Work', desc: 'SQL injection analogy → message list essence → lack of parameterization → overview of 5 attack types', tag: 'Security' },
            { file: 'prompt-attack-cases.html', title: 'Prompt Injection: 12 Attack Cases', desc: 'Privilege escalation / role-play / Few-Shot / structural injection / metaphor disguise — vulnerable vs defended versions', tag: 'Security' },
            { file: 'prompt-defense.html', title: 'Prompt Defense: Three-Layer Interception', desc: 'Input-layer regex → prompt-layer constraints → output-layer leak detection → secondary review; simulate the full attack chain', tag: 'Hands-on' },
            { file: 'ai-safety-redlines.html', title: 'AI Safety Red Lines: Four Boundaries', desc: 'What must not be done, consequences, and the four types of safety boundaries every PM must uphold', tag: 'Security' },
            { file: 'ai-safety-governance.html', title: 'Risk Classification & Accountability', desc: 'AI output risk classification model, role-based responsibility assignment and governance framework', tag: 'Security' },
          ],
        },
        {
          id: 't-agent',
          title: 'Agent Engineering',
          desc: 'Agent capabilities, tool calling, ReAct, memory, Skill, and scaffolding',
          lessons: [
            { file: '7-1.html', title: 'Agent: AI That Gets Things Done', desc: 'Four capabilities: Plan / Tool / Memory / Act — click to see real-world cases', tag: 'Interactive' },
            { file: '7-2.html', title: 'The Secret of Tool Calling', desc: 'Model outputs JSON → framework parses & executes → result injected back; four-step flow visualization', tag: 'Interactive' },
            { file: '7-2a.html', title: '5 Messages Behind One Conversation', desc: 'Deconstructing the real Function Calling chain: the user sees 1 reply, but 5 API messages happen behind the scenes', tag: 'Deep Dive' },
            { file: '7-2b.html', title: 'The Art of Tool Descriptions', desc: 'Same functionality, but good vs bad descriptions differ by 3× in success rate — a contrast experiment', tag: 'Deep Dive' },
            { file: '7-2c.html', title: 'Multi-Tool Orchestration: Parallel vs Serial', desc: 'isConcurrencySafe determines whether tools can run in parallel; scheduling strategy visualization', tag: 'Deep Dive' },
            { file: '7-2d.html', title: 'MCP Protocol: The USB Port for Tools', desc: 'Comparing stdio / SSE / Streamable HTTP transport methods; data-flow animation', tag: 'Deep Dive' },
            { file: '7-3.html', title: 'ReAct in Practice: Weather Query Full Chain', desc: 'Thought / Action / Observation step-by-step demo; complete 7-step Agent chain', tag: 'Animation' },
            { file: '7-3a.html', title: 'Short-Term Memory = Context Window', desc: 'Message list visualization showing each message\'s Token usage and role label', tag: 'Deep Dive' },
            { file: '7-3b.html', title: 'Context Compression: Four Defense Lines', desc: '60% trim → 75% micro-compress → 85% fold → 95% emergency; drag the slider to watch the process', tag: 'Deep Dive' },
            { file: '7-3c.html', title: 'Long-Term Memory: Vector Retrieval', desc: 'Embedding → vector database → semantic search; design decisions for topK and minScore', tag: 'Deep Dive' },
            { file: '7-4a.html', title: 'ReAct Loop: Think → Act → Observe', desc: 'A task to remove console.log goes through 14 iterations, including self-correction', tag: 'Deep Dive' },
            { file: '7-4b.html', title: '5 Patterns of Agent Deadlock', desc: 'Parameter format errors / hallucinated tools / infinite recursion / insufficient info / API exceptions', tag: 'Deep Dive' },
            { file: '7-4c.html', title: 'Permissions & Security', desc: '5 permission modes + LLM risk levels + Human-in-the-loop design', tag: 'Deep Dive' },
            { file: '7-5.html', title: 'Skill: Helping Agents Avoid Detours', desc: 'Skill = workflow instructions + tool-calling guidance; a "laundry on the balcony" analogy for good loops vs bad loops', tag: 'Interactive' },
            { file: '7-5a.html', title: 'The Essence of Skill', desc: 'Good loop vs bad loop upgraded; how Skill changes an Agent\'s execution path', tag: 'Deep Dive' },
            { file: '7-5b.html', title: 'Dissecting a Real Skill', desc: 'Learn SKILL.md structural design from real source code', tag: 'Deep Dive' },
            { file: '7-4.html', title: 'Scaffolding: From Prototype to Product', desc: 'Simulate an Agent booking flights & hotels; full comparison with and without scaffolding; 5 key capabilities explained', tag: 'Interactive' },
            { file: '7-6a.html', title: '5 Engineering Guardrails', desc: 'Iteration cap, output truncation, timeout control, interrupt recovery, context emergency', tag: 'Deep Dive' },
            { file: '7-6b.html', title: 'Multi-Agent Collaboration', desc: 'Sub-Agent dispatch, worker threads, parallel vs serial execution strategies', tag: 'Deep Dive' },
            { file: '7-6c.html', title: 'Observability', desc: 'Event stream visualization, Token tracking, OpenTelemetry integration', tag: 'Deep Dive' },
            { file: '7-summary.html', title: 'Agent Engineering Overview', desc: 'From four capabilities to production deployment — the complete Agent knowledge map on one page', tag: 'Recap' },
          ],
        },
        {
          id: 't-vector-db',
          title: 'Vector Databases',
          routes: ['pm', 'build'],
          desc: 'From Embeddings and Milvus to RAG and Agent knowledge tools',
          lessons: [
            { file: 'vector-db-1.html', title: 'From Embeddings to Milvus', desc: 'Semantic similarity, ANN, and the responsibility boundary of a vector database', tag: 'Intro' },
            { file: 'vector-db-2.html', title: 'The Milvus Mental Model', desc: 'Collection, Schema, Entity, Index, Search, Query, and Load', tag: 'Core' },
            { file: 'vector-db-3.html', title: 'Hands-on Milvus', desc: 'Connect, create, batch insert, index, search, query, and delete', tag: 'Hands-on' },
            { file: 'vector-db-4.html', title: 'From Retrieval to RAG', desc: 'Chunking, filtering, hybrid search, RRF, reranking, and evaluation', tag: 'RAG' },
            { file: 'vector-db-5.html', title: 'Milvus as an Agent Knowledge Tool', desc: 'search_knowledge, ToolMessage, memory separation, and tests', tag: 'Agent' },
          ],
        },
        {
          id: 't-cost',
          title: 'Cost Optimization & Model Selection',
          desc: 'KV Cache, caching, image Tokens, syntax/semantic/output-layer optimization, and model selection',
          lessons: [
            { file: '8-1.html', title: 'Why Multi-Turn Conversations Get More Expensive', desc: 'Token cost accumulation visualization; drag the turn count to see exponential cost growth', tag: 'Interactive' },
            { file: '8-2.html', title: 'KV Cache: Trading Space for Time (and Money)', desc: 'Analogy-based explanation + savings calculator; drag the turn count to see savings ratio', tag: 'Interactive' },
            { file: '8-2b.html', title: 'Explicit Caching: A Practical Comparison', desc: 'cache_control syntax, cache-hit detection, pricing discounts — real savings demonstration', tag: 'Interactive' },
            { file: '8-3.html', title: 'Dynamic Timestamps: The Most Expensive System Prompt', desc: 'Bad design vs good design; three timestamp handling approaches side by side', tag: 'Anti-pattern' },
            { file: '8-4.html', title: 'Comprehensive Cost Optimization: A System-Level Approach', desc: '5-layer optimization strategy, cost breakdown visualization, system designs that save 70-90%', tag: 'System Design' },
            { file: '8-5.html', title: 'Image Tokens: Pixels Cost Money Too', desc: 'Image billing formula, scaling mechanics, resolution traps, task-based tier strategy', tag: 'Multimodal' },
            { file: '8-5b.html', title: 'Match Resolution to Task', desc: 'High / medium / low resolution tiers; Token consumption comparison and selection advice by scenario', tag: 'Multimodal' },
            { file: '8-6.html', title: 'Syntax-Layer Optimization: Prompts Written for Machines', desc: 'YAML vs JSON, CSV vs arrays, compressed JSON output — save 10-30% on formatting Tokens', tag: 'Prompt Craft' },
            { file: '8-7.html', title: 'Semantic-Layer Optimization: Don\'t Treat Context as a Dumpster', desc: 'Dynamic Few-Shot, LLMLingua-2 compression, key info at start/end — boost information density', tag: 'RAG' },
            { file: '8-8.html', title: 'Output Layer + Advanced KV Cache', desc: 'Negative constraints, diff-based polishing, stop sequences; KV Cache tool traps and sliding-window issues', tag: 'Architecture' },
            { file: 'cost-eval.html', title: 'Model Selection: Capability vs Cost', desc: 'Mainstream model capability/cost matrix, selection decision tree, model-matching strategies by scenario', tag: 'Selection' },
            { file: 'engineering-philosophy.html', title: 'Simplicity First: Stick to First Principles', desc: 'The essence of AI Harness / build vs skip trade-offs / what will be obsoleted / the ultimate question', tag: 'Finale' },
          ],
        },
        {
          id: 't-tips',
          title: 'Practical Tips',
          desc: 'Human-AI boundaries, asking better questions, iteration methods, scenario judgment, and hallucination verification — a daily guide for using AI',
          lessons: [
            { file: 'ai-tips-boundary.html', title: 'Human-AI Knowledge Boundary: A Four-Quadrant Strategy', desc: 'What to delegate to AI, what to do yourself — a quick four-quadrant task allocation framework', tag: 'Tips' },
            { file: 'ai-tips-context.html', title: 'Good Questions vs Bad Questions', desc: 'Context determines output quality; same question, good vs bad side-by-side demo', tag: 'Tips' },
            { file: 'ai-tips-verify.html', title: 'Can You Trust What AI Says? Spotting Hallucinations', desc: 'Three quick verification methods; spotting when AI confidently gets it wrong', tag: 'Tips' },
            { file: 'ai-tips-iterate.html', title: 'The Art of Iteration: Knowing When to Stop', desc: 'A rough-to-fine iteration rhythm, and when to stop prompting AI', tag: 'Tips' },
            { file: 'ai-tips-scenarios.html', title: 'Scenario Cheat Sheet: When to Trust AI', desc: 'High confidence / needs verification / use with caution / don\'t use — a four-tier AI applicability guide', tag: 'Tips' },
          ],
        },
        {
          id: 't-summary2',
          title: 'Course Wrap-Up',
          desc: 'Part 2 review + full course summary',
          lessons: [
            { file: 'summary-2.html', title: 'Recap (Part A) · Prompt Engineering + Agent', desc: 'Context overflow strategies / Prompt six elements / tool calling truth / Skill + scaffolding', tag: 'Recap' },
            { file: 'summary-2b.html', title: 'Recap (Part B) · Cost Optimization + PM Perspective', desc: 'Five-layer cost system / KV Cache principles / image Tokens / full course capability checklist', tag: 'Recap' },
            { file: 'summary-final.html', title: 'Course Summary · A PM\'s First AI Lesson', desc: 'From LLM fundamentals to engineering deployment — the full course on one page', tag: 'Recap' },
            { file: 'summary-final-1.html', title: 'Summary (Part A) · Fundamentals + Harness', desc: 'LLM cognitive framework / hallucination mitigation / Prompt and Agent essentials', tag: 'Recap' },
            { file: 'summary-final-2.html', title: 'Summary (Part B) · Practice + Cost', desc: 'Security defense / cost optimization / the right way to use AI / next learning path', tag: 'Recap' },
          ],
        },
        {
          id: 't-build2',
          title: 'What You Can Do Now',
          desc: 'After this chapter, what you can start doing today',
          lessons: [
            { file: 'build-2.html', title: 'Make Five Runs in a Row All Usable', desc: 'Same-input five-run demo; three tasks: write the first prompt, classify the instability, add examples and a ban list then rerun and compare', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-interview2',
          title: 'They Will Quiz You',
          desc: 'How interviewers, bosses, and tech colleagues will test you on this chapter',
          lessons: [
            { file: 'interview-2.html', title: 'AI Harness · 30 Tough Questions', desc: 'Each with intent, framework, and bonus points: context overflow / Prompt engineering / injection defense / tool calling / cost accounting / KV Cache / output formats', tag: 'Quiz' },
          ],
        },
      ],
    },
    {
      id: 'p3',
      num: 'Part 3',
      title: 'Practice · From Demo to Product',
      desc: 'Using a real AI Agent desktop app as a case study: image generation productization, Agent loop control, context compression, long-term memory, Prompt Harness, multi-Agent collaboration, permissions & security, and the MCP ecosystem — the full journey from "API works" to "users can use it."',
      color: '#059669',
      topics: [
        {
          id: 't-alice-intro',
          title: 'Opening',
          desc: 'Where this chapter comes from: the build log of a real product',
          lessons: [
            { file: '9-0.html', title: 'Where This Chapter Comes From: Building Alice', desc: "This chapter distills the author's experience building Alice, an AI Agent desktop app: ~500,000 lines of code, 132 tools, and 8 modules mapping one-to-one to this chapter's 8 sections", tag: 'Intro' },
          ],
        },
        {
          id: 't-imagegen',
          title: 'AI Image Generation',
          desc: 'Text-to-image, image-to-image, character consistency, multi-model fallback, and productization',
          lessons: [
            { file: '9-1.html', title: 'Text-to-Image vs Image-to-Image: Two Different Things', desc: 'One starts from text, the other from an image. PMs must know when to use which', tag: 'Concept' },
            { file: '9-2.html', title: 'Using AI to Write Prompts for AI', desc: 'User says "draw a cat at sunset," but the image model needs an entirely different description — the fix is using an LLM as translator', tag: 'Hands-on' },
            { file: '9-3.html', title: 'Character Consistency: The Hardest Product Problem', desc: 'The same IP looks different every time. Why it\'s hard and how to think about it as a PM', tag: 'Case Study' },
            { file: '9-4.html', title: 'Models Go Down — Then What?', desc: 'Multi-model fallback chain logic: priorities, allowlists, health checks, graceful degradation when all fail', tag: 'Hands-on' },
            { file: '9-5.html', title: 'Image Generation Productization Checklist', desc: 'What\'s still missing between "API works" and "users can use it" — one checklist to see it all', tag: 'System Design' },
          ],
        },
        {
          id: 't-agentloop',
          title: 'Agent Loop',
          desc: 'Production-grade loop control, safeguards, and streaming UX',
          lessons: [
            { file: '9-6.html', title: 'Textbook 3 Steps vs Real-World N Steps', desc: 'ReAct isn\'t just Think-Act-Observe three steps; what else each iteration must do in production', tag: 'Concept' },
            { file: '9-7.html', title: 'Why Agents Get Stuck', desc: 'Typical failure patterns when loops hang in real scenarios, and what users see', tag: 'Case Study' },
            { file: '9-8.html', title: 'Fool-Proofing: Making Loops Stop Themselves', desc: 'Three strategy categories — caps, detection, fallback — and where PMs should draw the line', tag: 'Hands-on' },
            { file: '9-9.html', title: 'Streaming UX: Don\'t Leave Users Waiting', desc: 'Tools run 30 seconds in the background — what should users see? Designing progress perception', tag: 'Interactive' },
            { file: '9-10.html', title: 'The Real Cost Behind One Message', desc: 'One user message may trigger 10+ loop iterations and dozens of API messages — building cost awareness', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-ctxmgmt',
          title: 'Context Management',
          desc: 'Longer conversations get more expensive and less smart: the art and trade-offs of compression',
          lessons: [
            { file: '9-11.html', title: 'Longer = More Expensive + Less Smart', desc: 'Rising cost + attention decay + limited window — three reasons context must be managed', tag: 'Concept' },
            { file: '9-12.html', title: 'Compression Is an Art of Trade-offs', desc: 'Some things can be removed, some can\'t, some cost money to compress — a PM decision framework', tag: 'Hands-on' },
            { file: '9-13.html', title: 'Can You Delete What Users Said?', desc: 'The "sacred artifact" problem: AI output can be compressed, but the user\'s original words are gone once deleted', tag: 'Concept' },
            { file: '9-14.html', title: 'Local Compression vs LLM Compression', desc: 'Zero-cost fast-but-rough vs paid slow-but-precise — when to use which', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-memory',
          title: 'Long-Term Memory',
          desc: 'Making AI know you: memory extraction, conflicts, and injection',
          lessons: [
            { file: '9-15.html', title: 'Context ≠ Memory', desc: 'The whiteboard (context window) vs the notebook (long-term memory) — why two systems are needed', tag: 'Concept' },
            { file: '9-16.html', title: 'What\'s Worth Remembering', desc: 'Not every conversation has value: the gatekeeper mindset and filtering logic', tag: 'Hands-on' },
            { file: '9-17.html', title: 'Memory Conflicts: What If Users Change Their Mind?', desc: 'Four strategies for old-vs-new memory conflicts: add / merge / flag conflict / skip', tag: 'Case Study' },
            { file: '9-18.html', title: 'The Cost of Memory Injection', desc: 'Stored 1,000 memories — inject all every time, or retrieve on demand? The cost of each approach', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-prompteng',
          title: 'Prompt Harness',
          desc: 'From strings to architecture: layering, on-demand loading, and Skill modularization',
          lessons: [
            { file: '9-19.html', title: 'System Prompt Isn\'t a Blob of Text', desc: 'Why layered management is necessary: identity, environment, and tool instructions — each independent, non-interfering', tag: 'Architecture' },
            { file: '9-20.html', title: 'Don\'t Show AI What It Doesn\'t Need', desc: '100 tools all in system? Token explosion. This calls for on-demand loading design', tag: 'Hands-on' },
            { file: '9-21.html', title: 'Skill: Operationalizable Prompt Modules', desc: 'Files as config, version-trackable — managing Prompts like code', tag: 'Hands-on' },
            { file: '9-22.html', title: 'The Subtle Relationship Between Prompts and Caching', desc: 'Change one character in System Prompt and the entire KV Cache is invalidated. Minimizing accidental cost', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-multiagent',
          title: 'Multi-Agent',
          desc: 'Parallelism, brainstorming, scheduled tasks, and collaboration cost',
          lessons: [
            { file: '9-23.html', title: 'When Do You Need Multiple Agents?', desc: 'Parallel acceleration, role separation, risk isolation — three real-world scenarios', tag: 'Concept' },
            { file: '9-24.html', title: 'The Price of Concurrency: What Can Run Simultaneously?', desc: '"Read" can be parallel, "write" must queue — why, and how to decide', tag: 'Hands-on' },
            { file: '9-25.html', title: 'Brainstorming: Making Multiple AIs Debate', desc: 'Same problem, multiple perspectives independently, then aggregate consensus and disagreement — the AI version of collective intelligence', tag: 'Interactive' },
            { file: '9-26.html', title: 'Scheduled Tasks: A Cost Trap', desc: 'Agent runs tasks on a schedule — accumulate context or rebuild? One choice, 10× cost difference', tag: 'Anti-pattern' },
          ],
        },
        {
          id: 't-security',
          title: 'Permissions & Security',
          desc: 'The Agent\'s reins: permission tiers, approvals, and observability',
          lessons: [
            { file: '9-27.html', title: 'How Much Freedom Should AI Have?', desc: 'Fully autonomous vs step-by-step approval — five permission modes and their use cases', tag: 'Concept' },
            { file: '9-28.html', title: 'Too Many Popups Annoy Users, None Is Unsafe', desc: 'The Human-in-the-loop balance point: a risk-tier approach', tag: 'Hands-on' },
            { file: '9-29.html', title: 'Do You Know What the Agent Did?', desc: 'Event streams and Token tracking. Without logs, you\'ll never know what went wrong', tag: 'Architecture' },
          ],
        },
        {
          id: 't-mcp',
          title: 'MCP in Practice',
          desc: 'The tool ecosystem\'s bidirectional connection: consuming, providing, and self-configuration',
          lessons: [
            { file: '9-30.html', title: 'MCP Isn\'t Just "Calling Tools"', desc: 'Same protocol, two directions: consuming others\' tools vs exposing your own', tag: 'Concept' },
            { file: '9-31.html', title: 'Lazy Connections: Don\'t Connect If Not Needed', desc: '10 MCP services registered — connect them all at startup, or wait until needed?', tag: 'Hands-on' },
            { file: '9-32.html', title: 'AI Adds Its Own Tools', desc: 'An Agent discovers it needs a new tool at runtime and configures MCP connections itself — the self-configuration approach', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-summary3',
          title: 'Practice Wrap-Up',
          desc: 'Full overview and core insights',
          lessons: [
            { file: '9-summary.html', title: 'Practice Overview', desc: 'Image generation, loops, memory, Prompt, multi-Agent, security, MCP — all connected in one diagram', tag: 'Recap' },
            { file: '9-final.html', title: 'Chat Wrapper vs Real Agent Product', desc: 'The same loop powers N scenarios — the difference isn\'t in code, it\'s in product decisions', tag: 'Finale' },
          ],
        },
        {
          id: 't-build3',
          title: 'What You Can Do Now',
          desc: 'After this chapter, what you can start doing today',
          lessons: [
            { file: 'build-3.html', title: 'Wire Up the First Real Tool', desc: 'A four-step demo of the tool-calling loop; three tasks: pick a tool, write a three-line description, run the loop and deliberately break it once', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-interview3',
          title: 'They Will Quiz You',
          desc: 'How interviewers, bosses, and tech colleagues will test you on this chapter',
          lessons: [
            { file: 'interview-3.html', title: 'Practice · From Demo to Product · 30 Tough Questions', desc: 'Each with intent, framework, and bonus points: demo-to-launch gap / Agent deadlock / context compression / memory design / multi-Agent / MCP / cost accounting', tag: 'Quiz' },
          ],
        },
      ],
    },
    {
      id: 'p4',
      num: 'Part 4',
      title: 'Advanced · AI Engineering Design Patterns',
      desc: 'Based on Anthropic\'s open-sourced Claude Code and engineering blog posts — deep dives into production Agent design patterns: context engineering, tool design, evaluation methodology, long-running Agents, brain-hand separation architecture, and security containerization.',
      color: '#dc2626',
      topics: [
        {
          id: 't-agent-patterns',
          title: 'Agent Design Patterns',
          desc: 'Anthropic\'s five Workflow types + autonomous Agent',
          lessons: [
            { file: '10-1.html', title: 'Workflow vs Agent: Know What You Want First', desc: 'Predefined flows vs model-driven decisions — Anthropic\'s two categories of Agent systems', tag: 'Design Pattern' },
            { file: '10-2.html', title: 'Five Workflow Patterns', desc: 'Prompt Chaining / Routing / Parallelization / Orchestrator-Workers / Evaluator-Optimizer', tag: 'Design Pattern' },
            { file: '10-3.html', title: 'From Prompt Engineering to Context Engineering', desc: 'Curating the optimal Token combination for each inference round — prompt writing is just one piece', tag: 'Methodology' },
            { file: '10-4.html', title: 'Three Context Tactics', desc: 'Compaction, structured notes, sub-Agent architecture — three context management strategies for long tasks', tag: 'Methodology' },
          ],
        },
        {
          id: 't-tool-design',
          title: 'The Art of Tool Design',
          desc: 'How to write great tools for Agents: naming, descriptions, parameters, and ACI',
          lessons: [
            { file: '10-5.html', title: 'ACI: Agent-Computer Interface', desc: 'Tools are the contract between Agents and the world. Design Agent interfaces like you design human interfaces', tag: 'Design Pattern' },
            { file: '10-6.html', title: 'Think Tool: Making AI Think Before Acting', desc: 'Give the Agent a pause-to-think space in complex tool chains — τ-bench performance up 54%', tag: 'Deep Dive' },
            { file: '10-7.html', title: 'Using Agents to Optimize Agent Tools', desc: 'Claude Code in practice: using AI to write tool descriptions, run evals, and auto-iterate', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-evals',
          title: 'Agent Evaluation',
          desc: 'No eval = flying blind. How to systematically verify Agent quality',
          lessons: [
            { file: '10-8.html', title: 'Why Evaluation Matters More Than Training', desc: 'Without evals, fixing one bug creates three. Anthropic\'s Eval methodology', tag: 'Methodology' },
            { file: '10-9.html', title: 'Three Graders: Code, Model, Human', desc: 'Static assertions vs LLM-as-Judge vs human calibration — which fits which scenario', tag: 'Hands-on' },
            { file: '10-10.html', title: 'Eval Pitfalls: Noise, Cheating & Regression', desc: 'Infra noise causes 6pp errors, models recognize tests, Prompt changes may drop Eval by 3%', tag: 'Case Study' },
          ],
        },
        {
          id: 't-long-running',
          title: 'Long-Running Agents',
          desc: 'From single-turn chat to hours-long runs: Harness design and evolution',
          lessons: [
            { file: '10-11.html', title: 'Why Agents Can\'t Handle Long Tasks', desc: 'Trying to do too much at once, or quitting after one round — two classic failure modes', tag: 'Case Study' },
            { file: '10-12.html', title: 'Initializer + Coding Agent', desc: 'The initializer sets up the environment, the coding Agent progresses incrementally — a dual-role Harness design', tag: 'Design Pattern' },
            { file: '10-13.html', title: 'Managed Agent: Brain-Hand Separation', desc: 'Split thinking and execution into different processes — virtualizing Agents like an operating system', tag: 'Architecture' },
            { file: '10-14.html', title: 'Session ≠ Context Window', desc: 'Session logs are persistent event streams; the context window is temporary working memory — they must be separated', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-security-advanced',
          title: 'Security & Containerization',
          desc: 'How Anthropic constrains Claude in production',
          lessons: [
            { file: '10-15.html', title: 'Three Risk Categories: Abuse, Misbehavior, External Attack', desc: 'Anthropic\'s safety taxonomy: user abuse / model misbehavior / Prompt Injection', tag: 'Security' },
            { file: '10-16.html', title: 'Sandbox & Credential Isolation', desc: 'Generated code and secrets never share the same container. Structural security beats prompt-based security', tag: 'Security' },
          ],
        },
        {
          id: 't-summary4',
          title: 'Advanced Wrap-Up',
          desc: 'Full overview and core design principles',
          lessons: [
            { file: '10-17.html', title: 'Contextual Retrieval: Better RAG', desc: 'Adding context to chunks before retrieval — Anthropic\'s upgraded RAG approach', tag: 'Deep Dive' },
            { file: '10-summary.html', title: 'Advanced Overview', desc: 'Design patterns, tools, evaluation, long-running, security — all connected in one diagram', tag: 'Recap' },
            { file: '10-final.html', title: 'Do the Simplest Thing That Works', desc: 'Anthropic\'s core engineering philosophy: "Do the simplest thing that works"', tag: 'Finale' },
          ],
        },
        {
          id: 't-build4',
          title: 'What You Can Do Now',
          desc: 'After this chapter, what you can start doing today',
          lessons: [
            { file: 'build-4.html', title: 'Build Your First Eval Set', desc: 'Before/after score demo; three tasks: collect ten real cases, write pass criteria and run a baseline, let the numbers talk', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-interview4',
          title: 'They Will Quiz You',
          desc: 'How interviewers, bosses, and tech colleagues will test you on this chapter',
          lessons: [
            { file: 'interview-4.html', title: 'AI Engineering Design Patterns · 30 Tough Questions', desc: 'Each with intent, framework, and bonus points: context engineering / long tasks / grep vs RAG / ACI tool design / eval infrastructure / LLM-as-Judge / sandbox isolation', tag: 'Quiz' },
          ],
        },
      ],
    },
    {
      id: 'p5',
      num: 'Part 5',
      title: 'Harness & Self-Improvement',
      desc: 'From Harness design patterns to recursive self-improvement: when Agents start optimizing their own scaffolding, AI engineering enters a new era. Based on Lilian Weng\'s 2026 frontier survey.',
      color: '#7c3aed',
      topics: [
        {
          id: 't-harness-intro',
          title: 'Harness Overview',
          desc: 'Recursive self-improvement and the centrality of Harness',
          lessons: [
            { file: '11-1.html', title: 'From Scaffolding to Self-Improving Systems', desc: 'History and recent paths of Recursive Self-Improvement (RSI): models improve Harness, not directly rewrite weights', tag: 'Frontier' },
            { file: '11-2.html', title: 'Three Harness Design Patterns', desc: 'Workflow automation / file-system persistent memory / sub-Agents and background tasks — three pillars of Agent runtime', tag: 'Design Pattern' },
          ],
        },
        {
          id: 't-harness-optimize',
          title: 'Harness Optimization',
          desc: 'From context engineering to automated workflow search',
          lessons: [
            { file: '11-3.html', title: 'Context Engineering: From Manual to Auto-Evolution', desc: 'ACE → MCE → Meta-Harness: the optimization target evolves from prompt content to management mechanism code', tag: 'Frontier' },
            { file: '11-4.html', title: 'Workflow Design: From Manual to Auto-Search', desc: 'AI Scientist / ADAS / AFlow — using MCTS and Meta-Agents to search for optimal workflows', tag: 'Frontier' },
          ],
        },
        {
          id: 't-harness-self',
          title: 'Self-Improvement & Evolution',
          desc: 'Letting Harness improve itself and using evolutionary algorithms to search the design space',
          lessons: [
            { file: '11-5.html', title: 'Letting Harness Improve Itself', desc: 'STOP recursive improver + Self-Harness propose-evaluate-accept loop', tag: 'Frontier' },
            { file: '11-6.html', title: 'Evolutionary Search: Survival of the Fittest Harness', desc: 'AlphaEvolve / DGM / SIA — using evolutionary algorithms to discover optimal Agents in vast design spaces', tag: 'Frontier' },
          ],
        },
        {
          id: 't-harness-future',
          title: 'Future & Reflections',
          desc: 'Fundamental challenges facing self-improvement',
          lessons: [
            { file: '11-7.html', title: 'Future Challenges: Seven Barriers to Self-Improvement', desc: 'Weak evaluators / memory decay / reward hacking / diversity collapse / the human role — bottlenecks on the road to full RSI', tag: 'Frontier' },
          ],
        },
        {
          id: 't-build5',
          title: 'What You Can Do Now',
          desc: 'After this chapter, what you can start doing today',
          lessons: [
            { file: 'build-5.html', title: 'Three Endurance Rules', desc: 'A context-usage curve and compression-threshold demo; three tasks: find the forgetting turn, write three rules, run a write-to-disk-then-read-back loop', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-interview5',
          title: 'They Will Quiz You',
          desc: 'How interviewers, bosses, and tech colleagues will test you on this chapter',
          lessons: [
            { file: 'interview-5.html', title: 'Harness & Self-Improvement · 30 Tough Questions', desc: 'Each with intent, framework, and bonus points: Harness essence / design patterns / context auto-evolution / reward hacking / RSI progress and risks', tag: 'Quiz' },
          ],
        },
      ],
    },
    {
      id: 'p6',
      num: 'Part 6',
      title: 'Dissecting Grok Build: A Production Coding Agent in Rust',
      desc: 'Based on xAI\'s open-sourced Grok Build Rust codebase — examining the runtime, tools, memory, security, and extensibility design across 79 Workspace members.',
      color: '#f59e0b',
      topics: [
        {
          id: 't-grok-map',
          title: 'System Map',
          desc: 'Layered architecture of 79 Workspace members and the Rust technology choice',
          lessons: [
            { file: '12-1.html', title: 'How 79 Workspace Members Form a Product', desc: 'Reconstructing the real Cargo Workspace layers by entry point, Agent runtime, tools, and infrastructure', tag: 'Architecture' },
            { file: '12-2.html', title: 'Rust Technology Choice: Facts vs Inferences', desc: 'Starting from source-verifiable facts: analyzing engineering trade-offs from the type system, concurrency safety, and distribution', tag: 'Concept' },
            { file: '12-3.html', title: 'From the Real main() to the First Sampling', desc: 'Tracing the full call chain: entry point, session creation, prompt rendering, model sampling, and streaming response', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-grok-core',
          title: 'Agent Core Loop',
          desc: 'Session Actor, Compaction, and System Prompt',
          lessons: [
            { file: '12-4.html', title: 'Session Actor: Threads, State & Cancellation', desc: 'Analyzing session state ownership, message routing, background tasks, and the CancellationToken interrupt path', tag: 'Deep Dive' },
            { file: '12-5.html', title: 'Compaction: 85% Threshold & Optional Two-Pass', desc: 'Verifying auto-compression thresholds, memory flush, two-pass, and timeout budget from real config', tag: 'Interactive' },
            { file: '12-6.html', title: 'PromptContext: Inspectable Rendering Input', desc: 'Deconstructing serializable context, TemplateOverride, and the TemplateRenderer rendering boundary', tag: 'Concept' },
          ],
        },
        {
          id: 't-grok-tools',
          title: 'Tool System',
          desc: 'Registry, taxonomy, and built-in tool sets',
          lessons: [
            { file: '12-7.html', title: 'Process-Level External Toolset Preset Registry', desc: 'Understanding build functions, Public vs Internal visibility, and how late registration affects downstream resolution', tag: 'Architecture' },
            { file: '12-8.html', title: 'ToolKind Provides Default Read-Only Semantics', desc: 'Tracing read-only defaults and capability filtering boundaries from the enum and is_read_only()', tag: 'Design Pattern' },
            { file: '12-9.html', title: 'Implementation Families, Registry & Dynamic MCP', desc: 'Distinguishing built-in tool implementations, the static registry, and runtime-discovered MCP tools', tag: 'Deep Dive' },
            { file: '12-10.html', title: 'Canonical Input Is a Stable Projection', desc: 'Using CanonicalToolMeta and input projection to explain stable contracts across tool implementations', tag: 'Case Study' },
          ],
        },
        {
          id: 't-grok-memory',
          title: 'Context & Memory',
          desc: 'Token estimation, hybrid retrieval, and the Dream mechanism',
          lessons: [
            { file: '12-11.html', title: 'Estimation, Percentages & Strict Thresholds', desc: 'Distinguishing Token estimation, usage-rate calculation, and the strict comparison semantics of exceeds_threshold', tag: 'Interactive' },
            { file: '12-12.html', title: 'From File Changes to Hybrid Ranking', desc: 'Tracing the memory recall pipeline: FTS, vector retrieval, time decay, and MMR re-ranking', tag: 'Deep Dive' },
            { file: '12-13.html', title: 'Dream: The Real Mechanism', desc: 'Verifying idle gating, DreamLock, background tidying, and the actual boundaries of memory write-back', tag: 'Frontier' },
          ],
        },
        {
          id: 't-grok-subagent',
          title: 'Sub-Agent & Multi-Agent',
          desc: 'Agent Definition + Persona overlay: a two-layer system',
          lessons: [
            { file: '12-14.html', title: 'How AgentDefinition & Persona Merge', desc: 'Deconstructing Agent definitions, Persona overrides, and the merge order of final session behavior', tag: 'Design Pattern' },
            { file: '12-15.html', title: 'Four Isolation Dimensions of Sub-Agents', desc: 'Analyzing isolation boundaries across context source, recovery mode, worktree, and task state', tag: 'Deep Dive' },
            { file: '12-16.html', title: 'Multi-Agent Organization Patterns', desc: 'Comparing Agents, Personas, coordinators, and parallel tasks based on public evidence', tag: 'Case Study' },
          ],
        },
        {
          id: 't-grok-security',
          title: 'Permissions, Sandbox & Security',
          desc: 'Kernel-level sandboxing, permission evolution, and Hooks interception',
          lessons: [
            { file: '12-17.html', title: 'Five Sandbox Profiles', desc: 'Comparing workspace, devbox, read-only, strict, off, and custom Profile boundaries', tag: 'Security' },
            { file: '12-18.html', title: 'From Tool Request to Restricted Execution', desc: 'Tracing the full authorization chain through ToolKind, permission decisions, and platform sandboxing', tag: 'Security' },
            { file: '12-19.html', title: 'Hooks: Only Explicit Deny Blocks', desc: 'Verifying lifecycle events, matchers, PreToolUse blocking, and fail-open semantics on errors', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-grok-eco',
          title: 'MCP & Ecosystem',
          desc: 'MCP client, OAuth, connection recovery, and plugin trust',
          lessons: [
            { file: '12-20.html', title: 'MCP Connection, Discovery & Recovery', desc: 'Confirming the client role; deconstructing OAuth, tool naming, capability discovery, state merging, and reconnection', tag: 'Deep Dive' },
            { file: '12-21.html', title: 'Plugin Marketplace: Discovery & Trust', desc: 'Distinguishing catalog, installation, runtime discovery, enablement state, and plugin root trust', tag: 'Architecture' },
          ],
        },
        {
          id: 't-grok-beyond',
          title: 'Beyond the Source',
          desc: 'Complete comparison, lessons learned, and design inspiration',
          lessons: [
            { file: '12-22.html', title: 'Grok Build vs Claude Code: Evidence-Based Comparison', desc: 'Multi-dimensional comparison based on source code, repo docs, and public product behavior — preserving unknowns', tag: 'Recap' },
            { file: '12-23.html', title: 'Grok Build Engineering Retrospective', desc: 'Reviewing engineering strengths and limitations through types, state machines, tests, and repo policies', tag: 'Finale' },
            { file: '12-24.html', title: 'Coding Agent Design Workbench', desc: 'Producing architecture decisions, failure paths, verification methods, and course deliverables across nine system dimensions', tag: 'Finale' },
          ],
        },
        {
          id: 't-interview6',
          title: 'They Will Quiz You',
          desc: 'How interviewers, bosses, and tech colleagues will test you on this chapter',
          lessons: [
            { file: 'interview-6.html', title: 'Dissecting Grok Build · 30 Tough Questions', desc: 'Each with intent, framework, and bonus points: runtime loop / Compaction / tool permissions / memory retrieval / sandbox security / MCP integration', tag: 'Quiz' },
          ],
        },
      ],
    },
    {
      id: 'p7',
      num: 'Part 7',
      title: 'Vibe Coding Methodology',
      desc: 'Based on the author\'s open-source xs_vibe_rules repo — distilling AI collaboration best practices from real projects into a course: flow control, quality baselines, documentation, safety gates, and writing style — making AI code fast and stable.',
      color: '#0d9488',
      topics: [
        {
          id: 't-vibe-why',
          title: 'Philosophy & Intro',
          desc: 'Why AI coding fast actually backfires easily, and why Rules are the most stable constraint method',
          lessons: [
            { file: 'vibe-1.html', title: 'Why AI Needs Rules', desc: 'Four types of Vibe Coding accidents, and why Rules are the most stable context injection method', tag: 'Interactive' },
          ],
        },
        {
          id: 't-vibe-flow',
          title: 'Flow Control',
          desc: 'Setting human checkpoints before AI starts coding',
          lessons: [
            { file: 'vibe-2.html', title: 'Four Steps: Restate, PRD, Confirm, Code', desc: 'Bringing requirements confirmation into human-AI collaboration; batch changes need a plan first, new features need a duplicate check first', tag: 'Interactive' },
            { file: 'vibe-3.html', title: 'PlayGround: A Fitting Room for Components', desc: 'A simplified Storybook approach: build an isolated demo, tune it, then integrate — demos only grow, never shrink', tag: 'Interactive' },
          ],
        },
        {
          id: 't-vibe-quality',
          title: 'Quality Baselines',
          desc: 'Hard requirements for comments, debugging, and complete implementation',
          lessons: [
            { file: 'vibe-3b.html', title: "Style Convergence: Don't Ship Eight CSS Kits for One Button", desc: 'Why styles proliferate, how to fold them into design tokens in batches, and which differences should stay', tag: 'Interactive' },
            { file: 'vibe-4.html', title: 'Three Comment Elements & Code Protection', desc: 'Background, design intent, key constraints — all three required; no silent deletion of code or dependencies', tag: 'Interactive' },
            { file: 'vibe-5.html', title: 'Debug Iron Rule: Log First, Fix Later', desc: 'No speculative fixes allowed; answer three questions before fixing; declare impact scope after fixing', tag: 'Interactive' },
            { file: 'vibe-6.html', title: 'No Installment Delivery Accepted', desc: 'Why AI loves to deliver "the simple version first," and why you must break this pattern', tag: 'Interactive' },
          ],
        },
        {
          id: 't-vibe-docs',
          title: 'Documentation & Persistence',
          desc: 'Making decisions survive beyond conversations and across time',
          lessons: [
            { file: 'vibe-7.html', title: 'Three Documents & Methodology Persistence', desc: 'FEATURES / CHANGELOG / RELEASE_NOTES each covers one dimension; METHODOLOGY preserves product taste', tag: 'Interactive' },
          ],
        },
        {
          id: 't-vibe-env',
          title: 'Environment & Safety',
          desc: 'Hardcode environment facts; gate destructive operations',
          lessons: [
            { file: 'vibe-8.html', title: 'Write Environment Facts into Rules', desc: 'Model config, tech-stack lock-in, data format taxonomy, and must-know traps like isComposing', tag: 'Interactive' },
            { file: 'vibe-9.html', title: 'Three Gates for Destructive Operations', desc: 'Backup the DB first; provide a rollback plan for irreversible ops; diff review before release', tag: 'Interactive' },
          ],
        },
        {
          id: 't-vibe-comm',
          title: 'Communication & Writing',
          desc: 'Fighting context drift and eliminating AI-sounding prose',
          lessons: [
            { file: 'vibe-10.html', title: 'Long-Chat Anchoring & Writing Standards', desc: 'Force a goal restatement after 10+ turns; a banned-phrases list to rid copy of AI-speak', tag: 'Interactive' },
          ],
        },
        {
          id: 't-vibe-final',
          title: 'Topic Wrap-Up',
          desc: 'Adapting these rules into your own',
          lessons: [
            { file: 'vibe-final.html', title: 'The Value of Rules: Each Solves a Real Problem', desc: 'Overview recap + usage guide + four actions to adapt rules to your own project', tag: 'Finale' },
          ],
        },
        {
          id: 't-build6',
          title: 'What You Can Do Now',
          desc: 'After this chapter, what you can start doing today',
          lessons: [
            { file: 'build-6.html', title: 'Distill Your Own Collaboration Spec', desc: 'A four-step flow comparison; three tasks: write your first Rule, walk a real requirement through the flow, export the Build Log and shape it into spec v1', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-interview7',
          title: 'They Will Quiz You',
          desc: 'How interviewers, bosses, and tech colleagues will test you on this chapter',
          lessons: [
            { file: 'interview-7.html', title: 'Vibe Coding Methodology · 30 Tough Questions', desc: 'Each with intent, framework, and bonus points: why make rules / quality ownership / code merge gate / reject installments / decision persistence / safety gates', tag: 'Quiz' },
          ],
        },
      ],
    },
    {
      id: 'p-taste',
      num: 'Special Topic',
      title: 'Taste Engineering: Getting AI to Make Things with Taste',
      desc: "Once the collaboration workflow holds, taste is the first thing that stops you. After AI knocks down the barrier to execution, anyone can make something usable in ten minutes — \"usable\" itself starts to devalue, and taste becomes the new dividing line. This chapter trains two skills: recognizing beauty, four handles (hierarchy, whitespace, restraint, consistency), each with an A/B spot-the-difference; and translating taste for AI — a taste vocabulary, prompts for generating UI and images, reference images and a reference library. Innate \"creating beauty\" can't be taught; \"seeing what's off\" and \"saying what you want\" can, if you practice.",
      color: '#db2777',
      topics: [
        {
          id: 't-taste-why',
          title: 'Taste Is the New Bottleneck',
          desc: 'Once execution is leveled, judgment starts getting expensive',
          lessons: [
            { file: 'taste-1.html', title: 'Execution Is Free. Judgment Just Got Expensive', desc: 'Once anyone can make something usable in ten minutes, "usable" starts to devalue. Vote on three interfaces by gut feel first — come back after this chapter and vote again. See if your eye changed', tag: 'Intro' },
            { file: 'taste-2.html', title: 'Where the AI Look Comes From', desc: 'Purple gradient, frosted glass, rounded cards: AI defaults to the average of its training data, and average is mediocre. Tap the AI-look tells on a typical AI-generated page; collect them all to unlock why', tag: 'Interactive' },
          ],
        },
        {
          id: 't-taste-eye',
          title: 'Four Handles for Recognizing Beauty',
          desc: 'Hierarchy, whitespace, restraint, consistency — each with a spot-the-difference',
          lessons: [
            { file: 'taste-3.html', title: 'Hierarchy: One Hero per Screen', desc: 'Emphasize everything and you emphasize nothing. How type size, weight, and color allocate attention — and A/B spot-the-difference to catch screens that steal the scene', tag: 'Interactive' },
            { file: 'taste-4.html', title: 'Whitespace & Alignment: Most Ugliness Is Spacing', desc: "When you can't name what's ugly, spacing is usually why. Drag the slider to feel breathing room, then learn the 8pt grid — a lazy genius of a tool", tag: 'Interactive' },
            { file: 'taste-5.html', title: 'Restraint: Budget Your Colors and Type', desc: 'One primary, two weights, one radius set. Dump colors onto a UI until it looks like a year-end party flyer, then one-click subtract and feel the premium feel snap back', tag: 'Interactive' },
            { file: 'taste-6.html', title: 'Consistency: Where System Feel Comes From', desc: "Good-looking sites sit on a set of design variables. Open this site's real CSS: why control height, radius, and color stay one tier sitewide — change once, everywhere updates", tag: 'Case Study' },
          ],
        },
        {
          id: 't-taste-speak',
          title: 'Translate Taste for AI',
          desc: 'Your taste vocabulary decides how good AI output gets',
          lessons: [
            { file: 'taste-7.html', title: 'A Hundred Concrete Ways to Say "Looks Good"', desc: "Information density, visual noise, breathing room, contrast hierarchy… tap a taste word for its definition and do/don't cases. Name it, and you can direct the AI", tag: 'Interactive' },
            { file: 'taste-8.html', title: 'Generating UI: From Adjectives to a Spec', desc: "“Make a nice page” vs “reference Linear's information density, one primary color only” — a whole tier apart. Compare three prompt levels and watch the gap", tag: 'Hands-on' },
            { file: 'taste-9.html', title: 'Generating Images: The Language of Composition, Light and Shadow, Color', desc: 'The aesthetic trio for image prompts: composition, light and shadow, color. Build intuition on three compare sets, then pick the right one from four candidates', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-taste-library',
          title: 'Build Your Own Reference Library',
          desc: 'Learn to look, then get AI to ship from your references',
          lessons: [
            { file: 'taste-10.html', title: 'What It Means to Really Look at Design', desc: 'Bookmarking a hundred sites is useless. Tear them down in order: hierarchy, then spacing, then colors. Use this flow to dissect a good design live', tag: 'Method' },
            { file: 'taste-11.html', title: 'Feeding References to AI', desc: 'Describing style by mouth alone is inefficient. When to use reference images, style descriptions, or design variables — plus templates — so AI ships from your reference library', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-taste-final',
          title: 'Series Finale',
          desc: 'Before you sign off, run through the list',
          lessons: [
            { file: 'taste-final.html', title: 'Acceptance Checklist: Run Through This Before You Sign Off', desc: 'For AI-delivered UI and images, walk the list item by item: hierarchy, spacing, restraint, consistency, detail. Interactive checklist you can tick, plus further reading', tag: 'Finale' },
          ],
        },
      ],
    },
    {
      id: 'p-ixd',
      num: 'Special Topic',
      title: 'Interaction Engineering: Getting AI to Make Usable Things',
      desc: "Looks you can judge at a glance; usability you only know by using it — so interaction bugs hide deeper than taste bugs. AI's default interaction ships at the \"it runs\" level: blank empty states, errors that pop an alert, Delete with no confirm, five-step wizards that skip no step. This chapter continues from Taste Engineering: first learn to spot (the three states, error prevention and reversibility, flow restraint, conventions), then tighten interface details (which control to pick, how the copy should read), and finally translate interaction requirements for AI (goal-oriented requirements; put the state machine and boundaries in the prompt). Source material is drawn from the classic interaction-design textbook About Face 4.",
      color: '#2563eb',
      topics: [
        {
          id: 't-ixd-why',
          title: 'Usability Is Also the Bottleneck',
          desc: '"It runs" and "usable" are a whole chapter apart',
          lessons: [
            { file: 'ixd-1.html', title: 'It Runs. Now What?', desc: "Flip the \"considerate software\" trait list and you get AI's default interaction flaw list. Click five inconsiderate spots in an app that runs fine, and see what you've been quietly putting up with", tag: 'Intro' },
          ],
        },
        {
          id: 't-ixd-spot',
          title: 'Four Handles for Spotting Good Interaction',
          desc: 'States, error prevention, flow, conventions',
          lessons: [
            { file: 'ixd-2.html', title: 'The Three States: Loading, Empty, Error', desc: 'The three abnormal moments in a UI are exactly where experience splits. Empty states should teach the next step; loading should report progress; errors should speak plain language and offer a way out. Pick winners in three A/B duels yourself', tag: 'Interactive' },
            { file: 'ixd-3.html', title: "Error Prevention & Reversibility: So Users Aren't Afraid to Click", desc: 'Stop errors before they happen rather than report them after; undo makes exploration safe; confirm dialogs are the weakest error prevention. Redesign three dangerous buttons yourself', tag: 'Interactive' },
            { file: 'ixd-4.html', title: 'Flow Restraint: Every Extra Step Drops Another Batch', desc: "Actions that don't directly serve the goal are excise. Trim a five-step signup to two, step by step, and watch who stays in the funnel", tag: 'Interactive' },
            { file: 'ixd-5.html', title: "Conventions: Don't Let AI Invent New Interactions", desc: "Users operate software through conventions — learn once, use everywhere. Spot which control is faking innovation, and which thing that looks like a button isn't one", tag: 'Interactive' },
          ],
        },
        {
          id: 't-ixd-detail',
          title: 'Interface Details',
          desc: 'Which control to pick, how the copy should read',
          lessons: [
            { file: 'ixd-6.html', title: 'Did You Pick the Right Control: Radio, Checkbox, Toggle & Dropdown', desc: 'Mutually exclusive pick-one uses a radio button; multi-select uses checkboxes; instant effect uses a toggle; dropdown only when options overflow one screen. Six match-up scenes plus a cheat sheet you paste into prompts', tag: 'Interactive' },
            { file: 'ixd-7.html', title: 'The UI Speaks: How Users Read Your Copy', desc: "\"Delete these 3\" is more honest than \"OK.\" Button verbs must name the consequence; labels use the user's words; don't serve database field names to users. Rewrite five lazy buttons by hand", tag: 'Interactive' },
          ],
        },
        {
          id: 't-ixd-translate',
          title: 'Translating Interaction for AI',
          desc: 'Goal-oriented plus a state machine — then AI knows what you want',
          lessons: [
            { file: 'ixd-8.html', title: 'Goal-Oriented: Describe Requirements by Goals, Not Feature Lists', desc: 'Telling AI "Xiaomei needs to file expenses in three minutes" beats "need upload, form, buttons" by a mile. Duel two prompts, then practice rewriting a feature list into a scenario', tag: 'Hands-on' },
            { file: 'ixd-9.html', title: 'Put the State Machine and Boundaries in the Prompt', desc: 'For every screen, list every state, nail the edge cases, and write error-prevention requirements. State-machine completer + edge-case wheel, with a copy-ready acceptance phrasing template', tag: 'Hands-on' },
          ],
        },
        {
          id: 't-ixd-final',
          title: 'Series Finale',
          desc: 'The second list before launch',
          lessons: [
            { file: 'ixd-final.html', title: 'Interaction Acceptance Checklist: The Second List Before Launch', desc: 'Are the states complete? Are dangerous actions reversible? Can the flow still be cut? Did you pick the right controls? Is the copy in plain language? A checkable interactive list — paired with the Taste and Psychology lists as one set', tag: 'Finale' },
          ],
        },
      ],
    },
    {
      id: 'p-oss',
      num: 'Special Topic',
      title: 'Open Source, Distillation, and Local Deployment',
      desc: 'The news announces another open-source model every week, but what exactly is being opened? This chapter starts from the weights, teaches you to read a license yourself, and works out the business calculation behind each vendor\'s open-source strategy. Then it turns to how models get smaller: emergence, distillation, and the homogenization that distillation costs you. Finally, hands-on: work out how large a model your own computer can run, and get it running with Ollama or LM Studio.',
      color: '#4f46e5',
      topics: [
        {
          id: 't-oss-what',
          title: 'What Open Source Actually Opens',
          desc: 'Weights, licenses, and each vendor\'s business calculation',
          lessons: [
            { file: 'oss-1.html', title: 'What Are Weights? Everything a Model Knows How to Do', desc: 'The file that months of training finally condenses into: what it looks like, how big it is, and why holding the weights means holding control', tag: 'Concept' },
            { file: 'oss-2.html', title: 'Real vs. Fake Open Source: How to Read a License', desc: 'Three questions that locate how open a model is; the same yardstick applied to Qwen, Mistral, DeepSeek, Llama, and API-only models', tag: 'Selection' },
            { file: 'oss-3.html', title: 'Open Source Is a Business: What Each Vendor Is After', desc: 'Six vendors\' open-source strategies and paths to revenue; why the number of derivative models says more than download counts', tag: 'Case Study' },
          ],
        },
        {
          id: 't-oss-small',
          title: 'How Large Models Get Smaller',
          desc: 'Emergence, distillation, and the price you have to pay',
          lessons: [
            { file: 'oss-4.html', title: 'Emergence: Why Capabilities Appear Suddenly', desc: 'Capabilities jump in steps once a model crosses a scale threshold — plus the academic dispute this phenomenon is still under', tag: 'Concept' },
            { file: 'oss-5.html', title: 'Why Make Models Smaller', desc: 'Three practical motives — cost, speed, on-premise deployment — and the things small models cannot do', tag: 'Methodology' },
            { file: 'oss-6.html', title: 'How Distillation Works: From Teacher to Student', desc: 'The five-step pipeline, soft labels, and temperature; using the six distilled models DeepSeek open-sourced alongside R1 as the sample', tag: 'Case Study' },
            { file: 'oss-7.html', title: 'The Cost of Distillation: Models Are Getting More Alike', desc: 'Verbal tics, formatting quirks, and identity confusion inherited wholesale; why multi-model cross-validation may be fake', tag: 'Deep Dive' },
          ],
        },
        {
          id: 't-oss-local',
          title: 'Running It on Your Own Machine',
          desc: 'Do the math, then install it',
          lessons: [
            { file: 'oss-8.html', title: 'How Large a Model Can Your Computer Run', desc: 'Pick a GPU or Mac model for a real-time answer; the VRAM formula, quantization levels, and the MoE mismatch between memory and speed', tag: 'Interactive' },
            { file: 'oss-9.html', title: 'Getting Started with Ollama and LM Studio', desc: 'The full set of commands from install to running, how to read model tags, how to choose a quantization level, and the three most common traps', tag: 'Hands-on' },
          ],
        },
      ],
    },
    {
      id: 'p-exam',
      num: 'Test Center',
      title: 'Seven Chapter Tests · 350 Questions',
      desc: 'Each chapter comes with a 50-question exam based on its content. Mock exams randomly draw 25 questions with shuffled options — take it twice and it won\'t repeat; sequential mode grades each question instantly with explanations. After all seven chapters, a cross-chapter comprehensive exam draws 35 questions evenly. Incorrect topics are logged to your profile as weak points with direct lesson links.',
      color: '#7c3aed',
      exam: true,
      topics: [
        {
          id: 't-exam-entry',
          title: 'How to Use These Seven Exams',
          desc: 'Differences between the two modes and usage tips',
          lessons: [
            { file: 'exam.html', title: 'Test Center · Seven Chapter Tests', desc: 'Mock exam vs sequential mode differences, topic coverage of all seven exams, how scores and weak points are tracked', tag: 'Interactive' },
          ],
        },
        {
          id: 't-exam-base',
          title: 'Fundamentals & Harness',
          desc: 'Tests for Part 1 and Part 2',
          lessons: [
            { file: 'exam-1.html', title: 'LLM Fundamentals · Chapter Test', desc: '50 questions: three training stages / Token & tokenization / frozen parameters / Temperature / four hallucination types / RAG and four mitigation strategies', tag: 'Interactive' },
            { file: 'exam-2.html', title: 'AI Harness · Chapter Test', desc: '50 questions: context overflow / Prompt engineering / injection attack & defense / tool calling & MCP / KV Cache & cost optimization', tag: 'Interactive' },
          ],
        },
        {
          id: 't-exam-build',
          title: 'Practice & Design Patterns',
          desc: 'Tests for Part 3 and Part 4',
          lessons: [
            { file: 'exam-3.html', title: 'Practice · From Demo to Product · Chapter Test', desc: '50 questions: image gen productization / Agent deadlock & fool-proofing / context compression / long-term memory / multi-Agent / MCP ecosystem', tag: 'Interactive' },
            { file: 'exam-4.html', title: 'AI Engineering Design Patterns · Chapter Test', desc: '50 questions: Workflow vs Agent / three context tactics / ACI tool design / evaluation & Graders / sandbox isolation', tag: 'Interactive' },
          ],
        },
        {
          id: 't-exam-deep',
          title: 'Frontier, Source & Methodology',
          desc: 'Tests for Part 5, Part 6, and Part 7',
          lessons: [
            { file: 'exam-5.html', title: 'Harness & Self-Improvement · Chapter Test', desc: '50 questions: three Harness patterns / context auto-evolution / workflow search / recursive self-improvement and seven barriers', tag: 'Interactive' },
            { file: 'exam-6.html', title: 'Dissecting Grok Build · Chapter Test', desc: '50 questions: runtime loop / Compaction / tool approval / dual-path memory retrieval / five sandboxes / MCP integration', tag: 'Interactive' },
            { file: 'exam-7.html', title: 'Vibe Coding Methodology · Chapter Test', desc: '50 questions: flow control & human checkpoints / quality baselines / reject installments / documentation persistence / three gates for destructive ops', tag: 'Interactive' },
          ],
        },
        {
          id: 't-exam-all',
          title: 'After the Full Course',
          desc: 'Cross-chapter comprehensive exam',
          lessons: [
            { file: 'exam-all.html', title: 'Comprehensive Exam · 35 from 7 Chapters', desc: '5 questions evenly drawn per chapter from 350 total — targeting cross-chapter confusions: compression vs memory / Workflow vs Agent selection / Harness vs prompt engineering', tag: 'Interactive' },
          ],
        },
      ],
    },
    {
      id: 'p-seo',
      num: 'Bonus',
      title: 'Get Found: SEO & GEO',
      desc: "Your product is built and the rights are locked down \u2014 the next question is whether anyone can find it. This chapter covers two things: the SEO minimum viable checklist (crawlable, readable, indexable), and GEO, the new battleground (getting ChatGPT, Perplexity, Kimi, and Doubao to cite you when they answer a question). The whole chapter uses one of Xiaoshan Academy's own real overhauls as the case study \u2014 no black hat, no ranking promises, just checklists you can verify yourself. The first two lessons are open without login; the rest require signing in.",
      color: '#4338ca',
      bonus: true,
      topics: [
        {
          id: 't-seo-why',
          title: 'First, Get Clear on Being Found',
          desc: 'Shipping it is not the same as anyone showing up',
          lessons: [
            { file: 'seo-1.html', title: "You Built It. Why Isn't Anyone Coming?", desc: 'Three traffic doors, each with its own temperament: search engines where users look, AI engines where users ask, and social where other people speak for you. Play through the indexing funnel first and find the layer your product is stuck on', tag: 'Intro' },
          ],
        },
        {
          id: 't-seo-field',
          title: 'Two Battlegrounds',
          desc: 'Search engines hand out links; AI engines hand out answers',
          lessons: [
            { file: 'seo-2.html', title: 'The SEO Minimum Viable Checklist: Crawlable, Readable, Indexable', desc: 'Only the parts that pay off the moment you do them: one topic per page, a title written the way a person talks, body text that does not depend on JS to render, plus sitemap and webmaster-tool submission. Flip the crawl simulator between two states to see what the crawler actually receives', tag: 'Hands-on' },
            { file: 'seo-3.html', title: 'GEO: Get AI Engines to Cite You', desc: 'Users no longer only search \u2014 they ask. Self-contained paragraphs, FAQ structured data, llms.txt, and freshness signals: four levers, each with a toy you can play with on the spot, plus a roster of the AI crawlers worth knowing', tag: 'Interactive' },
          ],
        },
        {
          id: 't-seo-case',
          title: 'Dissecting a Real Case',
          desc: "Using this site's own overhaul log as the dissection table",
          lessons: [
            { file: 'seo-4.html', title: 'Dissecting This Site: Google Indexes 693 Pages, Bing Only 50', desc: "Xiaoshan Academy's real August 2026 audit, replayed: the sitemap dropped every English and Korean page, the Q&A pages threw away their FAQ citations, and the logs discarded every crawler. For each gap \u2014 how it surfaced, what changed, and what to check it against", tag: 'Case Study' },
          ],
        },
        {
          id: 't-seo-final',
          title: 'Priorities and Wrap-up',
          desc: 'A solo builder has no SEO team, only the ability to put things in order',
          lessons: [
            { file: 'seo-5.html', title: 'Solo Priorities: Write Questions People Actually Search', desc: 'Write the question a user would really type before piling on features, and trade real experience for credibility. The do-not list lives here too: buying backlinks, keyword stuffing, and mass-generated AI filler pages \u2014 which of them will get you killed', tag: 'Hands-on' },
            { file: 'seo-final.html', title: 'Getting-Found Launch Checklist: One Last Pass Before You Ship', desc: 'Twelve items you can tick off: one topic per page, body text visible server-side, sitemap, one-sentence answer block, FAQ structured data, llms.txt. Plus four ways to measure whether any of it actually worked', tag: 'Finale' },
          ],
        },
      ],
    },
    {
      id: 'p8',
      num: 'Bonus',
      title: "Lei Jun's Startup Lessons",
      desc: "This isn't an AI course — it's a dessert after the main course: compiled from Lei Jun's oral startup lectures, covering products, word-of-mouth, fundraising, valuation, equity, and cash flow. For those looking to build a one-person company (OPC) with AI, this fills in the \"how to run a business\" methodology. The entire chapter is free and open without login.",
      color: '#f97316',
      bonus: true,
      topics: [
        {
          id: 't-lei-mind',
          title: "The Entrepreneur's Mindset",
          desc: 'Determination, courage, and the mental preparation of facing mortality',
          lessons: [
            { file: 'lei-1.html', title: 'Who Should Start a Business: Inexplicable Confidence', desc: "Starting a business isn't for sane people: the courage to face hardship, the ability to paint a vision, and the belief that fought Microsoft for 16 years at Kingsoft", tag: 'Intro' },
            { file: 'lei-2.html', title: 'Mental Prep: Plan Your Failure from Day One', desc: '90% of startups die; stay quiet, fail fast, give yourself only four years. Paranoia is your best protection', tag: 'Interactive' },
          ],
        },
        {
          id: 't-lei-dir',
          title: 'Direction & Starting Point',
          desc: 'What you love, what you can do, and a big enough market',
          lessons: [
            { file: 'lei-3.html', title: 'Picking a Direction: Go Big Market', desc: 'Passion is the primary driver, but the ceiling is set by the market: lessons from Duba vs Ciba, and Duowan vs YY', tag: 'Interactive' },
            { file: 'lei-4.html', title: 'Naming: Win at the Starting Line', desc: 'Has a trademark, has a domain, sounds good, easy to remember; the full naming journey from rice to Xiaomi', tag: 'Interactive' },
          ],
        },
        {
          id: 't-lei-product',
          title: 'Product & Word-of-Mouth',
          desc: 'Focus, perfection, reputation, speed',
          lessons: [
            { file: 'lei-5.html', title: 'Seven-Word Internet Mantra', desc: 'The confidence to release just one phone per year, the obsession that drives you crazy, and the speed to counter a price war overnight', tag: 'Interactive' },
            { file: 'lei-6.html', title: 'Word-of-Mouth Means Exceeding Expectations', desc: "Why the luxurious Burj Al Arab loses to Haidilao: expectation management, and how genuine care is something users can feel", tag: 'Interactive' },
          ],
        },
        {
          id: 't-lei-money',
          title: 'Fundraising',
          desc: 'Credibility is the entire foundation of fundraising',
          lessons: [
            { file: 'lei-7.html', title: 'First Money: Start with People You Know', desc: "Angel investing is essentially personal credibility; a business plan doesn't matter as much as explaining your business in one sentence", tag: 'Interactive' },
            { file: 'lei-8.html', title: 'Fundraising Timing: You Need Money to Raise Money', desc: 'Start fundraising when half your cash is spent; let investors find you; why VCs need 10× returns', tag: 'Interactive' },
            { file: 'lei-9.html', title: 'The Art of Valuation: Fundraising Sells Confidence', desc: 'First ask people who won\'t invest for a price; move up from the midpoint; three side-effects of over-valuation', tag: 'Interactive' },
          ],
        },
        {
          id: 't-lei-equity',
          title: 'Equity & Co-Founders',
          desc: "Starting a business is a puzzle of sharing 100% of a dream",
          lessons: [
            { file: 'lei-10.html', title: 'Equity Is a Puzzle: Never Split Evenly', desc: 'The danger of 50/50; the dead-end of three-way 1/3; neither extreme works — the team needs one authority figure', tag: 'Interactive' },
            { file: 'lei-11.html', title: 'Co-Founders: Share the Dream First, Then the Shares', desc: 'Four-year vesting lock, exit terms discussed upfront; one-third probability of replacing a co-founder', tag: 'Interactive' },
          ],
        },
        {
          id: 't-lei-ops',
          title: 'Business Fundamentals',
          desc: 'Cash flow and people are the lifeblood of a company',
          lessons: [
            { file: 'lei-12.html', title: 'Cash Flow & Compensation Packages', desc: "How many months can you survive without revenue? A salary-vs-equity self-select package system that eliminates internal comparison", tag: 'Interactive' },
          ],
        },
        {
          id: 't-lei-final',
          title: 'Topic Wrap-Up',
          desc: "Turning Lei Jun's lessons into an OPC action plan",
          lessons: [
            { file: 'lei-final.html', title: 'A Letter to the AI-Era One-Person Company', desc: 'Full recap of 22 oral lectures, mapped to an OPC startup self-check: direction, reputation, cash, equity', tag: 'Finale' },
            { file: 'lei-test.html', title: 'Test Your AI Startup Success Rate', desc: '12 questions covering the entire chapter — calculate your success rate, six-dimension radar profile, and remedial prescription', tag: 'Interactive' },
          ],
        },
      ],
    },
  ],
};

/* ── Tag styling ── */
window.TAG_STYLE = {
  'Interactive':   { bg: '#dcfce7', fg: '#15803d' },
  'Animation':     { bg: '#dcfce7', fg: '#166534' },
  'Concept':       { bg: '#fef9c3', fg: '#a16207' },
  'Case Study':    { bg: '#fef2f2', fg: '#dc2626' },
  'Intro':         { bg: '#fef2f2', fg: '#dc2626' },
  'Security':      { bg: '#fef2f2', fg: '#dc2626' },
  'Anti-pattern':  { bg: '#fef2f2', fg: '#dc2626' },
  'Hands-on':      { bg: '#dbeafe', fg: '#1d4ed8' },
  'PM Advanced':   { bg: '#dbeafe', fg: '#1d4ed8' },
  'System Design': { bg: '#dbeafe', fg: '#1d4ed8' },
  'Deep Dive':     { bg: '#ffedd5', fg: '#ea580c' },
  'Multimodal':    { bg: '#fef3c7', fg: '#92400e' },
  'Selection':     { bg: '#fef3c7', fg: '#d97706' },
  'Prompt Craft':  { bg: '#e0f2fe', fg: '#0369a1' },
  'RAG':           { bg: '#f3e8ff', fg: '#7e22ce' },
  'Architecture':  { bg: '#dcfce7', fg: '#166534' },
  'Recap':         { bg: '#ede9fe', fg: '#6d28d9' },
  'Finale':        { bg: '#fef9c3', fg: '#a16207' },
  'Tips':          { bg: '#ecfdf5', fg: '#065f46' },
  'Design Pattern':{ bg: '#fef2f2', fg: '#dc2626' },
  'Methodology':   { bg: '#fff7ed', fg: '#c2410c' },
  'Standards':     { bg: '#ccfbf1', fg: '#0f766e' },
  'Frontier':      { bg: '#f3e8ff', fg: '#7c3aed' },
  'Quiz':          { bg: '#fee2e2', fg: '#b91c1c' },
};

/* ── Utility: flatten all lessons for prev/next navigation ── */
window.COURSE_FLAT = (function () {
  var flat = [];
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
