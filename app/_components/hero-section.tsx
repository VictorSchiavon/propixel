"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Minecraft",
    subtitle: "Hospedagem Premium",
    description: "Servidores otimizados para a melhor experiência de jogo com suporte a plugins e mods.",
    image: "/minebanner.webp",
    price: "R$ 19,99",
  },
  {
    id: 2,
    title: "GTA V",
    subtitle: "Servidores FiveM",
    description: "Crie seu próprio servidor de roleplay com alta performance e estabilidade.",
    image: "/gtavcard.jpg",
    price: "R$ 59,99",
  },
  {
    id: 3,
    title: "ARK: Survival Evolved",
    subtitle: "Hospedagem Dedicada",
    description: "Servidores com hardware de última geração para uma experiência sem lag.",
    image: "https://image.api.playstation.com/vulcan/ap/rnd/202310/2502/1751043f9999ae22f2e6293fcf355e596f4183de063619da.png",
    price: "R$ 39,99",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0">
    <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className={`object-cover ${slide.title === "ARK: Survival Evolved" ? "object-[center_top_30px]" : "object-center"}`} priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg">
            <div className="flex items-center mb-2">
              <div className="bg-yellow-500 text-black text-xs font-medium px-2 py-0.5 rounded mr-2">
                NOVO LANÇAMENTO
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-4">{slide.subtitle}</h2>
            <p className="text-gray-300 mb-6">{slide.description}</p>
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-bold">{slide.price}</span>
              <span className="text-gray-400 ml-1">/mês</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Contratar Agora
              </Button>
              <Button variant="outline">Adicionar aos Favoritos</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-yellow-500" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
