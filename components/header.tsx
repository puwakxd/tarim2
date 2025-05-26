"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, User, Wheat } from "lucide-react"

interface HeaderProps {
  onNavigate: (page: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (page: string) => {
    onNavigate(page)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>444 1 TKK</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@tarimkredi.org.tr</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => handleNavigation("giris")}>
              <User className="h-4 w-4 mr-1" />
              Üye Girişi
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation("home")}>
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <Wheat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-700">Tarım Kredi</h1>
              <p className="text-xs text-gray-500">Kooperatifleri</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-green-600 font-medium" onClick={() => handleNavigation("home")}>
              Ana Sayfa
            </button>
            <button
              className="text-gray-700 hover:text-green-600 font-medium"
              onClick={() => handleNavigation("kurumsal")}
            >
              Kurumsal
            </button>
            <button
              className="text-gray-700 hover:text-green-600 font-medium"
              onClick={() => handleNavigation("urunler")}
            >
              Ürün ve Hizmetler
            </button>
            <button
              className="text-gray-700 hover:text-green-600 font-medium"
              onClick={() => handleNavigation("subeler")}
            >
              Şubeler
            </button>
            <button
              className="text-gray-700 hover:text-green-600 font-medium"
              onClick={() => handleNavigation("haberler")}
            >
              Haberler
            </button>
            <button
              className="text-gray-700 hover:text-green-600 font-medium"
              onClick={() => handleNavigation("iletisim")}
            >
              İletişim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                className="text-left text-gray-700 hover:text-green-600 font-medium"
                onClick={() => handleNavigation("home")}
              >
                Ana Sayfa
              </button>
              <button
                className="text-left text-gray-700 hover:text-green-600 font-medium"
                onClick={() => handleNavigation("kurumsal")}
              >
                Kurumsal
              </button>
              <button
                className="text-left text-gray-700 hover:text-green-600 font-medium"
                onClick={() => handleNavigation("urunler")}
              >
                Ürün ve Hizmetler
              </button>
              <button
                className="text-left text-gray-700 hover:text-green-600 font-medium"
                onClick={() => handleNavigation("subeler")}
              >
                Şubeler
              </button>
              <button
                className="text-left text-gray-700 hover:text-green-600 font-medium"
                onClick={() => handleNavigation("haberler")}
              >
                Haberler
              </button>
              <button
                className="text-left text-gray-700 hover:text-green-600 font-medium"
                onClick={() => handleNavigation("iletisim")}
              >
                İletişim
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
