"use client"

import { Phone, Mail, MapPin, Wheat } from "lucide-react"

interface FooterProps {
  onNavigate: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Wheat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold">Tarım Kredi</h4>
                <p className="text-sm text-gray-400">Kooperatifleri</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Türk tarımının güvenilir ortağı olarak 70 yılı aşkın süredir hizmet veriyoruz.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Kurumsal</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("kurumsal")}>
                  Hakkımızda
                </button>
              </li>
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("kurumsal")}>
                  Misyon & Vizyon
                </button>
              </li>
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("kurumsal")}>
                  Yönetim
                </button>
              </li>
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("kurumsal")}>
                  Tarihçe
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Hizmetler</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("urunler")}>
                  Tarımsal Krediler
                </button>
              </li>
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("urunler")}>
                  Tarım Sigortası
                </button>
              </li>
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("urunler")}>
                  Tarımsal Girdi
                </button>
              </li>
              <li>
                <button className="hover:text-white text-left" onClick={() => onNavigate("urunler")}>
                  Pazarlama
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">İletişim</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                444 1 TKK
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@tarimkredi.org.tr
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Ankara, Türkiye
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Tarım Kredi Kooperatifleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
