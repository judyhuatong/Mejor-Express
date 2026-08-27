/* Official undergraduate subject / major names under each faculty.
   Names follow university course/department lists (Aug 2026).
   We do not copy every “with Year Abroad / MSci” twin — same subject, extra years.
   kid / kidZh = one line for age 14. */
(function () {
  function m(name, kid, kidZh) {
    return { name: name, kid: kid, kidZh: kidZh };
  }

  var S = {
    accounting: m("Accounting", "You learn how companies count money, honestly.", "学习公司怎样老实记账。"),
    ancient: m("Ancient History", "You study Greece, Rome, and other old worlds.", "学习希腊、罗马和其他古文明。"),
    anthro: m("Anthropology", "You study what it means to be human, now and long ago.", "研究“做人”是什么意思，现在和很久以前。"),
    arch: m("Architecture", "You design buildings people live and work in.", "设计给人住、给人用的房子。"),
    archSci: m("Archaeology", "You study old objects and places to learn about people in the past.", "研究古老的东西和地方，了解过去的人。"),
    artHist: m("History of Art", "You study paintings, sculptures, and why they matter.", "研究画、雕塑，以及它们为什么重要。"),
    artsci: m("Arts and Sciences", "You mix arts and science in one degree.", "把文科和理科放在同一个学位里学。"),
    astro: m("Astrophysics / Astronomy", "You study stars, planets, and space.", "研究星星、行星和太空。"),
    audio: m("Audiology", "You learn about hearing and how to help people who cannot hear well.", "学习听力，以及怎样帮助听不清的人。"),
    biochem: m("Biochemistry", "You study the chemistry inside living things.", "研究生命里面的化学。"),
    bioeng: m("Biomedical Engineering", "You build tools that help hospitals and bodies.", "做出帮助医院和身体的工具。"),
    bio: m("Biological Sciences", "You study living things: cells, plants, animals.", "研究活的东西：细胞、植物、动物。"),
    biomed: m("Biomedical Sciences", "You study the science behind health and the body.", "研究健康和人体背后的科学。"),
    biz: m("Business / Management", "You learn how companies and teams actually run.", "学习公司和团队实际上怎么运转。"),
    chem: m("Chemistry", "You study what stuff is made of, and how it changes.", "研究东西由什么组成，以及它怎样变化。"),
    chemeng: m("Chemical Engineering", "You turn lab chemistry into factories and useful products.", "把实验室里的化学变成工厂和有用的产品。"),
    civil: m("Civil Engineering", "You design bridges, roads, water systems, and cities’ bones.", "设计桥、路、水和城市的“骨头”。"),
    classics: m("Classics / Greek and Latin", "You study old languages and the stories of Greece and Rome.", "学习古希腊罗马的语言和故事。"),
    cs: m("Computer Science", "You learn to make apps, websites, games, and smart tools.", "学习做应用、网站、游戏和智能工具。"),
    crime: m("Security and Crime Science", "You study why crime happens, and how to make places safer.", "研究犯罪为什么发生，以及怎样让地方更安全。"),
    dent: m("Dentistry", "You learn to look after teeth and mouths.", "学习照顾牙齿和口腔。"),
    earth: m("Earth Sciences / Geology", "You study rocks, earthquakes, and how the planet is built.", "研究石头、地震，以及地球是怎样构成的。"),
    econ: m("Economics", "You study why people, companies, and countries make money choices.", "研究人、公司和国家为什么做出金钱上的选择。"),
    edu: m("Education", "You learn how people learn, and how to teach.", "学习人怎样学习，以及怎样教书。"),
    ee: m("Electronic and Electrical Engineering", "You design circuits, phones, and power systems.", "设计电路、手机和电力系统。"),
    english: m("English Language and Literature", "You study books, writing, and how English works.", "学习书、写作，以及英语怎样运作。"),
    env: m("Environment / Environmental Science", "You study nature, climate, and how to look after the planet.", "研究自然、气候，以及怎样保护地球。"),
    film: m("Film / Media", "You learn to make or study films, TV, and online media.", "学习制作或研究电影、电视和网络媒体。"),
    fineart: m("Fine Art", "You make art with your hands and your eyes: drawing, paint, sculpture.", "用手和眼睛做艺术：画画、颜料、雕塑。"),
    finance: m("Finance", "You study how money is saved, lent, and grown.", "研究钱怎样被存、被借、被增长。"),
    food: m("Food / Agriculture", "You study farms, food, and how we feed people.", "研究农场、食物，以及我们怎样养活人。"),
    forest: m("Forestry", "You study forests, wood, and looking after trees.", "研究森林、木材，以及怎样照顾树。"),
    french: m("French", "You learn French, and the stories and culture that come with it.", "学习法语，以及它带来的故事和文化。"),
    geo: m("Geography", "You study places: cities, maps, climate, and how people live.", "研究地方：城市、地图、气候，以及人怎样生活。"),
    german: m("German", "You learn German language and culture.", "学习德语和德国文化。"),
    hist: m("History", "You study what people did in the past, with evidence.", "用证据研究过去的人做了什么。"),
    ir: m("Politics / International Relations", "You study countries, power, and public choices.", "研究国家、权力和公共决定。"),
    info: m("Information / Library Studies", "You study how people find, store, and use information.", "研究人怎样找到、保存和使用信息。"),
    jour: m("Journalism", "You learn to find facts and tell true stories to the public.", "学习找出事实，并把真实故事讲给大家。"),
    kines: m("Kinesiology / Sport Science", "You study how bodies move, train, and stay strong.", "研究身体怎样运动、训练和变强。"),
    lang: m("Modern Languages", "You learn other languages, and the cultures behind them.", "学习其他语言，以及语言背后的文化。"),
    law: m("Law (LLB / JD)", "You learn the rules a country uses, and how to argue with evidence.", "学习一个国家的规则，以及怎样用证据去论证。"),
    ling: m("Linguistics / Language Sciences", "You study how human language works in the brain and in the world.", "研究人类语言在大脑里和世界上怎样运作。"),
    marketing: m("Marketing", "You learn how companies talk to customers.", "学习公司怎样和顾客说话。"),
    math: m("Mathematics", "You study numbers, proof, and patterns.", "研究数字、证明和规律。"),
    me: m("Mechanical Engineering", "You design machines that move: engines, robots, planes.", "设计会动的机器：引擎、机器人、飞机。"),
    med: m("Medicine (MBBS / MD)", "You study the human body to become a doctor. This path is long.", "学习人体，以后当医生。这条路很长。"),
    medphys: m("Medical Physics", "You use physics to help hospitals, like scans and radiation.", "用物理学帮助医院，比如扫描和放射。"),
    music: m("Music", "You practise an instrument or voice, and learn how music is built.", "练习乐器或唱歌，并学习音乐是怎样组成的。"),
    nurse: m("Nursing", "You learn to look after sick people every day, in a team.", "学习每天照顾病人，并且和团队一起工作。"),
    pharm: m("Pharmacy", "You learn how medicines work, and how to give them safely.", "学习药怎样起作用，以及怎样安全给药。"),
    phil: m("Philosophy", "You study big questions: what is true, fair, or real.", "研究大问题：什么是真的、公平的、真实的。"),
    phys: m("Physics", "You study how the universe works: forces, energy, light.", "研究宇宙怎样运作：力、能量、光。"),
    planning: m("Urban Planning", "You design how cities grow: streets, homes, parks, transport.", "设计城市怎样长大：街道、住房、公园、交通。"),
    psych: m("Psychology", "You study why people think, feel, and act the way they do.", "研究人为什么这样想、这样感觉、这样行动。"),
    psychi: m("Psychiatry / Neuroscience", "You study the brain, mental health, and nerves.", "研究大脑、心理健康和神经。"),
    ph: m("Public Health / Population Health", "You keep a whole city healthy, not only one person.", "让整座城市保持健康，不只一个人。"),
    social: m("Social Work", "You help families and communities when life is hard.", "在生活很难的时候，帮助家庭和社区。"),
    socio: m("Sociology", "You study how groups of people live together.", "研究一群人怎样一起生活。"),
    stats: m("Statistics / Data Science", "You learn to find patterns in numbers and data.", "学习在数字和数据里找规律。"),
    theatre: m("Theatre / Drama", "You learn acting, plays, and how a show is made.", "学习表演、戏剧，以及一场演出是怎样做出来的。"),
    vet: m("Veterinary Science", "You learn to look after sick and hurt animals.", "学习照顾生病或受伤的动物。"),
    chinese: m("Chinese / East Asian Studies", "You learn Chinese (or East Asian) language, history, and culture.", "学习中文（或东亚）的语言、历史和文化。"),
    informatics: m("Informatics", "Edinburgh’s official name for computer science: make programs and smart tools.", "爱丁堡对计算机科学的官方名称：做程序和智能工具。"),
    slade: m("Fine Art (Slade School)", "UCL’s art school: you make art with your hands and your eyes.", "UCL 的美术学院：用手和眼睛做艺术。"),
    softeng: m("Software Engineering", "You learn to build large computer programs as a team.", "学习怎样和团队一起做出大型电脑程序。"),
    war: m("War Studies", "King’s famous subject: why wars happen, and how countries keep peace.", "国王学院很有名的专业：战争为什么发生，国家怎样维持和平。"),
    biochemeng: m("Biochemical Engineering", "You use living cells like tiny factories to make useful things.", "把活细胞当成小工厂，做出有用的东西。"),
    midwife: m("Midwifery", "You learn to help babies be born, and look after new parents.", "学习帮助宝宝出生，并照顾新爸爸新妈妈。"),
    landscape: m("Landscape Architecture", "You design outdoor places: parks, gardens, and streets.", "设计室外的地方：公园、花园和街道。"),
    ai: m("Artificial Intelligence", "You teach computers to see, decide, and learn from examples.", "教电脑看、做决定，并从例子里学习。"),
    robotai: m("Robotics and Artificial Intelligence", "You build robots that can sense the world and make decisions.", "做出能感知世界、会做决定的机器人。"),
    cyber: m("Cyber Security", "You learn how to keep computers and data safe from attack.", "学习怎样保护电脑和数据，不被攻击。"),
    datasci: m("Data Science", "You turn huge piles of numbers into answers people can use.", "把一大堆数字变成别人能用的答案。"),
    compsoft: m("Computing and Software Systems", "Melbourne’s name: you learn to design and build software systems.", "墨尔本的名称：学习设计和做出软件系统。"),
    infosec: m("Information Security", "You study how to protect information: passwords, networks, and secrets.", "研究怎样保护信息：密码、网络和秘密。"),
    softdev: m("Software Development", "You learn to design and ship working software for real users.", "学习为真实用户设计和做出能用的软件。"),
    compsci: m("Computing Science", "Glasgow’s official name for computer science: make programs and smart tools.", "格拉斯哥对计算机科学的官方名称：做程序和智能工具。"),
    compeng: m("Computer Engineering", "You build the chips, circuits, and software inside computers and phones.", "做出电脑和手机里面的芯片、电路和软件。"),
    aero: m("Aerospace Engineering", "You design planes, rockets, and things that fly.", "设计飞机、火箭和会飞的东西。"),
    enveng: m("Environmental Engineering", "You design systems that clean water, air, and waste.", "设计清洁水、空气和垃圾的系统。"),
    mats: m("Materials Science / Engineering", "You study materials so you can make stronger, lighter, or greener things.", "研究材料，以便做出更强、更轻或更环保的东西。"),
    infosys: m("Information Systems", "You learn how companies use computers and data to actually run.", "学习公司怎样用电脑和数据来运转。"),
    actuarial: m("Actuarial Science", "You use math to price risk: insurance, pensions, and big money bets.", "用数学给风险定价：保险、养老金和大额赌注。"),
    graphic: m("Graphic Design", "You design posters, logos, screens, and how information looks.", "设计海报、标志、屏幕，以及信息看起来的样子。"),
    games: m("Game Design", "You learn to make video games: rules, worlds, and how they feel to play.", "学习做电子游戏：规则、世界，以及玩起来的感觉。"),
    genetics: m("Genetics", "You study DNA and how living things pass traits to the next generation.", "研究 DNA，以及生命怎样把特征传给下一代。"),
    marine: m("Marine Biology", "You study life in the ocean: fish, reefs, and the water itself.", "研究海洋里的生命：鱼、珊瑚礁，以及海水本身。"),
    neuro: m("Neuroscience", "You study the brain, nerves, and how thinking and feeling are built.", "研究大脑、神经，以及思考和感觉是怎样形成的。"),
    neural: m("Neural Science", "NYU’s official name: you study the brain and how it makes thought and behaviour.", "纽约大学的官方名称：研究大脑怎样产生思想和行为。"),
    pharmacol: m("Pharmacology", "You study how medicines work inside the body — not how to sell them in a shop.", "研究药在身体里怎样起作用——不是药店卖药。"),
    physiol: m("Physiology", "You study how living bodies work: heart, lungs, muscles, and cells.", "研究活的身体怎样工作：心脏、肺、肌肉和细胞。"),
    immuno: m("Immunology / Infection", "You study how the body fights germs, and what happens when that fight goes wrong.", "研究身体怎样对抗病菌，以及这场战斗出错时会怎样。"),
    zoology: m("Zoology", "You study animals: how they live, move, and fit into nature.", "研究动物：它们怎样生活、活动，以及怎样融入自然。"),
    microbio: m("Microbiology", "You study tiny living things: bacteria, viruses, and fungi.", "研究微小的生命：细菌、病毒和真菌。"),
    ecology: m("Ecology / Conservation", "You study how living things share a place, and how to protect it.", "研究生命怎样共享一个地方，以及怎样保护它。"),
    plant: m("Plant Science", "You study plants: how they grow, and why we need them.", "研究植物：它们怎样生长，以及我们为什么需要它们。"),
    criminol: m("Criminology", "You study crime, punishment, and why societies make those rules.", "研究犯罪、惩罚，以及社会为什么定这些规则。"),
    theology: m("Theology / Religious Studies", "You study religions, beliefs, and the questions people ask about meaning.", "研究宗教、信仰，以及人关于意义的大问题。"),
    celtic: m("Celtic Studies", "You study Celtic languages, stories, and history — including Scottish Gaelic.", "研究凯尔特语言、故事和历史，包括苏格兰盖尔语。"),
    scot: m("Scottish History / Studies", "You study Scotland’s past and culture with evidence.", "用证据研究苏格兰的过去和文化。"),
    mideast: m("Islamic and Middle Eastern Studies", "You study the languages, history, and cultures of the Middle East.", "研究中东的语言、历史和文化。"),
    japan: m("Japanese", "You learn Japanese language, and the stories and culture that come with it.", "学习日语，以及它带来的故事和文化。"),
    hispanic: m("Spanish / Hispanic Studies", "You learn Spanish, and the cultures of Spain and Latin America.", "学习西班牙语，以及西班牙和拉丁美洲的文化。"),
    italian: m("Italian", "You learn Italian language, and the stories and culture that come with it.", "学习意大利语，以及它带来的故事和文化。"),
    construction: m("Construction Management", "You learn to run building projects: time, cost, safety, and people.", "学习管理建造项目：时间、成本、安全和人员。"),
    property: m("Real Estate / Property", "You study buildings as money and as places people use.", "把房子既当钱，也当给人用的地方来研究。"),
    interior: m("Interior Design", "You design the inside of rooms: layout, light, and how a space feels.", "设计房间内部：布局、光线，以及空间给人的感觉。"),
    ux: m("User Experience Design", "You design how apps and websites feel to use, not only how they look.", "设计应用和网站用起来的感觉，不只是看起来的样子。"),
    maritime: m("Maritime Engineering", "You design ships and ocean structures. Southampton’s older name was Ship Science.", "设计船和海上结构。南安普顿以前叫 Ship Science。"),
    ocean: m("Oceanography", "You study the ocean: water, currents, climate, and life in the sea.", "研究海洋：水、洋流、气候，以及海里的生命。"),
    acoust: m("Acoustical Engineering", "You engineer sound and vibration: concert halls, quieter planes, clearer audio.", "给声音和振动做工程：音乐厅、更安静的飞机、更清楚的音频。"),
    nuclear: m("Nuclear Engineering", "You study nuclear energy, radiation, and how to use them safely.", "研究核能、辐射，以及怎样安全使用它们。"),
    mining: m("Mining Engineering", "You design how to take minerals from the ground safely, and with less harm.", "设计怎样安全地从地下取出矿物，并减少伤害。"),
    indeng: m("Industrial Engineering", "You design how factories, hospitals, and systems move people and stuff better.", "设计工厂、医院和系统怎样更好地运送人和东西。"),
    mechatron: m("Mechatronics", "You mix machines, electronics, and code so robots and devices can move and sense.", "把机械、电子和代码放在一起，让机器人和装置能活动和感知。"),
    engphys: m("Engineering Physics", "You mix deep physics with engineering to build new devices.", "把较深的物理和工程放在一起，做出新装置。"),
    speech: m("Speech and Language Therapy", "You help people who find talking, swallowing, or understanding words hard.", "帮助说话、吞咽或理解词语有困难的人。"),
    physio: m("Physiotherapy", "You help people move again after injury or illness, using the body and evidence.", "用身体和证据，帮助受伤或生病的人重新活动。"),
    occ: m("Occupational Therapy", "You help people do everyday tasks again: dressing, school, work, play.", "帮助人重新做日常的事：穿衣服、上学、工作和玩耍。"),
    optom: m("Optometry", "You learn to look after eyes and vision. This is a clinical path.", "学习照顾眼睛和视力。这是临床路线。"),
    nutrition: m("Nutrition / Dietetics", "You study food and the body, and how to help people eat in a healthy way.", "研究食物和身体，以及怎样帮助人健康地吃。"),
    fashion: m("Fashion Design", "You design clothes: drawing, making, and how fabric behaves.", "设计衣服：画画、制作，以及布料怎样表现。"),
    musicTech: m("Music Technology", "You record, mix, and build music with computers and studios.", "用电脑和录音室录音、混音和做音乐。"),
    creative: m("Creative Writing", "You practise writing stories, poems, or scripts as the main subject.", "把写故事、诗或剧本当作主科学习。"),
    compLit: m("Comparative Literature", "You study books from more than one language or country, side by side.", "把不止一种语言或国家的书放在一起读。"),
    jewish: m("Hebrew and Jewish Studies", "You study Hebrew, Jewish history, and culture. A small, specialist UCL subject.", "学习希伯来语、犹太历史和文化。UCL 的一个较小的专门学科。"),
    dev: m("International Development", "You study why some places are poorer, and what people try to change.", "研究为什么有些地方更穷，以及人们怎样尝试改变。"),
    socpol: m("Social Policy", "You study how governments try to help people: schools, housing, health, money.", "研究政府怎样尝试帮助人：学校、住房、健康和钱。"),
    cognitive: m("Cognitive Science", "You study the mind with psychology, computers, language, and the brain together.", "把心理学、电脑、语言和大脑放在一起研究心智。"),
    humanSci: m("Human Sciences", "UCL’s mix: the human body, behaviour, and society in one degree.", "UCL 的混合学位：人体、行为和社会放在一起。"),
    natSci: m("Natural Sciences", "You study more than one science in one degree, then go deeper in one.", "在一个学位里学不止一门科学，然后再深入其中一门。"),
    atmos: m("Atmospheric / Climate Science", "You study weather, air, and climate with physics and data.", "用物理和数据研究天气、空气和气候。"),
    foodsci: m("Food Science", "You study what food is made of, how to keep it safe, and how it is made.", "研究食物由什么组成、怎样保证安全，以及怎样做出来。"),
    cons: m("Natural Resources Conservation", "You study how to look after forests, water, and wildlife as a job, not only a feeling.", "学习把照顾森林、水和野生动物当成工作，不只是感觉。"),
    advert: m("Advertising", "You learn how ads are planned, made, and tested.", "学习广告怎样被计划、制作和测试。"),
    animalSci: m("Animal Science", "You study farm and other animals: health, food, and care — not the full vet licence.", "研究农场和其他动物：健康、食物和照顾——不是完整的兽医执照。"),
    ima: m("Interactive Media Arts", "NYU’s name: you make art with code, sensors, and screens.", "纽约大学的名称：用代码、传感器和屏幕做艺术。"),
    product: m("Product Design", "You design everyday objects: how they look, feel, and get made.", "设计日常物品：看起来、摸起来，以及怎样做出来。")
  };

  var ENG = [S.chemeng, S.civil, S.cs, S.ee, S.me, S.bioeng, S.medphys];
  var STEM = [S.math, S.phys, S.astro, S.chem, S.earth, S.stats];
  var LIFE = [S.bio, S.biochem, S.biomed];
  var ARTS = [S.english, S.hist, S.phil, S.lang, S.french, S.german, S.chinese, S.ling, S.fineart, S.music, S.film, S.theatre, S.artHist];
  var SOC = [S.anthro, S.econ, S.geo, S.ir, S.socio, S.archSci, S.ancient];
  var HEALTH = [S.med, S.biomed, S.ph, S.psych];
  var BIZ = [S.biz, S.accounting, S.finance, S.econ, S.marketing];

  var MAJ = {
    ucl: {
      "Faculty of Arts & Humanities": [S.english, S.lang, S.slade, S.classics, S.phil, S.info, S.artsci, S.chinese, S.jewish, S.creative, S.hispanic, S.italian, S.japan, S.mideast, S.compLit, S.french, S.german],
      "The Bartlett (Built Environment)": [S.arch, S.planning, S.landscape, S.env, S.construction, S.property],
      "Faculty of Brain Sciences": [S.psych, S.ling, S.audio, S.psychi, S.neuro, S.speech],
      "Faculty of Engineering Sciences": [S.chemeng, S.civil, S.cs, S.ee, S.me, S.bioeng, S.biochemeng, S.medphys, S.biz, S.crime, S.robotai, S.enveng, S.ai, S.cyber, S.datasci],
      "UCL Institute of Education (IOE)": [S.edu, S.psych],
      "Faculty of Laws": [S.law],
      "Faculty of Life Sciences": [S.bio, S.biochem, S.biomed, S.pharm, S.pharmacol, S.physiol, S.immuno, S.humanSci, S.genetics, S.zoology],
      "Faculty of Mathematical & Physical Sciences": [S.chem, S.earth, S.math, S.phys, S.astro, S.stats, S.env, S.natSci, S.datasci, S.atmos],
      "Faculty of Medical Sciences": [S.med, S.biomed, S.dent],
      "Faculty of Population Health Sciences": [S.ph],
      "Faculty of Social & Historical Sciences": [S.anthro, S.econ, S.geo, S.hist, S.artHist, S.ir, S.archSci, S.ancient, S.socpol]
    },
    melbourne: {
      "Faculty of Architecture, Building and Planning": [S.arch, S.planning, S.landscape, S.construction, S.property],
      "Faculty of Arts": [S.english, S.hist, S.lang, S.ir, S.phil, S.anthro, S.socio, S.film, S.criminol, S.creative, S.japan, S.hispanic, S.chinese],
      "Faculty of Business and Economics": BIZ.concat([S.infosys, S.actuarial]),
      "Faculty of Education": [S.edu],
      "Faculty of Engineering and Information Technology": [S.chemeng, S.civil, S.cs, S.softeng, S.ee, S.me, S.bioeng, S.compsoft, S.aero, S.enveng, S.mechatron, S.datasci, S.cyber, S.ai],
      "Faculty of Fine Arts and Music": [S.fineart, S.music, S.film, S.theatre, S.graphic, S.games, S.interior, S.ux, S.product],
      "Melbourne Law School": [S.law, S.criminol],
      "Faculty of Medicine, Dentistry and Health Sciences": [S.med, S.dent, S.nurse, S.psych, S.ph, S.biomed, S.nutrition, S.immuno, S.neuro],
      "Faculty of Science": [S.bio, S.chem, S.math, S.phys, S.earth, S.env, S.vet, S.stats, S.psych, S.datasci, S.genetics, S.zoology, S.microbio, S.ecology, S.plant, S.marine, S.animalSci, S.food]
    },
    unsw: {
      "Arts, Design & Architecture": [S.arch, S.fineart, S.film, S.edu, S.english, S.lang, S.hist, S.ir, S.graphic, S.construction, S.interior, S.planning, S.landscape, S.product],
      "UNSW Business School": BIZ.concat([S.infosys, S.actuarial]),
      "Engineering": [S.chemeng, S.civil, S.cs, S.softeng, S.ee, S.me, S.bioeng, S.ai, S.cyber, S.compeng, S.aero, S.enveng, S.mining, S.mechatron, S.datasci],
      "Law & Justice": [S.law, S.crime, S.criminol],
      "Medicine & Health": [S.med, S.ph, S.psych, S.biomed, S.optom, S.physio, S.nutrition],
      "Science": [S.bio, S.chem, S.math, S.phys, S.earth, S.env, S.psych, S.stats, S.datasci, S.neuro, S.genetics, S.marine, S.microbio, S.ecology]
    },
    sydney: {
      "Faculty of Arts and Social Sciences": [S.english, S.hist, S.lang, S.ir, S.econ, S.edu, S.psych, S.socio, S.anthro, S.criminol, S.film, S.phil, S.japan, S.hispanic, S.chinese, S.creative],
      "University of Sydney Business School": BIZ.concat([S.infosys, S.actuarial]),
      "Faculty of Engineering": [S.chemeng, S.civil, S.cs, S.ee, S.me, S.bioeng, S.cyber, S.datasci, S.softdev, S.aero, S.enveng, S.mechatron, S.ai],
      "Faculty of Medicine and Health": [S.med, S.dent, S.nurse, S.pharm, S.ph, S.biomed, S.physio, S.occ, S.speech, S.midwife, S.nutrition],
      "Faculty of Science": [S.bio, S.chem, S.math, S.phys, S.earth, S.env, S.psych, S.vet, S.stats, S.genetics, S.marine, S.zoology, S.microbio, S.ecology, S.plant, S.animalSci, S.neuro],
      "Sydney School of Architecture, Design and Planning": [S.arch, S.planning, S.fineart, S.construction, S.interior, S.landscape, S.graphic],
      "Sydney Conservatorium of Music": [S.music],
      "Sydney Law School": [S.law, S.criminol]
    },
    toronto: {
      "Faculty of Applied Science & Engineering": [S.chemeng, S.civil, S.cs, S.ee, S.me, S.bioeng, S.compeng, S.aero, S.enveng, S.indeng, S.mining, S.engphys, S.mats],
      "John H. Daniels Faculty of Architecture, Landscape, and Design": [S.arch, S.planning, S.landscape, S.fineart],
      "Faculty of Arts & Science": [S.anthro, S.artHist, S.astro, S.bio, S.chem, S.cs, S.econ, S.english, S.french, S.geo, S.hist, S.ir, S.ling, S.math, S.music, S.phil, S.phys, S.psych, S.socio, S.stats, S.chinese, S.datasci, S.infosec, S.actuarial, S.genetics, S.neuro, S.pharmacol, S.immuno, S.zoology, S.microbio, S.ecology, S.criminol, S.cognitive, S.compLit, S.creative, S.japan, S.hispanic, S.italian, S.theology, S.classics, S.plant, S.film],
      "Faculty of Dentistry": [S.dent],
      "Faculty of Information": [S.info, S.cs],
      "Faculty of Kinesiology & Physical Education": [S.kines],
      "Henry N.R. Jackman Faculty of Law": [S.law, S.criminol],
      "Rotman School of Management": [S.biz, S.finance, S.accounting],
      "Temerty Faculty of Medicine": [S.med],
      "Faculty of Music": [S.music],
      "Lawrence Bloomberg Faculty of Nursing": [S.nurse],
      "Leslie Dan Faculty of Pharmacy": [S.pharm],
      "Dalla Lana School of Public Health": [S.ph],
      "Factor-Inwentash Faculty of Social Work": [S.social],
      "Ontario Institute for Studies in Education (OISE)": [S.edu, S.psych]
    },
    edinburgh: {
      "College of Arts, Humanities & Social Sciences": [S.english, S.hist, S.lang, S.law, S.edu, S.fineart, S.music, S.biz, S.econ, S.ir, S.phil, S.socio, S.celtic, S.scot, S.mideast, S.japan, S.hispanic, S.italian, S.theology, S.socpol, S.social, S.anthro, S.archSci, S.arch, S.cognitive, S.creative, S.criminol, S.film, S.theatre, S.chinese, S.kines, S.dev],
      "College of Medicine & Veterinary Medicine": [S.med, S.vet, S.biomed, S.bio, S.neuro, S.pharmacol, S.immuno],
      "College of Science & Engineering": [S.informatics, S.cs, S.ai, S.softeng, S.chemeng, S.civil, S.ee, S.me, S.math, S.phys, S.chem, S.earth, S.bio, S.env, S.genetics, S.ecology, S.zoology, S.datasci, S.cyber, S.astro, S.stats]
    },
    manchester: {
      "Faculty of Biology, Medicine and Health": [S.bio, S.med, S.ph, S.psych, S.pharm, S.nurse, S.dent, S.biomed, S.optom, S.speech, S.midwife, S.physio, S.pharmacol, S.neuro, S.immuno, S.kines, S.audio],
      "Faculty of Humanities": [S.english, S.hist, S.lang, S.ir, S.law, S.edu, S.biz, S.econ, S.fineart, S.music, S.phil, S.infosys, S.actuarial, S.criminol, S.fashion, S.planning, S.dev, S.socpol, S.anthro, S.film, S.theatre, S.japan, S.hispanic, S.theology, S.creative, S.arch, S.chinese],
      "Faculty of Science and Engineering": [S.chemeng, S.civil, S.cs, S.ee, S.me, S.math, S.phys, S.chem, S.earth, S.env, S.ai, S.softeng, S.aero, S.mats, S.nuclear, S.mechatron, S.datasci, S.cyber]
    },
    kcl: {
      "Faculty of Arts & Humanities": [S.english, S.hist, S.lang, S.phil, S.music, S.film, S.chinese, S.theology, S.compLit, S.creative, S.hispanic, S.mideast, S.japan],
      "Faculty of Dentistry, Oral & Craniofacial Sciences": [S.dent],
      "The Dickson Poon School of Law": [S.law],
      "Faculty of Life Sciences & Medicine": [S.bio, S.biomed, S.med, S.pharm, S.pharmacol, S.physiol, S.immuno, S.nutrition, S.neuro],
      "Faculty of Natural, Mathematical & Engineering Sciences": [S.math, S.phys, S.chem, S.cs, S.ee, S.bioeng, S.ai, S.datasci, S.cyber, S.robotai],
      "Florence Nightingale Faculty of Nursing, Midwifery & Palliative Care": [S.nurse, S.midwife],
      "Institute of Psychiatry, Psychology & Neuroscience (IoPPN)": [S.psych, S.psychi, S.neuro],
      "Faculty of Social Science & Public Policy": [S.ir, S.war, S.edu, S.ph, S.econ, S.geo, S.socio, S.dev, S.socpol, S.criminol],
      "King’s Business School": BIZ
    },
    columbia: {
      "Columbia College / School of General Studies": [S.english, S.hist, S.ir, S.econ, S.bio, S.chem, S.math, S.phys, S.psych, S.phil, S.artHist, S.lang, S.cs, S.neuro, S.compLit, S.creative, S.earth, S.env, S.socio, S.anthro, S.stats, S.film, S.chinese, S.japan, S.hispanic],
      "Fu Foundation School of Engineering and Applied Science": [S.cs, S.ee, S.me, S.civil, S.chemeng, S.bioeng, S.compeng, S.indeng, S.enveng, S.mats, S.datasci],
      "Graduate School of Architecture, Planning and Preservation": [S.arch, S.planning],
      "Columbia Business School": BIZ,
      "Columbia Law School": [S.law],
      "Columbia Journalism School": [S.jour],
      "School of International and Public Affairs (SIPA)": [S.ir, S.econ, S.dev],
      "Mailman School of Public Health": [S.ph],
      "School of Social Work": [S.social],
      "School of the Arts": [S.film, S.theatre, S.fineart, S.music, S.creative],
      "School of Nursing": [S.nurse],
      "Vagelos College of Physicians and Surgeons": [S.med],
      "College of Dental Medicine": [S.dent],
      "Teachers College (affiliate)": [S.edu, S.psych]
    },
    ubc: {
      "Faculty of Applied Science": [S.chemeng, S.civil, S.cs, S.ee, S.me, S.arch, S.nurse, S.compeng, S.enveng, S.mining, S.engphys, S.mechatron, S.bioeng],
      "Faculty of Arts": [S.english, S.hist, S.lang, S.ir, S.econ, S.psych, S.fineart, S.music, S.socio, S.anthro, S.phil, S.criminol, S.creative, S.japan, S.hispanic, S.cognitive, S.film, S.theatre, S.chinese, S.ling],
      "Sauder School of Business": BIZ.concat([S.infosys]),
      "Faculty of Dentistry": [S.dent],
      "Faculty of Education": [S.edu, S.kines],
      "Faculty of Forestry": [S.forest, S.env, S.cons],
      "Faculty of Land and Food Systems": [S.food, S.env, S.bio, S.foodsci, S.nutrition],
      "Peter A. Allard School of Law": [S.law],
      "Faculty of Medicine": [S.med, S.ph, S.biomed, S.midwife],
      "Faculty of Pharmaceutical Sciences": [S.pharm],
      "Faculty of Science": [S.bio, S.chem, S.math, S.phys, S.cs, S.earth, S.stats, S.env, S.datasci, S.ocean, S.atmos, S.microbio, S.zoology, S.ecology, S.plant, S.neuro, S.cognitive]
    },
    nyu: {
      "College of Arts & Science": [S.english, S.hist, S.ir, S.econ, S.bio, S.chem, S.math, S.phys, S.psych, S.lang, S.phil, S.cs, S.datasci, S.neural, S.cognitive, S.neuro, S.socio, S.anthro, S.ling, S.env, S.stats, S.creative, S.compLit, S.film, S.hispanic, S.chinese],
      "Tandon School of Engineering": [S.cs, S.ee, S.me, S.civil, S.chemeng, S.bioeng, S.compeng, S.cyber, S.datasci, S.ai, S.enveng, S.indeng],
      "Leonard N. Stern School of Business": BIZ.concat([S.infosys]),
      "Tisch School of the Arts": [S.film, S.theatre, S.fineart, S.music, S.games, S.ima],
      "Steinhardt School of Culture, Education, and Human Development": [S.edu, S.music, S.film, S.psych, S.kines, S.nutrition, S.speech, S.musicTech],
      "Rory Meyers College of Nursing": [S.nurse],
      "Silver School of Social Work": [S.social],
      "School of Global Public Health": [S.ph],
      "School of Law": [S.law],
      "Grossman School of Medicine": [S.med],
      "College of Dentistry": [S.dent]
    },
    uiuc: {
      "Grainger College of Engineering": [S.cs, S.ee, S.me, S.civil, S.chemeng, S.bioeng, S.compeng, S.aero, S.mats, S.enveng, S.nuclear, S.indeng, S.datasci, S.ai],
      "College of Liberal Arts & Sciences": [S.english, S.hist, S.ir, S.econ, S.bio, S.chem, S.math, S.phys, S.psych, S.lang, S.phil, S.stats, S.env, S.datasci, S.actuarial, S.genetics, S.atmos, S.neuro, S.microbio, S.zoology, S.ecology, S.plant, S.criminol, S.hispanic, S.japan, S.italian, S.creative, S.ling],
      "Gies College of Business": BIZ.concat([S.infosys]),
      "College of Agricultural, Consumer and Environmental Sciences (ACES)": [S.food, S.env, S.bio, S.animalSci, S.foodsci],
      "College of Fine & Applied Arts": [S.fineart, S.arch, S.music, S.theatre, S.graphic, S.landscape, S.planning],
      "College of Media": [S.jour, S.film, S.advert],
      "College of Education": [S.edu],
      "School of Information Sciences": [S.info, S.cs],
      "College of Applied Health Sciences": [S.kines, S.ph, S.speech],
      "College of Law": [S.law],
      "College of Veterinary Medicine": [S.vet],
      "School of Social Work": [S.social]
    },
    glasgow: {
      "College of Arts & Humanities": [S.english, S.hist, S.lang, S.phil, S.fineart, S.music, S.film, S.celtic, S.scot, S.theology, S.creative, S.musicTech, S.theatre, S.hispanic, S.italian],
      "College of Medical, Veterinary & Life Sciences": [S.med, S.vet, S.bio, S.ph, S.nurse, S.dent, S.biomed, S.genetics, S.marine, S.neuro, S.pharmacol, S.zoology, S.microbio, S.physio, S.kines, S.midwife, S.optom, S.immuno],
      "College of Science & Engineering": [S.compsci, S.softeng, S.chemeng, S.civil, S.ee, S.me, S.math, S.phys, S.chem, S.env, S.aero, S.product, S.datasci, S.cyber, S.robotai, S.earth, S.stats, S.ai],
      "College of Social Sciences": [S.law, S.edu, S.econ, S.biz, S.ir, S.psych, S.social, S.socio, S.infosys, S.criminol, S.socpol]
    },
    southampton: {
      "Faculty of Arts and Humanities": [S.english, S.hist, S.lang, S.film, S.music, S.fineart, S.graphic, S.fashion, S.musicTech, S.product],
      "Faculty of Engineering and Physical Sciences": [S.cs, S.ee, S.me, S.civil, S.chemeng, S.math, S.phys, S.chem, S.ai, S.softeng, S.cyber, S.aero, S.maritime, S.acoust, S.audio, S.datasci, S.bioeng],
      "Faculty of Environmental and Life Sciences": [S.bio, S.env, S.psych, S.earth, S.marine, S.ocean, S.kines, S.ecology, S.zoology],
      "Faculty of Medicine": [S.med, S.ph, S.nurse, S.biomed, S.midwife, S.physio],
      "Faculty of Social Sciences": [S.law, S.edu, S.econ, S.biz, S.ir, S.infosys, S.criminol, S.socpol, S.stats]
    },
    sheffield: {
      "Faculty of Arts and Humanities": [S.english, S.hist, S.lang, S.music, S.jour, S.phil, S.creative, S.musicTech, S.film],
      "Faculty of Engineering": [S.cs, S.ee, S.me, S.civil, S.chemeng, S.bioeng, S.ai, S.cyber, S.softeng, S.aero, S.mats, S.mechatron, S.enveng, S.datasci],
      "Faculty of Health": [S.med, S.ph, S.nurse, S.dent, S.biomed, S.speech, S.midwife, S.physio, S.occ],
      "Faculty of Science": [S.bio, S.math, S.phys, S.chem, S.psych, S.stats, S.zoology, S.genetics, S.plant, S.ecology, S.datasci, S.neuro],
      "Faculty of Social Sciences": [S.law, S.edu, S.econ, S.biz, S.ir, S.arch, S.social, S.socio, S.planning, S.criminol, S.socpol, S.landscape]
    }
  };

  var STATION = {
    "Accounting": "biz",
    "Ancient History": "hist",
    "Anthropology": "ir",
    "Architecture": "arch",
    "Archaeology": "hist",
    "History of Art": "hist",
    "Arts and Sciences": "lang",
    "Astrophysics / Astronomy": "stem",
    "Audiology": "psy",
    "Biochemistry": "chem",
    "Biomedical Engineering": "eng",
    "Biological Sciences": "bio",
    "Biomedical Sciences": "bio",
    "Business / Management": "biz",
    "Chemistry": "chem",
    "Chemical Engineering": "eng",
    "Civil Engineering": "eng",
    "Classics / Greek and Latin": "lang",
    "Computer Science": "cs",
    "Security and Crime Science": "law",
    "Dentistry": "dent",
    "Earth Sciences / Geology": "env",
    "Economics": "econ",
    "Education": "edu",
    "Electronic and Electrical Engineering": "eng",
    "English Language and Literature": "lang",
    "Environment / Environmental Science": "env",
    "Film / Media": "art",
    "Fine Art": "art",
    "Finance": "biz",
    "Food / Agriculture": "env",
    "Forestry": "env",
    "French": "lang",
    "Geography": "env",
    "German": "lang",
    "History": "hist",
    "Politics / International Relations": "ir",
    "Information / Library Studies": "cs",
    "Journalism": "art",
    "Kinesiology / Sport Science": "sport",
    "Modern Languages": "lang",
    "Law (LLB / JD)": "law",
    "Linguistics / Language Sciences": "lang",
    "Marketing": "biz",
    "Mathematics": "stem",
    "Mechanical Engineering": "eng",
    "Medicine (MBBS / MD)": "med",
    "Medical Physics": "stem",
    "Music": "music",
    "Nursing": "nurse",
    "Pharmacy": "pharm",
    "Philosophy": "hist",
    "Physics": "stem",
    "Urban Planning": "arch",
    "Psychology": "psy",
    "Psychiatry / Neuroscience": "psy",
    "Public Health / Population Health": "ph",
    "Social Work": "social",
    "Sociology": "ir",
    "Statistics / Data Science": "stem",
    "Theatre / Drama": "art",
    "Veterinary Science": "vet",
    "Chinese / East Asian Studies": "lang",
    "Informatics": "cs",
    "Fine Art (Slade School)": "art",
    "Software Engineering": "cs",
    "War Studies": "ir",
    "Biochemical Engineering": "eng",
    "Midwifery": "nurse",
    "Landscape Architecture": "arch",
    "Artificial Intelligence": "cs",
    "Robotics and Artificial Intelligence": "cs",
    "Cyber Security": "cs",
    "Data Science": "cs",
    "Computing and Software Systems": "cs",
    "Information Security": "cs",
    "Software Development": "cs",
    "Computing Science": "cs",
    "Computer Engineering": "eng",
    "Aerospace Engineering": "eng",
    "Environmental Engineering": "eng",
    "Materials Science / Engineering": "eng",
    "Information Systems": "biz",
    "Actuarial Science": "biz",
    "Graphic Design": "art",
    "Game Design": "art",
    "Genetics": "bio",
    "Marine Biology": "bio",
    "Neuroscience": "psy",
    "Neural Science": "psy",
    "Pharmacology": "pharm",
    "Physiology": "bio",
    "Immunology / Infection": "bio",
    "Zoology": "bio",
    "Microbiology": "bio",
    "Ecology / Conservation": "env",
    "Plant Science": "bio",
    "Criminology": "law",
    "Theology / Religious Studies": "hist",
    "Celtic Studies": "lang",
    "Scottish History / Studies": "hist",
    "Islamic and Middle Eastern Studies": "lang",
    "Japanese": "lang",
    "Spanish / Hispanic Studies": "lang",
    "Italian": "lang",
    "Construction Management": "arch",
    "Real Estate / Property": "arch",
    "Interior Design": "art",
    "User Experience Design": "art",
    "Maritime Engineering": "eng",
    "Oceanography": "env",
    "Acoustical Engineering": "eng",
    "Nuclear Engineering": "eng",
    "Mining Engineering": "eng",
    "Industrial Engineering": "eng",
    "Mechatronics": "eng",
    "Engineering Physics": "eng",
    "Speech and Language Therapy": "psy",
    "Physiotherapy": "sport",
    "Occupational Therapy": "sport",
    "Optometry": "med",
    "Nutrition / Dietetics": "ph",
    "Fashion Design": "art",
    "Music Technology": "music",
    "Creative Writing": "lang",
    "Comparative Literature": "lang",
    "Hebrew and Jewish Studies": "lang",
    "International Development": "ir",
    "Social Policy": "ir",
    "Cognitive Science": "psy",
    "Human Sciences": "bio",
    "Natural Sciences": "stem",
    "Atmospheric / Climate Science": "env",
    "Food Science": "env",
    "Natural Resources Conservation": "env",
    "Advertising": "art",
    "Animal Science": "bio",
    "Interactive Media Arts": "art",
    "Product Design": "art"
  };

  function majorsForStation(stationId) {
    var cat = window.MejorCatalog;
    if (!cat || !cat.faculties) return [];
    var map = cat.stationOf || STATION;
    var buckets = {};
    Object.keys(cat.faculties).forEach(function (uni) {
      (cat.faculties[uni] || []).forEach(function (fac) {
        (fac.majors || []).forEach(function (mj) {
          if (map[mj.name] !== stationId) return;
          if (!buckets[mj.name]) {
            buckets[mj.name] = { name: mj.name, kid: mj.kid, kidZh: mj.kidZh, unis: [] };
          }
          if (buckets[mj.name].unis.indexOf(uni) === -1) buckets[mj.name].unis.push(uni);
        });
      });
    });
    return Object.keys(buckets).map(function (k) { return buckets[k]; }).sort(function (a, b) {
      return b.unis.length - a.unis.length || a.name.localeCompare(b.name);
    });
  }

  function attach() {
    var cat = window.MejorCatalog;
    if (!cat || !cat.faculties) return;
    var missing = [];
    Object.keys(cat.faculties).forEach(function (uni) {
      (cat.faculties[uni] || []).forEach(function (fac) {
        if (MAJ[uni] && MAJ[uni][fac.name]) fac.majors = MAJ[uni][fac.name];
        else missing.push(uni + " · " + fac.name);
        (fac.majors || []).forEach(function (mj) {
          var sid = STATION[mj.name];
          if (sid && fac.subjects.indexOf(sid) === -1) fac.subjects.push(sid);
        });
      });
    });
    cat.missingMajors = missing;
    cat.stationOf = STATION;
    cat.majorsForStation = majorsForStation;
  }

  attach();
  if (window.MejorCatalog) window.MejorCatalog.attachMajors = attach;
})();
