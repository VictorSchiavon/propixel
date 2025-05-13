import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { GameSection } from "@/components/game-section"
import { GetStarted } from "@/components/get-started"

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <HeroSection />
          <div className="px-4 md:px-6 py-6">
            <GameSection
              title="Descubra Algo Novo"
              viewAllLink="/descobrir"
              games={[
                {
                  id: 1,
                  title: "Minecraft",
                  image: "/minecraft.webp",
                  price: "R$ 19,99/mês",
                  popular: true,
                },
                {
                  id: 2,
                  title: "GTA V",
                  image: "/fivem.webp",
                  price: "R$ 59,99/mês",
                },
                {
                  id: 3,
                  title: "ARK",
                  image: "/ark.webp",
                  price: "R$ 39,99/mês",
                },
                {
                  id: 4,
                  title: "CS2",
                  image: "/cs2.webp",
                  price: "R$ 29,99/mês",
                },
                {
                  id: 5,
                  title: "Rust",
                  image: "/rust.webp",
                  price: "R$ 49,99/mês",
                },
                {
                  id: 6,
                  title: "Valheim",
                  image: "/valheim.webp",
                  price: "R$ 29,99/mês",
                },
                {
                  id: 7,
                  title: "Palworld",
                  image: "/palworld.webp",
                  price: "R$ 49,99/mês",
                  new: true,
                },
              ]}
            />

            <GameSection
              title="Mais Vendidos"
              viewAllLink="/mais-vendidos"
              games={[
                {
                  id: 6,
                  title: "Minecraft Premium",
                  image: "/minecraft.webp",
                  price: "R$ 39,99/mês",
                  popular: true,
                },
                {
                  id: 7,
                  title: "GTA V Premium",
                  image: "/fivem.webp",
                  price: "R$ 99,99/mês",
                },
                {
                  id: 8,
                  title: "Valheim",
                  image: "/valheim.webp",
                  price: "R$ 29,99/mês",
                },
                {
                  id: 9,
                  title: "Terraria",
                  image: "/terraria.webp",
                  price: "R$ 19,99/mês",
                },
                {
                  id: 10,
                  title: "7 Days to Die",
                  image: "/7daystodie.webp",
                  price: "R$ 34,99/mês",
                },
                {
                  id: 11,
                  title: "Project Zomboid",
                  image: "/zomboid.webp",
                  price: "R$ 29,99/mês",
                },
                {
                  id: 12,
                  title: "Rust Premium",
                  image: "/rust.webp",
                  price: "R$ 69,99/mês",
                  popular: true,
                },
              ]}
            />

            <GameSection
              title="Adicionados Recentemente"
              viewAllLink="/novos"
              games={[
                {
                  id: 11,
                  title: "Palworld",
                  image: "/palworld.webp",
                  price: "R$ 49,99/mês",
                  new: true,
                },
                {
                  id: 12,
                  title: "Enshrouded",
                  image: "/enshrouded.webp",
                  price: "R$ 39,99/mês",
                  new: true,
                },
                {
                  id: 13,
                  title: "Satisfactory",
                  image: "/satisfactory.webp",
                  price: "R$ 44,99/mês",
                  new: true,
                },
                {
                  id: 14,
                  title: "Factorio",
                  image: "/factorio.jpg",
                  price: "R$ 29,99/mês",
                },
                {
                  id: 15,
                  title: "Icarus",
                  image: "/icarus.webp",
                  price: "R$ 19,99/mês",
                },
                {
                  id: 16,
                  title: "Soulmask",
                  image: "/soulmask.webp",
                  price: "R$ 39,99/mês",
                  new: true,
                },
                {
                  id: 17,
                  title: "Sons of The Forest",
                  image: "/sons-of-the-forest.webp",
                  price: "R$ 49,99/mês",
                  new: true,
                },
              ]}
            />

            <GameSection
              title="Jogos de Sobrevivência"
              viewAllLink="/categoria/survival"
              games={[
                {
                  id: 17,
                  title: "Rust",
                  image: "/rust.webp",
                  price: "R$ 49,99/mês",
                },
                {
                  id: 18,
                  title: "ARK",
                  image: "/ark.webp",
                  price: "R$ 39,99/mês",
                },
                {
                  id: 19,
                  title: "7 Days to Die",
                  image: "/7daystodie.webp",
                  price: "R$ 34,99/mês",
                },
                {
                  id: 20,
                  title: "Valheim",
                  image: "/valheim.webp",
                  price: "R$ 29,99/mês",
                },
                {
                  id: 21,
                  title: "Project Zomboid",
                  image: "/zomboid.webp",
                  price: "R$ 29,99/mês",
                },
                {
                  id: 22,
                  title: "DayZ",
                  image: "/dayz.webp",
                  price: "R$ 49,99/mês",
                },
                {
                  id: 23,
                  title: "Palworld",
                  image: "/palworld.webp",
                  price: "R$ 49,99/mês",
                  new: true,
                },
              ]}
            />

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
