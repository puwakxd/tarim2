-- Backend için veritabanı şeması

CREATE TABLE applications (
    id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    product VARCHAR(255) NOT NULL,
    status ENUM('pending_verification', 'verified', 'approved', 'rejected') DEFAULT 'pending_verification',
    ip_address VARCHAR(45),
    verification_code VARCHAR(6),
    verification_code_expiry DATETIME,
    verified_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_phone (phone),
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
);

-- SMS log tablosu
CREATE TABLE sms_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id VARCHAR(36),
    phone VARCHAR(20) NOT NULL,
    message TEXT,
    status ENUM('sent', 'failed', 'delivered') DEFAULT 'sent',
    provider_response TEXT,
    sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (application_id) REFERENCES applications(id),
    INDEX idx_phone (phone),
    INDEX idx_application_id (application_id)
);
