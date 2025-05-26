"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { User, Lock, Eye, EyeOff, Shield, UserPlus } from "lucide-react"

interface LoginPageProps {
  onNavigate: (page: string) => void
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!loginData.username.trim()) {
      newErrors.username = "Kullanıcı adı zorunludur"
    }

    if (!loginData.password.trim()) {
      newErrors.password = "Şifre zorunludur"
    } else if (loginData.password.length < 6) {
      newErrors.password = "Şifre en az 6 karakter olmalıdır"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsLoading(true)
      // Simulate login process
      setTimeout(() => {
        setIsLoading(false)
        alert("Giriş başarılı!")
        onNavigate("home")
      }, 2000)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setLoginData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Üye Girişi</h1>
              <p className="text-gray-600">Hesabınıza giriş yapın</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Giriş Yap</CardTitle>
                <CardDescription>Üye bilgilerinizle sisteme giriş yapabilirsiniz</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="username">Kullanıcı Adı / TC Kimlik No</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="username"
                        type="text"
                        value={loginData.username}
                        onChange={(e) => handleInputChange("username", e.target.value)}
                        className={`pl-10 ${errors.username ? "border-red-500" : ""}`}
                        placeholder="Kullanıcı adınız veya TC kimlik numaranız"
                      />
                    </div>
                    {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username}</p>}
                  </div>

                  <div>
                    <Label htmlFor="password">Şifre</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className={`pl-10 pr-10 ${errors.password ? "border-red-500" : ""}`}
                        placeholder="Şifreniz"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginData.rememberMe}
                        onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Beni hatırla
                      </Label>
                    </div>
                    <a href="#" className="text-sm text-green-600 hover:text-green-700">
                      Şifremi unuttum
                    </a>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Giriş yapılıyor...</span>
                      </div>
                    ) : (
                      "Giriş Yap"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Register Section */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserPlus className="h-5 w-5" />
                  <span>Üye Değil misiniz?</span>
                </CardTitle>
                <CardDescription>Tarım Kredi Kooperatifleri'ne üye olarak avantajlardan yararlanın</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Güvenli işlemler</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Avantajlı faizler</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>Hızlı başvuru</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span>7/24 destek</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Üye Ol
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Help Section */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">Giriş yapmakta sorun mu yaşıyorsunuz?</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="ghost" size="sm" onClick={() => onNavigate("contact")}>
                  İletişim
                </Button>
                <Button variant="ghost" size="sm">
                  Yardım
                </Button>
                <Button variant="ghost" size="sm">
                  SSS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
