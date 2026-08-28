# Product Requirements Document (PRD)

**Title:** ME-TIME™ — The Ambient Post-Order Experience Engine</br>
**Subtitle:** Transforming Delivery Wait Times into Time-Budgeted Personal Leisure & Screen-Off Content</br>  
**Document Version:** 2.0-Enterprise</br>
**Document Owner:** Nithish — Product Lead</br>
**Target Host Platforms:** Swiggy, Zomato, Uber Eats, DoorDash</br>
**Status:** Ready for Engineering & Pilot Integration</br>  

---

## 1. Executive Summary & Problem Definition

### 1.1 Executive Summary
**ME-TIME™** is an ambient post-order experience engine embedded directly into on-demand food delivery platforms[cite: 6, 12]. When a consumer places an order, they enter an unmanaged waiting period of **20 to 45 minutes**[cite: 1, 12]. Today, delivery platforms treat this interval as a passive, anxiety-inducing map view[cite: 1, 12]. 

ME-TIME computes the live available time budget ($\text{Time Budget} = \text{Live ETA} - \text{Current Time}$) and delivers personalized, screen-off audio sessions, micro-podcasts, and industry briefs that wrap up automatically the moment the delivery partner reaches the doorstep[cite: 1]. To ensure a seamless handoff, ME-TIME also provides delivery partners with a localized fulfillment terminal that auto-translates checkout instructions and landmark photos in real time[cite: 1].

### 1.2 Problem Statement, Behavioral Impact & Ecosystem Data
#### 1.2.1 Real-World Data & Behavioral Telemetry

**Post-Order User Attention Distribution (20–45 Min Wait Window)**

| User Activity | Share (%) | Visual Distribution | Core Psychological State |
| :--- | :--- | :--- | :--- |
| **Low-Value Doom-Scrolling** | **58%** | `████████████████████████████` | Shallow distraction, cognitive exhaustion, passive regret[cite: 2] |
| **Anxious App & Map Checking** | **23%** | `████████████` | Anticipatory anxiety, compulsive ETA verification[cite: 2] |
| **Fragmented Tasks / Domestic** | **16%** | `████████` | Interrupted concentration, divided attention[cite: 2] |
| **Intentional Rest / Prime Leisure** | **3%** | `██` | Mindful relaxation, productive focus (Target state)[cite: 2] |

---

**Delivery Lifecycle Telemetry & Multi-Sided Friction Correlation**

| Lifecycle Stage | Window (Avg) | User Map Check Rate | Primary Friction & Failure Modes |
| :--- | :--- | :--- | :--- |
| **1. Kitchen Preparation** | 0 – 10 Mins | **1.2 Opens** | Customer suspicion: *"Why has the kitchen not started?"*[cite: 1] |
| **2. In-Transit Corridor** | 10 – 30 Mins | **4.6 Compulsive Opens** | Peak temporal anxiety, map doomloop, cognitive distraction[cite: 2] |
| **3. Logistics Slippage** | +8 – 15 Mins | **Continuous Staring** | Inbound WISMO support tickets, cancellation and refund threats[cite: 1, 2] |
| **4. Doorstep Final-Mile** | Last 3 Mins | **Frantic Checking** | Language barrier at gate, unexpected doorbell shocks, pet alerts[cite: 1] |

---

**Quantified Post-Order Friction Metrics**

| Metric | Measured Impact | Root Cause & Operational Consequence |
| :--- | :--- | :--- |
| 📱 **81% Tracking Anxiety** | 2–5+ map opens per order | Driven by silent ETA fluctuations and lack of arrival certainty[cite: 2]. |
| 🎫 **62% Support Tickets** | Dominates live chat queues | Inbound "Where Is My Order?" tickets triggered by uncommunicated delays[cite: 1, 2]. |
| ⭐ **1-Star Rating Skew** | Skews restaurant & rider scores | Food taste ratings penalized unfairly due to wait-time perception[cite: 1, 12]. |
| 📞 **0.38 Calls / Order** | Direct delivery disruption | Communication friction caused by unreadable English gate notes or pet hazards[cite: 1, 4]. |

---

#### 1.2.2 Categorized Problem Breakdown & 360° Ecosystem Ripple Effects

**The 5 Post-Order Systemic Failures:**
1. **Temporal Uncertainty & Tracking Anxiety:** The psychological burden of the "dead wait" window[cite: 2, 12].
2. **Unproductive Multitasking & Attention Fragmentation:** Passive doom-scrolling with zero structured wait utilities[cite: 2].
3. **Logistics Slippage & Unexplained Delay Escalation:** Proactive communication vacuum causing live chat surges[cite: 2, 12].
4. **Final-Mile Handoff, Linguistic & Safety Friction:** Gate navigation breakdowns, unannounced door arrivals, and safety risks[cite: 1].
5. **Feedback Blending & Rating Contamination:** The blind spot where wait anxiety contaminates culinary and driver ratings[cite: 12].

##### A. Temporal Uncertainty & Compulsive Map Tracking (The "Dead Wait")

* **Problem Statement:** When an order is confirmed, users enter an unmanaged 20–45 minute waiting window[cite: 1, 12]. Dynamic ETAs fluctuate without granular context (kitchen vs. traffic vs. rider dispatch), triggering temporal anxiety and compulsive screen monitoring[cite: 2, 12].
* **Behavioral Impact Analysis:**
  * **Compulsive Refresh Loop:** Over 81% of consumers check active tracking screens 2 to 5+ times per order[cite: 2].
  * **Cognitive Fragmentation:** Users cannot enter deep work or sustained relaxation because they must continuously anticipate an unpredictable delivery arrival[cite: 2].
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Suffer acute anticipatory stress and psychological time dilation (anxious waiting feels 1.5x longer than actual elapsed time)[cite: 2, 12].
  * **Delivery Partners / Driver App:** Receive impatient customer chat pings and premature calls while navigating heavy traffic[cite: 1].
  * **Restaurant Reputation:** Customers assume the restaurant is taking too long to prepare their food if the tracking pin lingers at the kitchen, damaging kitchen goodwill[cite: 12].

##### B. Attention Fragmentation & Unproductive Multitasking

* **Problem Statement:** During the delivery wait, 94% of users multitask, but delivery platforms offer zero structured waiting utilities[cite: 2]. Consequently, 58% fall into shallow social media doom-scrolling, while only 3% engage in intentional rest or productive focus[cite: 2].
* **Behavioral Impact Analysis:**
  * **Subconscious Negativity:** Users emerge from a 30-minute doom-scrolling session feeling mentally drained and transfer that negative sentiment to the delivery experience[cite: 2].
  * **Missed State Transitions:** Engrossed in disparate apps, users miss notification pings when the driver arrives at their entrance[cite: 1].
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Experience post-wait dissatisfaction and regret over wasted time during lunch breaks or evening unwind hours[cite: 2, 12].
  * **Delivery Partners / Driver App:** Encounter extended doorstep dwell times ($>3\text{ minutes}$) waiting outside for distracted customers to respond to arrival alerts[cite: 1].
  * **Restaurant Reputation:** Freshly prepared hot meals lose heat and texture while waiting at the door, leading to unfair taste complaints[cite: 12].

##### C. Logistics Slippage & Unexplained Delay Escalation

* **Problem Statement:** Operational bottlenecks—such as kitchen rushes, road congestion, or monsoon downpours—inevitably cause $+10\text{ to }15\text{-minute}$ delivery delays[cite: 1, 2]. Existing platforms update ETAs silently without proactive explanations or engaging context[cite: 7, 12].
* **Behavioral Impact Analysis:**
  * **WISMO ("Where Is My Order?") Ticket Surge:** Over 62% of inbound live customer support tickets are triggered by unexplained ETA shifts rather than actual transit cancellations[cite: 1, 2].
  * **Churn & Cancellation Threats:** Customers perceive uncommunicated delays as systemic platform neglect, escalating to refund demands and chargeback disputes[cite: 7, 12].
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Feel helpless and unvalued, turning a routine meal order into a stressful dispute[cite: 7, 12].
  * **Delivery Partners / Driver App:** Face unearned hostility and low customer ratings upon delivery, despite navigating dangerous weather or heavy traffic hazards[cite: 1, 12].
  * **Restaurant Reputation:** Receives direct 1-star reviews on social media for "slow preparation," even when the delay was purely road congestion[cite: 12].

##### D. Final-Mile Handoff, Linguistic & Safety Friction

* **Problem Statement:** The final 50–100 meters of fulfillment suffer from a breakdown in communication[cite: 1]. Non-English-speaking delivery partners struggle to decipher complex English checkout notes or gate instructions, while unannounced arrivals interrupt remote work meetings or trigger barking pets[cite: 1].
* **Behavioral Impact Analysis:**
  * **Repetitive Phone Calls:** Over 34% of negative delivery reviews cite delivery partners calling 2–3 times from the entrance gate[cite: 1, 4].
  * **Panic & Disruption:** Sudden doorbells or loud knocking disrupt infant sleep, family quiet hours, or virtual work calls[cite: 1].
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Suffer meeting disruptions, domestic friction, and agitation at the exact moment of meal handover[cite: 1].
  * **Delivery Partners / Driver App:** Suffer wasted vehicle fuel, missed delivery incentives (SLAs), and physical safety risks (e.g., unrestrained guard dogs or hostile building security)[cite: 1].
  * **Restaurant Reputation:** Negative doorstep friction leaves a sour final impression that ruins the overall dining and brand experience[cite: 12].

##### E. Feedback Blending & Rating Contamination (The PWS Blind Spot)

* **Problem Statement:** Standard post-delivery 5-star rating prompts ask a single blended question: *"How was your order?"* This conflates **kitchen food taste**, **rider transit conduct**, and **wait-time perception** into one contaminated score[cite: 12].
* **Behavioral Impact Analysis:**
  * **Emotional Rating Skew:** A customer who endured an anxious, unmanaged 40-minute wait will often award 1 or 2 stars to a meal cooked to culinary perfection[cite: 12].
  * **Zero Root-Cause Isolation:** Product and operations teams cannot distinguish whether poor ratings stem from kitchen quality, delivery routing errors, or pure wait perception[cite: 12].
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Have no dedicated, 1-tap outlet to evaluate wait perception without penalizing innocent restaurants or riders[cite: 7, 12].
  * **Delivery Partners / Driver App:** Driver payout incentives and leaderboard ranks are penalized unfairly by 1-star reviews driven by wait-time frustration[cite: 1, 12].
  * **Restaurant Reputation:** Restaurant search rankings, customer trust badges, and platform commission tiers suffer severe drops due to delivery-phase delays beyond the kitchen's control[cite: 12].

#### 1.2.3 Real-World Scenario Impact Matrix

| Scenario & User Context | Trigger Event | Status Quo (Without ME-TIME) | Multi-Sided Adverse Impact | ME-TIME Platform Resolution |
| :--- | :--- | :--- | :--- | :--- |
| **WFH Lunch Rush**<br>*(Focused Tech Worker)* | Order placed between virtual meetings[cite: 12]. | Checks map 4+ times; keeps one eye on phone screen[cite: 2]. | **User:** Distracted from meetings.<br>**Driver:** Ignored notifications.<br>**Restaurant:** Food cools at door[cite: 1, 2]. | **1-Tap Tech Audio Session:** Screen-off session matched to ETA; auto-finishes on arrival[cite: 1]. |
| **Monsoon Traffic Corridor**<br>*(Evening Dinner)* | Sudden heavy rain causes $+12\text{m}$ delay[cite: 1]. | User repeatedly refreshes map, escalating to support chat[cite: 2]. | **User:** High anxiety & churn risk.<br>**Driver:** Hostile customer drop.<br>**Restaurant:** Unfair 1-star review[cite: 1, 12]. | **Dynamic Auto-Append:** Reframes delay by auto-queuing companion content with context[cite: 1, 3]. |
| **Late-Night Home Delivery**<br>*(Parent / Pet Owner)* | Delivery partner reaches apartment entrance[cite: 1]. | Loud doorbell rings; dog barks, waking infant child[cite: 1]. | **User:** 1-Star review: "Woke baby."<br>**Driver:** Rating penalized.<br>**Restaurant:** Brand goodwill lost[cite: 1, 12]. | **Audio-Ducked 3D Knock:** Media lowers to 10% with localized silent drop instructions[cite: 1]. |
| **Gated Community Access**<br>*(Regional Driver)* | Driver unable to read English checkout notes[cite: 1]. | Halts at main gate and places multiple phone calls[cite: 1, 4]. | **User:** Spammed with calls.<br>**Driver:** Lost delivery bonus.<br>**Restaurant:** Cold food complaint[cite: 1]. | **Localized Landmark Card:** Renders gate notes and entrance photos directly in Tamil / Hindi[cite: 1]. |
| **Post-Delivery Survey**<br>*(All Orders)* | Order marked completed[cite: 1]. | Generic 5-star survey blends food, speed, and driver conduct[cite: 12]. | **User:** No wait-time outlet.<br>**Driver:** Blamed for delays.<br>**Restaurant:** Unfairly down-ranked[cite: 12]. | **1-Tap PWS Feedback:** Captures Perceived Wait Satisfaction score (`short_fine` vs. `long_frustrating`) with progressive disclosure[cite: 1, 8, 12]. |

### 1.3 Goals & Success Metrics
| Metric Category | Target KPI | Baseline | Measurement Source |
| :--- | :--- | :--- | :--- |
| **User Anxiety** | $\ge 40\%$ reduction in map refresh frequency per order | 4.8 refreshes/order[cite: 4] | Client telemetry logs on `/experience`[cite: 4, 5] |
| **Wait Perception** | $\ge 75\%$ positive Perceived Wait Satisfaction (PWS) score | 32% positive[cite: 4] | 1-tap post-delivery survey (`short_fine`)[cite: 4, 5, 12] |
| **Engagement** | $\ge 35\%$ 1-tap session initiation rate | N/A (New feature) | CTA analytics (`btn-hero-play`, `btn-explore`)[cite: 1, 4] |
| **Fulfillment Friction** | $\ge 30\%$ reduction in driver-to-customer phone calls | 0.38 calls/order[cite: 4] | Driver communication gateway logs[cite: 4] |
| **System Performance**| $\le 300\text{ ms}$ p95 API response time on 4G networks | N/A | Multi-tenant API gateway telemetry[cite: 6, 10] |

---

## 2. User Personas & User Journeys

### 2.1 Target Personas Matrix

| Attribute | Persona A: The WFH Professional | Persona B: The Evening Unwinder | Persona C: The Delivery Partner |
| :--- | :--- | :--- | :--- |
| **Primary Goal** | Stay productive without missing food handoff[cite: 12] | Decompress after work without screen fatigue[cite: 12] | Complete drops quickly and maximize earnings[cite: 1] |
| **Content Preference** | Tech podcasts, financial digests, short news[cite: 1, 12] | Regional playlists, lo-fi beats, stand-up comedy[cite: 1, 12] | N/A (Consumes navigation and drop directives)[cite: 1] |
| **Key Frustration** | Disruptive doorbells during meetings; anxious tracking[cite: 1, 2] | Screen doom-scrolling while waiting; erratic ETAs[cite: 2] | Unclear gate landmarks; unreadable English notes[cite: 1] |
| **Platform Touchpoint** | 1-Tap Auto-Play, proximity audio ducking[cite: 1] | Explore Moods drawer, dynamic delay extension[cite: 1] | Multilingual terminal, landmark card, instant pay[cite: 1] |

---

## 3. System Architecture & Ingestion Boundary

ME-TIME runs as a lightweight, read-only client SDK ($\le 150\text{ KB}$ gzipped) integrated into the host platform’s mobile apps and web tracking surfaces[cite: 1, 6, 10].

### 3.1 Data Flow Architecture

| Layer | Component | Functionality & Responsibilities |
| :--- | :--- | :--- |
| **Upstream Hosts** | Host Platform Backend *(Swiggy, Zomato)* | Emits order lifecycle webhooks (`order_created`, `eta_updated`, `delivered`)[cite: 5, 6]. |
| **Content Gateways** | Partner Content APIs *(Audible, Spotify, Reuters)* | Supplies real-time metadata, deep-links, and stream duration parameters[cite: 1, 6]. |
| **Core Engine** | **ME-TIME Multi-Tenant Gateway** | Evaluates time-budget matching, manages delay auto-appends, and localizes notes[cite: 1, 6]. |
| **Client Surfaces** | Customer Surface & Driver Terminal | Renders audio player HUD and localized drop instructions on respective client apps[cite: 1]. |

---

## 4. Functional Requirements & Feature Specifications

### 4.1 Feature 1: Time-Budgeted Ambient Recommendation Engine
* **Description:** Ingests the estimated delivery window and queries content partner catalogs (Audible, Spotify, Bloomberg, local creators) to construct an exact-length audio queue[cite: 1].
* **Business Logic:**
  $$\text{Target Audio Duration} \le \text{Live ETA} - \text{Buffer (2 mins)}$$[cite: 1]
* **User Experience:**
  * **1-Tap Instant Play (`btn-hero-play`):** Automatically starts the top-ranked time-budgeted track[cite: 1].
  * **Explore Moods (`btn-explore-glow`):** Expands the dual-axis drawer for category switching (**Podcasts**, **Music**, **Short News**, **Games**)[cite: 1].
  * **Background Streaming:** Media continues playing smoothly when the user locks their device or switches apps using OS-level background audio controls (`AVAudioSession` / `MediaSession`)[cite: 1].

### 4.2 Feature 2: Logistics Slippage & Dynamic Queue Auto-Extension
* **Description:** Manages unexpected delays (e.g., kitchen bottlenecks, road traffic, monsoon showers) without increasing user anxiety[cite: 1, 3].
* **Business Logic:**
  * When an `eta_updated` event introduces a delay $\ge 8\text{ minutes}$, the engine transitions the customer UI state to `DELAY_MODE`[cite: 1, 5, 9].
  * Automatically fetches and appends a companion bonus track to match the extended window (e.g., $+10\text{m}$ bonus brief) without interrupting active playback[cite: 1, 3].
* **User Interface:**
  * Status indicator turns from green to red (`CONGESTED`)[cite: 1].
  * Displays a plain-language delay callout: *"Traffic Delay (+10m): Extended bonus track auto-queued"*[cite: 1].

### 4.3 Feature 3: Proximity Geofencing, Audio Ducking & 3D Knock Handoff
* **Description:** Manages the final-mile transition when the delivery partner reaches the destination geofence[cite: 1].
* **Trigger Condition:** Driver GPS coordinates breach the $<50\text{m}$ radius of the delivery pin[cite: 1, 5, 9].
* **Execution Sequence:**
  1. Active background audio gain node smoothly attenuates (ducks) from 100% to 10% volume over $600\text{ ms}$[cite: 1].
  2. The customer app surfaces the **3D Knocking HUD**[cite: 1].
  3. Fires synchronized acoustic double-knocks and haptic vibration pulses (`navigator.vibrate([100, 50, 120])`)[cite: 1].

### 4.4 Feature 4: Localized Delivery Partner Fulfillment Terminal
* **Description:** Provides delivery partners with an on-device language selector and dynamic translation for drop-off notes and navigation[cite: 1].
* **Supported Locales:** Tamil (`ta`), Hindi (`hi`), English (`en`)[cite: 1].
* **UI Components:**
  * **On-Device Language Switcher:** A 1-tap pill bar (`pillLangTa`, `pillLangHi`, `pillLangEn`) located in the header for real-time translation[cite: 1].
  * **Visual Landmark Card:** Shows verified entrance photos and gate landmarks uploaded by the customer[cite: 1].
  * **Contextual Caution Badges:**
    * `Beware of Dog 🐕`: *"எச்சரிக்கை: வாசலில் நாய் உள்ளது! கேட்டில் நிற்கவும்."*[cite: 1]
    * `Gate Drop / Away 📦`: *"தொடர்பற்ற டெலிவரி: செக்யூரிட்டியிடம் ஒப்படைக்கவும்."*[cite: 1]
    * `Do Not Ring Bell 🤫`: *"அமைதியான டெலிவரி: குழந்தை தூங்குகிறது. பெல் அடிக்க வேண்டாம்."*[cite: 1]
  * **Instant Payout Summary:** Displays an itemized earnings receipt (Base Pay + On-Time Bonus + Tip) with real-time wallet settlement immediately upon marking an order delivered[cite: 1].

### 4.5 Feature 5: 1-Tap Perceived Wait Satisfaction (PWS) Survey with Progressive Disclosure
* **Description:** Captures post-order user sentiment to evaluate wait perception[cite: 1, 12].
* **Options & Progression:**
  * ⚡ **"Felt short & entertaining"** (`short_fine`): Records positive score and closes modal immediately[cite: 1, 5].
  * ⏳ **"Felt long & frustrating"** (`long_frustrating`): Progressively expands an optional open-text comment box (*"What went wrong?"*) before submission[cite: 8].
* **Constraint:** Idempotent single-write recording via `POST /v1/orders/{orderId}/feedback`[cite: 5, 8].

---

### 4.6 Feature 6: Queue-Tail Ambient Bridge & ETA Gap Handling
* **Description:** Manages scenarios where primary audio content finishes while delivery transit remains active ($ETA > 0$)[cite: 1].
* **Business Logic:** When primary track playback ends and the order state is neither `doorstep` nor `delivered`, the SDK transitions into a **Lo-Fi Ambient Fade** or surfaces a 2-minute micro-trivia card to maintain background continuity[cite: 1].

### 4.7 Feature 7: Offline Resilience & Secure Audio Pre-Caching
* **Description:** Prevents stuttering and audio loss when the customer enters connectivity dead zones (elevators, apartment basements)[cite: 1].
* **Mechanism:** Upon `order_created` webhook ingestion, the client SDK pre-caches the top 3 audio candidate streams into sandboxed local storage (`IndexedDB` / mobile sandbox) using low-bitrate AAC/Opus formats[cite: 1].

### 4.8 Feature 8: Dynamic Ambient Theming & Driver High-Glare Ergonomics
* **Description:** The Driver Terminal dynamically adapts contrast based on solar time and device ambient light sensors (`AmbientLightSensor` and OS color-scheme preferences)[cite: 1].
* **Manual Override:** Drivers can tap the header theme button to cycle between **Auto Theme (Ambient-Synced)**, **Day Mode (Forced High-Contrast)**, and **Night Mode (Dark OLED)**[cite: 1].

---

## 5. End-to-End Visual Workflow & Component Markup Matrix

| Lifecycle Step | Window / Trigger | Customer App Interface State | Driver Terminal State | System Event / Action |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1: Preparation** | 0 – 10 Mins | • Order status: Cooking<br>• Hero card: "Play Now" CTA<br>• Initial ETA displayed[cite: 1] | • Order assigned notification<br>• Restaurant pickup navigation<br>• Meal prep countdown timer[cite: 1] | Webhook: `order_created`<br>Calculates initial time-budget[cite: 1, 5]. |
| **Step 2: In-Transit** | 10 – 30 Mins | • Active scooter map pin<br>• Floating audio player active<br>• Background audio streaming[cite: 1] | • Turn-by-turn navigation HUD<br>• Customer gate landmark photo<br>• Localized drop instructions[cite: 1] | Telemetry: GPS Polling<br>Syncs rider coordinates to map[cite: 1, 5]. |
| **Step 3: Slippage / Delay** | Dynamic ($+10\text{m}$) | • Red status: Traffic Delay<br>• Bonus track auto-appended<br>• ETA counter incremented[cite: 1] | • Congestion alert banner<br>• Dynamic re-route suggestion<br>• Delivery incentive preserved[cite: 1] | Webhook: `eta_updated`<br>Appends companion track[cite: 1, 5]. |
| **Step 4: Doorstep Arrival** | Geofence ($<50\text{m}$) | • Audio volume ducked to 10%<br>• 3D Knocking HUD surfaces<br>• Double-knock vibration fired[cite: 1] | • Arrival confirmation trigger<br>• Active caution badges rendered<br>• Direct 1-tap call button[cite: 1] | Geofence: Proximity Breach<br>Executes audio ducking sequence[cite: 1, 5]. |
| **Step 5: Fulfillment** | Mark Delivered | • Audio playback concludes<br>• 1-Tap PWS modal displayed<br>• Order marked completed[cite: 1] | • Delivery completed screen<br>• Itemized payout summary<br>• Instant wallet settlement[cite: 1] | Webhook: `delivered`<br>Logs feedback & comment idempotently[cite: 1, 5, 8]. |

---

## 6. Non-Functional Requirements (NFRs)

* **Performance & Latency:** The composite experience endpoint (`GET /v1/orders/{orderId}/experience`) must respond within $\le 300\text{ ms}$ at p95 under standard mobile network conditions[cite: 5, 6, 10].
* **Bundle Footprint:** The embedded client SDK must not exceed $\le 150\text{ KB}$ gzipped[cite: 10].
* **Fail-Safe & High Availability:** If ME-TIME services fail, the host application must silently fall back to standard map tracking without displaying error dialogs to the user[cite: 6, 10].
* **Security & Privacy:** ME-TIME operates on a zero-PII storage policy[cite: 8, 10]. Customer identifiers are anonymized using salted cryptographic hashes, and exact street coordinates are scrubbed after order completion[cite: 8, 10].

---

## 7. API Contracts & Database Schema Reference

### 7.1 Key REST Endpoints
* `POST /v1/webhooks/order-events`: Ingests real-time events (`order_created`, `eta_updated`, `delivered`)[cite: 5].
* `GET /v1/orders/{orderId}/experience`: Returns composite wait payload and time-budgeted content playlists[cite: 5].
* `POST /v1/orders/{orderId}/feedback`: Records single-tap PWS ratings with optional qualitative comments[cite: 5, 8].

### 7.2 Relational Data Schema Entities
* `tenants`: Multi-tenant platform isolation[cite: 8].
* `orders`: Shadow order states, ETAs, and drop-off instruction flags[cite: 8].
* `delay_events`: Audit trail for logistics slippage and plain-language delay explanations[cite: 8].
* `content_items`: Catalog metadata, durations, streaming URLs, and tags[cite: 8].
* `feedback_responses`: Post-order satisfaction scores (`short_fine` vs. `long_frustrating`) and optional `customer_comment` text[cite: 8].
