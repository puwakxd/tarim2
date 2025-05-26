import type { Metadata } from "next"
import { notFound } from "next/navigation"
import NewsDetailPage from "@/components/news-detail-page"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.API_URL}/api/news/${params.slug}`)
    if (!res.ok) return { title: "Haber Bulunamadı" }

    const news = await res.json()
    return {
      title: `${news.title} - Tarım Kredi Kooperatifleri`,
      description: news.summary,
      keywords: news.tags?.join(", "),
      openGraph: {
        title: news.title,
        description: news.summary,
        images: news.image ? [news.image] : [],
      },
    }
  } catch {
    return { title: "Haber Bulunamadı" }
  }
}

async function getNewsDetail(slug: string) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/news/${slug}`, {
      next: { revalidate: 300 },
    })

    if (!res.ok) return null
    return await res.json()
  } catch (error) {
    console.error("Error fetching news detail:", error)
    return null
  }
}

export default async function NewsDetail({ params }: Props) {
  const news = await getNewsDetail(params.slug)

  if (!news) {
    notFound()
  }

  return <NewsDetailPage news={news} />
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/news/slugs`)
    const slugs = await res.json()

    return slugs.map((slug: string) => ({
      slug: slug,
    }))
  } catch {
    return []
  }
}
