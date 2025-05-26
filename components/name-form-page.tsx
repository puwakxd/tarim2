"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, User, Phone, Mail, AlertCircle, CheckCircle } from "lucide-react"

interface NameFormPageProps {
  product: string | null
  onBack: () => void
  onSubmit: () => void
}

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  product: string
}

export default function NameFormPage({ product, onBack, onSubmit }: NameFormPageProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    product: product || "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    if (product && !formData.product) {
      setFormData((prev) => ({ ...prev, product: product }))
    }
  }, [product, formData.product])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ad alanı zorunludur"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Soyad alanı zorunludur"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon numarası zorunludur"
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Geçerli bir telefon numarası girin"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta adresi zorunludur"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin"
    }

    // Product kontrolü ekle
    const currentProduct = formData.product || product
    if (!currentProduct) {
      newErrors.product = "Ürün seçimi zorunludur"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})
    setSuccessMessage("")

    try {
      // Backend'e veri gönder
      const requestData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone.replace(/\s/g, ""),
        email: formData.email,
        product: formData.product || product,
        timestamp: new Date().toISOString(),
      }

      const response = await fetch("/api/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })

      const result = await response.json()

      if (response.ok) {
        // Başarılı - SMS doğrulama sayfasına git
        setSuccessMessage(result.message)

        // 2 saniye sonra doğrulama sayfasına geç
        setTimeout(() => {
          onSubmit()
        }, 2000)
      } else {
        // Hata durumu
        setErrors({ submit: result.error || "Bir hata oluştu" })
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error)
      setErrors({ submit: "Bağlantı hatası. Lütfen tekrar deneyin." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
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
              <h1 className="text-2xl font-bold text-gray-900">Başvuru Formu</h1>
              <p className="text-gray-600">{product || "Ürün seçimi"} için bilgilerinizi girin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Product Info */}
          {product && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">Seçilen Ürün</CardTitle>
                <CardDescription className="text-base font-medium">{product}</CardDescription>
              </CardHeader>
            </Card>
          )}

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Kişisel Bilgiler</span>
              </CardTitle>
              <CardDescription>
                Başvurunuzu değerlendirebilmemiz için lütfen bilgilerinizi eksiksiz doldurun
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Ad *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={errors.firstName ? "border-red-500" : ""}
                      placeholder="Adınızı girin"
                      disabled={isSubmitting}
                    />
                    {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Soyad *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={errors.lastName ? "border-red-500" : ""}
                      placeholder="Soyadınızı girin"
                      disabled={isSubmitting}
                    />
                    {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Contact Fields */}
                <div>
                  <Label htmlFor="phone" className="flex items-center space-x-1">
                    <Phone className="h-4 w-4" />
                    <span>Telefon Numarası *</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                    placeholder="05XX XXX XX XX"
                    disabled={isSubmitting}
                  />
                  {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                  <p className="text-sm text-gray-500 mt-1">Doğrulama kodu bu numaraya gönderilecektir</p>
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center space-x-1">
                    <Mail className="h-4 w-4" />
                    <span>E-posta Adresi *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                    placeholder="ornek@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Success Message */}
                {successMessage && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-sm text-green-600">{successMessage}</p>
                    </div>
                  </div>
                )}

                {/* Submit Error */}
                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-sm text-red-600">{errors.submit}</p>
                    </div>
                  </div>
                )}

                {/* Info Box */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Bilgilendirme</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Girdiğiniz telefon numarasına SMS doğrulama kodu gönderilecektir</li>
                    <li>• Doğrulama kodu 3 dakika süreyle geçerli olacaktir</li>
                    <li>
                      • Test modunda doğrulama kodu: <strong>123456</strong>
                    </li>
                    <li>• Bilgileriniz güvenli bir şekilde saklanmaktadır</li>
                  </ul>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 py-3"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Gönderiliyor...</span>
                    </div>
                  ) : (
                    "Doğrulama Kodu Gönder"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Yardıma mı ihtiyacınız var?{" "}
              <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                444 1 TKK
              </a>{" "}
              numarasından bizi arayabilirsiniz
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
