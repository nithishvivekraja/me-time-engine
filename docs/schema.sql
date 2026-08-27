-- 1. MULTI-TENANT ISOLATION
CREATE TABLE tenants (
    tenant_id VARCHAR(32) PRIMARY KEY,
    tenant_name VARCHAR(120) NOT NULL,
    vertical VARCHAR(40) NOT NULL, -- 'food_delivery', 'quick_commerce'
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SHADOW ORDER STATE ENGINE
CREATE TABLE orders (
    order_id VARCHAR(32) PRIMARY KEY,
    tenant_id VARCHAR(32) REFERENCES tenants(tenant_id),
    customer_id VARCHAR(32) NOT NULL,
    status VARCHAR(20) NOT NULL, -- 'cooking', 'picked_up', 'in_transit', 'delivered'
    original_eta TIMESTAMP WITH TIME ZONE NOT NULL,
    current_eta TIMESTAMP WITH TIME ZONE NOT NULL,
    cuisine_category VARCHAR(40),
    device_type VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
CREATE INDEX idx_orders_tenant_status ON orders(tenant_id, status);

-- 3. LOGISTICS SLIPPAGE & EXPLANATION EVENTS
CREATE TABLE delay_events (
    delay_event_id BIGSERIAL PRIMARY KEY,
    order_id VARCHAR(32) REFERENCES orders(order_id),
    slippage_minutes INT NOT NULL,
    logistics_status_code VARCHAR(40),
    message_text VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. CURATED AMBIENT CONTENT ITEMS
CREATE TABLE content_items (
    content_id VARCHAR(32) PRIMARY KEY,
    type VARCHAR(30) NOT NULL, -- 'podcast', 'music', 'news', 'game'
    title VARCHAR(120) NOT NULL,
    duration_seconds INT NOT NULL,
    provider_name VARCHAR(60) NOT NULL, -- 'Spotify', 'Audible', 'Reuters'
    deep_link VARCHAR(255) NOT NULL,
    category_tags VARCHAR(100),
    active BOOLEAN DEFAULT TRUE
);

-- 5. PERCEIVED WAIT SATISFACTION (PWS) FEEDBACK (IDEMPOTENT)
CREATE TABLE feedback_responses (
    feedback_id BIGSERIAL PRIMARY KEY,
    order_id VARCHAR(32) UNIQUE REFERENCES orders(order_id),
    response_value VARCHAR(20) NOT NULL CHECK (response_value IN ('short_fine', 'long_frustrating', 'no_response')),
    response_timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);