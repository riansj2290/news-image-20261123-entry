# news-image-20261123-entry

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/riansj2290/news-image-20261123-entry/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/riansj2290/news-image-20261123-entry/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

**The World in One Page — Monday 23 November 2026.** A single 1024×1024 broadsheet image summing up the whole of Monday 23 November 2026's world news: **40 stories, 7 regions, 16 fields** — 3 hero panels (Jensen Huang reinstated as Nvidia CEO as the shares soar 31% and the Nasdaq jumps 6.5%; the COP31 fallout a day after the collapse, with Guterres venting his "profound frustration"; FIFA confirming the UK as the 2035 Women's World Cup host, the first World Cup in Britain since 1966), 12 numbered panels with a matching numbered world map (Zelenskyy claiming Ukraine's sea drones sank the Merkury at Benghazi, NATO sending AWACS to Poland after the missile incursion, the Dymer toll climbing to 11 with a 7-year-old boy pulled alive, Molly Meldrum's death at 83, Tajikistan starting its ICC exit, Puigdemont free to return after a decade in exile, Brentford's 4–0 rout of 10-man Everton, and more), a UTC timeline of the day, a red-italic dek line under the masthead naming the top three stories, a THE DAY IN NUMBERS strip (+31%, 11, 7, 48, 450, 83), and 25 one-line briefs grouped by region. Every story carries its source and a CONFIRMED / REPORTED tag, a HOW SURE legend explains the tags, and a DATE CHECK box lists the famous stories deliberately left out as older news — the Shenzhen summit and the ICJ Myanmar ruling (Thu 19 Nov), the Kyiv barrage and the AI rout (Fri 20 Nov), Iran's Bahrain strike and the cartel capture (Sat 21 Nov), the COP31 collapse, the Dymer strike and the Benghazi blast (Sun 22 Nov, drawn only as Monday follow-ups).

## How it was built

The broadsheet is drawn by a small Python generator (Pillow, no network) from a verified shortlist of 40 stories, each checked against its first-reported date in Reuters, the BBC, AP, CNN, AFP, FIFA, Arab News, the NYT and AAP. Three heroes carry the day's biggest stories; twelve numbered panels each draw the actual scene of its event — sea drones closing on a corvette in Benghazi port, an AWACS over Poland, rescuers in the Dymer rubble, a 1970s TV studio for Molly Meldrum — and a full-width world map pins all fifteen drawn stories by number. A UTC timeline, a THE DAY IN NUMBERS strip and a DATE CHECK box (older stories deliberately left out, with their real dates) keep the page honest about what belongs to Monday 23 November 2026 and what does not.

## Run it

```sh
node main.ts                            # copies entry.png to /output/entry.png
MAKEFUN_OUTPUT_DIR=./out node main.ts   # …or to a directory of your choice
```

Requires Node 22+. No dependencies.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wrcfqac1&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
