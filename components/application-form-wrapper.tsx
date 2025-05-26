"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import NameFormPage from "@/components/name-form-page"
import VerificationPage from "@/components/verification-page"

export default function ApplicationFormWrapper() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState<"form" | "verification">("form")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  useEffect(() => {
    // URL'den product parametresini al
    const product = searchParams.get("product")
    if (product) {
      setSelectedProduct(decodeURIComponent(product))
    }
  }, [searchParams])

  const handleBack = () => {
    if (currentStep === "verification") {
      setCurrentStep("form")
    } else {
      router.push("/urunler")
    }
  }

  const handleFormSubmit = () => {
    setCurrentStep("verification")
  }

  const handleVerificationComplete = () => {
    // Başvuru tamamlandı, ana sayfaya yönlendir
    router.push("/?success=true")
  }

  if (currentStep === "verification") {
    return <VerificationPage product={selectedProduct} onBack={handleBack} onComplete={handleVerificationComplete} />
  }

  return <NameFormPage product={selectedProduct} onBack={handleBack} onSubmit={handleFormSubmit} />
}
