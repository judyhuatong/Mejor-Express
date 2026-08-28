# Mejor express

**Probe ③** · A first look at university majors — not a ranking or career verdict.

## Who it is for

Mejor express is for 14–16 year-olds who already know what they like — but still feel stuck on which uni major to pick. Take Nova’s academic MBTI-style quiz: it matches your interests and strengths to 139 real major names at 15 Top-100 overseas unis that Chinese students often choose. You get a printable ticket, no sign-up, English or Chinese — just a first look, not a ranking or “this is your only path.”

## 中文

Mejor express 给 14–16 岁的你：兴趣挺清楚，就是不知道大学该选什么专业。做 Nova 的学业向 MBTI 小测，它会按你的喜好和强项，帮你对上 15 所 QS 前 100、很多中国留学生会考虑的海外大学里的 139 个官方本科专业名。能打印一张小票，不用注册，中英都能用——只是先看看方向，不是排名，也不是替你定终身。

**Live data (Aug 2026):** 4 lines · 25 stations · 15 universities · 139 official UG titles · 200 quiz items
## 怎么打开

- 本机（推荐，有后端）：`pip install -r backend/requirements.txt` 然后 `python backend/server.py` → http://127.0.0.1:3000 ，API 文档：http://127.0.0.1:3000/api/docs
- 本机（仅网页）：`python -m http.server 3000`，或直接打开 [`index.html`](index.html)。
- 独立网站：把整仓部署到 **Render**（仓库里有 `render.yaml`）或 **Railway**（`Procfile`），或任意 VPS。启动命令：`python backend/server.py`。平台会自动设置 `PORT` 环境变量。GitHub Pages **不能**跑 Python 后端。

## API（给独立网站 / 小程序 / 别的页面用）

启动 `python backend/server.py` 后，浏览器打开 **http://127.0.0.1:3000/api/docs** 看完整文档。

| 路由 | 作用 |
|---|---|
| `GET /api/v1/stats` | 4 线、25 站、15 校、139 官方专业名、200 题库 |
| `GET /api/v1/lines` | 四条线与站点 id |
| `GET /api/v1/universities` | 15 校 id 列表 |
| `GET /api/v1/universities/{id}` | 某校全部学院 + 官方专业名 |
| `GET /api/v1/majors` | 139 专业 slug 与别名 |
| `GET /api/v1/majors/{slug}` | 某一专业的 search 卡片 |
| `GET /api/v1/search?q=` | 模糊搜索专业名 |
| `GET /api/v1/quiz/draw?n=20` | 从 200 题里抽 n 道（默认 20） |

旧路由 `/api/stats` 等仍可用。没有登录、没有数据库；用户点的兴趣仍在浏览器本地。

## 怎么使用

1. 首页按 **Start with Nova / 从 Nova 开始**，或跳过直接看线路图。
2. Nova 会从 200 道学校题库里抽出 20 道（课堂、作业，不是性格），再问喜欢与擅长。
3. 最多点 4 个兴趣。**绿 ≥70%** 较强匹配，**金 40–69%** 部分匹配。
4. 点站点，打开站点车票：先看今年能试什么，再看专业是什么、别和谁搞混、哪些海外大学真的教。
5. 点校名看简介。变淡 = 这份名单里官方不开设。
6. 右上角可切换中文 / English。兴趣只保存在这台电脑的浏览器里。

四条线路：

- **Logic** 逻辑：数学、代码、机器
- **Care** 关怀：健康、人、教学
- **World** 世界：金钱、法律、社会
- **Make** 创造：建筑、艺术、设计

匹配公式：

```
match% = round(100 × 命中数 / 你选中的兴趣个数)
```

举例：你点了「逻辑与数字」和「数据与规律」。计算机科学两条都有 → 100%，绿色。

## 我遇到的一个 bug，以及我怎么解决的

首页想把所有内容塞进一屏时，车票被压得很小，标题几乎看不清。

**修法：** 车票保持原来的字号和内边距。右侧的说明、词汇和步骤放到车票旁边。每个说明框只包住文字（`align-items: start`），不再被拉成和最长那一张一样高，底下留空白。

这是界面问题，不是匹配算错。

## 文件

| 文件 | 作用 |
|---|---|
| `index.html` | 首页车票 |
| `explorer.html` | Nova + 线路图 |
| `search.html` | 搜索专业 |
| `schools.html` | 浏览 15 所大学 |
| `method.html` | 匹配公式、学校来源、隐私 |
| `i18n.js` | 中英文文案 |
| `universities.js` | 15 校简介 |
| `backend/server.py` | FastAPI 后端：网页 + JSON API（`/api/docs`） |
| `backend/catalog.py` | 启动时加载目录（139 专业、15 校、200 题） |
| `backend/requirements.txt` | `pip install -r backend/requirements.txt` |
| `catalog.js` | 15 所大学的全部官方学院（2026年8月） |
| `favicon.svg` | 图标 |
| `产品定义单.md` | 第一周定义表 |
| `讲解稿.md` | 60 秒 / 3 分钟 |
| `群提交模板.md` | 第四周群提交 |

学校：QS 2026 Top 100 中、很多中国学生会去的 15 所海外大学。学院名来自各校官方。不编造学院。
