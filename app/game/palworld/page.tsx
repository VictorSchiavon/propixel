"use client"
import games from "@/config/games.json"
import { Card, CardBody, Divider, Button } from "@nextui-org/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import CircularProgress from "../_components/circular-progress.component"
import { TabsComponent } from "../_components/tabs-component"

export default function Games() {
  const [displayGame, setDisplayGame] = useState<any>()

  useEffect(() => {
    const findGame = games.filter((item) => item.id === 14)
    setDisplayGame(findGame[0])
  }, [])

  return (
    <section className="container mx-auto px-6 flex-grow pt-[2%]">
      <div className="flex w-full flex-col">
        {displayGame ? (
          <>
            <TabsComponent displayGame={displayGame} />
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-pulse flex flex-col items-center gap-4">
              <div className="h-12 w-48 bg-[#202024] rounded"></div>
              <div className="h-64 w-full max-w-3xl bg-[#202024] rounded-lg"></div>
            </div>
          </div>
        )}
      </div>

      <section className="pt-10">
        <h3 className="font-bold text-2xl mb-6">Notas e avaliações:</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
          <div className="bg-[#202024] rounded-xl p-6 flex flex-col items-center border border-gray-800">
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
          <div className="bg-[#202024] rounded-xl p-6 flex flex-col items-center border border-gray-800">
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
          <div className="bg-[#202024] rounded-xl p-6 flex flex-col items-center border border-gray-800">
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

      <section className="pt-20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-2xl">Avaliações dos clientes</h3>
          <Link href="https://br.trustpilot.com/review/raze.host">
            <p className="text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
              Visualizar todas as avaliações
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
            </p>
          </Link>
        </div>
        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-[#202024] rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors">
            <CardBody>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">
                      HJ
                    </div>
                    <div>
                      <h3 className="font-bold">Raze Host é incrível</h3>
                      <p className="text-gray-400 text-xs">por Humberto Junior</p>
                    </div>
                  </div>
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
                <Divider className="mt-3 mb-3" />
                <p className="text-gray-300 text-[14px]">
                  A razehost e incrível, custo benefício e um belo suporte, tanto pra colocar mods e essas coisas,
                  recomendo e irei utilizar muito
                </p>
                <div className="mt-3 flex justify-end">
                  <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full">Verificado</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-[#202024] rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors">
            <CardBody>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">
                      AD
                    </div>
                    <div>
                      <h3 className="font-bold">Uso e recomendo</h3>
                      <p className="text-gray-400 text-xs">por Alexandre Denardi</p>
                    </div>
                  </div>
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
                <Divider className="mt-3 mb-3" />
                <p className="text-gray-300 text-[14px]">
                  Já uso a empresa para hospedar servidores a anos GTA RP, servidores Linux, hoje estou até mesmo com
                  meu banco de dados hospedado, sem quedas e SLA perfeito.
                </p>
                <div className="mt-3 flex justify-end">
                  <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full">Verificado</span>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="bg-[#202024] rounded-lg border border-gray-800 hover:border-orange-500/50 transition-colors">
            <CardBody>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">
                      TS
                    </div>
                    <div>
                      <h3 className="font-bold">Excelente suporte</h3>
                      <p className="text-gray-400 text-xs">por Tomas</p>
                    </div>
                  </div>
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
                <Divider className="mt-3 mb-3" />
                <p className="text-gray-300 text-[14px]">
                  Razehost com suporte e jogos top para jogar, já contratei outros, mas esse servidor está muito bom e
                  com equipamentos muito bons também.
                </p>
                <div className="mt-3 flex justify-end">
                  <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full">Verificado</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <div className="rounded-xl shadow-lg mt-12 p-8 bg-gradient-to-br from-[#202024] to-[#18181c] border border-gray-800">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-3/4">
            <h2 className="text-xl font-semibold mb-4">Qual a melhor host para Palworld?</h2>
            <p className="text-gray-400">
              A RazeHost é a primeira hospedagem de jogos no Brasil, garantimos baixa latência e hardware potente. Com
              proteção DDoS mitigamos qualquer tipo de ataque, mantendo sua gameplay limpa.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center">
            <Button color="warning" size="lg" className="bg-orange-500 text-white">
              Contratar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
