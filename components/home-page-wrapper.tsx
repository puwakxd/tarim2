"use client"

import { useRouter } from "next/navigation"
import HomePage from "@/components/home-page"

interface HomePageWrapperProps {
  initialStats: any
  initialServices: any
  initialNews: any
}

export default function HomePageWrapper({ initialStats, initialServices, initialNews }: HomePageWrapperProps) {
  const router = useRouter()

  const handleNavigate = (page: string) => {
    if (page === "home") {
      router.push("/")
    } else {
      router.push(`/${page}`)
    }
  }

  const handleSelectProduct = (product: string) => {
    // URL'e product parametresi ekleyerek başvuru sayfasına git
    const encodedProduct = encodeURIComponent(product)
    router.push(`/basvuru?product=${encodedProduct}`)
  }

  return (
    <HomePage
      initialStats={initialStats}
      initialServices={initialServices}
      initialNews={initialNews}
      onNavigate={handleNavigate}
      onSelectProduct={handleSelectProduct}
    />
  )
}
