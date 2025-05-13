import Image from "next/image"
import Link from "next/link"

interface GameCardProps {
  game: {
    id: number
    title: string
    image?: string
    category?: string
  }
}

export function GameCard({ game }: GameCardProps) {
  // Usar a imagem fornecida ou fallback para placeholder
  const imagePath = game.image || "/placeholder.svg?height=400&width=600"

  return (
    <Link href={`/plano/${game.id}`} className="group">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={imagePath || "/placeholder.svg"}
            alt={game.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span className="text-sm font-medium text-white">Ver Planos</span>
          </div>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-center group-hover:text-yellow-500 transition-colors">{game.title}</h3>
        </div>
      </div>
    </Link>
  )
}
