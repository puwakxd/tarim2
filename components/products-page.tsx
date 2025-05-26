"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CreditCard, Shield, Wheat, TrendingUp, DollarSign, Users } from "lucide-react"

interface ProductsPageProps {
  onBack: () => void
  onSelectProduct: (product: string) => void
}

export default function ProductsPage({ onBack, onSelectProduct }: ProductsPageProps) {
  const products = [
    {
      id: 1,
      name: "Tarımsal Üretim Kredisi",
      category: "Kredi",
      icon: CreditCard,
      description: "Tarımsal üretim faaliyetleriniz için uygun faizli kredi imkanı",
      features: ["Düşük faiz oranı", "Esnek geri ödeme", "Hızlı onay"],
      rate: "%8.5",
      term: "12-60 ay",
      color: "bg-green-100 text-green-700",
      badge: "Popüler",
    },
    {
      id: 2,
      name: "Hayvancılık Kredisi",
      category: "Kredi",
      icon: Users,
      description: "Büyükbaş ve küçükbaş hayvancılık yatırımları için özel kredi",
      features: ["Özel faiz oranı", "Uzun vade", "Danışmanlık desteği"],
      rate: "%9.2",
      term: "24-84 ay",
      color: "bg-blue-100 text-blue-700",
      badge: "Yeni",
    },
    {
      id: 3,
      name: "Tarım Sigortası",
      category: "Sigorta",
      icon: Shield,
      description: "Ürünlerinizi doğal afetler ve hastalıklara karşı koruyun",
      features: ["Geniş kapsam", "Hızlı hasar ödemesi", "Devlet desteği"],
      rate: "Prim %3",
      term: "1 yıl",
      color: "bg-purple-100 text-purple-700",
      badge: "Güvenli",
    },
    {
      id: 4,
      name: "Sertifikalı Tohum",
      category: "Girdi",
      icon: Wheat,
      description: "Yüksek verimli, sertifikalı tohum çeşitleri",
      features: ["Yüksek verim", "Hastalık direnci", "Kalite garantisi"],
      rate: "İndirimli",
      term: "Mevsimlik",
      color: "bg-yellow-100 text-yellow-700",
      badge: "Kaliteli",
    },
    {
      id: 5,
      name: "Organik Gübre",
      category: "Girdi",
      icon: TrendingUp,
      description: "Toprak verimliliğini artıran organik gübre çeşitleri",
      features: ["Organik sertifikalı", "Çevre dostu", "Uzun etkili"],
      rate: "Uygun fiyat",
      term: "Sürekli",
      color: "bg-green-100 text-green-700",
      badge: "Organik",
    },
    {
      id: 6,
      name: "Makine Kredisi",
      category: "Kredi",
      icon: DollarSign,
      description: "Tarım makineleri alımı için özel finansman imkanı",
      features: ["Sıfır faiz seçeneği", "Makine garantisi", "Teknik destek"],
      rate: "%7.8",
      term: "36-72 ay",
      color: "bg-red-100 text-red-700",
      badge: "Avantajlı",
    },
  ]

  const categories = ["Tümü", "Kredi", "Sigorta", "Girdi"]

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
              <h1 className="text-2xl font-bold text-gray-900">Ürün ve Hizmetler</h1>
              <p className="text-gray-600">Tarımsal ihtiyaçlarınız için çözümlerimizi keşfedin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Tümü" ? "default" : "outline"}
              className={category === "Tümü" ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-lg ${product.color} flex items-center justify-center`}>
                    <product.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-sm text-gray-700 mb-2">Özellikler:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details */}
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="text-gray-500">Oran/Fiyat:</span>
                      <div className="font-semibold text-green-600">{product.rate}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Vade:</span>
                      <div className="font-semibold">{product.term}</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => onSelectProduct(product.name)}
                  >
                    İncele ve Başvur
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Başvuru Süreci</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h4 className="font-medium mb-2">Ürün Seçimi</h4>
              <p className="text-sm text-gray-600">İhtiyacınıza uygun ürünü seçin</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h4 className="font-medium mb-2">Bilgi Girişi</h4>
              <p className="text-sm text-gray-600">Kişisel bilgilerinizi girin</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-medium mb-2">Doğrulama</h4>
              <p className="text-sm text-gray-600">SMS ile doğrulama yapın</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
