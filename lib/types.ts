// Backend entegrasyonu için type definitions

export interface ApplicationRequest {
  firstName: string
  lastName: string
  phone: string
  email: string
  product: string
  timestamp: string
  ip?: string
}

export interface ApplicationResponse {
  success: boolean
  message: string
  applicationId: string
  data: {
    firstName: string
    lastName: string
    email: string
    product: string
  }
}

export interface BackendApplicationData {
  id: string
  firstName: string
  lastName: string
  phone: string
  email: string
  product: string
  status: "pending_verification" | "verified" | "approved" | "rejected"
  createdAt: string
  updatedAt: string
  ip: string
  verificationCode?: string
  verificationCodeExpiry?: string
  verifiedAt?: string
}

export interface SMSVerificationRequest {
  phone: string
  applicationId: string
  firstName: string
}

export interface SMSVerificationResponse {
  success: boolean
  message: string
  code?: string // Sadece test ortamında
}
