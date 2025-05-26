import type { Metadata } from "next"
import ContactPage from "@/components/contact-page"

export const metadata: Metadata = {
  title: "İletişim - Tarım Kredi Kooperatifleri",
  description: "Bizimle iletişime geçin. Telefon, e-posta, adres bilgileri ve iletişim formu.",
  keywords: "iletişim, telefon, e-posta, adres, müşteri hizmetleri",
}

// Backend hazır olmadığı için static data
function getContactData() {
  const contactInfo = {
    phone: "444 1 TKK (444 1 855)",
    email: "info@tarimkredi.org.tr",
    address: "Atatürk Bulvarı No: 123, Çankaya/Ankara",
    hours: "08:30 - 17:00",
  }

  const departments = [
    { name: "Genel Bilgi", email: "info@tarimkredi.org.tr" },
    { name: "Kredi Başvuruları", email: "kredi@tarimkredi.org.tr" },
    { name: "Sigorta İşlemleri", email: "sigorta@tarimkredi.org.tr" },
    { name: "Teknik Destek", email: "destek@tarimkredi.org.tr" },
    { name: "İnsan Kaynakları", email: "ik@tarimkredi.org.tr" },
  ]

  return { contactInfo, departments }
}

export default function Contact() {
  const { contactInfo, departments } = getContactData()

  return <ContactPage initialContactInfo={contactInfo} initialDepartments={departments} />
}
