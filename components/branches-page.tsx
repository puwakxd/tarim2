"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, MapPin, Phone, Clock, Navigation } from "lucide-react"

interface BranchesPageProps {
  onNavigate: (page: string) => void
}

export default function BranchesPage({ onNavigate }: BranchesPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("Tümü")

  const cities = ["Tümü", "Ankara", "İstanbul", "İzmir", "Antalya", "Bursa", "Adana", "Konya"]

  const branches = [
    {
      id: 1,
      name: "Ankara Merkez Şubesi",
      city: "Ankara",
      district: "Çankaya",
      address: "Atatürk Bulvarı No: 123, Çankaya/Ankara",
      phone: "0312 123 45 67",
      hours: "08:30 - 17:00",
      services: ["Kredi", "Sigorta", "Girdi"],
      manager: "Ahmet Yılmaz",
    },
    {
      id: 2,
      name: "İstanbul Anadolu Şubesi",
      city: "İstanbul",
      district: "Kadıköy",
      address: "Bağdat Caddesi No: 456, Kadıköy/İstanbul",
      phone: "0216 234 56 78",
      hours: "08:30 - 17:00",
      services: ["Kredi", "Sigorta"],
      manager: "Fatma Demir",
    },
    {
      id: 3,
      name: "İzmir Konak Şubesi",
      city: "İzmir",
      district: "Konak",
      address: "Cumhuriyet Bulvarı No: 789, Konak/İzmir",
      phone: "0232 345 67 89",
      hours: "08:30 - 17:00",
      services: ["Kredi", "Girdi", "Pazarlama"],
      manager: "Mehmet Kaya",
    },
    {
      id: 4,
      name: "Antalya Merkez Şubesi",
      city: "Antalya",
      district: "Muratpaşa",
      address: "Atatürk Caddesi No: 321, Muratpaşa/Antalya",
      phone: "0242 456 78 90",
      hours: "08:30 - 17:00",
      services: ["Kredi", "Sigorta", "Girdi"],
      manager: "Ayşe Özkan",
    },
    {
      id: 5,
      name: "Bursa Nilüfer Şubesi",
      city: "Bursa",
      district: "Nilüfer",
      address: "Özlüce Mahallesi No: 654, Nilüfer/Bursa",
      phone: "0224 567 89 01",
      hours: "08:30 - 17:00",
      services: ["Kredi", "Pazarlama"],
      manager: "Mustafa Çelik",
    },
    {
      id: 6,
      name: "Konya Selçuklu Şubesi",
      city: "Konya",
      district: "Selçuklu",
      address: "Meram Yolu No: 987, Selçuklu/Konya",
      phone: "0332 678 90 12",
      hours: "08:30 - 17:00",
      services: ["Kredi", "Sigorta", "Girdi", "Pazarlama"],
      manager: "Zeynep Arslan",
    },
  ]

  const filteredBranches = branches.filter((branch) => {
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.district.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCity = selectedCity === "Tümü" || branch.city === selectedCity
    return matchesSearch && matchesCity
  })

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Şubelerimiz</h1>
            <p className="text-xl text-green-100 mb-8">
              81 ilde 850'den fazla şubemizle size en yakın hizmeti sunuyoruz
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Şube, şehir veya ilçe ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <Button
                    key={city}
                    variant={selectedCity === city ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCity(city)}
                    className={selectedCity === city ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredBranches.length} şube bulundu
                {searchTerm && ` "${searchTerm}" için`}
                {selectedCity !== "Tümü" && ` ${selectedCity} ilinde`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBranches.map((branch) => (
                <Card key={branch.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{branch.name}</CardTitle>
                        <CardDescription className="text-green-600 font-medium">
                          {branch.city} / {branch.district}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{branch.city}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{branch.address}</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{branch.phone}</span>
                    </div>

                    {/* Hours */}
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{branch.hours}</span>
                    </div>

                    {/* Manager */}
                    <div className="text-sm">
                      <span className="text-gray-500">Şube Müdürü: </span>
                      <span className="font-medium">{branch.manager}</span>
                    </div>

                    {/* Services */}
                    <div>
                      <div className="text-sm text-gray-500 mb-2">Hizmetler:</div>
                      <div className="flex flex-wrap gap-1">
                        {branch.services.map((service) => (
                          <Badge key={service} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                        <Navigation className="h-4 w-4 mr-1" />
                        Yol Tarifi
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="h-4 w-4 mr-1" />
                        Ara
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredBranches.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <MapPin className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Şube bulunamadı</h3>
                <p className="text-gray-600 mb-4">
                  Arama kriterlerinize uygun şube bulunamadı. Lütfen farklı arama terimleri deneyin.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCity("Tümü")
                  }}
                >
                  Filtreleri Temizle
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Harita Üzerinde Görüntüle</h3>
            <p className="text-gray-600 mb-8">
              Şubelerimizi harita üzerinde görüntüleyerek size en yakın olanı bulabilirsiniz
            </p>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Harita entegrasyonu yakında eklenecek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
