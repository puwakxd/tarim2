"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Search, Calendar, Eye, ArrowRight } from "lucide-react"

interface NewsPageProps {
  onNavigate: (page: string) => void
}

export default function NewsPage({ onNavigate }: NewsPageProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tümü")

  const categories = ["Tümü", "Duyuru", "Haber", "Program", "Etkinlik"]

  const news = [
    {
      id: 1,
      title: "2025 Yılı Tarımsal Kredi Faiz Oranları Açıklandı",
      summary:
        "Çiftçilerimiz için avantajlı faiz oranları belirlendi. Yeni dönemde daha uygun koşullarla kredi imkanı sunulacak.",
      content:
        "2025 yılı için tarımsal kredi faiz oranları açıklandı. Üretim kredilerinde %8.5, hayvancılık kredilerinde %9.2 faiz oranı uygulanacak...",
      category: "Duyuru",
      date: "15 Aralık 2024",
      readTime: "3 dk",
      views: 1250,
      image: "/placeholder.svg?height=200&width=400&query=agricultural credit announcement",
      featured: true,
    },
    {
      id: 2,
      title: "Kış Buğdayı Ekimi İçin Destek Programı",
      summary: "Kış buğdayı ekimi yapacak üreticilerimize özel destek programı başlatıldı.",
      content: "Bu yıl kış buğdayı ekimi yapacak çiftçilerimiz için özel destek programı hayata geçirildi...",
      category: "Program",
      date: "12 Aralık 2024",
      readTime: "4 dk",
      views: 890,
      image: "/placeholder.svg?height=200&width=400&query=winter wheat farming support",
      featured: false,
    },
    {
      id: 3,
      title: "Yeni Şube Açılışı - Konya Merkez",
      summary:
        "Konya Merkez'de yeni şubemiz hizmete açıldı. Modern teknoloji ile donatılan şubemiz 7/24 hizmet verecek.",
      content:
        "Konya ili Merkez ilçesinde açılan yeni şubemiz, modern teknoloji altyapısı ile üyelerimize hizmet vermeye başladı...",
      category: "Haber",
      date: "10 Aralık 2024",
      readTime: "2 dk",
      views: 650,
      image: "/placeholder.svg?height=200&width=400&query=new branch opening ceremony",
      featured: false,
    },
    {
      id: 4,
      title: "Organik Tarım Sertifikasyon Eğitimi",
      summary: "Organik tarım yapmak isteyen üyelerimiz için sertifikasyon eğitimi düzenlenecek.",
      content: "Organik tarıma geçiş yapmak isteyen çiftçilerimiz için kapsamlı eğitim programı başlıyor...",
      category: "Etkinlik",
      date: "8 Aralık 2024",
      readTime: "5 dk",
      views: 420,
      image: "/placeholder.svg?height=200&width=400&query=organic farming certification training",
      featured: false,
    },
    {
      id: 5,
      title: "Dijital Tarım Teknolojileri Fuarı",
      summary: "Modern tarım teknolojilerini tanıtan fuar 20-22 Aralık tarihleri arasında düzenlenecek.",
      content:
        "Dijital tarım teknolojilerini tanıtan fuar, çiftçilerimizin modern teknolojilerle tanışması için organize edildi...",
      category: "Etkinlik",
      date: "5 Aralık 2024",
      readTime: "3 dk",
      views: 780,
      image: "/placeholder.svg?height=200&width=400&query=digital agriculture technology fair",
      featured: false,
    },
    {
      id: 6,
      title: "Sürdürülebilir Tarım Uygulamaları Semineri",
      summary: "Çevre dostu tarım uygulamaları hakkında bilgilendirme semineri düzenlenecek.",
      content: "Sürdürülebilir tarım uygulamaları ve çevre dostu üretim teknikleri hakkında seminer...",
      category: "Etkinlik",
      date: "3 Aralık 2024",
      readTime: "4 dk",
      views: 560,
      image: "/placeholder.svg?height=200&width=400&query=sustainable agriculture seminar",
      featured: false,
    },
  ]

  const filteredNews = news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Tümü" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredNews = filteredNews.filter((item) => item.featured)
  const regularNews = filteredNews.filter((item) => !item.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Haberler ve Duyurular</h1>
            <p className="text-xl text-green-100 mb-8">
              Tarım sektöründeki güncel gelişmeleri ve duyurularımızı takip edin
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
                  placeholder="Haber ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Öne Çıkan Haberler</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredNews.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-red-500">{item.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.summary}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{item.views}</span>
                          </div>
                        </div>
                        <span>{item.readTime} okuma</span>
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Devamını Oku
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Tüm Haberler</h2>
              <p className="text-gray-600">{filteredNews.length} haber bulundu</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2" variant="secondary">
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight line-clamp-2">{item.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{item.views}</span>
                        </div>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Oku
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Haber bulunamadı</h3>
                <p className="text-gray-600 mb-4">
                  Arama kriterlerinize uygun haber bulunamadı. Lütfen farklı arama terimleri deneyin.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("Tümü")
                  }}
                >
                  Filtreleri Temizle
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
