"use client"

import games from "@/config/games.json"
import { Card, CardBody, Button, Badge, Accordion, AccordionItem } from "@nextui-org/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import CircularProgress from "../_components/circular-progress.component"

export default function Games() {
  const [displayGame, setDisplayGame] = useState<any>()
  const [activeTab, setActiveTab] = useState("features")

  useEffect(() => {
    const findGame = games.filter((item) => item.id === 14)
    setDisplayGame(findGame[0])
  }, [])

  if (!displayGame) {
    return (
      <div className="container mx-auto px-6 flex-grow pt-[2%] min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-48 bg-slate-700 rounded"></div>
          <div className="h-64 w-full max-w-3xl bg-slate-800 rounded-lg"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-grow">
      {/* Hero Section with Game Banner */}
      <div
        className="w-full bg-cover bg-center h-[50vh] relative"
        style={{
          backgroundImage: `url(${displayGame.image || "/placeholder.svg?height=500&width=1000"})`,
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-[#121214]"></div>
        <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-16">
          <Badge color="success" className="mb-4 self-start">
            Disponível
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{displayGame.name}</h1>
          <p className="text-gray-300 max-w-2xl mb-6">
            {displayGame.description ||
              "Experimente o melhor servidor para seu jogo favorito com hardware de ponta e suporte 24/7."}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button color="success" size="lg" className="font-medium">
              Contratar Servidor
            </Button>
            <Button variant="bordered" size="lg" className="font-medium">
              Ver Planos
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Key Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Recursos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#202024] rounded-xl p-8 hover:bg-[#28282d] transition-colors">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Proteção DDoS</h3>
              <p className="text-gray-400">
                Nossos servidores são protegidos contra ataques DDoS, garantindo que seu jogo permaneça online mesmo sob
                ataques.
              </p>
            </div>

            <div className="bg-[#202024] rounded-xl p-8 hover:bg-[#28282d] transition-colors">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFB800"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Baixa Latência</h3>
              <p className="text-gray-400">
                Servidores localizados no Brasil garantem a menor latência possível para jogadores brasileiros.
              </p>
            </div>

            <div className="bg-[#202024] rounded-xl p-8 hover:bg-[#28282d] transition-colors">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Hardware de Ponta</h3>
              <p className="text-gray-400">
                Utilizamos apenas hardware de última geração para garantir o melhor desempenho para seu servidor.
              </p>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Planos de Hospedagem</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Escolha o plano ideal para seu servidor. Todos os planos incluem proteção DDoS, painel de controle intuitivo
            e suporte técnico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-[#202024] rounded-xl overflow-hidden border border-transparent hover:border-emerald-600/30 transition-all">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold mb-2">Plano Básico</h3>
                <p className="text-gray-400 text-sm mb-4">Ideal para pequenos grupos</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$29,90</span>
                  <span className="text-gray-400 ml-2">/mês</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>2GB de RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>10 Slots de Jogadores</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>20GB SSD NVMe</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Backups Semanais</span>
                  </li>
                </ul>
                <Button color="success" className="w-full">
                  Escolher Plano
                </Button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-[#202024] rounded-xl overflow-hidden border-2 border-emerald-600 transform scale-105 shadow-lg shadow-emerald-900/20">
              <div className="bg-emerald-600 py-2 text-center">
                <span className="text-sm font-medium">MAIS POPULAR</span>
              </div>
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold mb-2">Plano Padrão</h3>
                <p className="text-gray-400 text-sm mb-4">Perfeito para comunidades médias</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$49,90</span>
                  <span className="text-gray-400 ml-2">/mês</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>4GB de RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>20 Slots de Jogadores</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>40GB SSD NVMe</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Backups Diários</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Suporte Prioritário</span>
                  </li>
                </ul>
                <Button color="success" className="w-full">
                  Escolher Plano
                </Button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#202024] rounded-xl overflow-hidden border border-transparent hover:border-emerald-600/30 transition-all">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-bold mb-2">Plano Premium</h3>
                <p className="text-gray-400 text-sm mb-4">Para grandes comunidades</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$89,90</span>
                  <span className="text-gray-400 ml-2">/mês</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>8GB de RAM</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>40 Slots de Jogadores</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>80GB SSD NVMe</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Backups Diários</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Suporte VIP 24/7</span>
                  </li>
                </ul>
                <Button color="success" className="w-full">
                  Escolher Plano
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Game Screenshots/Gallery */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Galeria de Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative aspect-video rounded-lg overflow-hidden bg-[#202024] group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4">
                    <h3 className="font-medium text-white">Screenshot {item}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ratings Section - This is the one you liked */}
        <section className="py-16">
          <h3 className="text-3xl font-bold mb-12 text-center">Notas e avaliações</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#202024] rounded-xl p-6 flex flex-col items-center">
              <CircularProgress percentage={100} />
              <p className="text-center text-sm text-gray-500 mt-4">Classificação do Google</p>
              <div className="flex mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFB800"
                    stroke="#FFB800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-[#202024] rounded-xl p-6 flex flex-col items-center">
              <CircularProgress percentage={100} />
              <p className="text-center text-sm text-gray-500 mt-4">Classificação do Trustpilot</p>
              <div className="flex mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFB800"
                    stroke="#FFB800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-[#202024] rounded-xl p-6 flex flex-col items-center">
              <CircularProgress percentage={100} />
              <p className="text-center text-sm text-gray-500 mt-4">Classificação do Discord</p>
              <div className="flex mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFB800"
                    stroke="#FFB800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Avaliações dos clientes</h2>
            <Link
              href="https://br.trustpilot.com/review/raze.host"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
            >
              Ver todas as avaliações
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#202024] to-[#1a1a1e] border-none shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-500 font-bold text-lg">
                    HJ
                  </div>
                  <div>
                    <h3 className="font-bold">Humberto Junior</h3>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#FFB800"
                          stroke="#FFB800"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  "A razehost e incrível, custo benefício e um belo suporte, tanto pra colocar mods e essas coisas,
                  recomendo e irei utilizar muito"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Badge color="success" variant="flat" size="sm">
                    Verificado
                  </Badge>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-[#202024] to-[#1a1a1e] border-none shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-500 font-bold text-lg">
                    AD
                  </div>
                  <div>
                    <h3 className="font-bold">Alexandre Denardi</h3>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#FFB800"
                          stroke="#FFB800"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  "Já uso a empresa para hospedar servidores a anos GTA RP, servidores Linux, hoje estou até mesmo com
                  meu banco de dados hospedado, sem quedas e SLA perfeito."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Badge color="success" variant="flat" size="sm">
                    Verificado
                  </Badge>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-[#202024] to-[#1a1a1e] border-none shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all">
              <CardBody className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-500 font-bold text-lg">
                    TS
                  </div>
                  <div>
                    <h3 className="font-bold">Tomas</h3>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#FFB800"
                          stroke="#FFB800"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  "Razehost com suporte e jogos top para jogar, já contratei outros, mas esse servidor está muito bom e
                  com equipamentos muito bons também."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Badge color="success" variant="flat" size="sm">
                    Verificado
                  </Badge>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>

          <Accordion variant="splitted" className="max-w-3xl mx-auto">
            <AccordionItem key="1" aria-label="Como instalar mods no servidor?" title="Como instalar mods no servidor?">
              <div className="px-2 py-1">
                <p className="text-gray-300">
                  Nosso painel de controle permite a instalação de mods com apenas alguns cliques. Basta acessar a seção
                  de mods, selecionar os desejados e clicar em instalar. Também oferecemos suporte para instalação
                  manual de mods personalizados através do acesso FTP.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Quanto tempo leva para ativar meu servidor?"
              title="Quanto tempo leva para ativar meu servidor?"
            >
              <div className="px-2 py-1">
                <p className="text-gray-300">
                  Servidores são ativados instantaneamente após a confirmação do pagamento. Você receberá um email com
                  as informações de acesso ao painel de controle e poderá começar a configurar seu servidor
                  imediatamente.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Posso mudar de plano depois?" title="Posso mudar de plano depois?">
              <div className="px-2 py-1">
                <p className="text-gray-300">
                  Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento através do painel de
                  controle. As mudanças são aplicadas instantaneamente e o valor é ajustado proporcionalmente ao tempo
                  restante do seu ciclo de faturamento.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Como funciona o suporte técnico?"
              title="Como funciona o suporte técnico?"
            >
              <div className="px-2 py-1">
                <p className="text-gray-300">
                  Oferecemos suporte 24/7 via ticket, chat ao vivo e Discord para todos os clientes. Nossos
                  especialistas estão sempre disponíveis para ajudar com qualquer problema técnico ou dúvida sobre a
                  configuração do seu servidor.
                </p>
              </div>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Qual a localização dos servidores?"
              title="Qual a localização dos servidores?"
            >
              <div className="px-2 py-1">
                <p className="text-gray-300">
                  Nossos servidores estão localizados em datacenters de alta performance no Brasil, garantindo a menor
                  latência possível para jogadores brasileiros. Também oferecemos opções de servidores em outras regiões
                  para clientes internacionais.
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-emerald-900/20 to-emerald-600/20 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Pronto para começar sua aventura?</h2>
              <p className="text-gray-300 max-w-2xl mb-8">
                A RazeHost é a primeira hospedagem de jogos no Brasil, garantimos baixa latência e hardware potente. Com
                proteção DDoS mitigamos qualquer tipo de ataque, mantendo sua gameplay limpa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button color="success" size="lg">
                  Contratar Agora
                </Button>
                <Button variant="bordered" size="lg">
                  Falar com Suporte
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
