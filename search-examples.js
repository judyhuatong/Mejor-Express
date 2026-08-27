/* Extra paragraphs + three concrete examples for every search card.
   Age-14 language. Official titles stay in search-facts.js. */
(function (global) {
  function pack(more, moreZh, en, zh) {
    return { more: more, moreZh: moreZh, en: en, zh: zh };
  }

  var EX = {
    "Mechanical Engineering": pack(
      "In real life this looks like: a washing-machine drum, a bicycle gear, a hospital bed that goes up and down, or the heating pipes in a school. You do not stand beside a car engine all day with a spanner — you draw, calculate, simulate, then test a prototype.",
      "现实里像：洗衣机滚筒、自行车齿轮、会升降的病床，或学校里的暖气管道。你不是整天拿扳手站在汽车引擎旁——你先画、算、模拟，再测试模型。",
      ["You might design a hinge that still works after 10,000 slams, then break it on purpose in a lab to see why it failed.", "A team project might be a small electric kart: motors, brakes, and a frame that must not crack.", "You might use CAD to draw a robot arm, then check with maths whether it can lift a water bottle without shaking."],
      ["你可能设计一个开合 1 万次还不坏的铰链，再在实验室里故意弄坏它，看它为什么失败。", "小组项目可能是一台小型电卡丁车：电机、刹车，还有不能裂开的车架。", "你可能用 CAD 画机械臂，再用数学检查它举起一瓶水时会不会抖。"]
    ),
    "Civil Engineering": pack(
      "Think of a footbridge over a river, a tunnel under a road, or the pipes that bring clean water to a tower block. Your job is to make sure it stands up in wind, rain, and heavy trucks — and that the ground underneath will not slide.",
      "可以想成河上的步行桥、路下的隧道，或把干净水送到高楼的管道。你的工作是让它在风、雨和重卡车下仍站得住——而且下面的土不会滑走。",
      ["You might calculate how thick a beam must be so a school hall roof does not sag.", "A field trip might be standing in a trench looking at soil, then writing why a house would sink there.", "You might design a small water channel and test whether it floods when you pour a bucket in."],
      ["你可能计算梁要多厚，学校礼堂的屋顶才不会往下弯。", "实地可能是站在沟里看土，再写下为什么房子会在那里下沉。", "你可能设计一条小水渠，倒一桶水进去，看会不会淹。"]
    ),
    "Electronic and Electrical Engineering": pack(
      "This is phones, laptop chargers, street lights, electric trains, and the sensors in a smart watch. You learn why a circuit gets hot, how a signal travels, and how to keep a power grid from going dark.",
      "这是手机、笔记本充电器、路灯、电动火车，以及智能手表里的传感器。你会学电路为什么会烫、信号怎样走，以及电网怎样才不会一片黑。",
      ["You might solder a circuit that turns an LED on when a room gets dark.", "A lab might ask you to measure the voltage in a toy motor and explain why it stalled.", "You might program a microcontroller so a small robot follows a black line on the floor."],
      ["你可能焊接一个电路：房间变暗时 LED 就亮。", "实验室可能让你测量玩具电机的电压，并解释它为什么停转。", "你可能给单片机编程，让小机器人跟着地上的黑线走。"]
    ),
    "Chemical Engineering": pack(
      "Imagine turning a kitchen recipe into a factory that makes thousands of litres safely: fuel, soap, medicine ingredients, or clean water. You care about pipes, heat, pressure, and what happens if a valve fails.",
      "想象把厨房食谱放大成安全生产几千升的工厂：燃料、肥皂、药的原料，或干净的水。你会关心管子、热、压力，以及阀门坏了会怎样。",
      ["You might size a reactor so a reaction does not boil over like a pan left on the stove.", "A project might be: design a water-treatment step that takes mud out of river water.", "You might track heat and mass on paper until the numbers balance, then check a safety case."],
      ["你可能给反应器定尺寸，让反应不会像忘关火的锅一样溢出来。", "项目可能是：设计一步把河水里的泥去掉。", "你可能在纸上把热和物料算到平衡，再检查安全方案。"]
    ),
    "Biomedical Engineering": pack(
      "Concrete products: a hearing-aid circuit, a prosthetic knee, a phone app that reads a heart sensor, or the software that draws an MRI slice. You sit between hospitals and workshops.",
      "具体产品：助听器电路、假肢膝关节、读取心跳传感器的手机应用，或画出 MRI 切片的软件。你坐在医院和车间中间。",
      ["You might 3D-print a splint and test whether it is comfortable for a classmate to wear.", "A lab might record a muscle signal and turn it into a graph on a screen.", "You might redesign a hospital trolley so cables do not trip nurses."],
      ["你可能 3D 打印一个夹板，测试同学戴着舒不舒服。", "实验室可能记录肌肉信号，并在屏幕上画成图。", "你可能重新设计医院推车，让电线不会绊倒护士。"]
    ),
    "Biochemical Engineering": pack(
      "Think of yeast making insulin, or bacteria making a food enzyme, in a steel tank instead of a kitchen jar. UCL is especially known for this title.",
      "可以想成酵母在钢罐里制造胰岛素，或细菌制造食品酶——不是厨房玻璃瓶。UCL 这个名称尤其有名。",
      ["You might grow yeast in a flask, then scale the recipe to a bigger tank on paper.", "A lab might measure how much product comes out after you change the temperature.", "You might plan how to clean a tank so the next batch is not contaminated."],
      ["你可能在烧瓶里培养酵母，再在纸上把食谱放大到更大的罐。", "实验室可能在你改温度后，测量出来了多少产品。", "你可能计划怎样清洗罐子，好让下一批不被污染。"]
    ),
    "Aerospace Engineering": pack(
      "Aircraft wings, rocket nozzles, satellite panels, and the air that rushes over them. You are not training to be a pilot; you are training to make the machine that flies.",
      "飞机机翼、火箭喷管、卫星板，以及从它们上面冲过去的空气。你不是在学开飞机；你是在学做出会飞的机器。",
      ["You might test a paper-and-foam wing in a small wind tunnel and plot lift.", "A project might be a model rocket whose fins keep it straight.", "You might calculate fuel vs weight and see why adding one extra seat is hard."],
      ["你可能在小风洞里测试纸和泡沫做的机翼，并画出升力。", "项目可能是一个尾翼能让它飞直的模型火箭。", "你可能计算燃料和重量，看为什么多加一个座位那么难。"]
    ),
    "Environmental Engineering": pack(
      "A city sewage plant, a landfill liner, a filter that takes metal out of factory water, or a plan to cut smog from buses. You design the kit; you do not only write a poster about climate.",
      "城市污水处理厂、垃圾填埋衬层、去掉工厂废水里金属的过滤器，或减少公交车尾气的方案。你设计设备；不只是写一张气候海报。",
      ["You might test muddy water before and after a sand filter you built.", "A case study might be: why a river died after a factory leak, and what pipe would have stopped it.", "You might size a rain tank so a school roof does not flood the playground."],
      ["你可能测试自己做的砂滤器前后的泥水。", "案例可能是：工厂泄漏后河为什么死了，哪根管子本可以拦住。", "你可能给雨水罐定尺寸，让学校屋顶的水不会淹操场。"]
    ),
    "Materials Science / Engineering": pack(
      "Why a phone screen cracks, why a bike frame can be carbon instead of steel, why a hip implant must not poison the body. You look inside stuff with microscopes and tests.",
      "手机屏为什么裂、自行车架为什么能用碳纤维而不是钢、髋关节植入物为什么不能毒害身体。你用显微镜和测试往材料里面看。",
      ["You might pull a metal bar until it snaps and draw the stress–strain curve.", "A lab might compare chocolate (a ‘soft solid’) to ceramic, then talk about crystal structure for real metals.", "You might pick a polymer for a water bottle that will not leak chemicals."],
      ["你可能把金属棒拉断，并画出应力-应变曲线。", "实验室可能把巧克力（一种“软固体”）和陶瓷对比，再谈真金属的晶体结构。", "你可能为水瓶选一种不会漏出化学物的高分子。"]
    ),
    "Computer Engineering": pack(
      "The chip, the circuit board, and the firmware that wakes a phone when you press the button. Software plus hardware in one person.",
      "芯片、电路板，以及你按下按钮时唤醒手机的固件。软件和硬件在同一个人身上。",
      ["You might design a tiny computer on a breadboard that flashes Morse code.", "A lab might ask you to find why a program is slow: the chip cache, not your Python loop.", "You might write code that talks to a sensor over a wire."],
      ["你可能在面包板上做一台会闪莫尔斯电码的小电脑。", "实验室可能让你找出程序慢的原因：是芯片缓存，不是你的 Python 循环。", "你可能写代码，通过一根线和传感器说话。"]
    ),
    "Computer Science": pack(
      "Apps, websites, games, compilers, and the maths that says an algorithm will finish. A first-year example is: write a program that sorts names, then prove a faster way exists.",
      "应用、网站、游戏、编译器，以及说明算法会结束的数学。一年级的例子：写一个给名字排序的程序，再证明存在更快的方法。",
      ["You might build a to-do website, then break it with weird input to learn testing.", "A puzzle might be: find the shortest path on a school-map graph.", "You might train a tiny model that guesses a handwritten digit, then see where it fails."],
      ["你可能做一个待办网站，再用奇怪输入把它弄坏，从而学会测试。", "谜题可能是：在学校地图的图上找最短路。", "你可能训练一个认出手写数字的小模型，再看它在哪里认错。"]
    ),
    "Informatics": pack(
      "Same family as Computer Science, with Edinburgh’s official school name. You might start in a shared first year, then pick AI, software, or theory.",
      "和计算机科学是同一家族，只是爱丁堡学院的官方名称。可能第一年共用，再选人工智能、软件或理论。",
      ["You might write a chatbot for a course project, then measure how often it is wrong.", "A maths sheet might ask you to count the steps in a search algorithm.", "You might pair-program a game and use Git so two people do not overwrite each other."],
      ["你可能为课程项目写一个聊天机器人，再测量它多常说错。", "数学练习可能让你数搜索算法要走多少步。", "你可能结对做游戏，并用 Git，免得两个人互相覆盖。"]
    ),
    "Computing Science": pack(
      "Glasgow’s spelling of the same family as Computer Science. The work is still programs, systems, and proof — not IT helpdesk.",
      "格拉斯哥对计算机科学同一家族的写法。工作仍是程序、系统和证明——不是电脑维修台。",
      ["You might implement a login system and discover why storing passwords as plain text is dangerous.", "A lab might make you write a small compiler for a toy language.", "You might analyse why an app crashes only on one phone."],
      ["你可能实现登录系统，并发现密码明文存储为什么危险。", "实验室可能让你给一个玩具语言写小型编译器。", "你可能分析为什么一个应用只在某台手机上崩溃。"]
    ),
    "Artificial Intelligence": pack(
      "Spam filters, photo tagging, chess engines, and hospital tools that highlight a scan. You still write code and do linear algebra; you do not ‘download a brain’.",
      "垃圾邮件过滤、照片打标签、下棋引擎，以及标出扫描图的医院工具。你仍要写代码、做线性代数；不是“下载一个大脑”。",
      ["You might train a model to tell cats from dogs, then watch it fail on a drawing.", "An ethics workshop might ask: should a school use face recognition at the gate?", "You might code a maze solver that learns from rewards, not a fixed map."],
      ["你可能训练模型分辨猫和狗，再看它对一幅画认错。", "伦理课可能问：学校该不该在门口用人脸识别？", "你可能写一个从奖励里学习的迷宫程序，而不是写死地图。"]
    ),
    "Robotics and Artificial Intelligence": pack(
      "A robot vacuum, a warehouse arm, a drone that holds a camera still. UCL’s title means you touch motors and cameras, not only Jupyter notebooks.",
      "扫地机器人、仓库机械臂、能把相机端稳的无人机。UCL 这个名称意味着你要碰电机和相机，不只是笔记本代码。",
      ["You might make a wheeled robot follow a wall using a cheap distance sensor.", "A lab might ask you to grab a cup without crushing it.", "You might fuse camera + IMU data so the robot knows where it is in a corridor."],
      ["你可能用廉价测距传感器，让轮式机器人贴着墙走。", "实验室可能让你夹起杯子却不捏碎。", "你可能把相机和 IMU 数据合在一起，让机器人知道自己在走廊的哪里。"]
    ),
    "Software Engineering": pack(
      "Not a weekend app for yourself — a system other people will use next year: tests, versions, code review, and ‘what if the server dies at 2 a.m.’",
      "不是周末给自己做的应用——是别人明年还要用的系统：测试、版本、代码审查，以及“如果凌晨两点服务器死了怎么办”。",
      ["You might split a group project into tickets and refuse to merge code that has no tests.", "A case might be: a bank app that must not lose a payment if the phone battery dies.", "You might write documentation so a new teammate can run the project in 20 minutes."],
      ["你可能把小组项目拆成任务单，没有测试的代码不准合并。", "案例可能是：银行应用在手机没电时也不能丢掉一笔支付。", "你可能写说明，让新同学 20 分钟内能跑起来。"]
    ),
    "Software Development": pack(
      "Sydney’s named title for shipping working software: design, code, test, and talk to users. Close cousin of Software Engineering.",
      "悉尼对“做出能用的软件”的命名：设计、编码、测试，以及和用户说话。和软件工程是近亲。",
      ["You might interview three classmates, then change your app because they all got lost on the same screen.", "You might automate a boring school-club signup with a small web form.", "You might fix a bug that only happens when two people click at once."],
      ["你可能采访三个同学，然后改应用，因为他们都在同一屏迷路。", "你可能用一个小网页表单，自动完成社团报名这种无聊事。", "你可能修一个只有两个人同时点击才会出现的 bug。"]
    ),
    "Cyber Security": pack(
      "Phishing emails, stolen passwords, locked hospital files, and the people who try to break in. You learn attack so you can defend — in a legal lab, not on a stranger’s Wi-Fi.",
      "钓鱼邮件、被偷的密码、被锁的医院文件，以及试图闯进来的人。你在合法实验室里学攻击是为了防御——不是去连陌生人的 Wi-Fi。",
      ["You might try to break a toy website that stores passwords badly, then patch it.", "A tabletop might be: what does a school do if student photos leak.", "You might read a packet capture and spot a password sent as plain text."],
      ["你可能去攻破一个密码存得很差的玩具网站，再把它补上。", "桌上推演可能是：学生照片泄露了，学校该怎么办。", "你可能读数据包，发现密码被明文传走。"]
    ),
    "Information Security": pack(
      "Toronto’s close cousin of Cyber Security: protecting secrets, keys, and networks. Same idea, official name differs.",
      "多伦多对网络安全的近亲名称：保护秘密、密钥和网络。意思相近，官方名字不同。",
      ["You might design a policy: who can open the exam-paper folder, and how you log it.", "A lab might encrypt a file, lose the key on purpose, and discuss backups.", "You might map how a stolen laptop could leak a company’s customer list."],
      ["你可能设计一条规则：谁能打开试卷文件夹，以及怎样留下记录。", "实验室可能加密一个文件，故意把密钥弄丢，再讨论备份。", "你可能画出：笔记本电脑被偷后，怎样泄露公司客户名单。"]
    ),
    "Data Science": pack(
      "A pile of numbers — bus delays, shop sales, hospital waits — turned into a chart a human can use. You clean messy tables, not only train fancy models.",
      "一大堆数字——公交晚点、商店销量、医院等待——变成一张人能用的图。你要清理乱七八糟的表，不只是训练花哨模型。",
      ["You might scrape or be given a CSV of football scores and ask which team improved.", "A project might predict who returns a library book late — then check fairness.", "You might find that 30% of rows are duplicates and that this ruins the ‘average’."],
      ["你可能拿到足球比分 CSV，问哪支队进步了。", "项目可能预测谁会迟还图书馆的书——再检查这样公不公平。", "你可能发现 30% 的行是重复的，这会毁掉“平均值”。"]
    ),
    "Computing and Software Systems": pack(
      "Melbourne’s official computing major name inside Design/IT: you design and build software systems, not only learn one language.",
      "墨尔本在设计/信息学院里的官方计算方向：你设计和做出软件系统，不只是学一门语言。",
      ["You might model a library checkout system with users, books, and overdue fines.", "A studio might pair you with a designer to make an app that a real club could use.", "You might compare two database layouts and explain which one scales."],
      ["你可能给图书馆借书系统建模：用户、书和罚金。", "工作室可能让你和设计师一起，做一个社团真能用的应用。", "你可能比较两种数据库结构，说明哪一种更能变大。"]
    ),
    "Information / Library Studies": pack(
      "How people find, store, and trust information: catalogues, archives, search, privacy. UCL and Toronto name a whole faculty around this.",
      "人怎样找到、保存和信任信息：目录、档案、搜索、隐私。UCL 和多伦多有整所学院围着这个。",
      ["You might design how a museum tags 10,000 photos so a student can search ‘blue vase’.", "A class might compare Wikipedia, a newspaper, and a rumour chain.", "You might write an access rule: who can see medical records, and for how long."],
      ["你可能设计博物馆怎样给 1 万张照片打标签，好让学生能搜“蓝色花瓶”。", "课上可能对比维基百科、报纸和一串谣言。", "你可能写一条规则：谁能看病历，看多久。"]
    ),
    "Statistics / Data Science": pack(
      "Probability, surveys, medical trials, and ‘is this difference real or just luck’. Data Science as a title often sits here too.",
      "概率、问卷调查、医学试验，以及“这个差别是真的还是碰巧”。数据科学这个名称也常坐在这里。",
      ["You might run a coin-flip lab and show why 8 heads in a row is not proof of a magic coin.", "A project might analyse school lunch choices without naming students.", "You might explain a misleading graph from the news to a younger sibling."],
      ["你可能做抛硬币实验，说明连续 8 次正面并不能证明硬币有魔法。", "项目可能在不点名的情况下分析学校午餐选择。", "你可能把新闻里一张误导性的图讲给弟弟妹妹听。"]
    ),
    "Mathematics": pack(
      "Proof, algebra, calculus, and later maybe cryptography or fluid maths. A ‘problem’ might be a one-page argument, not a calculator drill.",
      "证明、代数、微积分，后来也许是密码或流体数学。所谓“题目”可能是一页论证，不是计算器操练。",
      ["You might prove why there are infinitely many primes, in your own words.", "A modelling week might turn a rumour spreading in a class into equations.", "You might mark a false proof and find the broken step."],
      ["你可能用自己的话证明为什么素数有无穷多个。", "建模周可能把班级里传谣言变成方程。", "你可能批改一份错误证明，找出哪一步断了。"]
    ),
    "Physics": pack(
      "Forces, energy, light, quantum, and labs where you measure, not only watch a video. Examples: lasers, particle tracks, or why a fridge needs energy.",
      "力、能量、光、量子，以及你自己测量的实验室，不只是看视频。例子：激光、粒子径迹，或冰箱为什么耗电。",
      ["You might measure g with a pendulum and write why your error bar is honest.", "A problem set might ask how much energy a roller-coaster loses to friction.", "You might align a laser so it hits a target the size of a coin."],
      ["你可能用单摆测重力加速度，并写下误差范围为什么诚实。", "习题可能问过山车因为摩擦损失了多少能量。", "你可能把激光对准，让它打中硬币大小的目标。"]
    ),
    "Astrophysics / Astronomy": pack(
      "Stars, planets, galaxies, and data from telescopes. Night labs exist, but much work is code on a laptop looking at images.",
      "星星、行星、星系，以及望远镜来的数据。会有夜间观测，但很多工作是在笔记本上对图像写代码。",
      ["You might plot a star’s brightness and guess whether it has a planet dip.", "A class might use public telescope data, not a backyard toy only.", "You might explain why we know the universe is expanding, with a simple diagram."],
      ["你可能画出一颗星的亮度，猜测有没有行星经过造成的变暗。", "课上可能用公开望远镜数据，不只是后院玩具。", "你可能用一张简单图，说明我们为什么知道宇宙在膨胀。"]
    ),
    "Medical Physics": pack(
      "Hospital machines: X-ray dose, MRI magnets, radiation treatment maps. Physics that must not harm the patient.",
      "医院机器：X 光剂量、MRI 磁体、放疗剂量图。这种物理不能伤害病人。",
      ["You might calculate a safe X-ray dose for a dummy, then compare to guidelines.", "A visit might be to an imaging suite (if the school arranges it).", "You might simulate how radiation spreads in tissue on a computer."],
      ["你可能给假人计算安全的 X 光剂量，再和指南对比。", "如果学校安排，可能去影像室参观。", "你可能在电脑上模拟辐射在组织里怎样散开。"]
    ),
    "Chemistry": pack(
      "Atoms, reactions, colour changes, smells (carefully), and why a battery works. Labs with gloves and goggles are the point, not only a textbook chapter.",
      "原子、反应、变色、气味（小心地闻），以及电池为什么有电。戴手套护目镜的实验室才是重点，不只是课本一章。",
      ["You might titrate until a pink colour appears, then calculate how much acid was there.", "A synthesis might make a small amount of aspirin in a teaching lab.", "You might explain rust as a redox story, not ‘metal going bad’."],
      ["你可能滴定到出现粉色，再计算有多少酸。", "合成实验可能在教学实验室里做出少量阿司匹林。", "你可能把生锈讲成氧化还原，而不是“金属坏了”。"]
    ),
    "Biochemistry": pack(
      "Chemistry inside living things: enzymes, DNA, metabolism. Example: why cyanide is dangerous, or how a cell stores sugar.",
      "生命里面的化学：酶、DNA、代谢。例子：氰化物为什么危险，或细胞怎样存糖。",
      ["You might run a gel to separate DNA pieces by size.", "A problem might be: why a missing enzyme causes a rare disease.", "You might measure how fast an enzyme works when you warm the tube."],
      ["你可能跑凝胶，按大小分开 DNA 片段。", "问题可能是：缺少某种酶为什么会得罕见病。", "你可能测量把管子加热后，酶工作有多快。"]
    ),
    "Biological Sciences": pack(
      "Cells, plants, animals, ecology — a wide first look at life. Later you might specialise in genetics or zoology.",
      "细胞、植物、动物、生态——对生命的较宽第一眼。后来可能专向基因或动物学。",
      ["You might microscope onion cells, then compare them to cheek cells.", "A field day might count insects in two kinds of grass.", "You might design an experiment: does caffeine change Daphnia heart rate."],
      ["你可能用显微镜看洋葱细胞，再和口腔细胞对比。", "野外可能在两种草里数昆虫。", "你可能设计实验：咖啡因会不会改变水蚤心率。"]
    ),
    "Biomedical Sciences": pack(
      "The science behind health: infection, blood, drugs in the body — usually not treating patients yourself in year 1.",
      "健康背后的科学：感染、血液、药在身体里——一年级通常不是你自己给病人看病。",
      ["You might look at blood slides and name cell types.", "A case might walk through what happens in the body during flu.", "You might pipette a dilution series and plot a standard curve."],
      ["你可能看血涂片并说出细胞类型。", "案例可能走一遍流感时身体里发生了什么。", "你可能做一系列稀释，并画出标准曲线。"]
    ),
    "Genetics": pack(
      "DNA, inheritance, CRISPR in the news, and why two siblings can look different. Pedigrees and sequencing labs are typical.",
      "DNA、遗传、新闻里的 CRISPR，以及为什么两个兄弟姐妹可以长得不同。家谱图和测序实验很常见。",
      ["You might draw a family tree for colour blindness and predict chances.", "A lab might extract strawberry DNA you can see as white goo.", "You might discuss a news story about a gene test and what it cannot tell you."],
      ["你可能给色盲画家谱，并预测概率。", "实验室可能提取草莓 DNA，你会看到白色黏液。", "你可能讨论基因检测新闻，以及它不能告诉你什么。"]
    ),
    "Marine Biology": pack(
      "Fish, reefs, plankton, and the water chemistry around them. Fieldwork can be boats, shores, or tanks — not only a documentary.",
      "鱼、珊瑚礁、浮游生物，以及周围的水化学。实地可能是船、岸边或水箱——不只是纪录片。",
      ["You might sample pond water and identify plankton under a microscope.", "A trip might survey a rocky shore at low tide.", "You might model what happens to a reef if the water warms by 2°C."],
      ["你可能采集池塘水，在显微镜下辨认浮游生物。", "出行可能在退潮时调查岩石岸。", "你可能模拟水温升高 2°C 时珊瑚礁会怎样。"]
    ),
    "Medicine (MBBS / MD)": pack(
      "A long clinical path: anatomy, wards, nights, and talking to frightened people. Example days: taking a history, practising stitches on a pad, watching surgery from the back.",
      "很长的临床路：解剖、病房、夜班，以及和害怕的人说话。日子的例子：问诊、在垫子上练习缝针、站在后面看手术。",
      ["You might practise asking a simulated patient why they came in, without interrupting.", "Anatomy might mean learning a heart on a model, then later real dissection if the school does it.", "You might write a note that another doctor can use at 3 a.m."],
      ["你可能练习问模拟病人为什么来，并且不打断。", "解剖可能是先在模型上认心脏，如果学校有，再做真实解剖。", "你可能写一份凌晨三点另一个医生还能用的记录。"]
    ),
    "Nursing": pack(
      "Wards, home visits, medicines checks, and staying calm when someone is in pain. Shifts are real; it is a job path, not a personality test.",
      "病房、上门、核对药物，以及有人疼痛时保持冷静。班次是真的；这是职业路，不是性格测试。",
      ["You might practise lifting a person safely with a slide sheet.", "A placement might be checking blood pressure every hour and spotting a change.", "You might explain a medicine to a grandparent in plain words."],
      ["你可能练习用滑单安全地移动一个人。", "实习可能是每小时量血压，并发现变化。", "你可能用简单的话向爷爷奶奶解释一种药。"]
    ),
    "Midwifery": pack(
      "Pregnancy, birth, and the first days with a new baby. King’s names a whole faculty around this. It is clinical, emotional, and shift-based.",
      "怀孕、分娩，以及新生儿的最初几天。国王学院有整所学院围着这个。这是临床的、情绪重的、要轮班的。",
      ["You might practise measuring a bump and explaining what the number means.", "A placement (later years) might be supporting a parent through labour with a mentor.", "You might learn when to call a doctor fast — and when to wait and watch."],
      ["你可能练习量肚子，并解释这个数字是什么意思。", "高年级实习可能是在导师带领下陪伴分娩。", "你可能学习什么时候必须马上叫医生——什么时候可以等一等看着。"]
    ),
    "Dentistry": pack(
      "Teeth, gums, drills, and sitting very close to someone’s face. Fine motor skill plus science. Long training.",
      "牙齿、牙龈、钻头，以及靠人脸很近。精细动手加上科学。训练很长。",
      ["You might fill a plastic tooth in a sim lab until the surface is smooth.", "A class might map which tooth is which, using a mouth model.", "You might role-play explaining a filling to a nervous 10-year-old."],
      ["你可能在模拟实验室里给塑料牙补洞，直到表面光滑。", "课上可能用口腔模型认每一颗牙。", "你可能角色扮演：向一个紧张的 10 岁孩子解释补牙。"]
    ),
    "Pharmacy": pack(
      "How medicines are made, checked, and given out safely. A shop or hospital counter is one end; chemistry is the other.",
      "药怎样被制造、核对和安全发出。药店或医院窗口是一端；化学是另一端。",
      ["You might spot a dangerous pair of medicines on a practice prescription.", "A lab might make a simple cream and test how even it is.", "You might counsel a pretend patient who wants to stop a drug suddenly."],
      ["你可能在练习处方上发现一对危险的药。", "实验室可能做一种简单乳膏，并测试它匀不匀。", "你可能劝说一个想突然停药的模拟病人。"]
    ),
    "Veterinary Science": pack(
      "Sick dogs, farm animals, and sometimes wildlife. Competitive, long, and sad days as well as happy ones. Not ‘just loving animals’.",
      "生病的狗、农场动物，有时还有野生动物。很竞争、很长，有快乐的日子也有难过的。不是“只要爱动物”。",
      ["You might practise bandaging a stuffed animal’s leg to the right tightness.", "A farm visit might be watching a herd and spotting a lame cow.", "You might discuss euthanasia ethics with a teacher, not only cute clinic videos."],
      ["你可能给毛绒玩具的腿包扎到合适的松紧。", "农场参观可能是看一群牛，找出哪一头跛。", "你可能和老师讨论安乐死伦理，不只是看可爱的诊所视频。"]
    ),
    "Psychology": pack(
      "Memory experiments, surveys, child development, and why people freeze in a fire drill. It is methods and stats, not only talking about feelings.",
      "记忆实验、问卷、儿童发展，以及人为什么在消防演习时僵住。这是方法和统计，不只是谈感受。",
      ["You might run a Stroop test on classmates and plot reaction times.", "A paper might ask you to spot a biased survey question.", "You might design an ethics form before you interview anyone."],
      ["你可能对同学做 Stroop 测试，并画出反应时间。", "论文可能让你找出有偏见的问卷题。", "你可能在采访任何人之前先写伦理表。"]
    ),
    "Psychiatry / Neuroscience": pack(
      "Brain, mental health, and nerves as science. Clinical psychiatry as a doctor comes later; this title is often the science side, especially at King’s IoPPN.",
      "把大脑、心理健康和神经当科学。当精神科医生是更后面的事；这个名称常常是科学这边，国王学院 IoPPN 尤其如此。",
      ["You might trace a nerve pathway on a diagram from spinal cord to thumb.", "A lecture might contrast depression biology with ‘just snap out of it’ myths.", "You might look at an fMRI image and say honestly what it cannot prove."],
      ["你可能在图上从脊髓描一条神经到拇指。", "讲座可能对比抑郁症的生物学和“想开点就好了”的迷思。", "你可能看一张 fMRI，并诚实说出它不能证明什么。"]
    ),
    "Audiology": pack(
      "Hearing tests, hearing aids, and balance. UCL and Southampton are known for this small clinical science.",
      "听力测试、助听器，以及平衡。UCL 和南安普顿以这个较小的临床科学出名。",
      ["You might sit in a booth and plot a classmate’s hearing curve (with consent).", "A lab might show how a hearing aid compresses loud sounds.", "You might practise explaining tinnitus without saying ‘just ignore it’."],
      ["你可能（在同意后）在隔音间给同学画出听力曲线。", "实验室可能展示助听器怎样压低过大的声音。", "你可能练习解释耳鸣，而不说“别去理它”。"]
    ),
    "Public Health / Population Health": pack(
      "Vaccines for a city, clean water rules, smoking laws, and outbreak maps. You help many people at once, not one bedside.",
      "一座城市的疫苗、净水规则、控烟法律，以及疫情地图。你一次帮很多人，不是一张病床。",
      ["You might map fake outbreak cases on a school plan and find the water fountain.", "A project might compare two cities’ bike-lane data and injuries.", "You might write a one-page brief for a mayor: mask rules, in plain words."],
      ["你可能在学校平面图上标出假想病例，并找到饮水机。", "项目可能对比两座城市的自行车道数据和受伤。", "你可能给市长写一页简报：口罩规则，用简单的话。"]
    ),
    "Kinesiology / Sport Science": pack(
      "How bodies move and train: VO2 tests, injury prevention, coaching plans. Liking football is not the whole subject.",
      "身体怎样运动和训练：摄氧量测试、预防受伤、训练计划。喜欢足球不是全部。",
      ["You might film a jump and mark knee angles to spot injury risk.", "A lab might measure heart rate on a bike while you change resistance.", "You might write a 4-week plan for a school runner that includes rest days."],
      ["你可能拍一次起跳，标出膝盖角度，找出受伤风险。", "实验室可能在你改变阻力时测自行车上的心率。", "你可能给学校跑者写四周计划，并且包含休息日。"]
    ),
    "Business / Management": pack(
      "How a café, a charity, or a big firm actually runs: people, money, operations. A case might be ‘why did this shop die after the mall opened’.",
      "咖啡馆、慈善机构或大公司实际上怎样运转：人、钱、运营。案例可能是“商场开了以后这家店为什么死了”。",
      ["You might make a simple cash-flow sheet for a school bake sale.", "A case might ask you to fire nobody, but still cut costs — and defend it.", "You might map who decides in a hospital, not only in a bank."],
      ["你可能给学校烘焙义卖做一张简单现金流表。", "案例可能让你谁也不裁，却仍要省钱——并为此辩护。", "你可能画出医院里谁做决定，不只是银行。"]
    ),
    "Accounting": pack(
      "Honest books: what came in, what went out, what is owed. If a number is pretty but false, that is the problem you are trained to catch.",
      "老实账：进来多少、出去多少、欠多少。如果一个数字很好看但是假的，那就是你要抓住的问题。",
      ["You might turn a messy shoebox of receipts into a simple balance sheet.", "A fraud story might show how a fake invoice steals from a club.", "You might explain depreciation with a school laptop that loses value."],
      ["你可能把一盒乱七八糟的收据做成简单资产负债表。", "舞弊故事可能展示假发票怎样从社团偷钱。", "你可能用一台会贬值的学校笔记本解释折旧。"]
    ),
    "Finance": pack(
      "Saving, lending, shares, risk. Example: why a 15-year mortgage costs more than you think, or how a pension grows.",
      "存、借、股票、风险。例子：为什么 15 年房贷比你想的贵，或养老金怎样长大。",
      ["You might compare two savings accounts with different interest and fees.", "A simulation might let you ‘buy’ shares with fake money and log why you lost.", "You might explain inflation using last year’s lunch price."],
      ["你可能比较两个利息和手续费不同的储蓄账户。", "模拟可能让你用假钱“买”股票，并记下为什么亏了。", "你可能用去年午餐价格解释通货膨胀。"]
    ),
    "Marketing": pack(
      "How a company talks to customers: a poster, a TikTok, a price, a brand colour. You test whether people actually notice.",
      "公司怎样和顾客说话：海报、短视频、价格、品牌颜色。你要测试人们到底有没有注意到。",
      ["You might A/B test two poster headlines on 30 classmates.", "A brief might be: sell a reusable bottle to people who already own one.", "You might map a customer journey from ‘I saw an ad’ to ‘I returned it’."],
      ["你可能对 30 个同学做两个海报标题的 A/B 测试。", "任务可能是：把可重复使用的瓶子卖给已经有一个的人。", "你可能画出顾客从“我看到广告”到“我退货了”的旅程。"]
    ),
    "Information Systems": pack(
      "How a shop, hospital, or university uses software and data to actually run: stock, logins, reports. Between business and computing.",
      "商店、医院或大学怎样用软件和数据来运转：库存、登录、报表。在商业和计算中间。",
      ["You might draw how a library system should update when a book is returned.", "A failure case: the till is down — what does the café do for an hour.", "You might choose between two booking apps using cost, risk, and staff time."],
      ["你可能画出书还回来时，图书馆系统该怎样更新。", "失败案例：收银机坏了——咖啡馆这一小时怎么办。", "你可能用成本、风险和员工时间，在两个预约应用里做选择。"]
    ),
    "Actuarial Science": pack(
      "Maths of insurance, pensions, and rare disasters. Example: how much should a 17-year-old’s car insurance cost, and why.",
      "保险、养老金和罕见灾难的数学。例子：17 岁开车的保险该多少钱，为什么。",
      ["You might use historical crash data (simplified) to price a toy insurance product.", "A spreadsheet might show why a tiny risk still needs a big fund.", "You might explain a pension as delayed wages, not a lottery."],
      ["你可能用简化的历史车祸数据，给一个玩具保险产品定价。", "表格可能说明为什么很小的风险仍需要一大笔准备金。", "你可能把养老金解释成延迟的工资，不是彩票。"]
    ),
    "Economics": pack(
      "Why prices move, why some countries are richer, why a minimum wage argument is hard. Graphs and models, plus real news.",
      "价格为什么动、为什么有些国家更富、为什么最低工资的争论很难。图和模型，加上真新闻。",
      ["You might model a lemonade stand: raise price, lose customers, draw the curve.", "A debate might be rent control, using two cities as cases.", "You might read a central-bank headline and translate it into ‘what happens to jobs’."],
      ["你可能给柠檬水摊建模：涨价、丢掉顾客、画出曲线。", "辩论可能是租金管制，用两座城市当案例。", "你可能读央行标题，并翻译成“工作岗位会怎样”。"]
    ),
    "Law (LLB / JD)": pack(
      "Statutes, cases, arguments in a structured way. Example: a shopkeeper vs a customer who slipped — who pays, and which rule says so.",
      "法条、案例、有结构的论证。例子：店主和一个滑倒的顾客——谁赔，哪条规则这么说。",
      ["You might mooting: 10 minutes arguing one side of a made-up appeal.", "A problem question might give messy facts and ask which issue is legally live.", "You might compare how two countries treat the same street protest."],
      ["你可能模拟法庭：用 10 分钟为虚构上诉的一方辩护。", "问题可能给出乱七八糟的事实，问哪个争点在法律上还活着。", "你可能比较两个国家对同一次街头抗议的处理。"]
    ),
    "Security and Crime Science": pack(
      "UCL’s named degree: why crime happens in this street, and how design (lights, cameras, layouts) can reduce it. More data and design than courtroom drama.",
      "UCL 的命名学位：为什么犯罪发生在这条街，以及设计（灯、摄像头、布局）怎样能减少它。比法庭剧更偏数据和设计。",
      ["You might walk a campus at night and mark dark corners on a map.", "A dataset might show bike theft peaks at 5 p.m. near the station.", "You might propose a stall layout for a market that makes snatching harder."],
      ["你可能晚上走校园，在地图上标出黑暗角落。", "数据可能显示自行车盗窃在下午 5 点车站附近最高。", "你可能给市场摊位提出一种更难被抢的布局。"]
    ),
    "Politics / International Relations": pack(
      "Elections, treaties, NGOs, why two countries fight over a river. Essays and briefings, not only watching news.",
      "选举、条约、非政府组织，以及两个国家为什么为一条河争吵。论文和简报，不只是看新闻。",
      ["You might write a two-page brief: should a city ban cars from one street.", "A simulation might be a UN-style debate on a water-sharing treaty.", "You might compare how two newspapers frame the same protest."],
      ["你可能写两页简报：一座城市该不该禁止某条街通车。", "模拟可能是联合国式的分水条约辩论。", "你可能比较两家报纸怎样框定同一次抗议。"]
    ),
    "War Studies": pack(
      "King’s famous title: why wars start, how they are fought, and how peace is kept. History plus strategy plus ethics — not army boot camp.",
      "国王学院很有名的名称：战争为什么开始、怎样打，以及和平怎样维持。历史加战略加伦理——不是军训。",
      ["You might reconstruct a historical campaign with maps and supply lines.", "A seminar might ask when humanitarian intervention helps or harms.", "You might brief ‘what would a cyber attack on a grid look like’ without leaking real secrets."],
      ["你可能用地图和补给线重建一次历史战役。", "讨论课可能问人道主义干预何时帮忙、何时伤害。", "你可能简报“电网遭受网络攻击会是什么样”，同时不泄露真实机密。"]
    ),
    "Sociology": pack(
      "How groups live: class, schools, social media crowds, inequality. Interviews and stats, not only opinions.",
      "一群人怎样生活：阶层、学校、社交媒体人群、不平等。访谈和统计，不只是观点。",
      ["You might observe a canteen for 20 minutes and code who sits with whom.", "A project might compare two neighbourhoods’ bus access.", "You might critique a ‘teenagers these days’ headline with data."],
      ["你可能观察食堂 20 分钟，记录谁和谁坐。", "项目可能比较两个社区的公交便利。", "你可能用数据批评一篇“现在的年轻人”标题。"]
    ),
    "Anthropology": pack(
      "What it means to be human across places and times: ritual, kinship, museums, fieldwork notes. Listening is a skill.",
      "在不同地方和时代，“做人”是什么意思：仪式、亲属、博物馆、田野笔记。倾听是一种技能。",
      ["You might write field notes about how your family greets guests.", "A museum visit might ask whose story is missing from a display.", "You might compare two coming-of-age ceremonies without ranking them ‘weird’."],
      ["你可能写下家里怎样招待客人的田野笔记。", "博物馆参观可能问：展柜里少了谁的故事。", "你可能比较两种成年礼，而不把它们评为“奇怪”。"]
    ),
    "Social Work": pack(
      "Helping a family when school, money, or safety has collapsed. Law plus listening. Heavy stories; you need adult backup.",
      "当学校、钱或安全崩了，去帮助一个家庭。法律加上倾听。故事很重；你需要大人支持。",
      ["You might role-play a first meeting with a parent who is angry and scared.", "A case (anonymised) might ask: stay in school, or move house — who decides.", "You might map local services: food bank, counsellor, emergency number."],
      ["你可能角色扮演：第一次见又气又怕的家长。", "匿名案例可能问：留在学校还是搬家——谁来决定。", "你可能画出本地服务：食物银行、咨询师、紧急电话。"]
    ),
    "Education": pack(
      "How people learn, and how to teach: lesson plans, classroom behaviour, what a good question is. Practice schools appear later.",
      "人怎样学习，以及怎样教书：教案、课堂行为、什么算好问题。后面会有实习学校。",
      ["You might teach a 8-minute mini-lesson to classmates and get feedback.", "A placement observation might be: who never speaks, and why.", "You might rewrite a worksheet that was too hard for year 7."],
      ["你可能给同学上一堂 8 分钟微型课，并接受反馈。", "实习观察可能是：谁从不说话，为什么。", "你可能改一份对七年级太难的练习单。"]
    ),
    "Architecture": pack(
      "Buildings people live in: light, stairs, materials, and a studio culture of critiques. Models and drawings, not only pretty sketches.",
      "给人住的房子：光线、楼梯、材料，以及工作室里的评图文化。模型和图纸，不只是好看的速写。",
      ["You might design a bus shelter that stays dry in wind-driven rain.", "A studio crit might pin your model on the wall while others question the stairs.", "You might visit a building and measure how noise travels between rooms."],
      ["你可能设计一个在斜风雨里仍能保持干燥的公交候车亭。", "评图时可能把你的模型钉在墙上，别人质问楼梯。", "你可能参观一栋楼，测量噪音怎样在房间之间走。"]
    ),
    "Landscape Architecture": pack(
      "Parks, streets, river edges, playgrounds. Plants plus drainage plus how people actually walk.",
      "公园、街道、河边、游乐场。植物加水排放，再加上人真正怎样走路。",
      ["You might redesign a school yard so rain does not pool by the door.", "A planting plan might pick trees that survive your city’s winter.", "You might track desire-paths (the dirt shortcuts people already make)."],
      ["你可能重新设计操场，让雨水不要积在门口。", "种植计划可能选出能活过你们城市冬天的树。", "你可能追踪人们已经走出的泥路捷径。"]
    ),
    "Urban Planning": pack(
      "How a city grows: housing, buses, zoning, who gets a park. Meetings and maps, not only architecture studios.",
      "城市怎样长大：住房、公交、区划、谁能有公园。会议和地图，不只是建筑工作室。",
      ["You might propose where a new bus stop should go using walking-time maps.", "A conflict might be: more homes vs more parking — you write both sides.", "You might read a zoning rule and translate it into ‘can we build a shop here’."],
      ["你可能用步行时间地图，提议新公交站该放在哪。", "冲突可能是：更多住房还是更多停车——两边都要写。", "你可能读一条区划规则，翻译成“这里能不能开店”。"]
    ),
    "Fine Art": pack(
      "Drawing, paint, sculpture, installation — making with your hands and eyes, plus talking about why. Studios and critiques.",
      "画画、颜料、雕塑、装置——用手和眼睛做，再加上谈论为什么。工作室和评图。",
      ["You might spend a week drawing the same chair in five materials.", "A crit might ask what your video is doing, not only whether it is ‘nice’.", "You might build a small sculpture that has to stand without glue."],
      ["你可能花一周用五种材料画同一把椅子。", "评图可能问你的视频在做什么，不只是“好不好看”。", "你可能做一个不能用胶水却要站得住的小雕塑。"]
    ),
    "Fine Art (Slade School)": pack(
      "UCL’s art school title for the same family as Fine Art: serious studio practice in central London.",
      "UCL 美术学院对美术同一家族的名称：在伦敦市中心认真做工作室实践。",
      ["You might be asked to fill a sketchbook every day for a month.", "A visiting artist talk might change how you use colour next week.", "You might install work in a corridor and watch how strangers walk around it."],
      ["你可能被要求一个月每天填满一本速写本。", "来访艺术家讲座可能改变你下周怎样用颜色。", "你可能把作品装在走廊里，看陌生人怎样绕开它。"]
    ),
    "Graphic Design": pack(
      "Posters, logos, type, screens. Example: a bus timetable that a tired person can still read.",
      "海报、标志、字体、屏幕。例子：一个疲惫的人仍能看懂的公交时刻表。",
      ["You might redesign a school lunch menu so allergens are obvious.", "A type task might be: pick two fonts that do not fight.", "You might test three icons with year 8 students and keep the winner."],
      ["你可能重新设计学校午餐菜单，让过敏原一目了然。", "字体任务可能是：选出两个不会打架的字体。", "你可能用三个图标找八年级学生测试，留下赢的那个。"]
    ),
    "Game Design": pack(
      "Rules, levels, feel of play — not only 3D art. A card game on paper counts. NYU Tisch and Melbourne list this.",
      "规则、关卡、玩起来的感觉——不只是 3D 美术。纸上的卡牌游戏也算。纽约大学 Tisch 和墨尔本有这个。",
      ["You might paper-prototype a maze game and watch where friends get stuck.", "A level might teach a mechanic without a tutorial wall of text.", "You might cut a feature because it was fun for you and confusing for players."],
      ["你可能用纸做迷宫游戏原型，看朋友卡在哪。", "一关可能不用一面说明墙就能教会一个机制。", "你可能砍掉一个功能，因为它对你有趣、对玩家却混乱。"]
    ),
    "Film / Media": pack(
      "Making or studying films, TV, and online video: shots, sound, editing, audiences. A 60-second film can be a whole assignment.",
      "制作或研究电影、电视和网络视频：镜头、声音、剪辑、观众。一个 60 秒的片子可以是整份作业。",
      ["You might shoot a silent 30-second story that still makes sense.", "An edit might live or die on one cut between two faces.", "You might storyboard a scene before you waste a day’s battery."],
      ["你可能拍一个无对白但仍能看懂的 30 秒故事。", "一次剪辑可能就靠两张脸之间的一刀。", "你可能先分镜，再浪费一整天的电池。"]
    ),
    "Theatre / Drama": pack(
      "Acting, directing, stagecraft, and how a live room feels. Rehearsals, not only watching plays.",
      "表演、导演、舞台技术，以及现场房间的感觉。是排练，不只是看戏。",
      ["You might direct a 5-minute scene and learn that blocking is maths plus feeling.", "A voice class might make you fill a hall without shouting.", "You might run lights for a show and cue a blackout on one breath."],
      ["你可能导演 5 分钟戏，并发现走位是数学加感觉。", "声音课可能让你不用喊也能充满礼堂。", "你可能给演出控灯，并在一口气里切黑。"]
    ),
    "Journalism": pack(
      "Finding facts and telling them in public: interviews, verification, deadlines. Not writing fiction, not PR for a brand.",
      "找出事实并公开讲出来：采访、核实、截稿。不是写小说，也不是给品牌做公关。",
      ["You might call three sources about a school policy and note who would not talk.", "A workshop might catch a fake quote before it goes out.", "You might write 300 words that a 12-year-old and a parent can both use."],
      ["你可能为一项学校政策打给三个消息源，并记下谁不肯说。", "工作坊可能在发出前抓住一句假引语。", "你可能写 300 字，让 12 岁的人和家长都能用。"]
    ),
    "Music": pack(
      "Daily practice, theory, ensemble. A jury or recital is a typical exam. Hours beat ‘talent only’.",
      "每天练习、乐理、合奏。考试常常是评审或音乐会。小时数胜过“只要有天赋”。",
      ["You might practise a 16-bar phrase slowly until the rhythm is honest.", "An ensemble might fail if one person ignores the conductor.", "You might analyse a pop song’s chords the same way you analyse Mozart."],
      ["你可能把 16 小节慢慢练到节奏老实。", "合奏可能因为一个人不看指挥而失败。", "你可能用分析莫扎特的方式分析一首流行歌的和弦。"]
    ),
    "History": pack(
      "Evidence, arguments, archives. Example: a letter from 1914 vs a later memoir — which do you trust, and why.",
      "证据、论证、档案。例子：1914 年的一封信和后来的回忆录——你信哪个，为什么。",
      ["You might compare two textbooks’ chapter on the same war.", "An archive task might be reading messy handwriting on a scan.", "You might write why ‘people in the past were stupid’ is a weak thesis."],
      ["你可能比较两本教材对同一场战争的章节。", "档案作业可能是辨认扫描件上潦草的字。", "你可能写下为什么“古人很蠢”是很弱的论点。"]
    ),
    "Ancient History": pack(
      "Greece, Rome, and other old worlds using inscriptions, coins, and texts. Not only Hollywood swords.",
      "用铭文、钱币和文本研究希腊、罗马和其他古文明。不只是好莱坞刀剑。",
      ["You might date a coin from its stamp and say what that implies for trade.", "A text seminar might argue over one word in a translation.", "You might rebuild a day’s timetable in a Roman town from archaeology notes."],
      ["你可能从戳记给一枚钱币断代，并说明这对贸易意味着什么。", "文本讨论可能为一句翻译里的一个词争论。", "你可能用考古笔记重建罗马小镇的一天时间表。"]
    ),
    "Archaeology": pack(
      "Digs, layers of soil, old objects, and lab dates. Mud and spreadsheets both count.",
      "发掘、土层、旧物件和实验室测年。泥和表格都算。",
      ["You might trowel a sandbox layer and record every find’s 3D position.", "A pottery puzzle might reconstruct a broken pot from sherds.", "You might argue why a shiny object still needs context, not just a photo."],
      ["你可能在沙箱里铲一层土，并记录每件发现的三维位置。", "陶片谜题可能是把碎瓷拼回一把壶。", "你可能论证为什么闪亮的物件仍需要出土环境，不只是一张照片。"]
    ),
    "History of Art": pack(
      "Paintings, sculptures, buildings, and why they were made. Looking slowly is the skill.",
      "画、雕塑、建筑，以及它们为什么被做出来。慢慢看是技能。",
      ["You might spend 20 minutes with one painting and write only what you see.", "A comparison might be two portraits of power, 300 years apart.", "You might visit a gallery and check the label against what the canvas is doing."],
      ["你可能对着一幅画看 20 分钟，只写下你看见的。", "对比可能是相隔 300 年的两幅权力肖像。", "你可能去美术馆，把标签和画布正在做的事对上。"]
    ),
    "Philosophy": pack(
      "Arguments about knowledge, fairness, mind. Example: is a self-driving car’s crash the engineer’s fault. Clarity beats slogans.",
      "关于知识、公平、心智的论证。例子：自动驾驶撞车是不是工程师的错。清楚胜过口号。",
      ["You might reconstruct an argument in numbered steps and find a hidden premise.", "A thought experiment might be the trolley problem, then a better, messier version.", "You might object to your own essay in the last paragraph on purpose."],
      ["你可能把论证拆成编号步骤，并找出隐藏前提。", "思想实验可能是电车难题，再换成更乱、更好的版本。", "你可能在最后一段故意反驳自己的文章。"]
    ),
    "English Language and Literature": pack(
      "Books, poems, how English works. Close reading: one paragraph can be a whole class.",
      "书、诗，以及英语怎样运作。细读：一段话可以上整整一堂课。",
      ["You might annotate a sonnet until every turn of the argument is marked.", "A language task might collect how your city greets people, then find a pattern.", "You might compare a novel and its film and say what the cut changed."],
      ["你可能给一首十四行诗做批注，直到每一个转折都被标出。", "语言作业可能收集你们城市怎样打招呼，再找出规律。", "你可能对比小说和电影，说出剪掉了什么。"]
    ),
    "Modern Languages": pack(
      "Another living language plus culture: speaking, reading, maybe a year abroad. Grammar plus films plus news.",
      "另一种活的语言加上文化：说、读，也许还有一年出国。语法加电影加新闻。",
      ["You might record a 2-minute talk and mark every gender error yourself.", "A tandem might be 30 minutes of your language, 30 of theirs.", "You might translate a meme and see what joke dies."],
      ["你可能录一段 2 分钟讲话，自己标出每一个性数错误。", "语伴可能是 30 分钟你的语言、30 分钟对方的。", "你可能翻译一则梗图，看哪个笑话死了。"]
    ),
    "French": pack(
      "French language and the cultures attached: France, West Africa, Quebec, literature, news.",
      "法语以及附着的文化：法国、西非、魁北克、文学、新闻。",
      ["You might debate school uniforms in French for 8 minutes.", "A reading might be a short story, then a news piece on the same theme.", "You might keep an error log of the 10 verbs you always mix up."],
      ["你可能用法语辩论校服 8 分钟。", "阅读可能是一篇短篇，再加同一主题的新闻。", "你可能给自己总是搞混的 10 个动词做错误本。"]
    ),
    "German": pack(
      "German language and culture: speaking, reading, history and ideas that come with it.",
      "德语和文化：说、读，以及随之而来的历史和思想。",
      ["You might split verbs correctly in a paragraph about last weekend.", "A film clip might be discussed without English subtitles after week 8.", "You might write a formal email as if applying for a summer internship."],
      ["你可能在写上周末的一段话里，把可分动词拆对。", "第八周后可能不看英文字幕讨论一段电影。", "你可能写一封像申请暑期实习的正式邮件。"]
    ),
    "Chinese / East Asian Studies": pack(
      "Chinese (or a wider East Asia mix): characters, history, current society. Stroke order and news both appear.",
      "中文（或更宽的东亚混合）：汉字、历史、当代社会。笔顺和新闻都会出现。",
      ["You might learn 15 characters that share a radical, then use them in a diary line.", "A culture module might compare two cities’ public transport etiquette.", "You might interpret a short news headline two ways."],
      ["你可能学 15 个同一部首的字，再用它们写一句日记。", "文化课可能比较两座城市的公交礼仪。", "你可能把一条短新闻标题解释成两种意思。"]
    ),
    "Classics / Greek and Latin": pack(
      "Old languages plus the worlds of Greece and Rome. Translation is slow and precise.",
      "古老语言，加上希腊罗马的世界。翻译又慢又精确。",
      ["You might spend 40 minutes on ten lines of Latin and still argue one word.", "A culture class might reconstruct a Roman dinner from texts and pots.", "You might compare a Greek myth to a modern retelling and mark what changed."],
      ["你可能花 40 分钟在十行拉丁文上，仍为一个词争论。", "文化课可能用文本和陶罐重建一顿罗马晚餐。", "你可能把希腊神话和现代改写对比，标出改了什么。"]
    ),
    "Linguistics / Language Sciences": pack(
      "How human language works in the brain and in the world: sounds, grammar, meaning, child language. Not ‘learn French faster’.",
      "人类语言在大脑里和世界上怎样运作：声音、语法、意义、儿童语言。不是“更快学会法语”。",
      ["You might transcribe the difference between ‘pin’ and ‘bin’ with phonetic symbols.", "A child-language clip might show a two-year-old inventing grammar.", "You might test whether a made-up rule feels ‘English’ to native speakers."],
      ["你可能用音标写出 pin 和 bin 的差别。", "儿童语言片段可能展示两岁孩子发明语法。", "你可能测试一条虚构规则在母语者听来像不像英语。"]
    ),
    "Arts and Sciences": pack(
      "UCL’s mix degree: arts and science in one. Example: ethics of AI plus a lab, or cities plus data.",
      "UCL 的混合学位：文科和理科在同一个学位里。例子：人工智能伦理加实验，或城市加数据。",
      ["You might take a module on climate science and another on political speech in the same year.", "A project might need both a graph and a close-read of a policy text.", "You might explain your mix to a relative who wants ‘just one subject’."],
      ["你可能同一年既上气候科学，又上政治演讲。", "项目可能既要一张图，又要细读一份政策文本。", "你可能向想要“只学一个科目”的亲戚解释你的混合。"]
    ),
    "Earth Sciences / Geology": pack(
      "Rocks, earthquakes, oil, volcanoes, deep time. Hammers and maps, plus lab dates.",
      "石头、地震、石油、火山、深时。锤子和地图，再加上实验室测年。",
      ["You might identify three rocks in a tray and say which formed in water.", "A field day might log layers in a cliff like a timeline.", "You might model where a landslide is likely after heavy rain."],
      ["你可能辨认托盘里三块石头，并说出哪块在水里形成。", "野外可能像时间线一样记录悬崖的层。", "你可能模拟大雨后哪里容易滑坡。"]
    ),
    "Environment / Environmental Science": pack(
      "Climate, pollution, ecosystems, and measurements. Mix of field boots and spreadsheets.",
      "气候、污染、生态系统和测量。野外靴子和表格的混合。",
      ["You might test river pH above and below a town.", "A project might estimate a family’s carbon number, then critique the calculator.", "You might design a sampling grid so you are not only picking pretty spots."],
      ["你可能在镇子上下游测河水 pH。", "项目可能估算一个家庭的碳数字，再批评那个计算器。", "你可能设计采样网格，免得只挑好看的地方。"]
    ),
    "Geography": pack(
      "Places: cities, maps, climate, migration. GIS on a computer plus walking a neighbourhood.",
      "地方：城市、地图、气候、迁移。电脑上的 GIS，再加上走进一个社区。",
      ["You might map flood risk onto your town using public data.", "A human-geography interview might ask why a shop closed.", "You might compare two satellite images of the same coastline 20 years apart."],
      ["你可能用公开数据把洪水风险标到你的镇子上。", "人文地理访谈可能问一家店为什么关了。", "你可能对比同一海岸线相隔 20 年的两张卫星图。"]
    ),
    "Food / Agriculture": pack(
      "Farms, soil, animals, supply chains. How we feed people — not a cooking TV show.",
      "农场、土壤、动物、供应链。我们怎样养活人——不是烹饪电视节目。",
      ["You might compare two soils and say which can hold more water.", "A supply-chain map might follow milk from cow to fridge.", "You might design a school-garden plan that actually fits a term."],
      ["你可能比较两种土，说出哪种更能含水。", "供应链图可能把牛奶从牛跟到冰箱。", "你可能设计一个学期里真能做完的学校菜园计划。"]
    ),
    "Forestry": pack(
      "Trees as ecosystems and as wood. UBC names the faculty. Measuring plots in the rain is a real skill.",
      "树既是生态系统也是木材。UBC 的学院名称就是这个。在雨里测量样地是真本事。",
      ["You might count trees in a plot and estimate carbon with a simple formula.", "A debate might be harvest vs old-growth protection on the same hillside.", "You might identify pests from leaf damage, not only from a textbook photo."],
      ["你可能在样地里数树，并用简单公式估算碳。", "辩论可能是同一面坡上的采伐还是保护老龄林。", "你可能从叶子损伤辨认虫害，不只是看课本照片。"]
    ),
    "Neuroscience": pack(
      "Brain cells, circuits, behaviour, sometimes mental health as science. You might look at a neuron model on Monday and a memory experiment on Friday.",
      "脑细胞、回路、行为，有时把心理健康当科学。可能周一看神经元模型，周五做记忆实验。",
      ["You might stimulate a nerve in a simulation and watch a muscle twitch on screen.", "A reading might be a patient who cannot form new memories, then the brain area involved.", "You might critique a headline that says a scan ‘proves’ someone is lying."],
      ["你可能在模拟里刺激神经，看屏幕上肌肉抽动。", "阅读可能是一个无法形成新记忆的病人，以及相关脑区。", "你可能批评一篇说扫描“证明”有人在撒谎的标题。"]
    ),
    "Neural Science": pack(
      "NYU’s official name for brain science. Same family as Neuroscience, different official wording.",
      "纽约大学对脑科学的官方名称。和神经科学是同一家族，官方用词不同。",
      ["You might code a simple neuron model that ‘fires’ above a threshold.", "A lab rotation style task might be analysing spike data from a public set.", "You might present why correlation in brain scans is not the same as cause."],
      ["你可能做一个超过阈值就会“放电”的简单神经元模型。", "实验轮转式作业可能是分析公开的神经放电数据。", "你可能讲解为什么脑扫描里的相关不等于因果。"]
    ),
    "Pharmacology": pack(
      "How a pill changes the body: receptors, side effects, dose. Different from handing medicines over a counter.",
      "一片药怎样改变身体：受体、副作用、剂量。和在柜台发药不同。",
      ["You might plot dose vs effect and find the point where harm rises fast.", "A case might be: two drugs compete for the same liver enzyme.", "You might explain why grapefruit juice can change a medicine’s strength."],
      ["你可能画出剂量和效果，找出伤害快速上升的点。", "案例可能是：两种药抢同一个肝脏酶。", "你可能解释为什么葡萄柚汁会改变药的强度。"]
    ),
    "Maritime Engineering": pack(
      "Ships, hulls, offshore platforms, towing tanks. Southampton’s older name was Ship Science. Think ferries, cargo, and structures that sit in waves.",
      "船、船体、海上平台、拖曳水池。南安普顿以前叫 Ship Science。可以想渡轮、货船，以及坐在波浪里的结构。",
      ["You might test a hull model in a long water tank and measure drag.", "A design might be a small ferry that stays stable when passengers all run to one side.", "You might calculate why a container ship sits lower when fully loaded."],
      ["你可能在长水池里测试船体模型并测量阻力。", "设计可能是一艘小渡轮：乘客全跑到一侧时仍稳。", "你可能计算货柜船装满时为什么坐得更低。"]
    ),
    "Oceanography": pack(
      "Currents, chemistry, climate, life in the sea. Southampton’s National Oceanography Centre is a famous home. Boats and code both appear.",
      "洋流、化学、气候、海里的生命。南安普顿国家海洋学中心是有名的家。船和代码都会出现。",
      ["You might plot temperature vs depth and find the thermocline.", "A fieldwork day might be collecting water at two depths.", "You might use satellite colour to guess where plankton is blooming."],
      ["你可能画出温度随深度的变化，并找到温跃层。", "野外可能是在两个深度取水。", "你可能用卫星颜色猜测浮游生物在哪里爆发。"]
    ),
    "Acoustical Engineering": pack(
      "Concert halls, quieter aircraft, headphones, ultrasound. Southampton’s specialist degree. Sound is a wave you can measure.",
      "音乐厅、更安静的飞机、耳机、超声。南安普顿的专门学位。声音是你可以测量的波。",
      ["You might clap in a stairwell and measure how long the echo lives.", "A studio visit might show an anechoic room that feels ‘dead’.", "You might design a wall that blocks traffic noise from a classroom."],
      ["你可能在楼梯间拍手，测量回声活多久。", "参观可能看到一间听起来“死掉”的消声室。", "你可能设计一面墙，挡住教室里的交通噪音。"]
    ),
    "Physiotherapy": pack(
      "Helping someone walk after a broken leg, or breathe better after surgery. Hands-on clinics, not only gym coaching.",
      "帮助断腿后的人走路，或手术后呼吸得更好。动手的诊所，不只是健身房教练。",
      ["You might practise guiding a classmate through a safe squat.", "A placement (later) might be teaching stairs to someone with a new hip.", "You might explain why rest alone is not always the plan."],
      ["你可能练习指导同学做一个安全的深蹲。", "高年级实习可能是教换了髋关节的人走楼梯。", "你可能解释为什么“只休息”并不总是方案。"]
    ),
    "Speech and Language Therapy": pack(
      "A child who cannot say ‘s’, a stroke patient who mixes words, someone who coughs when they drink. Clinics plus language science.",
      "发不出 s 的孩子、中风后词语混乱的人、喝水就咳的人。诊所加上语言科学。",
      ["You might transcribe a toddler’s speech and mark which sounds are late.", "A swallowing workshop might use thickened drinks as a demo (not on real patients first).", "You might make a picture board so a person can ask for water."],
      ["你可能转写幼儿的话，并标出哪些音偏晚。", "吞咽课可能先用稠饮料演示（不是一开始就对真病人）。", "你可能做图画板，让人能要水。"]
    ),
    "Criminology": pack(
      "Why crime happens, prisons, media panics, inequality. Essays and data, not police academy.",
      "犯罪为什么发生、监狱、媒体恐慌、不平等。论文和数据，不是警察学校。",
      ["You might compare crime rates with newspaper headlines in the same month.", "A prison-design debate might ask what ‘safer’ even means.", "You might interview (with ethics) how a neighbourhood talks about ‘safety’."],
      ["你可能把犯罪率和同一个月的报纸标题对比。", "监狱设计辩论可能问“更安全”到底是什么意思。", "你可能（在伦理允许下）访谈一个社区怎样谈“安全”。"]
    ),
    "Nuclear Engineering": pack(
      "Reactors, radiation safety, medical isotopes. Small specialist path. Safety culture is the subject, not a movie villain lab.",
      "反应堆、辐射安全、医用同位素。较小的专门路线。安全文化就是科目，不是电影反派实验室。",
      ["You might calculate shielding thickness for a source in a teaching lab (strict rules).", "A case might be: what a plant does when cooling fails, in a simulator discussion.", "You might compare nuclear waste volume to coal ash using honest units."],
      ["你可能（在严格规则下）计算教学放射源的屏蔽厚度。", "案例可能是：冷却失败时电厂怎么办，用模拟讨论。", "你可能用诚实的单位比较核废料体积和煤灰。"]
    ),
    "Mining Engineering": pack(
      "Tunnels, ventilation, processing rock, less harm to water and land. Strong at UNSW, UBC, Toronto.",
      "隧道、通风、选矿，以及对水和土地更少的伤害。新南威尔士、UBC、多伦多较强。",
      ["You might design airflow so dust does not sit in a tunnel.", "A map task might place a haul road away from a river.", "You might calculate how much rock you move to get a little metal."],
      ["你可能设计气流，让粉尘不要停在隧道里。", "地图作业可能把运矿路远离河流。", "你可能计算为了得到一点金属要搬多少石头。"]
    ),
    "Nutrition / Dietetics": pack(
      "Food and the body: hospital meals, school menus, sports eating. Dietetics is the clinical advising path.",
      "食物和身体：医院餐、学校菜单、运动饮食。营养治疗是临床建议路线。",
      ["You might redesign a canteen week so iron-rich food actually gets eaten.", "A placement (later) might be a supervised chat about diabetes and snacks.", "You might spot a social-media ‘detox’ claim and check it against evidence."],
      ["你可能重新设计一周食堂，让富铁食物真的被吃掉。", "高年级实习可能是在监督下谈糖尿病和零食。", "你可能抓住社交媒体上的“排毒”说法，并对证据。"]
    ),
    "Celtic Studies": pack(
      "Gaelic or other Celtic languages, stories, history. Small classes at Edinburgh and Glasgow. A song or a law-text can be a primary source.",
      "盖尔语或其他凯尔特语言、故事、历史。爱丁堡和格拉斯哥的小班。一首歌或一份法律文本可以是原始材料。",
      ["You might learn a greeting and a short poem in Scottish Gaelic.", "A history module might use a medieval text beside a modern protest song.", "You might map where a language is still spoken this year."],
      ["你可能学一句苏格兰盖尔语问候和一首短诗。", "历史课可能把中世纪文本和现代抗议歌曲放在一起。", "你可能画出这种语言今年仍在哪里被说。"]
    ),
    "Construction Management": pack(
      "A building site as a system: crane time, deliveries, safety hats, delay costs. Not drawing the pretty facade.",
      "把工地当系统：塔吊时间、送货、安全帽、延误成本。不是画好看的立面。",
      ["You might schedule a toy project: roof cannot start before walls.", "A safety brief might be written for year-7 visitors to a site (in theory).", "You might cost a delay of three rain days in a simple table."],
      ["你可能给玩具项目排期：墙没好不能上屋顶。", "安全简报可能是写给理论上参观工地的七年级学生。", "你可能用一张表算出下三天雨的延误成本。"]
    ),
    "Cognitive Science": pack(
      "Mind from several doors at once: a memory experiment, a bit of code, a language puzzle, a brain diagram.",
      "同时从几扇门研究心智：记忆实验、一点代码、语言谜题、脑图。",
      ["You might build a tiny program that forgets like a human (with a leaky list).", "A lab might time how fast people name colours on conflicting words.", "You might argue whether a chess engine ‘understands’ or only searches."],
      ["你可能做一个会像人一样遗忘的小程序（列表会漏）。", "实验室可能计时：人们在冲突词上给颜色命名有多快。", "你可能论证国际象棋引擎是“理解”还是只会搜索。"]
    ),
    "Hebrew and Jewish Studies": pack(
      "Hebrew language, Jewish history and culture. A small UCL specialism. Texts plus modern community life.",
      "希伯来语、犹太历史和文化。UCL 的较小专门学科。文本加上当代社区生活。",
      ["You might read a short biblical Hebrew sentence with a glossary, slowly.", "A module might compare two festivals’ food and memory.", "You might visit (or virtually tour) an archive exhibition and write whose voice is centred."],
      ["你可能带着词汇表慢慢读一句圣经希伯来语。", "一门课可能比较两个节日的食物和记忆。", "你可能参观（或线上参观）档案展，并写下谁的声音被放在中间。"]
    ),
    "Zoology": pack(
      "Whole animals: a bird’s migration, an insect’s mouthparts, a zoo nutrition plan. Field notebooks get wet.",
      "整只动物：鸟的迁徙、昆虫的口器、动物园营养计划。田野笔记本会湿。",
      ["You might watch pigeons for 15 minutes and code feeding vs scanning.", "A dissection (if offered) might compare a fish heart to a mammal diagram.", "You might design an enclosure that actually lets an animal hide."],
      ["你可能观察鸽子 15 分钟，记录啄食还是张望。", "如果有解剖，可能把鱼心和哺乳动物图对比。", "你可能设计一个真能让动物躲起来的围栏。"]
    ),
    "Microbiology": pack(
      "Plates of bacteria, virus stories, fermentation. Gloves, flame, and ‘do not eat in this room’.",
      "细菌培养皿、病毒故事、发酵。手套、酒精灯，以及“这间房里不许吃东西”。",
      ["You might streak a plate and wait two days to see colonies.", "A yoghurt lab might show bacteria you actually want.", "You might explain antibiotic resistance with a simple cartoon of surviving bugs."],
      ["你可能在培养皿上划线，等两天看菌落。", "酸奶实验可能展示你其实想要的细菌。", "你可能用简单漫画解释抗生素抗性：活下来的虫子。"]
    ),
    "Immunology / Infection": pack(
      "Vaccines, allergies, HIV as science, hospital hygiene. Melbourne biomedicine lists this major.",
      "疫苗、过敏、把 HIV 当科学、医院卫生。墨尔本生物医学列出这个方向。",
      ["You might match a vaccine type to how it trains the body, in a table.", "A case might be an outbreak in a sports team changing room.", "You might explain why ‘boost your immune system’ adverts are often empty."],
      ["你可能用表格把疫苗类型和它怎样训练身体对上。", "案例可能是运动队更衣室里的一次爆发。", "你可能解释为什么“增强免疫力”广告常常是空的。"]
    ),
    "Physiology": pack(
      "Heart rate labs, lung volumes, how kidneys save water. Measuring a living system.",
      "心率实验、肺容量、肾怎样节水。测量一个活的系统。",
      ["You might measure pulse before and after stairs, with a protocol.", "A simulation might show what happens if the heart’s pacemaker fails.", "You might explain fainting as blood-pressure physics, not ‘weakness’."],
      ["你可能按规程测量上楼梯前后的脉搏。", "模拟可能展示心脏起搏器失败会怎样。", "你可能把晕倒解释成血压物理，不是“软弱”。"]
    ),
    "Plant Science": pack(
      "Greenhouse growth, photosynthesis labs, crop disease. Leaves as factories.",
      "温室生长、光合作用实验、作物病害。叶子当工厂。",
      ["You might grow two trays with different light and measure height.", "A stomata print on nail polish might show how leaves breathe.", "You might diagnose a yellowing plant with a checklist, not a guess."],
      ["你可能在不同光线下种两盘苗并量高度。", "指甲油气孔印可能展示叶子怎样呼吸。", "你可能用清单诊断发黄的植物，而不是猜。"]
    ),
    "Ecology / Conservation": pack(
      "Counts, camera traps, a river restoration plan. Evidence over vibes.",
      "计数、红外相机、一条河的修复计划。证据胜过感觉。",
      ["You might set a transect and count plants every metre.", "A debate might be reintroducing a predator, using two real cases.", "You might write a one-page plan to cut plastic at a school sports day."],
      ["你可能拉一条样线，每一米数一次植物。", "辩论可能是重新引入捕食者，用两个真实案例。", "你可能写一页计划，减少运动会里的塑料。"]
    ),
    "Animal Science": pack(
      "Feed ratios, welfare scores, dairy or poultry systems. Not the vet operating theatre.",
      "饲料配比、福利打分、奶牛或家禽系统。不是兽医手术室。",
      ["You might design a diet for a growing chicken using a feed table.", "A welfare walk might score lameness in a video of cows.", "You might compare two barn layouts for heat stress."],
      ["你可能用饲料表给正在长大的鸡设计日粮。", "福利巡视可能给一段奶牛视频里的跛行打分。", "你可能比较两种畜舍布局对热应激的影响。"]
    ),
    "Occupational Therapy": pack(
      "Getting dressed, cooking one-handed, going back to school after injury. Adapting the kitchen as well as the person.",
      "穿衣服、单手做饭、受伤后回学校。既调整厨房也调整人。",
      ["You might try taping your dominant hand and making a sandwich.", "A home-visit plan might move a kettle so a wheelchair user can reach it.", "You might break ‘getting on a bus’ into ten tiny steps for practice."],
      ["你可能把常用手缠上胶带再去做三明治。", "家访计划可能把水壶移到轮椅使用者够得着的地方。", "你可能把“上车”拆成十个小步来练。"]
    ),
    "Optometry": pack(
      "Eye charts, lenses, spotting disease. Clinical and close-up.",
      "视力表、镜片、发现疾病。临床而且靠得很近。",
      ["You might practise retinoscopy on a model eye (teaching kit).", "A case might be a child who fails the board but can see a phone — what next.", "You might explain astigmatism with a rugby-ball vs football cornea."],
      ["你可能在教学模型眼上练习检影。", "案例可能是孩子看不清黑板却看得清手机——下一步做什么。", "你可能用橄榄球对足球的角膜，解释散光。"]
    ),
    "Industrial Engineering": pack(
      "Queues at a clinic, a factory line, airport security. Make the system smoother without burning people out.",
      "诊所排队、工厂流水线、机场安检。让系统更顺，同时不把人榨干。",
      ["You might time a canteen queue and propose a second till.", "A simulation might show why adding staff at the wrong desk does nothing.", "You might redesign a classroom fire-exit flow on paper."],
      ["你可能给食堂排队计时，并提议开第二个窗口。", "模拟可能展示为什么在错误窗口加人毫无用处。", "你可能在纸上重新设计教室消防疏散流。"]
    ),
    "Mechatronics": pack(
      "A line-following robot, an automatic greenhouse window, a factory gripper. Mechanics plus code plus circuits.",
      "循线机器人、自动温室窗、工厂夹爪。机械加代码加电路。",
      ["You might tune a PID loop so a motor stops shaking.", "A build might mix a 3D-printed gear with an Arduino sensor.", "You might fail a demo because one loose wire beat three days of code."],
      ["你可能调 PID，让电机不再抖。", "制作可能把 3D 打印齿轮和 Arduino 传感器混在一起。", "你可能因为一根松线，让三天代码的演示失败。"]
    ),
    "Engineering Physics": pack(
      "Building a sensor, a laser lab, a semiconductor demo. Physics that has to become a device.",
      "做一个传感器、激光实验室、半导体演示。必须变成装置的物理。",
      ["You might measure Planck’s constant with LEDs of different colours.", "A project might be a photodiode circuit that counts drops of water.", "You might explain superconductivity without promising a maglev backpack."],
      ["你可能用不同颜色的 LED 测普朗克常数。", "项目可能是一个数水滴的光电二极管电路。", "你可能解释超导，同时不承诺磁力背包。"]
    ),
    "Fashion Design": pack(
      "A toile (test garment), a lookbook, a fabric that will not itch. Winchester School of Art at Southampton is one home.",
      "坯样（试做的衣服）、造型册、不会扎人的布。南安普顿温彻斯特艺术学院是其中一个家。",
      ["You might drape fabric on a mannequin and photograph three options.", "A brief might be: school-uniform piece that still feels like you.", "You might unpick a seam five times until the line is clean."],
      ["你可能在人台上立体裁剪，并拍下三个方案。", "任务可能是：一件仍像你的校服单品。", "你可能拆缝五次，直到那条线干净。"]
    ),
    "Interior Design": pack(
      "A bedroom that actually has desk light, a café that does not echo, a clinic that feels less scary. Melbourne Design major.",
      "一张真有台灯的书桌、一家不回声的咖啡馆、一间不那么吓人的诊所。墨尔本设计方向。",
      ["You might rearrange furniture on a floor plan so a wheelchair turns.", "A lighting test might compare warm vs cold bulbs in the same box.", "You might pick a floor that will not kill a waiter who spills oil."],
      ["你可能在平面图上挪家具，让轮椅能转弯。", "灯光测试可能在同一个盒子里比较暖光和冷光。", "你可能选一种服务员洒了油也不会摔死的地板。"]
    ),
    "User Experience Design": pack(
      "A signup screen a tired person can finish. Buttons, flow, testing. Melbourne lists UX as a major.",
      "一个疲惫的人也能完成的注册页。按钮、流程、测试。墨尔本把 UX 列为方向。",
      ["You might watch five people fail your prototype and not defend the pretty layout.", "A wireframe might cut three steps from ‘buy a ticket’.", "You might write microcopy: the error that says what to do next."],
      ["你可能看着五个人在原型上失败，并且不为好看的布局辩护。", "线框可能把“买票”砍掉三步。", "你可能写微型文案：告诉下一步该做什么的报错。"]
    ),
    "Product Design": pack(
      "A bottle cap the elderly can open, a medical inhaler that clicks, a chair that ships flat. Sketch then make.",
      "老人能打开的瓶盖、会咔一声的吸入器、能平寄的椅子。先画再做。",
      ["You might foam-model a handle and test it with wet hands.", "A critique might kill your favourite shape because it cannot be recycled.", "You might cost three materials and pick the boring strong one."],
      ["你可能用泡沫做把手模型，并用湿手测试。", "评图可能杀掉你最爱的形状，因为它无法回收。", "你可能给三种材料算成本，并选那个无聊但结实的。"]
    ),
    "Interactive Media Arts": pack(
      "A corridor installation that reacts to footsteps, a controller made of fruit, a projection on a building. NYU IMA.",
      "随脚步变化的走廊装置、用水果做的手柄、投在楼上的影像。纽约大学 IMA。",
      ["You might hang a sensor so a plant ‘sings’ when you water it.", "A show might fail if the Wi-Fi drops — then you learn fallback modes.", "You might collaborate with a dancer so the piece is not only screens."],
      ["你可能挂一个传感器，让植物在浇水时“唱歌”。", "展览可能因为 Wi-Fi 掉线失败——然后你学会备用模式。", "你可能和舞者合作，让作品不只是屏幕。"]
    ),
    "Music Technology": pack(
      "A mix that makes vocals sit, a podcast denoise, a live-set laptop. Ears plus software.",
      "让人声坐下的混音、播客降噪、现场演出笔记本。耳朵加软件。",
      ["You might record a guitar two ways and A/B which mic placement wins.", "A mastering mistake might clip a track — you learn to see it on a meter.", "You might build a simple synth patch that still sounds musical."],
      ["你可能用两种方法录吉他，A/B 哪种麦克风位置赢。", "母带错误可能削波——你学会在仪表上看到它。", "你可能做一个听起来仍像音乐的简单合成器音色。"]
    ),
    "Creative Writing": pack(
      "A short story workshop, a poem that gets cut in half, a script page in proper format. Drafts in public.",
      "短篇工作坊、被砍掉一半的诗、格式正确的剧本页。当着别人的面改稿。",
      ["You might bring 800 words and watch the group circle one unclear motive.", "A constraint might be: write a scene with no adjectives.", "You might adapt a myth into a text-message conversation."],
      ["你可能带来 800 字，看小组圈出一个不清楚的动机。", "限制可能是：写一场没有任何形容词的戏。", "你可能把神话改成短信对话。"]
    ),
    "Comparative Literature": pack(
      "The same fairy tale in two languages, a novel and its translation, world cinema beside a poem.",
      "两个语言里的同一个童话、小说和它的译本、世界电影旁边一首诗。",
      ["You might track one image (the sea) across three countries’ stories.", "A translation class might fight over a joke that has no equivalent.", "You might map how a Greek myth reappears in a Korean drama."],
      ["你可能追踪一个意象（海）在三个国家的故事里。", "翻译课可能为一个没有对应的笑话争论。", "你可能画出希腊神话怎样出现在韩剧里。"]
    ),
    "Japanese": pack(
      "Kana, kanji, keigo, anime as culture not only as hobby. Speaking clubs and maybe a year in Japan.",
      "假名、汉字、敬语，把动漫当文化而不只是爱好。口语社，也许还有一年在日本。",
      ["You might order food in a role-play without switching to English.", "A kanji quiz might be 10 characters that look almost the same.", "You might watch a news clip at 0.75× and summarise it in Japanese."],
      ["你可能在角色扮演里点餐，而不切回英语。", "汉字测验可能是 10 个长得很像的字。", "你可能把新闻片段放到 0.75 倍速，再用日语概括。"]
    ),
    "Spanish / Hispanic Studies": pack(
      "Spanish for Spain and Latin America: a Mexican short story, an Argentine film, a news hour.",
      "西班牙和拉丁美洲的西班牙语：墨西哥短篇、阿根廷电影、一小时新闻。",
      ["You might debate water rights in Spanish using a real city case.", "A grammar drill might be pretérito vs imperfecto in a diary.", "You might subtitle 60 seconds of a podcast yourself."],
      ["你可能用一座真城市的案例，用西班牙语辩论水权。", "语法练习可能是日记里的简单过去和未完成过去。", "你可能自己给 60 秒播客加字幕。"]
    ),
    "Italian": pack(
      "Italian speaking and reading: a recipe, a film, a Renaissance letter in translation beside the original.",
      "意大利语说和读：一份食谱、一部电影、一封文艺复兴书信的原文和译文。",
      ["You might describe your room for two minutes without a script.", "A culture week might compare two Italian cities’ football and food.", "You might sing (badly, on purpose) to learn stress and vowels."],
      ["你可能不用稿子描述自己的房间两分钟。", "文化周可能比较两座意大利城市的足球和食物。", "你可能故意唱得很差，来学重音和元音。"]
    ),
    "Islamic and Middle Eastern Studies": pack(
      "Arabic or another regional language, history, current politics with care. Edinburgh names this clearly.",
      "阿拉伯语或该地区另一种语言、历史、小心对待的当代政治。爱丁堡名称很明确。",
      ["You might learn a short news sentence in Arabic and parse every word.", "A history essay might use a traveller’s account beside a tax record.", "You might map one river’s politics across three countries without slogans."],
      ["你可能学一句阿拉伯语新闻，并解析每一个词。", "历史论文可能把游记和税册放在一起。", "你可能画出一条河在三个国家的政治，而不喊口号。"]
    ),
    "Theology / Religious Studies": pack(
      "A sacred text, a ritual you observe respectfully, an ethics debate on hospitals. Faith is optional; careful reading is not.",
      "一部经典、一次你礼貌观察的仪式、医院伦理辩论。信仰可选；细读不行。",
      ["You might compare two translations of the same verse and say what shifted.", "A visit (if offered) might be a place of worship with a note on etiquette.", "You might write why ‘all religions are the same’ is too thin as a thesis."],
      ["你可能比较同一节经文的两个译本，并说出挪了什么。", "如果有参观，可能是一处礼拜场所，并写下礼仪注意事项。", "你可能写下为什么“所有宗教都一样”作为论点太薄。"]
    ),
    "Scottish History / Studies": pack(
      "Union debates, Highland sources, a city archive in Edinburgh. Local and global at once.",
      "联合的争论、高地史料、爱丁堡的城市档案。同时是本地和全球的。",
      ["You might read a 1707 pamphlet and a 1999 devolution leaflet side by side.", "A walking tour might treat street names as evidence.", "You might write who is missing from a castle’s tourist script."],
      ["你可能把 1707 年小册子和 1999 年权力下放传单并排读。", "步行导览可能把街名当证据。", "你可能写下城堡导游词里少了谁。"]
    ),
    "International Development": pack(
      "A well project that failed, a cash-transfer trial, a trade rule. Manchester is known for this family. Humility is part of the method.",
      "一口失败的井、一次现金转移试验、一条贸易规则。曼彻斯特这一家族有名。谦虚是方法的一部分。",
      ["You might critique a celebrity well-building video using a real evaluation report.", "A budget exercise might split $10,000 between bed-nets and teacher pay — and defend it.", "You might map who holds power in an ‘aid chain’ from donor to village."],
      ["你可能用一份真实评估报告，批评名人打井视频。", "预算练习可能把 1 万美元分给蚊帐和教师工资——并为此辩护。", "你可能画出援助链上从捐助方到村子谁握有权力。"]
    ),
    "Social Policy": pack(
      "Housing waiting lists, school meals, disability payments. Laws plus numbers.",
      "住房排队、学校餐、残疾补助。法律加数字。",
      ["You might rewrite a benefits form so a 16-year-old carer can finish it.", "A comparison might be child poverty rates before and after a policy.", "You might role-play a council meeting that lasts too long and still decides."],
      ["你可能改一份福利表格，让 16 岁的照顾者能填完。", "对比可能是一项政策前后的儿童贫困率。", "你可能角色扮演一场开太久却仍要做决定的议会。"]
    ),
    "Real Estate / Property": pack(
      "A shop rent, a student-house yield, why a flood zone kills a price. Melbourne Property major.",
      "店铺租金、学生公寓收益率、洪区为什么毁掉价格。墨尔本 Property 方向。",
      ["You might value a fake flat using three nearby sales.", "A law snippet might explain who pays if the roof leaks.", "You might argue why a ‘cheap’ warehouse is expensive once you add transport."],
      ["你可能用附近三笔成交给一套假公寓估价。", "法律片段可能解释屋顶漏水谁付钱。", "你可能论证为什么“便宜”仓库加上交通其实很贵。"]
    ),
    "Food Science": pack(
      "Why milk splits, how a factory keeps soup safe, shelf-life tests. Lab coats, not only recipes.",
      "牛奶为什么分层、工厂怎样让汤安全、保质期测试。实验服，不只是食谱。",
      ["You might measure bacteria in two yoghurts stored at different temperatures.", "A sensory panel might be: blind-taste salt levels in soup.", "You might design a label that actually matches the law."],
      ["你可能测量两种不同温度存放的酸奶里的细菌。", "感官小组可能是：盲尝汤的咸度。", "你可能设计一张真符合法规的标签。"]
    ),
    "Natural Resources Conservation": pack(
      "UBC’s job-shaped conservation: salmon, forests, water licences. Boots plus policy memos.",
      "UBC 那种工作形状的保护：鲑鱼、森林、水权。靴子加政策备忘录。",
      ["You might measure stream flow with a simple meter and write who depends on it.", "A conflict might be logging jobs vs spawning grounds — you present both.", "You might use a public map of protected areas and find a gap."],
      ["你可能用简单仪器测溪流，并写下谁依赖它。", "冲突可能是伐木工作对产卵地——两边都要陈述。", "你可能用公开的保护区地图找出缺口。"]
    ),
    "Atmospheric / Climate Science": pack(
      "Storm tracks, air pollution days, climate model output. Physics plus coding. UIUC is strong here.",
      "风暴路径、空气污染日、气候模型输出。物理加编程。伊利诺伊大学这里很强。",
      ["You might plot last week’s air-quality numbers against wind direction.", "A lab might launch (or simulate) a weather balloon profile.", "You might explain a heatwave using a simple energy-budget sketch."],
      ["你可能把上周空气质量和风向画在一起。", "实验室可能放（或模拟）探空气球廓线。", "你可能用一张简单能量收支草图解释热浪。"]
    ),
    "Natural Sciences": pack(
      "UCL-style mix: chemistry plus physics in year 1, then a deeper pick. A ‘home’ science later.",
      "UCL 式混合：一年级化学加物理，然后再选深的。后来有一个“主家”科学。",
      ["You might take earth science and maths together, then drop one.", "A project might need a lab method from chemistry and a model from physics.", "You might explain to family that this is still a real science degree, not indecision."],
      ["你可能同时上地球科学和数学，再放弃其中一个。", "项目可能既要化学实验方法，也要物理模型。", "你可能向家人解释这仍是真正的理学学位，不是犹豫。"]
    ),
    "Human Sciences": pack(
      "UCL mix: genes one term, cities the next. Humans as biology plus behaviour plus society.",
      "UCL 混合：这一学期基因，下一学期城市。人既是生物，也是行为和社会。",
      ["You might write how a housing design changes sleep, using both health and sociology sources.", "A stats lab might use height data, then discuss ethics of measuring people.", "You might design a small study: caffeine and reaction time in your class."],
      ["你可能用健康和社会学两种来源，写住房设计怎样改变睡眠。", "统计实验可能用身高数据，再讨论测量人的伦理。", "你可能设计小研究：咖啡因和你们班的反应时间。"]
    ),
    "Advertising": pack(
      "A campaign that has a budget, a deadline, and a mean test. UIUC College of Media.",
      "有预算、有截稿、有刻薄测试的一次活动。伊利诺伊大学传媒学院。",
      ["You might write three taglines and kill two after a hallway test.", "A media plan might put the same ad on bus stops vs in-game — and guess who sees it.", "You might flag an ad that stereotypes a group, before the client does."],
      ["你可能写三个口号，走廊测试后杀掉两个。", "媒介计划可能把同一广告放公交站或游戏里——并猜谁会看见。", "你可能在客户之前，标出一条刻板印象广告。"]
    )
  };

  function apply() {
    var facts = global.MejorSearchFacts && global.MejorSearchFacts.majors;
    if (!facts) return;
    Object.keys(EX).forEach(function (name) {
      var x = EX[name];
      var rec = facts[name];
      if (!rec) return;
      if (x.more && rec.precise.indexOf(x.more.slice(0, 40)) === -1) {
        rec.precise += (rec.precise ? "\n\n" : "") + x.more;
      }
      if (x.moreZh && rec.preciseZh.indexOf(x.moreZh.slice(0, 24)) === -1) {
        rec.preciseZh += (rec.preciseZh ? "\n\n" : "") + x.moreZh;
      }
      rec.examples = x.en;
      rec.examplesZh = x.zh;
    });
  }

  apply();
  if (global.MejorSearchFacts) global.MejorSearchFacts.applyExamples = apply;
})(typeof window !== "undefined" ? window : this);
