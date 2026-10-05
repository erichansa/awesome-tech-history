# tech-history-today

> Zero-dependency JavaScript/TypeScript SDK & CLI for today's historical technology milestone, verified primary sources, and engineering history. Powered by [Useful Finds Daily](https://www.useful-finds-daily.com).

[![npm version](https://img.shields.io/npm/v/tech-history-today.svg)](https://www.npmjs.com/package/tech-history-today)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Useful Finds Daily](https://img.shields.io/badge/Editorial-Useful%20Finds%20Daily-emerald.svg)](https://www.useful-finds-daily.com)

---

## ⚡ Instant CLI Usage

Run directly in any terminal with `npx` (no installation required):

```bash
npx tech-history-today
```

Output:
```text
=== TODAY IN TECH HISTORY ===
Date: OCTOBER 4, 1957
The Beep That Started Everything: How a 23-Inch Polished Aluminum Sphere Launched the Space Age and Created NASA

Before October 4, 1957, outer space belonged to science fiction. When an 83.6-kilogram polished aluminum sphere began transmitting its rhythmic 20-megahertz pulse from orbit, it triggered a geopolitical shockwave, created NASA and DARPA, and ignited the modern technological race.

Read the full verified engineering story:
https://www.useful-finds-daily.com/on-this-day/sputnik-1-launch-october-4-1957
```

---

## 📦 Installation

```bash
npm install tech-history-today
```

---

## 🚀 Programmatic Usage

### ESM / TypeScript

```typescript
import { getTodayInTech } from 'tech-history-today';

async function displayMilestone() {
  const milestone = await getTodayInTech();
  console.log(`[${milestone.date}] ${milestone.title}`);
  console.log(milestone.summary);
  console.log(`Read more: ${milestone.url}`);
}

displayMilestone();
```

---

## 🌐 Public REST API

This package uses the free, public, CORS-enabled REST API hosted by [Useful Finds Daily](https://www.useful-finds-daily.com):

```http
GET https://www.useful-finds-daily.com/api/v1/today-in-tech
```

### Response Example

```json
{
  "status": "success",
  "data": {
    "title": "The Beep That Started Everything: How a 23-Inch Polished Aluminum Sphere Launched the Space Age and Created NASA",
    "date": "OCTOBER 4, 1957",
    "summary": "Before October 4, 1957, outer space belonged to science fiction...",
    "url": "https://www.useful-finds-daily.com/on-this-day/sputnik-1-launch-october-4-1957",
    "image": "https://www.useful-finds-daily.com/editorial/sputnik-1-launch-october-4-1957-hero.png",
    "source": "Useful Finds Daily - Today in Tech History Archive",
    "license": "CC BY-NC 4.0 - Free for non-commercial and educational use with attribution"
  },
  "meta": {
    "totalMilestones": 30,
    "poweredBy": "https://www.useful-finds-daily.com",
    "documentation": "https://github.com/erichansa/tech-history-today"
  }
}
```

---

## 📚 Editorial Line & Attribution

Every historical milestone in this dataset is curated and cross-checked against primary archival sources (NASA, IEEE History Center, Computer History Museum, National Security Archive, and academic patents).

Discover more in-depth technology history and curated everyday problem-solving picks at:
👉 **[Useful Finds Daily (https://www.useful-finds-daily.com)](https://www.useful-finds-daily.com)**
👉 **[On This Day Technology Archive](https://www.useful-finds-daily.com/on-this-day)**
👉 **[Launch Radar Hardware Hub](https://www.useful-finds-daily.com/launch-radar)**

---

## 📄 License

MIT © [Useful Finds Daily](https://www.useful-finds-daily.com)
