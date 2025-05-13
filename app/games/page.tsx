"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { Chip, Card, CardBody } from "@nextui-org/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Usando o componente de card existente
import { CardGameComponent } from "@/components/card-game-plans.component"

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<Game | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Definir o jogo ativo inicial
    setActiveGame(games[0])

    // Verificar se é mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Função para calcular desconto
  const calculateDiscount = (originalPrice: string, discountPrice: string): number => {
    const original = Number.parseFloat(originalPrice)
    const discount = Number.parseFloat(discountPrice)

    if (original && discount) {
      const discountAmount = original - discount
      const discountPercentage = (discountAmount / original) * 100
      return Math.round(discountPercentage)
    }

    return 0
  }

  return (
    <div className="flex min-h-screen bg-[#0B0E13]">
      {/* Conteúdo principal */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          {activeGame && (
            <div
              className="relative h-[500px] w-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%), url(${activeGame.wallpaper})`,
              }}
            >
              <div className="container mx-auto px-6 py-12 h-full flex flex-col justify-end">
                {activeGame.isNew && <Chip className="mb-4 bg-orange-500 text-white">NOVO LANÇAMENTO</Chip>}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{activeGame.name}</h1>
                <p className="text-lg text-white/80 max-w-2xl mb-6">{activeGame.description}</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="lg" className="bg-orange-500 text-white">
                    Contratar Agora
                  </Button>
                  <div className="flex items-center gap-2">
                    {activeGame.discountPrice ? (
                      <>
                        <Chip className="text-white" color="warning">
                          -{calculateDiscount(activeGame.price, activeGame.discountPrice)}%
                        </Chip>
                        <span className="text-white/60 line-through text-sm">R$ {activeGame.price}</span>
                        <span className="text-white font-bold">R$ {activeGame.discountPrice}/mês</span>
                      </>
                    ) : (
                      <span className="text-white font-bold">R$ {activeGame.price}/mês</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Game selector */}
              <div className="absolute right-0 top-0 bottom-0 w-64 bg-black/50 backdrop-blur-sm hidden lg:block">
                <div className="p-4">
                  <h3 className="text-orange-500 font-medium mb-4">Jogos em destaque</h3>
                  <div className="space-y-2">
                    {games.slice(0, 6).map((game) => (
                      <div
                        key={game.id}
                        onClick={() => setActiveGame(game)}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-all ${
                          activeGame.id === game.id
                            ? "bg-orange-500/20 border-l-4 border-orange-500"
                            : "hover:bg-gray-800/50"
                        }`}
                      >
                        <Image
                          src={game.image || "/placeholder.svg?height=40&width=40"}
                          alt={game.name}
                          width={40}
                          height={40}
                          className="rounded object-cover w-10 h-10"
                        />
                        <span className="text-white text-sm">{game.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Game Categories */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">Descubra Algo Novo</h2>
              <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <Button isIconOnly variant="bordered" className="border-gray-700">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button isIconOnly variant="bordered" className="border-gray-700">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {games.map((game) => (
              <CardGameComponent
                key={game.id}
                name={game.name}
                img={game.image}
                link={game.link}
                price={`R$ ${game.price}`}
                priceDiscount={game.discountPrice ? `R$ ${game.discountPrice}` : null}
              />
            ))}
          </div>
        </section>

        {/* Survival Games Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold text-white">Jogos de Sobrevivência</h2>
            <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {survivalGames.map((game) => (
              <CardGameComponent
                key={game.id}
                name={game.name}
                img={game.image}
                link={game.link}
                price={`R$ ${game.price}`}
                priceDiscount={game.discountPrice ? `R$ ${game.discountPrice}` : null}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-700 to-orange-600 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Comece Agora Mesmo</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Crie seu servidor de jogos em menos de 60 segundos e comece a jogar com seus amigos. Sem complicações, sem
              configurações complexas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-400 text-black font-bold">
                Ver Todos os Jogos
              </Button>
              <Button size="lg" variant="bordered" className="text-white border-white">
                Falar com um Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* Mais Vendidos Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold text-white">Mais Vendidos</h2>
            <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(categorizedGames).map(([category, games], idx) => (
              <Card key={idx} className="bg-[#0B0E13] border-gray-800">
                <CardBody>
                  <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-orange-500 pl-3">{category}</h3>
                  <div className="space-y-4">
                    {games.map((game, index) => (
                      <Link href={game.link} key={index}>
                        <div className="flex items-center gap-4 p-2 hover:bg-gray-800/50 rounded-lg transition-all">
                          <Image
                            src={game.image || "/placeholder.svg?height=60&width=60"}
                            alt={game.title}
                            width={60}
                            height={60}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-white">{game.title}</h4>
                            <p className="text-orange-400">{game.price}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

// Tipos
interface Game {
  id: number
  name: string
  description: string
  price: string
  discountPrice?: string
  image: string
  wallpaper: string
  isPopular?: boolean
  isNew?: boolean
  link: string
}

// Dados de exemplo
const games: Game[] = [
  {
    id: 1,
    name: "Minecraft",
    description: "Servidores otimizados para a melhor experiência de jogo com suporte a plugins e mods.",
    price: "19,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    isPopular: true,
    link: "/minecraft",
  },
  {
    id: 2,
    name: "GTA V",
    description: "Hospede seu servidor de FiveM com alta performance e baixa latência.",
    price: "59,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/gta-v",
  },
  {
    id: 3,
    name: "ARK",
    description: "Servidores para ARK: Survival Evolved com suporte para mods e configurações personalizadas.",
    price: "39,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/ark",
  },
  {
    id: 4,
    name: "CS2",
    description: "Servidores de Counter-Strike 2 com proteção anti-cheat e baixo ping.",
    price: "29,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/cs2",
  },
  {
    id: 5,
    name: "Rust",
    description: "Servidores de Rust com alta performance e proteção contra ataques DDoS.",
    price: "49,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/rust",
  },
  {
    id: 6,
    name: "Valheim",
    description: "Hospede seu mundo de Valheim e explore com seus amigos.",
    price: "29,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/valheim",
  },
  {
    id: 7,
    name: "Palworld",
    description: "Servidores para o novo fenômeno Palworld com suporte técnico especializado.",
    price: "49,99",
    discountPrice: "39,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    isNew: true,
    link: "/palworld",
  },
  {
    id: 8,
    name: "Minecraft Premium",
    description: "Planos premium para Minecraft com recursos avançados e maior capacidade.",
    price: "39,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    isPopular: true,
    link: "/minecraft-premium",
  },
  {
    id: 9,
    name: "GTA V Premium",
    description: "Servidores FiveM premium com recursos exclusivos para roleplay.",
    price: "99,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/gta-v-premium",
  },
  {
    id: 10,
    name: "Terraria",
    description: "Servidores para Terraria com backup automático e fácil instalação de mods.",
    price: "19,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/terraria",
  },
  {
    id: 11,
    name: "7 Days to Die",
    description: "Sobreviva ao apocalipse zumbi com seus amigos em servidores otimizados.",
    price: "34,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/7-days-to-die",
  },
  {
    id: 12,
    name: "Project Zomboid",
    description: "Servidores dedicados para o simulador de sobrevivência zumbi mais realista.",
    price: "29,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/project-zomboid",
  },
]

// Jogos de sobrevivência
const survivalGames: Game[] = [
  {
    id: 5,
    name: "Rust",
    description: "Servidores de Rust com alta performance e proteção contra ataques DDoS.",
    price: "49,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/rust",
  },
  {
    id: 3,
    name: "ARK",
    description: "Servidores para ARK: Survival Evolved com suporte para mods e configurações personalizadas.",
    price: "39,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/ark",
  },
  {
    id: 11,
    name: "7 Days to Die",
    description: "Sobreviva ao apocalipse zumbi com seus amigos em servidores otimizados.",
    price: "34,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/7-days-to-die",
  },
  {
    id: 6,
    name: "Valheim",
    description: "Hospede seu mundo de Valheim e explore com seus amigos.",
    price: "29,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/valheim",
  },
  {
    id: 12,
    name: "Project Zomboid",
    description: "Servidores dedicados para o simulador de sobrevivência zumbi mais realista.",
    price: "29,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/project-zomboid",
  },
  {
    id: 13,
    name: "DayZ",
    description: "Servidores de DayZ com configurações personalizadas e alta performance.",
    price: "49,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    link: "/dayz",
  },
  {
    id: 7,
    name: "Palworld",
    description: "Servidores para o novo fenômeno Palworld com suporte técnico especializado.",
    price: "49,99",
    discountPrice: "39,99",
    image: "/placeholder.svg?height=300&width=300",
    wallpaper: "/placeholder.svg?height=800&width=1200",
    isNew: true,
    link: "/palworld",
  },
]

// Dados para a seção de categorias
const categorizedGames = {
  "Mais Vendidos": [
    {
      title: "Palworld",
      link: "/game/palworld",
      price: "R$ 79,90",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Minecraft",
      link: "/game/minecraft",
      price: "R$ 19,90",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "FiveM",
      link: "/fivem",
      price: "R$ 74,90",
      image: "/placeholder.svg?height=60&width=60",
    },
  ],
  "Jogos VPS": [
    {
      title: "DayZ",
      link: "/dayz",
      price: "R$ 74,90",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Ragnarok",
      link: "/ragnarokshh",
      price: "R$ 74,90",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "RedM",
      link: "/game/redm",
      price: "R$ 74,90",
      image: "/placeholder.svg?height=60&width=60",
    },
  ],
  "Próximos Títulos": [
    {
      title: "Hytale",
      link: "",
      price: "Em breve",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "GTA 6",
      link: "/games",
      price: "Em breve",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "ARK 2",
      link: "/games",
      price: "Em breve",
      image: "/placeholder.svg?height=60&width=60",
    },
  ],
}
