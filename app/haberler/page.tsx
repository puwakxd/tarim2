import type { Metadata } from "next"
import NewsPage from "@/components/news-page"

export const metadata: Metadata = {
  title: "Haberler ve Duyurular - Tarım Kredi Kooperatifleri",
  description: "Tarım sektöründeki güncel gelişmeleri ve duyurularımızı takip edin.",
  keywords: "haberler, duyurular, tarım haberleri, güncel gelişmeler",
}

// Backend hazır olmadığı için static data
function getNewsData() {
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
      slug: "2025-tarimsal-kredi-faiz-oranlari",
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
      slug: "kis-bugdayi-destek-programi",
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
      slug: "konya-merkez-sube-acilisi",
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
      slug: "organik-tarim-egitimi",
    },
  ]

  const categories = ["Tümü", "Duyuru", "Haber", "Program", "Etkinlik"]

  return { news, categories }
}

export default function News() {
  const { news, categories } = getNewsData()

  return <NewsPage initialNews={news} initialCategories={categories} />
}
