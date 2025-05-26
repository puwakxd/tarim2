import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validation
    const { name, email, phone, subject, message } = body

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: "Tüm alanlar zorunludur" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Geçerli bir e-posta adresi girin" }, { status: 400 })
    }

    // Backend hazır olduğunda bu kısmı aktif et
    const BACKEND_URL = "http://localhost:8000" // Backend URL'in
    const API_SECRET = "your-api-secret" // API secret'ın

    try {
      const response = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_SECRET}`,
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          timestamp: new Date().toISOString(),
          ip: request.ip,
        }),
      })

      if (!response.ok) {
        throw new Error("Backend error")
      }

      const result = await response.json()

      return NextResponse.json({
        success: true,
        message: "Mesajınız başarıyla gönderildi",
        id: result.id,
      })
    } catch (backendError) {
      // Backend yoksa mock response döndür
      console.log("Backend not available, using mock response")

      return NextResponse.json({
        success: true,
        message: "Mesajınız başarıyla gönderildi (Mock)",
        id: `mock_${Date.now()}`,
      })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." }, { status: 500 })
  }
}
