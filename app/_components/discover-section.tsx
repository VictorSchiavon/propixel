import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscoverSection() {
  const games = [
    {
      id: 1,
      title: "Minecraft",
      image: "/placeholder.svg?height=400&width=600",
      href: "/minecraft",
    },
    {
      id: 2,
      title: "GTA V",
      image: "/placeholder.svg?height=400&width=600",
      href: "/gtav",
    },
    {
      id: 3,
      title: "ARK",
      image: "/placeholder.svg?height=400&width=600",
      href: "/ark",
    },
    {
      id: 4,
      title: "CS2",
      image: "/placeholder.svg?height=400&width=600",
      href: "/cs2",
    },
  ]

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Descubra Nossos Servidores</h2>
        <Button variant="link" className="text-yellow-500 flex items-center gap-1">
          Ver Todos <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Link key={game.id} href={game.href} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-lg">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <h3 className="text-xl font-bold">{game.title}</h3>
              </div>
              <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                POPULAR
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
