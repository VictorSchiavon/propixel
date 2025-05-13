import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameSection } from "@/components/game-section"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { GetStarted } from "@/components/get-started"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function NovidadesPage() {
  const noticias = [
    {
      id: 1,
      title: "Novos servidores AMD Ryzen 9 9900X",
      excerpt:
        "Estamos atualizando nossa infraestrutura com os mais recentes processadores AMD Ryzen 9 9900X para oferecer ainda mais performance para seus servidores de jogos.",
      date: "12 de Maio, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Infraestrutura",
    },
    {
      id: 2,
      title: "Minecraft 1.21 já disponível em nossos servidores",
      excerpt:
        "A nova versão do Minecraft já está disponível em todos os nossos planos. Aproveite as novas funcionalidades e mobs com apenas um clique no painel de controle.",
      date: "10 de Maio, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Minecraft",
    },
    {
      id: 3,
      title: "Proteção DDoS aprimorada com Cloudflare Enterprise",
      excerpt:
        "Implementamos a proteção DDoS da Cloudflare Enterprise em todos os nossos servidores, garantindo ainda mais segurança e estabilidade para seus jogos.",
      date: "5 de Maio, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Segurança",
    },
    {
      id: 4,
      title: "Novo datacenter em São Paulo",
      excerpt:
        "Inauguramos nosso novo datacenter em São Paulo, com equipamentos de última geração e conectividade de alta velocidade para toda a América Latina.",
      date: "1 de Maio, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Infraestrutura",
    },
    {
      id: 5,
      title: "Suporte para Palworld adicionado",
      excerpt:
        "Agora oferecemos suporte completo para servidores de Palworld, o novo jogo de sobrevivência que está conquistando milhões de jogadores.",
      date: "28 de Abril, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Novos Jogos",
    },
    {
      id: 6,
      title: "Programa de afiliados lançado",
      excerpt: "Lançamos nosso programa de afiliados. Indique amigos e ganhe créditos para usar em nossos serviços.",
      date: "25 de Abril, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Promoções",
    },
  ]

  const jogosNovos = [
  {
    id: 1,
    title: "Palworld",
    image: "/palworld.webp",
    price: "R$ 49,99/mês",
    new: true,
  },
  {
    id: 2,
    title: "Enshrouded",
    image: "/enshrouded.webp",
    price: "R$ 39,99/mês",
    new: true,
  },
  {
    id: 3,
    title: "Soulmask",
    image: "/soulmask.webp",
    price: "R$ 44,99/mês",
    new: true,
  },
  {
    id: 4,
    title: "Sons of The Forest",
    image: "/sons-of-the-forest.webp",
    price: "R$ 49,99/mês",
    new: true,
  },
  {
    id: 5,
    title: "Icarus",
    image: "/icarus.webp",
    price: "R$ 39,99/mês",
    new: true,
  },
  {
    id: 6,
    title: "Throne and Liberty",
    image: "/throne-and-liberty.webp",
    price: "R$ 59,99/mês",
    new: true,
  },
  {
    id: 7,
    title: "Once Human",
    image: "/once-human.webp",
    price: "R$ 49,99/mês",
    new: true,
  },
]

const atualizacoesRecentes = [
  {
    id: 6,
    title: "Minecraft",
    image: "/minecraft.webp",
    price: "A partir de R$ 19,99/mês",
  },
  {
    id: 7,
    title: "ARK",
    image: "/ark.webp",
    price: "A partir de R$ 59,99/mês",
  },
  {
    id: 8,
    title: "FiveM",
    image: "/fivem.webp",
    price: "A partir de R$ 59,99/mês",
  },
  {
    id: 9,
    title: "Rust",
    image: "/rust.webp",
    price: "A partir de R$ 49,99/mês",
  },
  {
    id: 10,
    title: "Valheim",
    image: "/valheim.webp",
    price: "A partir de R$ 29,99/mês",
  },
  {
    id: 11,
    title: "Project Zomboid",
    image: "/project-zomboid.webp",
    price: "A partir de R$ 29,99/mês",
  },
  {
    id: 12,
    title: "Terraria",
    image: "/terraria.webp",
    price: "A partir de R$ 19,99/mês",
  },
]


  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="relative h-[300px] overflow-hidden">
            <Image src="/placeholder.svg?height=1080&width=1920" alt="Novidades" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
              <div className="container mx-auto px-6">
                <Badge className="bg-yellow-500 text-black mb-4">ATUALIZAÇÕES</Badge>
                <h1 className="text-4xl font-bold mb-4">Novidades NexusHost</h1>
                <p className="text-lg text-gray-300 max-w-2xl">
                  Fique por dentro das últimas atualizações, novos jogos e melhorias em nossa plataforma.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Últimas Notícias</h1>
              <Link href="/blog">
                <Button variant="link" className="text-yellow-500 flex items-center gap-1">
                  Ver todas as notícias <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {noticias.map((noticia) => (
                <NewsCard key={noticia.id} news={noticia} />
              ))}
            </div>

            <GameSection title="Jogos Recém-Adicionados" viewAllLink="/todos-planos" games={jogosNovos} />

            <GameSection title="Atualizações Recentes" viewAllLink="/todos-planos" games={atualizacoesRecentes} />

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
