/* Official faculties for the same 15 universities. Checked against university pages, Aug 2026.
   Faculty names stay official English. Kid lines are for age 14.
   Official major / subject names live in catalog-majors.js (not every Year Abroad twin). */
(function (global) {
  var F = {
    ucl: [
      { name: "Faculty of Arts & Humanities", subjects: ["art", "lang", "hist", "music"], kid: "Stories, languages, art, and music.", kidZh: "故事、语言、艺术和音乐。" },
      { name: "The Bartlett (Built Environment)", subjects: ["arch"], kid: "Buildings, streets, and cities.", kidZh: "房子、街道和城市。" },
      { name: "Faculty of Brain Sciences", subjects: ["psy"], kid: "How brains think, feel, and hear.", kidZh: "大脑怎样想、感觉和听。" },
      { name: "Faculty of Engineering Sciences", subjects: ["eng", "cs", "biz"], kid: "Machines, computer programs, and also a business school.", kidZh: "机器、电脑程序，还有商学院。" },
      { name: "UCL Institute of Education (IOE)", subjects: ["edu"], kid: "How people learn, and how to teach.", kidZh: "人怎样学习，以及怎样教书。" },
      { name: "Faculty of Laws", subjects: ["law"], kid: "The rules a country uses.", kidZh: "一个国家的规则。" },
      { name: "Faculty of Life Sciences", subjects: ["bio"], kid: "Cells, plants, animals, and genes.", kidZh: "细胞、植物、动物和基因。" },
      { name: "Faculty of Mathematical & Physical Sciences", subjects: ["stem", "chem", "env"], kid: "Math, physics, chemistry, and Earth.", kidZh: "数学、物理、化学和地球。" },
      { name: "Faculty of Medical Sciences", subjects: ["med"], kid: "The human body and becoming a doctor.", kidZh: "人体，以及怎样成为医生。" },
      { name: "Faculty of Population Health Sciences", subjects: ["ph"], kid: "Keeping a whole city healthy, not only one person.", kidZh: "让整座城市保持健康，不只一个人。" },
      { name: "Faculty of Social & Historical Sciences", subjects: ["econ", "ir", "hist", "lang"], kid: "People, money, history, and countries.", kidZh: "人、钱、历史和国家。" }
    ],
    melbourne: [
      { name: "Faculty of Architecture, Building and Planning", subjects: ["arch"], kid: "Buildings and cities.", kidZh: "房子和城市。" },
      { name: "Faculty of Arts", subjects: ["lang", "hist", "ir"], kid: "Languages, history, and society.", kidZh: "语言、历史和社会。" },
      { name: "Faculty of Business and Economics", subjects: ["biz", "econ"], kid: "Companies, money, and markets.", kidZh: "公司、钱和市场。" },
      { name: "Faculty of Education", subjects: ["edu"], kid: "How to teach and how schools work.", kidZh: "怎样教书，学校怎样运转。" },
      { name: "Faculty of Engineering and Information Technology", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "Faculty of Fine Arts and Music", subjects: ["art", "music"], kid: "Art, performance, and music.", kidZh: "美术、表演和音乐。" },
      { name: "Melbourne Law School", subjects: ["law"], kid: "The rules a country uses.", kidZh: "一个国家的规则。" },
      { name: "Faculty of Medicine, Dentistry and Health Sciences", subjects: ["med", "dent", "psy", "ph", "nurse"], kid: "Doctors, teeth, nursing, and community health.", kidZh: "医生、牙科、护理和社区健康。" },
      { name: "Faculty of Science", subjects: ["bio", "stem", "chem", "env", "vet"], kid: "Living things, numbers, chemistry, Earth, and animals.", kidZh: "生命、数字、化学、地球和动物。" }
    ],
    unsw: [
      { name: "Arts, Design & Architecture", subjects: ["art", "arch", "edu", "lang", "hist", "ir"], kid: "Art, buildings, teaching, languages, and society.", kidZh: "艺术、建筑、教学、语言和社会。" },
      { name: "UNSW Business School", subjects: ["biz", "econ"], kid: "Companies and money.", kidZh: "公司和钱。" },
      { name: "Engineering", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "Law & Justice", subjects: ["law"], kid: "Rules, courts, and fairness.", kidZh: "规则、法庭和公平。" },
      { name: "Medicine & Health", subjects: ["med", "ph", "psy"], kid: "The body, public health, and the mind.", kidZh: "人体、公共健康和心理。" },
      { name: "Science", subjects: ["bio", "stem", "chem", "env", "psy"], kid: "Life, numbers, chemistry, Earth, and psychology.", kidZh: "生命、数字、化学、地球和心理。" }
    ],
    sydney: [
      { name: "Faculty of Arts and Social Sciences", subjects: ["lang", "hist", "ir", "econ", "edu", "psy"], kid: "Languages, history, society, teaching, and the mind.", kidZh: "语言、历史、社会、教学和心理。" },
      { name: "University of Sydney Business School", subjects: ["biz"], kid: "Companies and money.", kidZh: "公司和钱。" },
      { name: "Faculty of Engineering", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "Faculty of Medicine and Health", subjects: ["med", "dent", "nurse", "pharm", "ph"], kid: "Doctors, teeth, nursing, pharmacy, and public health.", kidZh: "医生、牙科、护理、药学和公共健康。" },
      { name: "Faculty of Science", subjects: ["bio", "stem", "chem", "env", "psy", "vet"], kid: "Life, numbers, chemistry, Earth, psychology, and animals.", kidZh: "生命、数字、化学、地球、心理和动物。" },
      { name: "Sydney School of Architecture, Design and Planning", subjects: ["arch", "art"], kid: "Buildings, design, and cities.", kidZh: "房子、设计和城市。" },
      { name: "Sydney Conservatorium of Music", subjects: ["music"], kid: "Learning music at a high level.", kidZh: "高水平地学音乐。" },
      { name: "Sydney Law School", subjects: ["law"], kid: "The rules a country uses.", kidZh: "一个国家的规则。" }
    ],
    toronto: [
      { name: "Faculty of Applied Science & Engineering", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "John H. Daniels Faculty of Architecture, Landscape, and Design", subjects: ["arch", "art"], kid: "Buildings, gardens, and design.", kidZh: "房子、花园和设计。" },
      { name: "Faculty of Arts & Science", subjects: ["lang", "hist", "ir", "econ", "bio", "stem", "chem", "env", "psy", "cs"], kid: "Most school subjects: words, numbers, science, and society.", kidZh: "大部分学科：文字、数字、科学和社会。" },
      { name: "Faculty of Dentistry", subjects: ["dent"], kid: "Teeth and mouths.", kidZh: "牙齿和口腔。" },
      { name: "Faculty of Information", subjects: ["cs", "stem"], kid: "Data, libraries, and information.", kidZh: "数据、图书馆和信息。" },
      { name: "Faculty of Kinesiology & Physical Education", subjects: ["sport"], kid: "How bodies move and stay fit.", kidZh: "身体怎样运动，怎样保持健康。" },
      { name: "Henry N.R. Jackman Faculty of Law", subjects: ["law"], kid: "The rules a country uses.", kidZh: "一个国家的规则。" },
      { name: "Rotman School of Management", subjects: ["biz"], kid: "Companies and money.", kidZh: "公司和钱。" },
      { name: "Temerty Faculty of Medicine", subjects: ["med"], kid: "The human body and becoming a doctor.", kidZh: "人体，以及怎样成为医生。" },
      { name: "Faculty of Music", subjects: ["music"], kid: "Learning music at a high level.", kidZh: "高水平地学音乐。" },
      { name: "Lawrence Bloomberg Faculty of Nursing", subjects: ["nurse"], kid: "Caring for sick people in hospitals and homes.", kidZh: "在医院和家里照顾生病的人。" },
      { name: "Leslie Dan Faculty of Pharmacy", subjects: ["pharm"], kid: "How medicines work.", kidZh: "药是怎样起作用的。" },
      { name: "Dalla Lana School of Public Health", subjects: ["ph"], kid: "Keeping a whole city healthy.", kidZh: "让整座城市保持健康。" },
      { name: "Factor-Inwentash Faculty of Social Work", subjects: ["social"], kid: "Helping families and communities with hard problems.", kidZh: "帮助遇到困难的家庭和社区。" },
      { name: "Ontario Institute for Studies in Education (OISE)", subjects: ["edu"], kid: "How people learn, and how to teach.", kidZh: "人怎样学习，以及怎样教书。" }
    ],
    edinburgh: [
      { name: "College of Arts, Humanities & Social Sciences", subjects: ["lang", "hist", "ir", "law", "edu", "art", "music", "biz", "econ"], kid: "Words, history, law, teaching, art, music, and business.", kidZh: "文字、历史、法律、教学、艺术、音乐和商业。" },
      { name: "College of Medicine & Veterinary Medicine", subjects: ["med", "vet", "bio"], kid: "People’s bodies and animals’ bodies.", kidZh: "人的身体和动物的身体。" },
      { name: "College of Science & Engineering", subjects: ["eng", "cs", "stem", "chem", "env", "bio"], kid: "Machines, computers, numbers, chemistry, Earth, and life.", kidZh: "机器、电脑、数字、化学、地球和生命。" }
    ],
    manchester: [
      { name: "Faculty of Biology, Medicine and Health", subjects: ["bio", "med", "ph", "psy", "pharm", "nurse", "dent"], kid: "Life, doctors, health, mind, medicines, nursing, and teeth.", kidZh: "生命、医生、健康、心理、药物、护理和牙科。" },
      { name: "Faculty of Humanities", subjects: ["lang", "hist", "ir", "law", "edu", "biz", "econ", "art", "music"], kid: "Words, history, society, law, teaching, business, and art.", kidZh: "文字、历史、社会、法律、教学、商业和艺术。" },
      { name: "Faculty of Science and Engineering", subjects: ["eng", "cs", "stem", "chem", "env"], kid: "Machines, computers, numbers, chemistry, and Earth.", kidZh: "机器、电脑、数字、化学和地球。" }
    ],
    kcl: [
      { name: "Faculty of Arts & Humanities", subjects: ["lang", "hist", "art", "music"], kid: "Languages, history, art, and music.", kidZh: "语言、历史、艺术和音乐。" },
      { name: "Faculty of Dentistry, Oral & Craniofacial Sciences", subjects: ["dent"], kid: "Teeth, mouths, and faces.", kidZh: "牙齿、口腔和面部。" },
      { name: "The Dickson Poon School of Law", subjects: ["law"], kid: "The rules a country uses.", kidZh: "一个国家的规则。" },
      { name: "Faculty of Life Sciences & Medicine", subjects: ["bio", "med"], kid: "Living things and the human body.", kidZh: "生命和人体。" },
      { name: "Faculty of Natural, Mathematical & Engineering Sciences", subjects: ["stem", "chem", "eng", "cs"], kid: "Numbers, chemistry, machines, and computers.", kidZh: "数字、化学、机器和电脑。" },
      { name: "Florence Nightingale Faculty of Nursing, Midwifery & Palliative Care", subjects: ["nurse"], kid: "Caring for sick people, and helping new babies arrive.", kidZh: "照顾病人，以及帮助新生儿到来。" },
      { name: "Institute of Psychiatry, Psychology & Neuroscience (IoPPN)", subjects: ["psy"], kid: "The mind, the brain, and mental health.", kidZh: "心理、大脑和心理健康。" },
      { name: "Faculty of Social Science & Public Policy", subjects: ["ir", "edu", "ph", "econ"], kid: "Countries, teaching, public health, and money in society.", kidZh: "国家、教学、公共健康和社会中的钱。" },
      { name: "King’s Business School", subjects: ["biz"], kid: "Companies and money.", kidZh: "公司和钱。" }
    ],
    columbia: [
      { name: "Columbia College / School of General Studies", subjects: ["lang", "hist", "ir", "econ", "bio", "stem", "chem", "psy", "art"], kid: "A wide mix of school subjects, from science to stories.", kidZh: "很多学科，从科学到故事。" },
      { name: "Fu Foundation School of Engineering and Applied Science", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "Graduate School of Architecture, Planning and Preservation", subjects: ["arch"], kid: "Buildings and cities (often after a first degree).", kidZh: "房子和城市（常常要先读完一个学位）。" },
      { name: "Columbia Business School", subjects: ["biz"], kid: "Companies and money (often after a first degree).", kidZh: "公司和钱（常常要先读完一个学位）。" },
      { name: "Columbia Law School", subjects: ["law"], kid: "The rules a country uses (often after a first degree).", kidZh: "规则（常常要先读完一个学位）。" },
      { name: "Columbia Journalism School", subjects: ["art"], kid: "News writing and telling true stories.", kidZh: "写新闻，讲真实的故事。" },
      { name: "School of International and Public Affairs (SIPA)", subjects: ["ir"], kid: "Countries and public choices.", kidZh: "国家和公共决定。" },
      { name: "Mailman School of Public Health", subjects: ["ph"], kid: "Keeping a whole city healthy.", kidZh: "让整座城市保持健康。" },
      { name: "School of Social Work", subjects: ["social"], kid: "Helping families and communities.", kidZh: "帮助家庭和社区。" },
      { name: "School of the Arts", subjects: ["art", "music"], kid: "Film, writing, theatre, visual art, and music.", kidZh: "电影、写作、戏剧、美术和音乐。" },
      { name: "School of Nursing", subjects: ["nurse"], kid: "Caring for sick people.", kidZh: "照顾生病的人。" },
      { name: "Vagelos College of Physicians and Surgeons", subjects: ["med"], kid: "Becoming a doctor (a long path).", kidZh: "成为医生（路很长）。" },
      { name: "College of Dental Medicine", subjects: ["dent"], kid: "Teeth and mouths.", kidZh: "牙齿和口腔。" },
      { name: "Teachers College (affiliate)", subjects: ["edu", "psy"], kid: "Teaching and how people learn.", kidZh: "教学，以及人怎样学习。" }
    ],
    ubc: [
      { name: "Faculty of Applied Science", subjects: ["eng", "arch", "nurse"], kid: "Machines, buildings, and nursing.", kidZh: "机器、建筑和护理。" },
      { name: "Faculty of Arts", subjects: ["lang", "hist", "ir", "econ", "psy", "art", "music", "social"], kid: "Words, history, society, the mind, art, and music.", kidZh: "文字、历史、社会、心理、艺术和音乐。" },
      { name: "Sauder School of Business", subjects: ["biz"], kid: "Companies and money.", kidZh: "公司和钱。" },
      { name: "Faculty of Dentistry", subjects: ["dent"], kid: "Teeth and mouths.", kidZh: "牙齿和口腔。" },
      { name: "Faculty of Education", subjects: ["edu"], kid: "How to teach.", kidZh: "怎样教书。" },
      { name: "Faculty of Forestry", subjects: ["env"], kid: "Forests, wood, and looking after nature.", kidZh: "森林、木材和保护自然。" },
      { name: "Faculty of Land and Food Systems", subjects: ["env", "bio"], kid: "Farms, food, and land.", kidZh: "农场、食物和土地。" },
      { name: "Peter A. Allard School of Law", subjects: ["law"], kid: "The rules a country uses.", kidZh: "一个国家的规则。" },
      { name: "Faculty of Medicine", subjects: ["med", "ph"], kid: "The body and public health.", kidZh: "人体和公共健康。" },
      { name: "Faculty of Pharmaceutical Sciences", subjects: ["pharm"], kid: "How medicines work.", kidZh: "药是怎样起作用的。" },
      { name: "Faculty of Science", subjects: ["bio", "stem", "chem", "env", "cs"], kid: "Life, numbers, chemistry, Earth, and computers.", kidZh: "生命、数字、化学、地球和电脑。" }
    ],
    nyu: [
      { name: "College of Arts & Science", subjects: ["lang", "hist", "ir", "econ", "bio", "stem", "chem", "psy"], kid: "A wide mix of school subjects.", kidZh: "很多学科。" },
      { name: "Tandon School of Engineering", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "Leonard N. Stern School of Business", subjects: ["biz"], kid: "Companies and money.", kidZh: "公司和钱。" },
      { name: "Tisch School of the Arts", subjects: ["art", "music"], kid: "Film, theatre, games, and performance.", kidZh: "电影、戏剧、游戏和表演。" },
      { name: "Steinhardt School of Culture, Education, and Human Development", subjects: ["edu", "music", "art", "psy", "nurse"], kid: "Teaching, music, media, the mind, and some health study.", kidZh: "教学、音乐、媒体、心理和一些健康学习。" },
      { name: "Rory Meyers College of Nursing", subjects: ["nurse"], kid: "Caring for sick people.", kidZh: "照顾生病的人。" },
      { name: "Silver School of Social Work", subjects: ["social"], kid: "Helping families and communities.", kidZh: "帮助家庭和社区。" },
      { name: "School of Global Public Health", subjects: ["ph"], kid: "Keeping communities healthy around the world.", kidZh: "让世界各地的社区保持健康。" },
      { name: "School of Law", subjects: ["law"], kid: "The rules a country uses (often after a first degree).", kidZh: "规则（常常要先读完一个学位）。" },
      { name: "Grossman School of Medicine", subjects: ["med"], kid: "Becoming a doctor (a long path).", kidZh: "成为医生（路很长）。" },
      { name: "College of Dentistry", subjects: ["dent"], kid: "Teeth and mouths.", kidZh: "牙齿和口腔。" }
    ],
    uiuc: [
      { name: "Grainger College of Engineering", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "College of Liberal Arts & Sciences", subjects: ["lang", "hist", "ir", "econ", "bio", "stem", "chem", "env", "psy"], kid: "Words, numbers, science, and society.", kidZh: "文字、数字、科学和社会。" },
      { name: "Gies College of Business", subjects: ["biz"], kid: "Companies and money.", kidZh: "公司和钱。" },
      { name: "College of Agricultural, Consumer and Environmental Sciences (ACES)", subjects: ["env", "bio"], kid: "Farms, food, and the environment.", kidZh: "农场、食物和环境。" },
      { name: "College of Fine & Applied Arts", subjects: ["art", "arch", "music"], kid: "Art, buildings, and music.", kidZh: "艺术、建筑和音乐。" },
      { name: "College of Media", subjects: ["art"], kid: "News, film, and advertising.", kidZh: "新闻、电影和广告。" },
      { name: "College of Education", subjects: ["edu"], kid: "How to teach.", kidZh: "怎样教书。" },
      { name: "School of Information Sciences", subjects: ["cs", "stem"], kid: "Data and information.", kidZh: "数据和信息。" },
      { name: "College of Applied Health Sciences", subjects: ["sport", "ph"], kid: "How bodies move, and community health.", kidZh: "身体怎样运动，以及社区健康。" },
      { name: "College of Law", subjects: ["law"], kid: "The rules a country uses (often after a first degree).", kidZh: "规则（常常要先读完一个学位）。" },
      { name: "College of Veterinary Medicine", subjects: ["vet"], kid: "Animal health.", kidZh: "动物的健康。" },
      { name: "School of Social Work", subjects: ["social"], kid: "Helping families and communities.", kidZh: "帮助家庭和社区。" }
    ],
    glasgow: [
      { name: "College of Arts & Humanities", subjects: ["lang", "hist", "art", "music"], kid: "Languages, history, art, and music.", kidZh: "语言、历史、艺术和音乐。" },
      { name: "College of Medical, Veterinary & Life Sciences", subjects: ["med", "vet", "bio", "ph", "nurse", "dent"], kid: "People, animals, life science, and health care.", kidZh: "人、动物、生命科学和医护。" },
      { name: "College of Science & Engineering", subjects: ["eng", "cs", "stem", "chem", "env"], kid: "Machines, computers, numbers, chemistry, and Earth.", kidZh: "机器、电脑、数字、化学和地球。" },
      { name: "College of Social Sciences", subjects: ["law", "edu", "econ", "biz", "ir", "psy", "social"], kid: "Law, teaching, money, countries, the mind, and helping people.", kidZh: "法律、教学、钱、国家、心理和助人。" }
    ],
    southampton: [
      { name: "Faculty of Arts and Humanities", subjects: ["lang", "hist", "art", "music"], kid: "Languages, history, art, and music (including Winchester School of Art).", kidZh: "语言、历史、艺术和音乐（包括温彻斯特艺术学院）。" },
      { name: "Faculty of Engineering and Physical Sciences", subjects: ["eng", "cs", "stem", "chem"], kid: "Machines, computers, numbers, and chemistry.", kidZh: "机器、电脑、数字和化学。" },
      { name: "Faculty of Environmental and Life Sciences", subjects: ["bio", "env", "psy"], kid: "Living things, the ocean and Earth, and psychology.", kidZh: "生命、海洋和地球，以及心理。" },
      { name: "Faculty of Medicine", subjects: ["med", "ph", "nurse"], kid: "The body, public health, and nursing.", kidZh: "人体、公共健康和护理。" },
      { name: "Faculty of Social Sciences", subjects: ["law", "edu", "econ", "biz", "ir"], kid: "Law, teaching, money, business, and countries.", kidZh: "法律、教学、钱、商业和国家。" }
    ],
    sheffield: [
      { name: "Faculty of Arts and Humanities", subjects: ["lang", "hist", "art", "music"], kid: "Languages, history, art, music, and journalism.", kidZh: "语言、历史、艺术、音乐和新闻。" },
      { name: "Faculty of Engineering", subjects: ["eng", "cs"], kid: "Machines and computer programs.", kidZh: "机器和电脑程序。" },
      { name: "Faculty of Health", subjects: ["med", "ph", "nurse", "dent"], kid: "Doctors, public health, nursing, and teeth.", kidZh: "医生、公共健康、护理和牙科。" },
      { name: "Faculty of Science", subjects: ["bio", "stem", "chem", "psy"], kid: "Life, numbers, chemistry, and psychology.", kidZh: "生命、数字、化学和心理。" },
      { name: "Faculty of Social Sciences", subjects: ["law", "edu", "econ", "biz", "ir", "arch", "social"], kid: "Law, teaching, money, countries, buildings, and helping people.", kidZh: "法律、教学、钱、国家、建筑和助人。" }
    ]
  };

  var EXTRA = [
    {
      id: "lang", code: "LNG", name: "Languages & Stories",
      tags: ["words", "art", "help"],
      blurb: "You learn languages, books, and how to say ideas clearly.",
      learn: "Reading, writing, other languages, and stories from different places.",
      need: "Liking words, and patience when a sentence is hard.",
      future: "Writer, translator, teacher, or someone who works with people from other countries."
    },
    {
      id: "hist", code: "HST", name: "History & Ideas",
      tags: ["words", "logic", "help"],
      blurb: "You study what people did in the past, and the big ideas they believed.",
      learn: "History, philosophy, and how to use evidence instead of only a feeling.",
      need: "Careful reading, and asking “how do we know?”",
      future: "Research helper, museum work, teaching, or policy reading."
    },
    {
      id: "chem", code: "CHM", name: "Chemistry",
      tags: ["nature", "logic", "hands"],
      blurb: "You study what stuff is made of, and how it changes.",
      learn: "Atoms, reactions, lab safety, and why materials behave the way they do.",
      need: "Careful hands in a lab, and not minding small steps.",
      future: "Lab work, medicine later, materials, or food science."
    },
    {
      id: "env", code: "ENV", name: "Earth & Environment",
      tags: ["nature", "hands", "data"],
      blurb: "You study the planet: weather, oceans, land, and how to look after it.",
      learn: "Geography, climate, forests, water, and simple data about Earth.",
      need: "Liking outdoors or maps, and caring about the planet.",
      future: "Environment helper, geography, ocean science, or city planning later."
    },
    {
      id: "nurse", code: "NUR", name: "Nursing",
      tags: ["help", "nature", "hands"],
      blurb: "You learn to look after sick people, every day, in a team.",
      learn: "The body, care skills, and how a hospital ward works.",
      need: "Kindness, strong stomach, and staying calm when someone is scared.",
      future: "Nurse. A real job path. It is hard work, and it helps people."
    },
    {
      id: "dent", code: "DNT", name: "Dentistry",
      tags: ["help", "hands", "logic"],
      blurb: "You learn to look after teeth and mouths.",
      learn: "The mouth, careful hand skills, and how to keep teeth healthy.",
      need: "Steady hands, and not minding working close to people.",
      future: "Dentist. A long training path."
    },
    {
      id: "vet", code: "VET", name: "Veterinary",
      tags: ["help", "nature", "hands"],
      blurb: "You learn to look after animals that are sick or hurt.",
      learn: "Animal bodies, clinics, and farm or pet care.",
      need: "Love of animals, science, and being okay when animals are in pain.",
      future: "Vet. Competitive, and a long path."
    },
    {
      id: "pharm", code: "PHA", name: "Pharmacy",
      tags: ["help", "logic", "nature"],
      blurb: "You learn how medicines work, and how to give them safely.",
      learn: "Chemistry of drugs, the body, and careful checking.",
      need: "Care with details. A small mistake with medicine is a big deal.",
      future: "Pharmacist in a shop or hospital."
    },
    {
      id: "music", code: "MUS", name: "Music",
      tags: ["art", "hands", "words"],
      blurb: "You practise an instrument or voice, and learn how music is built.",
      learn: "Playing, listening, and sometimes writing music.",
      need: "Daily practice. Talent helps; hours matter more.",
      future: "Performer, teacher, or work in studios and shows."
    },
    {
      id: "sport", code: "SPT", name: "Sport & Movement",
      tags: ["hands", "help", "nature"],
      blurb: "You study how bodies move, train, and stay strong.",
      learn: "Exercise science, coaching ideas, and how muscles work.",
      need: "Liking sport or movement, and some science.",
      future: "Coach, physio later, PE teacher, or sports science."
    },
    {
      id: "social", code: "SWK", name: "Social Work",
      tags: ["help", "words", "business"],
      blurb: "You help families and communities when life is hard.",
      learn: "Listening, the law around care, and how to support people safely.",
      need: "Patience, and a strong heart. Some stories are heavy.",
      future: "Social worker, youth worker, or community helper."
    }
  ];

  var EXTRA_FACTS = {
    lang: {
      mean: "Languages, books, and how to say ideas clearly.",
      unlike: "Not History (the past as evidence) and not World & Public Policy (countries and power). This one is words first.",
      now: "Read for fun. Try a new language app. Write a short story.",
      watch: "Lots of reading. You do not need to be perfect now."
    },
    hist: {
      mean: "What happened in the past, and the ideas people believed.",
      unlike: "Not Languages (stories and grammar) and not Law (today’s rulebook).",
      now: "Ask “how do we know?” when you watch a history video.",
      watch: "Essays. Evidence matters more than a cool opinion."
    },
    chem: {
      mean: "What stuff is made of, and how it changes in a lab.",
      unlike: "Not Life Sciences (living things first) and not Engineering (building machines).",
      now: "School chemistry club, or cook and notice what heat does.",
      watch: "Lab rules. Some math."
    },
    env: {
      mean: "The planet: land, water, weather, and how to look after it.",
      unlike: "Not Life Sciences (cells and animals up close) and not Architecture (designing buildings).",
      now: "A walk with a map. Recycle club. Watch one climate news story.",
      watch: "Mix of science and data. Outdoor work and desk work."
    },
    nurse: {
      mean: "Looking after sick people, every day, in a team.",
      unlike: "Not Medicine (doctor path) and not Public Health (whole cities). Nursing is hands-on care.",
      now: "First aid. Volunteer if your age is allowed.",
      watch: "Shifts, tired feet, and real feelings. Also a clear job path."
    },
    dent: {
      mean: "Teeth and mouths.",
      unlike: "Not Medicine (the whole body) and not Nursing (ward care).",
      now: "Look after your own teeth. Science and careful craft (model making) both help.",
      watch: "Long training. Steady hands."
    },
    vet: {
      mean: "Sick and hurt animals.",
      unlike: "Not Life Sciences (labs) and not Medicine (humans).",
      now: "Animal care if you can do it kindly and safely. Biology.",
      watch: "Very competitive. Sad days as well as happy ones."
    },
    pharm: {
      mean: "How medicines work, and how to give them safely.",
      unlike: "Not Chemistry (all materials) and not Medicine (diagnosing people).",
      now: "Chemistry. Read a medicine label with a parent.",
      watch: "Details matter. A small mix-up is dangerous."
    },
    music: {
      mean: "Playing, singing, or writing music as the main subject.",
      unlike: "Not Art, Design & Media (pictures and film first). Music needs daily practice.",
      now: "Practise 15 minutes. Join choir or band.",
      watch: "Auditions and portfolios. Hours beat talent-only."
    },
    sport: {
      mean: "How bodies move, train, and stay strong.",
      unlike: "Not Medicine and not Nursing. This is movement and training science.",
      now: "A school team, or track how you train for one month.",
      watch: "You still need science. Liking sport is not the whole subject."
    },
    social: {
      mean: "Helping families and communities when life is hard.",
      unlike: "Not Psychology (the mind in a lab) and not Education (classrooms).",
      now: "Listen well. A kind club. Ask a counsellor what the job is really like.",
      watch: "Heavy stories. You need backup from adults."
    }
  };

  function unisFor(subjectId) {
    var out = [];
    var map = global.MejorCatalog && global.MejorCatalog.stationOf;
    Object.keys(F).forEach(function (uniId) {
      var tagged = [];
      var named = [];
      F[uniId].forEach(function (fac) {
        if (fac.subjects.indexOf(subjectId) === -1) return;
        tagged.push(fac.name);
        var hit = (fac.majors || []).some(function (mj) {
          return map && map[mj.name] === subjectId;
        });
        if (hit) named.push(fac.name);
      });
      var label = named[0] || tagged[0];
      if (label) out.push({ id: uniId, faculty: label });
    });
    return out;
  }

  function apply(majors) {
    EXTRA.forEach(function (m) {
      if (!majors.some(function (x) { return x.id === m.id; })) majors.push(m);
    });
    majors.forEach(function (m) {
      m.unis = unisFor(m.id);
    });
    return majors;
  }

  global.MejorCatalog = {
    faculties: F,
    extraMajors: EXTRA,
    extraFacts: EXTRA_FACTS,
    unisFor: unisFor,
    apply: apply,
    updated: "Aug 2026"
  };
})(typeof window !== "undefined" ? window : this);
