import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameSection } from "@/components/game-section"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Users, Star, TrendingUp } from "lucide-react"
import Image from "next/image"
import { GetStarted } from "@/components/get-started"

export default function PopularesPage() {
  const jogosPopulares = [
    {
      id: 1,
      title: "Minecraft",
      image: "/placeholder.svg?height=400&width=600",
      price: "A partir de R$ 19,99/mês",
      popular: true,
    },
    {
      id: 2,
      title: "FiveM",
      image: "/placeholder.svg?height=400&width=600",
      price: "A partir de R$ 59,99/mês",
      popular: true,
    },
    {
      id: 3,
      title: "Rust",
      image: "/placeholder.svg?height=400&width=600",
      price: "A partir de R$ 49,99/mês",
      popular: true,
    },
    {
      id: 4,
      title: "ARK",
      image: "/placeholder.svg?height=400&width=600",
      price: "A partir de R$ 39,99/mês",
      popular: true,
    },
    {
      id: 5,
      title: "Valheim",
      image: "/placeholder.svg?height=400&width=600",
      price: "A partir de R$ 29,99/mês",
      popular: true,
    },
    {
      id: 6,
      title: "Palworld",
      image: "/placeholder.svg?height=400&width=600",
      price: "A partir de R$ 49,99/mês",
      popular: true,
      new: true,
    },
    {
      id: 7,
      title: "Project Zomboid",
      image: "/placeholder.svg?height=400&width=600",
      price: "A partir de R$ 29,99/mês",
      popular: true,
    },
  ]

  const jogosEmAlta = [
    {
      id: 6,
      title: "Palworld",
      image: "/placeholder.svg?height=400&width=600",
      price: "R$ 49,99/mês",
    },
    {
      id: 7,
      title: "Project Zomboid",
      image: "/placeholder.svg?height=400&width=600",
      price: "R$ 29,99/mês",
    },
    {
      id: 8,
      title: "7 Days to Die",
      image: "/placeholder.svg?height=400&width=600",
      price: "R$ 34,99/mês",
    },
    {
      id: 9,
      title: "Terraria",
      image: "/placeholder.svg?height=400&width=600",
      price: "R$ 19,99/mês",
    },
    {
      id: 10,
      title: "Enshrouded",
      image: "/placeholder.svg?height=400&width=600",
      price: "R$ 39,99/mês",
    },
    {
      id: 11,
      title: "Sons of The Forest",
      image: "/placeholder.svg?height=400&width=600",
      price: "R$ 49,99/mês",
    },
    {
      id: 12,
      title: "Soulmask",
      image: "/placeholder.svg?height=400&width=600",
      price: "R$ 39,99/mês",
    },
  ]

  const estatisticas = [
    {
      icon: Gamepad2,
      title: "Servidores Ativos",
      value: "5,000+",
      description: "Servidores de jogos ativos em nossa plataforma",
    },
    {
      icon: Users,
      title: "Jogadores Conectados",
      value: "50,000+",
      description: "Jogadores conectados simultaneamente em nossos servidores",
    },
    {
      icon: Star,
      title: "Satisfação",
      value: "98%",
      description: "Taxa de satisfação dos nossos clientes",
    },
    {
      icon: TrendingUp,
      title: "Uptime",
      value: "99.9%",
      description: "Disponibilidade garantida dos nossos servidores",
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="relative h-[300px] overflow-hidden">
            <Image src="/placeholder.svg?height=1080&width=1920" alt="Jogos Populares" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
              <div className="container mx-auto px-6">
                <Badge className="bg-yellow-500 text-black mb-4">MAIS POPULARES</Badge>
                <h1 className="text-4xl font-bold mb-4">Jogos Mais Populares</h1>
                <p className="text-lg text-gray-300 max-w-2xl">
                  Descubra os jogos mais populares em nossa plataforma e junte-se a milhares de jogadores em servidores
                  de alta performance.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <GameSection title="Mais Populares" viewAllLink="/todos-planos" games={jogosPopulares} />

            <div className="my-12">
              <h2 className="text-2xl font-bold mb-6">Estatísticas da Plataforma</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {estatisticas.map((estatistica, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="bg-yellow-500/20 p-3 rounded-full">
                        <estatistica.icon className="h-6 w-6 text-yellow-500" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold mb-2 text-yellow-500">{estatistica.value}</div>
                    <h3 className="text-lg font-bold mb-2">{estatistica.title}</h3>
                    <p className="text-gray-400 text-sm">{estatistica.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <GameSection title="Em Alta Agora" viewAllLink="/todos-planos" games={jogosEmAlta} />

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
