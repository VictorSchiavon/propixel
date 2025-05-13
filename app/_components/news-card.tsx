import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  news: {
    id: number
    title: string
    excerpt: string
    date: string
    image: string
    category: string
  }
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Link href={`/blog/${news.id}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center mb-2">
            <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
              {news.category}
            </Badge>
            <span className="text-xs text-gray-400 ml-auto">{news.date}</span>
          </div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-500 transition-colors">{news.title}</h3>
          <p className="text-gray-400 text-sm flex-1">{news.excerpt}</p>
          <div className="mt-4">
            <span className="text-yellow-500 text-sm font-medium group-hover:underline">Ler mais</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
