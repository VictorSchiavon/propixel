"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardBody, Divider } from "@nextui-org/react"
import { Plus, Zap, Shield, Clock } from "lucide-react"
import { FaqSectionComponent } from "./_components/faq-section.component"
import { PaymentsSectionsComponent } from "./_components/payments-section.component"
import gamesData from "@/config/games.json"
import plansData from "@/config/plans.json"
import logoCompanies from "@/public/logos_companies.webp"

export default function Home() {
  const [activeGame, setActiveGame] = useState<string>("palworld")

  const games = gamesData
  const plansGames = plansData
  const gameInfo = games.find((game) => game.name.replace(/\s+/g, "").toLowerCase() === activeGame)

  const handleGameSelect = (gameName: string) => {
    const formattedGame = gameName.replace(/\s+/g, "").toLowerCase()
    setActiveGame(formattedGame)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Sua plataforma de servidores de jogos
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-zinc-300 max-w-3xl">
            Com nossa plataforma, você cria servidores de jogo online com facilidade. Oferecemos VPS de alto desempenho
            para garantir a melhor experiência.
          </p>
        </div>

        {/* Games Grid */}
        <div className="flex flex-col xl:flex-row items-start gap-8 mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full xl:w-auto">
            {games.slice(0, 11).map((game) => (
              <button
                key={game.id}
                className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all duration-200 ${
                  activeGame === game.name.replace(/\s+/g, "").toLowerCase()
                    ? "bg-zinc-800 border-amber-500/50"
                    : "bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800"
                }`}
                onClick={() => handleGameSelect(game.name)}
              >
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={game.logo || "/placeholder.svg"} alt={game.name} className="w-full h-full object-contain" />
                </div>
              </button>
            ))}
            <a
              href="/games"
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 hover:bg-zinc-800 transition-all duration-200"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <Plus className="w-6 h-6 text-zinc-400" />
              </div>
            </a>
          </div>

          {/* Game Plans */}
          {activeGame && (
            <div className="w-full xl:flex-1 mt-8 xl:mt-0">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={gameInfo?.img || "/placeholder.svg"}
                    alt={gameInfo?.name}
                    className="w-10 h-10 mr-3 rounded-full object-cover"
                  />
                  <h2 className="text-lg font-bold">{gameInfo?.name}</h2>
                </div>
                <a href="/games" className="text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors">
                  Ver todos os planos
                </a>
              </div>

              <div className="space-y-3">
                {activeGame &&
                  plansGames[activeGame as keyof typeof plansGames].slice(0, 3).map((plan, index) => (
                    <a
                      href={plan.link}
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800/80 transition-all duration-200"
                    >
                      <img
                        src={plan.img || "/placeholder.svg"}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm md:text-base truncate">{plan.name}</h3>
                        <p className="text-xs text-zinc-400 truncate">{plan.description.slice(0, 2).join(" • ")}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-bold text-sm md:text-base">
                          <span className="text-amber-500">R$ </span>
                          {plan.discountPrice.split("R$")[1]}
                        </p>
                        <p className="text-xs text-zinc-400">/Por mês</p>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <Divider className="mb-12" />
        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <h2 className="text-xl font-semibold text-center mb-8 text-zinc-400">Parceiros de confiança</h2>
            <div className="relative h-16 md:h-20">
              <Image
                src={logoCompanies || "/placeholder.svg"}
                alt="Logos de empresas parceiras"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <Divider className="mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-zinc-900/50 border border-zinc-800 shadow-lg">
            <CardBody>
              <div className="p-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-amber-500/10">
                    <Shield size={18} className="text-amber-500" />
                  </div>
                  <h3 className="font-bold">Segurança</h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Proteção com Cloudflare, firewall premium e DNS de alta performance para conexões seguras e rápidas.
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-zinc-900/50 border border-zinc-800 shadow-lg">
            <CardBody>
              <div className="p-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-green-500/10">
                    <Zap size={18} className="text-green-500" />
                  </div>
                  <h3 className="font-bold">Uptime 99,9%</h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Garantimos 99,9% de uptime, mantendo seus sites e jogos sempre online e sem interrupções.
                </p>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-zinc-900/50 border border-zinc-800 shadow-lg">
            <CardBody>
              <div className="p-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-blue-500/10">
                    <Clock size={18} className="text-blue-500" />
                  </div>
                  <h3 className="font-bold">Suporte rápido</h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Suporte ágil e eficiente, pronto para ajudar você a qualquer hora, com atendimento rápido e amigável.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-zinc-900 to-[#07090c] py-16 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impulsione seu negócio com <span className="text-amber-500">soluções de hospedagem</span> de alto
              desempenho
            </h2>
            <p className="text-zinc-400">
              Potencialize sua presença online com a RazeHost, especialista em servidores VPS para jogos e aplicações no
              Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-zinc-900/30 border border-zinc-800 shadow-lg backdrop-blur-sm">
              <CardBody className="p-6">
                <div className="text-center">
                  <h3 className="font-medium text-zinc-400 mb-2">Latência</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-5xl font-bold">20</span>
                    <span className="text-xl font-bold text-zinc-400 mb-1">/ms</span>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Experiência de jogo fluida e resposta rápida com latência mínima.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-zinc-900/30 border border-zinc-800 shadow-lg backdrop-blur-sm">
              <CardBody className="p-6">
                <div className="text-center">
                  <h3 className="font-medium text-zinc-400 mb-2">Redes</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-5xl font-bold">10</span>
                    <span className="text-xl font-bold text-zinc-400 mb-1">GBPS</span>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Conexão estável e rápida, garantindo serviços sempre disponíveis.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-zinc-900/30 border border-zinc-800 shadow-lg backdrop-blur-sm">
              <CardBody className="p-6">
                <div className="text-center">
                  <h3 className="font-medium text-zinc-400 mb-2">Suporte 24/7</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-5xl font-bold">24</span>
                    <span className="text-xl font-bold text-zinc-400 mb-1">Horas</span>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Assistência rápida e eficiente a qualquer hora, todos os dias.
                  </p>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-zinc-900/30 border border-zinc-800 shadow-lg backdrop-blur-sm">
              <CardBody className="p-6">
                <div className="text-center">
                  <h3 className="font-medium text-zinc-400 mb-2">Proteção DDoS</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-5xl font-bold">296</span>
                    <span className="text-xl font-bold text-zinc-400 mb-1">Tbps</span>
                  </div>
                  <p className="text-zinc-500 text-sm">
                    Defesa integrada contra ataques, mantendo seus serviços seguros e estáveis.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ and Payments Sections */}
      <section className="bg-[#07090c] py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Divider className="mb-12" />
          <FaqSectionComponent />
          <Divider className="my-12" />
          <PaymentsSectionsComponent />
        </div>
      </section>
    </main>
  )
}
