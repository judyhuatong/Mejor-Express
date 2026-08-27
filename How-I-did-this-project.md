# How I did this project · Mejor express

**Probe:** ③  
**Product:** Mejor express（专业探索器）  
**Date:** 27 Aug 2026  
**GitHub:** https://github.com/judyhuatong/Mejor-Express

This is a review of **how** I made the product, not a second user manual.

---

## 1. What I was trying to make

A first look at **university majors** for a student about **16** (age 14–18).

They already know what they like — drawing, numbers, helping people. They cannot yet name a major. At night someone asks: “What will you study?” They freeze.

I wanted them to leave with:

- 2–3 major names worth a closer look
- a plain reason those names lit up
- one small thing to try this year
- schools in this set that **actually teach** those names

I did **not** want a career test, a “best university” list, or a mainland China gaokao tool.

**One sentence:** map “what I like” onto “what you study at university.”

---

## 2. How I worked (order)

I did not start by drawing a fancy map. I started with a **product definition**: who, scene, pain, value. That is `产品定义单.md`.

Then I built in layers:

| Stage | What I made | Why that order |
|---|---|---|
| 1. Name and promise | Mejor express; “Mejor, your major explorer.” | If the name is unclear, the map will not save it. |
| 2. Match you can explain | `match% = round(100 × hits / likes you picked)` | A 16-year-old must be able to say the formula in one breath. |
| 3. Four lines | Logic, Care, World, Make | Too many categories feel like a ranking. Four lines feel like a ticket. |
| 4. Honest schools | 15 overseas universities many Chinese students actually attend | Faded name = not taught here. That is data, not a broken page. |
| 5. Official titles | 25 map stations, then 139 official UG names | The diamond is a **station**. The faculty list is the **real title**. I do not invent names. |
| 6. Search | Misspellings still find a title | Some students already have a name in their head. |
| 7. Nova | 20 school questions from a bank of 200 | First versions felt like a personality test. I changed them to class and homework. |
| 8. Simple home | Title + one line + three buttons | The old home was a full ticket plus glossary. Too much for a first screen. |
| 9. Git | Commit and push to GitHub | So the class copy and the computer copy are the same. |

I used a local preview (`localhost:3000`) to click like a student, then put the files on GitHub.

---

## 3. Design choices I can defend

**Ticket, not exam.** Green and gold are fit to *your likes*, not a score of how good you are.

**Stations vs majors.**  
- **25 stations** = simple diamonds on the map  
- **139 official majors** = names copied from university pages  
If I had put 139 diamonds on the map, a 16-year-old would drown.

**Faded schools.** UIUC has no medical school in this set. Fading the name is more honest than hiding the school.

**Nova is optional.** Skip to the line map. Turn Nova off. The map still works.

**Chinese and English.** Same product. Official major titles stay in official English. Kid lines can be Chinese.

**No login.** Likes live in this browser only (`localStorage`). Clearing site data clears the ticket.

---

## 4. A problem I hit, and how I fixed it

**Old bug (layout):** I tried to squeeze the whole home into one screen. The ticket shrank. The title was hard to read.

**Fix:** Keep the useful type size. Put extra talk beside the ticket — later I went further: the home is only **Mejor express** and **Mejor, your major explorer**, plus three ways in. The long method sits on `method.html` and on the map.

**Data bug:** Copy still said “14 stations” or “21 subjects” after the map had **25**. A student who counts diamonds would stop trusting the page.

**Fix:** Count stations from the live line list, then change English, Chinese, and the HTML fallback in the same change.

**Nova bug:** The first quiz asked about Saturday and friends. That is personality. This product is majors.

**Fix:** A bank of **200** academic A/B items. Each visit draws **20** (class, homework, labs). Then likes vs strengths. The four-letter code is a **class working style**, not an official MBTI test.

---

## 5. What I am proud of

I can explain the percentage without a slide:

> You picked some likes. This major covers how many of them? That fraction, times 100, rounded.

I can explain a faded school without blaming the website.

I kept official names official. I skipped most Year Abroad twins so the list stays readable.

---

## 6. Honest limits (say these if a teacher asks)

- Not every course on every prospectus (UCL has 400+ titles).
- Not joint honours unless they were asked for.
- Not a ranking of which school is best *for you*. QS is world rank, not personal fit.
- Not mainland universities.
- Not a job title and not a forever plan.
- Nova’s 20 questions are a sample from 200. Retake can draw a different 20.
- `localhost:3000` is only a preview on this computer. GitHub is the shared copy.

---

## 7. What I would do next (if I had more time)

- GitHub Pages so the class can open a public link without downloading the folder.
- A slightly shorter Nova path for people who get tired at question 12, still using the same bank.
- One more check that every new official title has a search card and three clear examples.

I would **not** add more universities just to look bigger. Honesty of the 15 matters more.

---

## 8. Files that show the work

| File | What it proves |
|---|---|
| `产品定义单.md` | I defined user, scene, pain, value first |
| `index.html` | Simple home: name + one line |
| `explorer.html` | Lines, likes, Nova, station ticket |
| `quiz-bank.js` | 200 school questions, 20 per visit |
| `catalog.js` + `catalog-majors.js` | 15 schools, official faculties and titles |
| `search.html` | Look up a name even if you misspell it |
| `method.html` | Formula, sources, privacy |
| `i18n.js` | Chinese / English |

---

# 中文版（上课可念）

我是探头三。产品叫 Mejor express，也叫专业探索器。

我先写清：给谁用、在什么时候用、痛点是什么、用完带走什么。用户是大概十六岁的高中生。他们知道喜欢什么，但说不出大学专业名字。价值是带走两三个名字，知道为什么亮，知道今年可以试什么。

然后我一层一层做：先能讲清的百分比，再做四条线，再放 15 所很多中国学生会去的海外大学。地图上是 **25 个站点**。站点下面是 **139 个官方专业名**。我没有自己编专业名字。学校名字变淡，是这份名单里官方不开，不是网页坏了。

Nova 一开始有点像性格测试。我改成学校题：题库 **200** 道，每次抽 **20** 道，问的是上课和作业。可以跳过，自己点喜欢的。最多四个。绿色是比较合适，金色是有一点合适。

首页曾经太满，车票被压小。我后来把首页收成：Mejor express，一句 Mejor, your major explorer，再加三个入口。长说明放在「这是怎么做的」和线路图里。

最后把代码推进 GitHub。localhost:3000 只是自己电脑上的预览。

这不是最好大学名单，也不是内地高校，也不是终生决定。先看一看，再去问家长或老师。
