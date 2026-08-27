/* Precise definitions for the search page. Kid lines stay in catalog-majors.js.
   Aliases help typos and short names (“mech eng”, “AI”, “机械”). */
(function (global) {
  function F(aliases, precise, preciseZh, unlike, unlikeZh, study, studyZh, path, pathZh, examples, examplesZh) {
    return {
      aliases: aliases,
      precise: precise,
      preciseZh: preciseZh,
      unlike: unlike,
      unlikeZh: unlikeZh,
      study: study,
      studyZh: studyZh,
      path: path,
      pathZh: pathZh,
      examples: examples || [],
      examplesZh: examplesZh || []
    };
  }

  var PE = [
    "Usually 3–4 years (BEng or BSc). A protected title such as Chartered or Professional Engineer often needs extra years and a licence.",
    "一般本科 3–4 年。要称“特许/职业工程师”，常常还要更长时间并拿执照。"
  ];
  var PU = [
    "Usually 3–4 years undergraduate. This is a first look, not a licence.",
    "一般本科 3–4 年。这是先看一看，不是执照。"
  ];
  var PL = [
    "UK-style LLB is often 3 years from school. US-style JD is usually after a first degree. Extra exams may be required to practise.",
    "英国式 LLB 常常从中学毕业后读 3 年。美国式 JD 常常要先读完一个学位。执业可能还要考试。"
  ];
  var PM = [
    "Often 5–6 years undergraduate plus supervised practice. A long, competitive path.",
    "常常本科 5–6 年，再加上实习。路很长，也很竞争。"
  ];

  var MAJORS = {
    "Mechanical Engineering": F(
      ["mech eng", "mechanical", "mecheng", "机械工程", "机械", "机械工"],
      "A university engineering degree about machines and moving systems: engines, robots, vehicles, heating, and factory equipment. You use calculus, physics, and computer drawing (CAD) to design parts, then test whether they fail safely. It is not vocational car-mechanic training.",
      "大学工科，研究会动的机器和系统：引擎、机器人、车辆、暖气和工厂设备。要用微积分、物理和电脑绘图（CAD）设计零件，并测试它会不会不安全地坏掉。这不是汽修技校。",
      "Not Electrical Engineering (circuits and power). Not Civil Engineering (buildings and bridges). Not Computer Science (software). Aerospace Engineering is the flying-machines cousin. Biomedical Engineering sits closer to hospitals.",
      "不是电气工程（电路和电力），不是土木工程（房子和桥），不是计算机科学（软件）。航空航天更靠近会飞的机器。生物医学工程更靠近医院。",
      "Typical early modules: maths, physics, statics (still forces), dynamics (moving things), thermodynamics (heat and energy), materials, manufacturing, and a team design project.",
      "前期常见课：数学、物理、静力学、动力学、热力学、材料、制造，以及小组设计项目。",
      PE[0], PE[1]
    ),
    "Civil Engineering": F(
      ["civil eng", "civil", "土木工程", "土木"],
      "Engineering for the built world that must not fall down: bridges, roads, water systems, tunnels, and the bones of cities. You combine maths, physics, materials, and site constraints.",
      "给不会倒的建成世界做工程：桥、路、供水、隧道和城市的“骨头”。要把数学、物理、材料和现场限制放在一起。",
      "Not Architecture (how spaces feel). Not Mechanical Engineering (machines). Not Construction as a trade school — this is a degree with structural analysis.",
      "不是建筑学（空间给人的感觉），不是机械工程（机器）。也不是技校里的施工培训——这是带结构分析的大学学位。",
      "Statics, structural mechanics, soil (geotechnics), fluids, surveying, materials, and design of beams, foundations, and water systems.",
      "静力学、结构力学、土力学、流体、测量、材料，以及梁、地基和供水系统的设计。",
      PE[0], PE[1]
    ),
    "Electronic and Electrical Engineering": F(
      ["eee", "electrical", "electronic", "ee", "电气工程", "电子工程", "电气"],
      "Engineering of electricity: circuits, power grids, phones, sensors, and control systems. You learn how electrons, signals, and energy are shaped into working devices.",
      "电的工程：电路、电网、手机、传感器和控制系统。学习怎样把电子、信号和能量做成能用的装置。",
      "Not Computer Science (software first). Not Mechanical Engineering (moving machines). Computer Engineering sits between hardware and software.",
      "不是计算机科学（软件优先），不是机械工程（会动的机器）。计算机工程在硬件和软件中间。",
      "Circuit theory, electronics, electromagnetics, programming for devices, power systems, and lab work with real boards.",
      "电路、电子、电磁、给设备编程、电力系统，以及真实电路板实验。",
      PE[0], PE[1]
    ),
    "Chemical Engineering": F(
      ["chem eng", "chemical", "化工", "化学工程"],
      "Turning lab chemistry into large, safe processes: fuels, medicines, food, water treatment, and materials. You scale reactions from a beaker to a plant.",
      "把实验室里的化学做成大规模、安全的流程：燃料、药、食品、水处理和材料。把烧杯里的反应放大到工厂。",
      "Not Chemistry (molecules and lab proof first). Not Mechanical Engineering (machines). Safety and process control are central.",
      "不是化学（分子和实验室证明优先），不是机械工程（机器）。安全和流程控制很重要。",
      "Mass and energy balances, thermodynamics, fluid flow, reactors, separation, and plant design.",
      "物料与能量衡算、热力学、流体、反应器、分离和工厂设计。",
      PE[0], PE[1]
    ),
    "Biomedical Engineering": F(
      ["bioeng", "bme", "生物医学工程", "医工"],
      "Engineering tools for bodies and hospitals: imaging, implants, prosthetics, and monitoring devices. You mix engineering with biology.",
      "给身体和医院做工程工具：成像、植入物、假肢和监测设备。把工程和生物学放在一起。",
      "Not Medicine (you are not training as a doctor). Not Mechanical Engineering alone. Not Biology without the design of devices.",
      "不是医学（不是培养医生），也不是单纯的机械工程，更不是不做设备的生物学。",
      "Maths, physics, anatomy basics, biomaterials, signals from the body, and design projects with clinicians in mind.",
      "数学、物理、基础解剖、生物材料、身体信号，以及面向医护的设计项目。",
      PE[0], PE[1]
    ),
    "Biochemical Engineering": F(
      ["biochem eng", "生化工程"],
      "Using living cells like tiny factories to make medicines, fuels, or food ingredients at industrial scale.",
      "把活细胞当成小工厂，大规模生产药、燃料或食品成分。",
      "Not Biochemistry (lab molecules). Not Chemical Engineering without living systems.",
      "不是生物化学（实验室分子），也不是不涉及生命体系的化学工程。",
      "Fermentation, bioreactors, downstream purification, and process safety.",
      "发酵、生物反应器、下游纯化和过程安全。",
      PE[0], PE[1]
    ),
    "Aerospace Engineering": F(
      ["aero", "aeronautical", "航天", "航空", "航空航天"],
      "Engineering of things that fly or go to space: aircraft, rockets, satellites, and the air that flows around them.",
      "给会飞或去太空的东西做工程：飞机、火箭、卫星，以及绕过它们的气流。",
      "Not Mechanical Engineering in general (though they share maths). Not being a pilot. Not Astronomy.",
      "不是一般机械工程（虽然数学很像），不是当飞行员，也不是天文学。",
      "Aerodynamics, structures, propulsion, control, and materials that stay light and strong.",
      "空气动力学、结构、推进、控制和又轻又强的材料。",
      PE[0], PE[1]
    ),
    "Environmental Engineering": F(
      ["env eng", "环境工程"],
      "Engineering to clean water, air, and waste, and to reduce harm from pollution. You design systems, not only study nature.",
      "清洁水、空气和垃圾，并减少污染伤害的工程。你设计系统，不只是研究自然。",
      "Not Environmental Science (measurement and ecology first). Not Civil Engineering without the pollution focus.",
      "不是环境科学（测量和生态优先），也不是不聚焦污染的土木工程。",
      "Water treatment, waste, air quality, environmental chemistry, and system design.",
      "水处理、废弃物、空气质量、环境化学和系统设计。",
      PE[0], PE[1]
    ),
    "Materials Science / Engineering": F(
      ["materials", "mse", "材料", "材料科学"],
      "The science of what stuff is made of — metals, polymers, ceramics, composites — so you can make stronger, lighter, or greener things.",
      "研究东西由什么组成：金属、高分子、陶瓷、复合材料，以便做出更强、更轻或更环保的东西。",
      "Not Chemistry alone. Not Mechanical Engineering without a materials focus.",
      "不是单纯的化学，也不是不聚焦材料的机械工程。",
      "Crystal structure, mechanical testing, processing, and failure analysis.",
      "晶体结构、力学测试、加工和失效分析。",
      PE[0], PE[1]
    ),
    "Computer Engineering": F(
      ["comp eng", "ce", "计算机工程"],
      "Hardware plus software inside computers, phones, and embedded devices: chips, circuits, and the programs that drive them.",
      "电脑、手机和嵌入式设备里的硬件加软件：芯片、电路，以及驱动它们的程序。",
      "Not Computer Science (software and theory first). Not Electrical Engineering without the computing focus.",
      "不是计算机科学（软件和理论优先），也不是不聚焦计算的电气工程。",
      "Digital logic, computer architecture, embedded programming, and electronics.",
      "数字逻辑、计算机体系结构、嵌入式编程和电子。",
      PE[0], PE[1]
    ),
    "Computer Science": F(
      ["cs", "comp sci", "computing", "计算机", "计算机科学", "电脑"],
      "The science of computation: algorithms, data structures, programming, and how to turn an idea into reliable software. You prove things can work, then you build them.",
      "计算的科学：算法、数据结构、编程，以及怎样把想法做成可靠的软件。你先证明它能成立，再把它做出来。",
      "Not Engineering of physical machines. Not IT support as a job title. Not Data Science alone (though they overlap). Informatics and Computing Science are official names for the same family.",
      "不是做实体机器的工程，不是“网管”这个职位，也不是单独的数据科学（虽然有重叠）。Informatics、Computing Science 是同一家族的官方名称。",
      "Programming, algorithms, computer systems, databases, and often a software project. Maths appears early.",
      "编程、算法、计算机系统、数据库，常常还有软件项目。数学出现得早。",
      PU[0], PU[1]
    ),
    "Informatics": F(
      ["informatics", "爱丁堡计算机", "信息学"],
      "Edinburgh’s official family name for computing: computer science, artificial intelligence, and related study in one school.",
      "爱丁堡对计算学科的官方总称：计算机科学、人工智能和相关学习在同一学院。",
      "Not a different subject from Computer Science. It is the school’s name for that family.",
      "不是和计算机科学不同的学科。这是该校对这一家族的名称。",
      "Programming, computation, maths, and later specialist options such as AI.",
      "编程、计算、数学，以及后来的人工智能等方向。",
      PU[0], PU[1]
    ),
    "Computing Science": F(
      ["computing science", "格拉斯哥计算机"],
      "Glasgow’s official name for computer science: programs, systems, and theory of computation.",
      "格拉斯哥对计算机科学的官方名称：程序、系统和计算理论。",
      "Same family as Computer Science. The spelling is the school’s official title.",
      "和计算机科学是同一家族。这个写法是学校的官方名称。",
      "Programming, algorithms, systems, and software projects.",
      "编程、算法、系统和软件项目。",
      PU[0], PU[1]
    ),
    "Artificial Intelligence": F(
      ["ai", "a.i.", "machine learning", "人工智能", "机器学习"],
      "A named computing degree about machines that learn from data, recognise patterns, and make decisions. You still need programming and maths; it is not science fiction.",
      "以数据学习、识别规律和做决定为主的计算学位。仍需要编程和数学。这不是科幻。",
      "Not Computer Science in general (broader). Not Robotics unless the title says so. Not a guarantee of an “AI job”.",
      "不是更宽的计算机科学。除非名称里有，否则不是机器人。也不能保证一份“人工智能工作”。",
      "Programming, probability, linear algebra, machine learning, and ethics of automated decisions.",
      "编程、概率、线性代数、机器学习和自动决策的伦理。",
      PU[0], PU[1]
    ),
    "Robotics and Artificial Intelligence": F(
      ["robotics", "robot ai", "机器人"],
      "UCL’s named degree mixing robots (sensing, moving, control) with AI (decision-making). Hardware labs matter as well as code.",
      "UCL 的命名学位：机器人（感知、运动、控制）加上人工智能（做决定）。硬件实验和代码都重要。",
      "Not Mechanical Engineering alone. Not a pure Computer Science degree.",
      "不是单纯的机械工程，也不是纯计算机科学学位。",
      "Programming, electronics, control, robot perception, and AI modules.",
      "编程、电子、控制、机器人感知和人工智能课程。",
      PE[0], PE[1]
    ),
    "Software Engineering": F(
      ["swe", "software", "软件工程"],
      "Building large programs as a team: requirements, design, testing, versions, and reliability — not only writing code for yourself.",
      "和团队一起做大型程序：需求、设计、测试、版本和可靠性——不只是自己写代码。",
      "Not Computer Science theory first. Not IT support. Closely related to Software Development as a title.",
      "不是理论优先的计算机科学，不是网管。和“软件开发”这个名称很近。",
      "Programming, software design, testing, team projects, and professional practice.",
      "编程、软件设计、测试、团队项目和职业规范。",
      PU[0], PU[1]
    ),
    "Software Development": F(
      ["dev", "software dev", "软件开发"],
      "Sydney’s named major about designing and shipping working software for real users.",
      "悉尼的命名专业：为真实用户设计和交付能用的软件。",
      "Same family as Software Engineering. The title is the school’s official wording.",
      "和软件工程是同一家族。这是学校的官方用词。",
      "Programming, design, testing, and product-style projects.",
      "编程、设计、测试和偏产品的项目。",
      PU[0], PU[1]
    ),
    "Cyber Security": F(
      ["cyber", "cybersecurity", "security engineering", "网络安全", "网安"],
      "Keeping computers, networks, and data safe from attack: finding weaknesses, designing defences, and thinking like an adversary — legally.",
      "保护电脑、网络和数据不被攻击：找弱点、做防御，并在合法范围内像对手一样思考。",
      "Not hacking as a crime. Not general Computer Science. Information Security is a close official title at some schools.",
      "不是违法黑客。不是一般计算机科学。有的学校官方名称是信息安全。",
      "Networks, operating systems, cryptography basics, secure coding, and risk.",
      "网络、操作系统、基础密码学、安全编程和风险。",
      PU[0], PU[1]
    ),
    "Information Security": F(
      ["infosec", "信息安全"],
      "Toronto’s named path about protecting information: cryptography, networks, and how secrets stay secret.",
      "多伦多的命名方向：保护信息——密码学、网络，以及秘密怎样保持秘密。",
      "Same family as Cyber Security. The title is the campus official wording.",
      "和网络安全是同一家族。这是该校官方用词。",
      "Maths, systems, cryptography, and security practice.",
      "数学、系统、密码学和安全实践。",
      PU[0], PU[1]
    ),
    "Data Science": F(
      ["ds", "big data", "数据科学", "大数据"],
      "Turning large data sets into answers: statistics, programming, and domain questions. You clean data, model it, and explain it to humans.",
      "把大数据变成答案：统计、编程和具体问题。你要清洗数据、建模，并讲给人听。",
      "Not Statistics alone. Not Computer Science alone. Not “playing with Excel” as the whole degree.",
      "不是单纯统计学，不是单纯计算机科学，更不是整个学位只玩表格。",
      "Probability, statistics, programming, databases, and machine learning introductions.",
      "概率、统计、编程、数据库和机器学习入门。",
      PU[0], PU[1]
    ),
    "Computing and Software Systems": F(
      ["css", "墨尔本计算机"],
      "Melbourne’s undergraduate major name for designing and building software systems inside a broader bachelor.",
      "墨尔本本科专业名：在更宽的学士学位里设计和构建软件系统。",
      "Same family as Computer Science / Software Engineering. Melbourne often specialises further at master’s level for accredited software engineering.",
      "和计算机科学/软件工程是同一家族。墨尔本常在硕士阶段再专向认证软件工程。",
      "Programming, software process, networks, and systems.",
      "编程、软件过程、网络和系统。",
      PU[0], PU[1]
    ),
    "Information / Library Studies": F(
      ["library", "information studies", "图书情报", "信息管理"],
      "How people find, store, organise, and use information — libraries, archives, and digital collections — not only coding.",
      "人怎样找到、保存、整理和使用信息：图书馆、档案和数字馆藏。不只是写代码。",
      "Not Computer Science. Not Journalism.",
      "不是计算机科学，也不是新闻学。",
      "Information organisation, users, digital systems, and research methods.",
      "信息组织、用户、数字系统研究方法。",
      PU[0], PU[1]
    ),
    "Statistics / Data Science": F(
      ["stats", "statistics", "统计"],
      "The mathematical study of variation and evidence: probability, inference, and models. Data Science titles overlap, but this station emphasises proof and uncertainty.",
      "研究变化和证据的数学：概率、推断和模型。和数据科学名称有重叠，但这个站点更强调证明和不确定性。",
      "Not Data Science as a computing degree first. Not Mathematics without the data focus.",
      "不是计算优先的数据科学，也不是不聚焦数据的数学。",
      "Probability, statistical modelling, computing with data, and interpretation.",
      "概率、统计建模、用数据做计算，以及解释。",
      PU[0], PU[1]
    ),
    "Mathematics": F(
      ["maths", "math", "数学"],
      "Proof, structure, and pattern: algebra, analysis, geometry, and later applied or pure tracks. University maths is more proof than school calculation.",
      "证明、结构和规律：代数、分析、几何，以及后来的应用或纯粹方向。大学数学比中学计算更强调证明。",
      "Not Accounting. Not Engineering maths-only. Not Statistics as the whole degree.",
      "不是会计，不是只为工程服务的数学，也不是整个学位都是统计。",
      "Proof, linear algebra, calculus/analysis, and optional applied modules.",
      "证明、线性代数、微积分/分析，以及可选的应用课。",
      PU[0], PU[1]
    ),
    "Physics": F(
      ["physics", "物理"],
      "How the universe works at the level of laws: mechanics, electromagnetism, quantum ideas, and experiment.",
      "宇宙在定律层面怎样运作：力学、电磁、量子想法和实验。",
      "Not Engineering (building devices). Not Astronomy as the whole degree (though they connect).",
      "不是工程（做装置），也不是整个学位都是天文学（虽然有联系）。",
      "Maths, lab experiments, classical physics, and later specialist options.",
      "数学、实验、经典物理，以及后来的方向课。",
      PU[0], PU[1]
    ),
    "Astrophysics / Astronomy": F(
      ["astro", "astronomy", "天体物理", "天文"],
      "Physics of stars, planets, galaxies, and the universe, using telescopes, data, and theory.",
      "用望远镜、数据和理论研究恒星、行星、星系和宇宙。",
      "Not being an astronaut. Not Astrology.",
      "不是当航天员，更不是占星。",
      "Physics, maths, computing with sky data, and observational methods.",
      "物理、数学、处理天文数据，以及观测方法。",
      PU[0], PU[1]
    ),
    "Medical Physics": F(
      ["med phys", "医学物理"],
      "Physics applied in hospitals: imaging, radiation, and how energy interacts with the body. Often a later specialism.",
      "用在医院的物理：成像、放射，以及能量怎样和身体相互作用。常常是后面才专的方向。",
      "Not becoming a doctor. Not general Physics without the clinical setting.",
      "不是当医生，也不是没有临床场景的普通物理。",
      "Physics, radiation, imaging principles, and hospital-related labs or placements where offered.",
      "物理、放射、成像原理，以及有的学校提供的医院相关实验或实习。",
      PU[0], PU[1]
    ),
    "Chemistry": F(
      ["chem", "化学"],
      "What matter is made of and how it changes: atoms, bonds, reactions, and measurement in a lab.",
      "物质由什么组成、怎样变化：原子、键、反应，以及实验室测量。",
      "Not Chemical Engineering (scale-up to plants). Not Biochemistry (living systems first).",
      "不是化学工程（放大到工厂），不是生物化学（生命体系优先）。",
      "Lab technique, organic/inorganic/physical chemistry, and safety.",
      "实验技术、有机/无机/物理化学，以及安全。",
      PU[0], PU[1]
    ),
    "Biochemistry": F(
      ["biochem", "生物化学"],
      "Chemistry inside living things: proteins, metabolism, and molecular machinery of cells.",
      "生命里面的化学：蛋白质、代谢和细胞的分子机器。",
      "Not Chemistry of all materials. Not Medicine.",
      "不是所有材料的化学，也不是医学。",
      "Organic chemistry, cell biology, enzymes, and lab analysis.",
      "有机化学、细胞生物学、酶和实验室分析。",
      PU[0], PU[1]
    ),
    "Biological Sciences": F(
      ["biology", "biosciences", "生物", "生物学"],
      "Living systems from molecules to ecosystems: cells, genetics, plants, animals, and experiment.",
      "从分子到生态系统的生命：细胞、遗传、植物、动物和实验。",
      "Not Medicine (patients). Not Biomedical Sciences (human health labs more tightly).",
      "不是医学（病人），也不是更紧贴人体健康实验室的生物医学。",
      "Cell biology, genetics, ecology or physiology, and lab skills.",
      "细胞生物学、遗传学、生态或生理，以及实验技能。",
      PU[0], PU[1]
    ),
    "Biomedical Sciences": F(
      ["biomed", "生物医学"],
      "Lab science of human health and disease without the full doctor path: physiology, pathology, and research methods.",
      "人体健康和疾病的实验室科学，但不是完整医生路径：生理、病理和研究方法。",
      "Not Medicine. Not Nursing. Not Biology of wild ecosystems first.",
      "不是医学，不是护理，也不是优先野外生态的生物学。",
      "Human biology, disease mechanisms, and laboratory techniques.",
      "人体生物学、疾病机制和实验室技术。",
      PU[0], PU[1]
    ),
    "Genetics": F(
      ["genes", "dna", "遗传", "基因"],
      "DNA, inheritance, and how traits move across generations — in humans, other animals, plants, or microbes depending on the course.",
      "DNA、遗传，以及特征怎样跨代传递。课程可能偏人、动物、植物或微生物。",
      "Not Medicine. Not “designer babies” as a job. Not the whole of Biology.",
      "不是医学，也不是“设计婴儿”这种工作，更不是全部生物学。",
      "Molecular biology, statistics of inheritance, and lab genetics.",
      "分子生物学、遗传统计和遗传实验。",
      PU[0], PU[1]
    ),
    "Marine Biology": F(
      ["marine", "ocean biology", "海洋生物"],
      "Life in oceans and coasts: organisms, ecosystems, and how water conditions shape them.",
      "海洋和海岸的生命：生物、生态系统，以及水质条件怎样影响它们。",
      "Not being a dolphin trainer. Not Ocean Engineering. Not general Biology without the sea.",
      "不是海豚训练师，不是海洋工程，也不是不涉及海的普通生物学。",
      "Ecology, ocean science, field or lab work with marine organisms.",
      "生态学、海洋科学，以及海洋生物的野外或实验工作。",
      PU[0], PU[1]
    ),
    "Medicine (MBBS / MD)": F(
      ["medicine", "mbbs", "md", "doctor", "医", "医学", "临床"],
      "The long professional path to become a doctor: the body, disease, clinics, and supervised practice. Names differ (MBBS, MBChB, MD).",
      "成为医生的漫长职业路径：人体、疾病、临床和有监督的实习。名称因国家而异（MBBS、MBChB、MD）。",
      "Not Biomedical Sciences. Not Nursing. Not Public Health (populations). UIUC in this set has no medical school.",
      "不是生物医学，不是护理，不是公共卫生（人群）。这个名单里的 UIUC 没有医学院。",
      "Anatomy, physiology, clinical skills, and years in hospitals.",
      "解剖、生理、临床技能，以及多年医院学习。",
      PM[0], PM[1]
    ),
    "Nursing": F(
      ["nurse", "护理"],
      "Hands-on care of sick people in teams: wards, assessment, medicines under protocol, and communication. A clear job-linked degree in many countries.",
      "在团队里动手照顾病人：病房、评估、按规程给药和沟通。很多国家这是明确通向护士职业的学位。",
      "Not Medicine (doctor path). Not Public Health (cities). Shifts and emotional load are real.",
      "不是医学（医生路径），不是公共卫生（城市）。轮班和情绪负担是真的。",
      "Anatomy, care skills, placements on wards, and professional rules.",
      "解剖、护理技能、病房实习和职业规范。",
      "Often 3–4 years plus registration exams in that country.",
      "常常 3–4 年，再加上该国的注册考试。"
    ),
    "Midwifery": F(
      ["midwife", "助产"],
      "Care before, during, and after birth: supporting labour, newborns, and new parents. King’s in this set names it clearly.",
      "出生前、出生中、出生后的照护：支持分娩、新生儿和新父母。这个名单里国王学院名称很明确。",
      "Not general Nursing (though they share care skills). Not Obstetrics as a doctor specialty.",
      "不是一般护理（虽然护理技能有重叠），也不是医生的产科专科。",
      "Pregnancy, labour care, newborn health, and supervised clinical placements.",
      "妊娠、分娩护理、新生儿健康，以及有监督的临床实习。",
      "A named professional degree with registration rules.",
      "有注册规则的职业学位。"
    ),
    "Dentistry": F(
      ["dentist", "dental", "牙科", "口腔"],
      "Care of teeth, gums, and the mouth: diagnosis, treatment, and fine motor skill. A long clinical training path.",
      "牙齿、牙龈和口腔的照护：诊断、治疗和精细动手。临床训练很长。",
      "Not Medicine of the whole body. Not Nursing. Not Dental hygiene as a shorter course (different title).",
      "不是全身医学，不是护理，也不是更短的牙科卫生课程（名称不同）。",
      "Oral anatomy, materials, clinics, and supervised patients.",
      "口腔解剖、材料、诊所，以及有监督的病人实践。",
      PM[0], PM[1]
    ),
    "Pharmacy": F(
      ["pharmacist", "药学", "药剂"],
      "How medicines work, how they are made safe, and how they are given correctly in a shop or hospital.",
      "药怎样起作用、怎样保证安全，以及怎样在药店或医院正确给药。",
      "Not Chemistry of all substances. Not Medicine (diagnosing people). A small mix-up can be dangerous.",
      "不是所有物质的化学，不是医学（给人诊断）。一小点搞混都可能危险。",
      "Pharmacology, chemistry of drugs, law around medicines, and placements.",
      "药理学、药物化学、药品相关法律，以及实习。",
      "Often 4 years plus registration. Rules differ by country.",
      "常常 4 年再加注册。各国规则不同。"
    ),
    "Veterinary Science": F(
      ["vet", "veterinary", "兽医"],
      "Medicine for animals: pets, farms, and sometimes wildlife. Competitive, scientific, and emotionally hard some days.",
      "动物的医学：宠物、农场，有时还有野生动物。很竞争，要科学，有些日子情绪很难。",
      "Not Biology of healthy animals only. Not Medicine for humans.",
      "不是只研究健康动物的生物学，也不是人类医学。",
      "Animal anatomy, clinics, surgery basics, and farm or small-animal practice.",
      "动物解剖、诊所、基础外科，以及农场或小动物实践。",
      PM[0], PM[1]
    ),
    "Psychology": F(
      ["psych", "心理", "心理学"],
      "The scientific study of mind and behaviour: experiments, statistics, the brain, and development. University psychology is not the same as being a therapist on day one.",
      "用科学研究心理和行为：实验、统计、大脑和发展。大学心理学不等于一入学就是心理咨询师。",
      "Not Psychiatry (a medical specialty). Not Education. A licence to counsel usually needs postgraduate training.",
      "不是精神病学（医学专科），不是教育学。咨询执照常常要研究生阶段。",
      "Research methods, statistics, cognition, social psychology, and biological bases of behaviour.",
      "研究方法、统计、认知、社会心理，以及行为的生物学基础。",
      PU[0], PU[1]
    ),
    "Psychiatry / Neuroscience": F(
      ["psychiatry", "neuroscience", "神经科学", "精神病学"],
      "Brain, nerves, and mental illness as science. Psychiatry as a doctor path is medicine first; neuroscience can be a science degree.",
      "把大脑、神经和心理疾病当科学来学。作为医生的精神病学要先走医学；神经科学可以是理学学位。",
      "Not undergraduate Psychology as therapy. Not a shortcut to becoming a psychiatrist without medicine.",
      "不是把本科心理当治疗。不读医学也不能走捷径当精神科医生。",
      "Neurobiology, mental-health science, and research methods — exact mix depends on the school.",
      "神经生物学、心理健康科学和研究方法——具体组合看学校。",
      PU[0], PU[1]
    ),
    "Audiology": F(
      ["hearing", "听力", "听力学"],
      "Hearing and balance: testing ears and helping people who hear poorly. UCL lists this under Brain Sciences.",
      "听力和平衡：测耳朵，帮助听不清的人。UCL 把它放在脑科学学院。",
      "Not Speech therapy as a different title. Not ENT surgery (doctors).",
      "不是另一个名称的言语治疗，也不是耳鼻喉外科（医生）。",
      "Acoustics, ear anatomy, diagnostic tests, and clinical practice where offered.",
      "声学、耳解剖、诊断测试，以及有的学校提供的临床实践。",
      PU[0], PU[1]
    ),
    "Public Health / Population Health": F(
      ["public health", "epidemiology", "公共卫生", "人群健康"],
      "Health of groups, not one patient: outbreaks, clean water, vaccination programmes, and health data.",
      "一群人的健康，不是一个病人：疫情、干净的水、疫苗计划和健康数据。",
      "Not Medicine. Not Nursing. Some famous schools teach this mainly after a first degree.",
      "不是医学，不是护理。有的名校主要在本科之后才教。",
      "Epidemiology, biostatistics, health policy, and environment.",
      "流行病学、生物统计、卫生政策和环境。",
      "Undergraduate where offered, or a later master’s. Check the school.",
      "有的学校有本科，有的要到硕士。要查学校。"
    ),
    "Kinesiology / Sport Science": F(
      ["kinesiology", "sport science", "运动科学", "体育科学"],
      "How bodies move, train, and stay strong: muscles, exercise physiology, and coaching science.",
      "身体怎样运动、训练和变强：肌肉、运动生理和训练科学。",
      "Not becoming a pro athlete. Not Medicine. Not PE teaching as the only outcome (though it can lead there).",
      "不是成为职业运动员，不是医学，也不只通向体育老师（虽然可以）。",
      "Anatomy, exercise physiology, biomechanics, and lab or field testing.",
      "解剖、运动生理、生物力学，以及实验室或场地测试。",
      PU[0], PU[1]
    ),
    "Business / Management": F(
      ["business", "management", "商科", "管理", "工商管理"],
      "How organisations actually run: people, money, operations, and decisions inside a firm.",
      "组织实际上怎么运转：人、钱、运营，以及公司内部的决定。",
      "Not Economics (why markets work). Not a guaranteed founder path. Finance, marketing, and accounting split later.",
      "不是经济学（市场为什么这样）。也不能保证创业成功。金融、营销和会计会再分开。",
      "Accounting basics, marketing, organisational behaviour, and strategy.",
      "基础会计、营销、组织行为和战略。",
      PU[0], PU[1]
    ),
    "Accounting": F(
      ["accountancy", "会计", "注册会计师"],
      "Honest measurement of money in organisations: recording, reporting, and audit rules.",
      "诚实计量组织里的钱：记账、报告和审计规则。",
      "Not Finance (markets and investment first). Not bookkeeping as the whole professional story — university accounting includes standards and judgement.",
      "不是金融（市场和投资优先）。也不只是记账——大学会计包含准则和判断。",
      "Financial reporting, management accounting, tax or audit introductions, and ethics.",
      "财务报告、管理会计、税务或审计入门，以及伦理。",
      "Often 3–4 years; professional papers (CPA/ACCA) are extra.",
      "常常 3–4 年；CPA/ACCA 等职业考试是另外的。"
    ),
    "Finance": F(
      ["finance", "金融"],
      "How money is raised, priced, invested, and risk-managed in markets and firms.",
      "钱怎样被筹集、定价、投资，以及在市场和公司里管理风险。",
      "Not Accounting. Not Economics theory first. High maths in some tracks.",
      "不是会计，不是理论优先的经济学。有的方向数学很重。",
      "Time value of money, markets, corporate finance, and statistics.",
      "货币时间价值、市场、公司金融和统计。",
      PU[0], PU[1]
    ),
    "Marketing": F(
      ["marketing", "市场", "市场营销"],
      "How organisations understand customers and communicate value — research, brands, and channels, including digital.",
      "组织怎样理解顾客并传递价值：研究、品牌和渠道，包括数字渠道。",
      "Not “just advertising”. Not Graphic Design. Ethics around persuasion matter.",
      "不是“只会打广告”，不是平面设计。说服别人时的伦理很重要。",
      "Consumer behaviour, market research, communications, and analytics.",
      "消费者行为、市场研究、传播和分析。",
      PU[0], PU[1]
    ),
    "Information Systems": F(
      ["mis", "is", "信息系统"],
      "How companies use software, data, and processes to run — the bridge between business and computing.",
      "公司怎样用软件、数据和流程来运转——商业和计算之间的桥。",
      "Not Computer Science. Not pure Business without systems. Not Cyber Security.",
      "不是计算机科学，不是没有系统的纯商业，也不是网络安全。",
      "Databases, process design, IT in organisations, and project work.",
      "数据库、流程设计、组织中的信息技术，以及项目。",
      PU[0], PU[1]
    ),
    "Actuarial Science": F(
      ["actuary", "精算"],
      "Using probability and finance to price risk: insurance, pensions, and long-term money promises.",
      "用概率和金融给风险定价：保险、养老金和长期金钱承诺。",
      "Not general Finance. Not Statistics without the insurance context. Professional exams continue after university.",
      "不是一般金融，也不是没有保险场景的统计。大学之后还有职业考试。",
      "Probability, financial maths, and models of death, illness, or claims.",
      "概率、金融数学，以及死亡、疾病或赔付的模型。",
      "Degree plus years of professional exams.",
      "学位再加上多年职业考试。"
    ),
    "Economics": F(
      ["econ", "经济", "经济学"],
      "Models of how people, firms, and governments make choices under scarcity — with graphs, data, and “what if?” questions.",
      "在稀缺条件下，人、公司、政府怎样做选择的模型——用图表、数据和“如果…会怎样”。",
      "Not Business (running a firm). Looks wordy; there is more maths than it first seems.",
      "不是商业（经营一家公司）。看起来偏文字，其实数学比乍看要多。",
      "Micro, macro, statistics/econometrics, and policy applications.",
      "微观、宏观、统计/计量，以及政策应用。",
      PU[0], PU[1]
    ),
    "Law (LLB / JD)": F(
      ["law", "llb", "jd", "法学", "法律"],
      "The rules a country uses and how to argue with evidence: cases, statutes, and legal writing.",
      "一个国家的规则，以及怎样用证据去论证：案例、法条和法律写作。",
      "Not Politics. Not Criminology as the whole degree. US JD is often after a first degree; UK LLB can start from school.",
      "不是政治学，也不是整个学位都是犯罪学。美国 JD 常常要先读完一个学位；英国 LLB 可以从中学毕业后开始。",
      "Contract, crime, constitution, legal research, and mooting or writing.",
      "合同、刑法、宪法、法律检索，以及模拟法庭或写作。",
      PL[0], PL[1]
    ),
    "Security and Crime Science": F(
      ["crime science", "犯罪科学"],
      "Why crime happens and how places and systems can be designed to reduce it — data plus social science. UCL and UNSW use this family of titles.",
      "犯罪为什么发生，以及怎样设计地点和系统来减少它——数据加社会科学。UCL 和 UNSW 使用这一类名称。",
      "Not a police academy. Not Law. Not Cyber Security as hacking defence only.",
      "不是警察学校，不是法学，也不是只做黑客防御的网络安全。",
      "Crime data, policing systems, and design of safer environments.",
      "犯罪数据、治安系统，以及更安全环境的设计。",
      PU[0], PU[1]
    ),
    "Politics / International Relations": F(
      ["ir", "politics", "international relations", "政治", "国际关系"],
      "Power, states, and public choices: how governments work and how countries deal with each other.",
      "权力、国家和公共决定：政府怎样运转，国家之间怎样相处。",
      "Not Law. Not History as the whole subject. War Studies is a named King’s path inside this family.",
      "不是法学，也不是整个学科都是历史。战争研究是国王学院在这一家族里的命名方向。",
      "Political theory, comparative politics, international system, and brief-writing.",
      "政治理论、比较政治、国际体系，以及简报写作。",
      PU[0], PU[1]
    ),
    "War Studies": F(
      ["war studies", "战争研究"],
      "King’s famous named subject: why wars happen, strategy, and how peace is kept — history plus politics.",
      "国王学院很有名的命名专业：战争为什么发生、战略，以及和平怎样维持——历史加政治。",
      "Not military training. Not becoming a soldier by default.",
      "不是军事训练，默认也不会把你变成士兵。",
      "History of conflict, strategy, international security, and evidence-based writing.",
      "冲突史、战略、国际安全，以及基于证据的写作。",
      PU[0], PU[1]
    ),
    "Sociology": F(
      ["sociology", "社会学"],
      "How groups of people live together: class, institutions, identity, and social change, studied with evidence.",
      "一群人怎样一起生活：阶层、制度、身份和社会变化，并且用证据来研究。",
      "Not Social Work (helping cases). Not Psychology of one mind.",
      "不是社会工作（帮个案），也不是研究一个人心智的心理学。",
      "Social theory, methods (surveys, ethnography), and contemporary problems.",
      "社会理论、方法（问卷、田野），以及当代问题。",
      PU[0], PU[1]
    ),
    "Anthropology": F(
      ["anthro", "人类学"],
      "What it means to be human across cultures and time — living people and, in some courses, bones and objects.",
      "在不同文化和时间里，“做人”是什么意思——活着的人，有的课程也包括骨头和器物。",
      "Not Sociology only of one country. Not Archaeology as the whole degree (they can sit nearby).",
      "不是只研究一个国家的社会学，也不是整个学位都是考古学（它们可能挨着）。",
      "Ethnography, culture theory, and sometimes biological or linguistic anthropology.",
      "民族志、文化理论，有时还有生物或语言人类学。",
      PU[0], PU[1]
    ),
    "Social Work": F(
      ["social worker", "社工", "社会工作"],
      "Helping families and communities when life is hard, inside legal and ethical rules. Heavy stories; you need backup.",
      "在生活很难的时候帮助家庭和社区，并且遵守法律和伦理。故事会很重，你需要支持。",
      "Not Psychology experiments. Not Education classrooms. Not volunteering as the whole qualification.",
      "不是心理学实验，不是教育课堂，也不是把志愿活动当成全部资格。",
      "Law around care, interviewing, placements, and professional ethics.",
      "照护相关法律、访谈、实习和职业伦理。",
      "Often a professional registration after the degree.",
      "学位之后常常还要职业注册。"
    ),
    "Education": F(
      ["teaching", "teacher", "教育", "师范"],
      "How people learn and how schools work — teaching, curriculum, and education policy. A first degree here is not always a classroom licence by itself.",
      "人怎样学习、学校怎样运转：教学、课程和教育政策。这里的第一学位不一定自动就是教师执照。",
      "Not Psychology. Not babysitting. Some countries need a PGCE or similar after.",
      "不是心理学，也不是带小孩。有的国家之后还要教师资格课程。",
      "Learning theory, classroom practice where offered, and education systems.",
      "学习理论、有的学校提供课堂实践，以及教育制度。",
      PU[0], PU[1]
    ),
    "Architecture": F(
      ["architect", "建筑", "建筑学"],
      "Design of buildings people live and work in: studio drawing, structure enough to stand, light, and how cities feel.",
      "设计给人住、给人用的房子：工作室绘图、足够站得住的结构、光线，以及城市给人的感觉。",
      "Not Civil Engineering (the structure that must not fail is their centre). Not Interior decoration as a short course. Licensure takes extra years.",
      "不是土木工程（他们的中心是不能倒的结构），也不是短期室内装饰课。执照还要更长时间。",
      "Design studio, history/theory, materials, and representation (drawing and models).",
      "设计工作室、历史/理论、材料，以及表达（绘图和模型）。",
      "Often 3–5 years plus professional years for the architect title.",
      "常常 3–5 年，再加上职业年数才能称建筑师。"
    ),
    "Landscape Architecture": F(
      ["landscape", "风景园林", "景观"],
      "Design of outdoor places: parks, streets, gardens, and ecological planting with people in mind.",
      "设计室外的地方：公园、街道、花园，以及考虑人的生态种植。",
      "Not Architecture of indoor rooms first. Not Forestry.",
      "不是优先室内房间的建筑学，也不是林学。",
      "Site design, plants, grading, and studio projects.",
      "场地设计、植物、地形和工作室项目。",
      PU[0], PU[1]
    ),
    "Urban Planning": F(
      ["planning", "urban planning", "城市规划"],
      "How cities grow: housing, transport, land use, and public space — policy plus design.",
      "城市怎样长大：住房、交通、用地和公共空间——政策加设计。",
      "Not Architecture of one building. Not Civil Engineering of one bridge.",
      "不是一栋房子的建筑学，也不是一座桥的土木工程。",
      "Planning law, GIS maps, community process, and studio.",
      "规划法规、地图 GIS、社区过程和工作室。",
      PU[0], PU[1]
    ),
    "Fine Art": F(
      ["fine art", "art", "美术", "纯艺"],
      "Making art with your hands and eyes: drawing, paint, sculpture, or other studio practice, plus critique.",
      "用手和眼睛做艺术：素描、颜料、雕塑或其他工作室实践，再加上讲评。",
      "Not Graphic Design for clients first. Not Art History (studying art). Portfolios matter.",
      "不是优先服务客户的平面设计，也不是艺术史（研究艺术）。作品集很重要。",
      "Studio time, crits, art history/theory, and a portfolio.",
      "工作室时间、讲评、艺术史/理论，以及作品集。",
      "Often 3–4 years. Income is uncertain; that is honest.",
      "常常 3–4 年。收入不稳定，这是实话。"
    ),
    "Fine Art (Slade School)": F(
      ["slade", "斯莱德"],
      "UCL’s named art school: intensive studio Fine Art at the Slade.",
      "UCL 的美术学院：斯莱德学院高强度的纯艺工作室。",
      "Same family as Fine Art. The Slade is the official school name.",
      "和纯艺是同一家族。斯莱德是官方学院名。",
      "Studio practice and critique at a specialist art school.",
      "在专门美术学院做工作室实践和讲评。",
      PU[0], PU[1]
    ),
    "Graphic Design": F(
      ["graphic", "visual communication", "平面设计"],
      "Design of visual information: logos, posters, screens, type, and how a message looks.",
      "视觉信息的设计：标志、海报、屏幕、字体，以及一条信息看起来的样子。",
      "Not Fine Art (self-directed studio first). Not Marketing strategy alone.",
      "不是纯艺（自我主导的工作室优先），也不是单独的营销策略。",
      "Typography, layout, digital tools, and client-style briefs.",
      "字体、排版、数字工具，以及类似客户的任务书。",
      PU[0], PU[1]
    ),
    "Game Design": F(
      ["games", "game dev", "游戏设计"],
      "Rules, worlds, and feel of play — at NYU Tisch this sits in a specialist arts school, not only coding.",
      "规则、世界和玩起来的感觉。在 NYU Tisch，它在专门艺术学院，不只是写代码。",
      "Not Computer Science by default. Not “playing games” as the syllabus.",
      "默认不是计算机科学，教学大纲也不是“玩游戏”。",
      "Systems of play, narrative or level ideas, prototyping, and critique.",
      "玩法系统、叙事或关卡想法、原型和讲评。",
      PU[0], PU[1]
    ),
    "Film / Media": F(
      ["film", "media", "电影", "传媒"],
      "Making or studying moving images and media: film, TV, and online. Some schools emphasise production; others criticism.",
      "制作或研究活动影像和媒体：电影、电视和网络。有的学校偏制作，有的偏评论。",
      "Not Journalism as news reporting first. Not Fine Art painting.",
      "不是优先新闻报道的新闻学，也不是绘画纯艺。",
      "Production practice and/or media theory, editing, and storytelling.",
      "制作实践和/或媒体理论、剪辑和叙事。",
      PU[0], PU[1]
    ),
    "Theatre / Drama": F(
      ["theatre", "drama", "acting", "戏剧", "表演"],
      "Acting, plays, and how a live show is made — performance plus often production or studies.",
      "表演、戏剧，以及一场现场演出怎样做出来——表演，常常还有制作或戏剧研究。",
      "Not Film. Not a guaranteed acting career.",
      "不是电影，也不能保证演艺生涯。",
      "Workshops, text, voice/body, and productions.",
      "工作坊、文本、声音/身体，以及演出。",
      PU[0], PU[1]
    ),
    "Journalism": F(
      ["journalism", "news", "新闻"],
      "Finding facts and telling true stories to the public under editorial and legal rules.",
      "找出事实，并在编辑和法律规则下把真实故事讲给公众。",
      "Not Creative Writing as fiction. Not Media studies without reporting practice (some courses mix).",
      "不是小说创作，也不是没有采访实践的媒体研究（有的课程会混合）。",
      "Reporting, verification, law/ethics, and digital newsrooms.",
      "采访、核实、法律/伦理，以及数字新闻编辑部。",
      PU[0], PU[1]
    ),
    "Music": F(
      ["music", "音乐"],
      "Instrument or voice at a high level, plus how music is built: theory, history, and often ensemble.",
      "高水平的乐器或声乐，再加上音乐怎样构成：理论、历史，常常还有合奏。",
      "Not Music production as a short software course unless the school says so. Daily practice matters more than talent-only.",
      "除非学校写明，否则不是短期编曲软件课。每天练习比“只靠天赋”更重要。",
      "Performance, aural skills, theory, and recitals or portfolios.",
      "演奏、听辨、理论，以及音乐会或作品集。",
      "Auditions are common. Hours beat talent-only.",
      "常常要面试。时间投入胜过只靠天赋。"
    ),
    "History": F(
      ["history", "历史"],
      "What people did in the past, argued with evidence: archives, sources, and writing — not only a story you like.",
      "用证据研究过去的人做了什么：档案、史料和写作——不只是你喜欢的故事。",
      "Not Archaeology (objects in the ground). Not Politics of today as the whole degree.",
      "不是考古学（地里的东西），也不是整个学位都是今天的政治。",
      "Source criticism, essays, and a period or region focus.",
      "史料批评、论文，以及某个时代或地区。",
      PU[0], PU[1]
    ),
    "Ancient History": F(
      ["ancient history", "ancient", "古代史"],
      "Greece, Rome, and other old worlds using texts and evidence. UCL names this separately from general History.",
      "用文本和证据研究希腊、罗马和其他古文明。UCL 把它和一般历史分开命名。",
      "Not Classics (languages) as the whole degree. Not Archaeology only.",
      "不是整个学位都是古典语言，也不是只有考古。",
      "Ancient sources, languages sometimes, and historical method.",
      "古代史料，有时还有语言，以及史学方法。",
      PU[0], PU[1]
    ),
    "Archaeology": F(
      ["archaeology", "考古"],
      "Past people through objects and places: excavation, dating, and interpretation.",
      "通过器物和地点研究过去的人：发掘、测年和解释。",
      "Not History of texts only. Not treasure hunting.",
      "不是只研究文本的历史，更不是寻宝。",
      "Field methods, material culture, and science techniques (dating, bones, soils).",
      "田野方法、物质文化，以及测年、骨头、土壤等科学技术。",
      PU[0], PU[1]
    ),
    "History of Art": F(
      ["art history", "艺术史"],
      "Paintings, sculpture, and visual culture: what they meant and how we know.",
      "绘画、雕塑和视觉文化：它们意味着什么，我们怎样知道。",
      "Not Fine Art making. Not Archaeology.",
      "不是做纯艺，也不是考古。",
      "Visual analysis, history, and museum or archive work.",
      "视觉分析、历史，以及博物馆或档案工作。",
      PU[0], PU[1]
    ),
    "Philosophy": F(
      ["philosophy", "哲学"],
      "Big questions with careful argument: knowledge, mind, ethics, and what follows from a claim.",
      "用小心的论证处理大问题：知识、心灵、伦理，以及一个主张会推出什么。",
      "Not self-help. Not History of ideas as names only — you must argue.",
      "不是心灵鸡汤，也不是只记人名的思想史——你必须论证。",
      "Logic, ethics, epistemology, and essay-based assessment.",
      "逻辑、伦理、认识论，以及以论文为主的考核。",
      PU[0], PU[1]
    ),
    "English Language and Literature": F(
      ["english", "literature", "英语", "英语文学"],
      "Books, writing, and how English works — close reading and argument, sometimes language science too.",
      "书、写作，以及英语怎样运作——细读和论证，有时也包括语言科学。",
      "Not Journalism. Not Creative Writing as the only module (some degrees add it).",
      "不是新闻学，也不是整个学位只有创意写作（有的会加）。",
      "Set texts, criticism, and essays; some courses add linguistics.",
      "指定文本、批评和论文；有的课程加语言学。",
      PU[0], PU[1]
    ),
    "Modern Languages": F(
      ["languages", "mfl", "外语", "现代语言"],
      "Other living languages plus the cultures behind them. You train to read, speak, and understand, not only pass a vocab test.",
      "其他仍在使用的语言，以及语言背后的文化。训练读、说、懂，不只是过词汇测验。",
      "Not Linguistics (how language works in the brain) as the whole degree. Specific titles such as French or German may be listed separately.",
      "不是整个学位都是语言学（语言在大脑里怎样运作）。法语、德语等具体名称可能单列。",
      "Language classes, literature or society, and often a year abroad (we skip listing every twin).",
      "语言课、文学或社会，常常还有海外一年（我们不列每一个双胞胎课程）。",
      PU[0], PU[1]
    ),
    "French": F(
      ["french", "法语"],
      "French language plus literature, film, or society — a named language path, especially at Toronto in this set.",
      "法语，加上文学、电影或社会。这是命名的语言路径，这个名单里尤其是多伦多。",
      "Not Modern Languages as a bundle. Not Linguistics.",
      "不是打包的“现代语言”，也不是语言学。",
      "Language, texts, and culture modules.",
      "语言、文本和文化课。",
      PU[0], PU[1]
    ),
    "German": F(
      ["german", "德语"],
      "German language and culture as a named subject. In this 15-school set no school lists it as a standalone official title — they use Modern Languages.",
      "德语和德国文化作为命名学科。在这 15 所学校里，没有学校把它列为独立官方名称——他们用“现代语言”。",
      "Search Modern Languages at these schools if you want German.",
      "如果想学德语，在这些学校请查现代语言。",
      "Would typically include language, literature, and culture — not offered as a standalone title here.",
      "通常会包括语言、文学和文化——但在这里不是独立官方名称。",
      "Not taught as that exact title in this set.",
      "在这个名单里，没有学校用这个准确名称开设。"
    ),
    "Chinese / East Asian Studies": F(
      ["chinese", "east asian", "中文", "东亚"],
      "Chinese (or broader East Asian) language, history, and culture as a named university subject.",
      "中文（或更宽的东亚）语言、历史和文化，作为大学命名学科。",
      "Not “being Chinese”. Not Modern Languages as a European-language bundle.",
      "不是“因为你是中国人”。也不是打包的欧洲语言现代语言。",
      "Language, history, and society modules.",
      "语言、历史和社会课。",
      PU[0], PU[1]
    ),
    "Classics / Greek and Latin": F(
      ["classics", "latin", "greek", "古典", "拉丁", "古希腊"],
      "Ancient Greek and Latin languages plus the literature and worlds those texts come from.",
      "古希腊语和拉丁语，以及这些文本来自的文学和世界。",
      "Not Ancient History without the languages. Not Archaeology.",
      "不是没有语言的古代史，也不是考古。",
      "Language work, set texts, and ancient culture.",
      "语言、指定文本和古代文化。",
      PU[0], PU[1]
    ),
    "Linguistics / Language Sciences": F(
      ["linguistics", "语言学"],
      "How human language works in the mind and in the world: sounds, grammar, meaning, and data.",
      "人类语言在头脑里和世界上怎样运作：声音、语法、意义和数据。",
      "Not learning to speak many languages (Modern Languages). Not English Literature.",
      "不是学会说很多门语言（现代语言），也不是英语文学。",
      "Phonetics, syntax, semantics, and experimental or corpus methods.",
      "语音、句法、语义，以及实验或语料方法。",
      PU[0], PU[1]
    ),
    "Arts and Sciences": F(
      ["ba sc", "arts and sciences", "文理"],
      "UCL’s named mixed degree: arts and science in one programme, not a single traditional major.",
      "UCL 的命名混合学位：文科和理科放在同一个项目里，不是单一传统专业。",
      "Not a major called Computer Science. You still pick pathways inside it.",
      "不是名叫计算机科学的专业。你仍要在里面选路径。",
      "A structured mix across faculties, with a core and options.",
      "跨学院的结构化混合，有核心课和选修。",
      PU[0], PU[1]
    ),
    "Earth Sciences / Geology": F(
      ["geology", "earth science", "地质", "地球科学"],
      "Rocks, time, earthquakes, and how the planet is built — field work plus lab.",
      "岩石、时间、地震，以及地球怎样构成——田野加实验室。",
      "Not Environmental Science (living systems and policy more). Not Geography of human places first.",
      "不是环境科学（更偏生命系统和政策），也不是优先人文地理。",
      "Minerals, mapping, tectonics, and field courses.",
      "矿物、填图、构造，以及野外课。",
      PU[0], PU[1]
    ),
    "Environment / Environmental Science": F(
      ["environmental science", "environment", "环境科学", "环境"],
      "Nature, climate, and how to look after the planet — measurements, ecosystems, and human impact.",
      "自然、气候，以及怎样保护地球——测量、生态系统和人类影响。",
      "Not Environmental Engineering (designing treatment plants). Not Biology only of one species.",
      "不是环境工程（设计处理厂），也不是只研究一个物种的生物学。",
      "Ecology, climate data, chemistry of pollution, and field methods.",
      "生态、气候数据、污染化学和田野方法。",
      PU[0], PU[1]
    ),
    "Geography": F(
      ["geography", "地理"],
      "Places: cities, maps, climate, and how people live — physical and/or human geography depending on the course.",
      "地方：城市、地图、气候，以及人怎样生活。课程可能偏自然地理或人文地理。",
      "Not Geology. Not Urban Planning as a professional title (though they connect).",
      "不是地质学，也不是作为职业头衔的城市规划（虽然有联系）。",
      "GIS, field trips, and either physical processes or social geography.",
      "GIS、野外实习，以及自然过程或社会地理。",
      PU[0], PU[1]
    ),
    "Food / Agriculture": F(
      ["agriculture", "food science", "农业", "食品"],
      "Farms, food systems, and how we feed people — plants, animals, land, and supply.",
      "农场、食物系统，以及我们怎样养活人：植物、动物、土地和供应链。",
      "Not Cooking school. Not Environmental Science only.",
      "不是烹饪学校，也不是只有环境科学。",
      "Crop or animal science, soil, and food systems depending on the major.",
      "作物或动物科学、土壤，以及食物系统，取决于具体专业。",
      PU[0], PU[1]
    ),
    "Forestry": F(
      ["forestry", "林学", "森林"],
      "Forests, wood, and looking after trees as a resource and an ecosystem. UBC names this faculty clearly.",
      "森林、木材，以及把树既当资源也当生态系统来照顾。UBC 的学院名称很明确。",
      "Not Landscape Architecture. Not general Environmental Science.",
      "不是风景园林，也不是一般环境科学。",
      "Ecology, forest management, and field measurement.",
      "生态、森林管理和野外测量。",
      PU[0], PU[1]
    ),
    "Neuroscience": F(
      ["neuro", "brain science", "神经科学", "脑科学"],
      "A science degree about the nervous system: brain cells, circuits, behaviour, and sometimes mental health. You use biology, chemistry, and often some coding. It is not by itself a doctor or counsellor licence.",
      "关于神经系统的科学学位：脑细胞、回路、行为，有时也包括心理健康。会用到生物、化学，常常还有一点编程。它本身不是医生或心理咨询执照。",
      "Not Psychology as a people-and-stats first degree (though they overlap). Not Medicine. Not Neural Science — that is NYU’s official title for a similar subject.",
      "不是以人和统计为主的心理学（虽然有重叠），不是医学。也不是 Neural Science——那是纽约大学对相近学科的官方名称。",
      "Cells, synapses, brain systems, lab skills, and often a research project.",
      "细胞、突触、脑系统、实验技能，常常还有研究项目。",
      PU[0], PU[1]
    ),
    "Neural Science": F(
      ["neural", "nyu neural", "神经科学"],
      "NYU’s official undergraduate name for brain science: how the nervous system builds thought and behaviour.",
      "纽约大学本科对脑科学的官方名称：神经系统怎样形成思想和行为。",
      "Not a generic “neuroscience” label at every school. Not Medicine.",
      "不是每所学校都用这个名字。不是医学。",
      "Biology of the brain, behaviour, and lab or computational work.",
      "大脑生物学、行为，以及实验或计算工作。",
      PU[0], PU[1]
    ),
    "Pharmacology": F(
      ["pharmacology", "药理学"],
      "The science of how drugs act in the body, from molecules to whole organs. Different from Pharmacy, which trains you to supply medicines safely.",
      "研究药在身体里怎样起作用，从分子到整个器官。和药学不同：药学训练你安全发药。",
      "Not Pharmacy (the professional supply-and-advice path). Not Medicine.",
      "不是药学（发药和用药建议的职业路线），不是医学。",
      "Physiology, chemistry of drugs, and lab work on how compounds change the body.",
      "生理学、药物化学，以及化合物怎样改变身体的实验。",
      PU[0], PU[1]
    ),
    "Maritime Engineering": F(
      ["ship science", "naval architecture", "maritime", "船舶", "造船"],
      "Engineering of ships and ocean structures: hulls, stability, propulsion, and offshore platforms. Southampton’s older official name was Ship Science.",
      "船和海上结构的工程：船体、稳性、推进和海上平台。南安普顿以前的官方名称是 Ship Science。",
      "Not Mechanical Engineering in general (though it uses the same maths). Not Oceanography (the science of the sea itself).",
      "不是一般机械工程（虽然数学相近），不是海洋学（研究海本身）。",
      "Hydrodynamics, structures, ship design, and tank or workshop tests.",
      "流体、结构、船舶设计，以及水池或车间测试。",
      PE[0], PE[1]
    ),
    "Oceanography": F(
      ["ocean science", "ocean", "海洋学"],
      "The science of the ocean: currents, chemistry, climate, and marine life, often with boat and lab work. Southampton teaches this at the National Oceanography Centre.",
      "海洋科学：洋流、化学、气候和海洋生命，常常有船和实验室工作。南安普顿在国家海洋学中心教这个。",
      "Not Maritime Engineering (building ships). Not Marine Biology only (animals first).",
      "不是海事工程（造船），也不只是海洋生物学（动物优先）。",
      "Physics, chemistry, biology, and geology of the sea, plus fieldwork.",
      "海的物理、化学、生物和地质，再加上野外实习。",
      PU[0], PU[1]
    ),
    "Acoustical Engineering": F(
      ["acoustics", "sound engineering", "声学工程", "声学"],
      "Engineering of sound and vibration: quieter transport, concert halls, audio systems, and ultrasound. A small specialist degree, strongest at Southampton.",
      "声音和振动的工程：更安静的交通、音乐厅、音频系统和超声。较小的专门学位，南安普顿最强。",
      "Not Music Technology (making records). Not Electrical Engineering in general.",
      "不是音乐科技（做唱片），也不是一般电气工程。",
      "Waves, signal processing, measurement in special rooms, and design projects.",
      "波动、信号处理、在特殊房间里测量，以及设计项目。",
      PE[0], PE[1]
    ),
    "Physiotherapy": F(
      ["physio", "physical therapy", "物理治疗", "康复"],
      "A clinical degree about helping people move again after injury or illness. You study the body, then practise with patients under supervision.",
      "临床学位：帮助受伤或生病的人重新活动。先学身体，再在监督下接触病人。",
      "Not Sport Science only (training and performance). Not Medicine (you are not a doctor).",
      "不只是运动科学（训练和表现），不是医学（你不是医生）。",
      "Anatomy, exercise, hands-on treatment, and clinical placements.",
      "解剖、运动、手法治疗，以及临床实习。",
      "Often 3–4 years plus a licence to practise. Check the country you want to work in.",
      "常常 3–4 年，再加上执业执照。要看你想在哪个国家工作。"
    ),
    "Speech and Language Therapy": F(
      ["slt", "speech therapy", "speech pathology", "言语治疗", "语言治疗"],
      "A clinical degree helping people who struggle to talk, swallow, or understand words. You mix language science with care work.",
      "临床学位：帮助说话、吞咽或理解词语有困难的人。把语言科学和照护放在一起。",
      "Not Linguistics only (how language works as science). Not Teaching English.",
      "不只是语言学（把语言当科学研究），也不是英语教学。",
      "Phonetics, the throat and brain, and placements in clinics or schools.",
      "语音学、喉咙和大脑，以及诊所或学校实习。",
      "A protected job title in many countries. Extra registration is usual.",
      "在很多国家是受保护的职业名称。通常还要注册。"
    ),
    "Criminology": F(
      ["criminology", "犯罪学"],
      "The social science of crime, punishment, and why societies make those rules. Different from UCL’s Security and Crime Science, which is more data and design of safer places.",
      "关于犯罪、惩罚和社会为什么定这些规则的社会科学。和 UCL 的犯罪科学不同：那个更偏数据和“怎样让地方更安全”。",
      "Not Law (the rulebook and courts as a professional path). Not Policing training.",
      "不是法学（规则和法庭的职业路线），也不是警察训练。",
      "Theories of crime, research methods, and often the justice system.",
      "犯罪理论、研究方法，常常还有司法系统。",
      PU[0], PU[1]
    ),
    "Nuclear Engineering": F(
      ["nuclear", "核能", "核工程"],
      "Engineering of nuclear energy and radiation: reactors, safety, and medical or industrial uses of radiation. A small specialist path.",
      "核能和辐射的工程：反应堆、安全，以及辐射在医疗或工业上的用途。较小的专门路线。",
      "Not Physics only (the universe in general). Not Mechanical Engineering in general.",
      "不是一般物理学（整个宇宙），也不是一般机械工程。",
      "Maths, nuclear physics, heat, materials, and strict safety culture.",
      "数学、核物理、热、材料，以及严格的安全文化。",
      PE[0], PE[1]
    ),
    "Mining Engineering": F(
      ["mining", "mineral engineering", "采矿", "矿业"],
      "Engineering of how to take minerals from the ground: tunnels, safety, water, and less environmental harm. Strong at UNSW, UBC, and Toronto.",
      "从地下取出矿物的工程：隧道、安全、水，以及减少环境伤害。新南威尔士、UBC 和多伦多较强。",
      "Not Geology only (reading rocks). Not Civil Engineering in general.",
      "不只是地质学（读懂石头），也不是一般土木工程。",
      "Rock mechanics, ventilation, processing, and site design.",
      "岩石力学、通风、选矿和现场设计。",
      PE[0], PE[1]
    ),
    "Nutrition / Dietetics": F(
      ["nutrition", "dietetics", "dietitian", "营养", "营养学"],
      "The science of food and the body. Dietetics is the clinical path that advises people what to eat. Nutrition can also be a lab or public-health science.",
      "食物和身体的科学。营养治疗是建议人怎么吃的临床路线。营养学也可以是实验室或公共卫生科学。",
      "Not Cooking school. Not Medicine. Not Food Science (how food is made and kept safe).",
      "不是烹饪学校，不是医学，也不是食品科学（食物怎样做出来、怎样保证安全）。",
      "Biochemistry of food, the gut, and sometimes hospital placements.",
      "食物的生物化学、肠道，有时还有医院实习。",
      PU[0], PU[1]
    ),
    "Celtic Studies": F(
      ["celtic", "gaelic", "凯尔特", "盖尔"],
      "Languages, stories, and history of the Celtic world, including Scottish Gaelic. A small specialist subject at Edinburgh and Glasgow.",
      "凯尔特世界的语言、故事和历史，包括苏格兰盖尔语。爱丁堡和格拉斯哥的较小专门学科。",
      "Not general History. Not Modern Languages as a big mix of European languages.",
      "不是一般历史学，也不是把很多欧洲语言放在一起的现代语言。",
      "Language classes plus literature and history.",
      "语言课，再加上文学和历史。",
      PU[0], PU[1]
    ),
    "Construction Management": F(
      ["construction", "project management", "工程管理", "建造"],
      "Running building projects: time, cost, safety, contracts, and people. Different from Architecture (designing the building) and Civil Engineering (whether it stands up).",
      "管理建造项目：时间、成本、安全、合同和人员。不同于建筑学（设计房子）和土木工程（它会不会倒）。",
      "Not Architecture. Not Civil Engineering. Not a trade-school bricklaying course.",
      "不是建筑学，不是土木工程，也不是技校砌砖课。",
      "Planning, procurement, digital construction, and site practice.",
      "计划、采购、数字建造和现场实践。",
      PU[0], PU[1]
    ),
    "Cognitive Science": F(
      ["cognitive", "cogsci", "认知科学"],
      "The mind studied from more than one angle at once: psychology, computers, language, and the brain.",
      "从不止一个角度同时研究心智：心理学、电脑、语言和大脑。",
      "Not Computer Science only. Not Psychology only. Not Neuroscience only.",
      "不只是计算机科学，不只是心理学，也不只是神经科学。",
      "Experiments, some coding, language, and brain or behaviour modules.",
      "实验、一点编程、语言，以及大脑或行为模块。",
      PU[0], PU[1]
    ),
    "Hebrew and Jewish Studies": F(
      ["hebrew", "jewish studies", "希伯来", "犹太研究"],
      "A small specialist subject, especially at UCL: Hebrew language, Jewish history, and culture.",
      "较小的专门学科，UCL 尤其清楚：希伯来语、犹太历史和文化。",
      "Not Theology as a general religions degree. Not History only.",
      "不是一般的宗教学，也不只是历史学。",
      "Language, texts, and historical evidence.",
      "语言、文本和历史证据。",
      PU[0], PU[1]
    ),
    "Zoology": F(
      ["zoology", "animals", "动物学"],
      "A biology degree that puts animals first: how they move, eat, behave, and fit into habitats. You still do cells and genes, but the questions are about whole animals.",
      "以动物为主的生物学：它们怎样活动、吃、行为，以及怎样融入栖息地。仍会学细胞和基因，但问题是关于整只动物。",
      "Not Veterinary Science (treating sick animals as a clinical job). Not Marine Biology only.",
      "不是兽医（把生病动物当临床工作），也不只是海洋生物学。",
      "Animal physiology, ecology, evolution, and field or lab observation.",
      "动物生理、生态、进化，以及野外或实验室观察。",
      PU[0], PU[1]
    ),
    "Microbiology": F(
      ["microbiology", "bacteria", "微生物学", "微生物"],
      "The biology of life too small to see: bacteria, viruses, fungi. You culture samples, read DNA, and ask how microbes help or harm us.",
      "肉眼看不见的生命：细菌、病毒、真菌。你会培养样本、读 DNA，并问微生物怎样帮人或害人。",
      "Not Medicine (you are not training as a doctor). Not Immunology only (the body’s defence).",
      "不是医学（不是培养医生），也不只是免疫学（身体的防御）。",
      "Lab culture, genetics of microbes, infection, and often biotechnology.",
      "实验室培养、微生物基因、感染，常常还有生物技术。",
      PU[0], PU[1]
    ),
    "Immunology / Infection": F(
      ["immunology", "infection", "immunity", "免疫", "感染"],
      "How the body fights germs — and what happens when that fight is too weak or too strong. Melbourne names this as a biomedicine major.",
      "身体怎样对抗病菌——以及这场战斗太弱或太强时会怎样。墨尔本生物医学里有这个方向。",
      "Not Microbiology only (the germ). Not Medicine as a doctor path.",
      "不只是微生物学（病菌本身），也不是当医生的医学。",
      "Immune cells, vaccines, infection cases, and lab work.",
      "免疫细胞、疫苗、感染案例和实验室工作。",
      PU[0], PU[1]
    ),
    "Physiology": F(
      ["physiology", "生理学"],
      "How a living body works as a system: heart, lungs, muscles, hormones. You measure real function, not only name the parts.",
      "活的身体作为系统怎样工作：心脏、肺、肌肉、激素。你测量真实功能，不只是给零件起名。",
      "Not Anatomy as naming bones only. Not Medicine (clinical doctor training).",
      "不是只给骨头起名的解剖学，也不是临床医学。",
      "Organ systems, lab measurements, and how the body responds to exercise or disease.",
      "器官系统、实验室测量，以及身体对运动或疾病的反应。",
      PU[0], PU[1]
    ),
    "Plant Science": F(
      ["botany", "plant science", "plants", "植物学", "植物"],
      "Biology that puts plants first: how they grow, make food, and survive. Useful for farms, climate, and green labs.",
      "以植物为主的生物学：它们怎样生长、制造养分、活下来。对农场、气候和绿色实验室有用。",
      "Not Landscape Architecture (designing parks). Not Agriculture as farm management only.",
      "不是风景园林（设计公园），也不只是农场管理。",
      "Plant physiology, genetics, ecology, and greenhouse or field work.",
      "植物生理、基因、生态，以及温室或田间工作。",
      PU[0], PU[1]
    ),
    "Ecology / Conservation": F(
      ["ecology", "conservation", "生态", "保护"],
      "How living things share a place, and how to protect that place with evidence: counts, maps, and policy — not only a feeling.",
      "生命怎样共享一个地方，以及怎样用证据保护它：计数、地图和政策——不只是感觉。",
      "Not Zoology only (one animal). Not Environmental Engineering (building treatment plants).",
      "不只是动物学（一种动物），也不是环境工程（建处理厂）。",
      "Field surveys, statistics, habitats, and conservation case studies.",
      "野外调查、统计、栖息地和保护案例。",
      PU[0], PU[1]
    ),
    "Animal Science": F(
      ["animal science", "animal sciences", "动物科学"],
      "Farm and other managed animals: nutrition, breeding, health, and welfare. This is not the full vet licence.",
      "农场和其他被管理的动物：营养、繁殖、健康和福利。这不是完整的兽医执照。",
      "Not Veterinary Science (diagnosing and operating). Not Zoology in the wild only.",
      "不是兽医（诊断和手术），也不只是野外动物学。",
      "Animal biology, feed, welfare rules, and often farm placements.",
      "动物生物学、饲料、福利规则，常常还有农场实习。",
      PU[0], PU[1]
    ),
    "Occupational Therapy": F(
      ["ot", "occupational therapy", "作业治疗", "职能治疗"],
      "A clinical degree helping people do everyday tasks again: dressing, school, cooking, work. You adapt the person and the place.",
      "临床学位：帮助人重新做日常的事：穿衣服、上学、做饭、工作。你会调整人和环境。",
      "Not Physiotherapy (movement and injury first). Not Social Work (family and law first).",
      "不是物理治疗（活动与损伤优先），也不是社会工作（家庭和法律优先）。",
      "Anatomy, daily-task practice, and placements in hospitals, schools, or homes.",
      "解剖、日常任务练习，以及医院、学校或家庭实习。",
      "Often 3–4 years plus a licence. Check the country you want to work in.",
      "常常 3–4 年，再加上执照。要看你想在哪个国家工作。"
    ),
    "Optometry": F(
      ["optometry", "optometrist", "眼视光", "验光"],
      "A clinical degree about eyes and vision: tests, lenses, and spotting disease. You work close to people’s faces, with careful tools.",
      "关于眼睛和视力的临床学位：检查、镜片，以及发现疾病。你会靠近人脸，使用精细工具。",
      "Not Medicine as a general doctor. Not Physics of light only.",
      "不是当全科医生，也不只是光学物理。",
      "Optics, anatomy of the eye, clinics, and prescribing glasses or referring on.",
      "光学、眼解剖、门诊，以及配镜或转诊。",
      "A protected title in many countries. Extra exams are usual.",
      "在很多国家是受保护的名称。通常还要考试。"
    ),
    "Industrial Engineering": F(
      ["industrial engineering", "ieor", "工业工程"],
      "Designing how systems move people and stuff: factories, hospitals, airports. You mix maths, data, and process design.",
      "设计系统怎样运送人和东西：工厂、医院、机场。把数学、数据和流程设计放在一起。",
      "Not Mechanical Engineering (the machine itself). Not Business as marketing first.",
      "不是机械工程（机器本身），也不是市场营销优先的商科。",
      "Optimisation, queues, quality, and simulation of a real process.",
      "优化、排队、质量和真实流程的模拟。",
      PE[0], PE[1]
    ),
    "Mechatronics": F(
      ["mechatronics", "机电", "机电一体化"],
      "Machines that mix mechanics, electronics, and code: robot arms, smart cars, factory sensors. You build and program moving devices.",
      "机械、电子和代码混在一起的机器：机械臂、智能车、工厂传感器。你会做出会动的装置并给它编程。",
      "Not Mechanical Engineering without the electronics. Not Computer Science without the hardware.",
      "不是没有电子的机械工程，也不是没有硬件的计算机科学。",
      "Mechanics, circuits, control, and a robot or device project.",
      "机械、电路、控制，以及机器人或装置项目。",
      PE[0], PE[1]
    ),
    "Engineering Physics": F(
      ["engineering physics", "eng phys", "工程物理"],
      "Deep physics used to invent devices: semiconductors, optics, quantum sensors. Harder maths than many engineering titles.",
      "用较深的物理去发明装置：半导体、光学、量子传感器。数学往往比很多工科名称更难。",
      "Not Physics as only theory and the universe. Not Electrical Engineering without the physics depth.",
      "不是只研究理论和宇宙的物理学，也不是没有物理深度的电气工程。",
      "Quantum, electromagnetism, labs, and an engineering design thread.",
      "量子、电磁、实验室，以及一条工程设计线。",
      PE[0], PE[1]
    ),
    "Fashion Design": F(
      ["fashion", "fashion design", "时装", "服装设计"],
      "Designing clothes as a university subject: drawing, pattern-cutting, fabric, and how a collection is shown. Southampton’s Winchester School of Art is one home for this.",
      "把设计衣服当大学专业：画画、打版、布料，以及一系列作品怎样被展示。南安普顿的温彻斯特艺术学院是其中一个家。",
      "Not Marketing of clothes only. Not Textile chemistry as a science degree.",
      "不只是服装营销，也不是纺织化学这种理学学位。",
      "Studio making, fashion history, and a portfolio of garments.",
      "工作室制作、服装史，以及服装作品集。",
      PU[0], PU[1]
    ),
    "Interior Design": F(
      ["interior design", "interiors", "室内设计"],
      "Designing the inside of rooms: layout, light, materials, and how a space feels to use. Melbourne lists this as a Design major.",
      "设计房间内部：布局、光线、材料，以及空间用起来的感觉。墨尔本设计学位里有这个方向。",
      "Not Architecture (the whole building). Not Interior decoration as a short hobby course.",
      "不是建筑学（整栋房子），也不是短期兴趣班里的室内装饰。",
      "Drawing, digital modelling, materials, and studio projects for real rooms.",
      "绘图、数字建模、材料，以及真实房间的工作室项目。",
      PU[0], PU[1]
    ),
    "User Experience Design": F(
      ["ux", "ux design", "user experience", "用户体验"],
      "Designing how apps and websites feel to use — buttons, flows, and whether a 14-year-old can finish a task without getting lost.",
      "设计应用和网站用起来的感觉：按钮、流程，以及一个 14 岁的人能不能顺利完成任务。",
      "Not Graphic Design only (how it looks). Not Computer Science (building the engine).",
      "不只是平面设计（看起来怎样），也不是计算机科学（做引擎）。",
      "User research, wireframes, prototypes, and testing with real people.",
      "用户研究、线框、原型，以及找真人来测试。",
      PU[0], PU[1]
    ),
    "Product Design": F(
      ["product design", "industrial design", "产品设计"],
      "Designing everyday objects: a bottle, a chair, a medical device. You care how it looks, how it feels in the hand, and how it is made.",
      "设计日常物品：瓶子、椅子、医疗器械。你会关心它看起来怎样、拿在手里怎样，以及怎样做出来。",
      "Not Mechanical Engineering as stress analysis first. Not Graphic Design (flat images).",
      "不是以受力分析为主的机械工程，也不是平面设计（平面图像）。",
      "Sketching, prototyping, materials, and a portfolio of objects.",
      "草图、做模型、材料，以及物品作品集。",
      PU[0], PU[1]
    ),
    "Interactive Media Arts": F(
      ["ima", "interactive media", "互动媒体"],
      "NYU’s official name: art made with code, sensors, and screens — installations people walk through, not only films.",
      "纽约大学的官方名称：用代码、传感器和屏幕做的艺术——人可以走进去的装置，不只是电影。",
      "Not Film / Media as storytelling first. Not Computer Science as algorithms first.",
      "不是以讲故事为主的电影媒体，也不是以算法为主的计算机科学。",
      "Creative coding, electronics, and studio shows.",
      "创意编程、电子，以及工作室展览。",
      PU[0], PU[1]
    ),
    "Music Technology": F(
      ["music tech", "music technology", "sonic arts", "音乐科技", "录音"],
      "Recording, mixing, and building music with computers and studios. You still need ears; it is not only pressing presets.",
      "用电脑和录音室录音、混音和做音乐。仍需要耳朵；不是只按现成预设。",
      "Not Music as instrument performance first. Not Acoustical Engineering (physics of sound in halls and planes).",
      "不是以演奏乐器为主的音乐，也不是声学工程（音乐厅和飞机里声音的物理）。",
      "DAW software, microphones, acoustics basics, and a portfolio of tracks or installations.",
      "音频软件、麦克风、基础声学，以及曲目或装置作品集。",
      PU[0], PU[1]
    ),
    "Creative Writing": F(
      ["creative writing", "writing", "创意写作"],
      "Writing stories, poems, or scripts as the main university subject. Workshops, drafts, and reading other writers — not only school essays.",
      "把写故事、诗或剧本当大学主科。工作坊、改稿，以及读别的作者——不只是学校作文。",
      "Not English Literature only (analysing books). Not Journalism (reporting facts to the public).",
      "不只是英语文学（分析书），也不是新闻（向公众报告事实）。",
      "Workshops, craft of scenes, and a portfolio of writing.",
      "工作坊、场景写法，以及写作作品集。",
      PU[0], PU[1]
    ),
    "Comparative Literature": F(
      ["comp lit", "comparative literature", "比较文学"],
      "Reading books from more than one language or country side by side: how stories travel, and what translation changes.",
      "把不止一种语言或国家的书放在一起读：故事怎样旅行，翻译会改变什么。",
      "Not English Literature in one language only. Not Modern Languages as speaking first.",
      "不是只用一种语言的英语文学，也不是以口语为主的现代语言。",
      "Close reading, theory, and often a second language.",
      "细读、理论，常常还有第二语言。",
      PU[0], PU[1]
    ),
    "Japanese": F(
      ["japanese", "日语", "日本"],
      "Japanese language plus the stories and culture that come with it. Speaking, reading characters, and often a year abroad if the school offers it.",
      "日语，以及它带来的故事和文化。说、读汉字假名，如果学校提供，常常还有一年出国。",
      "Not East Asian Studies without the language load. Not Linguistics (how language works in the brain).",
      "不是语言负担较轻的东亚研究，也不是语言学（语言在大脑里怎样运作）。",
      "Grammar, conversation, reading, and cultural modules.",
      "语法、会话、阅读和文化课。",
      PU[0], PU[1]
    ),
    "Spanish / Hispanic Studies": F(
      ["spanish", "hispanic", "西班牙语", "西语"],
      "Spanish language plus the cultures of Spain and Latin America: books, film, and history, not only tourist phrases.",
      "西班牙语，加上西班牙和拉丁美洲的文化：书、电影和历史，不只是旅游口语。",
      "Not Linguistics. Not International Relations without the language.",
      "不是语言学，也不是没有语言的国际关系。",
      "Language classes, literature, and often a stay in a Spanish-speaking country.",
      "语言课、文学，常常还有在西语国家待一段时间。",
      PU[0], PU[1]
    ),
    "Italian": F(
      ["italian", "意大利语", "意大利"],
      "Italian language, plus literature, film, or history. A smaller language subject than Spanish at many schools.",
      "意大利语，再加上文学、电影或历史。在很多学校里比西班牙语更小众。",
      "Not Classics (Latin and ancient Rome as the core). Not Art History only.",
      "不是古典学（拉丁语和古罗马为核心），也不只是艺术史。",
      "Language, reading, and cultural modules.",
      "语言、阅读和文化课。",
      PU[0], PU[1]
    ),
    "Islamic and Middle Eastern Studies": F(
      ["middle eastern", "arabic", "islamic studies", "中东", "阿拉伯", "伊斯兰"],
      "Languages, history, and cultures of the Middle East. Edinburgh names this clearly. You may learn Arabic or another language of the region.",
      "中东的语言、历史和文化。爱丁堡的名称很明确。你可能学阿拉伯语或该地区的另一种语言。",
      "Not Politics / IR without the language and history depth. Not Theology as Christianity-only.",
      "不是没有语言和历史深度的政治国际关系，也不是只讲基督教的神学。",
      "Language, history, and texts, with optional politics modules.",
      "语言、历史和文本，可选政治课。",
      PU[0], PU[1]
    ),
    "Theology / Religious Studies": F(
      ["theology", "religious studies", "divinity", "神学", "宗教"],
      "Religions, beliefs, and the big questions people ask about meaning — with texts and history, not only personal faith.",
      "宗教、信仰，以及人关于意义的大问题——用文本和历史，不只是个人信仰。",
      "Not Philosophy only (arguments without religious traditions). Not History only.",
      "不只是哲学（没有宗教传统的论证），也不只是历史学。",
      "Sacred texts, ethics, and how religions live in the world today.",
      "经典文本、伦理，以及宗教今天怎样活在世界上。",
      PU[0], PU[1]
    ),
    "Scottish History / Studies": F(
      ["scottish history", "scottish studies", "苏格兰史"],
      "Scotland’s past and culture with evidence: politics, people, and sources. A specialist title at Edinburgh and Glasgow.",
      "用证据研究苏格兰的过去和文化：政治、人和史料。爱丁堡和格拉斯哥的专门名称。",
      "Not general History as world survey only. Not Celtic Studies as language first.",
      "不是只扫世界的一般历史学，也不是以语言为主的凯尔特研究。",
      "Archives, essays, and Scottish primary sources.",
      "档案、论文和苏格兰原始材料。",
      PU[0], PU[1]
    ),
    "International Development": F(
      ["development studies", "international development", "发展研究", "国际发展"],
      "Why some places are poorer, and what people try to change: aid, trade, health, education. Manchester is well known for this family.",
      "为什么有些地方更穷，以及人们怎样尝试改变：援助、贸易、健康、教育。曼彻斯特这一家族很有名。",
      "Not Economics only (models of markets). Not International Relations as diplomacy first.",
      "不只是经济学（市场模型），也不是以外交为主的国际关系。",
      "Poverty data, project case studies, and often a language or placement.",
      "贫困数据、项目案例，常常还有语言或实习。",
      PU[0], PU[1]
    ),
    "Social Policy": F(
      ["social policy", "社会政策"],
      "How governments try to help people: schools, housing, health, benefits. You read laws and data, then argue what a fair rule would be.",
      "政府怎样尝试帮助人：学校、住房、健康、福利。你读法律和数据，再论证怎样才算公平。",
      "Not Social Work (helping one family in the room). Not Politics as elections only.",
      "不是社会工作（帮助房间里的一个家庭），也不是只讲选举的政治。",
      "Welfare history, statistics, and policy essays.",
      "福利史、统计和政策论文。",
      PU[0], PU[1]
    ),
    "Real Estate / Property": F(
      ["real estate", "property", "不动产", "房地产"],
      "Buildings as money and as places people use: valuation, investment, and how a city rents space. Melbourne lists Property as a Design major.",
      "把房子既当钱，也当给人用的地方：估价、投资，以及城市怎样出租空间。墨尔本设计学位里有 Property。",
      "Not Architecture (designing the building). Not Construction Management (running the site).",
      "不是建筑学（设计房子），也不是建造管理（管工地）。",
      "Valuation, law of property, markets, and development cases.",
      "估价、物权法、市场和开发案例。",
      PU[0], PU[1]
    ),
    "Food Science": F(
      ["food science", "food technology", "食品科学"],
      "What food is made of, how to keep it safe, and how factories make it. Lab chemistry meets kitchens at industrial scale.",
      "食物由什么组成、怎样保证安全、工厂怎样做出来。实验室化学碰上工业厨房。",
      "Not Nutrition / Dietetics (advising what a person should eat). Not Cooking school.",
      "不是营养学（建议一个人该吃什么），也不是烹饪学校。",
      "Microbiology of food, processing, and safety tests.",
      "食品微生物、加工和安全检测。",
      PU[0], PU[1]
    ),
    "Natural Resources Conservation": F(
      ["conservation", "natural resources", "自然资源", "资源保护"],
      "UBC’s named path: looking after forests, water, and wildlife as a job with measurements, not only a poster.",
      "UBC 的命名方向：用测量把照顾森林、水和野生动物当成工作，不只是海报。",
      "Not Forestry as timber production first. Not Ecology as theory only.",
      "不是以木材生产为主的林学，也不是只有理论的生态学。",
      "Field measurement, ecology, and resource policy.",
      "野外测量、生态和资源政策。",
      PU[0], PU[1]
    ),
    "Atmospheric / Climate Science": F(
      ["atmospheric", "climate science", "meteorology", "大气", "气候", "气象"],
      "Weather, air, and climate with physics and data: storms, pollution, and why the planet is warming. UIUC is strong in this family.",
      "用物理和数据研究天气、空气和气候：风暴、污染，以及地球为什么在变暖。伊利诺伊大学这一家族很强。",
      "Not Geography as maps and people first. Not Environmental Science as ecology first.",
      "不是以地图和人为主的地理学，也不是以生态为主的环境科学。",
      "Physics of the air, coding climate data, and weather labs.",
      "空气的物理、给气候数据编程，以及天气实验室。",
      PU[0], PU[1]
    ),
    "Natural Sciences": F(
      ["natural sciences", "natsci", "自然科学"],
      "More than one science in one degree, then you go deeper in one. UCL uses this title. Year 1 is a mix; later you specialise.",
      "在一个学位里学不止一门科学，然后再深入其中一门。UCL 用这个名称。第一年是混合，后面再专。",
      "Not a single Chemistry or Physics degree from day one. Not Arts and Sciences (that mix also includes arts).",
      "不是从第一天就只读化学或物理，也不是文理混合的 Arts and Sciences（那个还包含文科）。",
      "Two or more sciences, maths, and later a specialist project.",
      "两门或更多科学、数学，以及后来的专门项目。",
      PU[0], PU[1]
    ),
    "Human Sciences": F(
      ["human sciences", "人类科学"],
      "UCL’s mix: the human body, behaviour, and society in one degree. You might study genes one term and cities the next.",
      "UCL 的混合学位：人体、行为和社会放在一起。可能这一学期学生基因，下一学期学城市。",
      "Not Medicine. Not Anthropology only. Not Psychology only.",
      "不是医学，不只是人类学，也不只是心理学。",
      "Biology of humans, quantitative methods, and social science options.",
      "人类生物学、定量方法，以及社会科学选项。",
      PU[0], PU[1]
    ),
    "Advertising": F(
      ["advertising", "ads", "广告"],
      "How ads are planned, made, and tested: words, pictures, audiences, and whether the message actually works. UIUC’s College of Media teaches this.",
      "广告怎样被计划、制作和测试：文字、图片、观众，以及这句话到底有没有用。伊利诺伊大学传媒学院教这个。",
      "Not Marketing as company strategy only. Not Graphic Design as art only. Not Journalism (news).",
      "不只是公司战略里的市场营销，也不只是艺术里的平面设计，更不是新闻。",
      "Campaigns, media buying basics, and a portfolio of ads.",
      "策划活动、媒介购买基础，以及广告作品集。",
      PU[0], PU[1]
    )
  };

  var STATIONS = {
    cs: { name: "Computer Science", nameZh: "计算机科学", aliases: ["computing", "programming", "编程"] },
    eng: { name: "Engineering", nameZh: "工程", aliases: ["engineer", "工科"] },
    arch: { name: "Architecture & Cities", nameZh: "建筑与城市", aliases: ["cities", "urban"] },
    biz: { name: "Business & Finance", nameZh: "商业与金融", aliases: ["business school"] },
    econ: { name: "Economics", nameZh: "经济学", aliases: [] },
    law: { name: "Law", nameZh: "法学", aliases: [] },
    med: { name: "Medicine & Biomedicine", nameZh: "医学与生物医学", aliases: ["doctor"] },
    psy: { name: "Psychology & Brain Science", nameZh: "心理学与脑科学", aliases: ["brain"] },
    bio: { name: "Life Sciences", nameZh: "生命科学", aliases: ["life science"] },
    stem: { name: "Math, Physics & Data", nameZh: "数学、物理与数据", aliases: ["stem", "data"] },
    art: { name: "Art, Design & Media", nameZh: "艺术、设计与媒体", aliases: ["design"] },
    ir: { name: "World & Public Policy", nameZh: "世界与公共政策", aliases: ["policy"] },
    edu: { name: "Education", nameZh: "教育", aliases: [] },
    ph: { name: "Public & Global Health", nameZh: "公共与全球健康", aliases: [] },
    lang: { name: "Languages & Stories", nameZh: "语言与故事", aliases: ["stories"] },
    hist: { name: "History & Ideas", nameZh: "历史与思想", aliases: ["ideas"] },
    chem: { name: "Chemistry", nameZh: "化学", aliases: [] },
    env: { name: "Earth & Environment", nameZh: "地球与环境", aliases: ["earth"] },
    nurse: { name: "Nursing", nameZh: "护理", aliases: [] },
    dent: { name: "Dentistry", nameZh: "牙科", aliases: [] },
    vet: { name: "Veterinary", nameZh: "兽医", aliases: [] },
    pharm: { name: "Pharmacy", nameZh: "药学", aliases: [] },
    music: { name: "Music", nameZh: "音乐", aliases: [] },
    sport: { name: "Sport & Movement", nameZh: "运动与身体", aliases: ["pe", "sport"] },
    social: { name: "Social Work", nameZh: "社会工作", aliases: [] }
  };

  global.MejorSearchFacts = { majors: MAJORS, stations: STATIONS };
})(typeof window !== "undefined" ? window : this);
