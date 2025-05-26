import type { Metadata } from "next"
import { Suspense } from "react"
import VerificationPage from "@/components/verification-page-wrapper"
import LoadingSpinner from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "SMS Doğrulama - Tarım Kredi Kooperatifleri",
  description: "Telefon numaranıza gönderilen doğrulama kodunu girin.",
  robots: "noindex, nofollow",
}

export default function Verification() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <VerificationPage />
    </Suspense>
  )
}
