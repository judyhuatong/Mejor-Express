/* 15 overseas universities popular with Chinese international students.
   QS World University Rankings 2027 (published 18 June 2026, checked 15 Nov 2026).
   14 are in the Top 100. Southampton is 111 and stays because of its student community.
   Official faculty and major names were last checked Aug 2026. Exact whole-campus
   Chinese-student percentages are not restated here: older “50% / 60%” lines were
   not a current count of every student. */
(function (global) {
  global.MejorUniversities = {
    ucl: { short: "UCL", name: "University College London", country: "UK", qs: 8, evidence: "Often the UK school with the most students from China (HESA)", intro: "In central London. Known for medicine, architecture (The Bartlett), and education (IOE). A very common UK pick for Chinese students." },
    melbourne: { short: "Melbourne", name: "University of Melbourne", country: "Australia", qs: 22, evidence: "Group of Eight, where most new Chinese students in Australia enrol", intro: "A Group of Eight university in Australia, strong across many subjects. Often on the shortlist for study in Australia." },
    unsw: { short: "UNSW", name: "UNSW Sydney", country: "Australia", qs: 19, evidence: "Group of Eight", intro: "In Sydney. Especially known for engineering and business. Also in Australia’s Group of Eight." },
    sydney: { short: "Sydney", name: "University of Sydney", country: "Australia", qs: 28, evidence: "Group of Eight", intro: "One of Australia’s oldest universities. Strong in medicine, law, and arts, with a city campus in Sydney." },
    toronto: { short: "Toronto", name: "University of Toronto", country: "Canada", qs: 32, evidence: "Often named a top Canadian choice for Chinese students", intro: "Canada’s largest research university, downtown Toronto. Often named a top Canadian choice for Chinese students." },
    kcl: { short: "King’s", name: "King’s College London", country: "UK", qs: 37, evidence: "One of the UK schools with the most students from China (HESA)", intro: "In London, by the Thames. Known for health, law, war studies, and humanities, with hospitals nearby." },
    edinburgh: { short: "Edinburgh", name: "University of Edinburgh", country: "UK", qs: 35, evidence: "One of the UK schools with the most students from China (HESA)", intro: "In Scotland’s capital. Historic, with well-known medicine, informatics, and arts." },
    manchester: { short: "Manchester", name: "University of Manchester", country: "UK", qs: 40, evidence: "A large community of students from mainland China (HESA)", intro: "A large campus in northern England. Big Chinese-student community; strong in science and engineering." },
    columbia: { short: "Columbia", name: "Columbia University", country: "USA", qs: 43, evidence: "A large Chinese-student community in New York (SEVIS)", intro: "An Ivy League school in New York City. Competitive; known for journalism, world affairs, and medicine." },
    ubc: { short: "UBC", name: "University of British Columbia", country: "Canada", qs: 45, evidence: "Often named a top Canadian choice for Chinese students", intro: "In Vancouver, by mountains and ocean. Strong in science, and a frequent Canadian destination for Chinese students." },
    nyu: { short: "NYU", name: "New York University", country: "USA", qs: 58, evidence: "Highest Chinese-student share among the US schools in this set", intro: "Based in New York City. Known for arts (Tisch) and business (Stern). In this set, it has the highest share of Chinese students among the US schools." },
    uiuc: { short: "UIUC", name: "University of Illinois Urbana-Champaign", country: "USA", qs: 74, evidence: "A large international-student campus in the US (DHS)", intro: "A large US public campus in Illinois. Famous for engineering and computer science. It has no medical school in this set." },
    glasgow: { short: "Glasgow", name: "University of Glasgow", country: "UK", qs: 80, evidence: "One of the UK schools with the most students from China (HESA)", intro: "A historic Scottish university. Strong in medicine, law, and arts, and among the UK schools with many Chinese students." },
    southampton: { short: "Southampton", name: "University of Southampton", country: "UK", qs: 111, evidence: "QS 2027 rank 111, outside the Top 100. Stays because many students from mainland China attend (HESA)", intro: "On England’s south coast. Known for engineering and ocean science. QS 2027 rank is 111, so it is no longer in the Top 100. It stays in this set because many students from mainland China attend." },
    sheffield: { short: "Sheffield", name: "University of Sheffield", country: "UK", qs: 82, evidence: "A large community of students from China (HESA)", intro: "In northern England. Known for engineering, architecture, and journalism, with a high share of Chinese students." }
  };
})(typeof window !== "undefined" ? window : this);
