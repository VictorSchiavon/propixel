"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, ChevronRight, ChevronLeft, Search, Bell } from "lucide-react"

// Importando o componente de card de jogo
import { GameCard } from "@/components/game-card"
import { MobileNav } from "@/components/mobile-nav"
import { Sidebar } from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
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

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar para desktop */}
      <Sidebar className="hidden md:flex" />

      {/* Conteúdo principal */}
      <main className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
          <MobileNav className="md:hidden" />

          <div className="w-full flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Pesquisar planos..."
                className="w-full rounded-full bg-muted/50 pl-8 h-9 text-sm"
              />
            </div>

            <div className="flex items-center gap-4">
              <Link href="/sobre-nos" className="hidden md:block text-sm font-medium">
                Sobre Nós
              </Link>
              <Link href="/blog" className="hidden md:block text-sm font-medium">
                Blog
              </Link>
              <Link href="/contato" className="hidden md:block text-sm font-medium">
                Contato
              </Link>
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500"></span>
              </Button>
              <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">Área do Cliente</Button>
            </div>
          </div>
        </header>

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
                {activeGame.isNew && <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">NOVO LANÇAMENTO</Badge>}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{activeGame.name}</h1>
                <p className="text-lg text-white/80 max-w-2xl mb-6">{activeGame.description}</p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Contratar Agora
                  </Button>
                  <div className="flex items-center gap-2">
                    {activeGame.discountPrice ? (
                      <>
                        <Badge variant="outline" className="text-orange-500 border-orange-500">
                          -{calculateDiscount(activeGame.price, activeGame.discountPrice)}%
                        </Badge>
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
                          src={game.image || "/placeholder.svg"}
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
              <h2 className="text-2xl font-bold">Descubra Algo Novo</h2>
              <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" id="prev-btn">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" id="next-btn">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {games.map((game) => (
              <GameCard
                key={game.id}
                name={game.name}
                image={game.image}
                price={game.price}
                discountPrice={game.discountPrice}
                isPopular={game.isPopular}
                isNew={game.isNew}
                link={`/game/${game.id}`}
              />
            ))}
          </div>
        </section>

        {/* Survival Games Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold">Jogos de Sobrevivência</h2>
            <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {survivalGames.map((game) => (
              <GameCard
                key={game.id}
                name={game.name}
                image={game.image}
                price={game.price}
                discountPrice={game.discountPrice}
                isPopular={game.isPopular}
                isNew={game.isNew}
                link={`/game/${game.id}`}
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
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                Ver Todos os Jogos
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Falar com um Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/90 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Server className="h-6 w-6 text-orange-500" />
                  <span className="text-xl font-bold">NexusHost</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Hospedagem de servidores de jogos de alta performance com suporte 24/7 e proteção anti-DDoS.
                </p>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Jogos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/minecraft" className="text-gray-400 hover:text-orange-500">
                      Minecraft
                    </Link>
                  </li>
                  <li>
                    <Link href="/gta-v-fivem" className="text-gray-400 hover:text-orange-500">
                      GTA V FiveM
                    </Link>
                  </li>
                  <li>
                    <Link href="/ark-survival-evolved" className="text-gray-400 hover:text-orange-500">
                      ARK: Survival Evolved
                    </Link>
                  </li>
                  <li>
                    <Link href="/rust" className="text-gray-400 hover:text-orange-500">
                      Rust
                    </Link>
                  </li>
                  <li>
                    <Link href="/todos-os-jogos" className="text-gray-400 hover:text-orange-500">
                      Ver todos os jogos
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Empresa</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/sobre-nos" className="text-gray-400 hover:text-orange-500">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-orange-500">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato" className="text-gray-400 hover:text-orange-500">
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link href="/termos-de-servico" className="text-gray-400 hover:text-orange-500">
                      Termos de Serviço
                    </Link>
                  </li>
                  <li>
                    <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-orange-500">
                      Política de Privacidade
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Suporte</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/faq" className="text-gray-400 hover:text-orange-500">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/tutoriais" className="text-gray-400 hover:text-orange-500">
                      Tutoriais
                    </Link>
                  </li>
                  <li>
                    <Link href="/status-dos-servidores" className="text-gray-400 hover:text-orange-500">
                      Status dos Servidores
                    </Link>
                  </li>
                  <li>
                    <Link href="/discord" className="text-gray-400 hover:text-orange-500">
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:contato@nexushost.com.br" className="text-gray-400 hover:text-orange-500">
                      contato@nexushost.com.br
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2025 NexusHost. Todos os direitos reservados.</p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link href="/termos" className="text-gray-500 text-sm hover:text-gray-400">
                  Termos
                </Link>
                <Link href="/privacidade" className="text-gray-500 text-sm hover:text-gray-400">
                  Privacidade
                </Link>
                <Link href="/cookies" className="text-gray-500 text-sm hover:text-gray-400">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

// Função para calcular desconto
function calculateDiscount(originalPrice: string, discountPrice: string): number {
  const original = Number.parseFloat(originalPrice)
  const discount = Number.parseFloat(discountPrice)

  if (original && discount) {
    const discountAmount = original - discount
    const discountPercentage = (discountAmount / original) * 100
    return Math.round(discountPercentage)
  }

  return 0
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
