"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ChevronLeft, Heart, Plus } from "lucide-react"

interface Game {
  id: number
  title: string
  image?: string
  price: string
  popular?: boolean
  new?: boolean
}

interface GameSectionProps {
  title: string
  viewAllLink: string
  games: Game[]
}

export function GameSection({ title, viewAllLink, games }: GameSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      handleScroll() // Check initially
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-6 relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-medium">{title}</h2>
          <Link href={viewAllLink} className="text-sm text-gray-400 hover:text-white ml-2 flex items-center">
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-1 -ml-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {games.map((game) => {
            // Usar a imagem fornecida ou fallback para placeholder
            const imagePath = game.image || "/placeholder.svg?height=400&width=600"

            return (
              <Link key={game.id} href={`/plano/${game.id}`} className="flex-shrink-0 w-[220px] group">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={imagePath || "/placeholder.svg"}
                    alt={game.title}
                    width={220}
                    height={330}
                    className="w-[220px] h-[330px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
                    <div className="absolute top-2 right-2 flex space-x-1">
                      <button className="bg-black/60 rounded-full p-1.5 hover:bg-black/80 transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="bg-black/60 rounded-full p-1.5 hover:bg-black/80 transition-colors">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {game.popular && (
                      <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-medium px-2 py-0.5 rounded">
                        POPULAR
                      </div>
                    )}

                    {game.new && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded">
                        NOVO
                      </div>
                    )}

                    <h3 className="font-medium text-lg">{game.title}</h3>
                    <p className="text-gray-300 text-sm">{game.price}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-1 -mr-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </section>
  )
}
