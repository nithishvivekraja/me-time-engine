import React, { useMemo, useState } from "react";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, ComposedChart,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend, PieChart, Pie, Cell
} from "recharts";

// ---------------------------------------------------------------------------
// ME-TIME Analytics — Internal Platform & Operations Command Center
// Multi-tenant telemetry engine covering North Star (PWS), anxiety reduction,
// order time-budgets, qualitative comment extraction, and API latency SLAs.
// ---------------------------------------------------------------------------

const NAVY = "#0B132B";
const TEAL = "#0E7C7B";
const TEAL_LIGHT = "#E0F2F1";
const GOLD = "#D97706";
const GREY = "#64748B";
const DANGER = "#E11D48";
const GREEN = "#10B981";
const LINE = "#E2E8F0";

const TENANTS = [
  { id: "all", name: "All Integrations", vertical: "Multi-Vertical Overview", icon: "◆" },
  { id: "tn_swiggy_in", name: "Swiggy India", vertical: "Food Delivery", icon: "🍔" },
  { id: "tn_rideco", name: "RideCo", vertical: "Ride Hailing", icon: "🚗" }
];

export default function CompleteEnterpriseDashboard() {
  const [tenantId, setTenantId] = useState("all");
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'mindset' | 'feedback' | 'technical'

  // Synthetic 30-day multi-dimensional telemetry data
  const trendData = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const day = i + 1;
      return {
        date: `Aug ${day}`,
        pws: 52 + Math.min(day * 0.82, 24.4) + (Math.sin(day) * 1.5),
        refreshRate: Math.max(5.2 - (day * 0.11), 1.8) + (Math.cos(day) * 0.1),
        engagement: 22 + (day * 0.72) + (Math.sin(day) * 2),
        callsPerOrder: Math.max(0.38 - (day * 0.009), 0.12),
        latencyP95: 210 + (Math.sin(day) * 25),
        cacheHitRate: 92 + Math.min(day * 0.22, 6.8),
        fallbacks: Math.max(4.2 - (day * 0.1), 0.8),
        abandonment: Math.max(14.2 - (day * 0.28), 6.1)
      };
    });
  }, []);

  // Mindset & Activity Distribution Data (from User Discovery baseline)
  const mindsetDistribution = [
    { name: "Passive Screen Distraction (Social/TV)", value: 58, color: DANGER },
    { name: "Household / Work Tasks", value: 25, color: GOLD },
    { name: "Productive / Intentional Me-Time", value: 14, color: TEAL },
    { name: "Intentional Idle Wait", value: 3, color: GREY }
  ];

  // Feedback Sentiment Drivers
  const feedbackDrivers = [
    { category: "Audio Matched Wait Accurately", shortFine: 82, longFrustrating: 18 },
    { category: "Traffic Delay with Bonus Track", shortFine: 71, longFrustrating: 29 },
    { category: "Silent ETA Slippage (No Track)", shortFine: 24, longFrustrating: 76 },
    { category: "Doorstep 3D Knock Handoff", shortFine: 89, longFrustrating: 11 }
  ];

  // Qualitative Progressive Disclosure Data
  const recentNegativeComments = [
    { orderId: "ord_8841", delay: "+15m (Traffic)", comment: "ETA changed twice while cooking; audio queue ended 5 mins before driver arrived.", tag: "ETA Volatility" },
    { orderId: "ord_9012", delay: "+10m (Kitchen)", comment: "Driver had trouble finding Tower B gate despite landmark photo.", tag: "Navigation / Gate" },
    { orderId: "ord_9144", delay: "+0m (On-Time)", comment: "Felt long because hunger built up; didn't notice the 1-tap instant play button.", tag: "Discovery / Visibility" },
    { orderId: "ord_9320", delay: "+20m (Rain)", comment: "Bonus track auto-extended, but preferred a comedy podcast instead of news brief.", tag: "Content Preference" }
  ];

  const commentThemeClusters = [
    { theme: "ETA Drift / Unannounced Delays", count: 42, pct: "42%" },
    { theme: "Last-Mile Gate / Door Confusion", count: 28, pct: "28%" },
    { theme: "Audio Queue Duration Mismatch", count: 18, pct: "18%" },
    { theme: "Content Genre / Mood Mismatch", count: 12, pct: "12%" }
  ];

  // System Latency & Quality SLAs
  const latencyMetrics = [
    { metric: "p50 Recommendation Latency", value: "142 ms", status: "Optimal" },
    { metric: "p95 Edge API Response", value: "248 ms", status: "Optimal (SLA ≤300ms)" },
    { metric: "p99 Cold-Start Latency", value: "380 ms", status: "Safe Fallback" },
    { metric: "Client Pre-Cache Hit Ratio", value: "98.4%", status: "Optimal" },
    { metric: "Fail-Safe Fallback Invocation", value: "0.8%", status: "Healthy" },
    { metric: "SDK Client Bundle Size", value: "128 KB", status: "Optimal (Budget ≤150KB)" }
  ];

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", background: "#070B14", color: "#F8FAFC", minHeight: "100vh", padding: "24px" }}>
      
      {/* TOP HEADER & TENANT SWITCHER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1E293B", paddingBottom: "18px", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ fontSize: "1.4rem", fontWeight: 900, color: "#38BDF8", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>⚡</span> ME-TIME™ Enterprise Telemetry &amp; Analytics Hub
          </div>
          <div style={{ fontSize: "0.78rem", color: "#94A3B8", marginTop: "4px" }}>
            Real-time telemetry, perceived wait psychology, progressive disclosure comments, and SLA health
          </div>
        </div>

        {/* Tenant Integration Pills */}
        <div style={{ display: "flex", gap: "6px", background: "#111827", padding: "4px", borderRadius: "12px", border: "1px solid #1E293B" }}>
          {TENANTS.map(t => (
            <button
              key={t.id}
              onClick={() => setTenantId(t.id)}
              style={{
                border: "none", borderRadius: "8px", padding: "6px 12px", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer",
                background: tenantId === t.id ? TEAL : "transparent", color: tenantId === t.id ? "#FFF" : "#94A3B8", transition: "all 0.2s"
              }}
            >
              {t.icon} {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* DASHBOARD TAB NAVIGATION */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto" }}>
        {[
          { id: "overview", label: "Executive Overview (North Star & KPIs)" },
          { id: "mindset", label: "Mindset, Anxiety & Time-Budgets" },
          { id: "feedback", label: "PWS Sentiment & Qualitative Feedback" },
          { id: "technical", label: "System Health, Latency & Reliability" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "8px 16px", borderRadius: "10px", border: "1px solid #334155", cursor: "pointer", fontSize: "0.78rem", fontWeight: 700,
              background: activeTab === tab.id ? TEAL : "#0F172A", color: activeTab === tab.id ? "#FFF" : "#94A3B8", whiteSpace: "nowrap"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. EXECUTIVE OVERVIEW TAB */}
      {activeTab === "overview" && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "20px" }}>
            <MetricCard title="Perceived Wait Satisfaction (North Star)" value="76.4%" delta="+44.4% vs 30d baseline" sub="Target: ≥75% (Orders reported 'felt short/fine')" accent={TEAL} />
            <MetricCard title="Tracker Refresh Frequency" value="1.8 / ord" delta="-62.5% reduction" sub="Direct proxy for wait-time anxiety reduction" accent="#38BDF8" />
            <MetricCard title="Content Engagement Rate" value="43.2%" delta="+21.2% stream starts" sub="Active audio engagement during wait window" accent={GOLD} />
            <MetricCard title="In-Wait Driver Inbound Calls" value="0.12 / ord" delta="-68.4% calls" sub="Last-mile proximity handoff efficiency" accent={GREEN} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
            <ChartCard title="North Star: 30-Day Perceived Wait Satisfaction Trend" sub="Percentage of orders where waiting felt short and entertaining">
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="pwsGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={TEAL} stopOpacity={0.4} />
                      <stop offset="100%" stopColor={TEAL} stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="date" stroke="#64748B" fontSize={10} interval={5} />
                  <YAxis stroke="#64748B" fontSize={10} unit="%" domain={[40, 90]} />
                  <Tooltip contentStyle={{ background: NAVY, border: "1px solid #334155" }} />
                  <ReferenceLine y={75} stroke={GOLD} strokeDasharray="3 3" label={{ value: "Target (75%)", fill: GOLD, fontSize: 10 }} />
                  <Area type="monotone" dataKey="pws" stroke={TEAL} strokeWidth={2.5} fill="url(#pwsGrad)" name="PWS %" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Anxiety Reduction: Manual Tracker Refresh Rate" sub="Average refreshes per order (Lower is better)">
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="date" stroke="#64748B" fontSize={10} interval={5} />
                  <YAxis stroke="#64748B" fontSize={10} domain={[1, 6]} />
                  <Tooltip contentStyle={{ background: NAVY, border: "1px solid #334155" }} />
                  <Line type="monotone" dataKey="refreshRate" stroke="#38BDF8" strokeWidth={2.5} dot={false} name="Refreshes / Order" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </>
      )}

      {/* 2. MINDSET & TIME-BUDGETS TAB */}
      {activeTab === "mindset" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <ChartCard title="User Attention & Mindset Allocation (Discovery Baseline)" sub="58% of waiting time is currently wasted on passive doom-scrolling">
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={mindsetDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}>
                  {mindsetDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: NAVY, border: "1px solid #334155" }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "8px", textAlign: "center" }}>
              Red represents dead time converted by ME-TIME into intentional audio leisure
            </div>
          </ChartCard>

          <ChartCard title="Time-Budget Calibration vs Delivery Window" sub="Content duration strictly matched to delivery ETA (Duration ≤ ETA)">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
              <ProgressRow label="15–20 Min Express Wait (Quick Bites)" value="4-Min Briefs + Fast Music" pct={85} color={TEAL} />
              <ProgressRow label="20–35 Min Standard Wait (Dinner Peak)" value="12-Min Tech Podcasts + Ambient" pct={92} color="#38BDF8" />
              <ProgressRow label="35–50 Min Extended / Delayed Wait" value="Bonus Track Auto-Append (+10m)" pct={78} color={GOLD} />
            </div>
          </ChartCard>
        </div>
      )}

      {/* 3. PWS SENTIMENT & QUALITATIVE FEEDBACK TAB */}
      {activeTab === "feedback" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          {/* Top Row: Quantitative Drivers & NLP Clusters */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <ChartCard title="PWS Sentiment Breakdown by Experience Touchpoint" sub="% Positive ('Felt Short') vs % Negative ('Felt Long') across order scenarios">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={feedbackDrivers} layout="vertical" margin={{ left: 30, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis type="number" stroke="#64748B" unit="%" domain={[0, 100]} />
                  <YAxis type="category" dataKey="category" stroke="#94A3B8" fontSize={10} width={130} />
                  <Tooltip contentStyle={{ background: NAVY, border: "1px solid #334155" }} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="shortFine" fill={TEAL} name="Felt Short / Entertaining %" stackId="a" />
                  <Bar dataKey="longFrustrating" fill={DANGER} name="Felt Long / Frustrating %" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Negative Feedback Root-Cause Clusters (NLP Tags)" sub="Categorization extracted from optional customer comments on 'long_frustrating' ratings">
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" }}>
                {commentThemeClusters.map((cluster, i) => (
                  <div key={i} style={{ background: "#111827", border: "1px solid #1E293B", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.75rem", color: "#E2E8F0" }}>{cluster.theme}</span>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: GOLD, background: "#2D2006", padding: "2px 8px", borderRadius: "6px" }}>{cluster.count} mentions ({cluster.pct})</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </div>

          {/* Bottom Row: Raw Qualitative Comment Stream */}
          <ChartCard title="Recent Qualitative Feedback Feed (Progressive Disclosure Stream)" sub="Live open-text explanations captured from negative PWS submissions">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
              {recentNegativeComments.map((item, idx) => (
                <div key={idx} style={{ background: "#111827", border: "1px solid #334155", borderRadius: "10px", padding: "12px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#38BDF8", fontFamily: "Consolas, monospace" }}>{item.orderId}</span>
                      <span style={{ fontSize: "0.65rem", background: "#881337", color: "#FFE4E6", padding: "2px 6px", borderRadius: "4px", fontWeight: 700 }}>{item.delay}</span>
                    </div>
                    <p style={{ fontSize: "0.74rem", color: "#CBD5E1", fontStyle: "italic", lineHeight: 1.35 }}>"{item.comment}"</p>
                  </div>
                  <div style={{ marginTop: "10px", fontSize: "0.65rem", fontWeight: 700, color: TEAL }}>
                    🏷️ Tag: {item.tag}
                  </div>
                </div>
              ))}
            </div>
          </ChartCard>

        </div>
      )}

      {/* 4. TECHNICAL HEALTH & LATENCY TAB */}
      {activeTab === "technical" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <ChartCard title="System Performance & SLA Compliance" sub="Hard telemetry limits guaranteeing zero latency added to host app map first-paint">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "10px" }}>
              {latencyMetrics.map((m, i) => (
                <div key={i} style={{ background: "#111827", border: "1px solid #1E293B", borderRadius: "10px", padding: "10px 12px" }}>
                  <div style={{ fontSize: "0.68rem", color: "#94A3B8" }}>{m.metric}</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#38BDF8", marginTop: "3px" }}>{m.value}</div>
                  <div style={{ fontSize: "0.65rem", color: GREEN, fontWeight: 700, marginTop: "2px" }}>✓ {m.status}</div>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Client-Side Pre-Caching & Offline Resilience" sub="IndexedDB cache hit performance in network dead zones (elevators & basements)">
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="date" stroke="#64748B" fontSize={10} interval={5} />
                <YAxis stroke="#64748B" fontSize={10} unit="%" domain={[85, 100]} />
                <Tooltip contentStyle={{ background: NAVY, border: "1px solid #334155" }} />
                <Area type="monotone" dataKey="cacheHitRate" stroke={GREEN} fill="#064E3B" strokeWidth={2} name="Cache Hit Ratio %" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      )}

    </div>
  );
}

function MetricCard({ title, value, delta, sub, accent }) {
  return (
    <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderTop: `3px solid ${accent}`, borderRadius: "14px", padding: "16px 18px" }}>
      <div style={{ fontSize: "0.68rem", textTransform: "uppercase", fontWeight: 800, color: GREY, letterSpacing: "0.4px" }}>{title}</div>
      <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "#FFF", marginTop: "4px", fontFamily: "Consolas, monospace" }}>{value}</div>
      <div style={{ fontSize: "0.72rem", color: GREEN, fontWeight: 700, marginTop: "4px" }}>{delta}</div>
      <div style={{ fontSize: "0.68rem", color: GREY, marginTop: "2px" }}>{sub}</div>
    </div>
  );
}

function ChartCard({ title, sub, children }) {
  return (
    <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", padding: "18px 20px" }}>
      <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#38BDF8" }}>{title}</div>
      <div style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "2px", marginBottom: "14px" }}>{sub}</div>
      {children}
    </div>
  );
}

function ProgressRow({ label, value, pct, color }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.74rem", fontWeight: 700, marginBottom: "4px" }}>
        <span>{label}</span>
        <span style={{ color }}>{value} ({pct}%)</span>
      </div>
      <div style={{ width: "100%", height: "6px", background: "#1E293B", borderRadius: "3px", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "3px" }}></div>
      </div>
    </div>
  );
}