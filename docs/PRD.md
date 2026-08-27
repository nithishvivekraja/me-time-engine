# Product Requirements Document (PRD)

**Title:** ME-TIME™ — Ambient Post-Order Engagement Engine & Multilingual Delivery Terminal[cite: 1]  
**Document Version:** 1.0-Enterprise  
**Status:** Ready for Engineering & Pilot Integration  
**Target Host Platforms:** Swiggy, Zomato, Uber Eats, DoorDash[cite: 1]  

---

## 1. Executive Summary & Problem Definition

### 1.1 Executive Summary
**ME-TIME™** is an ambient post-order experience engine integrated directly into on-demand delivery apps[cite: 1]. When an order is placed, consumers enter an unmanaged wait window of **20 to 45 minutes**[cite: 1]. Existing platforms treat this window as a passive map view[cite: 1]. 

ME-TIME computes the live available time budget ($\text{Time Budget} = \text{Live ETA} - \text{Current Time}$)[cite: 1] and delivers screen-off audio sessions, micro-podcasts, and news digests that wrap up automatically the moment the delivery partner reaches the doorstep[cite: 1]. In parallel, ME-TIME provides delivery partners with a multilingual terminal that translates checkout drop-off instructions and visual building landmarks in real time[cite: 1].

### 1.2 Problem Statement
* **Tracking Fatigue & Anxiety:** Over 81% of food delivery users check their active order tracking screen 2 to 5+ times per order. This behavior is driven by uncertainty over erratic ETA fluctuations rather than the absolute duration.
* **Unproductive Multitasking:** While 94% of users multitask while waiting for food, 58% fall into shallow social media scrolling, and only 3% engage in intentional rest or productive focus.
* **Final-Mile Handoff Friction:** Surprise doorbells disrupting work meetings, barking pets, and language barriers between customers and delivery partners cause failed drops and unnecessary phone calls[cite: 1].

### 1.3 Goals & Success Metrics
| Metric Category | Target KPI | Baseline | Measurement Source |
| :--- | :--- | :--- | :--- |
| **User Anxiety** | $\ge 40\%$ reduction in map refresh frequency per order | 4.8 refreshes/order | Client telemetry logs on `/experience`[cite: 1] |
| **Wait Perception** | $\ge 75\%$ positive Perceived Wait Satisfaction (PWS) score[cite: 1, 2] | 32% positive | 1-tap post-delivery survey (`short_fine`)[cite: 1, 2] |
| **Engagement** | $\ge 35\%$ 1-tap session initiation rate | N/A (New feature) | CTA analytics (`btn-hero-play`, `btn-explore`)[cite: 1] |
| **Fulfillment Friction** | $\ge 30\%$ reduction in driver-to-customer phone calls | 0.38 calls/order | Driver communication gateway logs |
| **System Performance**| $\le 300\text{ ms}$ p95 API response time on 4G networks | N/A | Multi-tenant API gateway telemetry[cite: 1] |

---

## 2. User Personas & User Journeys

### 2.1 Target Personas

┌───────────────────────────┐ ┌───────────────────────────┐ ┌───────────────────────────┐
│  Persona A: The WFH Pro   │ │ Persona B: Evening Unwinder│ │ Persona C: Delivery Rider │
├───────────────────────────┤ ├───────────────────────────┤ ├───────────────────────────┤
│ • Focus: Busy schedule    │ │ • Focus: Relaxation       │ │ • Focus: Fast handoffs    │
│ • Need: News/Tech briefs  │ │ • Need: Music/Tamil hits  │ │ • Need: Native language UI│
│ • Pain: Noisy arrivals    │ │ • Pain: Tracking stress   │ │ • Pain: Hard-to-find gates│
└───────────────────────────┘ └───────────────────────────┘ └───────────────────────────┘


1. **The Work-From-Home Professional (Persona A):**
   * *Profile:* Tech professional ordering lunch between back-to-back virtual meetings[cite: 1].
   * *Needs:* Wants a short tech or finance brief that ends cleanly before food arrival without requiring active screen engagement[cite: 1].
2. **The Evening Relaxer (Persona B):**
   * *Profile:* Consumer ordering dinner after work, listening to music or regional podcasts[cite: 1].
   * *Needs:* Wants a hands-free ambient playlist (Tamil hits, lo-fi beats) that automatically lowers volume at the door[cite: 1].
3. **The Delivery Partner (Persona C):**
   * *Profile:* Two-wheeler gig partner navigating dense urban apartment complexes[cite: 1].
   * *Needs:* Needs clear navigation and customer notes in their native language (Tamil, Hindi, English) along with verified entrance photos[cite: 1].

---

## 3. System Architecture & Ingestion Boundary

ME-TIME runs as a lightweight, read-only client SDK ($\le 150\text{ KB}$ gzipped) integrated into the host platform’s mobile apps and web tracking surfaces.

┌───────────────────────────┐                ┌────────────────────────────┐
│   HOST PLATFORM BACKEND   │                │   CONTENT PARTNER GATEWAY  │
│      (Swiggy/Zomato)      │                │ (Audible, Spotify, Reuters)│
└─────────────┬─────────────┘                └─────────────┬──────────────┘
│ (Order Lifecycle Webhooks)                 │ (Catalog Sync)
▼                                            ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    ME-TIME ENGINE (MULTI-TENANT API)                    │
│    - Time-Budget Matcher  - Dynamic Delay Extender  - Locale Translator │
└────────────────────┬─────────────────────────────┬──────────────────────┘
│                             │
▼                             ▼
┌───────────────────────────┐ ┌───────────────────────────┐
│   CUSTOMER APP SURFACE    │ │   DRIVER APP TERMINAL     │
│ (Ambient Audio + Live ETA)│ │(Multilingual Fulfillment) │
└───────────────────────────┘ └───────────────────────────┘


---

## 4. Functional Requirements & Feature Specifications

### 4.1 Feature 1: Time-Budgeted Ambient Recommendation Engine
* **Description:** Ingests the estimated delivery window and queries content partner catalogs (Audible, Spotify, Bloomberg, local creators) to construct an exact-length audio queue[cite: 1].
* **Business Logic:**
  $$\text{Target Audio Duration} \le \text{Live ETA} - \text{Buffer (2 mins)}$$
* **User Experience:**
  * **1-Tap Instant Play (`btn-hero-play`):** Automatically starts the top-ranked time-budgeted track[cite: 1].
  * **Explore Moods (`btn-explore-glow`):** Expands the dual-axis drawer for category switching (**Podcasts**, **Music**, **Short News**, **Games**)[cite: 1].
  * **Background Streaming:** Media continues playing smoothly when the user locks their device or switches apps using OS-level background audio controls (`AVAudioSession` / `MediaSession`)[cite: 1].

### 4.2 Feature 2: Logistics Slippage & Dynamic Queue Auto-Extension
* **Description:** Manages unexpected delays (e.g., kitchen bottlenecks, road traffic, monsoon showers) without increasing user anxiety[cite: 1].
* **Business Logic:**
  * When an `eta_updated` event introduces a delay $\ge 8\text{ minutes}$, the engine transitions the customer UI state to `DELAY_MODE`[cite: 1].
  * Automatically fetches and appends a companion bonus track to match the extended window (e.g., $+10\text{m}$ bonus brief) without interrupting active playback[cite: 1].
* **User Interface:**
  * Status indicator turns from green to red (`CONGESTED`)[cite: 1].
  * Displays a plain-language delay callout: *"Traffic Delay (+10m): Extended bonus track auto-queued"*[cite: 1].

### 4.3 Feature 3: Proximity Geofencing, Audio Ducking & 3D Knock Handoff
* **Description:** Manages the final-mile transition when the delivery partner reaches the destination geofence[cite: 1].
* **Trigger Condition:** Driver GPS coordinates breach the $<50\text{m}$ radius of the delivery pin[cite: 1].
* **Execution Sequence:**
  1. Active background audio gain node smoothly attenuates (ducks) from 100% to 10% volume over $600\text{ ms}$[cite: 1].
  2. The customer app surfaces the **3D Knocking HUD**[cite: 1].
  3. Fires synchronized acoustic double-knocks and haptic vibration pulses (`navigator.vibrate([100, 50, 120])`)[cite: 1].

### 4.4 Feature 4: Multilingual Delivery Partner Terminal
* **Description:** Provides delivery partners with an on-device language selector and dynamic translation for drop-off notes and navigation[cite: 1].
* **Supported Locales:** Tamil (`ta`), Hindi (`hi`), English (`en`)[cite: 1].
* **UI Components:**
  * **On-Device Language Switcher:** A 1-tap pill bar (`pillLangTa`, `pillLangHi`, `pillLangEn`) located in the header for real-time translation[cite: 1].
  * **Visual Landmark Card:** Shows verified entrance photos and gate landmarks uploaded by the customer[cite: 1].
  * **Contextual Caution Badges:**
    * `Beware of Dog 🐕`: *"எச்சரிக்கை: வாசலில் நாய் உள்ளது! கேட்டில் நிற்கவும்."*[cite: 1]
    * `Gate Drop / Away 📦`: *"தொடர்பற்ற டெலிவரி: செக்யூரிட்டியிடம் ஒப்படைக்கவும்."*[cite: 1]
    * `Do Not Ring Bell 🤫`: *"அமைதியான டெலிவரி: குழந்தை தூங்குகிறது. பெல் அடிக்க வேண்டாம்."*
  * **Instant Payout Summary:** Displays an itemized earnings receipt (Base Pay + On-Time Bonus + Tip) with real-time wallet settlement immediately upon marking an order delivered[cite: 1].

### 4.5 Feature 5: 1-Tap Perceived Wait Satisfaction (PWS) Survey
* **Description:** Captures post-order user sentiment to evaluate wait perception[cite: 1].
* **Options:**
  * ⚡ **"Felt short & entertaining"** (`short_fine`)[cite: 1]
  * ⏳ **"Felt long & frustrating"** (`long_frustrating`)[cite: 1]
* **Constraint:** Idempotent single-write recording via `POST /v1/orders/{orderId}/feedback`[cite: 1].

---

## 5. End-to-End Visual Workflow & Component Markup Matrix

┌─────────────────────────────────────────────────────────────────────────────┐
│                      LIFECYCLE STATE & MARKUP MAPPING                       │
├─────────┬──────────────────────────┬──────────────────────────┬─────────────┤
│ Step    │ Customer Interface       │ Driver Terminal          │ Trigger     │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────┤
│ Step 1  │ [C1] Status Card (28m)   │ [D1] Language Switcher   │ Webhook:    │
│ (0-5m)  │ [C2] Hero "Play Now" CTA │ [D2] Pickup Dispatch Card│ order_create│
│         │                          │ [D3] Preparation SLA     │             │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────┤
│ Step 2  │ [C3] Live Scooter Pin    │ [D4] Localized Turn HUD  │ Telemetry:  │
│ (5-20m) │ [C4] Floating Media Dock │ [D5] Landmark & Photo    │ GPS Polling │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────┤
│ Step 3  │ [C5] Congestion Alert    │ [D6] Reroute Notice      │ Webhook:    │
│ (Delay) │ [C6] Bonus Track Queued  │                          │ eta_update  │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────┤
│ Step 4  │ [C7] 3D Knock HUD        │ [D7] Geofence Arrival    │ Geofence:   │
│ (<50m)  │ [C8] Audio Ducking (10%) │ [D8] Caution Badges      │ <50m Radius │
│         │                          │ [D9] Complete Action     │             │
├─────────┼──────────────────────────┼──────────────────────────┼─────────────┤
│ Step 5  │ [C9] 1-Tap PWS Feedback  │ [D10] Earnings Breakdown │ Webhook:    │
│ (Done)  │                          │ [D11] Wallet Settlement  │ delivered   │
└─────────┴──────────────────────────┴──────────────────────────┴─────────────┘


---

## 6. Non-Functional Requirements (NFRs)

* **Performance & Latency:** The composite experience endpoint (`GET /v1/orders/{orderId}/experience`) must respond within $\le 300\text{ ms}$ at p95 under standard mobile network conditions[cite: 1].
* **Bundle Footprint:** The embedded client SDK must not exceed $\le 150\text{ KB}$ gzipped.
* **Fail-Safe & High Availability:** If ME-TIME services fail, the host application must silently fall back to standard map tracking without displaying error dialogs to the user.
* **Security & Privacy:** ME-TIME operates on a zero-PII storage policy. Customer identifiers are anonymized using salted cryptographic hashes, and exact street coordinates are scrubbed after order completion.

---

## 7. API Contracts & Database Schema Reference

### 7.1 Key Endpoints
* `POST /v1/webhooks/order-events`: Ingests real-time events (`order_created`, `eta_updated`, `delivered`)[cite: 1].
* `GET /v1/orders/{orderId}/experience`: Returns composite wait payload and time-budgeted content playlists[cite: 1].
* `POST /v1/orders/{orderId}/feedback`: Records single-tap PWS ratings[cite: 1].

### 7.2 Relational Data Entities
* `tenants`: Multi-tenant platform isolation[cite: 1].
* `orders`: Shadow order states, ETAs, and drop-off instruction flags[cite: 1].
* `delay_events`: Audit trail for logistics slippage and plain-language delay explanations[cite: 1].
* `content_items`: Catalog metadata, durations, streaming URLs, and tags[cite: 1].
* `feedback_responses`: Post-order satisfaction scores (`short_fine` vs. `long_frustrating`)[cite: 1].