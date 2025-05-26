import type { Metadata } from "next"
import { Suspense } from "react"
import ApplicationFormWrapper from "@/components/application-form-wrapper"
import LoadingSpinner from "@/components/loading-spinner"

export const metadata: Metadata = {
  title: "Başvuru Formu - Tarım Kredi Kooperatifleri",
  description: "Tarımsal kredi başvurunuzu kolayca yapın. Hızlı onay, uygun faiz oranları.",
  robots: "noindex, nofollow",
}

export default function ApplicationPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ApplicationFormWrapper />
    </Suspense>
  )
}
