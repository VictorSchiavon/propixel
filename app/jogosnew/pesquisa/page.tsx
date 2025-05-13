import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameCard } from "@/components/game-card"
import { Button } from "@/components/ui/button"
import { GetStarted } from "@/components/get-started"
import { Search } from "lucide-react"

interface SearchPageProps {
  searchParams: { q?: string }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""

  // Lista completa de jogos
  const todosJogos = [
    { id: 1, title: "Minecraft", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Sandbox" },
    { id: 2, title: "7 Days to Die", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 3, title: "Palworld", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 4, title: "FiveM", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Roleplay" },
    { id: 5, title: "Ark: Survival Evolved", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 6, title: "Ark: Survival Ascended", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 7, title: "Arma 3", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Shooter" },
    { id: 8, title: "Arma Reforger", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Shooter" },
    { id: 9, title: "Rust", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 10, title: "Project Zomboid", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 11, title: "Valheim", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 12, title: "Astroneer", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Adventure" },
    { id: 13, title: "V Rising", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 14, title: "Terraria", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Sandbox" },
    { id: 15, title: "Mu Online", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "MMORPG" },
    { id: 16, title: "Tibia", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "MMORPG" },
    { id: 17, title: "RedM", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Roleplay" },
    { id: 18, title: "DayZ", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 19, title: "Satisfactory", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Simulation" },
    { id: 20, title: "Factorio", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Simulation" },
    { id: 21, title: "Enshrouded", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 22, title: "Left 4 Dead 2", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Shooter" },
    { id: 23, title: "The Isle", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
    { id: 24, title: "Core Keeper", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Adventure" },
    { id: 25, title: "Soulmask", image: "https://cdn-icons-png.flaticon.com/512/809/809654.png", category: "Survival" },
  ]

  // Filtrar jogos com base na consulta
  const jogosEncontrados = query
    ? todosJogos.filter((jogo) => jogo.title.toLowerCase().includes(query.toLowerCase()))
    : []

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-6 w-6 text-yellow-500" />
              <h1 className="text-3xl font-bold">Resultados para: "{query}"</h1>
            </div>

            {jogosEncontrados.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {jogosEncontrados.map((jogo) => (
                  <GameCard key={jogo.id} game={jogo} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Nenhum resultado encontrado</h2>
                <p className="text-gray-400 mb-8">
                  Não encontramos nenhum jogo correspondente à sua pesquisa. Tente outros termos ou navegue por nossas
                  categorias.
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" href="/todos-planos" asChild>
                  <a>Ver Todos os Jogos</a>
                </Button>
              </div>
            )}

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
