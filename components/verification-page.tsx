"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Shield, Clock, CheckCircle, AlertCircle } from "lucide-react"

interface VerificationPageProps {
  product: string | null
  onBack: () => void
  onComplete: () => void
}

export default function VerificationPage({ product, onBack, onComplete }: VerificationPageProps) {
  const [verificationCode, setVerificationCode] = useState("")
  const [timeLeft, setTimeLeft] = useState(180) // 3 minutes in seconds
  const [isExpired, setIsExpired] = useState(false)
  const [error, setError] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setIsExpired(true)
    }
  }, [timeLeft])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (isExpired) {
      setError("Doğrulama kodu süresi dolmuş. Lütfen yeni kod talep edin.")
      return
    }

    if (verificationCode.length !== 6) {
      setError("Doğrulama kodu 6 haneli olmalıdır")
      return
    }

    setIsVerifying(true)

    // Simulate verification process
    setTimeout(() => {
      setIsVerifying(false)
      // For demo purposes, accept any 6-digit code
      if (verificationCode === "123456" || verificationCode.length === 6) {
        onComplete()
      } else {
        setError("Geçersiz doğrulama kodu. Lütfen tekrar deneyin.")
      }
    }, 2000)
  }

  const handleResendCode = () => {
    setTimeLeft(180)
    setIsExpired(false)
    setError("")
    setVerificationCode("")
    // In real app, this would trigger a new SMS
  }

  const handleCodeChange = (value: string) => {
    // Only allow numbers and limit to 6 digits
    const numericValue = value.replace(/\D/g, "").slice(0, 6)
    setVerificationCode(numericValue)
    if (error) setError("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onBack} className="p-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SMS Doğrulama</h1>
              <p className="text-gray-600">Telefon numaranıza gönderilen kodu girin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Product Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg text-green-700">Başvuru Ürünü</CardTitle>
              <CardDescription className="text-base font-medium">{product}</CardDescription>
            </CardHeader>
          </Card>

          {/* Verification Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Doğrulama Kodu</span>
              </CardTitle>
              <CardDescription>Telefon numaranıza gönderilen 6 haneli doğrulama kodunu girin</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerify} className="space-y-6">
                {/* Timer */}
                <div className="text-center">
                  <div
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      isExpired ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{isExpired ? "Süre Doldu" : formatTime(timeLeft)}</span>
                  </div>
                  {!isExpired && <p className="text-sm text-gray-500 mt-2">Kalan süre</p>}
                </div>

                {/* Code Input */}
                <div>
                  <Label htmlFor="code">Doğrulama Kodu</Label>
                  <Input
                    id="code"
                    type="text"
                    value={verificationCode}
                    onChange={(e) => handleCodeChange(e.target.value)}
                    className={`text-center text-2xl tracking-widest ${error ? "border-red-500" : ""}`}
                    placeholder="000000"
                    maxLength={6}
                    disabled={isExpired}
                  />
                  {error && (
                    <div className="flex items-center space-x-2 mt-2 text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">SMS Gelmedi mi?</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Spam klasörünüzü kontrol edin</li>
                    <li>• Telefon numaranızın doğru olduğundan emin olun</li>
                    <li>• Birkaç dakika bekleyip tekrar deneyin</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={verificationCode.length !== 6 || isExpired || isVerifying}
                  >
                    {isVerifying ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Doğrulanıyor...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Doğrula ve Devam Et</span>
                      </div>
                    )}
                  </Button>

                  {isExpired && (
                    <Button type="button" variant="outline" className="w-full" onClick={handleResendCode}>
                      Yeni Kod Gönder
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Help */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Sorun mu yaşıyorsunuz?{" "}
              <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                Müşteri hizmetleri
              </a>{" "}
              ile iletişime geçin
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
