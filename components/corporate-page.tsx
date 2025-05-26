"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Users, Target, Award, History, Building, TrendingUp } from "lucide-react"

interface CorporatePageProps {
  onNavigate: (page: string) => void
}

export default function CorporatePage({ onNavigate }: CorporatePageProps) {
  const milestones = [
    { year: "1954", event: "Türkiye Tarım Kredi Kooperatifleri Birliği kuruldu" },
    { year: "1970", event: "İlk bölge birliği faaliyete geçti" },
    { year: "1990", event: "Modernizasyon programı başlatıldı" },
    { year: "2000", event: "Dijital dönüşüm sürecine girildi" },
    { year: "2010", event: "1 milyon üye sayısına ulaşıldı" },
    { year: "2024", event: "Sürdürülebilir tarım programları genişletildi" },
  ]

  const values = [
    {
      icon: Users,
      title: "Üye Odaklılık",
      description: "Üyelerimizin ihtiyaçlarını önceleyerek hizmet veriyoruz",
    },
    {
      icon: Award,
      title: "Güvenilirlik",
      description: "70 yıllık tecrübemizle güvenilir ortaklık sunuyoruz",
    },
    {
      icon: TrendingUp,
      title: "Sürdürülebilirlik",
      description: "Çevre dostu ve sürdürülebilir tarım uygulamalarını destekliyoruz",
    },
    {
      icon: Building,
      title: "Şeffaflık",
      description: "Tüm işlemlerimizde açık ve şeffaf bir yaklaşım benimseriz",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Kurumsal</h1>
            <p className="text-xl text-green-100 mb-8">70 yılı aşkın tecrübemizle Türk tarımının güvenilir ortağıyız</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hakkımızda</h2>
              <p className="text-gray-600 mb-6">
                Türkiye Tarım Kredi Kooperatifleri, 1954 yılından bu yana Türk tarımının gelişimine katkıda bulunan,
                ülkemizin en köklü kooperatif kuruluşlarından biridir.
              </p>
              <p className="text-gray-600 mb-6">
                1.2 milyonu aşkın üyemizle, 81 ilde 850'den fazla şubemiz aracılığıyla çiftçilerimize kredi, sigorta,
                tarımsal girdi ve pazarlama hizmetleri sunmaktayız.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">1.2M+</div>
                  <div className="text-sm text-gray-600">Üye Sayısı</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">850+</div>
                  <div className="text-sm text-gray-600">Şube</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600&query=modern agricultural cooperative building with turkish flag"
                alt="Tarım Kredi Kooperatifleri Binası"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-green-600" />
                  <span>Misyonumuz</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Türk tarımının modernizasyonuna ve çiftçilerimizin refah seviyesinin yükseltilmesine katkıda bulunmak,
                  kooperatifçilik ilkeleri doğrultusunda üyelerimize en kaliteli hizmeti sunmak.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-green-600" />
                  <span>Vizyonumuz</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sürdürülebilir tarım uygulamalarını destekleyerek, çevre dostu ve teknoloji odaklı çözümlerle Türk
                  tarımını geleceğe taşıyan öncü kuruluş olmak.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Çalışmalarımızda rehber aldığımız temel değerler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tarihçemiz</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              70 yıllık köklü geçmişimizden önemli kilometre taşları
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                      <History className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="text-lg font-bold text-green-600 mb-2">{milestone.year}</div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Bizimle İletişime Geçin</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Kurumumuz hakkında daha fazla bilgi almak için iletişime geçebilirsiniz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50"
              onClick={() => onNavigate("contact")}
            >
              İletişim
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-700"
              onClick={() => onNavigate("branches")}
            >
              Şubelerimiz
            </Button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
