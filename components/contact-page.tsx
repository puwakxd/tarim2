"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react"

interface ContactPageProps {
  onNavigate: (page: string) => void
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "444 1 TKK (444 1 855)",
      description: "7/24 Müşteri Hizmetleri",
    },
    {
      icon: Mail,
      title: "E-posta",
      value: "info@tarimkredi.org.tr",
      description: "Genel bilgi ve sorularınız için",
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Atatürk Bulvarı No: 123, Çankaya/Ankara",
      description: "Genel Müdürlük",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "08:30 - 17:00",
      description: "Hafta içi (Pazartesi - Cuma)",
    },
  ]

  const departments = [
    { name: "Genel Bilgi", email: "info@tarimkredi.org.tr" },
    { name: "Kredi Başvuruları", email: "kredi@tarimkredi.org.tr" },
    { name: "Sigorta İşlemleri", email: "sigorta@tarimkredi.org.tr" },
    { name: "Teknik Destek", email: "destek@tarimkredi.org.tr" },
    { name: "İnsan Kaynakları", email: "ik@tarimkredi.org.tr" },
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Ad Soyad alanı zorunludur"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta adresi zorunludur"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon numarası zorunludur"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Konu alanı zorunludur"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj alanı zorunludur"
    } else if (formData.message.length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        alert("Mesajınız başarıyla gönderildi!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 2000)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h1>
            <p className="text-xl text-green-100 mb-8">
              Sorularınız için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-1">{info.value}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6" />
                    <span>Bize Yazın</span>
                  </CardTitle>
                  <CardDescription>Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={errors.name ? "border-red-500" : ""}
                        placeholder="Adınız ve soyadınız"
                      />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">E-posta *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className={errors.email ? "border-red-500" : ""}
                          placeholder="ornek@email.com"
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className={errors.phone ? "border-red-500" : ""}
                          placeholder="05XX XXX XX XX"
                        />
                        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Konu *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className={errors.subject ? "border-red-500" : ""}
                        placeholder="Mesajınızın konusu"
                      />
                      {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <Label htmlFor="message">Mesaj *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className={errors.message ? "border-red-500" : ""}
                        placeholder="Mesajınızı buraya yazın..."
                        rows={5}
                      />
                      {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Gönderiliyor...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="h-4 w-4" />
                          <span>Mesaj Gönder</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Departments */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Departmanlar</CardTitle>
                    <CardDescription>Konunuza göre doğru departmanla iletişime geçin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{dept.name}</span>
                          <a href={`mailto:${dept.email}`} className="text-green-600 hover:text-green-700 text-sm">
                            {dept.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Acil Durumlar</CardTitle>
                    <CardDescription>Acil durumlar için 7/24 hizmet veren hatlarımız</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Müşteri Hizmetleri</span>
                        <span className="font-semibold">444 1 TKK</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Teknik Destek</span>
                        <span className="font-semibold">0312 XXX XX XX</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Acil Durum</span>
                        <span className="font-semibold">0312 XXX XX XX</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Genel Müdürlük Konumu</h3>
            <p className="text-gray-600 mb-8">Ankara'daki genel müdürlüğümüzü ziyaret etmek için konum bilgilerimiz</p>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Harita entegrasyonu yakında eklenecek</p>
                <p className="text-sm text-gray-400 mt-2">Atatürk Bulvarı No: 123, Çankaya/Ankara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
