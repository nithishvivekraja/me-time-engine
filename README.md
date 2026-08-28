# ME-TIME™ — The Ambient Post-Order Experience Engine

[![Live Showcase](https://img.shields.io/badge/Live_Hub-Active_v17.0-0E7C7B?style=for-the-badge&logo=google-chrome&logoColor=white)](https://nithishvivekraja.github.io/me-time-engine/)
[![PRD Version](https://img.shields.io/badge/PRD-v2.0_Enterprise-38BDF8?style=for-the-badge&logo=gitbook&logoColor=white)](docs/PRD.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-FCD34D?style=for-the-badge)](LICENSE)

> **Brand Slogan:** *"Turn Dead Wait into Prime Time"*  
> **Brand Motto:** *"Your Time, Reclaimed. Your Food, On Time."*  
> **Ecosystem Classification:** Embedded Ambient Wait-Time Management SDK & Localized Last-Mile Handoff Layer

---

## 1. Executive Summary & Core Value Proposition

When a customer places an order on food delivery platforms (Swiggy, Zomato, DoorDash, Uber Eats), they enter an unmanaged **20 to 45-minute waiting window**. Platforms treat this window as a passive, anxiety-inducing vector map with a fluctuating estimated time of arrival (ETA).

**ME-TIME™** transforms this dead waiting window into an intentional, screen-off audio leisure experience ($\text{Time Budget} = \text{Live ETA} - \text{Current Time}$). Simultaneously, it provides delivery partners with a localized fulfillment terminal that auto-translates checkout notes, landmark photos, and safety alerts in real time to eliminate doorstep friction.

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 THE ME-TIME™ DUAL VALUE BET                            │
├───────────────────────────────────────────┬────────────────────────────────────────────┤
│ 👤 CONSUMER VALUE (SCREEN-OFF CALM)       │ 🛵 DRIVER VALUE (FRICTIONLESS HANDOFF)     │
├───────────────────────────────────────────┼────────────────────────────────────────────┤
│ • 1-Tap Time-Budgeted Audio Streaming     │ • Multilingual Translation (Ta, Hi, En)    │
│ • Dynamic Delay Extension (+10m)          │ • Customer Entrance & Landmark Photos      │
│ • Queue-Tail Ambient Fallback Bridge      │ • Contextual Safety Badges (Pet/Gate Alert)│
│ • Proximity Audio Ducking at <50m (10%)   │ • Auto/Day/Night High-Contrast Ergonomics  │
│ • 1-Tap Perceived Wait Satisfaction (PWS) │ • Itemized Real-Time Payout Receipt        │
└───────────────────────────────────────────┴────────────────────────────────────────────┘
```

---

## 2. Telemetry & Business Impact

| Metric Indicator | Historical Baseline | ME-TIME Target Goal | Measured / Simulated Impact |
| :--- | :---: | :---: | :---: |
| **Perceived Wait Satisfaction (PWS)** | 32.0% Positive | $\ge 75.0\%$ Positive | **76.4% Positive (+44.4%)** |
| **Manual Tracker Refreshes / Order** | 4.8 Refreshes | $\le 2.0$ Refreshes | **1.8 / Order (-62.5%)** |
| **In-Wait Driver Inbound Calls** | 0.38 Calls | $\le 0.15$ Calls | **0.12 / Order (-68.4%)** |
| **Mid-Wait App Abandonment** | 14.2% Rate | $\le 8.0\%$ Rate | **6.1% (-57.0%)** |
| **Post-Order NPS Uplift** | 31.0 Score | $\ge 45.0$ Score | **48.2 (+17.2 pts)** |

---

## 3. Key Feature Specifications

### 📱 Customer Experience Hub
1. **Dynamic Time-Budgeting:** Computes exact countdown windows and surfaces time-matched audio (Podcasts, Lo-Fi Music, News Briefs, Mini-Games).
2. **Screen-Off Background Audio:** Uses native `MediaSession` APIs to stream audio when the screen is locked.
3. **Dynamic Delay Auto-Append:** On $+10\text{m}$ traffic slippage, automatically adds a companion bonus track to prevent user anxiety.
4. **Proximity Audio Ducking (<50m):** Attenuates media volume from 100% to 10% over 600ms, triggering the 3D Doorstep Knock HUD and haptic pulses.
5. **1-Tap PWS Feedback with Progressive Disclosure:** Captures sentiment (`short_fine` vs `long_frustrating`). Negative scores expand an optional qualitative comment box.

### 🛵 Driver Fulfillment Terminal
1. **1-Tap Language Switcher:** Instant translation of drop instructions into Tamil (`தமிழ்`), Hindi (`हिन्दी`), or English (`EN`).
2. **Contextual Caution Badges:** Visual and translated warnings for *Beware of Dog 🐕*, *Gate Drop 📦*, and *Silent Drop 🤫*.
3. **High-Contrast Sunlight Ergonomics:** Forced daylight high-contrast mode ($\ge 7:1$) and 1-tap Text-to-Speech (TTS) audio playback of drop notes.
4. **Instant Wallet Settlement:** Itemized earnings receipt (Base Pay + On-Time Bonus + Tip) delivered immediately on order completion.

### 📊 Enterprise Telemetry Dashboard (`ME-TIME_Analytics_Dashboard.jsx`)
* **Multi-Tenant Filter:** Isolate metrics across `Swiggy India`, `RideCo`, or blended views.
* **NLP Theme Clustering:** Categorizes negative customer comments into actionable operational tags (*ETA Drift*, *Gate Navigation*, *Audio Mismatch*).
* **System SLA Tracking:** Monitors p95 recommendation latency ($\le 300\text{ ms}$) and client-side `IndexedDB` pre-cache hit ratios ($\ge 98\%$).

---

## 4. Repository Structure & Documentation Index

```text
me-time-engine/
├── index.html                           # Live Interactive Sandbox, Simulator & Docs Hub
├── README.md                            # Executive Summary & Platform Overview
├── ME-TIME_Analytics_Dashboard.jsx       # Enterprise Telemetry & Analytics Dashboard (React/Recharts)
├── docs/
│   ├── case_study.md                    # Master Case Study (Discovery, Strategy, Telemetry ROI)
│   ├── PRD.md                           # Consolidated Product Requirements Document (v2.0)
│   ├── user_guide.md                    # Platform Operations & End-User Manual
│   ├── openapi.json                     # OpenAPI 3.1 REST Gateway Contracts
│   └── schema.sql                       # PostgreSQL Multi-Tenant Relational DDL
```

---

## 5. Quick Start & Local Development

### Running the Live Interactive Sandbox
No build step or dependencies required. Open `index.html` in any modern web browser or serve locally:

```bash
# Option A: Python HTTP Server
python3 -m http.server 8080

# Option B: Node.js Serve
npx serve .
```

Open `http://localhost:8080` to interact with:
* The **Dual-Screen Live Simulator** (Customer Audio Player + Driver Terminal).
* The **Logistics Event Controls** (Traffic Delays, Proximity Geofencing, Drop Flags).
* The **Embedded Documentation Explorer** (Case Study, PRD, User Guide, OpenAPI, Schema).

---

## 6. Author & Product Architecture

**Nithish** — Product Lead & Systems Architect  
* **Live Sandbox:** [https://nithishvivekraja.github.io/me-time-engine/](https://nithishvivekraja.github.io/me-time-engine/)  
* **Repository:** [https://github.com/nithishvivekraja/me-time-engine](https://github.com/nithishvivekraja/me-time-engine)