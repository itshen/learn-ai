/**
 * 과정 구조화 데이터 — 포털 홈페이지 (home.html) 및 Wiki 학습 페이지 (learn.html)의 통합 데이터 소스 (한국어 버전).
 */
window.COURSE = {
  meta: {
    title: 'AI 입문부터 마스터까지',
    subtitle: '대규모 언어 모델 기초 원리부터 AI Agent Harness까지',
    brand: '샤오산 아카데미',
    author: '뤄샤오산(洛小山)',
    authorUrl: 'https://luoxiaoshan.cn/',
    github: 'https://github.com/itshen/learn-ai',
  },
  parts: [
    /* 시작 챕터: 과정의 첫 정거장 — 먼저 자신의 위치를 파악하고 학습법을 다룹니다.
       0부 앞에 위치하므로 신규 방문자는 기본적으로 여기에 도착합니다(learn.html이
       FLAT[0]을 사용). 당장은 prologue 플래그를 재사용하여 0부와 같은 INTRO 배지로
       렌더링되며, Ask Alice 브랜치가 반영된 뒤 전용 preface 스타일로 교체합니다. */
    {
      id: 'p-start',
      num: '시작하기',
      title: '시작하기 전에',
      desc: '세 개의 오프닝 수업: 더닝-크루거 곡선으로 현재 자신의 위치를 찾고, 어떻게 배워야 지식이 실제로 남는지, 그리고 왜 원리에 시간을 투자할 가치가 있는지를 짚습니다 — 원리가 통하면 이후의 모든 방안을 스스로 읽어낼 수 있습니다.',
      color: '#64748b',
      prologue: true,
      topics: [
        {
          id: 't-intro',
          title: '입문과 포지셔닝',
          desc: '먼저 우리가 어디에 있는지, 왜 기초를 다져야 하는지를 파악합니다',
          lessons: [
            { file: '0-intro.html', title: '우리는 어디에 있는가? 더닝-크루거 효과', desc: '더닝-크루거 곡선으로 학습자의 현재 위치를 파악하고, 과정 목표를 명확히 합니다: 우매의 봉우리에서 안정된 고원으로', tag: '인트로' },
            { file: '0-how.html', title: '어떻게 배워야 지식이 남는가', desc: '보기 ≠ 배우기: 모든 사례에서 멈춰 성찰하고, 자신의 업무 시나리오에 대입하고, 아웃풋을 시도하세요', tag: '인트로' },
            { file: '0-why.html', title: '왜 원리에 시간을 투자하는가', desc: 'AI의 모든 Harness 작업은 본질적으로 message list 처리입니다. 이를 이해해야 모든 방안을 읽을 수 있습니다', tag: '인트로' },
          ],
        },
      ],
    },
    {
      id: 'p0',
      num: '0부',
      title: '처음 AI를 만나는 당신에게',
      desc: '전문 용어도, 수학도 없습니다. 여덟 개의 짧은 인터랙티브 수업으로 AI에 대한 올바른 직관을 세웁니다: 어떤 신기한 일을 해내는지, 왜 천연덕스럽게 지어내는지, 어떻게 말을 걸어야 하는지, 무엇을 안심하고 맡겨도 되는지. 완전 초보자도 볼 수 있으며 전체 챕터가 로그인 없이 무료입니다.',
      color: '#0891b2',
      prologue: true,
      topics: [
        {
          id: 't-zero-what',
          title: 'AI란 도대체 무엇인가',
          desc: '먼저 능력을 보고, 그다음 작동 원리를 꿰뚫어 봅니다',
          lessons: [
            { file: 'zero-0.html', title: 'AI가 해내는 신기한 일들', desc: '여섯 가지 실제 사용 장면: 회의록 정리, 검진 보고서 해석, 누구에게나 무엇이든 설명, 면접 연습, 도구 만들기, 포스터 생성. 예전엔 사람이 소프트웨어를 배웠지만 이제는 소프트웨어가 사람 말을 듣습니다', tag: '인터랙티브' },
            { file: 'zero-1.html', title: 'AI는 「말 잇기」를 한다', desc: '아무 배경지식 없이도 OK: AI가 하는 일은 단 하나 — 다음 단어 맞히기. 두 개의 미니 게임으로 AI에 대한 첫 번째 올바른 직관을 세웁니다', tag: '인터랙티브' },
            { file: 'zero-2.html', title: '검색 엔진이 아니다', desc: '검색은 책장을 건네고, AI는 결론을 건넵니다. 「기억으로 답하기」의 세 가지 결과: 기억이 뒤섞이고, 지식에 마감일이 있고, 출처를 확인할 수 없습니다', tag: '개념' },
            { file: 'zero-3.html', title: '천연덕스럽게 지어낸다', desc: '세 가지 틀린 그림 찾기: AI 답변 속 지어낸 문장을 직접 잡아내고, 세 가지 생존 습관을 챙겨 갑니다', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-zero-talk',
          title: '어떻게 말을 걸까',
          desc: '바로 써먹을 수 있는 두 가지 대화 기술',
          lessons: [
            { file: 'zero-4.html', title: '나를 모르는 새 동료처럼 대하라', desc: '3단계 질문 비교 + 프롬프트 블록 조립기: 배경, 요구, 제약 — 정보를 준 만큼 답이 돌아옵니다', tag: '인터랙티브' },
            { file: 'zero-5.html', title: '만능 오프닝: 「먼저 몇 가지 물어봐 줘」', desc: '요구를 말로 못 풀어도 괜찮습니다. AI가 당신을 인터뷰하게 하세요. 클릭형 대화 데모로 답변 품질이 두 배가 되는 순간을 체험합니다', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-zero-faq-usage',
          title: '활용편',
          desc: '한 페이지에 한 질문: 더 잘 쓰는 법, 도구 고르는 법',
          lessons: [
            { file: 'zero-q-prompt.html', title: '프롬프트, 대체 어떻게 써야 잘 쓰는 걸까요?', desc: '만능 뼈대(배경+요구+제약) + 퍼즐 조립기: 프롬프트를 직접 맞춰 보고, AI 답변 품질이 실시간으로 바뀌는 걸 봐요', tag: '인터랙티브' },
            { file: 'zero-q-prompt-engineering.html', title: '「프롬프트 엔지니어링」은 무슨 의미가 있나요?', desc: '채팅 한 번 vs 제품팀이 백만 번 호출: 슬라이더를 끌어, 쓸모없는 말이 얼마나 큰 청구서로 불어나는지 직접 봐요', tag: '인터랙티브' },
            { file: 'zero-q-model-agent-app.html', title: '모델, Agent, 앱은 무슨 관계인가요?', desc: '엔진, 완성차, 차량 호출의 세 층 비유 + 짝 맞추기 게임: 뉴스를 들으면 어느 층 이야기인지 알아요', tag: '인터랙티브' },
            { file: 'zero-q-agent.html', title: 'Agent는 대체 뭐가 강한가요?', desc: '같은 경비 정산인데, 채팅 AI와 에이전트가 하는 일이 완전히 달라요 — 재생을 눌러 에이전트가 한 걸음씩 일을 끝내는 걸 봐요', tag: '인터랙티브' },
            { file: 'zero-q-skill.html', title: '요즘 핫한 Skill이 대체 뭐예요?', desc: 'AI에게 써 주는 「경험 컨닝 페이퍼」. 비교 재생: 컨닝 페이퍼 없는 집사는 4번 왔다 갔다, 챙긴 집사는 한 번에 끝나요', tag: '인터랙티브' },
            { file: 'zero-q-vibe-coding.html', title: 'Vibe Coding이 뭔가요? 코드를 못 짜도 소프트웨어를 만들 수 있나요?', desc: '생활 속 요구를 골라 「한 줄 설명 → AI 생성 → 두 바퀴 수정 → 쓸 수 있음」 전 과정을 보고, 세 달 배우기 vs 십 분 설명하기를 비교해요', tag: '인터랙티브' },
            { file: 'zero-q-china-models.html', title: '중국의 대규모 모델에는 뭐가 있나요? 어떻게 고르죠?', desc: 'Qwen(퉁이), Kimi, DeepSeek, Doubao(더우바오), GLM… 장면을 눌러 짝을 맞춰 봐요. 데이터는 글로벌 블라인드 테스트 순위 기반이에요', tag: '인터랙티브' },
            { file: 'zero-q-companies.html', title: '또 어떤 중요한 AI 회사가 있나요?', desc: 'OpenAI, Anthropic, Google, Meta, xAI… 짝 맞추기 게임으로 회사와 대표작을 연결하고, 친절한 도감을 봐요', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-zero-faq-basics',
          title: '개념 입문',
          desc: '한 페이지에 한 질문: 뉴스에 자주 나오는 말의 왕초보 버전',
          lessons: [
            { file: 'zero-q-token.html', title: '토큰이 뭔가요? AI는 왜 토큰으로 과금할까요?', desc: '인터랙티브 토크나이저: 문장을 누르면 토큰으로 잘리고 요금이 실시간으로 뛰어요. 한영 소모 차이가 한눈에 보여요', tag: '인터랙티브' },
            { file: 'zero-q-context-window.html', title: '오래 대화하면 왜 「잊어버릴까요」?', desc: 'AI 작업대는 그 크기뿐이에요. 대화 턴을 끌어 보면, 자리가 가득 찬 뒤 가장 오래된 쪽지가 떨어지고, 떨어지는 순간부터 동문서답을 시작해요', tag: '인터랙티브' },
            { file: 'zero-q-reasoning.html', title: '「추론 모델」「깊이 생각하기」가 뭔가요?', desc: '같은 문제를 두 모드로 나란히 봐요: 바로 답하기 vs 깊이 생각하기. 시간과 비용 차이를 보고, 네 문제 퀴즈로 언제 켤 만한지 감을 잡아요', tag: '인터랙티브' },
            { file: 'zero-q-parameters.html', title: '파라미터가 많을수록 더 똑똑할까요?', desc: '「천억 파라미터」가 대체 어떤 규모일까요? 규모 슬라이더로 직관을 잡고, 작은 모델이 이기는 지점을 봐요: 속도, 비용, 특화 장면', tag: '인터랙티브' },
            { file: 'zero-q-multimodal.html', title: '어떤 AI는 왜 이미지를 못 알아볼까요?', desc: '「말할 줄 아는 것」과 「볼 줄 아는 것」은 다른 능력이에요. 두 모델에 고양이 사진을 하나씩 보내 차이를 보고, 「눈」의 원리를 풀어 봐요', tag: '인터랙티브' },
            { file: 'zero-q-finetune-vs-rag.html', title: '파인튜닝이 뭔가요? 「자료를 먹인다」는 것과 뭐가 다른가요?', desc: '다시 수업 vs 오픈북 시험: AI가 당신을 알게 하는 두 길을 나란히 보고, 실제 장면 네 개에 짝을 맞춰 봐요', tag: '인터랙티브' },
            { file: 'zero-q-knowledge-base.html', title: '기업들이 다 만든다는 「지식 베이스」는 뭔가요?', desc: '3단계 애니메이션: 파일을 잘라 넣고 → 질문할 때 검색 → 컨텍스트에 넣어 답하기. 같은 질문에 지식 베이스 유무를 비교해요', tag: '인터랙티브' },
            { file: 'zero-q-acronyms.html', title: 'GPT, LLM, AIGC… 이 약자들은 어떻게 구분하나요?', desc: '짝 맞추기 게임으로 약자와 쉬운 말 설명을 연결하고, 깨면 「누가 누구를 포함하는지」 관계도를 받아요', tag: '인터랙티브' },
            { file: 'zero-q-nvidia-gpu.html', title: 'NVIDIA는 왜 그렇게 가치가 높을까요?', desc: 'AI 시대의 삽 장수: 문제를 한 문제씩 푸는 박사 한 명 vs 동시에 시작하는 초등학생 만 명 — 그래픽카드가 왜 불티나게 팔리는지 봐요', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-zero-faq-myth',
          title: '환상 깨기',
          desc: '한 페이지에 한 질문: 허풍 화술과 흔한 오해를 벗겨 봐요',
          lessons: [
            { file: 'zero-q-train-or-prompt.html', title: '「모델을 훈련시켰다」는데, 대체 뭘 훈련한 걸까요?', desc: '네 층 사다리: 프롬프트 고치기, 지식 베이스 걸기, 파인튜닝, 처음부터 사전학습 — 층마다 실제 비용이 적혀 있어요. 허풍 다섯 줄을 듣고 화자가 어느 층인지 가려 봐요', tag: '인터랙티브' },
            { file: 'zero-q-jargon-translator.html', title: 'AI 업계 은어 번역기', desc: '자체 개발, 껍데기, 디지털 직원, 임파워… 발표회 원문을 누르면 쉬운 말로 번역되고, 금 함량 등급과 그 자리에서 속내를 묻는 추궁 세 가지가 따라와요', tag: '인터랙티브' },
            { file: 'zero-q-opensource-free.html', title: '「오픈소스 모델」이 곧 무료일까요?', desc: '가중치·데이터·방법 3종 세트로 주요 모델이 뭘 열었는지 하나씩 확인하고, 풀사이즈 vs 증류를 비교해요. 로컬에서 돌리는 건 대개 작은 쪽이에요', tag: '인터랙티브' },
            { file: 'zero-q-benchmark.html', title: '「벤치마크 1위」 모델이, 왜 써 보면 별로일까요?', desc: '순위 점수와 실제 쓰기 좋음의 반전 데모 + 이유 세 가지: 순위 조작, 문제집 과적합, 장면 불일치. 어떤 순위가 더 믿을 만한지도 짚어요', tag: '인터랙티브' },
            { file: 'zero-q-ai-learning.html', title: '대화할수록 날 더 잘 알아요. 학습하는 걸까요?', desc: '모델이 크는 줄 알았는데, 실제로는 작은 수첩이 대화에 다시 들어가는 거예요: 양쪽 화면 비교 애니메이션 + 새 대화 「기억 상실」 데모', tag: '인터랙티브' },
            { file: 'zero-q-ai-detector.html', title: 'AI 탐지기가 「이건 AI가 쓴 글」이라고 하면, 믿어도 될까요?', desc: '글 여섯 토막으로 탐지기 판정을 맞춰 보고, 오탐의 대표 장면을 직접 겪어 봐요. 원리상 왜 맞출 수가 없는지, 억울하게 걸리면 어떻게 할지', tag: '인터랙티브' },
            { file: 'zero-q-prompt-course.html', title: '「프롬프트 비법서」는 살 가치가 있을까요?', desc: '유료 강의 판매 포인트를 한 줄씩 분해해요: 이 사이트에서 이미 무료로 가르친 것, 맞는 상식, 포장뿐인 것. 뼈대는 무료고, 공부는 많이 쓰는 데 있어요', tag: '인터랙티브' },
            { file: 'zero-q-randomness.html', title: '같은 질문인데, 왜 매번 답이 다를까요?', desc: '같은 질문을 세 번 던져 답 세 가지를 보고, 「다음 단어」 확률 주사위 애니메이션을 곁들여요. 고장이 아니라 설계고, 어떤 장면에서 안정된 출력이 필요한지도 짚어요', tag: '인터랙티브' },
            { file: 'zero-q-ai-customer-service.html', title: 'AI 고객센터는 왜 그렇게 멍청할까요?', desc: '같은 불만 한 줄을 채팅 AI와 고객센터 봇에 보내 보면, 차이가 한눈에 보여요. 이유 세 가지: 싼 작은 모델, 가드레일을 꽉 잠금, 옛 기술이 새 AI를 사칭', tag: '인터랙티브' },
            { file: 'zero-q-siri-vs-chatgpt.html', title: 'Siri와 ChatGPT는 같은 건가요?', desc: '같은 한 마디가 두 세대 비서에서 가는 경로 애니메이션: 명령 매칭은 못 알아들으면 사과하고, 생성형은 어떤 말투든 받아 줘요', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-zero-faq-money',
          title: '돈과 안전',
          desc: '한 페이지에 한 질문: 비용, 계정, 프라이버시',
          lessons: [
            { file: 'zero-q-free-vs-paid.html', title: '무료 AI로 충분할까요? 언제 돈을 낼 만할까요?', desc: '무료 버전 투시: 모델 등급, 횟수, 컨텍스트, 피크 대기 네 가지를 하나씩 켜 봐요. 세 유형에 짝을 맞추고, 각자에게 한 줄 결론을 줘요', tag: '인터랙티브' },
            { file: 'zero-q-api-vs-membership.html', title: 'API가 뭔가요? 멤버십과는 뭐가 다를까요?', desc: '월정액 뷔페 vs 그램 단위 종량제: 사용량 슬라이더를 끌어 두 방식이 각각 얼마인지 계산하고, 당신의 분기점을 찾아요', tag: '인터랙티브' },
            { file: 'zero-q-image-cost.html', title: '이미지 한 장 생성이 왜 수십 배 비쌀까요?', desc: '질문 한 번은 푼돈, 이미지 한 장은 몇 전. 비용 막대 애니메이션 + 이유 세 가지: 픽셀이 많고, 수십 번 그려야 하고, GPU를 독점해요', tag: '인터랙티브' },
            { file: 'zero-q-video-cost.html', title: 'AI 영상은 왜 초 단위로 과금될까요?', desc: '슬라이더를 끌어 보세요: 영상 10초 = 이어지는 그림 240프레임 + 물리적으로 말이 됨 + 음향 동기. 아끼는 순서도 같이 알려 드려요', tag: '인터랙티브' },
            { file: 'zero-q-relay.html', title: 'API 중계 사이트가 뭔가요?', desc: '70% 할인 뒤에: 여러분의 말 한마디가 확인할 수 없는 중간자를 거쳐요. 경로 애니메이션으로 구조적 리스크 세 가지를 풀어 봐요', tag: '인터랙티브' },
            { file: 'zero-q-reverse-proxy.html', title: '「카풀 계정」「공유 계정」이 뭔가요?', desc: '9.9위안 Plus 카풀 = 30명이 원룸을 셰어하는 것. 애니메이션: 기록을 서로 보고, 정지되면 연대 책임, 열쇠는 남 손에 있어요', tag: '인터랙티브' },
            { file: 'zero-q-privacy.html', title: '내 대화 기록이 학습에 쓰일까요?', desc: '한 마디를 보낸 뒤 어떤 단계를 지나고, 어느 단계에서 학습 말뭉치로 들어갈 수 있는지. 학습 스위치를 어떻게 끄는지, 무료 버전과 기업용이 어디서 다른지 봐요', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-zero-trust',
          title: '무엇을 안심하고 맡길까',
          desc: '3초 만에 끝나는 신뢰 판단법',
          lessons: [
            { file: 'zero-6.html', title: '믿을까, 확인할까?', desc: '8문항 판단 게임 + 신뢰 사분면: 정답이 정해져 있는가? 틀리면 대가가 큰가? 건강·돈·법률 세 가지 레드라인', tag: '인터랙티브' },
            { file: 'zero-final.html', title: '다음 단계', desc: '여섯 가지 직관 점검 후, 3문항 테스트로 나에게 가장 맞는 학습 경로를 찾습니다', tag: '마무리' },
          ],
        },
      ],
    },
    {
      id: 'p1',
      num: '1부',
      title: '대규모 언어 모델은 어떻게 만들어지는가',
      desc: '훈련 데이터, Token에서 GPT의 도약, 그리고 대규모 모델 환각의 원인과 네 가지 대응 방안까지 — 대규모 모델 기초 원리에 대한 완전한 인지를 구축합니다.',
      color: '#0066ff',
      topics: [
        {
          id: 't-basic',
          title: '기초 원리',
          desc: '훈련 데이터, 훈련 vs 추론, 어휘와 어텐션',
          lessons: [
            { file: 'training-data.html', title: 'AI의 먹이: 훈련 데이터', desc: '15T Token이란 어떤 규모인가? 코퍼스 구성 시각화 + 데이터 규모 직관 슬라이더', tag: '인터랙티브' },
            { file: 'train-vs-infer.html', title: '훈련 vs 추론: 두 가지 다른 과정', desc: '대화는 학습이 아니며, 파라미터는 고정되고, Token당 과금됩니다 — AI 프로덕트의 필수 기초 로직', tag: '개념' },
            { file: '1-2-vocab.html', title: '어휘와 훈련', desc: '코퍼스에서 단어 간 행렬까지, Token화 + 어텐션 가중치 인터랙티브 데모', tag: '인터랙티브' },
            { file: '1-2-base.html', title: 'Base 모델: Token-to-Token 머신', desc: '훈련 후 얻는 것은? 단계별 생성 + 확률 분포 실시간 업데이트', tag: '애니메이션' },
            { file: '1-2-gpt.html', title: 'GPT의 도약: PreTraining이 모든 것을 바꾸다', desc: 'CNN / RNN / BERT / GPT 네 가지 알고리즘 인터랙티브 비교, 기억 감쇠 시각화', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-chat',
          title: '보완에서 대화로',
          desc: '보완 머신이 어떻게 챗봇이 되었는가',
          lessons: [
            { file: '1-2-api.html', title: 'chat/completions의 비밀', desc: '분명 대화인데 왜 API 이름이 "completions"인가? 타이핑 애니메이션으로 해설', tag: '애니메이션' },
            { file: '1-2-fake-chat.html', title: '가짜 채팅 기록', desc: 'OpenAI 최초의 실험: 보완 머신을 챗봇으로 변환하기', tag: '애니메이션' },
            { file: '1-2-sft.html', title: 'Chat Template + SFT', desc: 'Jinja 포맷, 명령어 미세조정 — 대규모 모델이 드디어 말하는 법을 배우다', tag: '개념' },
            { file: '1-2-prompt-power.html', title: '컨텍스트 윈도우가 핵심이다', desc: '프롬프트가 왜 충분한가? Token 절단 시각화, 재훈련 불필요', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-hallucination',
          title: '환각과 네 가지 대응',
          desc: '환각의 원인, 그리고 Prompt / RAG / Temperature / 평가 네 가지 완화 방안',
          lessons: [
            { file: '1-2-hallucination.html', title: '대규모 모델 환각 데모', desc: '세 가지 전형적 환각: 사실 오류 / 자신있게 날조 / 지식 컷오프', tag: '사례' },
            { file: '1-2-mitigation-prompt.html', title: '대응 1: Prompt Engineering', desc: '제약 명령어 + 한계: 모델은 자기가 모르는 것을 모릅니다', tag: '개념' },
            { file: '1-2-mitigation-rag.html', title: '대응 2: RAG 검색 증강 생성', desc: '실제 문서를 컨텍스트에 주입, 5단계 인터랙티브 플로우 애니메이션, RAG 유무 차이 비교', tag: '인터랙티브' },
            { file: 'rag-advanced.html', title: 'RAG의 비용과 최적화 전략', desc: '비용 분석표 + 키워드 트리거 / 모델 라우팅 / 시맨틱 캐시 / 정밀 청킹 네 가지 전략', tag: 'PM 심화' },
            { file: '1-2-mitigation-temp.html', title: '대응 3: Temperature & Top-P', desc: '슬라이더를 드래그하여 확률 분포와 출력 변화를 실시간으로 확인', tag: '인터랙티브' },
            { file: '1-2-mitigation-eval.html', title: '대응 4: 평가 + 수동 검토', desc: '외부 교정 레이어, 콜드 스타트 단계 백스톱 전략 (HITL)', tag: '개념' },
          ],
        },
        {
          id: 't-summary1',
          title: '파트 요약',
          desc: '1부 핵심 지식 복습',
          lessons: [
            { file: 'summary-1.html', title: '요약(상) · 대규모 모델이란 + 환각', desc: '훈련의 본질 / Token / Base→SFT→Chat / 네 가지 환각 유형과 근본 원인', tag: '요약' },
            { file: 'summary-1b.html', title: '요약(하) · 완화 전략 + 의사결정 프레임워크', desc: '네 가지 완화 전략 비교 / 흔한 오해 목록 / 방안 선택 판단 매트릭스', tag: '요약' },
          ],
        },
        {
          id: 't-build1',
          title: '지금 할 수 있는 것',
          desc: '이 장을 배우면, 오늘 바로 손댈 수 있는 것',
          lessons: [
            { file: 'build-1.html', title: '그 일부터 정해 두기', desc: '요구사항 수렴 4단계 데모; 세 가지 과제: 네 줄 요구사항 쓰기, 실제 입력 다섯 개로 시험하기, 사람-AI 경계선 긋기', tag: '실전' },
          ],
        },
        {
          id: 't-interview1',
          title: '이렇게 물어볼 것이다',
          desc: '면접관, 상사, 기술 동료가 이 장의 내용을 어떻게 검증하는가',
          lessons: [
            { file: 'interview-1.html', title: '대규모 모델 기초 · 30가지 핵심 질문', desc: '각 문제에 출제 의도, 답변 프레임워크, 가산점 포함: 확률 예측 / message list / 환각 설명 / RAG vs 재훈련 / Temperature / 컨텍스트 윈도우', tag: '면접' },
          ],
        },
      ],
    },
    {
      id: 'p2',
      num: '2부',
      title: 'AI Harness',
      desc: '컨텍스트 엔지니어링, Prompt 심화와 보안, Agent 설계와 도구 호출, 5단계 비용 최적화 체계 — 대규모 모델을 실제 사용 가능한 제품으로 만듭니다.',
      color: '#7c3aed',
      topics: [
        {
          id: 't-context',
          title: '컨텍스트 엔지니어링',
          desc: 'AI의 작업 기억과 오버플로 처리',
          lessons: [
            { file: '5-1.html', title: '컨텍스트 윈도우: AI의 작업 기억', desc: '윈도우 구성 시각화, 드래그로 오버플로 시뮬레이션, 주요 모델 용량 비교', tag: '인터랙티브' },
            { file: '5-2.html', title: '컨텍스트 오버플로: 세 가지 처리 전략', desc: '직접 절단 / 요약 압축 / 선택적 보존, 각 전략의 장단점 시각화 비교', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-prompt',
          title: 'Prompt 엔지니어링',
          desc: 'Markdown, 역할극, 심화 기법과 출력 포맷',
          lessons: [
            { file: '6-0a.html', title: '왜 대규모 모델은 Markdown을 선택했는가', desc: '순수 텍스트 모델 + 서식 필요 = MD가 최선의 선택, HTML/Word/LaTeX가 안 되는 이유를 단계별 추론', tag: '애니메이션' },
            { file: '6-0b.html', title: 'Markdown 문법과 렌더링 Pipeline', desc: '자주 쓰는 문법 속성 참조 + 실시간 에디터 + marked.js / markdown-it 렌더링 방안', tag: '인터랙티브' },
            { file: '6-1.html', title: '당신이 말하면, AI가 변한다', desc: '다섯 가지 역할 실시간 전환, 출력 포맷 제어, System Prompt 핵심 원리', tag: '인터랙티브' },
            { file: '6-2.html', title: 'Prompt 심화 기법', desc: 'Few-Shot / CoT / 제약 조건 / 태스크 분해, 좋은 예 vs 나쁜 예 인터랙티브 데모', tag: '인터랙티브' },
            { file: '6-3.html', title: '출력 포맷의 트레이드오프', desc: '순수 텍스트 / JSON / Markdown / YAML / XML, 시나리오별 적합도 비교와 선택', tag: '인터랙티브' },
            { file: '6-4.html', title: '스트리밍 반환과 포맷 매칭', desc: 'JSON은 전체가 있어야 파싱 / MD는 글자별 표시 / XML은 태그 캡처 즉시 렌더링, 동적 데모', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-security',
          title: 'Prompt 보안',
          desc: 'Prompt Injection 원리, 사례와 방어 실전',
          lessons: [
            { file: 'prompt-attack.html', title: 'Prompt Injection: 왜 공격당하는가', desc: 'SQL 인젝션 비유 → Message List 본질 → 파라미터화 부재 → 5대 공격 유형 개요', tag: '보안' },
            { file: 'prompt-attack-cases.html', title: 'Prompt Injection: 12가지 공격 사례', desc: '권한 상승 / 역할극 / Few-Shot / 구조 주입 / 은유 위장, 피해 버전 vs 방어 버전', tag: '보안' },
            { file: 'prompt-defense.html', title: 'Prompt 방어: 3단계 차단 실전', desc: '입력층 정규식 → 프롬프트층 제약 → 출력층 유출 감지 → 2차 검토, 공격 전 과정 시뮬레이션', tag: '실전' },
            { file: 'ai-safety-redlines.html', title: 'AI 보안 레드라인: 네 가지 마지노선', desc: '해서는 안 되는 것, 하면 어떻게 되는 것, 프로덕트 매니저가 반드시 지켜야 할 네 가지 안전 경계', tag: '보안' },
            { file: 'ai-safety-governance.html', title: '리스크 등급과 책임: 누가, 어떻게 관리하는가', desc: 'AI 출력의 리스크 등급 모델, 각 역할의 책임 분담과 거버넌스 프레임워크', tag: '보안' },
          ],
        },
        {
          id: 't-agent',
          title: 'Agent 엔지니어링',
          desc: 'Agent 능력, 도구 호출, ReAct, 메모리, Skill과 스캐폴딩',
          lessons: [
            { file: '7-1.html', title: 'Agent: 일할 수 있는 AI', desc: '네 가지 핵심 능력 Plan / Tool / Memory / Act, 클릭하여 실제 사례 확인', tag: '인터랙티브' },
            { file: '7-2.html', title: '도구 호출의 비밀', desc: '모델이 JSON 출력 → 프레임워크가 파싱 실행 → 결과 재주입, 4단계 플로우 시각화', tag: '인터랙티브' },
            { file: '7-2a.html', title: '한 번의 대화 뒤에 숨은 5개 메시지', desc: 'Function Calling 실제 체인 분해: 사용자는 1개 답변을 보지만 뒤에는 5개 API 메시지', tag: '심화' },
            { file: '7-2b.html', title: '도구 설명의 학문', desc: '같은 기능이지만 좋은 설명 vs 나쁜 설명의 성공률 차이 3배, 비교 실험', tag: '심화' },
            { file: '7-2c.html', title: '다중 도구 오케스트레이션: 병렬 vs 직렬', desc: 'isConcurrencySafe가 도구 병렬 가능 여부를 결정, 스케줄링 전략 시각화', tag: '심화' },
            { file: '7-2d.html', title: 'MCP 프로토콜: 도구의 USB 포트', desc: 'stdio / SSE / Streamable HTTP 세 가지 전송 방식 비교, 데이터 플로우 애니메이션', tag: '심화' },
            { file: '7-3.html', title: 'ReAct 실전: 날씨 조회 전체 체인', desc: 'Thought / Action / Observation 단계별 데모, 7단계 완전한 Agent 체인', tag: '애니메이션' },
            { file: '7-3a.html', title: '단기 기억 = 컨텍스트 윈도우', desc: '메시지 리스트 시각화, 각 메시지의 Token 사용량과 역할 태그', tag: '심화' },
            { file: '7-3b.html', title: '컨텍스트 압축: 4단계 방어선', desc: '60% 트림 → 75% 소압축 → 85% 폴딩 → 95% 긴급, 슬라이더로 압축 과정 확인', tag: '심화' },
            { file: '7-3c.html', title: '장기 기억: 벡터 검색', desc: 'Embedding → 벡터 DB → 시맨틱 검색, topK와 minScore의 설계 결정', tag: '심화' },
            { file: '7-4a.html', title: 'ReAct 루프: 생각→행동→관찰', desc: 'console.log 삭제 태스크가 14라운드를 거치며 자기 수정 포함', tag: '심화' },
            { file: '7-4b.html', title: 'Agent 멈춤의 5가지 패턴', desc: '파라미터 포맷 오류, 환각 도구, 무한 재귀, 정보 부족, API 이상', tag: '심화' },
            { file: '7-4c.html', title: '권한과 보안', desc: '5가지 권한 모드 + LLM 리스크 등급 + Human-in-the-loop 설계', tag: '심화' },
            { file: '7-5.html', title: 'Skill: Agent가 헤매지 않게 하기', desc: 'Skill = 프로세스 설명 + 도구 호출 가이드, "베란다 빨래 걷기" 비유로 좋은 루프 vs 나쁜 루프', tag: '인터랙티브' },
            { file: '7-5a.html', title: 'Skill의 본질', desc: '좋은 루프 vs 나쁜 루프 업그레이드, Skill이 Agent 실행 경로를 어떻게 바꾸는가', tag: '심화' },
            { file: '7-5b.html', title: '실제 Skill 해부', desc: '실제 소스코드에서 SKILL.md의 구조 설계를 배우기', tag: '심화' },
            { file: '7-4.html', title: '스캐폴딩 엔지니어링: 프로토타입에서 제품으로', desc: 'Agent가 항공권 조회·호텔 예약하는 시뮬레이션, 스캐폴딩 유무 완전 비교, 5대 능력 상세', tag: '인터랙티브' },
            { file: '7-6a.html', title: '5가지 엔지니어링 가드레일', desc: '반복 상한, 출력 절단, 타임아웃 제어, 중단 복구, 컨텍스트 응급 처치', tag: '심화' },
            { file: '7-6b.html', title: '다중 Agent 협업', desc: '서브 Agent 스케줄링, Worker Thread, 병렬 vs 직렬 실행 전략', tag: '심화' },
            { file: '7-6c.html', title: '관측 가능성', desc: '이벤트 스트림 시각화, Token 추적, OpenTelemetry 통합', tag: '심화' },
            { file: '7-summary.html', title: 'Agent 엔지니어링 전경도', desc: '네 가지 핵심 능력에서 엔지니어링 구현까지, 한 페이지로 Agent 완전 지식 맵 파악', tag: '요약' },
          ],
        },
        {
          id: 't-vector-db',
          title: '벡터 데이터베이스',
          routes: ['pm', 'build'],
          desc: 'Embedding과 Milvus부터 RAG와 Agent 지식 도구까지; 먼저 <a href="7-3c.ko.html">장기 기억 / 벡터 검색</a>, <a href="rag-advanced.ko.html">RAG 비용과 최적화</a>, <a href="1-2-mitigation-rag.ko.html">RAG 기초</a>를 복습하세요',
          lessons: [
            { file: 'vector-db-1.html', title: 'Embedding에서 Milvus까지', desc: '시맨틱 유사도, ANN과 벡터 데이터베이스의 역할 경계', tag: '입문' },
            { file: 'vector-db-2.html', title: 'Milvus 멘탈 모델', desc: 'Collection, Schema, Entity, Index, Search, Query와 Load', tag: '기초' },
            { file: 'vector-db-3.html', title: 'Milvus 실습', desc: '연결, 생성, 배치 삽입, 인덱스, 검색, 조회와 삭제', tag: '실전' },
            { file: 'vector-db-4.html', title: '검색에서 RAG까지', desc: '청킹, 필터링, 하이브리드 검색, RRF, 재순위화와 평가', tag: 'RAG' },
            { file: 'vector-db-5.html', title: 'Agent 지식 도구로서의 Milvus', desc: 'search_knowledge, ToolMessage, 메모리 분리와 테스트', tag: 'Agent' },
          ],
        },
        {
          id: 't-cost',
          title: '비용 최적화와 모델 선택',
          desc: 'KV Cache, 캐시, 이미지 Token, 구문/의미/출력 계층 최적화와 모델 선택',
          lessons: [
            { file: '8-1.html', title: '멀티턴 대화가 점점 비싸지는 이유', desc: 'Token 누적 비용 시각화, 턴 수를 드래그하여 비용이 기하급수적으로 증가하는 모습 확인', tag: '인터랙티브' },
            { file: '8-2.html', title: 'KV Cache: 공간으로 시간(과 비용)을 사다', desc: '비유를 통한 이해 + 절약 효과 계산기, 턴 수를 드래그하여 절약 비율 확인', tag: '인터랙티브' },
            { file: '8-2b.html', title: '명시적 캐시: 실전 비교', desc: 'cache_control 작성법, 캐시 히트 판단, 가격 할인 비교, 실제 비용 절감 데모', tag: '인터랙티브' },
            { file: '8-3.html', title: '동적 타임스탬프: 가장 비싼 System Prompt', desc: '잘못된 설계 vs 올바른 설계, 세 가지 시간 처리 방안 전환 비교', tag: '반례' },
            { file: '8-4.html', title: '종합 비용 최적화: 시스템 관점에서 절약하기', desc: '5단계 최적화 전략, 비용 구성 시각화, 70-90% 절약 시스템 설계', tag: '시스템설계' },
            { file: '8-5.html', title: '이미지 Token: 픽셀도 돈을 태운다', desc: '이미지 과금 공식, 스케일링 메커니즘, 해상도 함정, 태스크별 등급 전략', tag: '멀티모달' },
            { file: '8-5b.html', title: '태스크에 맞는 해상도 매칭', desc: '고/중/저 3단계 해상도 전략, 시나리오별 Token 소모 비교와 선택 가이드', tag: '멀티모달' },
            { file: '8-6.html', title: '구문 계층 최적화: 기계를 위한 프롬프트', desc: 'YAML vs JSON, CSV vs 배열, 압축 JSON 출력, 포맷 Token 10-30% 절약', tag: '프롬프트엔지니어링' },
            { file: '8-7.html', title: '의미 계층 최적화: 컨텍스트를 쓰레기통으로 쓰지 마라', desc: '동적 Few-Shot, LLMLingua-2 압축, 핵심 정보를 앞뒤에 배치하여 정보 밀도 향상', tag: 'RAG' },
            { file: '8-8.html', title: '출력 계층 + KV Cache 심화', desc: '네거티브 제약, Diff 리터칭, 정지 시퀀스; KV Cache의 도구 함정과 슬라이딩 윈도우 문제', tag: '아키텍처' },
            { file: 'cost-eval.html', title: '모델 선택: 능력 vs 비용', desc: '주요 모델 능력/비용 매트릭스, 선택 결정 트리, 시나리오별 모델 매칭 전략', tag: '선택' },
            { file: 'engineering-philosophy.html', title: '대도지간: 제1원리 고수', desc: 'AI Harness의 본질 / 하기 vs 안하기의 취사선택 / 시대에 도태될 Harness / 궁극의 질문', tag: '마무리' },
          ],
        },
        {
          id: 't-tips',
          title: '실용 팁',
          desc: '인간-AI 경계, 질문법, 반복법, 상황 판단과 환각 검증 — AI 활용 일상 가이드',
          lessons: [
            { file: 'ai-tips-boundary.html', title: '인간-AI 지식 경계: 4사분면 전략', desc: '무엇을 AI에게 맡기고, 무엇을 직접 할 것인지 4사분면으로 빠르게 판단', tag: '팁' },
            { file: 'ai-tips-context.html', title: '좋은 질문 vs 나쁜 질문', desc: '컨텍스트가 출력 품질을 결정, 같은 질문의 좋은 예 vs 나쁜 예 비교 데모', tag: '팁' },
            { file: 'ai-tips-verify.html', title: 'AI 말을 믿어도 되나? 환각 찾기', desc: '세 가지 빠른 검증 방법, AI가 자신있게 틀리는 시나리오 식별', tag: '팁' },
            { file: 'ai-tips-iterate.html', title: '반복의 기술: 언제 멈출지 알기', desc: '러프에서 정교로의 반복 리듬, 그리고 언제 AI에게 추가 질문을 멈춰야 하는가', tag: '팁' },
            { file: 'ai-tips-scenarios.html', title: '시나리오 속성 참조: 언제 안심하고 쓸 수 있나', desc: '높은 신뢰 / 검증 필요 / 주의 / 비사용, AI 적합 시나리오 4분류', tag: '팁' },
          ],
        },
        {
          id: 't-summary2',
          title: '과정 마무리',
          desc: '2부 복습 + 전체 과정 총정리',
          lessons: [
            { file: 'summary-2.html', title: '요약(상) · Prompt 엔지니어링 + Agent', desc: '컨텍스트 오버플로 전략 / Prompt 6요소 / 도구 호출의 진실 / Skill + 스캐폴딩', tag: '요약' },
            { file: 'summary-2b.html', title: '요약(하) · 비용 최적화 + PM 관점', desc: '5단계 비용 체계 / KV Cache 원리 / 이미지 Token / 전체 과정 역량 체크리스트', tag: '요약' },
            { file: 'summary-final.html', title: '과정 총정리 · 프로덕트 매니저의 첫 AI 수업', desc: '대규모 모델 원리부터 엔지니어링 실전까지, 전체 과정 한 페이지 복습', tag: '요약' },
            { file: 'summary-final-1.html', title: '총정리(상) · 원리 + Harness', desc: '대규모 모델 인지 프레임워크 / 환각 대응 / Prompt와 Agent 핵심 요점', tag: '요약' },
            { file: 'summary-final-2.html', title: '총정리(하) · 실전 + 비용', desc: '보안 방어 / 비용 최적화 / AI 올바른 활용법 / 다음 학습 경로', tag: '요약' },
          ],
        },
        {
          id: 't-build2',
          title: '지금 할 수 있는 것',
          desc: '이 장을 배우면, 오늘 바로 손댈 수 있는 것',
          lessons: [
            { file: 'build-2.html', title: '다섯 번 연속으로 쓸 수 있게 하기', desc: '같은 입력 다섯 연속 실행 데모; 세 가지 과제: 첫 판 프롬프트 쓰기, 불안정 분류하기, 예시와 금지 항목을 넣고 다시 돌려 비교하기', tag: '실전' },
          ],
        },
        {
          id: 't-interview2',
          title: '이렇게 물어볼 것이다',
          desc: '면접관, 상사, 기술 동료가 이 장의 내용을 어떻게 검증하는가',
          lessons: [
            { file: 'interview-2.html', title: 'AI Harness · 30가지 핵심 질문', desc: '각 문제에 출제 의도, 답변 프레임워크, 가산점 포함: 컨텍스트 오버플로 / Prompt 엔지니어링 / 인젝션 방어 / 도구 호출 / 비용 청구서 / KV Cache / 출력 포맷', tag: '면접' },
          ],
        },
      ],
    },
    {
      id: 'p3',
      num: '3부',
      title: '실전 · Demo에서 제품으로',
      desc: '실제 AI Agent 데스크톱 앱을 사례로, 이미지 생성 제품화, Agent 루프 제어, 컨텍스트 압축, 장기 기억, Prompt Harness, 다중 Agent 협업, 권한 보안과 MCP 생태계를 분해하여 "API 연동"에서 "사용자가 쓸 수 있는" 완전한 실전 경로를 따라갑니다.',
      color: '#059669',
      topics: [
        {
          id: 't-alice-intro',
          title: '오프닝',
          desc: '이 챕터는 어디서 왔나: 실제 제품의 개발 실록',
          lessons: [
            { file: '9-0.html', title: '이 챕터는 어디서 왔나: Alice 개발 실록', desc: '이 챕터는 저자가 AI Agent 데스크톱 앱 Alice를 개발한 경험의 총정리: 약 50만 줄의 코드, 132개 도구, 이 챕터 8개 소단원과 일대일 대응하는 8개 모듈', tag: '인트로' },
          ],
        },
        {
          id: 't-imagegen',
          title: 'AI 이미지 생성',
          desc: '텍스트-투-이미지, 참조 이미지, 캐릭터 일관성, 다중 모델 폴백과 제품화',
          lessons: [
            { file: '9-1.html', title: '텍스트-투-이미지 vs 참조 이미지: 완전히 다른 두 가지', desc: '하나는 텍스트에서 출발, 하나는 이미지에서 출발. PM은 언제 어떤 것을 쓸지 구분해야 합니다', tag: '개념' },
            { file: '9-2.html', title: 'AI에게 AI용 Prompt를 쓰게 하기', desc: '사용자가 "석양의 고양이 그려줘"라고 하면, 이미지 생성 모델에는 완전히 다른 설명이 필요 — 해법은 LLM으로 번역하기', tag: '실전' },
            { file: '9-3.html', title: '캐릭터 일관성: 가장 어려운 제품 문제', desc: '같은 IP인데 매번 다르게 그려진다. 왜 어렵고, 제품적으로 어떻게 접근하는가', tag: '사례' },
            { file: '9-4.html', title: '모델이 다운되면 어쩌나?', desc: '다중 모델 폴백 체인의 제품 로직: 우선순위, 화이트리스트, 헬스체크, 전체 다운 시 경험 백업', tag: '실전' },
            { file: '9-5.html', title: '이미지 생성의 제품화 체크리스트', desc: '"API 연동 완료"에서 "사용자가 쓸 수 있다"까지 무엇이 남았는지, 체크리스트로 정리', tag: '시스템설계' },
          ],
        },
        {
          id: 't-agentloop',
          title: 'Agent Loop',
          desc: '프로덕션급 루프의 제어, 보호와 스트리밍 경험',
          lessons: [
            { file: '9-6.html', title: '교과서의 3단계 vs 실제의 N단계', desc: 'ReAct는 Think-Act-Observe 3단계뿐이 아니며, 프로덕션에서는 매 라운드에 추가 작업 필요', tag: '개념' },
            { file: '9-7.html', title: '왜 Agent가 멈추는가', desc: '실제 시나리오에서 루프가 멈추는 전형적 패턴과 사용자가 보게 되는 것', tag: '사례' },
            { file: '9-8.html', title: '바보 방지 설계: 루프가 스스로 멈추게 하기', desc: '상한, 감지, 폴백 세 가지 전략의 사고방식, PM이 어디에 선을 그어야 하는가', tag: '실전' },
            { file: '9-9.html', title: '스트리밍 경험: 사용자를 기다리게 하지 마라', desc: '도구가 백그라운드에서 30초 동안 실행될 때, 사용자가 봐야 하는 것은? 진행감 디자인', tag: '인터랙티브' },
            { file: '9-10.html', title: '한 메시지 뒤의 실제 비용', desc: '사용자가 한마디 하면, 내부에서 10+ 라운드 루프, 수십 개 API 메시지가 돌 수 있음 — 비용 인식 구축', tag: '심화' },
          ],
        },
        {
          id: 't-ctxmgmt',
          title: '컨텍스트 관리',
          desc: '대화가 길어질수록 비싸고 느려진다: 압축의 기술과 트레이드오프',
          lessons: [
            { file: '9-11.html', title: '대화가 길수록 비싸고, 길수록 멍청해진다', desc: '비용 증가 + 어텐션 감쇠 + 윈도우 한계, 컨텍스트를 관리해야 하는 세 가지 이유', tag: '개념' },
            { file: '9-12.html', title: '압축은 트레이드오프의 기술이다', desc: '삭제해도 되는 것, 안 되는 것, 비용을 써서 압축해야 하는 것 — PM의 의사결정 프레임워크', tag: '실전' },
            { file: '9-13.html', title: '사용자의 말을 삭제해도 되나?', desc: '"성물" 문제: AI 출력은 압축할 수 있지만, 사용자 원문을 삭제하면 되돌릴 수 없다', tag: '개념' },
            { file: '9-14.html', title: '로컬 압축 vs LLM 압축', desc: '무비용·빠르지만 거친 것 vs 비용·느리지만 정밀한 것, 언제 어떤 것을 쓰나', tag: '심화' },
          ],
        },
        {
          id: 't-memory',
          title: '장기 기억',
          desc: 'AI가 당신을 알게 하기: 기억의 추출, 충돌과 주입',
          lessons: [
            { file: '9-15.html', title: '컨텍스트 ≠ 기억', desc: '화이트보드(컨텍스트 윈도우)와 노트북(장기 기억)의 차이, 왜 두 시스템이 필요한가', tag: '개념' },
            { file: '9-16.html', title: '무엇을 기억하고, 무엇을 기억하지 말아야 하나', desc: '모든 대화가 가치 있는 것은 아님: 골키퍼 사고방식과 필터링 로직', tag: '실전' },
            { file: '9-17.html', title: '기억 충돌: 사용자가 마음을 바꾸면?', desc: '새-구 기억 충돌의 네 가지 처리 전략: 추가 / 병합 / 충돌 표시 / 건너뛰기', tag: '사례' },
            { file: '9-18.html', title: '기억 주입의 비용 문제', desc: '1000개를 기억했는데, 매번 전부 넣을 것인가? 아니면 필요할 때 검색할 것인가? 두 전략의 비용', tag: '심화' },
          ],
        },
        {
          id: 't-prompteng',
          title: 'Prompt Harness',
          desc: '문자열에서 아키텍처로: 계층화, 온디맨드 로딩과 Skill 모듈화',
          lessons: [
            { file: '9-19.html', title: 'System Prompt는 한 덩어리 텍스트가 아니다', desc: '계층 관리의 필요성: 신원, 환경, 도구 가이드 각각 독립적으로 서로 간섭 없이', tag: '아키텍처' },
            { file: '9-20.html', title: '쓰지 않는 것은 AI에게 보여주지 마라', desc: '100개 도구를 모두 system에 넣으면? Token 폭발. 온디맨드 로딩 설계 사고 필요', tag: '실전' },
            { file: '9-21.html', title: 'Skill: 운영 가능한 Prompt 모듈', desc: '파일이 곧 설정, 버전 추적 가능, Prompt도 코드처럼 관리하기', tag: '실전' },
            { file: '9-22.html', title: '프롬프트와 캐시의 미묘한 관계', desc: 'System Prompt 한 글자만 바꿔도 KV Cache 전체 무효화. 실수 비용을 줄이는 법', tag: '심화' },
          ],
        },
        {
          id: 't-multiagent',
          title: '다중 Agent',
          desc: '병렬, 브레인스토밍, 예약 작업과 협업 비용',
          lessons: [
            { file: '9-23.html', title: '언제 여러 Agent가 필요한가', desc: '병렬 가속, 역할 분담, 리스크 격리, 세 가지 실제 시나리오', tag: '개념' },
            { file: '9-24.html', title: '동시성의 대가: 누가 동시에 달릴 수 있나', desc: '"보기"는 병렬 가능, "수정"은 큐 필수, 왜 그리고 어떻게 판단하는가', tag: '실전' },
            { file: '9-25.html', title: '브레인스토밍: 여러 AI를 토론시키기', desc: '같은 문제를 다양한 관점에서 독립적으로 사고, 합의와 이견을 종합 — 집단 지성의 AI 버전', tag: '인터랙티브' },
            { file: '9-26.html', title: '예약 작업의 비용 함정', desc: 'Agent가 예약으로 작업을 실행할 때, 컨텍스트는 누적인가 재구축인가? 한 선택이 10배 비용 차이', tag: '반례' },
          ],
        },
        {
          id: 't-security',
          title: '권한과 보안',
          desc: 'Agent의 고삐: 권한 등급, 승인과 관측 가능성',
          lessons: [
            { file: '9-27.html', title: 'AI에게 얼마나 자유를 줄 것인가', desc: '완전 자율 vs 매 단계 승인, 다섯 가지 권한 모드와 적용 시나리오', tag: '개념' },
            { file: '9-28.html', title: '팝업이 너무 많으면 짜증, 없으면 불안', desc: 'Human-in-the-loop의 균형점: 리스크 등급 사고방식', tag: '실전' },
            { file: '9-29.html', title: 'Agent가 뭘 했는지 알고 있나?', desc: '이벤트 스트림과 Token 추적. 로그를 안 보면 뭐가 잘못됐는지 영원히 모른다', tag: '아키텍처' },
          ],
        },
        {
          id: 't-mcp',
          title: 'MCP 실전',
          desc: '도구 생태계의 양방향 연결: 소비, 제공과 자기구성',
          lessons: [
            { file: '9-30.html', title: 'MCP는 "도구 호출"만이 아니다', desc: '같은 프로토콜 두 방향: 남의 도구를 소비 vs 자신을 남에게 노출', tag: '개념' },
            { file: '9-31.html', title: '지연 연결: 안 쓰면 연결하지 마라', desc: '10개 MCP 서비스를 등록했는데, 시작 시 전부 연결? 아니면 필요할 때 연결?', tag: '실전' },
            { file: '9-32.html', title: 'AI가 직접 도구를 추가하다', desc: 'Agent가 런타임에 새 도구가 필요하다고 판단하고, 직접 MCP 연결 설정 — 자기구성 사고', tag: '심화' },
          ],
        },
        {
          id: 't-summary3',
          title: '실전 마무리',
          desc: '전경 복습과 핵심 인사이트',
          lessons: [
            { file: '9-summary.html', title: '실전 전경도', desc: '이미지 생성, 루프, 기억, Prompt, 다중 Agent, 보안, MCP — 한 장의 그림으로 연결', tag: '요약' },
            { file: '9-final.html', title: '채팅 래퍼 vs 진정한 Agent 제품', desc: '같은 Loop로 N개 시나리오를 지원, 차이는 코드가 아니라 제품 의사결정에 있다', tag: '마무리' },
          ],
        },
        {
          id: 't-build3',
          title: '지금 할 수 있는 것',
          desc: '이 장을 배우면, 오늘 바로 손댈 수 있는 것',
          lessons: [
            { file: 'build-3.html', title: '첫 번째 진짜 도구를 연결하기', desc: '도구 호출 루프 4단계 데모; 세 단계 과제: 도구 고르기, 세 줄 설명 쓰기, 루프를 뚫고 일부러 한 번 깨뜨리기', tag: '실전' },
          ],
        },
        {
          id: 't-interview3',
          title: '이렇게 물어볼 것이다',
          desc: '면접관, 상사, 기술 동료가 이 장의 내용을 어떻게 검증하는가',
          lessons: [
            { file: 'interview-3.html', title: '실전 · Demo에서 제품으로 · 30가지 핵심 질문', desc: '각 문제에 출제 의도, 답변 프레임워크, 가산점 포함: Demo에서 런칭까지의 갭 / Agent 멈춤 / 컨텍스트 압축 / 기억 설계 / 다중 Agent / MCP / 비용 청구서', tag: '면접' },
          ],
        },
      ],
    },
    {
      id: 'p4',
      num: '4부',
      title: '심화 · AI 엔지니어링 설계 패턴',
      desc: 'Anthropic이 공개한 Claude Code 소스코드와 엔지니어링 블로그를 기반으로, 프로덕션급 Agent의 설계 패턴을 심층 분석: 컨텍스트 엔지니어링, 도구 설계, 평가 방법론, 장시간 실행 Agent, 뇌-손 분리 아키텍처와 보안 컨테이너화.',
      color: '#dc2626',
      topics: [
        {
          id: 't-agent-patterns',
          title: 'Agent 설계 패턴',
          desc: 'Anthropic이 공식 정리한 5가지 Workflow + 자율 Agent',
          lessons: [
            { file: '10-1.html', title: 'Workflow vs Agent: 먼저 뭘 원하는지 정하라', desc: '미리 정의된 프로세스 vs 모델 자율 결정, Anthropic이 정의한 두 가지 Agent 시스템', tag: '설계패턴' },
            { file: '10-2.html', title: '5가지 Workflow 패턴', desc: 'Prompt Chaining / Routing / Parallelization / Orchestrator-Workers / Evaluator-Optimizer', tag: '설계패턴' },
            { file: '10-3.html', title: 'Prompt 엔지니어링에서 컨텍스트 엔지니어링으로', desc: '매 추론 라운드에서 최적의 Token 조합을 큐레이팅, 프롬프트 작성은 그중 한 요소일 뿐', tag: '방법론' },
            { file: '10-4.html', title: '컨텍스트의 세 가지 무기', desc: 'Compaction, 구조화 노트, 서브 Agent 아키텍처 — 장시간 작업의 세 가지 컨텍스트 관리 전략', tag: '방법론' },
          ],
        },
        {
          id: 't-tool-design',
          title: '도구 설계의 기술',
          desc: 'Agent를 위한 좋은 도구 작성법: 네이밍, 설명, 파라미터와 ACI',
          lessons: [
            { file: '10-5.html', title: 'ACI: Agent-Computer Interface', desc: '도구는 Agent와 세계 사이의 계약. 인간-컴퓨터 인터페이스를 설계하듯 Agent 인터페이스를 설계하라', tag: '설계패턴' },
            { file: '10-6.html', title: 'Think Tool: AI에게 먼저 생각하게 하기', desc: '복잡한 도구 체인에서 Agent에게 멈춰서 생각할 공간 부여, τ-bench 성능 54% 향상', tag: '심화' },
            { file: '10-7.html', title: 'Agent로 Agent의 도구를 최적화하기', desc: 'Claude Code 실전: AI가 도구 설명을 작성, 평가를 실행, 자동 반복 최적화', tag: '실전' },
          ],
        },
        {
          id: 't-evals',
          title: 'Agent 평가',
          desc: '평가 없이는 나체 달리기. Agent 품질을 체계적으로 검증하는 법',
          lessons: [
            { file: '10-8.html', title: '왜 평가가 훈련보다 중요한가', desc: '평가 없이는 버그 하나 고치면서 세 개를 만든다. Anthropic의 Eval 방법론', tag: '방법론' },
            { file: '10-9.html', title: '3가지 Grader: 코드, 모델, 수동', desc: '정적 단언 vs LLM-as-Judge vs 수동 교정, 각각 어떤 시나리오에 적합한가', tag: '실전' },
            { file: '10-10.html', title: '평가의 함정: 노이즈, 치팅과 퇴화', desc: '인프라 노이즈가 6pp 오차 유발, 모델이 시험을 알아채고, Prompt 변경이 Eval 3% 하락 가능', tag: '사례' },
          ],
        },
        {
          id: 't-long-running',
          title: '장시간 실행 Agent',
          desc: '한 라운드 대화에서 수 시간 실행까지: Harness의 설계와 진화',
          lessons: [
            { file: '10-11.html', title: '왜 Agent가 장시간 작업을 못 하는가', desc: '한 번에 너무 많이, 끝나면 바로 종료 — 두 가지 전형적 실패 패턴', tag: '사례' },
            { file: '10-12.html', title: 'Initializer + Coding Agent', desc: '초기화 Agent가 환경 설정, 코딩 Agent가 점진적 진행 — 이중 역할 Harness 설계', tag: '설계패턴' },
            { file: '10-13.html', title: 'Managed Agent: 뇌-손 분리', desc: '사고와 실행을 다른 프로세스로 분리, 운영체제처럼 Agent를 가상화', tag: '아키텍처' },
            { file: '10-14.html', title: 'Session ≠ Context Window', desc: '세션 로그는 영속적 이벤트 스트림, 컨텍스트 윈도우는 임시 작업 기억 — 둘은 반드시 분리', tag: '심화' },
          ],
        },
        {
          id: 't-security-advanced',
          title: '보안과 컨테이너화',
          desc: 'Anthropic이 제품에서 Claude를 어떻게 제약하는가',
          lessons: [
            { file: '10-15.html', title: '3가지 리스크: 남용, 제어 불능, 외부 공격', desc: 'Anthropic의 보안 분류 프레임워크: 사용자 남용 / 모델 Misbehavior / Prompt Injection', tag: '보안' },
            { file: '10-16.html', title: '샌드박스와 자격증명 격리', desc: '생성된 코드와 비밀키는 절대 같은 컨테이너에 있지 않다. 구조적 보안이 프롬프트 의존보다 확실', tag: '보안' },
          ],
        },
        {
          id: 't-summary4',
          title: '심화 마무리',
          desc: '전경 복습과 핵심 설계 원칙',
          lessons: [
            { file: '10-17.html', title: 'Contextual Retrieval: 더 나은 RAG', desc: '검색 전 Chunk에 컨텍스트를 추가, Anthropic의 RAG 업그레이드 방안', tag: '심화' },
            { file: '10-summary.html', title: '심화 전경도', desc: '설계 패턴, 도구, 평가, 장시간 실행, 보안 — 한 장의 그림으로 연결', tag: '요약' },
            { file: '10-final.html', title: '가장 단순하고 작동하는 것을 만들어라', desc: 'Anthropic의 핵심 엔지니어링 철학: "Do the simplest thing that works"', tag: '마무리' },
          ],
        },
        {
          id: 't-build4',
          title: '지금 할 수 있는 것',
          desc: '이 장을 배우면, 오늘 바로 손댈 수 있는 것',
          lessons: [
            { file: 'build-4.html', title: '첫 평가 세트를 만들기', desc: '변경 전후 점수 비교 데모; 세 단계 과제: 실제 케이스 열 개 모으기, 통과 기준을 쓰고 베이스라인 돌리기, 점수로 말하기', tag: '실전' },
          ],
        },
        {
          id: 't-interview4',
          title: '이렇게 물어볼 것이다',
          desc: '면접관, 상사, 기술 동료가 이 장의 내용을 어떻게 검증하는가',
          lessons: [
            { file: 'interview-4.html', title: 'AI 엔지니어링 설계 패턴 · 30가지 핵심 질문', desc: '각 문제에 출제 의도, 답변 프레임워크, 가산점 포함: 컨텍스트 엔지니어링 / 장시간 작업 / grep vs RAG / ACI 도구 설계 / 평가 인프라 / LLM-as-Judge / 샌드박스 격리', tag: '면접' },
          ],
        },
      ],
    },
    {
      id: 'p5',
      num: '5부',
      title: 'Harness와 자기 개선',
      desc: 'Harness 설계 패턴에서 재귀적 자기 개선까지: Agent가 자신의 스캐폴딩을 최적화하기 시작할 때, AI 엔지니어링은 새로운 단계에 진입합니다. Lilian Weng의 2026년 최신 서베이 기반.',
      color: '#7c3aed',
      topics: [
        {
          id: 't-harness-intro',
          title: 'Harness 개론',
          desc: '재귀적 자기 개선과 Harness의 핵심 위치',
          lessons: [
            { file: '11-1.html', title: '스캐폴딩에서 자기 개선 시스템으로', desc: '재귀적 자기 개선(RSI)의 역사와 최근 경로: 모델이 Harness를 개선, 가중치를 직접 수정하지 않음', tag: '프론티어' },
            { file: '11-2.html', title: 'Harness 3대 설계 패턴', desc: '워크플로 자동화 / 파일 시스템 영속 기억 / 서브 Agent와 백그라운드 작업 — Agent 런타임의 세 기둥', tag: '설계패턴' },
          ],
        },
        {
          id: 't-harness-optimize',
          title: 'Harness 최적화',
          desc: '컨텍스트 엔지니어링에서 워크플로 자동 탐색까지',
          lessons: [
            { file: '11-3.html', title: '컨텍스트 엔지니어링: 수동에서 자동 진화로', desc: 'ACE → MCE → Meta-Harness: 최적화 대상이 prompt 내용에서 관리 메커니즘 코드로 진화', tag: '프론티어' },
            { file: '11-4.html', title: '워크플로 설계: 수동에서 자동 탐색으로', desc: 'AI Scientist / ADAS / AFlow, MCTS와 Meta-Agent로 최적 워크플로 탐색', tag: '프론티어' },
          ],
        },
        {
          id: 't-harness-self',
          title: '자기 개선과 진화',
          desc: 'Harness가 자기 자신을 개선하고, 진화 알고리즘으로 설계 공간을 탐색',
          lessons: [
            { file: '11-5.html', title: 'Harness가 스스로를 개선하게 하기', desc: 'STOP 재귀 개선기 + Self-Harness의 propose-evaluate-accept 루프', tag: '프론티어' },
            { file: '11-6.html', title: '진화 탐색: 가장 강한 Harness만 생존', desc: 'AlphaEvolve / DGM / SIA, 진화 알고리즘으로 광대한 설계 공간에서 최적 Agent 발견', tag: '프론티어' },
          ],
        },
        {
          id: 't-harness-future',
          title: '미래와 성찰',
          desc: '자기 개선이 직면한 근본적 도전',
          lessons: [
            { file: '11-7.html', title: '미래 도전: 자기 개선의 7가지 관문', desc: '약한 평가기 / 기억 퇴화 / 보상 해킹 / 다양성 붕괴 / 인간의 역할 — 완전한 RSI로 가는 병목', tag: '프론티어' },
          ],
        },
        {
          id: 't-build5',
          title: '지금 할 수 있는 것',
          desc: '이 장을 배우면, 오늘 바로 손댈 수 있는 것',
          lessons: [
            { file: 'build-5.html', title: '장거리 규칙 세 가지를 세우기', desc: '컨텍스트 점유 곡선과 압축 임계값 데모; 세 단계 과제: 기억을 잃는 턴 찾기, 규칙 세 가지 쓰기, 디스크에 남기고 다시 읽어오기', tag: '실전' },
          ],
        },
        {
          id: 't-interview5',
          title: '이렇게 물어볼 것이다',
          desc: '면접관, 상사, 기술 동료가 이 장의 내용을 어떻게 검증하는가',
          lessons: [
            { file: 'interview-5.html', title: 'Harness와 자기 개선 · 30가지 핵심 질문', desc: '각 문제에 출제 의도, 답변 프레임워크, 가산점 포함: Harness 본질 / 설계 패턴 / 컨텍스트 자동 진화 / 보상 해킹 / RSI 진전과 리스크', tag: '면접' },
          ],
        },
      ],
    },
    {
      id: 'p6',
      num: '6부',
      title: 'Grok Build 해부: Rust로 작성된 프로덕션급 Coding Agent',
      desc: 'xAI가 공개한 Grok Build Rust 소스코드를 기반으로, 79개 Workspace 멤버를 따라 Coding Agent의 런타임, 도구, 기억, 보안과 확장 설계를 분석합니다.',
      color: '#f59e0b',
      topics: [
        {
          id: 't-grok-map',
          title: '시스템 맵',
          desc: '79개 Workspace 멤버의 계층 아키텍처와 Rust 기술 선택',
          lessons: [
            { file: '12-1.html', title: '79개 Workspace 멤버가 어떻게 하나의 제품을 이루는가', desc: '엔트리, Agent 런타임, 도구, 인프라로 Cargo Workspace의 실제 계층 복원', tag: '아키텍처' },
            { file: '12-2.html', title: 'Rust 기술 선택: 사실과 추론', desc: '소스코드에서 검증 가능한 사실로부터, 타입 시스템·동시성 안전·배포 방식이 가져오는 엔지니어링 트레이드오프 분석', tag: '개념' },
            { file: '12-3.html', title: '실제 main()에서 첫 번째 샘플링까지', desc: '엔트리, 세션 생성, 프롬프트 렌더링, 모델 샘플링과 스트리밍 반환의 완전한 호출 체인 추적', tag: '심화' },
          ],
        },
        {
          id: 't-grok-core',
          title: 'Agent 핵심 루프',
          desc: 'Session Actor, Compaction과 System Prompt',
          lessons: [
            { file: '12-4.html', title: 'Session Actor: 스레드, 상태와 취소 경계', desc: '세션 상태 소유권, 메시지 전달, 백그라운드 작업과 CancellationToken 중단 경로 정리', tag: '심화' },
            { file: '12-5.html', title: 'Compaction: 85% 임계값과 선택적 two-pass', desc: '자동 압축 임계값, memory flush, two-pass와 타임아웃 예산의 실제 설정 확인', tag: '인터랙티브' },
            { file: '12-6.html', title: 'PromptContext: 검사 가능한 렌더링 입력', desc: '직렬화 가능 컨텍스트, TemplateOverride와 TemplateRenderer의 템플릿 렌더링 경계 분해', tag: '개념' },
          ],
        },
        {
          id: 't-grok-tools',
          title: '도구 시스템',
          desc: '레지스트리, 분류학과 내장 도구 세트',
          lessons: [
            { file: '12-7.html', title: '프로세스 레벨 외부 Toolset Preset 레지스트리', desc: '빌드 함수, Public과 Internal 가시성, 그리고 후기 등록이 후속 해석에 미치는 영향 이해', tag: '아키텍처' },
            { file: '12-8.html', title: 'ToolKind가 제공하는 기본 읽기 전용 시맨틱', desc: '열거형과 is_read_only()로 읽기 전용 기본값과 능력 필터링 경계 추적', tag: '설계패턴' },
            { file: '12-9.html', title: '구현 패밀리, 레지스트리와 동적 MCP', desc: '내장 도구 구현 패밀리, 정적 레지스트리와 런타임 발견 MCP 도구 구분', tag: '심화' },
            { file: '12-10.html', title: 'Canonical input은 안정적 투영이다', desc: 'CanonicalToolMeta와 입력 투영으로 교차 도구 구현의 안정적 계약 설명', tag: '사례' },
          ],
        },
        {
          id: 't-grok-memory',
          title: '컨텍스트와 기억',
          desc: 'Token 추정, 하이브리드 검색과 Dream 메커니즘',
          lessons: [
            { file: '12-11.html', title: '추정, 백분율과 엄격한 임계값', desc: 'Token 추정, 사용률 계산과 exceeds_threshold의 엄격한 비교 시맨틱 구분', tag: '인터랙티브' },
            { file: '12-12.html', title: '파일 변경에서 하이브리드 정렬까지', desc: 'FTS, 벡터 검색, 시간 감쇠와 MMR 재정렬로 구성된 기억 리콜 파이프라인 추적', tag: '심화' },
            { file: '12-13.html', title: 'Dream의 실제 메커니즘', desc: '유휴 게이팅, DreamLock, 백그라운드 정리와 기억 되쓰기의 실제 경계 확인', tag: '프론티어' },
          ],
        },
        {
          id: 't-grok-subagent',
          title: '서브 Agent와 다중 Agent',
          desc: 'Agent 정의 + Persona 오버레이의 2층 체계',
          lessons: [
            { file: '12-14.html', title: 'AgentDefinition과 Persona는 어떻게 병합되는가', desc: 'Agent 정의, Persona 오버라이드와 최종 세션 행동의 병합 순서 분해', tag: '설계패턴' },
            { file: '12-15.html', title: '서브 Agent의 4가지 격리 차원', desc: '컨텍스트 소스, 복구 모드, 작업 트리와 태스크 상태로 격리 경계 분석', tag: '심화' },
            { file: '12-16.html', title: '다중 Agent의 조직 방식', desc: '공개 증거 기반으로 Agent, Persona, 코디네이터와 병렬 태스크의 조직 방식 비교', tag: '사례' },
          ],
        },
        {
          id: 't-grok-security',
          title: '권한, 샌드박스와 보안',
          desc: '커널 레벨 샌드박스, 권한 진화와 Hooks 인터셉트',
          lessons: [
            { file: '12-17.html', title: '5가지 샌드박스 Profile', desc: 'workspace, devbox, read-only, strict, off와 커스텀 Profile의 경계 비교', tag: '보안' },
            { file: '12-18.html', title: '도구 요청에서 제한된 실행까지', desc: 'ToolKind, 권한 결정, 플랫폼 샌드박스를 따라 완전한 인가 체인 추적', tag: '보안' },
            { file: '12-19.html', title: 'Hooks: 명시적 deny만 차단한다', desc: '생명주기 이벤트, matcher, PreToolUse 차단과 장애 시 fail-open 시맨틱 확인', tag: '실전' },
          ],
        },
        {
          id: 't-grok-eco',
          title: 'MCP와 생태계',
          desc: 'MCP 클라이언트, OAuth, 연결 복구와 플러그인 신뢰',
          lessons: [
            { file: '12-20.html', title: 'MCP 연결, 발견과 복구', desc: '클라이언트 역할 확인, OAuth·도구 네이밍·능력 발견·상태 병합·재연결 분해', tag: '심화' },
            { file: '12-21.html', title: 'Plugin Marketplace의 발견과 신뢰', desc: '디렉토리, 설치, 런타임 발견, 활성화 상태와 플러그인 루트 신뢰 구분', tag: '아키텍처' },
          ],
        },
        {
          id: 't-grok-beyond',
          title: '소스코드를 넘어서',
          desc: '완전한 대조, 경험 교훈과 설계 시사점',
          lessons: [
            { file: '12-22.html', title: 'Grok Build와 Claude Code 근거 기반 대조', desc: '소스코드, 레포 문서와 공개 제품 행동으로 다차원 비교 완성, 미확인 항목 유지', tag: '요약' },
            { file: '12-23.html', title: 'Grok Build 엔지니어링 복기와 증거 경계', desc: '타입, 상태 머신, 테스트와 레포 정책으로 엔지니어링 장점과 적용 한계 복기', tag: '마무리' },
            { file: '12-24.html', title: 'Coding Agent 설계 워크벤치', desc: '9개 시스템 차원을 중심으로 아키텍처 결정, 장애 경로, 검증 방식과 수료 성과 산출', tag: '마무리' },
          ],
        },
        {
          id: 't-interview6',
          title: '이렇게 물어볼 것이다',
          desc: '면접관, 상사, 기술 동료가 이 장의 내용을 어떻게 검증하는가',
          lessons: [
            { file: 'interview-6.html', title: 'Grok Build 해부 · 30가지 핵심 질문', desc: '각 문제에 출제 의도, 답변 프레임워크, 가산점 포함: 런타임 루프 / Compaction / 도구 권한 / 기억 검색 / 샌드박스 보안 / MCP 통합', tag: '면접' },
          ],
        },
      ],
    },
    {
      id: 'p7',
      num: '7부',
      title: 'Vibe Coding 방법론',
      desc: '저자의 오픈소스 xs_vibe_rules 저장소에서 실제 프로젝트를 통해 침전된 AI 협업 규범을 과정으로 분해: 프로세스 제어, 품질 마지노선, 문서 축적, 보안 게이트와 작문 스타일 — AI가 빠르게 쓰되 안정적으로 쓰게 합니다.',
      color: '#0d9488',
      topics: [
        {
          id: 't-vibe-why',
          title: '이념과 입문',
          desc: 'AI가 빠르게 쓰면 오히려 왜 망치기 쉬운지, Rules가 가장 안정적인 제약 방식인 이유',
          lessons: [
            { file: 'vibe-1.html', title: '왜 AI에게 규칙을 세워야 하는가', desc: 'Vibe Coding의 네 가지 전형적 사고와 Rule이 가장 안정적인 컨텍스트 주입 방식인 원리', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-vibe-flow',
          title: '프로세스 제어',
          desc: 'AI가 작업하기 전에 인간 체크포인트를 설정',
          lessons: [
            { file: 'vibe-2.html', title: '4단계 프로세스: 복창, PRD, 확인, 코딩', desc: '요구사항 확인 단계를 인간-AI 협업에 적용, 대량 수정은 먼저 계획 나열, 새 기능은 먼저 중복 확인', tag: '인터랙티브' },
            { file: 'vibe-3.html', title: 'PlayGround: 컴포넌트의 피팅룸', desc: '간소화된 Storybook 사고: 먼저 독립 demo를 만들어 조정 후 통합, demo는 추가만 하고 삭제하지 않음', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-vibe-quality',
          title: '품질 마지노선',
          desc: '주석, 디버깅과 완전한 구현의 경성 요구',
          lessons: [
            { file: 'vibe-3b.html', title: '스타일 수렴: 버튼 하나에 CSS 여덟 벌은 그만', desc: '스타일이 왜 증식하는지, 디자인 토큰으로 어떻게 나눠 걷어내는지, 어떤 차이는 남겨야 하는지', tag: '인터랙티브' },
            { file: 'vibe-4.html', title: '주석 3요소와 코드 보호', desc: '배경, 설계 의도, 핵심 제약 세 가지 필수; 코드와 의존성을 무단 삭제 금지', tag: '인터랙티브' },
            { file: 'vibe-5.html', title: '디버깅 철칙: 먼저 Log, 그 다음 코드 수정', desc: '추측성 수정 금지, 수정 전 세 가지 질문에 답하기, 수정 후 영향 범위 선언', tag: '인터랙티브' },
            { file: 'vibe-6.html', title: '분할 납품 불가', desc: 'AI가 "먼저 간단한 버전"을 좋아하는 진짜 이유와 이 패턴을 깨야 하는 이유', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-vibe-docs',
          title: '문서와 축적',
          desc: '결정이 대화와 시간을 넘어 남도록 하기',
          lessons: [
            { file: 'vibe-7.html', title: '3가지 문서와 방법론 축적', desc: 'FEATURES / CHANGELOG / RELEASE_NOTES 각각 하나의 차원 담당, METHODOLOGY가 제품 감각 축적', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-vibe-env',
          title: '환경과 보안',
          desc: '환경 사실을 고정하고, 파괴적 작업에 게이트 설치',
          lessons: [
            { file: 'vibe-8.html', title: '환경 사실을 Rule에 적기', desc: '모델 설정, 기술 스택 고정, 데이터 포맷 삼분법과 isComposing 같은 필수 함정', tag: '인터랙티브' },
            { file: 'vibe-9.html', title: '파괴적 작업의 3중 게이트', desc: 'DB 먼저 백업, 비가역 작업은 먼저 롤백 방안, 배포 전 diff 리뷰', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-vibe-comm',
          title: '커뮤니케이션과 작문',
          desc: '컨텍스트 드리프트 방지, AI 문체 제거',
          lessons: [
            { file: 'vibe-10.html', title: '긴 대화 앵커링과 작문 규범', desc: '10턴 초과 시 강제 목표 복창; 금지 문체 목록으로 문안에서 AI 냄새 제거', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-vibe-final',
          title: '전문 마무리',
          desc: '이 규칙을 자기 것으로 개조하기',
          lessons: [
            { file: 'vibe-final.html', title: '규칙의 가치: 매 조항이 실제 문제를 해결한다', desc: '전경도 복습 + 사용법 + 자기 프로젝트에 적용하는 네 가지 액션', tag: '마무리' },
          ],
        },
        {
          id: 't-build6',
          title: '지금 할 수 있는 것',
          desc: '이 장을 배우면, 오늘 바로 손댈 수 있는 것',
          lessons: [
            { file: 'build-6.html', title: '당신만의 협업 규범을 남기기', desc: '4단계 프로세스 비교 데모; 세 단계 과제: 첫 번째 Rule 쓰기, 실제 요구로 프로세스 한 바퀴, 빌드 로그를 내보내 규범 v1로 정리', tag: '실전' },
          ],
        },
        {
          id: 't-interview7',
          title: '이렇게 물어볼 것이다',
          desc: '면접관, 상사, 기술 동료가 이 장의 내용을 어떻게 검증하는가',
          lessons: [
            { file: 'interview-7.html', title: 'Vibe Coding 방법론 · 30가지 핵심 질문', desc: '각 문제에 출제 의도, 답변 프레임워크, 가산점 포함: 왜 규칙을 세우는가 / 품질 책임 / 코드 머지 검수 / 분할 납품 거부 / 결정 축적 / 보안 게이트', tag: '면접' },
          ],
        },
      ],
    },
    {
      id: 'p-taste',
      num: '특별 파트',
      title: '미학 엔지니어링: AI가 감각 있는 결과물을 내게 하기',
      desc: '협업 흐름이 자리 잡은 뒤, 처음으로 걸리는 건 미학입니다. AI가 실행 허들을 무너뜨린 뒤, 누구나 10분이면 쓸 만한 것을 만들 수 있고, 「쓸 만함」 자체가 가치가 떨어지며 감각이 새로운 분수령이 됩니다. 이 장은 훈련 가능한 두 가지를 가르칩니다. 아름다움 알아보기 — 네 가지 손잡이(위계, 여백, 절제, 일관성)마다 A/B 찾기를 붙입니다. 미학을 AI에게 번역하기 — 미학 어휘표, UI 생성과 이미지 생성 프롬프트 쓰는 법, 레퍼런스 이미지와 레퍼런스 라이브러리. 타고난 「아름다움 창조」는 가르칠 수 없지만, 「어디가 이상한지 보는 눈」과 「원하는 걸 말로 하는 힘」은 연습하면 됩니다.',
      color: '#db2777',
      topics: [
        {
          id: 't-taste-why',
          title: '감각이 새로운 병목이 되다',
          desc: '실행 능력이 평준화된 뒤, 판단력이 비싸지기 시작합니다',
          lessons: [
            { file: 'taste-1.html', title: '실행은 공짜가 됐고, 판단력이 비싸지기 시작했습니다', desc: '누구나 10분이면 쓸 만한 것을 만들 수 있을 때, 「쓸 만함」은 가치가 떨어지기 시작합니다. 인터페이스 세 장에 먼저 직감으로 한 표를 던지고, 이 장을 마친 뒤 다시 투표해 보세요. 눈이 달라졌는지 확인해 보세요', tag: '인트로' },
            { file: 'taste-2.html', title: '「AI 티」는 어디서 오나', desc: '보라 그라데이션·프로스티드 글래스·둥근 카드 3종 세트: AI는 학습 데이터의 평균을 기본으로 내고, 평균은 곧 평범입니다. 전형적인 AI 생성 페이지에서 「AI 티」 특징을 짚어 모으면 원인이 드러납니다', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-taste-eye',
          title: '아름다움을 알아보는 네 가지 손잡이',
          desc: '위계, 여백, 절제, 일관성. 각각에 찾기를 붙입니다',
          lessons: [
            { file: 'taste-3.html', title: '위계: 한 화면에 주인공은 하나', desc: '전부 강조하면 아무것도 강조하지 않은 것과 같아요. 글자 크기·굵기·색상 세 레버가 주의력을 어떻게 나누는지, A/B 찾기로 주인공을 가로채는 화면을 잡아요', tag: '인터랙티브' },
            { file: 'taste-4.html', title: '여백과 정렬: 못생긴 대부분은 간격 탓', desc: '어디가 못생겼는지 모를 때, 대개 간격 탓이에요. 슬라이더로 숨 쉴 여유가 어디서 오는지 보고, 8pt 그리드라는 게으른 신기를 배워요', tag: '인터랙티브' },
            { file: 'taste-5.html', title: '절제: 색과 서체에 예산을 잡으세요', desc: '주색 하나, 굵기 두 단계, 둥근 모서리 한 세트. 색을 더해 연말 행사 포스터처럼 망가뜨린 뒤, 한 번에 빼기로 고급감이 돌아오는 순간을 느껴 보세요', tag: '인터랙티브' },
            { file: 'taste-6.html', title: '일관성: 시스템감은 어디서 오나', desc: '예쁜 사이트 뒤에는 디자인 변수가 있어요. 이 사이트의 실제 CSS를 열어 보세요: 컨트롤 높이·둥근 모서리·색이 왜 전 사이트 한 단계인지, 한곳만 바꿔도 전체가 따라갑니다', tag: '사례' },
          ],
        },
        {
          id: 't-taste-speak',
          title: '미학을 AI에게 번역하기',
          desc: '미학 어휘량이 AI 산출 품질을 가릅니다',
          lessons: [
            { file: 'taste-7.html', title: '「예쁜」걸 말하는 백 가지 구체적 표현', desc: '정보 밀도, 시각적 노이즈, 숨 쉴 여유, 대비 위계… 미학 어휘를 눌러 뜻과 좋은/나쁜 예를 보세요. 이름을 말할 수 있어야 AI를 지휘할 수 있어요', tag: '인터랙티브' },
            { file: 'taste-8.html', title: 'UI 생성: 형용사에서 스펙으로', desc: '「예쁜 페이지 만들어 줘」와 「Linear의 정보 밀도를 레퍼런스하고, 주색은 하나만」은 한 단계가 달라요. 프롬프트 3단계 산출물을 바로 비교해 보세요', tag: '실전' },
            { file: 'taste-9.html', title: '이미지 생성: 구도·빛과 그림자·색의 언어', desc: '이미지 프롬프트의 미학 3종 세트: 구도, 빛과 그림자, 색. 비교 이미지 3세트로 직관을 만들고, 후보 4장 중 맞는 한 장을 고르세요', tag: '실전' },
          ],
        },
        {
          id: 't-taste-library',
          title: '나만의 레퍼런스 라이브러리 만들기',
          desc: '볼 줄 알게 된 다음, AI가 당신의 레퍼런스를 보고 일하게 하세요',
          lessons: [
            { file: 'taste-10.html', title: '디자인을 제대로 봤다고 할 수 있으려면', desc: '사이트 백 개 북마크는 소용없어요. 순서대로 분해하세요: 먼저 위계, 그다음 간격, 마지막에 색. 이 흐름으로 좋은 디자인을 그 자리에서 해부해 보세요', tag: '방법' },
            { file: 'taste-11.html', title: '레퍼런스를 AI에 넣어 주기', desc: '입으로만 스타일을 설명하면 너무 비효율적이에요. 레퍼런스 이미지·스타일 설명·디자인 변수의 쓰임과 템플릿으로, AI가 당신의 레퍼런스 라이브러리를 보고 일하게 하세요', tag: '실전' },
          ],
        },
        {
          id: 't-taste-final',
          title: '특집 마무리',
          desc: '승인하기 전에, 리스트를 한 번 더',
          lessons: [
            { file: 'taste-final.html', title: '검수 체크리스트: 승인하기 전에 한 번 더', desc: 'AI가 넘긴 화면과 이미지를 체크리스트로 항목마다 확인해요. 위계, 간격, 절제, 일관성, 디테일. 체크할 수 있는 인터랙티브 리스트와 더 읽을거리가 있어요', tag: '마무리' },
          ],
        },
      ],
    },
    {
      id: 'p-ixd',
      num: '특별 파트',
      title: '인터랙션 엔지니어링: AI가 쓰기 좋은 걸 만들게 하기',
      desc: '보기 좋은지는 한눈에 알 수 있지만, 쓰기 좋은지는 써 봐야 압니다. 그래서 인터랙션의 병은 미학의 병보다 더 숨어 있어요. AI가 기본으로 넘기는 인터랙션은 「돌아간다」 수준입니다: 빈 상태는 텅 비고, 오류는 alert를 띄우고, 삭제는 확인이 없고, 다섯 단계 위저드는 한 단계도 빼지 않아요. 이 장은 미학 엔지니어링에 이어서 갑니다. 먼저 알아보는 법(상태 3종 세트, 오류 방지와 가역성, 흐름 절제, 관례), 그다음 인터페이스 디테일(컨트롤은 어떻게 고르고, 카피는 어떻게 쓰나), 마지막으로 인터랙션 요구를 AI에게 번역하기(목표 지향으로 요구사항을 말하고, 상태 기계와 경계를 프롬프트에 넣기). 소재는 인터랙션 디자인의 고전 교재 About Face 4에서 정리했습니다.',
      color: '#2563eb',
      topics: [
        {
          id: 't-ixd-why',
          title: '쓰기 좋음도 병목이에요',
          desc: '「돌아간다」와 「쓰기 좋음」 사이엔 챕터 하나가 있어요',
          lessons: [
            { file: 'ixd-1.html', title: '돌아가긴 하는데요. 그래서요?', desc: '「배려하는 소프트웨어」 특성 목록을 뒤집으면, 그게 AI 기본 인터랙션의 흠잡기 목록이 돼요. 잘 돌아가는 앱에서 배려 없는 지점 다섯 곳을 하나씩 눌러 보고, 평소에 어디까지 참아 왔는지 확인해 보세요', tag: '인트로' },
          ],
        },
        {
          id: 't-ixd-spot',
          title: '좋은 인터랙션을 알아보는 네 가지 손잡이',
          desc: '상태, 오류 방지, 흐름, 관례',
          lessons: [
            { file: 'ixd-2.html', title: '상태 3종 세트: 로딩, 빈 상태, 오류 상태', desc: 'UI의 세 가지 비정상 순간이야말로 경험의 분수령이에요. 빈 상태는 다음 단계를 가르치고, 로딩은 진행을 보고하고, 오류는 사람 말로 퇴로를 줘야 해요. A/B 대결 세 판을 직접 골라 보세요', tag: '인터랙티브' },
            { file: 'ixd-3.html', title: '오류 방지와 가역성: 사용자가 겁내지 않고 누르게', desc: '사후 오류 알림보다 오류가 나지 않게; 되돌리기가 탐색을 안전하게 만들고, 확인 팝업은 가장 약한 오류 방지. 위험한 버튼 세 개를 직접 고쳐 보세요', tag: '인터랙티브' },
            { file: 'ixd-4.html', title: '흐름 절제: 단계가 늘수록 사람이 떨어져 나가요', desc: '목표를 직접 섬기지 않는 조작은 모두 부담. 다섯 단계 가입을 단계적으로 둘까지 자르며, 퍼널에 누가 남는지 보세요', tag: '인터랙티브' },
            { file: 'ixd-5.html', title: '관례: AI가 새로운 인터랙션을 만들지 않게 하세요', desc: '사용자는 관례로 소프트웨어를 씁니다. 한 번 배우면 어디서나 씁니다. 어느 컨트롤이 혁신을 가장하는지, 버튼처럼 생긴 것이 버튼이 아닌지 알아보세요', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-ixd-detail',
          title: '인터페이스 디테일',
          desc: '컨트롤은 어떻게 고르고, 카피는 어떻게 쓰나',
          lessons: [
            { file: 'ixd-6.html', title: '컨트롤을 잘 골랐나요: 라디오, 체크박스, 토글과 드롭다운', desc: '배타적으로 하나만 고를 때는 라디오 버튼, 여러 개 체크는 체크박스, 즉시 적용은 토글, 옵션이 한 화면을 넘을 때만 드롭다운. 장면 매칭 여섯과 프롬프트에 붙일 치트시트', tag: '인터랙티브' },
            { file: 'ixd-7.html', title: 'UI는 말한다: 사용자는 카피를 어떻게 읽나', desc: '「이 3개 삭제」가 「확인」보다 정직해요. 버튼 동사는 결과를 말하고, 라벨은 사용자 말을 쓰고, DB 필드명을 들이밀지 마세요. 게으른 버튼 다섯 개를 직접 고쳐 보세요', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-ixd-translate',
          title: '인터랙션을 AI에게 번역하기',
          desc: '목표 지향 + 상태 기계, 그래야 AI가 원하는 걸 알아요',
          lessons: [
            { file: 'ixd-8.html', title: '목표 지향: 기능 목록이 아니라 목표로 요구사항을 말하세요', desc: 'AI에게 「샤오메이가 3분 안에 경비 정산을 끝내야 한다」가 「업로드·폼·버튼이 있어야 한다」보다 훨씬 나아요. 프롬프트 두 가지 대결 후, 기능 목록을 장면으로 고쳐 보세요', tag: '실전' },
            { file: 'ixd-9.html', title: '상태 기계와 경계를 프롬프트에 넣기', desc: '화면마다 상태를 빠짐없이 적고, 엣지 케이스를 못 박고, 오류 방지 요구를 분명히 쓰세요. 상태 기계 보완기 + 엣지 케이스 룰렛, 복사 가능한 검수 문구 템플릿까지', tag: '실전' },
          ],
        },
        {
          id: 't-ixd-final',
          title: '특집 마무리',
          desc: '출시 전 두 번째 장',
          lessons: [
            { file: 'ixd-final.html', title: '인터랙션 검수 체크리스트: 출시 전 두 번째 장', desc: '상태가 갖춰졌는지, 위험 작업이 되돌릴 수 있는지, 흐름을 더 줄일 수 있는지, 컨트롤을 맞게 골랐는지, 카피가 사람 말인지. 체크 가능한 인터랙티브 목록으로, 미학·심리학 두 장과 한 세트를 이뤄요', tag: '마무리' },
          ],
        },
      ],
    },
    {
      id: 'p-oss',
      num: '특별 파트',
      title: '오픈소스, 증류와 로컬 배포',
      desc: '뉴스에서는 매일 어떤 모델이 오픈소스로 공개됐다고 하는데, 실제로 공개되는 것은 무엇일까요? 이 장은 가중치에서 출발해 라이선스 한 장을 직접 읽어내는 법을 익히고, 각 업체가 오픈소스 뒤에 두고 있는 사업적 계산을 짚습니다. 이어서 모델이 큰 것에서 작은 것으로 가는 과정을 봅니다. 창발, 증류, 그리고 증류가 가져오는 동질화의 대가입니다. 마지막에는 직접 해봅니다. 내 컴퓨터가 얼마나 큰 모델을 돌릴 수 있는지 계산하고, Ollama나 LM Studio로 실제로 돌려봅니다.',
      color: '#4f46e5',
      topics: [
        {
          id: 't-oss-what',
          title: '오픈소스는 무엇을 여는 것인가',
          desc: '가중치, 라이선스와 각 업체의 사업적 계산',
          lessons: [
            { file: 'oss-1.html', title: '가중치란 무엇인가: 모델의 실력 전부', desc: '몇 달의 훈련이 마지막에 응축된 그 파일: 어떤 모습이고, 얼마나 크고, 가중치를 가진다는 것이 곧 통제권을 가진다는 뜻인 이유', tag: '개념' },
            { file: 'oss-2.html', title: '진짜 오픈소스 vs 가짜 오픈소스: 라이선스를 읽어내는 법', desc: '세 가지 질문으로 개방 수준 파악하기; 같은 자로 Qwen, Mistral, DeepSeek, Llama와 API만 제공하는 모델을 나란히 재보기', tag: '선택' },
            { file: 'oss-3.html', title: '오픈소스는 하나의 사업이다: 각 업체가 노리는 것', desc: '여섯 업체의 오픈소스 전략과 수익화 경로; 파생 모델 수가 다운로드 수보다 더 많은 것을 말해주는 이유', tag: '사례' },
          ],
        },
        {
          id: 't-oss-small',
          title: '대규모 모델을 작게 만드는 법',
          desc: '창발, 증류, 그리고 반드시 치러야 하는 대가',
          lessons: [
            { file: 'oss-4.html', title: '창발: 능력은 왜 갑자기 나타나는가', desc: '특정 규모 임계점을 넘으면 능력이 계단식으로 도약하는 현상, 그리고 이 현상에 아직 남아 있는 학술적 논란', tag: '개념' },
            { file: 'oss-5.html', title: '모델을 왜 작게 만드는가', desc: '비용, 속도, 온프레미스라는 세 가지 현실적 동기, 그리고 작은 모델이 해내지 못하는 일들', tag: '방법론' },
            { file: 'oss-6.html', title: '증류는 어떻게 하는가: 교사에서 학생으로', desc: '다섯 단계 흐름, 소프트 라벨과 온도 계수; DeepSeek-R1과 함께 공개된 여섯 개 증류 모델을 표본으로', tag: '사례' },
            { file: 'oss-7.html', title: '증류의 대가: 모델들이 점점 서로 닮아간다', desc: '말버릇, 서식 습관과 정체성 혼동의 통째 대물림; 다중 모델 교차 검증이 가짜일 수 있는 이유', tag: '심화' },
          ],
        },
        {
          id: 't-oss-local',
          title: '내 기기에서 직접 돌려보기',
          desc: '계산을 끝내고, 설치하기',
          lessons: [
            { file: 'oss-8.html', title: '내 컴퓨터는 얼마나 큰 모델을 돌릴 수 있나', desc: '그래픽카드나 Mac 모델을 선택해 실시간으로 결론 확인; VRAM 환산 공식, 양자화 구간과 MoE에서 VRAM과 속도가 어긋나는 현상', tag: '인터랙티브' },
            { file: 'oss-9.html', title: 'Ollama와 LM Studio 시작하기', desc: '설치부터 끝까지 돌려보는 전체 명령, 모델 태그를 읽는 법, 양자화 구간을 고르는 기준, 그리고 가장 흔한 함정 세 가지', tag: '실전' },
          ],
        },
      ],
    },
    {
      id: 'p-exam',
      num: '자가 테스트 센터',
      title: '7개 파트 자가 테스트 · 350문제',
      desc: '각 파트에 50문제 시험지 한 세트를 배치, 모두 해당 장 과정 내용을 기반으로 작성. 모의시험은 문제 풀에서 랜덤 25문제 추출, 선택지 셔플로 두 번 풀어도 중복 없음; 순서대로 풀면 즉시 판정 후 해설 전개. 전체 7장을 마치면 전체 종합 시험이 있어 350문제에서 장별 균등 추출 35문제, 장 간 개념 혼동 전문 치료. 틀린 포인트는 개인 센터의 약점에 기록, 보충 수업 링크 직접 제공.',
      color: '#7c3aed',
      exam: true,
      topics: [
        {
          id: 't-exam-entry',
          title: '이 7세트 시험지 사용법',
          desc: '두 가지 모드의 차이와 활용 가이드',
          lessons: [
            { file: 'exam.html', title: '자가 테스트 센터 · 7세트 파트별 시험', desc: '모의시험과 순서대로 풀기의 차이, 7세트 시험의 출제 범위, 성적과 약점 기록 방식', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-exam-base',
          title: '기초와 Harness',
          desc: '1부, 2부 자가 테스트',
          lessons: [
            { file: 'exam-1.html', title: '대규모 모델 기초 · 파트 테스트', desc: '50문제: 훈련 3단계 / Token과 토크나이징 / 파라미터 동결 / Temperature / 환각 4유형 / RAG와 4가지 완화 전략', tag: '인터랙티브' },
            { file: 'exam-2.html', title: 'AI Harness · 파트 테스트', desc: '50문제: 컨텍스트 오버플로 / Prompt 엔지니어링 / 인젝션 공방 / 도구 호출과 MCP / KV Cache와 비용 최적화', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-exam-build',
          title: '실전과 엔지니어링 설계',
          desc: '3부, 4부 자가 테스트',
          lessons: [
            { file: 'exam-3.html', title: '실전 · Demo에서 제품으로 · 파트 테스트', desc: '50문제: 이미지 생성 제품화 / Agent 멈춤과 바보 방지 / 컨텍스트 압축 / 장기 기억 / 다중 Agent / MCP 생태계', tag: '인터랙티브' },
            { file: 'exam-4.html', title: 'AI 엔지니어링 설계 패턴 · 파트 테스트', desc: '50문제: Workflow vs Agent / 컨텍스트 세 무기 / ACI 도구 설계 / 평가와 Grader / 샌드박스 격리', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-exam-deep',
          title: '프론티어, 소스코드와 방법론',
          desc: '5부, 6부, 7부 자가 테스트',
          lessons: [
            { file: 'exam-5.html', title: 'Harness와 자기 개선 · 파트 테스트', desc: '50문제: Harness 3대 패턴 / 컨텍스트 자동 진화 / 워크플로 탐색 / 재귀적 자기 개선과 7가지 관문', tag: '인터랙티브' },
            { file: 'exam-6.html', title: 'Grok Build 해부 · 파트 테스트', desc: '50문제: 런타임 루프 / Compaction / 도구 승인 / 이중 경로 기억 검색 / 5가지 샌드박스 / MCP 통합', tag: '인터랙티브' },
            { file: 'exam-7.html', title: 'Vibe Coding 방법론 · 파트 테스트', desc: '50문제: 프로세스 제어와 인간 체크포인트 / 품질 마지노선 / 분할 납품 거부 / 문서 축적 / 파괴적 작업 3중 게이트', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-exam-all',
          title: '전 과정 완료 후 도전',
          desc: '7장을 아우르는 종합 검증',
          lessons: [
            { file: 'exam-all.html', title: '전체 종합시험 · 7장에서 35문제', desc: '350문제에서 장별 균등 5문제씩 추출, 장 간 혼동하기 쉬운 개념 전문: 압축과 기억의 경계 / Workflow와 Agent 선택 / Harness와 프롬프트 엔지니어링의 관계', tag: '인터랙티브' },
          ],
        },
      ],
    },
    {
      id: 'p-seo',
      num: '보너스',
      title: '검색되기: SEO와 GEO',
      desc: '제품을 만들고 권리까지 확정했다면, 다음 문제는 아무도 찾지 못하는 게 아닐까입니다. 이 장은 두 가지를 다룹니다: SEO 최소 실행 체크리스트(크롤·이해·색인)와 새로운 전장인 GEO(ChatGPT, Perplexity, Kimi, Doubao가 질문에 답할 때 당신을 인용하게 만들기). 전 장에 걸쳐 샤오산 아카데미의 실제 개선 기록을 사례로 씁니다. 블랙햇은 가르치지 않고 순위도 약속하지 않으며, 직접 확인할 수 있는 체크리스트만 드립니다. 앞 두 레슨은 로그인 없이, 나머지는 로그인 후 학습합니다.',
      color: '#4338ca',
      bonus: true,
      topics: [
        {
          id: 't-seo-why',
          title: '먼저 발견된다는 것부터 짚기',
          desc: '완성했다고 사람이 오는 건 아닙니다',
          lessons: [
            { file: 'seo-1.html', title: '만들었는데, 왜 아무도 안 올까요', desc: '유입 경로 세 개는 성격이 각각 다릅니다: 검색 엔진은 사용자가 직접 찾고, AI 엔진은 사용자가 바로 묻고, 소셜은 남이 대신 말해 줍니다. 먼저 색인 퍼널을 돌려 보며 내 제품이 어느 층에서 막혔는지 찾으세요', tag: '인트로' },
          ],
        },
        {
          id: 't-seo-field',
          title: '두 개의 전장',
          desc: '검색 엔진은 링크를 주고, AI 엔진은 답을 줍니다',
          lessons: [
            { file: 'seo-2.html', title: 'SEO 최소 실행 체크리스트: 크롤·이해·색인', desc: '하기만 하면 효과가 나는 부분만 다룹니다: 한 페이지 한 주제, 사람 말로 쓴 title, JS 렌더링에만 의존하지 않는 본문, 그리고 sitemap과 웹마스터 도구 제출. 크롤 시뮬레이터로 두 상태를 직접 바꿔 보며 크롤러가 실제로 무엇을 받는지 확인하세요', tag: '실전' },
            { file: 'seo-3.html', title: 'GEO: AI 엔진이 당신을 인용하게 만들기', desc: '사용자는 더 이상 검색만 하지 않고 묻습니다. 자기완결 문단, FAQ 구조화 데이터, llms.txt와 신선도 신호까지 네 가지 레버에 각각 바로 만져 볼 교구를 붙였고, 알아 둘 만한 AI 크롤러 명부도 함께 실었습니다', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-seo-case',
          title: '실제 사례 하나 분해하기',
          desc: '이 사이트의 개선 기록을 해부대로 씁니다',
          lessons: [
            { file: 'seo-4.html', title: '이 사이트 분해: Google 색인 693페이지, Bing은 50페이지뿐', desc: '샤오산 아카데미의 2026년 8월 실제 감사 복기: sitemap이 영어·한국어 페이지를 전부 빠뜨렸고, Q&A 페이지는 FAQ 인용을 그냥 버렸고, 로그는 크롤러를 모두 폐기했습니다. 결함마다 어떻게 드러났고, 무엇을 바꿨고, 무엇으로 검수했는지 짚습니다', tag: '사례' },
          ],
        },
        {
          id: 't-seo-final',
          title: '우선순위와 마무리',
          desc: '혼자에게는 SEO 팀이 없고, 순서를 정하는 능력만 있습니다',
          lessons: [
            { file: 'seo-5.html', title: '혼자일 때의 우선순위: 검색되는 질문부터 쓰세요', desc: '기능을 쌓기 전에 사용자가 실제로 입력할 그 질문부터 쓰고, 실제 경험으로 신뢰를 얻으세요. 하지 말아야 할 목록도 이 레슨에 있습니다: 백링크 구매, 키워드 남용, AI로 대량 생성한 빈 페이지 중 무엇이 사이트를 죽이는지', tag: '실전' },
            { file: 'seo-final.html', title: '검색되기 검수 체크리스트: 출시 전에 한 번 더', desc: '체크할 수 있는 12개 항목: 한 페이지 한 주제, 서버에서 보이는 본문, sitemap, 한 줄 답변 블록, FAQ 구조화 데이터, llms.txt. 효과가 실제로 있었는지 확인하는 네 가지 측정 기준도 함께 담았습니다', tag: '마무리' },
          ],
        },
      ],
    },
    {
      id: 'p8',
      num: '보너스',
      title: '레이쥔 창업 수업',
      desc: '이것은 AI 과정이 아닌, 본 과정 완료 후 디저트입니다: 레이쥔의 창업 공개 수업 구술을 정리, 제품, 입소문, 자금 조달, 밸류에이션, 지분과 현금 흐름을 다룹니다. AI로 1인 기업(OPC)을 하려는 당신에게 "비즈니스 방법론"을 보충합니다. 전 장 로그인 없이 개방.',
      color: '#f97316',
      bonus: true,
      topics: [
        {
          id: 't-lei-mind',
          title: '창업자의 자기 수양',
          desc: '결심, 용기와 죽음을 각오한 심리 건설',
          lessons: [
            { file: 'lei-1.html', title: '누가 창업에 적합한가: 근거 없는 자신감', desc: '창업은 사람이 할 일이 아니다: 어려움에 맞서는 용기, 청사진을 그리는 능력, 킹산이 마이크로소프트에 16년간 맞선 신념', tag: '인트로' },
            { file: 'lei-2.html', title: '심리 준비: 첫날부터 죽는 법을 생각하라', desc: '창업 회사의 90%는 죽는다; 조용히 일하라, 빨리 죽으면 빨리 다시 시작, 자신에게 4년만 주어라. 위기감이 호신부', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-lei-dir',
          title: '방향과 출발점',
          desc: '좋아하는, 할 수 있는, 시장이 충분히 큰',
          lessons: [
            { file: 'lei-3.html', title: '방향 선택: Go Big Market', desc: '관심이 제1 동력이지만, 천장은 시장이 결정: 독바(毒霸)와 사바(詞覇), 듀오완과 YY의 두 번의 교훈', tag: '인터랙티브' },
            { file: 'lei-4.html', title: '작명: 출발선에서 이기기', desc: '상표 있고, 도메인 있고, 의미 좋고, 발음 좋고; 大米에서 小米까지의 네이밍 전 과정', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-lei-product',
          title: '제품과 입소문',
          desc: '집중, 극한, 입소문, 빠름',
          lessons: [
            { file: 'lei-5.html', title: '인터넷 7자 결', desc: '1년에 한 기종만 내는 자신감, 자기를 미치게 몰아가는 극한, 가격전에 하룻밤 만에 응전하는 빠름', tag: '인터랙티브' },
            { file: 'lei-6.html', title: '입소문의 본질은 기대 초과', desc: '금빛 찬란한 범선호텔이 왜 하이디라오에 지는가: 기대 관리, 그리고 정성은 사용자에게 전달된다', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-lei-money',
          title: '자금 조달과 투자',
          desc: '신용이 투자의 전부 전제',
          lessons: [
            { file: 'lei-7.html', title: '첫 돈: 주변 사람부터 시작', desc: '엔젤 투자의 본질은 지인 신용; 사업계획서는 그리 중요하지 않고, 한마디로 비즈니스를 설명하는 것이 중요', tag: '인터랙티브' },
            { file: 'lei-8.html', title: '투자 유치 타이밍: 돈이 있어야 돈을 모을 수 있다', desc: '돈을 절반 쓰면 투자 유치 시작; 투자자가 찾아오게 하라; VC는 왜 10배를 벌어야 하나', tag: '인터랙티브' },
            { file: 'lei-9.html', title: '밸류에이션의 기술: 투자 유치는 확신을 파는 것', desc: '먼저 투자할 리 없는 사람에게 가격을 물어라, 중간가에서 올려라; 가격을 높이면 세 가지 부작용', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-lei-equity',
          title: '지분과 공동 창업자',
          desc: '창업은 100%의 꿈을 나누는 퍼즐',
          lessons: [
            { file: 'lei-10.html', title: '지분은 퍼즐이다: 균등 분배 금지', desc: '50/50의 위험, 3인 각 1/3의 데드락; 극좌 극우 모두 안 됨, 팀에 반드시 권위자가 있어야', tag: '인터랙티브' },
            { file: 'lei-11.html', title: '공동 창업자: 먼저 꿈을 나누고, 그 다음 지분', desc: '지분 4년 잠금, 퇴출 메커니즘 미리 협의; 공동 창업자 교체 확률은 3분의 1', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-lei-ops',
          title: '경영 기본기',
          desc: '현금 흐름과 사람이 회사의 생명',
          lessons: [
            { file: 'lei-12.html', title: '현금 흐름과 보상 패키지', desc: '수입 없이 몇 달 버틸 수 있나; 급여·주식 자가 선택 패키지 제도로 보상 비교 제거', tag: '인터랙티브' },
          ],
        },
        {
          id: 't-lei-final',
          title: '전문 마무리',
          desc: '레이쥔의 수업을 OPC 액션 리스트로 변환',
          lessons: [
            { file: 'lei-final.html', title: 'AI 시대 1인 기업에 보내는 편지', desc: '22개 구술의 전경 복습, OPC 창업 자가 체크리스트로 매핑: 방향, 입소문, 현금, 지분', tag: '마무리' },
            { file: 'lei-test.html', title: '당신의 AI 창업 성공률을 테스트하라', desc: '12문제로 전 파트 핵심 판단을 종합, 성공률, 6차원 레이더 프로필과 보충 수업 처방 산출', tag: '인터랙티브' },
          ],
        },
      ],
    },
  ],
};

/* ── 태그 스타일 ── */
window.TAG_STYLE = {
  '인터랙티브': { bg: '#dcfce7', fg: '#15803d' },
  '애니메이션': { bg: '#dcfce7', fg: '#166534' },
  '개념':       { bg: '#fef9c3', fg: '#a16207' },
  '사례':       { bg: '#fef2f2', fg: '#dc2626' },
  '인트로':     { bg: '#fef2f2', fg: '#dc2626' },
  '보안':       { bg: '#fef2f2', fg: '#dc2626' },
  '반례':       { bg: '#fef2f2', fg: '#dc2626' },
  '실전':       { bg: '#dbeafe', fg: '#1d4ed8' },
  'PM 심화':    { bg: '#dbeafe', fg: '#1d4ed8' },
  '시스템설계': { bg: '#dbeafe', fg: '#1d4ed8' },
  '심화':       { bg: '#ffedd5', fg: '#ea580c' },
  '멀티모달':   { bg: '#fef3c7', fg: '#92400e' },
  '선택':       { bg: '#fef3c7', fg: '#d97706' },
  '프롬프트엔지니어링': { bg: '#e0f2fe', fg: '#0369a1' },
  'RAG':        { bg: '#f3e8ff', fg: '#7e22ce' },
  '아키텍처':   { bg: '#dcfce7', fg: '#166534' },
  '요약':       { bg: '#ede9fe', fg: '#6d28d9' },
  '마무리':     { bg: '#fef9c3', fg: '#a16207' },
  '팁':         { bg: '#ecfdf5', fg: '#065f46' },
  '설계패턴':   { bg: '#fef2f2', fg: '#dc2626' },
  '방법론':     { bg: '#fff7ed', fg: '#c2410c' },
  '규범':       { bg: '#ccfbf1', fg: '#0f766e' },
  '프론티어':   { bg: '#f3e8ff', fg: '#7c3aed' },
  '면접':       { bg: '#fee2e2', fg: '#b91c1c' },
};

/* ── 유틸: 모든 lesson을 평탄화, 이전/다음 내비게이션 용 ── */
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
