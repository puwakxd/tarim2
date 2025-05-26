import type { Metadata } from "next"
import CorporatePage from "@/components/corporate-page"

export const metadata: Metadata = {
  title: "Kurumsal - Tarım Kredi Kooperatifleri",
  description: "Hakkımızda, misyonumuz, vizyonumuz ve 70 yıllık köklü tarihimiz hakkında bilgi alın.",
  keywords: "hakkımızda, misyon, vizyon, tarihçe, kurumsal",
}

// Backend hazır olmadığı için static data
function getCorporateData() {
  const about = {
    description:
      "Türkiye Tarım Kredi Kooperatifleri, 1954 yılından bu yana Türk tarımının gelişimine katkıda bulunan, ülkemizin en köklü kooperatif kuruluşlarından biridir.",
    memberCount: "1.2M+",
    branchCount: "850+",
  }

  const history = [
    { year: "1954", event: "Türkiye Tarım Kredi Kooperatifleri Birliği kuruldu" },
    { year: "1970", event: "İlk bölge birliği faaliyete geçti" },
    { year: "1990", event: "Modernizasyon programı başlatıldı" },
    { year: "2000", event: "Dijital dönüşüm sürecine girildi" },
    { year: "2010", event: "1 milyon üye sayısına ulaşıldı" },
    { year: "2024", event: "Sürdürülebilir tarım programları genişletildi" },
  ]

  const values = [
    {
      title: "Üye Odaklılık",
      description: "Üyelerimizin ihtiyaçlarını önceleyerek hizmet veriyoruz",
      icon: "Users",
    },
    {
      title: "Güvenilirlik",
      description: "70 yıllık tecrübemizle güvenilir ortaklık sunuyoruz",
      icon: "Award",
    },
    {
      title: "Sürdürülebilirlik",
      description: "Çevre dostu ve sürdürülebilir tarım uygulamalarını destekliyoruz",
      icon: "TrendingUp",
    },
    {
      title: "Şeffaflık",
      description: "Tüm işlemlerimizde açık ve şeffaf bir yaklaşım benimseriz",
      icon: "Building",
    },
  ]

  return { about, history, values }
}

export default function Corporate() {
  const { about, history, values } = getCorporateData()

  return <CorporatePage initialAbout={about} initialHistory={history} initialValues={values} />
}
