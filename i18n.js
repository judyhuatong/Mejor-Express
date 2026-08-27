(function (global) {
  var KEY = "mejor-lang";

  var STR = {
    en: {
      title: "Mejor · The lines",
      "nav.open": "Open the lines",
      "nav.home": "Home",
      "ticket.aria": "Mejor express rail ticket",
      "ticket.band": "Railway of majors · not transferable",
      "meta.class": "Class",
      "meta.classVal": "First look",
      "meta.stations": "Stations",
      "meta.stationsVal": "14 majors",
      "meta.valid": "Valid",
      "meta.validVal": "Until you choose",
      catch: "Mejor, your major explorer.",
      sub: "You know what you like. You don’t yet know which university major that points to. This site maps your likes to 14 majors, then shows real universities that actually teach them.",
      purpose: "You will leave with 2–3 majors worth a closer look — not a job, not a forever plan, and not a score of how ‘good’ you are.",
      "gloss.major.t": "Major",
      "gloss.major.p": "What you study at university — a subject path such as Computer Science, Psychology, or Architecture. It is not a job title, and it is not a forever label.",
      "gloss.major.p2": "This map has 14 majors. Open a station to see what the path actually contains, what people mix it up with, and what you can try this year — before you treat a name as a plan.",
      "gloss.job.t": "Job",
      "gloss.job.p": "What you might do later, such as software engineer, researcher, or designer. One major can lead to many jobs. Job names also change as industries change.",
      "gloss.job.p2": "Do not pick a major only because you like one job title. A first look here is meant to show range, not to lock you into a career.",
      "gloss.faculty.t": "Faculty",
      "gloss.faculty.p": "The school inside a university that teaches the major — Engineering, a Business School, Arts and Sciences, and so on. The same major can sit in different faculties at different universities.",
      "gloss.faculty.p2": "Names here come from official pages, so you can see where that major actually lives. Faculty is a door on campus, not a ranking, and not a job.",
      "from.label": "From",
      "from.val": "What you like",
      "to.label": "To",
      "to.val": "A university major",
      "line.logic": "Logic",
      "line.logicDef": "Math, code, machines",
      "line.care": "Care",
      "line.careDef": "Health, people, teaching",
      "line.world": "World",
      "line.worldDef": "Money, law, society",
      "line.make": "Make",
      "line.makeDef": "Buildings, art, design",
      "cta.play": "Start with Nova",
      "cta.skip": "Skip to the line map",
      fine: "Keep this ticket. 14 stations. Not a forever job.",
      "card1.t": "01 · Answer a few questions",
      "card1.p": "Nova asks how you work, which subjects you like, and where you already feel strong. Not an official test. Not a final stop.",
      "card2.t": "02 · Read the lines",
      "card2.p": "Matching majors light on four labeled lines. Each line has a colour and a meaning. Station names sit under the diamonds.",
      "card3.t": "03 · Open a station",
      "card3.p": "See what the major means, what not to mix it up with, what you can try this year, and which Top 15 universities actually teach it.",
      footer: "Mejor Express · a first look, not a verdict",
      tagline: "Four lines. Fourteen stations.",
      "stat.path": "Working style",
      "stat.likes": "Likes",
      "stat.strong": "Strong matches",
      "stat.locked": "Open station",
      none: "none",
      pulse: "Light the lines",
      clear: "Clear likes",
      retake: "Retake the questions",
      help: "How it works",
      tools: "Ticket tools",
      "likes.h2": "Choose what you like",
      "likes.span": "Select up to 4. A liked card flips to show a hint. A fifth tap will bounce — deselect one first.",
      hint: "Tap a like card to flip it. Matching stations turn green or gold. The line names stay as they are.",
      "hint.how": "The % is simple: how many of YOUR likes this major covers. Example: you pick Logic and Data. Computer Science has both → 100%, green.",
      "hint.live": "You picked {n} likes. Green = the major covers most of them (70%+). Gold = some (40–69%). Grey = few or none.",
      "key.hot": "Green = strong match",
      "key.mid": "Gold = partial match",
      "brief.idleT": "Open a station to see the useful bit",
      "brief.idle": "Tap a diamond on the lines, or a ticket in the list below.",
      "brief.idle2": "You’ll get: what you can try this year, what the major means, what not to mix it up with, and universities that actually teach it. First look, not a verdict.",
      "list.h2": "Station list",
      note: "These are overseas universities many Chinese students actually attend — not a world “best” list, and not mainland universities.",
      "note.kicker": "Which schools are these?",
      "nova.name": "Nova · guide",
      "quiz.hello": "Hello. I’m Nova, your guide for this explorer.",
      "quiz.helloSoft": "I’ll ask 8 personality questions, then a few about school. At the end you get 2–3 majors to look at. This is not an official MBTI test, and not a final label.",
      "quiz.step1": "Personality. 8 A / B questions about how you work.",
      "quiz.step2": "School. Two class-style questions, then subjects you like, then subjects you’re strong at.",
      "quiz.step3": "Then the line map with your likes already selected. Matching stations light up. You can still change likes.",
      "quiz.step4": "You walk away with names to research — not a career decision.",
      begin: "Begin",
      "skip.self": "Skip, I’ll choose likes myself",
      "quiz.noWrong": " · no wrong answers",
      "quiz.personalityN": "Personality ",
      of: " of ",
      back: "Go back",
      "skip.q": "Skip the questions",
      "school.lock": "Personality locked. Now school. This is about class, not personality.",
      "school.more": "One more class question. What you like and what you’re strong at are not always the same — that’s all right.",
      "school.n": "School ",
      "like.lead": "Select 1 or 2 subjects you enjoy — even if your grades do not match yet.",
      "strong.lead": "Now select 1 or 2 you are already strong at. They can be the same, or different.",
      "like.meta": "Like · choose 1–2",
      "strong.meta": "Strong · choose 1–2",
      "like.h2": "What subjects do you like?",
      "strong.h2": "What subjects are you strong at?",
      "next.strong": "Next: strengths",
      "next.results": "See my results",
      "weight.lead": "You like one thing and you’re strong at another. That’s common. What should I trust more for your map?",
      "weight.soft": "You can still change likes later.",
      "weight.a": "A · Trust what I like",
      "weight.aText": "Point me toward subjects that feel fun, even if I’m still growing.",
      "weight.b": "B · Trust what I’m strong at",
      "weight.bText": "Point me toward where my skills already work.",
      "weight.c": "C · Use both",
      "weight.cText": "Keep both signals. I’ll explore the mix.",
      "result.done": "Done. Your working type is",
      "result.soft": "This mixes your answers with what you like and what you’re strong at. It is not a final label.",
      "result.like": "You like",
      "result.strong": "You’re strong at",
      "result.novaLikes": "Likes Nova will select",
      "result.three": "Three majors from that mix. Choose one to open, or continue with the first. You can still change likes on the map.",
      "result.open": "Open the lines",
      "result.again": "Ask me again",
      "type.working": "Working style:",
      "type.like": "Like:",
      "type.strong": "Strong:",
      "type.change": "You can still change likes.",
      "fact.study": "What you study",
      "fact.need": "What it asks of you",
      "fact.future": "Where it can lead",
      "fact.mean": "What this major is",
      "fact.unlike": "Don’t mix it up with",
      "fact.now": "What you can try this year",
      "fact.watch": "Honest note",
      "unis.top": "All 15 schools. Faded names do not officially teach this major.",
      "unis.set": "Tap a school name. Faded = this school does not officially teach this major here.",
      "unis.line": "Tap a school name. Faded = this school does not officially teach this major here.",
      "unis.qs.t": "QS number",
      "unis.qs.p": "This is the world rank. It is not “best for you”.",
      "like.pick": "Tap to like",
      "like.picked": "Liked",
      "unis.hover.t": "Tap or hover a school",
      "unis.hover.p": "On a phone or iPad, tap a name. On a computer, point at it. You get a short intro. Bright chips show the faculty. Faded chips do not teach this major.",
      "unis.missing.t": "Faded school?",
      "unis.missing.p": "It is still listed, but faded, because it does not officially teach this major. Example: UIUC has no medical school here.",
      "unis.none": "Not taught here",
      "unis.none.tip": "Does not officially teach this major in this set.",
      "uni.why": "Why it is in this set",
      "uni.teaches": "Teaches this in",
      "sector.all": "All countries",
      "lock.strong": "Strong match",
      "lock.soft": "Partial match",
      "lock.peek": "A first look",
      "lock.ticket": "station ticket",
      "country.UK": "UK",
      "country.Australia": "Australia",
      "country.Canada": "Canada",
      "country.USA": "USA",
      "title.home": "Mejor · The lines",
      "title.explorer": "Mejor · Line map",
      "title.method": "Mejor · How this was made",
      "meta.home": "Mejor maps what you like to 14 university majors and real faculties. A first look for students aged 14–18 — not a verdict.",
      "meta.explorer": "Pick likes, see matching majors light on four lines, and open a station to read what it means and which universities teach it.",
      "meta.method": "How Mejor’s match score, university set, and faculty names were made. Honest limits, sources, and privacy.",
      "nav.method": "How this was made",
      skip: "Skip to content",
      updated: "Updated 15 Aug 2026",
      "foot.legal": "Mejor Express · a first look, not a verdict. Saved only on this computer.",
      "stub.from": "Your likes",
      "stub.look": "Worth a closer look",
      "stub.open": "Open station",
      "stub.empty": "Not yet",
      "stub.save": "Likes and the open station are saved on this computer. Refresh is safe.",
      "stub.back": "Welcome back. Your last ticket is still here.",
      "stub.print": "Print this ticket",
      "method.kicker": "Method",
      "method.h1": "How this was made",
      "method.lead": "Mejor is a first look at university majors. It is not a test score, not a career decision, and not a ranking of which school is “best for you”.",
      "method.who.t": "Who it is for",
      "method.who.p": "Students aged 14–18 who know what they like — drawing, numbers, helping people — but cannot yet see which university major that points to. Parents and teachers can read along.",
      "method.leave.t": "What you should leave with",
      "method.leave.p": "Two or three major names worth a closer look, a plain reason they matched your likes, one thing you can try this year, and universities that actually teach those majors in this set.",
      "method.match.t": "How the match % works",
      "method.match.p": "match% = round(100 × hits / number of likes you picked). Hits = how many of YOUR likes this major covers. Example: you pick Logic and Data. Computer Science has both → 100%, green. 70%+ is green. 40–69% is gold. It is not a score of how good you are.",
      "method.schools.t": "Where the schools come from",
      "method.schools.p": "Fifteen universities from the QS World University Rankings 2026 Top 100, plus notes on Chinese-student presence (HESA / SEVIS / Go8). Faculty names come from each university’s official structure. We do not invent a faculty. If a school does not officially teach a major here, it still appears, faded. Example: UIUC has no medical school in this set.",
      "method.abroad.t": "Overseas schools, not “best for you”",
      "method.abroad.p": "The 15 universities are overseas schools in the QS 2026 Top 100 that many Chinese students actually attend (UK, Australia, Canada, USA). This is not a ranking of which school is best for you, and it is not a list of universities in mainland China.",
      "method.next.t": "What to do after Mejor",
      "method.next.p": "Keep two or three major names. Tell a parent or teacher. Open a university page from the school names if you want a closer look. Then try one small thing this year. Mejor is a first look, not a decision.",
      "method.nova.t": "What Nova is",
      "method.nova.p": "Nova asks an MBTI-style set of questions, then school likes vs strengths. It is not an official MBTI test and not a final label. You can skip it and choose likes yourself. On the map, Nova can keep pointing where to press. You can turn Nova off if that feels noisy. You can change likes at any time.",
      "method.not.t": "What this is not",
      "method.not.p": "Not a job title. Not a forever plan. Not “best university”. QS numbers are world rank, not a personal fit. One major can lead to many jobs. Jobs also change.",
      "method.privacy.t": "Privacy",
      "method.privacy.p": "No account. No server. Language, likes, the open station, and whether Nova is guiding are saved in this browser only (localStorage). Clearing the site data clears your ticket.",
      "method.cta": "Open the line map",
      "nova.off": "Turn Nova off",
      "nova.on": "Turn Nova on",
      "nova.wake": "Ask Nova",
      "guide.home": "Press “Start with Nova” on the ticket. Or press “Skip to the line map” if you want to pick likes yourself.",
      "guide.homeSoft": "I can keep helping on the map. Turn me off anytime — I will stay quiet.",
      "guide.likes0": "Press a like card — the ones with icons, under “Choose what you like”. Start with one thing you enjoy.",
      "guide.likes0s": "A liked card flips. Matching stations on the lines will turn green or gold.",
      "guide.likesMore": "Good. You can pick up to 4. When you are ready, press a green or gold diamond on the lines.",
      "guide.likesMores": "The diamonds sit on Logic, Care, World, and Make. Grey ones are weaker matches.",
      "guide.likesFull": "That’s 4 likes. Now press a bright diamond on the lines to open a station.",
      "guide.likesFulls": "Tap a liked card again if you want to unlike it and pick a different one.",
      "guide.peek": "You’re peeking at a station. Press like cards above so the lines can light up.",
      "guide.peeks": "Then this briefing will make more sense.",
      "guide.open": "This is the station ticket. Green is a strong match. Gold is a partial match. Not a forever choice. Press anywhere for the next bit.",
      "guide.opens": "Faded schools do not officially teach this major. That is honest, not a bug.",
      "guide.match": "The % is how many of YOUR likes this major covers. Green is strong. Gold is some. Press anywhere to keep going.",
      "guide.facts": "Start with what you can try this year. Then read what the major is. Press anywhere for schools.",
      "guide.schools": "Tap a school name for a short intro (hover works on a computer). Faded means it does not officially teach this major. Press anywhere when you’re done.",
      "guide.nextStation": "You can open another diamond anytime and compare two stations. Press anywhere when you’re done.",
      "guide.luck": "Good luck on {name}. Keep 2–3 names. Tell a parent or teacher. You can open a school from the list. Not a forever job.",
      "guide.luck.path": "finding your path",
      "guide.tap": "Press anywhere for the next bit",
      "guide.quiz": "Press A or B in the card. There is no wrong answer. You can skip and choose likes yourself.",
      "guide.quizs": "I’ll wait on the map after this.",
      "guide.where.likes": "Press here: like cards",
      "guide.where.lines": "Press here: a diamond",
      "guide.where.brief": "Look here: the station ticket",
      "guide.where.match": "Look here: the match %",
      "guide.where.facts": "Look here: try this year",
      "guide.where.schools": "Tap here: a school name",
      "guide.where.next": "Press here: another diamond",
      "guide.where.luck": "That’s the full tour. Tell someone, then explore.",
      "guide.where.quiz": "Press here: A or B",
      "guide.where.home": "Press here: Start with Nova or Skip"
    },
    zh: {
      title: "Mejor · 线路",
      "nav.open": "打开线路",
      "nav.home": "首页",
      "ticket.aria": "Mejor Express 车票",
      "ticket.band": "专业铁路 · 不可转让",
      "meta.class": "等级",
      "meta.classVal": "初探",
      "meta.stations": "站点",
      "meta.stationsVal": "14 个专业",
      "meta.valid": "有效期",
      "meta.validVal": "直到你选定",
      catch: "Mejor，你的专业探索器。",
      sub: "你知道自己喜欢什么，但还不知道那会通向哪个大学专业。这个网站把你的兴趣对应到 14 个专业，再列出真正开设它们的大学。",
      purpose: "你会带走 2–3 个值得再看的专业——不是一份工作，不是一辈子的计划，也不是给你打分。",
      "gloss.major.t": "专业",
      "gloss.major.p": "大学里学的科目方向，比如计算机科学、心理学、建筑学。它是一条学习路径，不是职位名称，也不是一辈子的标签。",
      "gloss.major.p2": "这张图上有 14 个专业。打开站点，先看这条路真正学什么、容易和什么搞混、今年可以试什么——再把一个名字当成计划。",
      "gloss.job.t": "工作",
      "gloss.job.p": "以后可能做的事，比如软件工程师、研究员、设计师。一个专业可以通向很多工作；行业变了，职位名称也会变。",
      "gloss.job.p2": "不要只因为喜欢一个职位名称就选定专业。这里的第一眼是为了看见范围，不是把你锁进一份职业。",
      "gloss.faculty.t": "学院",
      "gloss.faculty.p": "大学里面真正教这个专业的学院，比如工程学院、商学院、文理学院。同一个专业，在不同大学可能挂在不同学院。",
      "gloss.faculty.p2": "名称来自各校官方页面，方便你看清这个专业实际落在哪里。学院是校园里的一扇门，不是排名，也不是工作。",
      "from.label": "出发",
      "from.val": "你喜欢的事",
      "to.label": "到达",
      "to.val": "一个大学专业",
      "line.logic": "逻辑",
      "line.logicDef": "数学、编程、机械",
      "line.care": "关怀",
      "line.careDef": "健康、助人、教学",
      "line.world": "世界",
      "line.worldDef": "财经、法律、社会",
      "line.make": "创造",
      "line.makeDef": "建筑、艺术、设计",
      "cta.play": "从 Nova 开始",
      "cta.skip": "跳过，直接看线路图",
      fine: "请保留车票。14 个站点。选专业不是定终身。",
      "card1.t": "01 · 先答几道题",
      "card1.p": "Nova 会问你怎么做事、喜欢哪些科目、以及你已经擅长什么。不是正式测验，也不是终点站。",
      "card2.t": "02 · 看线路",
      "card2.p": "匹配的专业会在四条有名字的线路上亮起来。每条线有颜色和含义。站名写在菱形下面。",
      "card3.t": "03 · 打开站点",
      "card3.p": "看看这个专业是什么意思、别和邻近专业搞混、今年可以试什么，以及哪些 Top 15 大学真正开设它。",
      footer: "Mejor Express · 初探，不是定论",
      tagline: "四条线路。十四个站点。",
      "stat.path": "做事风格",
      "stat.likes": "兴趣",
      "stat.strong": "高度匹配",
      "stat.locked": "打开的站点",
      none: "无",
      pulse: "点亮线路",
      clear: "清空兴趣",
      retake: "重做问题",
      help: "怎么用",
      tools: "车票工具",
      "likes.h2": "选出你喜欢的",
      "likes.span": "最多选 4 个。选中后卡片会翻面，背面是提示。点第 5 个会晃一下——请先取消一个。",
      hint: "点一张兴趣卡片，它会翻面。匹配的站点会变成绿色或金色。线路名字保持原样。",
      "hint.how": "百分比很简单：这个专业覆盖了你选中的几个兴趣。例如：你选了「逻辑」和「数据」，计算机科学两个都有 → 100%，绿色。",
      "hint.live": "你选了 {n} 个兴趣。绿色 = 这个专业覆盖了其中大部分（70%+）。金色 = 覆盖一部分（40–69%）。灰色 = 很少或没有。",
      "key.hot": "绿色 = 高度匹配",
      "key.mid": "金色 = 部分匹配",
      "brief.idleT": "打开一个站点，才看得到有用的部分",
      "brief.idle": "点线路上的菱形，或下面列表里的车票。",
      "brief.idle2": "你会看到：今年可以试什么、这个专业是什么、别和邻近专业搞混、以及真正开设它的大学。初探，不是定论。",
      "list.h2": "站点列表",
      note: "这些是很多中国学生实际会去的海外大学——不是“最适合你”的世界排名，也不是内地高校名单。",
      "note.kicker": "这些是哪些学校？",
      "nova.name": "Nova · 向导",
      "quiz.hello": "你好。我是 Nova，这次探索的向导。",
      "quiz.helloSoft": "我会先问 8 道性格题，再问几道学校题。最后你会得到 2–3 个可以再看的专业。这不是正式的 MBTI 测验，也不是最终标签。",
      "quiz.step1": "性格。8 道 A / B 题，关于你怎么做事。",
      "quiz.step2": "学校。两道课堂题，再选你喜欢的科目，再选你擅长的科目。",
      "quiz.step3": "然后进入线路图，你的兴趣会先被选好。匹配的站点会亮起来。你还可以改兴趣。",
      "quiz.step4": "你带走的是值得去查的名字——不是职业决定。",
      begin: "开始",
      "skip.self": "跳过，我自己选兴趣",
      "quiz.noWrong": " · 没有对错",
      "quiz.personalityN": "性格 ",
      of: " / ",
      back: "返回",
      "skip.q": "跳过这些问题",
      "school.lock": "性格题先到这里。现在问学校。这是关于上课的，不是性格。",
      "school.more": "再一道课堂题。喜欢的和擅长的可以不一样——这很正常。",
      "school.n": "学校 ",
      "like.lead": "选 1 或 2 门你喜欢的科目——哪怕成绩还没跟上。",
      "strong.lead": "再选 1 或 2 门你已经擅长的。可以相同，也可以不同。",
      "like.meta": "喜欢 · 选 1–2 门",
      "strong.meta": "擅长 · 选 1–2 门",
      "like.h2": "你喜欢哪些科目？",
      "strong.h2": "你擅长哪些科目？",
      "next.strong": "下一步：擅长",
      "next.results": "看我的结果",
      "weight.lead": "你喜欢一件事，又擅长另一件。这很常见。帮你找专业时，我更该看哪一边？",
      "weight.soft": "之后你还可以改兴趣。",
      "weight.a": "A · 相信我喜欢的",
      "weight.aText": "带我去觉得有趣的科目，哪怕我还在进步。",
      "weight.b": "B · 相信我擅长的",
      "weight.bText": "带我去已经比较拿手的方向。",
      "weight.c": "C · 两边都看",
      "weight.cText": "两个信号都留着。我去探索这个组合。",
      "result.done": "完成。你的做事风格是",
      "result.soft": "这把你的答案、喜欢的科目和擅长的科目合在一起。不是最终标签。",
      "result.like": "你喜欢",
      "result.strong": "你擅长",
      "result.novaLikes": "Nova 将帮你勾选的兴趣",
      "result.three": "从这个组合里选出三个专业。选一个打开，或先看第一个。在线路图上你还可以改兴趣。",
      "result.open": "打开线路",
      "result.again": "再问一遍",
      "type.working": "做事风格：",
      "type.like": "喜欢：",
      "type.strong": "擅长：",
      "type.change": "你还可以改兴趣。",
      "fact.study": "学什么",
      "fact.need": "对你的要求",
      "fact.future": "以后可能做什么",
      "fact.mean": "这个专业是什么",
      "fact.unlike": "别和它搞混",
      "fact.now": "今年可以试什么",
      "fact.watch": "老实话",
      "unis.top": "15 所学校都会出现。变淡的校名表示官方不开设这个专业。",
      "unis.set": "点一下校名。变淡 = 这所学校在这里官方不开设这个专业。",
      "unis.line": "点一下校名。变淡 = 这所学校在这里官方不开设这个专业。",
      "unis.qs.t": "QS 数字",
      "unis.qs.p": "这是世界排名，不是“最适合你”。",
      "like.pick": "点一下喜欢",
      "like.picked": "已选",
      "unis.hover.t": "点一下或指向学校",
      "unis.hover.p": "手机或平板请点校名；电脑可以把鼠标放上去。会看到简介。亮的芯片显示学院；变淡的芯片表示不开设这个专业。",
      "unis.missing.t": "学校变淡了？",
      "unis.missing.p": "它仍会列出，但变淡，因为官方不开设这个专业。例如：这里的 UIUC 没有医学院。",
      "unis.none": "不开设",
      "unis.none.tip": "在这组数据里，官方不开设这个专业。",
      "uni.why": "为什么在这份名单里",
      "uni.teaches": "开设学院",
      "sector.all": "全部国家",
      "lock.strong": "高度匹配",
      "lock.soft": "部分匹配",
      "lock.peek": "先看看",
      "lock.ticket": "站点车票",
      "title.home": "Mejor · 线路",
      "title.explorer": "Mejor · 线路图",
      "title.method": "Mejor · 这是怎么做的",
      "meta.home": "Mejor 把你的兴趣对应到 14 个大学专业和真实学院。给 14 到 18 岁学生的初探——不是定论。",
      "meta.explorer": "选出兴趣，看匹配专业在四条线路上亮起来，打开站点读它是什么、哪些大学真正教。",
      "meta.method": "Mejor 的匹配百分比、学校名单和学院名称是怎么来的。诚实的界限、来源和隐私。",
      "nav.method": "这是怎么做的",
      skip: "跳到正文",
      updated: "更新于 2026年8月15日",
      "foot.legal": "Mejor Express · 初探，不是定论。只保存在这台电脑上。",
      "stub.from": "你的兴趣",
      "stub.look": "值得再看",
      "stub.open": "打开的站点",
      "stub.empty": "还没有",
      "stub.save": "兴趣和打开的站点会保存在这台电脑上。刷新页面也还在。",
      "stub.back": "欢迎回来。你上次的车票还在。",
      "stub.print": "打印这张车票",
      "method.kicker": "方法",
      "method.h1": "这是怎么做的",
      "method.lead": "Mejor 是对大学专业的初探。它不是测验分数，不是职业决定，也不是哪所学校“最适合你”的排名。",
      "method.who.t": "给谁用",
      "method.who.p": "14 到 18 岁、知道自己喜欢什么——画画、数字、帮助别人——但还看不清那会通向哪个大学专业的学生。家长和老师可以一起看。",
      "method.leave.t": "你应该带走什么",
      "method.leave.p": "两三个值得再看的专业名字、它们为什么匹配你的兴趣、今年可以试的一件事，以及这组名单里真正开设它们的大学。",
      "method.match.t": "匹配百分比怎么算",
      "method.match.p": "匹配% = 四舍五入（100 × 命中数 / 你选的兴趣个数）。命中 = 这个专业覆盖了你的几个兴趣。例如：你选了逻辑和数据，计算机科学两个都有 → 100%，绿色。70%+ 为绿，40–69% 为金。这不是给你打分。",
      "method.schools.t": "学校从哪来",
      "method.schools.p": "15 所大学来自 QS 2026 世界大学排名前 100，并参考中国学生实际选择（HESA / SEVIS / Go8）。学院名称来自各校官方设置。我们不编造学院。如果某校在这里官方不开设某专业，它仍会列出，但变淡。例如：这里的 UIUC 没有医学院。",
      "method.abroad.t": "海外学校，不是“最适合你”",
      "method.abroad.p": "这 15 所大学是 QS 2026 世界排名前 100 里、很多中国学生实际会去的海外学校（英国、澳大利亚、加拿大、美国）。这不是“哪所学校最适合你”的排名，也不是中国内地高校名单。",
      "method.next.t": "看完 Mejor 之后做什么",
      "method.next.p": "留下两三个专业名字。告诉家长或老师。如果想再看，可以从校名打开大学介绍。然后今年试一件小事。Mejor 是初探，不是决定。",
      "method.nova.t": "Nova 是什么",
      "method.nova.p": "Nova 会问一套类似 MBTI 的题目，再问学校里喜欢与擅长。这不是正式的 MBTI 测验，也不是最终标签。你可以跳过，自己选兴趣。在线路图上，Nova 可以一直提示该按哪里。觉得吵可以关掉。随时能改兴趣。",
      "method.not.t": "这不是什么",
      "method.not.p": "不是职位名称。不是一辈子的计划。不是“最好的大学”。QS 数字是世界排名，不是适不适合你。一个专业可以通向很多工作，工作也会变。",
      "method.privacy.t": "隐私",
      "method.privacy.p": "没有账号，没有服务器。语言、兴趣、打开的站点，以及 Nova 开或关，只存在这个浏览器里（localStorage）。清除网站数据就会清掉车票。",
      "method.cta": "打开线路图",
      "nova.off": "关掉 Nova",
      "nova.on": "打开 Nova",
      "nova.wake": "叫 Nova",
      "guide.home": "请按车票上的“从 Nova 开始”。如果想自己选兴趣，按“跳过，直接看线路图”。",
      "guide.homeSoft": "到线路图上我还会带路。随时可以关掉我，我不会吵你。",
      "guide.likes0": "请按一张兴趣卡片——在“选出你喜欢的”下面，带图标的那些。先选一件你喜欢的事。",
      "guide.likes0s": "选中后卡片会翻面。线路上匹配的站点会变成绿色或金色。",
      "guide.likesMore": "很好。最多可以选 4 个。准备好了，就去按线路上绿色或金色的菱形。",
      "guide.likesMores": "菱形在逻辑、关怀、世界、创造四条线上。灰色的是较弱的匹配。",
      "guide.likesFull": "已经 4 个兴趣了。现在请按线路上较亮的菱形，打开一个站点。",
      "guide.likesFulls": "再点一次已选的卡片，可以取消，再换一个。",
      "guide.peek": "你在先看看这个站点。请先按上面的兴趣卡片，线路才会亮起来。",
      "guide.peeks": "亮起来之后，右边的说明会更好懂。",
      "guide.open": "这是站点车票。绿色是较强匹配，金色是部分匹配。不是一辈子的选择。任意点一下，看下一项。",
      "guide.opens": "变淡的学校官方不开设这个专业。这是实话，不是故障。",
      "guide.match": "百分比 = 这个专业覆盖了你几个兴趣。绿色较强，金色一般。任意点一下继续。",
      "guide.facts": "先看今年可以试什么，再看这个专业是什么。任意点一下，去看学校。",
      "guide.schools": "点一下校名，会有短介绍（电脑也可以把鼠标放上去）。变淡 = 官方不开设。看完任意点一下。",
      "guide.nextStation": "随时可以再按别的菱形，对比两个站点。看完任意点一下。",
      "guide.luck": "祝你在{name}这条路上顺利。留下两三个名字。告诉家长或老师。也可以从名单里打开一所学校。不是一辈子的工作。",
      "guide.luck.path": "找到适合你的方向",
      "guide.tap": "任意点一下，看下一项",
      "guide.quiz": "请在卡片里按 A 或 B。没有对错。也可以跳过，自己选兴趣。",
      "guide.quizs": "问完我会在线路图上等你。",
      "guide.where.likes": "请按这里：兴趣卡片",
      "guide.where.lines": "请按这里：菱形站点",
      "guide.where.brief": "请看这里：站点车票",
      "guide.where.match": "请看这里：匹配百分比",
      "guide.where.facts": "请看这里：今年可以试什么",
      "guide.where.schools": "请点这里：校名",
      "guide.where.next": "请按这里：另一个菱形",
      "guide.where.luck": "全程讲完了。先告诉别人，再自己逛。",
      "guide.where.quiz": "请按这里：A 或 B",
      "guide.where.home": "请按这里：开始或跳过",
      "country.UK": "英国",
      "country.Australia": "澳大利亚",
      "country.Canada": "加拿大",
      "country.USA": "美国"
    }
  };

  var DATA = {
    tags: {
      hands: "动手制作",
      logic: "逻辑与数字",
      words: "文字与表达",
      art: "艺术与创作",
      help: "帮助他人",
      nature: "自然与地球",
      business: "商业与金钱",
      data: "数据与规律"
    },
    subjects: {
      math: "数学",
      science: "科学",
      english: "英语 / 语言",
      history: "历史 / 社会",
      arts: "美术 / 音乐 / 戏剧",
      computers: "电脑",
      making: "设计与技术 / 动手 / 体育",
      money: "商业 / 金钱"
    },
    combos: {
      "logic+data": { name: "分析家", blurb: "你喜欢找出藏着的规律。" },
      "art+hands": { name: "创造者", blurb: "你喜欢做出别人能看见、能摸到的东西。" },
      "help+words": { name: "引路人", blurb: "你喜欢用语言去帮助别人。" },
      "nature+hands": { name: "探索者", blurb: "你更喜欢真实世界，而不是练习册。" },
      "business+data": { name: "策略家", blurb: "你喜欢把数字变成计划。" },
      "art+words": { name: "故事家", blurb: "你喜欢把想法做成别人能感受到的东西。" },
      "logic+hands": { name: "建造头脑", blurb: "你喜欢真正能运转起来的系统。" },
      "help+nature": { name: "关怀之路", blurb: "你喜欢照顾人和活着的生命。" }
    },
    majors: {
      cs: {
        name: "计算机科学",
        blurb: "你教电脑解题——做应用、游戏、网站和智能工具。",
        learn: "编程、算法、计算机系统，以及怎样把一个想法做成能运行的软件。",
        need: "程序出错时的耐心、逻辑思维，还有把大问题拆成小步骤的乐趣。",
        future: "软件工程师、产品开发、游戏开发、人工智能实习、网络安全入门。"
      },
      eng: {
        name: "工程",
        blurb: "你设计会动、会站立、会飞，或让城市运转起来的真实东西。",
        learn: "数学 + 物理，再选一条方向：土木、机械、电气、生物医学或航空航天。",
        need: "动手或用电脑做东西、团队合作，以及原型失败时不放弃。",
        future: "工程师；机器、建筑或能源系统的设计者；机器人或航天科技入门。"
      },
      arch: {
        name: "建筑与城市",
        blurb: "你塑造房间、街道和天际线，让人住得舒服。",
        learn: "绘画、设计工作室、城市规划、材料，以及城市怎样发展。",
        need: "视觉想象力、做项目的耐心，以及关心空间给人的感觉。",
        future: "建筑师、城市规划师、室内或景观设计师、城市项目实习。"
      },
      biz: {
        name: "商业与金融",
        blurb: "你学习公司、金钱和团队实际上怎么运转。",
        learn: "会计、金融、市场营销、管理，以及一家公司怎样持续经营。",
        need: "对钱的好奇、善于和人交流，以及从数字里看出规律。",
        future: "分析师、市场营销、创业练习、银行，或运营实习。"
      },
      econ: {
        name: "经济学",
        blurb: "你研究人、公司和国家为什么做出那些选择。",
        learn: "市场、数据、政策，以及试图解释真实世界的模型。",
        need: "看得懂图表、爱问“为什么”，并能用短句讲清一个大想法。",
        future: "政策实习、研究助理、咨询入门、关注数据的记者。"
      },
      law: {
        name: "法学",
        blurb: "你学习让社会更公平的规则——以及怎样用证据去论证。",
        learn: "法律写作、权利、法庭，以及一个国家怎样把想法变成法律。",
        need: "仔细阅读、清楚表达，以及在争执里保持冷静。",
        future: "法律学习、政策助手、合规实习、人权志愿者。"
      },
      med: {
        name: "医学与生物医学",
        blurb: "你研究人体，好帮助人恢复健康——并保持健康。",
        learn: "生物、解剖、临床，以及疾病和康复实际上怎么发生。",
        need: "长期毅力、关心人，以及扛得住理科难度。",
        future: "医生培养、生物医学研究、诊所助手、公共卫生入门。（这条路很长。现在知道也没关系。）"
      },
      psy: {
        name: "心理与脑科学",
        blurb: "你研究人为什么这样想、这样感觉、这样行动。",
        learn: "大脑、实验、心理健康，以及怎样先听、不急着给答案。",
        need: "对人的好奇、仔细观察，以及尊重隐私。",
        future: "心理咨询入门、用户体验研究、神经科学实习、教育助手。"
      },
      bio: {
        name: "生命科学",
        blurb: "你研究细胞、动物、植物，以及生命背后的化学。",
        learn: "生物、实验技能、遗传，以及生命系统怎样保持平衡。",
        need: "热爱自然、实验室里的耐心，以及问很小、很精确的问题。",
        future: "生物学家、实验室研究、生物科技实习、自然保护助手。"
      },
      stem: {
        name: "数学、物理与数据",
        blurb: "你在数字、星星、粒子和海量数据里找规律。",
        learn: "数学、物理、统计，以及怎样证明一个想法，而不只是猜。",
        need: "能坐下来对付难题，以及规律终于对上时的兴奋。",
        future: "数据分析、物理研究入门、金融数据实习、太空或气候研究。"
      },
      art: {
        name: "艺术、设计与媒体",
        blurb: "你做图像、电影、音乐、游戏或物件，让别人能有感受。",
        learn: "工作室实践、讲故事、设计工具，以及怎样把一件作品做完——不只是开始。",
        need: "审美、大量制作的时间，以及把未完成的作品拿给人看的勇气。",
        future: "设计师、电影人、音乐人、游戏美术、新闻入门。"
      },
      ir: {
        name: "世界与公共政策",
        blurb: "你研究国家、权力，以及公共决定怎样改变真实生活。",
        learn: "政治、全球事务、权力的历史，以及怎样写出清楚有力的简报。",
        need: "带着问题读新闻、友善地辩论，以及看见不止一面。",
        future: "政策实习、外交入门、公益组织助手、政治研究。"
      },
      edu: {
        name: "教育学",
        blurb: "你学习人怎样学习——这样你可以教书、设计课，或把学校做得更好。",
        learn: "大脑怎样学习、教学实践，以及教育政策。",
        need: "耐心、讲得清楚，以及记得自己曾经困惑的感觉。",
        future: "教师培养、教育设计、青少年项目助手。UCL 的 IOE 是世界教育学第 1（QS）。"
      },
      ph: {
        name: "公共与全球健康",
        blurb: "你保护整个社区，不只一个病人——从疫情到干净的水。",
        learn: "流行病学、健康数据、全球健康，以及城市怎样让人保持健康。",
        need: "关心陌生人、看得懂数据，以及用城市或国家的尺度去想。",
        future: "公共卫生实习、公益健康工作、健康数据入门、政策助手。"
      }
    },
    quiz: [
      {
        prompt: "一个空闲的周六。什么真正让你恢复精力？",
        a: { title: "和人在一起", text: "热闹的聚会。说话、笑，结束后更有劲。" },
        b: { title: "安静独处", text: "一个朋友、一本书，或自己的房间。人多之后我需要停一下。" }
      },
      {
        prompt: "课上你有了一个很棒的想法。你先做什么？",
        a: { title: "说出来", text: "我大声说。说话能帮我想清楚。" },
        b: { title: "先收着", text: "我先在脑子里转一转，再分享。" }
      },
      {
        prompt: "你去一座新城市。什么最吸引你？",
        a: { title: "真实细节", text: "食物、街道、人们实际上在做什么。" },
        b: { title: "想象画面", text: "故事、未来的想法，“这地方可能变成什么样”。" }
      },
      {
        prompt: "学校项目开始了。你想要什么？",
        a: { title: "清楚步骤", text: "事实、例子、我能跟着走的清单。" },
        b: { title: "一个大想法", text: "有自己发明的空间。如果每一步都写好了，我会觉得无聊。" }
      },
      {
        prompt: "一个朋友很难过。你的第一反应？",
        a: { title: "先想办法", text: "找出问题，给出一个计划。" },
        b: { title: "先陪着对方", text: "先听。他们的感受比马上修好更重要。" }
      },
      {
        prompt: "小组作业乱了。哪边更像你？",
        a: { title: "实话直说", text: "说出真实的话，哪怕有点直。" },
        b: { title: "照顾感受", text: "保护大家的感受。气氛好，工作才好。" }
      },
      {
        prompt: "作业周。你的风格？",
        a: { title: "先做计划", text: "清单、日历，能早完成就早完成。" },
        b: { title: "跟着状态走", text: "感觉对了再开始。我还是会做完——只是不是一条整齐的线。" }
      },
      {
        prompt: "周六早上。哪个听起来更好？",
        a: { title: "计划好的一天", text: "我喜欢知道这一天大概会怎样过。" },
        b: { title: "看看会发生什么", text: "留点空白。好玩的部分是惊喜。" }
      }
    ],
    novaLead: [
      "第一题。跟着第一直觉走——没有错答案。",
      "下一题：你喜欢怎样开始一个想法。",
      "想象你刚到一座新城市。",
      "现在是学校项目。",
      "一个朋友今天很难过。",
      "小组作业。请诚实回答。",
      "性格题快结束了。作业周。",
      "最后一道性格题。周六早上——然后我们谈学校。"
    ],
    school: [
      {
        prompt: "如果明天只能上一类课，你会选……",
        a: { title: "数字和实验", text: "数学、科学、电脑。步骤清楚会让我觉得踏实。" },
        b: { title: "文字和人", text: "英语、历史、语言。把一个想法说清楚会让我觉得踏实。" }
      },
      {
        prompt: "通常什么样的功课你更拿手？",
        a: { title: "一个要解开的问题", text: "步骤、公式、实验、代码，或做出一样东西。" },
        b: { title: "一件要说或展示的事", text: "写作、展示、画画、表演或辩论。" }
      }
    ],
    paths: {
      INTJ: { name: "安静的策略家", blurb: "你喜欢周密的计划和清晰的逻辑。不必凑热闹，你也很强。" },
      INTP: { name: "解谜头脑", blurb: "你喜欢把想法拆开玩。难题是玩具，不是威胁。" },
      ENTJ: { name: "队长", blurb: "你喜欢带着计划走，让一团乱的小组真正动起来。" },
      ENTP: { name: "点子火花", blurb: "你辩论、发明、把奇怪的点连起来。无聊才是你的敌人。" },
      INFJ: { name: "安静的向导", blurb: "你注意到别人的感受，再去找底下的意义。" },
      INFP: { name: "故事之心", blurb: "你在意对自己真实的事。创造和帮助都像家。" },
      ENFJ: { name: "团队的光", blurb: "别人会看向你。你希望小组一起成长，不只是赢。" },
      ENFP: { name: "活力伙伴", blurb: "你带来能量和新路。你讨厌被框住。" },
      ISTJ: { name: "稳健的建造者", blurb: "你守承诺。清楚的规则和真实技能让你安心、有力。" },
      ISFJ: { name: "关怀守护者", blurb: "你记得别人。用实际的方式帮忙，是你的超能力。" },
      ESTJ: { name: "组织者", blurb: "你喜欢秩序、做决定，以及把事情做完。" },
      ESFJ: { name: "热心东道主", blurb: "你会把每个人都顾到。有你在，团队更好。" },
      ISTP: { name: "修理能手", blurb: "你靠动手理解东西怎么工作，而不只靠读。" },
      ISFP: { name: "温柔的创造者", blurb: "你做出美丽或有用的东西，常常很安静，但很用心。" },
      ESTP: { name: "行动派", blurb: "你靠做来学。快、大胆，对当下发生的事很敏锐。" },
      ESFP: { name: "舞台能量", blurb: "你让一个房间活起来。表演、人和快乐都是真本事。" }
    },
    evidence: {
      ucl: "英国中国学生人数第 1（HESA）",
      melbourne: "澳洲八校联盟（Go8）：澳大利亚新入学中国学生约 86% 进入该联盟",
      unsw: "澳洲八校联盟（Go8）",
      sydney: "澳洲八校联盟（Go8）",
      toronto: "常被列为加拿大最受中国学生欢迎的学校之一",
      edinburgh: "英国中国学生人数前 5（HESA）",
      manchester: "约 50% 学生来自中国大陆（HESA）",
      kcl: "英国中国学生人数前 5（HESA）",
      columbia: "约 5,035 名中国学生；在美国排第 3（SEVIS）",
      ubc: "常被列为加拿大受中国学生欢迎的学校之一",
      nyu: "这组美国学校里，中国学生占比最高",
      uiuc: "美国国际学生总数前 5（DHS）",
      glasgow: "英国中国学生人数前 5（HESA）",
      southampton: "60% 以上学生来自中国大陆（HESA）",
      sheffield: "中国学生约占 58%（HESA）"
    },
    uniIntro: {
      ucl: "伦敦市中心。医学、建筑（巴特莱特学院）和教育（IOE）很有名，也是很多中国学生在英国的热门选择。",
      melbourne: "澳大利亚八校联盟成员，学科很全。常被当作去澳洲读书时会认真考虑的学校。",
      unsw: "在悉尼。工程和商科尤其有名，同属澳洲八校联盟。",
      sydney: "澳大利亚历史最久的大学之一。医学、法律和文科强，校园在悉尼市区。",
      toronto: "加拿大规模很大的研究型大学，主校区在多伦多市中心。常被列为中国学生在加拿大的热门选择。",
      edinburgh: "在苏格兰首府爱丁堡。历史悠久，医学、信息学和文科都不错。",
      manchester: "英国北部的大型校园。中国学生很多，理工科比较强。",
      kcl: "伦敦泰晤士河边。健康科学、法律、战争研究和人文学科有名，附近医院多。",
      columbia: "纽约的常春藤盟校。竞争激烈，新闻、国际关系和医学很有名。",
      ubc: "在温哥华，靠山靠海。理科强，也是中国学生在加拿大常看的学校。",
      nyu: "校园主要在纽约。艺术（Tisch）和商科（Stern）有名；在这组美国学校里，中国学生占比最高。",
      uiuc: "美国伊利诺伊州的大型公立大学。工程和计算机科学很有名。这份名单里它没有医学院。",
      glasgow: "苏格兰历史很久的大学。医学、法律和文科不错，也是英国中国学生较多的学校之一。",
      southampton: "在英格兰南岸。工程和海洋科学有名，中国大陆学生占比很高。",
      sheffield: "在英格兰北部。工程、建筑和新闻不错，中国学生占比也高。"
    },
    tagHints: {
      hands: "搭建、修理、画画、动手课",
      logic: "数学、谜题、把步骤想清楚",
      words: "写作、辩论、演讲、语言",
      art: "画画、音乐、设计、做作品",
      help: "照顾人、讲解、志愿服务",
      nature: "生物、户外、地球、实验",
      business: "买卖、团队、钱怎么转",
      data: "图表、规律、统计、表格"
    },
    extra: {
      cs: {
        mean: "大学里学如何让电脑做有用的事：应用、网站、游戏、智能工具。",
        unlike: "不是工程（工程更偏向真实机器和结构），也不是「数学、物理与数据」（那条更偏证明和测量，而不是把软件做出来）。",
        now: "可以试试编程社、Scratch / Python 小练习，或做一个小小的网页。",
        watch: "后面会有很多坐着改错和数学。现在不必已经是天才。"
      },
      eng: {
        mean: "设计并造出真实世界里的系统：桥、机器人、电路、飞机、能源。",
        unlike: "不是计算机科学（那条先做软件），也不是建筑（建筑更关心人怎么使用空间）。",
        now: "可以参加机器人社、设计与技术课，或做一个科学展作品。",
        watch: "数学和物理会很重。以后还会分成土木、机械、电气等方向。"
      },
      arch: {
        mean: "设计给人住、给人走的房子和城市。",
        unlike: "不是艺术与媒体（图像和影片），也不是工程（工程要保证结构不能塌）。它们会共享绘画，但目的不同。",
        now: "画房间草图，走进一栋楼注意光和动线，或参加设计社。",
        watch: "工作室时间很长。成为注册建筑师，大学之后往往还要再读、再实习几年。"
      },
      biz: {
        mean: "公司怎样赚钱、花钱、把团队运转起来。",
        unlike: "不是经济学。经济学问「市场为什么这样」；商业问「我们怎么经营这家公司」。",
        now: "学校义卖、社团记账，或给一次活动做简单预算。",
        watch: "以后「金融」「管理」「市场」会分成不同方向，现在先知道它们不是同一件事。"
      },
      econ: {
        mean: "用图表和模型，研究人、公司和国家为什么做出金钱上的选择。",
        unlike: "不是商业。商业在经营公司；经济学在问「如果这样，会发生什么」。",
        now: "看一则新闻里的图表，问价格为什么变，或记一本「他们为什么这样做」。",
        watch: "看起来像文科，数学其实不少。看得懂图会很有帮助。"
      },
      law: {
        mean: "一个国家用什么规则，以及怎样用证据去论证。",
        unlike: "不是「世界与公共政策」（那条更看国家和政府）。法学更靠近规则本身和法庭。",
        now: "辩论社、读一则短新闻案例，练习把论点写清楚。",
        watch: "有的国家还要额外考试。阅读量很大。"
      },
      med: {
        mean: "研究人体，好帮助人治病、保持健康（也包括相关的实验室科学）。",
        unlike: "不是公共卫生（公共卫生看整个城市），也不是生命科学（生命科学更多在实验室，而不是诊所）。这份名单里的 UIUC 没有医学院。",
        now: "学生物、学急救、参加适合年龄的志愿，或科学竞赛。",
        watch: "路很长（常常 5–8 年或更久），竞争也大。喜欢健康，不等于现在就要当医生。"
      },
      psy: {
        mean: "研究人怎样想、怎样感觉、怎样行动，以及大脑怎样工作。",
        unlike: "不是教育学（教育学看课堂里怎样学），也不是医学（医学看身体）。读心理不等于已经拿到咨询师执照。",
        now: "留意人怎么做决定，练习好好听，或做一个关于记忆、习惯的小科学项目。",
        watch: "大学心理常常是实验和统计，不只是「聊天谈心」。"
      },
      bio: {
        mean: "研究活着的东西：细胞、基因、动物、植物。",
        unlike: "不是医学（医学面对病人），也不是公共卫生（公共卫生面对社区）。",
        now: "科学社、观察植物或生态，在老师指导下做安全的小实验。",
        watch: "名字要记很多，实验室里也需要耐心。"
      },
      stem: {
        mean: "以数学、物理和数据当主科：证明、测量、找规律。",
        unlike: "不是计算机科学（那条在把软件做出来），也不是工程（工程在把机器造出来）。",
        now: "数学竞赛、科学奥赛，或用表格去数一件你关心的事。",
        watch: "比较抽象。如果你真正喜欢的是「做出应用」，计算机科学可能更贴。"
      },
      art: {
        mean: "做出别人能看见、听见或用到的作品：美术、设计、电影、音乐、媒体。",
        unlike: "不是建筑（建筑是给人住的房子）。两者都画画，但目的不同。",
        now: "每周完成一件小作品。校刊、合唱、摄影，或一组游戏像素画都可以。",
        watch: "作品集很重要。品味是做出来的，不只是「喜欢艺术」。"
      },
      ir: {
        mean: "研究国家、政府和公共决定怎样影响真实的人。",
        unlike: "不是法学（法庭和法条），也不是商业（公司）。",
        now: "同一则新闻看两个国家的说法，模拟联合国，或辩论社。",
        watch: "写作和语言会有帮助。这不是「马上当外交官」。"
      },
      edu: {
        mean: "研究人怎样学习，以及怎样把课、把学校做得更好。",
        unlike: "不是心理学（心理学看整体的心智）。教育学更靠近课堂和学校系统。",
        now: "给低年级同学讲一道题，帮社团备一节活动，或回想哪一堂课让你突然懂了。",
        watch: "教师培养和执照因国家而不同。"
      },
      ph: {
        mean: "让整个社区保持健康：水、疫苗、疫情、健康数据。",
        unlike: "不是医学。医学一次面对一个病人；公共卫生一次面对一座城。",
        now: "科学 + 地理，记录一个校园健康习惯，或读一座城市怎样应对炎热、流感。",
        watch: "生物和数据都会用到。少一点「医院英雄」，多一点「系统怎么转」。"
      }
    }
  };

  function getLang() {
    try {
      return localStorage.getItem(KEY) === "zh" ? "zh" : "en";
    } catch (e) {
      return "en";
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.documentElement.setAttribute("data-lang", lang);
  }

  function t(key) {
    var pack = STR[getLang()] || STR.en;
    if (pack[key] != null) return pack[key];
    return STR.en[key] != null ? STR.en[key] : key;
  }

  function apply() {
    setLang(getLang());
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    var titleKey = document.documentElement.getAttribute("data-title") || "title";
    document.title = t(titleKey);
    var descKey = document.documentElement.getAttribute("data-desc");
    var meta = document.querySelector('meta[name="description"]');
    if (meta && descKey) meta.setAttribute("content", t(descKey));
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      var zh = getLang() === "zh";
      btn.textContent = zh ? "English" : "中文";
      btn.setAttribute("aria-label", zh ? "Switch to English" : "切换到中文");
    });
  }

  function bindToggles() {
    document.querySelectorAll("[data-lang-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(getLang() === "zh" ? "en" : "zh");
        apply();
        document.dispatchEvent(new CustomEvent("mejor-lang"));
      });
    });
  }

  global.MejorI18n = { getLang: getLang, setLang: setLang, t: t, apply: apply, bindToggles: bindToggles, STR: STR, DATA: DATA };

  var NOVA_KEY = "mejor-nova";
  function novaIsOn() {
    try { return localStorage.getItem(NOVA_KEY) !== "off"; } catch (e) { return true; }
  }
  function novaSet(on) {
    try { localStorage.setItem(NOVA_KEY, on ? "on" : "off"); } catch (e) {}
    document.body.classList.toggle("nova-on", !!on);
    document.body.classList.toggle("nova-off", !on);
    document.dispatchEvent(new CustomEvent("mejor-nova", { detail: { on: !!on } }));
  }
  function novaApply() {
    novaSet(novaIsOn());
  }
  var novaLastKey = "";
  function novaReduceMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function novaFaceSvg() {
    return [
      '<svg viewBox="0 0 72 84" fill="none">',
      '<g class="antenna">',
      '<line x1="36" y1="16" x2="36" y2="5" stroke="#1c2430" stroke-width="1.7"/>',
      '<rect class="glow" x="33.2" y="2" width="5.6" height="5.6" transform="rotate(45 36 4.8)" fill="#2f5d50"/>',
      "</g>",
      '<rect x="14" y="16" width="44" height="42" rx="2" fill="#fbf8f3" stroke="#1c2430" stroke-width="1.7"/>',
      '<rect x="18" y="20" width="36" height="16" rx="1" fill="#fff" stroke="#1c2430" stroke-width="1.1"/>',
      '<circle class="eye" cx="29" cy="28" r="2.4" fill="#1c2430"/>',
      '<circle class="eye" cx="43" cy="28" r="2.4" fill="#1c2430"/>',
      '<path d="M28 41h16" stroke="#1c2430" stroke-width="1.5" stroke-linecap="square"/>',
      '<rect x="26" y="60" width="20" height="9" rx="1" fill="#fbf8f3" stroke="#1c2430" stroke-width="1.5"/>',
      '<path d="M22 64.5h-5M50 64.5h5" stroke="#1c2430" stroke-width="1.4"/>',
      "</svg>"
    ].join("");
  }
  function novaBotSvg() {
    return '<div class="nova-bot" aria-hidden="true">' + novaFaceSvg() + "</div>";
  }
  function novaEnsure() {
    var flyer = document.getElementById("novaFlyer");
    if (!flyer) {
      flyer = document.createElement("div");
      flyer.id = "novaFlyer";
      flyer.hidden = true;
      flyer.innerHTML = novaBotSvg() +
        '<div class="nova-say">' +
        '<b data-nova-name></b>' +
        '<p data-nova-line></p>' +
        '<p class="where" data-nova-where></p>' +
        '<button type="button" class="nova-quiet" data-nova-toggle></button>' +
        "</div>";
      document.body.appendChild(flyer);
    }
    var glow = document.getElementById("novaGlowBox");
    if (!glow) {
      glow = document.createElement("div");
      glow.id = "novaGlowBox";
      glow.hidden = true;
      glow.setAttribute("aria-hidden", "true");
      document.body.appendChild(glow);
    }
    return flyer;
  }
  function novaClearGlow() {
    document.querySelectorAll(".nova-glow").forEach(function (el) {
      el.classList.remove("nova-glow");
    });
  }
  function novaPark() {
    novaClearGlow();
    novaLastKey = "";
    var flyer = document.getElementById("novaFlyer");
    var glow = document.getElementById("novaGlowBox");
    if (flyer) {
      flyer.hidden = true;
      flyer.setAttribute("aria-hidden", "true");
      flyer._place = null;
      flyer.classList.remove("nova-cheer", "nova-aside", "say-below", "say-left");
      flyer.style.left = "";
      flyer.style.right = "";
      flyer.style.top = "";
      flyer.style.bottom = "";
      flyer.style.width = "";
    }
    if (glow) {
      glow.hidden = true;
      glow.classList.remove("nova-aside");
    }
  }
  function novaKey(el, opts) {
    if (opts && opts.key) return opts.key;
    if (!el) return "";
    if (el.id) return el.id;
    if (el.dataset && el.dataset.id) return el.tagName + "-" + el.dataset.id;
    if (el.dataset && el.dataset.uni) return "uni-" + el.dataset.uni;
    return (el.className || "") + "-" + (el.textContent || "").slice(0, 24);
  }
  function novaPoint(target, where, line, opts) {
    opts = opts || {};
    novaClearGlow();
    if (!novaIsOn()) {
      novaPark();
      return;
    }
    if (!opts.cheer && !target) {
      novaPark();
      return;
    }
    var flyer = novaEnsure();
    var glow = document.getElementById("novaGlowBox");
    flyer.hidden = false;
    flyer.setAttribute("aria-hidden", "false");
    flyer.setAttribute("aria-live", "polite");
    var nameEl = flyer.querySelector("[data-nova-name]");
    var lineEl = flyer.querySelector("[data-nova-line]");
    var whereEl = flyer.querySelector("[data-nova-where]");
    var mute = flyer.querySelector("[data-nova-toggle]");
    if (nameEl) nameEl.textContent = t("nova.name");
    if (lineEl) {
      lineEl.textContent = line || "";
      lineEl.hidden = !line;
    }
    if (whereEl) whereEl.textContent = where || "";
    if (mute) mute.textContent = t("nova.off");
    flyer.classList.toggle("nova-cheer", !!opts.cheer);
    var showGlow = !opts.cheer && opts.glow !== false && !!target;
    if (showGlow) target.classList.add("nova-glow");
    var key = novaKey(target, opts);
    var allowScroll = !opts.cheer && opts.scroll !== false
      && target
      && !target.closest(".modal")
      && !target.closest("#briefing")
      && !target.closest(".chips")
      && !target.closest("[data-uni]");

    function place() {
      if (opts.cheer) {
        if (glow) glow.hidden = true;
        flyer.style.left = "16px";
        flyer.style.right = "auto";
        flyer.style.top = "auto";
        flyer.style.bottom = "16px";
        flyer.style.width = "";
        return;
      }
      if (!target || !target.isConnected) return;
      if (glow) glow.hidden = !showGlow;
      flyer.style.bottom = "";
      flyer.style.right = "";
      flyer.style.width = "72px";
      var r = target.getBoundingClientRect();
      if (r.width < 2 && r.height < 2) return;
      var fw = 72;
      var fh = 84;
      var preferLeft = r.left > fw + 48;
      var left = preferLeft ? r.left - fw - 20 : r.right + 20;
      var top = r.top + r.height / 2 - fh / 2;
      if (left < 8) left = 8;
      if (left + fw > window.innerWidth - 8) left = Math.max(8, window.innerWidth - fw - 8);
      if (top < 8) top = 8;
      if (top + fh > window.innerHeight - 8) top = Math.max(8, window.innerHeight - fh - 8);
      flyer.style.left = left + "px";
      flyer.style.top = top + "px";
      flyer.classList.toggle("say-left", !preferLeft);
      flyer.classList.toggle("say-below", top < 96);

      if (!showGlow || !glow) return;
      var huge = r.width * r.height > 140000;
      var glowW = huge ? Math.min(r.width, 220) : r.width;
      var glowH = huge ? Math.min(r.height, 44) : r.height;
      var radiusEl = target.querySelector(".flip-face, .planet") || target;
      glow.style.boxSizing = "border-box";
      glow.style.borderRadius = window.getComputedStyle(radiusEl).borderRadius || "0px";
      glow.style.left = r.left + "px";
      glow.style.top = r.top + "px";
      glow.style.width = glowW + "px";
      glow.style.height = glowH + "px";
    }
    flyer._place = place;
    place();
    requestAnimationFrame(function () {
      place();
      requestAnimationFrame(place);
    });
    if (novaLastKey !== key) {
      novaLastKey = key;
      if (allowScroll) {
        var box = target.getBoundingClientRect();
        var visible = box.top >= 8 && box.bottom <= window.innerHeight - 8;
        if (!visible) {
          try {
            target.scrollIntoView({
              block: "nearest",
              inline: "nearest",
              behavior: novaReduceMotion() ? "auto" : "smooth"
            });
          } catch (e) {}
          setTimeout(place, 280);
        }
      }
    }
  }
  var novaFollowRaf = 0;
  var novaLastScrollAt = 0;
  function novaReposition() {
    var flyer = document.getElementById("novaFlyer");
    if (flyer && flyer._place && !flyer.hidden) flyer._place();
  }
  function novaOnScroll() {
    novaLastScrollAt = Date.now();
    novaReposition();
    if (novaFollowRaf) return;
    novaFollowRaf = requestAnimationFrame(function tick() {
      novaReposition();
      if (Date.now() - novaLastScrollAt < 90) {
        novaFollowRaf = requestAnimationFrame(tick);
      } else {
        novaFollowRaf = 0;
      }
    });
  }
  function novaBind(onChange) {
    function labels() {
      var on = novaIsOn();
      document.querySelectorAll("[data-nova-toggle]").forEach(function (btn) {
        btn.textContent = t(on ? "nova.off" : "nova.on");
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      document.querySelectorAll("[data-nova-wake]").forEach(function (btn) {
        btn.hidden = on;
        btn.textContent = t("nova.wake");
        btn.setAttribute("aria-hidden", on ? "true" : "false");
      });
      document.querySelectorAll("[data-nova-dock]").forEach(function (el) {
        el.hidden = true;
      });
      if (!on) novaPark();
    }
    if (!document.documentElement.hasAttribute("data-nova-bound")) {
      document.documentElement.setAttribute("data-nova-bound", "1");
      document.addEventListener("click", function (e) {
        var tog = e.target.closest("[data-nova-toggle]");
        var wake = e.target.closest("[data-nova-wake]");
        if (tog) {
          e.preventDefault();
          e.stopPropagation();
          novaSet(!novaIsOn());
        } else if (wake) {
          e.preventDefault();
          e.stopPropagation();
          novaSet(true);
        }
      }, true);
      window.addEventListener("resize", novaReposition);
      window.addEventListener("scroll", novaOnScroll, { capture: true, passive: true });
      if (window.visualViewport) {
        window.visualViewport.addEventListener("scroll", novaOnScroll);
        window.visualViewport.addEventListener("resize", novaReposition);
      }
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(novaReposition);
      }
      document.addEventListener("pointerover", function (e) {
        var flyer = document.getElementById("novaFlyer");
        if (!flyer || flyer.hidden) return;
        var overSchool = e.target.closest && e.target.closest("[data-uni], #uniTip");
        flyer.classList.toggle("nova-aside", !!overSchool);
        var glow = document.getElementById("novaGlowBox");
        if (glow) glow.classList.toggle("nova-aside", !!overSchool);
      }, true);
    }
    document.addEventListener("mejor-nova", function () {
      labels();
      if (onChange) onChange();
    });
    document.addEventListener("mejor-lang", function () {
      labels();
      if (onChange) onChange();
    });
    novaApply();
    labels();
    if (onChange) onChange();
  }
  global.MejorNova = {
    isOn: novaIsOn,
    set: novaSet,
    apply: novaApply,
    bind: novaBind,
    point: novaPoint,
    park: novaPark,
    faceSvg: novaFaceSvg
  };

  if (!document.getElementById("mejor-flip-css")) {
    var css = document.createElement("style");
    css.id = "mejor-flip-css";
    css.textContent = [
      ".like.flip{display:block;width:100%;padding:0;border:0;background:transparent;cursor:pointer;perspective:1200px;-webkit-perspective:1200px;text-align:center;font:inherit;color:inherit;transform-style:preserve-3d;}",
      ".like .flip-inner{display:grid;width:100%;height:100%;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;transition:transform .72s cubic-bezier(.2,.7,.2,1),box-shadow .72s cubic-bezier(.2,.7,.2,1);border-radius:2px;box-shadow:0 8px 18px rgba(28,36,48,.08);will-change:transform;}",
      ".like:hover .flip-inner,.like:focus-visible .flip-inner{box-shadow:0 12px 24px rgba(28,36,48,.12);}",
      ".like.is-flipped .flip-inner{transform:rotateY(180deg);}",
      ".like .flip-face{grid-area:1/1;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:6px;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:2px;border:1.5px solid #1c2430;background:#fbf8f3;padding:14px 12px 12px;overflow:hidden;}",
      ".like .flip-face.front{transform:rotateY(0deg) translateZ(1px);}",
      ".like .flip-face.back{transform:rotateY(180deg) translateZ(1px);background:#fffaf1;}",
      ".like .flip-cue{margin-top:auto;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:#5c564c;font-weight:600;}",
      "html[lang='zh-Hans'] .like .flip-cue{letter-spacing:.04em;text-transform:none;}",
      "@media (prefers-reduced-motion:reduce){.like .flip-inner{transition:none;}.like:hover .flip-inner{box-shadow:0 10px 22px rgba(28,36,48,.12);}}"
    ].join("");
    document.head.appendChild(css);
  }

  if (!document.getElementById("mejor-nova-css")) {
    var novaCss = document.createElement("style");
    novaCss.id = "mejor-nova-css";
    novaCss.textContent = [
      "body.nova-on .app,body.nova-on .wrap{padding-bottom:72px;}",
      ".nova-guide{display:none!important;}",
      ".nova-wake[hidden],#novaFlyer[hidden],#novaGlowBox[hidden]{display:none!important;}",
      ".nova-wake{position:fixed;left:16px;bottom:16px;z-index:80;appearance:none;cursor:pointer;font:inherit;font-weight:700;font-size:.85rem;border:1.5px solid #1c2430;background:#2f5d50;color:#fbf8f3;padding:10px 14px;box-shadow:0 10px 28px rgba(28,36,48,.14);}",
      ".nova-wake:hover{background:#264a40;}",
      "#novaFlyer{position:fixed;z-index:70;width:72px;height:84px;overflow:visible;pointer-events:none;}",
      "#novaFlyer .nova-bot{position:relative;width:72px;height:84px;overflow:visible;pointer-events:none;}",
      "#novaFlyer .nova-bot > svg{width:72px;height:84px;display:block;}",
      "#novaFlyer .eye{transform-origin:center;animation:mejorNovaBlink 5.5s infinite;}",
      "#novaFlyer .nova-say{pointer-events:none;position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);width:max-content;max-width:min(240px,calc(100vw - 24px));box-sizing:border-box;background:#fbf8f3;color:#1c2430;border:1.5px solid #1c2430;border-radius:2px;padding:10px 12px;overflow-wrap:anywhere;box-shadow:0 8px 20px rgba(28,36,48,.12);}",
      "#novaFlyer.say-below .nova-say{bottom:auto;top:calc(100% + 8px);}",
      "#novaFlyer.say-left .nova-say{left:auto;right:0;transform:none;}",
      "#novaFlyer .nova-say b{display:block;font-size:.64rem;letter-spacing:.12em;text-transform:uppercase;color:#5e6773;margin-bottom:3px;}",
      "html[lang='zh-Hans'] #novaFlyer .nova-say b{letter-spacing:.03em;text-transform:none;}",
      "#novaFlyer .nova-say p{margin:0;font-size:.8rem;line-height:1.35;}",
      "#novaFlyer .nova-say .where{margin-top:5px;font-size:.72rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:#2f5d50;}",
      "html[lang='zh-Hans'] #novaFlyer .nova-say .where{letter-spacing:.02em;text-transform:none;}",
      "#novaFlyer .nova-quiet{pointer-events:auto;margin-top:6px;appearance:none;cursor:pointer;font:inherit;font-size:.72rem;font-weight:700;border:1px solid #1c2430;border-radius:2px;background:#fff;color:#1c2430;padding:4px 8px;}",
      "#novaFlyer .nova-quiet:hover{background:#e7efe9;}",
      "#novaFlyer.nova-aside{opacity:.28;}",
      "#novaFlyer.nova-aside .nova-say{visibility:hidden;}",
      "#novaFlyer.nova-cheer{left:16px!important;right:auto!important;bottom:16px!important;top:auto!important;width:auto!important;max-width:min(320px,calc(100vw - 32px));height:auto;display:grid;grid-template-columns:72px minmax(0,1fr);gap:10px;align-items:end;}",
      "#novaFlyer.nova-cheer .nova-say{position:relative;left:auto;bottom:auto;top:auto;transform:none;max-width:min(240px,calc(100vw - 120px));width:auto;}",
      "#novaGlowBox{position:fixed;z-index:69;pointer-events:none;box-sizing:border-box;border:0;border-radius:2px;box-shadow:0 0 0 3px #2f5d50,0 0 0 7px #e0a33a,0 0 18px rgba(224,163,58,.55);animation:mejorNovaGlow 1.4s ease-in-out infinite;transition:opacity .2s;}",
      "#novaGlowBox.nova-aside{opacity:0;}",
      ".like.nova-glow .flip-inner{box-shadow:0 0 0 3px #2f5d50,0 0 0 7px #e0a33a,0 0 16px rgba(224,163,58,.4)!important;}",
      ".star.nova-glow .planet{box-shadow:0 0 0 3px #fbf8f3,0 0 0 7px #e0a33a;}",
      "@keyframes mejorNovaBlink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.12)}}",
      "@keyframes mejorNovaGlow{0%,100%{box-shadow:0 0 0 3px #2f5d50,0 0 0 6px rgba(224,163,58,.7),0 0 12px rgba(47,93,80,.35)}50%{box-shadow:0 0 0 3px #2f5d50,0 0 0 8px #e0a33a,0 0 22px rgba(224,163,58,.75)}}",
      "@media (prefers-reduced-motion:reduce){#novaFlyer .eye,#novaGlowBox{animation:none!important}}",
      "@media print{#novaFlyer,#novaGlowBox,.nova-wake,.nova-guide{display:none!important;}}"
    ].join("");
    document.head.appendChild(novaCss);
  }
})(window);
