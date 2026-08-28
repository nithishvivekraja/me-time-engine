-- ============================================================================
-- ME-TIME™ Relational Database Schema (PostgreSQL DDL)
-- Version: 2.0 (Multi-Tenant, Dynamic Delay & Progressive Feedback Supported)
-- ============================================================================

-- 1. Tenants Table (Multi-Tenant Isolation)
CREATE TABLE IF NOT EXISTS tenants (
    tenant_id VARCHAR(32) PRIMARY KEY,
    tenant_name VARCHAR(100) NOT NULL,
    vertical VARCHAR(50) NOT NULL, -- 'food_delivery', 'ride_hailing', 'quick_commerce'
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tenant Configuration Table
CREATE TABLE IF NOT EXISTS tenant_config (
    config_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    tenant_id VARCHAR(32) NOT NULL UNIQUE REFERENCES tenants(tenant_id) ON DELETE CASCADE,
    eta_slippage_threshold_minutes INT NOT NULL DEFAULT 10,
    proximity_threshold_meters INT NOT NULL DEFAULT 50,
    primary_locales VARCHAR(50)[] NOT NULL DEFAULT '{"en","ta","hi"}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Shadow Orders Table
CREATE TABLE IF NOT EXISTS orders (
    order_id VARCHAR(32) PRIMARY KEY,
    tenant_id VARCHAR(32) NOT NULL REFERENCES tenants(tenant_id),
    original_eta_minutes INT NOT NULL,
    current_eta_minutes INT NOT NULL,
    order_status VARCHAR(20) NOT NULL DEFAULT 'cooking', -- 'cooking', 'in_transit', 'doorstep', 'delivered'
    drop_instruction_flag VARCHAR(20) NOT NULL DEFAULT 'normal', -- 'normal', 'dog', 'gate', 'quiet'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Delay Events Audit Table
CREATE TABLE IF NOT EXISTS delay_events (
    event_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    order_id VARCHAR(32) NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    slippage_minutes INT NOT NULL,
    reason_text TEXT NOT NULL,
    companion_track_id VARCHAR(32),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Content Catalog Table
CREATE TABLE IF NOT EXISTS content_items (
    content_id VARCHAR(32) PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    provider VARCHAR(50) NOT NULL,
    category VARCHAR(30) NOT NULL, -- 'podcasts', 'music', 'news', 'games'
    duration_seconds INT NOT NULL,
    stream_url TEXT NOT NULL,
    is_safe_default BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. PWS Feedback & Qualitative Comment Table
CREATE TABLE IF NOT EXISTS feedback_responses (
    feedback_id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    order_id VARCHAR(32) NOT NULL UNIQUE REFERENCES orders(order_id) ON DELETE CASCADE,
    pws_rating VARCHAR(20) NOT NULL, -- 'short_fine', 'long_frustrating', 'no_response'
    customer_comment TEXT,            -- Optional qualitative verbatim from progressive disclosure
    response_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ----------------------------------------------------------------------------
-- Indexes for Performance SLAs (≤300ms p95 Read Budget)
-- ----------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_orders_tenant_status ON orders(tenant_id, order_status);
CREATE INDEX IF NOT EXISTS idx_content_category_dur ON content_items(category, duration_seconds);
CREATE INDEX IF NOT EXISTS idx_feedback_rating ON feedback_responses(pws_rating);