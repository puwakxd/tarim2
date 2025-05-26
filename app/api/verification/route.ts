import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { code, applicationId } = body

    if (!code || !applicationId) {
      return NextResponse.json({ error: "Doğrulama kodu ve başvuru ID gerekli" }, { status: 400 })
    }

    if (code.length !== 6) {
      return NextResponse.json({ error: "Doğrulama kodu 6 haneli olmalıdır" }, { status: 400 })
    }

    // Backend URL'lerini kontrol et
    const BACKEND_URL = process.env.BACKEND_URL
    const API_SECRET = process.env.API_SECRET

    // Eğer backend konfigürasyonu varsa dene
    if (BACKEND_URL && API_SECRET) {
      try {
        console.log("Trying to verify with backend:", BACKEND_URL)

        const response = await fetch(`${BACKEND_URL}/api/sms/verify`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_SECRET}`,
          },
          body: JSON.stringify({
            code,
            applicationId,
          }),
          signal: AbortSignal.timeout(5000),
        })

        if (!response.ok) {
          const error = await response.json()
          return NextResponse.json({ error: error.message || "Doğrulama başarısız" }, { status: 400 })
        }

        const result = await response.json()

        return NextResponse.json({
          success: true,
          message: "Doğrulama başarılı",
          applicationId: result.applicationId,
        })
      } catch (backendError) {
        console.error("Backend verification failed:", backendError)
        // Backend bağlantısı başarısız, mock mode'a geç
      }
    }

    // Mock verification mode
    console.log("Using mock verification mode")

    // Demo için: 123456 kodunu kabul et
    if (code === "123456") {
      console.log("Mock verification successful for:", applicationId)

      return NextResponse.json({
        success: true,
        message: "Doğrulama başarılı (Test Modu)",
        applicationId: applicationId,
        mockMode: true,
      })
    } else {
      return NextResponse.json(
        {
          error: "Geçersiz doğrulama kodu. Test modu için: 123456",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Verification error:", error)
    return NextResponse.json(
      {
        error: "Doğrulama işlemi başarısız. Lütfen tekrar deneyin.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
