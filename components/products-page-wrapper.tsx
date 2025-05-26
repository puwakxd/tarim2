"use client"

import { useRouter } from "next/navigation"
import ProductsPage from "@/components/products-page"

export default function ProductsPageWrapper() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
  }

  const handleSelectProduct = (product: string) => {
    const encodedProduct = encodeURIComponent(product)
    router.push(`/basvuru?product=${encodedProduct}`)
  }

  return <ProductsPage onBack={handleBack} onSelectProduct={handleSelectProduct} />
}
