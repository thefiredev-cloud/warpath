# ⚔️ Warpath

<div align="center">

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/warpath/ci.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/thefiredev/warpath)
[![Version](https://img.shields.io/badge/version-0.9.0-blue?style=for-the-badge)](https://github.com/thefiredev/warpath/releases)
[![Coverage](https://img.shields.io/badge/coverage-94%25-brightgreen?style=for-the-badge)](https://github.com/thefiredev/warpath)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Discord](https://img.shields.io/badge/Discord-Join%20Server-7289DA?style=for-the-badge&logo=discord)](https://discord.gg/thefiredev)

**Reputation Warfare Engine**

*Own your reputation. Destroy threats.*

[Website](https://thefiredev.com/warpath) · [Documentation](https://docs.thefiredev.com/warpath) · [Discord](https://discord.gg/thefiredev) · [Report Bug](https://github.com/thefiredev/warpath/issues)

</div>

---

## What Is Warpath?

Warpath is an autonomous reputation defense system. It monitors every mention of your business across Google, Yelp, Reddit, X (Twitter), TikTok, and Nextdoor — 24/7, at machine speed. The moment a threat is detected, Warpath deploys countermeasures: crafted public responses, content burial campaigns, automated legal alerts, and counter-narrative injection.

**You don't manage your reputation. Warpath wages war for it.**

---

## Key Value Props

| | |
|---|---|
| 🔍 **Total Surveillance** | Every mention, every platform, every minute. Nothing slips through. |
| ⚡ **Instant Response** | Threat detected in < 60 seconds. Countermeasures deployed automatically. |
| ⚖️ **Legal Escalation** | Defamation patterns trigger attorney-ready incident reports. |
| 📉 **Content Burial** | Positive content campaigns suppress damaging results in SERPs. |
| 🤖 **Autonomous Operation** | Set thresholds once. Warpath handles the rest. |

---

## Features

### 🕵️ Monitoring Layer
- **Omnichannel Coverage** — Google Business, Yelp, Reddit, X, TikTok, Nextdoor, BBB, Trustpilot, G2
- **Sentiment Analysis** — Fine-tuned models classify tone, severity, and threat level (0–100)
- **Velocity Alerts** — Detects coordinated attack patterns (review bombing, brigading)
- **Competitor Intelligence** — Monitor what's being said about you vs. competitors
- **Historical Baseline** — Establishes your normal reputation fingerprint to detect anomalies

### ⚔️ Countermeasure Engine
- **Auto-Response** — Platform-native responses in your brand voice, deployed in < 60s
- **Counter-Narrative** — Generates positive content to flood negative signal
- **Content Burial** — SEO-targeted asset publishing to suppress damaging URLs
- **Legal Alert** — Identifies defamatory content, generates evidence packets for counsel
- **Escalation Ladder** — Tiered response based on threat severity and velocity

### 📊 Intelligence Dashboard
- Real-time threat map across all platforms
- Sentiment trend lines (7d, 30d, 90d)
- Response effectiveness tracking
- Competitor reputation benchmarking
- ROI report: threats neutralized, estimated damage prevented

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        WARPATH ENGINE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   INGESTION LAYER                                               │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────────┐  │
│   │  Google  │ │   Yelp   │ │  Reddit  │ │  X / TikTok /    │  │
│   │ Business │ │   API    │ │   API    │ │  Nextdoor / BBB  │  │
│   └────┬─────┘ └────┬─────┘ └────┬─────┘ └────────┬─────────┘  │
│        └────────────┴────────────┴─────────────────┘            │
│                              │                                  │
│                    ┌─────────▼──────────┐                       │
│                    │   Event Bus (Redis) │                       │
│                    └─────────┬──────────┘                       │
│                              │                                  │
│   ANALYSIS LAYER             │                                  │
│   ┌───────────────────────── ▼──────────────────────────────┐   │
│   │  Sentiment Model  │  Threat Scorer  │  Pattern Detector  │  │
│   └───────────────────────────────────────────────────────┬─┘   │
│                                                           │     │
│   RESPONSE LAYER                                          │     │
│   ┌────────────────────────────────────────────────────── ▼──┐  │
│   │  Response Generator  │  Content Burial  │  Legal Alert   │  │
│   └────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ORCHESTRATION                                                 │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │              Agent Scheduler (n8n + BullMQ)              │  │
│   └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Tech Stack

[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Redis](https://img.shields.io/badge/Redis-7-DC382D?style=flat-square&logo=redis)](https://redis.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)](https://postgresql.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker)](https://docker.com/)
[![BullMQ](https://img.shields.io/badge/BullMQ-Queue-red?style=flat-square)](https://bullmq.io/)

---

## Quick Start

### Prerequisites
- Node.js 20+
- Docker + Docker Compose
- API keys: OpenAI, Yelp Fusion, Reddit, X (Twitter) v2

### Installation

```bash
git clone https://github.com/thefiredev/warpath.git
cd warpath
cp .env.example .env
# Fill in your API keys in .env
npm install
docker-compose up -d  # Starts Redis + PostgreSQL
npm run migrate
npm run dev
```

### Configure Your First Client

```typescript
import { Warpath } from './src';

const engine = new Warpath({
  clientId: 'your-client-id',
  brandName: 'Acme Plumbing',
  keywords: ['Acme Plumbing', 'acmeplumbing', '@acmeplumbing'],
  threatThreshold: 65,         // 0-100: trigger countermeasures above this score
  autoResponse: true,
  legalAlerts: {
    enabled: true,
    email: 'attorney@yourfirm.com'
  }
});

await engine.start();
// Warpath is now watching. Nothing gets through.
```

---

## API Reference

### `GET /api/v1/mentions`
Returns all mentions for a client within a date range.

```json
{
  "clientId": "string",
  "from": "ISO8601",
  "to": "ISO8601",
  "platform": "google|yelp|reddit|x|tiktok|nextdoor|all"
}
```

### `GET /api/v1/threats`
Returns active threats and their countermeasure status.

### `POST /api/v1/countermeasures/deploy`
Manually trigger a countermeasure for a specific threat.

```json
{
  "threatId": "string",
  "action": "respond|bury|legal|counter-narrative",
  "override": true
}
```

### `GET /api/v1/dashboard/:clientId`
Returns full reputation dashboard data.

> Full API docs: [docs.thefiredev.com/warpath/api](https://docs.thefiredev.com/warpath/api)

---

## Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/warpath
REDIS_URL=redis://localhost:6379

# Platform APIs
YELP_API_KEY=
REDDIT_CLIENT_ID=
REDDIT_CLIENT_SECRET=
X_BEARER_TOKEN=
GOOGLE_PLACES_API_KEY=

# AI
OPENAI_API_KEY=
ANTHROPIC_API_KEY=

# Alerts
SENDGRID_API_KEY=
LEGAL_ALERT_EMAIL=
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Security

See [SECURITY.md](SECURITY.md). Responsible disclosure: security@thefiredev.com

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*Agent-as-a-Service. Your business, on autopilot.*

</div>
