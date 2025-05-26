import type { Metadata } from "next"
import ProductsPageWrapper from "@/components/products-page-wrapper"

export const metadata: Metadata = {
  title: "Ürün ve Hizmetler - Tarım Kredi Kooperatifleri",
  description:
    "Tarımsal krediler, sigorta, girdi ve pazarlama hizmetlerimizi keşfedin. Çiftçilerimize özel avantajlı koşullar.",
  keywords: "tarımsal kredi, tarım sigortası, tarımsal girdi, pazarlama, çiftçi kredisi",
}

export default function ProductsPage() {
  return <ProductsPageWrapper />
}
