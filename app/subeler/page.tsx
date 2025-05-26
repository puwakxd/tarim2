import type { Metadata } from "next"
import BranchesPage from "@/components/branches-page"

export const metadata: Metadata = {
  title: "Şubelerimiz - Tarım Kredi Kooperatifleri",
  description: "81 ilde 850'den fazla şubemizle size en yakın hizmeti sunuyoruz. Şube bul, iletişim bilgileri.",
  keywords: "şube, şube bul, adres, telefon, konum, iletişim",
}

// Backend hazır olmadığı için static data
function getBranchesData() {
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

  const cities = ["Tümü", "Ankara", "İstanbul", "İzmir", "Antalya", "Bursa", "Konya"]

  return { branches, cities }
}

export default function Branches() {
  const { branches, cities } = getBranchesData()

  return <BranchesPage initialBranches={branches} initialCities={cities} />
}
