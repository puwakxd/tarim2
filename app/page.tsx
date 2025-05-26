import type { Metadata } from "next"
import HomePageWrapper from "@/components/home-page-wrapper"

export const metadata: Metadata = {
  title: "Tarım Kredi Kooperatifleri - Ana Sayfa",
  description:
    "Türk tarımının güvenilir ortağı. 70 yılı aşkın tecrübemizle çiftçilerimize kredi, sigorta ve tarımsal girdi hizmetleri sunuyoruz.",
}

// Backend hazır olmadığı için static data
function getHomePageData() {
  const stats = {
    memberCount: "1.2M+",
    branchCount: "850+",
    creditVolume: "₺45B",
    provinceCount: "81",
  }

  const services = [
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

  const news = [
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

  return { stats, services, news }
}

export default function Home() {
  const { stats, services, news } = getHomePageData()

  return <HomePageWrapper initialStats={stats} initialServices={services} initialNews={news} />
}
