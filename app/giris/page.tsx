import type { Metadata } from "next"
import LoginPage from "@/components/login-page"

export const metadata: Metadata = {
  title: "Üye Girişi - Tarım Kredi Kooperatifleri",
  description: "Üye hesabınıza giriş yapın. Güvenli giriş, hızlı işlemler.",
  robots: "noindex, nofollow",
}

export default function Login() {
  return <LoginPage />
}
