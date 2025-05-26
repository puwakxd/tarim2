"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı - Tarım Kredi Kooperatifleri",
  description: "Aradığınız sayfa bulunamadı.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl font-bold text-green-600 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Sayfa Bulunamadı</h1>
        <p className="text-gray-600 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Ana Sayfa
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Dön
          </Button>
        </div>
      </div>
    </div>
  )
}
