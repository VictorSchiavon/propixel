import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GameCard } from "@/components/game-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GetStarted } from "@/components/get-started"

export default function TodosPlanosPage() {
 const jogos = [
  { id: 1, title: "Minecraft", image: "/minecraft.webp", category: "Sandbox" },
  { id: 2, title: "7 Days to Die", image: "/7daystodie.webp", category: "Survival" },
  { id: 3, title: "Palworld", image: "/palworld.webp", category: "Survival" },
  { id: 4, title: "FiveM", image: "/fivem.webp", category: "Roleplay" },
  { id: 5, title: "Ark: Survival Evolved", image: "/ark.webp", category: "Survival" },
  { id: 6, title: "Ark: Survival Ascended", image: "/ark.webp", category: "Survival" },
  { id: 7, title: "Arma 3", image: "/arma3.webp", category: "Shooter" },
  { id: 8, title: "Arma Reforger", image: "/armareforger.webp", category: "Shooter" },
  { id: 9, title: "Rust", image: "/rust.webp", category: "Survival" },
  { id: 10, title: "Project Zomboid", image: "/zomboid.webp", category: "Survival" },
  { id: 11, title: "Valheim", image: "/valheim.webp", category: "Survival" },
  { id: 12, title: "Astroneer", image: "/astroneer.webp", category: "Adventure" },
  { id: 13, title: "V Rising", image: "/vrising.webp", category: "Survival" },
  { id: 14, title: "Terraria", image: "/terraria.webp", category: "Sandbox" },
  { id: 15, title: "Mu Online", image: "/mu.webp", category: "MMORPG" },
  { id: 16, title: "Tibia", image: "/tibia.webp", category: "MMORPG" },
  { id: 17, title: "RedM", image: "/redm.webp", category: "Roleplay" },
  { id: 18, title: "DayZ", image: "/dayz.webp", category: "Survival" },
  { id: 19, title: "Satisfactory", image: "/satisfactory.webp", category: "Simulation" },
  { id: 20, title: "Factorio", image: "/factorio.webp", category: "Simulation" },
  { id: 21, title: "Enshrouded", image: "/enshrouded.webp", category: "Survival" },
  { id: 22, title: "Left 4 Dead 2", image: "/left-4-dead-2.webp", category: "Shooter" },
  { id: 23, title: "The Isle", image: "/the-isle.webp", category: "Survival" },
  { id: 24, title: "Core Keeper", image: "/corekeeper.webp", category: "Adventure" },
  { id: 25, title: "Soulmask", image: "/soulmask.webp", category: "Survival" },
  { id: 26, title: "American Truck Simulator", image: "/american-truck-simulator.webp", category: "Simulation" },
  { id: 27, title: "Conan Exiles", image: "/conan-exiles.webp", category: "Survival" },
  { id: 28, title: "Sons of The Forest", image: "/sons-of-the-forest.webp", category: "Survival" },
  { id: 29, title: "Barotrauma", image: "/barotrauma.webp", category: "Simulation" },
  { id: 30, title: "Icarus", image: "/icarus.webp", category: "Survival" },
  { id: 31, title: "Space Engineers", image: "/space-engineers.webp", category: "Simulation" },
  { id: 32, title: "Team Fortress 2", image: "/tf2.webp", category: "Shooter" },
  { id: 33, title: "Unturned", image: "/unturned.webp", category: "Survival" },
]
  const categorias = ["Todos", "Survival", "Sandbox", "Shooter", "Roleplay", "MMORPG", "Simulation", "Adventure"]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">Todos os Jogos</h1>
            <p className="text-gray-400 mb-8">Explore nossa ampla seleção de servidores de jogos</p>

            <Tabs defaultValue="Todos" className="mb-8">
              <div className="overflow-x-auto pb-2">
                <TabsList className="bg-gray-900 p-1 rounded-lg inline-flex whitespace-nowrap">
                  {categorias.map((categoria) => (
                    <TabsTrigger
                      key={categoria}
                      value={categoria}
                      className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                    >
                      {categoria}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categorias.map((categoria) => (
                <TabsContent key={categoria} value={categoria} className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                    {jogos
                      .filter((jogo) => categoria === "Todos" || jogo.category === categoria)
                      .map((jogo) => (
                        <GameCard key={jogo.id} game={jogo} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="flex justify-center mt-8">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Carregar Mais</Button>
            </div>

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
