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
**ME-TIME™** is an ambient post-order experience engine embedded directly into on-demand food delivery platforms. When a consumer places an order, they enter an unmanaged waiting period of **20 to 45 minutes**. Today, delivery platforms treat this interval as a passive, anxiety-inducing map view. 

ME-TIME computes the live available time budget ($\text{Time Budget} = \text{Live ETA} - \text{Current Time}$) and delivers personalized, screen-off audio sessions, micro-podcasts, and industry briefs that wrap up automatically the moment the delivery partner reaches the doorstep. To ensure a seamless handoff, ME-TIME also provides delivery partners with a localized fulfillment terminal that auto-translates checkout instructions and landmark photos in real time.

### 1.2 Problem Statement, Behavioral Impact & Ecosystem Data
#### 1.2.1 Real-World Data & Behavioral Telemetry

**Post-Order User Attention Distribution (20–45 Min Wait Window)**

| User Activity | Share (%) | Visual Distribution | Core Psychological State |
| :--- | :--- | :--- | :--- |
| **Low-Value Doom-Scrolling** | **58%** | `████████████████████████████` | Shallow distraction, cognitive exhaustion, passive regret |
| **Anxious App & Map Checking** | **23%** | `████████████` | Anticipatory anxiety, compulsive ETA verification |
| **Fragmented Tasks / Domestic** | **16%** | `████████` | Interrupted concentration, divided attention |
| **Intentional Rest / Prime Leisure** | **3%** | `██` | Mindful relaxation, productive focus (Target state) |

---

**Delivery Lifecycle Telemetry & Multi-Sided Friction Correlation**

| Lifecycle Stage | Window (Avg) | User Map Check Rate | Primary Friction & Failure Modes |
| :--- | :--- | :--- | :--- |
| **1. Kitchen Preparation** | 0 – 10 Mins | **1.2 Opens** | Customer suspicion: *"Why has the kitchen not started?"* |
| **2. In-Transit Corridor** | 10 – 30 Mins | **4.6 Compulsive Opens** | Peak temporal anxiety, map doomloop, cognitive distraction |
| **3. Logistics Slippage** | +8 – 15 Mins | **Continuous Staring** | Inbound WISMO support tickets, cancellation and refund threats |
| **4. Doorstep Final-Mile** | Last 3 Mins | **Frantic Checking** | Language barrier at gate, unexpected doorbell shocks, pet alerts |

---

**Quantified Post-Order Friction Metrics**

| Metric | Measured Impact | Root Cause & Operational Consequence |
| :--- | :--- | :--- |
| 📱 **81% Tracking Anxiety** | 2–5+ map opens per order | Driven by silent ETA fluctuations and lack of arrival certainty. |
| 🎫 **62% Support Tickets** | Dominates live chat queues | Inbound "Where Is My Order?" tickets triggered by uncommunicated delays. |
| ⭐ **1-Star Rating Skew** | Skews restaurant & rider scores | Food taste ratings penalized unfairly due to wait-time perception. |
| 📞 **0.38 Calls / Order** | Direct delivery disruption | Communication friction caused by unreadable English gate notes or pet hazards. |

---

#### 1.2.2 Categorized Problem Breakdown & 360° Ecosystem Ripple Effects

**The 5 Post-Order Systemic Failures:**
1. **Temporal Uncertainty & Tracking Anxiety:** The psychological burden of the "dead wait" window.
2. **Unproductive Multitasking & Attention Fragmentation:** Passive doom-scrolling with zero structured wait utilities.
3. **Logistics Slippage & Unexplained Delay Escalation:** Proactive communication vacuum causing live chat surges.
4. **Final-Mile Handoff, Linguistic & Safety Friction:** Gate navigation breakdowns, unannounced door arrivals, and safety risks.
5. **Feedback Blending & Rating Contamination:** The blind spot where wait anxiety contaminates culinary and driver ratings.

##### A. Temporal Uncertainty & Compulsive Map Tracking (The "Dead Wait")

* **Problem Statement:** When an order is confirmed, users enter an unmanaged 20–45 minute waiting window. Dynamic ETAs fluctuate without granular context (kitchen vs. traffic vs. rider dispatch), triggering temporal anxiety and compulsive screen monitoring.
* **Behavioral Impact Analysis:**
  * **Compulsive Refresh Loop:** Over 81% of consumers check active tracking screens 2 to 5+ times per order.
  * **Cognitive Fragmentation:** Users cannot enter deep work or sustained relaxation because they must continuously anticipate an unpredictable delivery arrival.
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Suffer acute anticipatory stress and psychological time dilation (anxious waiting feels 1.5x longer than actual elapsed time).
  * **Delivery Partners / Driver App:** Receive impatient customer chat pings and premature calls while navigating heavy traffic.
  * **Restaurant Reputation:** Customers assume the restaurant is taking too long to prepare their food if the tracking pin lingers at the kitchen, damaging kitchen goodwill.

##### B. Attention Fragmentation & Unproductive Multitasking

* **Problem Statement:** During the delivery wait, 94% of users multitask, but delivery platforms offer zero structured waiting utilities. Consequently, 58% fall into shallow social media doom-scrolling, while only 3% engage in intentional rest or productive focus.
* **Behavioral Impact Analysis:**
  * **Subconscious Negativity:** Users emerge from a 30-minute doom-scrolling session feeling mentally drained and transfer that negative sentiment to the delivery experience.
  * **Missed State Transitions:** Engrossed in disparate apps, users miss notification pings when the driver arrives at their entrance.
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Experience post-wait dissatisfaction and regret over wasted time during lunch breaks or evening unwind hours.
  * **Delivery Partners / Driver App:** Encounter extended doorstep dwell times ($>3\text{ minutes}$) waiting outside for distracted customers to respond to arrival alerts.
  * **Restaurant Reputation:** Freshly prepared hot meals lose heat and texture while waiting at the door, leading to unfair taste complaints.

##### C. Logistics Slippage & Unexplained Delay Escalation

* **Problem Statement:** Operational bottlenecks—such as kitchen rushes, road congestion, or monsoon downpours—inevitably cause $+10\text{ to }15\text{-minute}$ delivery delays[cite: 1, 2]. Existing platforms update ETAs silently without proactive explanations or engaging context.
* **Behavioral Impact Analysis:**
  * **WISMO ("Where Is My Order?") Ticket Surge:** Over 62% of inbound live customer support tickets are triggered by unexplained ETA shifts rather than actual transit cancellations.
  * **Churn & Cancellation Threats:** Customers perceive uncommunicated delays as systemic platform neglect, escalating to refund demands and chargeback disputes.
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Feel helpless and unvalued, turning a routine meal order into a stressful dispute.
  * **Delivery Partners / Driver App:** Face unearned hostility and low customer ratings upon delivery, despite navigating dangerous weather or heavy traffic hazards.
  * **Restaurant Reputation:** Receives direct 1-star reviews on social media for "slow preparation," even when the delay was purely road congestion.

##### D. Final-Mile Handoff, Linguistic & Safety Friction

* **Problem Statement:** The final 50–100 meters of fulfillment suffer from a breakdown in communication. Non-English-speaking delivery partners struggle to decipher complex English checkout notes or gate instructions, while unannounced arrivals interrupt remote work meetings or trigger barking pets.
* **Behavioral Impact Analysis:**
  * **Repetitive Phone Calls:** Over 34% of negative delivery reviews cite delivery partners calling 2–3 times from the entrance gate.
  * **Panic & Disruption:** Sudden doorbells or loud knocking disrupt infant sleep, family quiet hours, or virtual work calls.
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Suffer meeting disruptions, domestic friction, and agitation at the exact moment of meal handover.
  * **Delivery Partners / Driver App:** Suffer wasted vehicle fuel, missed delivery incentives (SLAs), and physical safety risks (e.g., unrestrained guard dogs or hostile building security).
  * **Restaurant Reputation:** Negative doorstep friction leaves a sour final impression that ruins the overall dining and brand experience.

##### E. Feedback Blending & Rating Contamination (The PWS Blind Spot)

* **Problem Statement:** Standard post-delivery 5-star rating prompts ask a single blended question: *"How was your order?"* This conflates **kitchen food taste**, **rider transit conduct**, and **wait-time perception** into one contaminated score.
* **Behavioral Impact Analysis:**
  * **Emotional Rating Skew:** A customer who endured an anxious, unmanaged 40-minute wait will often award 1 or 2 stars to a meal cooked to culinary perfection.
  * **Zero Root-Cause Isolation:** Product and operations teams cannot distinguish whether poor ratings stem from kitchen quality, delivery routing errors, or pure wait perception.
* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Have no dedicated, 1-tap outlet to evaluate wait perception without penalizing innocent restaurants or riders.
  * **Delivery Partners / Driver App:** Driver payout incentives and leaderboard ranks are penalized unfairly by 1-star reviews driven by wait-time frustration.
  * **Restaurant Reputation:** Restaurant search rankings, customer trust badges, and platform commission tiers suffer severe drops due to delivery-phase delays beyond the kitchen's control.

#### 1.2.3 Real-World Scenario Impact Matrix

| Scenario & User Context | Trigger Event | Status Quo (Without ME-TIME) | Multi-Sided Adverse Impact | ME-TIME Platform Resolution |
| :--- | :--- | :--- | :--- | :--- |
| **WFH Lunch Rush**<br>*(Focused Tech Worker)* | Order placed between virtual meetings. | Checks map 4+ times; keeps one eye on phone screen. | **User:** Distracted from meetings.<br>**Driver:** Ignored notifications.<br>**Restaurant:** Food cools at door. | **1-Tap Tech Audio Session:** Screen-off session matched to ETA; auto-finishes on arrival. |
| **Monsoon Traffic Corridor**<br>*(Evening Dinner)* | Sudden heavy rain causes $+12\text{m}$ delay. | User repeatedly refreshes map, escalating to support chat. | **User:** High anxiety & churn risk.<br>**Driver:** Hostile customer drop.<br>**Restaurant:** Unfair 1-star review. | **Dynamic Auto-Append:** Reframes delay by auto-queuing companion content with context. |
| **Late-Night Home Delivery**<br>*(Parent / Pet Owner)* | Delivery partner reaches apartment entrance. | Loud doorbell rings; dog barks, waking infant child. | **User:** 1-Star review: "Woke baby."<br>**Driver:** Rating penalized.<br>**Restaurant:** Brand goodwill lost. | **Audio-Ducked 3D Knock:** Media lowers to 10% with localized silent drop instructions. |
| **Gated Community Access**<br>*(Regional Driver)* | Driver unable to read English checkout notes. | Halts at main gate and places multiple phone calls. | **User:** Spammed with calls.<br>**Driver:** Lost delivery bonus.<br>**Restaurant:** Cold food complaint. | **Localized Landmark Card:** Renders gate notes and entrance photos directly in Tamil / Hindi. |
| **Post-Delivery Survey**<br>*(All Orders)* | Order marked completed. | Generic 5-star survey blends food, speed, and driver conduct. | **User:** No wait-time outlet.<br>**Driver:** Blamed for delays.<br>**Restaurant:** Unfairly down-ranked. | **1-Tap PWS Feedback:** Captures Perceived Wait Satisfaction score (`short_fine` vs. `long_frustrating`) with progressive disclosure. |

### 1.3 Goals & Success Metrics
| Metric Category | Target KPI | Baseline | Measurement Source |
| :--- | :--- | :--- | :--- |
| **User Anxiety** | $\ge 40\%$ reduction in map refresh frequency per order | 4.8 refreshes/order[cite: 4] | Client telemetry logs on `/experience` |
| **Wait Perception** | $\ge 75\%$ positive Perceived Wait Satisfaction (PWS) score | 32% positive[cite: 4] | 1-tap post-delivery survey (`short_fine`) |
| **Engagement** | $\ge 35\%$ 1-tap session initiation rate | N/A (New feature) | CTA analytics (`btn-hero-play`, `btn-explore`) |
| **Fulfillment Friction** | $\ge 30\%$ reduction in driver-to-customer phone calls | 0.38 calls/order[cite: 4] | Driver communication gateway logs |
| **System Performance**| $\le 300\text{ ms}$ p95 API response time on 4G networks | N/A | Multi-tenant API gateway telemetry |

---

## 2. User Personas & User Journeys

### 2.1 Target Personas Matrix

| Attribute | Persona A: The WFH Professional | Persona B: The Evening Unwinder | Persona C: The Delivery Partner |
| :--- | :--- | :--- | :--- |
| **Primary Goal** | Stay productive without missing food handoff | Decompress after work without screen fatigue | Complete drops quickly and maximize earnings |
| **Content Preference** | Tech podcasts, financial digests, short news | Regional playlists, lo-fi beats, stand-up comedy | N/A (Consumes navigation and drop directives) |
| **Key Frustration** | Disruptive doorbells during meetings; anxious tracking | Screen doom-scrolling while waiting; erratic ETAs | Unclear gate landmarks; unreadable English notes |
| **Platform Touchpoint** | 1-Tap Auto-Play, proximity audio ducking | Explore Moods drawer, dynamic delay extension | Multilingual terminal, landmark card, instant pay |

---

## 3. System Architecture & Ingestion Boundary

ME-TIME runs as a lightweight, read-only client SDK ($\le 150\text{ KB}$ gzipped) integrated into the host platform’s mobile apps and web tracking surfaces.

### 3.1 Data Flow Architecture

| Layer | Component | Functionality & Responsibilities |
| :--- | :--- | :--- |
| **Upstream Hosts** | Host Platform Backend *(Swiggy, Zomato)* | Emits order lifecycle webhooks (`order_created`, `eta_updated`, `delivered`). |
| **Content Gateways** | Partner Content APIs *(Audible, Spotify, Reuters)* | Supplies real-time metadata, deep-links, and stream duration parameters. |
| **Core Engine** | **ME-TIME Multi-Tenant Gateway** | Evaluates time-budget matching, manages delay auto-appends, and localizes notes. |
| **Client Surfaces** | Customer Surface & Driver Terminal | Renders audio player HUD and localized drop instructions on respective client apps. |

---

## 4. Functional Requirements & Feature Specifications

### 4.1 Feature 1: Time-Budgeted Ambient Recommendation Engine
* **Description:** Ingests the estimated delivery window and queries content partner catalogs (Audible, Spotify, Bloomberg, local creators) to construct an exact-length audio queue.
* **Business Logic:**
  $$\text{Target Audio Duration} \le \text{Live ETA} - \text{Buffer (2 mins)}$$
* **User Experience:**
  * **1-Tap Instant Play (`btn-hero-play`):** Automatically starts the top-ranked time-budgeted track.
  * **Explore Moods (`btn-explore-glow`):** Expands the dual-axis drawer for category switching (**Podcasts**, **Music**, **Short News**, **Games**).
  * **Background Streaming:** Media continues playing smoothly when the user locks their device or switches apps using OS-level background audio controls (`AVAudioSession` / `MediaSession`).

### 4.2 Feature 2: Logistics Slippage & Dynamic Queue Auto-Extension
* **Description:** Manages unexpected delays (e.g., kitchen bottlenecks, road traffic, monsoon showers) without increasing user anxiety.
* **Business Logic:**
  * When an `eta_updated` event introduces a delay $\ge 8\text{ minutes}$, the engine transitions the customer UI state to `DELAY_MODE`.
  * Automatically fetches and appends a companion bonus track to match the extended window (e.g., $+10\text{m}$ bonus brief) without interrupting active playback.
* **User Interface:**
  * Status indicator turns from green to red (`CONGESTED`).
  * Displays a plain-language delay callout: *"Traffic Delay (+10m): Extended bonus track auto-queued"*.

### 4.3 Feature 3: Proximity Geofencing, Audio Ducking & 3D Knock Handoff
* **Description:** Manages the final-mile transition when the delivery partner reaches the destination geofence.
* **Trigger Condition:** Driver GPS coordinates breach the $<50\text{m}$ radius of the delivery pin.
* **Execution Sequence:**
  1. Active background audio gain node smoothly attenuates (ducks) from 100% to 10% volume over $600\text{ ms}$.
  2. The customer app surfaces the **3D Knocking HUD**.
  3. Fires synchronized acoustic double-knocks and haptic vibration pulses (`navigator.vibrate([100, 50, 120])`).

### 4.4 Feature 4: Localized Delivery Partner Fulfillment Terminal
* **Description:** Provides delivery partners with an on-device language selector and dynamic translation for drop-off notes and navigation.
* **Supported Locales:** Tamil (`ta`), Hindi (`hi`), English (`en`).
* **UI Components:**
  * **On-Device Language Switcher:** A 1-tap pill bar (`pillLangTa`, `pillLangHi`, `pillLangEn`) located in the header for real-time translation.
  * **Visual Landmark Card:** Shows verified entrance photos and gate landmarks uploaded by the customer.
  * **Contextual Caution Badges:**
    * `Beware of Dog 🐕`: *"எச்சரிக்கை: வாசலில் நாய் உள்ளது! கேட்டில் நிற்கவும்."*
    * `Gate Drop / Away 📦`: *"தொடர்பற்ற டெலிவரி: செக்யூரிட்டியிடம் ஒப்படைக்கவும்."*
    * `Do Not Ring Bell 🤫`: *"அமைதியான டெலிவரி: குழந்தை தூங்குகிறது. பெல் அடிக்க வேண்டாம்."*
  * **Instant Payout Summary:** Displays an itemized earnings receipt (Base Pay + On-Time Bonus + Tip) with real-time wallet settlement immediately upon marking an order delivered.

### 4.5 Feature 5: 1-Tap Perceived Wait Satisfaction (PWS) Survey with Progressive Disclosure
* **Description:** Captures post-order user sentiment to evaluate wait perception.
* **Options & Progression:**
  * ⚡ **"Felt short & entertaining"** (`short_fine`): Records positive score and closes modal immediately.
  * ⏳ **"Felt long & frustrating"** (`long_frustrating`): Progressively expands an optional open-text comment box (*"What went wrong?"*) before submission.
* **Constraint:** Idempotent single-write recording via `POST /v1/orders/{orderId}/feedback`.

---

### 4.6 Feature 6: Queue-Tail Ambient Bridge & ETA Gap Handling
* **Description:** Manages scenarios where primary audio content finishes while delivery transit remains active ($ETA > 0$).
* **Business Logic:** When primary track playback ends and the order state is neither `doorstep` nor `delivered`, the SDK transitions into a **Lo-Fi Ambient Fade** or surfaces a 2-minute micro-trivia card to maintain background continuity.

### 4.7 Feature 7: Offline Resilience & Secure Audio Pre-Caching
* **Description:** Prevents stuttering and audio loss when the customer enters connectivity dead zones (elevators, apartment basements).
* **Mechanism:** Upon `order_created` webhook ingestion, the client SDK pre-caches the top 3 audio candidate streams into sandboxed local storage (`IndexedDB` / mobile sandbox) using low-bitrate AAC/Opus formats.

### 4.8 Feature 8: Dynamic Ambient Theming & Driver High-Glare Ergonomics
* **Description:** The Driver Terminal dynamically adapts contrast based on solar time and device ambient light sensors (`AmbientLightSensor` and OS color-scheme preferences).
* **Manual Override:** Drivers can tap the header theme button to cycle between **Auto Theme (Ambient-Synced)**, **Day Mode (Forced High-Contrast)**, and **Night Mode (Dark OLED)**.

---

## 5. End-to-End Visual Workflow & Component Markup Matrix

| Lifecycle Step | Window / Trigger | Customer App Interface State | Driver Terminal State | System Event / Action |
| :--- | :--- | :--- | :--- | :--- |
| **Step 1: Preparation** | 0 – 10 Mins | • Order status: Cooking<br>• Hero card: "Play Now" CTA<br>• Initial ETA displayed | • Order assigned notification<br>• Restaurant pickup navigation<br>• Meal prep countdown timer | Webhook: `order_created`<br>Calculates initial time-budget. |
| **Step 2: In-Transit** | 10 – 30 Mins | • Active scooter map pin<br>• Floating audio player active<br>• Background audio streaming | • Turn-by-turn navigation HUD<br>• Customer gate landmark photo<br>• Localized drop instructions | Telemetry: GPS Polling<br>Syncs rider coordinates to map. |
| **Step 3: Slippage / Delay** | Dynamic ($+10\text{m}$) | • Red status: Traffic Delay<br>• Bonus track auto-appended<br>• ETA counter incremented | • Congestion alert banner<br>• Dynamic re-route suggestion<br>• Delivery incentive preserved | Webhook: `eta_updated`<br>Appends companion track. |
| **Step 4: Doorstep Arrival** | Geofence ($<50\text{m}$) | • Audio volume ducked to 10%<br>• 3D Knocking HUD surfaces<br>• Double-knock vibration fired | • Arrival confirmation trigger<br>• Active caution badges rendered<br>• Direct 1-tap call button | Geofence: Proximity Breach<br>Executes audio ducking sequence. |
| **Step 5: Fulfillment** | Mark Delivered | • Audio playback concludes<br>• 1-Tap PWS modal displayed<br>• Order marked completed | • Delivery completed screen<br>• Itemized payout summary<br>• Instant wallet settlement | Webhook: `delivered`<br>Logs feedback & comment idempotently. |

---

## 6. Non-Functional Requirements (NFRs)

* **Performance & Latency:** The composite experience endpoint (`GET /v1/orders/{orderId}/experience`) must respond within $\le 300\text{ ms}$ at p95 under standard mobile network conditions.
* **Bundle Footprint:** The embedded client SDK must not exceed $\le 150\text{ KB}$ gzipped.
* **Fail-Safe & High Availability:** If ME-TIME services fail, the host application must silently fall back to standard map tracking without displaying error dialogs to the user.
* **Security & Privacy:** ME-TIME operates on a zero-PII storage policy[cite: 8, 10]. Customer identifiers are anonymized using salted cryptographic hashes, and exact street coordinates are scrubbed after order completion.

---

## 7. API Contracts & Database Schema Reference

### 7.1 Key REST Endpoints
* `POST /v1/webhooks/order-events`: Ingests real-time events (`order_created`, `eta_updated`, `delivered`).
* `GET /v1/orders/{orderId}/experience`: Returns composite wait payload and time-budgeted content playlists.
* `POST /v1/orders/{orderId}/feedback`: Records single-tap PWS ratings with optional qualitative comments.

### 7.2 Relational Data Schema Entities
* `tenants`: Multi-tenant platform isolation.
* `orders`: Shadow order states, ETAs, and drop-off instruction flags.
* `delay_events`: Audit trail for logistics slippage and plain-language delay explanations.
* `content_items`: Catalog metadata, durations, streaming URLs, and tags.
* `feedback_responses`: Post-order satisfaction scores (`short_fine` vs. `long_frustrating`) and optional `customer_comment` text.
