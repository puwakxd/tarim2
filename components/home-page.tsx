"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CreditCard, Shield, Wheat, TrendingUp, ChevronRight, Calendar, Phone, MapPin } from "lucide-react"

interface HomePageProps {
  initialStats: any
  initialServices: any
  initialNews: any
  onNavigate: (page: string) => void
  onSelectProduct: (product: string) => void
}

export default function HomePage({
  initialStats,
  initialServices,
  initialNews,
  onNavigate,
  onSelectProduct,
}: HomePageProps) {
  // Icon mapping
  const iconMap = {
    CreditCard,
    Shield,
    Wheat,
    TrendingUp,
  }

  const services = initialServices || [
    {
      id: 1,
      title: "Tarımsal Krediler",
      description: "Çiftçilerimize uygun faizli kredi imkanları",
      icon: "CreditCard",
      color: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      title: "Tarım Sigortası",
      description: "Ürünlerinizi doğal afetlere karşı koruyun",
      icon: "Shield",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      title: "Tarımsal Girdi",
      description: "Kaliteli tohum, gübre ve ilaç tedariki",
      icon: "Wheat",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      id: 4,
      title: "Pazarlama Desteği",
      description: "Ürünlerinizi en iyi fiyatla satın",
      icon: "TrendingUp",
      color: "bg-purple-100 text-purple-700",
    },
  ]

  const news = initialNews || [
    {
      id: 1,
      title: "2025 Yılı Tarımsal Kredi Faiz Oranları Açıklandı",
      summary: "Çiftçilerimiz için avantajlı faiz oranları belirlendi.",
      category: "Duyuru",
      date: "15 Aralık 2024",
    },
    {
      id: 2,
      title: "Kış Buğdayı Ekimi İçin Destek Programı",
      summary: "Kış buğdayı ekimi yapacak üreticilerimize özel destek.",
      category: "Program",
      date: "12 Aralık 2024",
    },
    {
      id: 3,
      title: "Yeni Şube Açılışı - Konya Merkez",
      summary: "Konya Merkez'de yeni şubemiz hizmete açıldı.",
      category: "Haber",
      date: "10 Aralık 2024",
    },
  ]

  const stats = initialStats || {
    memberCount: "1.2M+",
    branchCount: "850+",
    creditVolume: "₺45B",
    provinceCount: "81",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Türk Tarımının
                <span className="block text-green-200">Güvenilir Ortağı</span>
              </h2>
              <p className="text-xl mb-8 text-green-100">
                70 yılı aşkın tecrübemizle çiftçilerimize kredi, sigorta ve tarımsal girdi hizmetleri sunuyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-green-700 hover:bg-green-50"
                  onClick={() => onNavigate("urunler")}
                >
                  Kredi Başvurusu
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700"
                  onClick={() => onNavigate("subeler")}
                >
                  Şube Bul
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&query=turkish farmer in wheat field with modern farming equipment"
                alt="Tarım alanında çiftçi"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.memberCount}</div>
              <div className="text-gray-600">Üye Sayısı</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.branchCount}</div>
              <div className="text-gray-600">Şube</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.creditVolume}</div>
              <div className="text-gray-600">Kredi Hacmi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{stats.provinceCount}</div>
              <div className="text-gray-600">İl Kapsamı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ürün ve Hizmetlerimiz</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Çiftçilerimizin ihtiyaçlarına yönelik kapsamlı çözümler sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || CreditCard
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                    <Button
                      variant="ghost"
                      className="mt-4 p-0 h-auto text-green-600 hover:text-green-700"
                      onClick={() => onSelectProduct(service.title)}
                    >
                      Detaylar <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => onNavigate("urunler")} className="bg-green-600 hover:bg-green-700">
              Tüm Ürünleri Görüntüle
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Haberler ve Duyurular</h3>
              <p className="text-gray-600">Güncel gelişmeleri takip edin</p>
            </div>
            <Button variant="outline" onClick={() => onNavigate("haberler")}>
              Tümünü Gör
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.summary}</CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-green-600 hover:text-green-700">
                    Devamını Oku <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Tarımsal Faaliyetleriniz İçin Destek Alın</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle iletişime geçin, size en uygun çözümü bulalım
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => onNavigate("iletisim")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Hemen Ara
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700"
              onClick={() => onNavigate("subeler")}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Şube Bul
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
