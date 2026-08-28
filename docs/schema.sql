-- =========================================================================
-- ME-TIME™ Relational Database Schema (PostgreSQL DDL)
-- Version: 1.1-Enterprise
-- Target: Shadow Order Lifecycle, Content Caching & PWS Telemetry
-- =========================================================================

CREATE TABLE IF NOT EXISTS tenants (
    tenant_id VARCHAR(32) PRIMARY KEY,
    tenant_name VARCHAR(120) NOT NULL,
    vertical VARCHAR(40) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
    order_id VARCHAR(64) PRIMARY KEY,
    tenant_id VARCHAR(32) REFERENCES tenants(tenant_id),
    customer_hash VARCHAR(128) NOT NULL,
    current_eta_minutes INT NOT NULL,
    status VARCHAR(30) NOT NULL, -- 'cooking', 'picked_up', 'in_transit', 'doorstep', 'delivered'
    recipient_type VARCHAR(20) DEFAULT 'myself', -- 'myself', 'friend', 'family', 'others'
    drop_mode VARCHAR(20) DEFAULT 'normal', -- 'normal', 'dog', 'gate', 'quiet'
    driver_lang VARCHAR(10) DEFAULT 'ta', -- 'ta', 'hi', 'en'
    driver_theme_preference VARCHAR(20) DEFAULT 'auto', -- 'auto', 'day', 'night'
    is_delayed BOOLEAN DEFAULT FALSE,
    delay_minutes INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS delay_events (
    event_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id VARCHAR(64) REFERENCES orders(order_id),
    added_delay_minutes INT NOT NULL,
    reason_code VARCHAR(40) NOT NULL, -- 'traffic_congestion', 'kitchen_backlog', 'weather'
    auto_appended_track_id VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS content_items (
    content_id VARCHAR(64) PRIMARY KEY,
    category VARCHAR(30) NOT NULL, -- 'podcasts', 'music', 'news', 'games'
    title VARCHAR(255) NOT NULL,
    provider VARCHAR(80) NOT NULL,
    duration_minutes INT NOT NULL,
    stream_url TEXT NOT NULL,
    tags TEXT[],
    is_queue_tail BOOLEAN DEFAULT FALSE, -- Identifies ambient transition tracks
    precache_eligible BOOLEAN DEFAULT TRUE, -- Flag for client IndexedDB caching
    locale VARCHAR(10) DEFAULT 'en',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS feedback_responses (
    feedback_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id VARCHAR(64) UNIQUE REFERENCES orders(order_id),
    pws_rating VARCHAR(30) NOT NULL, -- 'short_fine', 'long_frustrating'
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_tenant ON orders(tenant_id);
CREATE INDEX IF NOT EXISTS idx_content_category ON content_items(category, duration_minutes);
CREATE INDEX IF NOT EXISTS idx_feedback_order ON feedback_responses(order_id);