import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
  Activity, Users, Clock, AlertTriangle, ShieldCheck,
  TrendingUp, Headphones, Volume2, PhoneCall, RefreshCw, Layers
} from 'lucide-react';

const COLORS = ['#0E7C7B', '#0284C7', '#D97706', '#10B981', '#E11D48', '#8B5CF6'];

export default function MeTimeAnalyticsDashboard() {
  const [selectedTenant, setSelectedTenant] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');
  const [liveReqCount, setLiveReqCount] = useState(1842);

  // Live request simulation ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveReqCount(prev => 1800 + Math.floor(Math.random() * 95));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  // Multi-tenant metrics dataset
  const tenantData = {
    all: {
      name: 'All Connected Host Platforms',
      pws: '76.4%',
      pwsChange: '+44.4%',
      refreshes: '1.8 / ord',
      calls: '0.12 / ord',
      slaLatency: '138 ms',
      activeSessions: '24,819',
      wismoDeflection: '82.4%',
      audioConversion: 68,
      doomScroll: 22,
      mapStaring: 10,
      dwellTime: '1.4 min',
      ttsAdoption: '54.2%'
    },
    food: {
      name: 'Food & Grocery Delivery Platforms',
      pws: '78.1%',
      pwsChange: '+46.1%',
      refreshes: '1.6 / ord',
      calls: '0.09 / ord',
      slaLatency: '124 ms',
      activeSessions: '18,450',
      wismoDeflection: '86.1%',
      audioConversion: 71,
      doomScroll: 19,
      mapStaring: 10,
      dwellTime: '1.2 min',
      ttsAdoption: '58.0%'
    },
    ride: {
      name: 'Ride-Hailing & Transit Platforms',
      pws: '73.2%',
      pwsChange: '+41.2%',
      refreshes: '2.1 / ord',
      calls: '0.16 / ord',
      slaLatency: '156 ms',
      activeSessions: '6,369',
      wismoDeflection: '77.8%',
      audioConversion: 62,
      doomScroll: 26,
      mapStaring: 12,
      dwellTime: '1.8 min',
      ttsAdoption: '48.5%'
    }
  };

  const current = tenantData[selectedTenant];

  // Attention transition data
  const attentionData = [
    { name: 'Intentional Audio Leisure', baseline: 3, target: current.audioConversion },
    { name: 'Social Media Doom-Scrolling', baseline: 58, target: current.doomScroll },
    { name: 'Anxious Map Tracking', baseline: 23, target: current.mapStaring },
    { name: 'App Switching / Other', baseline: 16, target: 100 - (current.audioConversion + current.doomScroll + current.mapStaring) }
  ];

  // 30-Day PWS trend vs map refresh rate
  const telemetryTrendData = [
    { day: 'Day 1', pws: 32.0, refreshes: 4.8, calls: 0.38 },
    { day: 'Day 5', pws: 44.5, refreshes: 3.9, calls: 0.32 },
    { day: 'Day 10', pws: 58.0, refreshes: 3.1, calls: 0.25 },
    { day: 'Day 15', pws: 66.2, refreshes: 2.5, calls: 0.20 },
    { day: 'Day 20', pws: 71.8, refreshes: 2.1, calls: 0.16 },
    { day: 'Day 25', pws: 74.9, refreshes: 1.9, calls: 0.13 },
    { day: 'Day 30', pws: parseFloat(current.pws), refreshes: parseFloat(current.refreshes), calls: parseFloat(current.calls) }
  ];

  // Driver linguistics breakdown
  const driverLanguageData = [
    { name: 'தமிழ் (Tamil)', value: 52 },
    { name: 'हिन्दी (Hindi)', value: 31 },
    { name: 'English', value: 17 }
  ];

  return (
    <div style={{ background: '#070B14', minHeight: '100vh', padding: '24px', color: '#F8FAFC', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* HEADER BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', background: '#0F172A', border: '1px solid #1E293B', borderRadius: '20px', padding: '20px 24px', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: '900', color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
            <Activity style={{ color: '#0E7C7B' }} /> ME-TIME™ Enterprise Telemetry &amp; Impact Engine
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '0.84rem', margin: '4px 0 0' }}>
            Live platform telemetry: Perceived Wait Satisfaction (PWS), anxiety reduction, queue adaptation, and SLA tracking.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ background: '#064E3B', color: '#34D399', fontSize: '0.78rem', fontWeight: '800', padding: '6px 14px', borderRadius: '10px', border: '1px solid #059669', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }}></span>
            Ingestion: {liveReqCount} req/s
          </span>
        </div>
      </div>

      {/* PLATFORM VERTICAL SELECTOR */}
      <div style={{ display: 'flex', gap: '8px', background: '#111827', padding: '6px', borderRadius: '14px', border: '1px solid #1E293B', width: 'fit-content', marginBottom: '24px' }}>
        <button
          onClick={() => setSelectedTenant('all')}
          style={{ padding: '8px 16px', borderRadius: '10px', border: 'none', background: selectedTenant === 'all' ? '#0E7C7B' : 'transparent', color: '#FFF', fontWeight: '700', fontSize: '0.78rem', cursor: 'pointer' }}>
          ◆ All Host Platforms
        </button>
        <button
          onClick={() => setSelectedTenant('food')}
          style={{ padding: '8px 16px', borderRadius: '10px', border: 'none', background: selectedTenant === 'food' ? '#0E7C7B' : 'transparent', color: '#FFF', fontWeight: '700', fontSize: '0.78rem', cursor: 'pointer' }}>
          🍔 Food &amp; Grocery Delivery
        </button>
        <button
          onClick={() => setSelectedTenant('ride')}
          style={{ padding: '8px 16px', borderRadius: '10px', border: 'none', background: selectedTenant === 'ride' ? '#0E7C7B' : 'transparent', color: '#FFF', fontWeight: '700', fontSize: '0.78rem', cursor: 'pointer' }}>
          🚗 Ride-Hailing &amp; Transit
        </button>
      </div>

      {/* 5-PILLAR KPI MATRIX */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '18px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>North Star: PWS Rating</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#38BDF8' }}>{current.pws}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#34D399' }}>{current.pwsChange}</div>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>Target: ≥ 75.0% Positive</div>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '18px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>Map Stare Refreshes</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#F8FAFC' }}>{current.refreshes}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#34D399' }}>-62.5%</div>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>Baseline: 4.8 opens / order</div>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '18px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>Doorstep Driver Calls</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#F8FAFC' }}>{current.calls}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#34D399' }}>-68.4%</div>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>Baseline: 0.38 calls / order</div>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '18px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>Delay WISMO Deflection</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#FCD34D' }}>{current.wismoDeflection}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#34D399' }}>Auto-Queued</div>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>+10m delay tickets prevented</div>
        </div>

        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '18px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>p95 Recommendation SLA</div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '1.9rem', fontWeight: '900', color: '#34D399' }}>{current.slaLatency}</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#34D399' }}>PASS</div>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>Budget: ≤ 300 ms SLA</div>
        </div>

      </div>

      {/* CHARTS ROW */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        
        {/* 30-DAY TELEMETRY TREND */}
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '20px', padding: '22px' }}>
          <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#38BDF8', marginBottom: '16px' }}>
            30-Day Evolution: PWS Satisfaction vs Map Refresh Rate
          </h3>
          <div style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer>
              <LineChart data={telemetryTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="day" stroke="#64748B" fontSize={12} />
                <YAxis yAxisId="left" stroke="#38BDF8" fontSize={12} domain={[0, 100]} />
                <YAxis yAxisId="right" orientation="right" stroke="#EF4444" fontSize={12} domain={[0, 6]} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #334155', borderRadius: '8px' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="pws" name="PWS (%)" stroke="#38BDF8" strokeWidth={3} />
                <Line yAxisId="right" type="monotone" dataKey="refreshes" name="Refreshes / Order" stroke="#EF4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ATTENTION RE-ALLOCATION BAR */}
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '20px', padding: '22px' }}>
          <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#38BDF8', marginBottom: '16px' }}>
            Attention Allocation Transition (24-Min Wait Window)
          </h3>
          <div style={{ width: '100%', height: '260px' }}>
            <ResponsiveContainer>
              <BarChart data={attentionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis type="number" stroke="#64748B" fontSize={12} domain={[0, 100]} />
                <YAxis type="category" dataKey="name" stroke="#94A3B8" fontSize={11} width={150} />
                <Tooltip contentStyle={{ background: '#111827', border: '1px solid #334155', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="baseline" name="Pre-ME-TIME Baseline (%)" fill="#475569" radius={[0, 4, 4, 0]} />
                <Bar dataKey="target" name="With ME-TIME (%)" fill="#0E7C7B" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: DRIVER LINGUISTICS & LIVE VERBATIMS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '20px' }}>
        
        {/* DRIVER LINGUISTICS */}
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '20px', padding: '22px' }}>
          <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#38BDF8', marginBottom: '14px' }}>
            Courier Language Distribution &amp; Dwell Time Impact
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ width: '160px', height: '160px' }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={driverLanguageData} dataKey="value" nameKey="name" innerRadius={45} outerRadius={70}>
                    {driverLanguageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>■ <b>தமிழ் (Tamil):</b> 52%</div>
              <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>■ <b>हिन्दी (Hindi):</b> 31%</div>
              <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>■ <b>English:</b> 17%</div>
              <div style={{ borderTop: '1px solid #1E293B', paddingTop: '8px', fontSize: '0.74rem', color: '#34D399' }}>
                Doorstep Dwell Time reduced to <b>{current.dwellTime}</b> (-42% reduction).
              </div>
            </div>
          </div>
        </div>

        {/* LIVE PROGRESSIVE VERBATIMS */}
        <div style={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: '20px', padding: '22px' }}>
          <h3 style={{ fontSize: '0.98rem', fontWeight: '800', color: '#38BDF8', marginBottom: '14px' }}>
            Progressive Disclosure Feedback &amp; NLP Ingestion
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ background: '#111827', border: '1px solid #1E293B', borderRadius: '12px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '800', color: '#34D399', marginBottom: '3px' }}>
                <span>⚡ short_fine (Tech Podcast • 12m)</span>
                <span style={{ color: '#64748B', fontWeight: '600' }}>Just now</span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#CBD5E1', lineHeight: '1.4' }}>
                "The 12-minute AI brief finished right as the driver reached the gate. Didn't check the map once."
              </div>
            </div>

            <div style={{ background: '#111827', border: '1px solid #1E293B', borderRadius: '12px', padding: '12px 14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '800', color: '#F59E0B', marginBottom: '3px' }}>
                <span>⏳ long_frustrating (Traffic Delay +10m)</span>
                <span style={{ color: '#64748B', fontWeight: '600' }}>4 mins ago</span>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#CBD5E1', lineHeight: '1.4' }}>
                "Traffic delayed the order by 10 mins; the bonus track auto-played, but total time was 40 mins."
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}