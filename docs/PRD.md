# Product Requirements Document (PRD)

**Title:** ME-TIME™ — The Ambient Post-Order Experience Engine
**Subtitle:** Transforming Delivery Wait Times into Time-Budgeted Personal Leisure & Screen-Off Content  
**Document Version:** 1.0-Enterprise
**Document Owner:** Nithish — Product Lead
**Target Host Platforms:** Swiggy, Zomato, Uber Eats, DoorDash
**Status:** Ready for Engineering & Pilot Integration  
  

---

## 1. Executive Summary & Problem Definition

### 1.1 Executive Summary
**ME-TIME™** is an ambient post-order experience engine embedded directly into on-demand food delivery platforms. When a consumer places an order, they enter an unmanaged waiting period of **20 to 45 minutes**. Today, delivery platforms treat this interval as a passive, anxiety-inducing map view. 

ME-TIME computes the live available time budget ($\text{Time Budget} = \text{Live ETA} - \text{Current Time}$) and delivers personalized, screen-off audio sessions, micro-podcasts, and industry briefs that wrap up automatically the moment the delivery partner reaches the doorstep. To ensure a seamless handoff, ME-TIME also provides delivery partners with a localized fulfillment terminal that auto-translates checkout instructions and landmark photos in real time.

### 1.2 Problem Statement, Behavioral Impact & Ecosystem Data
#### 1.2.1 Real-World Data & Behavioral Telemetry

POST-ORDER USER ATTENTION DISTRIBUTION (20–45 MIN WAIT WINDOW)
┌─────────────────────────────────────────────────────────────────────────────┐
│ [████████████████████████████████] Low-Value Doom-Scrolling (58%)          │
│ [████████████████████] Anxious App Switching & Map Checking (23%)           │
│ [████████] Fragmented / Distracted Tasks (16%)                              │
│ [██] Intentional Rest / Prime Leisure (3%)                                  │
└─────────────────────────────────────────────────────────────────────────────┘

DELIVERY LIFECYCLE TELEMETRY & MULTI-SIDED FRICTION CORRELATION
┌──────────────────────────┬──────────────┬────────────────────────┬─────────────────────────┐
│ Lifecycle Stage          │ Window (Avg) │ User Map Check Rate    │ Key Friction / Failure  │
├──────────────────────────┼──────────────┼────────────────────────┼─────────────────────────┤
│ 1. Kitchen Preparation   │ 0 – 10 Mins  │ 1.2 Opens              │ "Why is food stagnant?" │
│ 2. In-Transit Corridor   │ 10 – 30 Mins │ 4.6 Compulsive Opens   │ Peak Anxiety & Doomloop │
│ 3. Logistics Slippage    │ +8 – 15 Mins │ Continuous Staring     │ WISMO Support Tickets   │
│ 4. Doorstep Final-Mile   │ Last 3 Mins  │ Frantic Phone Grabbing │ Language & Gate Blocks  │
└──────────────────────────┴──────────────┴────────────────────────┴─────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                   QUANTIFIED POST-ORDER FRICTION METRICS                    │
├─────────────────────┬─────────────────────┬─────────────────────┬───────────┤
│ 📱 81%              │ 🎫 62%              │ ⭐ 1-Star           │ 📞 0.38    │
│ TRACKING ANXIETY    │ SUPPORT TICKETS     │ RATING SKEW         │ CALLS/ORD │
├─────────────────────┼─────────────────────┼─────────────────────┼───────────┤
│ Active users check  │ Inbound live chat   │ Negative ratings    │ Friction  │
│ tracking maps 2–5+  │ escalations caused  │ blamed on food/chef │ calls per │
│ times due to silent │ by uncommunicated   │ caused purely by    │ order due │
│ ETA fluctuations.   │ dynamic delays.     │ wait perception.    │ to gates. │
└─────────────────────┴─────────────────────┴─────────────────────┴───────────┘

#### 1.2.2 Categorized Problem Breakdown & 360° Ecosystem Ripple Effects

┌─────────────────────────────────────────────────────────────────────────────┐
│                    THE 5 POST-ORDER SYSTEMIC FAILURES                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. Temporal Uncertainty & Tracking Anxiety (The "Dead Wait" Window)         │
│ 2. Unproductive Multitasking & Attention Fragmentation (Doom-Scrolling)     │
│ 3. Logistics Slippage & Unexplained Delay Escalation (WISMO Surge)          │
│ 4. Final-Mile Handoff, Linguistic & Safety Friction                         │
│ 5. Feedback Blending & Rating Contamination (The PWS Blind Spot)            │
└─────────────────────────────────────────────────────────────────────────────┘

### 1. Temporal Uncertainty & Compulsive Map Tracking (The "Dead Wait")

* **Problem Statement:** When an order is confirmed, users enter an unmanaged 20–45 minute waiting window. Dynamic ETAs fluctuate without granular context (kitchen vs. traffic vs. rider dispatch), triggering temporal anxiety and compulsive screen monitoring.

* **Behavioral Impact Analysis:**
  * **Compulsive Refresh Loop:** Over 81% of consumers check active tracking screens 2 to 5+ times per order.
  * **Cognitive Fragmentation:** Users cannot enter deep work or sustained relaxation because they must continuously anticipate an unpredictable delivery arrival.

* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Suffer acute anticipatory stress and psychological time dilation (anxious waiting feels 1.5x longer than actual elapsed time).
  * **Delivery Partners / Driver App:** Receive impatient customer chat pings and premature calls while navigating heavy traffic.
  * **Restaurant Reputation:** Customers assume the restaurant is taking too long to prepare their food if the tracking pin lingers at the kitchen, damaging kitchen goodwill.

### 2. Attention Fragmentation & Unproductive Multitasking

* **Problem Statement:** During the delivery wait, 94% of users multitask, but delivery platforms offer zero structured waiting utilities. Consequently, 58% fall into shallow social media doom-scrolling, while only 3% engage in intentional rest or productive focus.

* **Behavioral Impact Analysis:**
  * **Subconscious Negativity:** Users emerge from a 30-minute doom-scrolling session feeling mentally drained and transfer that negative sentiment to the delivery experience.
  * **Missed State Transitions:** Engrossed in disparate apps, users miss notification pings when the driver arrives at their entrance.

* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Experience post-wait dissatisfaction and regret over wasted time during lunch breaks or evening unwind hours.
  * **Delivery Partners / Driver App:** Encounter extended doorstep dwell times ($>3\text{ minutes}$) waiting outside for distracted customers to respond to arrival alerts.
  * **Restaurant Reputation:** Freshly prepared hot meals (crispy fries, thin-crust pizza) lose heat and texture while waiting at the door, leading to unfair taste complaints.

### 3. Logistics Slippage & Unexplained Delay Escalation

* **Problem Statement:** Operational bottlenecks—such as kitchen rushes, road congestion, or monsoon downpours—inevitably cause $+10\text{ to }15\text{-minute}$ delivery delays[cite: 1]. Existing platforms update ETAs silently without proactive explanations or engaging context.

* **Behavioral Impact Analysis:**
  * **WISMO ("Where Is My Order?") Ticket Surge:** Over 62% of inbound live customer support tickets are triggered by unexplained ETA shifts rather than actual transit cancellations.
  * **Churn & Cancellation Threats:** Customers perceive uncommunicated delays as systemic platform neglect, escalating to refund demands and chargeback disputes.

* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Feel helpless and unvalued, turning a routine meal order into a stressful dispute.
  * **Delivery Partners / Driver App:** Face unearned hostility and low customer ratings upon delivery, despite navigating dangerous weather or heavy traffic hazards[cite: 1].
  * **Restaurant Reputation:** Receives direct 1-star reviews on social media for "slow preparation," even when the delay was purely road congestion.

### 4. Final-Mile Handoff, Linguistic & Safety Friction

* **Problem Statement:** The final 50–100 meters of fulfillment suffer from a breakdown in communication[cite: 1]. Non-English-speaking delivery partners struggle to decipher complex English checkout notes or gate instructions, while unannounced arrivals interrupt remote work meetings or trigger barking pets.

* **Behavioral Impact Analysis:**
  * **Repetitive Phone Calls:** Over 34% of negative delivery reviews cite delivery partners calling 2–3 times from the entrance gate.
  * **Panic & Disruption:** Sudden doorbells or loud knocking disrupt infant sleep, family quiet hours, or virtual work calls.

* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Suffer meeting disruptions, domestic friction, and agitation at the exact moment of meal handover.
  * **Delivery Partners / Driver App:** Suffer wasted vehicle fuel, missed delivery incentives (SLAs), and physical safety risks (e.g., unrestrained guard dogs or hostile building security)[cite: 1].
  * **Restaurant Reputation:** Negative doorstep friction leaves a sour final impression that ruins the overall dining and brand experience.

### 5. Feedback Blending & Rating Contamination (The PWS Blind Spot)

* **Problem Statement:** Standard post-delivery 5-star rating prompts ask a single blended question: *"How was your order?"* This conflates **kitchen food taste**, **rider transit conduct**, and **wait-time perception** into one contaminated score.

* **Behavioral Impact Analysis:**
  * **Emotional Rating Skew:** A customer who endured an anxious, unmanaged 40-minute wait will often award 1 or 2 stars to a meal cooked to culinary perfection.
  * **Zero Root-Cause Isolation:** Product and operations teams cannot distinguish whether poor ratings stem from kitchen quality, delivery routing errors, or pure wait perception.

* **Multi-Sided Ecosystem Impact:**
  * **End Users:** Have no dedicated, 1-tap outlet to evaluate wait perception without penalizing innocent restaurants or riders[cite: 1, 2].
  * **Delivery Partners / Driver App:** Driver payout incentives and leaderboard ranks are penalized unfairly by 1-star reviews driven by wait-time frustration[cite: 1, 2].
  * **Restaurant Reputation:** Restaurant search rankings, customer trust badges, and platform commission tiers suffer severe drops due to delivery-phase delays beyond the kitchen's control.

#### 1.2.3 Real-World Scenario Impact Matrix

| Scenario & User Context | Trigger Event | Status Quo (Without ME-TIME) | Multi-Sided Adverse Impact | ME-TIME Platform Resolution |
| :--- | :--- | :--- | :--- | :--- |
| **WFH Lunch Rush**<br>*(Focused Tech Worker)* | Order placed between virtual meetings. | Checks map 4+ times; keeps one eye on phone screen. | **User:** Distracted from meetings.<br>**Driver:** Ignored notifications.<br>**Restaurant:** Food cools at door. | **1-Tap Tech Audio Session:** Screen-off session matched to ETA; auto-finishes on arrival. |
| **Monsoon Traffic Corridor**<br>*(Evening Dinner)* | Sudden heavy rain causes $+12\text{m}$ delay. | User repeatedly refreshes map, escalating to support chat. | **User:** High anxiety & churn risk.<br>**Driver:** Hostile customer drop.<br>**Restaurant:** Unfair 1-star review. | **Dynamic Auto-Append:** Reframes delay by auto-queuing companion content with context. |
| **Late-Night Home Delivery**<br>*(Parent / Pet Owner)* | Delivery partner reaches apartment entrance. | Loud doorbell rings; dog barks, waking infant child. | **User:** 1-Star review: "Woke baby."<br>**Driver:** Rating penalized.<br>**Restaurant:** Brand goodwill lost. | **Audio-Ducked 3D Knock:** Media lowers to 10% with localized silent drop instructions. |
| **Gated Community Access**<br>*(Regional Driver)* | Driver unable to read English checkout notes. | Halts at main gate and places multiple phone calls. | **User:** Spammed with calls.<br>**Driver:** Lost delivery bonus.<br>**Restaurant:** Cold food complaint. | **Localized Landmark Card:** Renders gate notes and entrance photos directly in Tamil / Hindi. |
| **Post-Delivery Survey**<br>*(All Orders)* | Order marked completed. | Generic 5-star survey blends food, speed, and driver conduct. | **User:** No wait-time outlet.<br>**Driver:** Blamed for delays.<br>**Restaurant:** Unfairly down-ranked. | **1-Tap PWS Feedback:** Captures Perceived Wait Satisfaction score (`short_fine` vs. `long_frustrating`). |

* **Tracking Fatigue & Anxiety:** Over 81% of food delivery users check their active order tracking screen 2 to 5+ times per order. This behavior is driven by uncertainty over erratic ETA fluctuations rather than the absolute duration.
* **Unproductive Multitasking:** While 94% of users multitask while waiting for food, 58% fall into shallow social media scrolling, and only 3% engage in intentional rest or productive focus.
* **Final-Mile Handoff Friction:** Surprise doorbells disrupting work meetings, barking pets, and language barriers between customers and delivery partners cause failed drops and unnecessary phone calls.

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