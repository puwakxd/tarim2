import { type NextRequest, NextResponse } from "next/server"

// Backend'e gönderilecek veri yapısı
interface ApplicationData {
  firstName: string
  lastName: string
  phone: string
  email: string
  product: string
  timestamp: string
  ip?: string
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { firstName, lastName, phone, email, product, timestamp } = body

    // Validation
    if (!firstName || !lastName || !phone || !email || !product) {
      return NextResponse.json({ error: "Tüm alanlar zorunludur" }, { status: 400 })
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10,11}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({ error: "Geçerli bir telefon numarası girin" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Geçerli bir e-posta adresi girin" }, { status: 400 })
    }

    // Backend'e gönderilecek data
    const applicationData: ApplicationData = {
      firstName,
      lastName,
      phone,
      email,
      product,
      timestamp,
      ip: request.ip || "unknown",
    }

    // Backend URL'lerini kontrol et
    const BACKEND_URL = process.env.BACKEND_URL
    const API_SECRET = process.env.API_SECRET

    // Eğer backend konfigürasyonu varsa dene
    if (BACKEND_URL && API_SECRET) {
      try {
        console.log("Trying to connect to backend:", BACKEND_URL)

        // Backend'e başvuru gönder
        const response = await fetch(`${BACKEND_URL}/api/applications`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_SECRET}`,
          },
          body: JSON.stringify(applicationData),
          // Timeout ekle
          signal: AbortSignal.timeout(5000), // 5 saniye timeout
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.message || "Backend error")
        }

        const result = await response.json()

        // SMS doğrulama kodu gönder
        try {
          const smsResponse = await fetch(`${BACKEND_URL}/api/sms/send-verification`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${API_SECRET}`,
            },
            body: JSON.stringify({
              phone: phone,
              applicationId: result.id,
              firstName: firstName,
            }),
            signal: AbortSignal.timeout(5000),
          })

          if (!smsResponse.ok) {
            console.error("SMS sending failed")
          }
        } catch (smsError) {
          console.error("SMS error:", smsError)
          // SMS hatası olsa bile devam et
        }

        return NextResponse.json({
          success: true,
          message: "Başvuru kaydedildi ve doğrulama kodu gönderildi",
          applicationId: result.id,
          data: {
            firstName,
            lastName,
            email,
            product,
          },
        })
      } catch (backendError) {
        console.error("Backend connection failed:", backendError)
        // Backend bağlantısı başarısız, mock mode'a geç
      }
    }

    // Mock mode - Backend yoksa veya bağlantı başarısızsa
    console.log("Using mock mode for application:", applicationData)

    const mockApplicationId = `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Mock başvuru verilerini console'a yazdır (geliştirme için)
    console.log("Mock Application Created:", {
      id: mockApplicationId,
      ...applicationData,
      status: "pending_verification",
      createdAt: new Date().toISOString(),
    })

    // Simulated delay (gerçek API gibi)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Başvuru kaydedildi (Test Modu) - Doğrulama kodu: 123456",
      applicationId: mockApplicationId,
      data: {
        firstName,
        lastName,
        email,
        product,
      },
      mockMode: true,
    })
  } catch (error) {
    console.error("Application submission error:", error)
    return NextResponse.json(
      {
        error: "Başvuru gönderilemedi. Lütfen tekrar deneyin.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
