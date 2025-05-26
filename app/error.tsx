"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl font-bold text-red-600 mb-4">!</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Bir Hata Oluştu</h1>
        <p className="text-gray-600 mb-8">Beklenmeyen bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-green-600 hover:bg-green-700">
            <RefreshCw className="mr-2 h-4 w-4" />
            Tekrar Dene
          </Button>
          <Button variant="outline" onClick={() => (window.location.href = "/")}>
            <Home className="mr-2 h-4 w-4" />
            Ana Sayfa
          </Button>
        </div>
      </div>
    </div>
  )
}
