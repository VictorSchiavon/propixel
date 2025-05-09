"use client"
import games from "@/config/games.json"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useEffect, useState } from "react"
import { Card, CardBody, Divider } from "@nextui-org/react"
import Link from "next/link"
import CircularProgress from "../_components/circular-progress.component"
import { TabsComponent } from "../_components/tabs-component"

export default function Games() {
  const [displayGame, setDisplayGame] = useState<any>()

  useEffect(() => {
    const findGame = games.filter((item) => item.id === 20)
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
					""
				)}
			</div>

			<section className="pt-10">
				<h3 className="font-bold text-2xl mb-6">Notas e avaliações:</h3>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5">
					<div className="bg-gradient-to-b from-[#0E131D] to-[#1A2030] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
						<CircularProgress percentage={100} />
						<p className="text-center text-sm text-gray-400 mt-4">
							Classificação do Google
						</p>
                        <div className="flex justify-center mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
					</div>
					<div className="bg-gradient-to-b from-[#0E131D] to-[#1A2030] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
						<CircularProgress percentage={100} />
						<p className="text-center text-sm text-gray-400 mt-4">
							Classificação do Trustpilot
						</p>
                        <div className="flex justify-center mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
					</div>
					<div className="bg-gradient-to-b from-[#0E131D] to-[#1A2030] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
						<CircularProgress percentage={100} />
						<p className="text-center text-sm text-gray-400 mt-4">
							Classificação do Discord
						</p>
                        <div className="flex justify-center mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
					</div>
				</div>
			</section>

				<section className="pt-20">
					<div className="flex justify-end">
						<Link href="https://br.trustpilot.com/review/raze.host">
							<p className="text-sm">Visualizar todas as avaliações</p>
						</Link>
					</div>
					<div className="pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card className="bg-[#202024] rounded-lg">
							<CardBody>
								<div className="p-4">
									<h3 className="font-bold pt-3">Raze Host é incrível</h3>
									<p className="text-gray-300 text-[14px] pt-1 font-bold">
										por Humberto Junior
									</p>
									<Divider className="mt-3 mb-3" />
									<p className="text-gray-300 text-[14px]">
										A razehost e incrível, custo benefício e um belo suporte,
										tanto pra colocar mods e essas coisas, recomendo e irei
										utilizar muito
									</p>
								</div>
							</CardBody>
						</Card>
						<Card className="bg-[#202024] rounded-lg">
							<CardBody>
								<div className="p-4">
									<h3 className="font-bold pt-3">Uso e recomendo</h3>
									<p className="text-gray-300 text-[14px] pt-1 font-bold">
										por Alexandre Denardi
									</p>
									<Divider className="mt-3 mb-3" />
									<p className="text-gray-300 text-[14px]">
										Já uso a empresa para hospedar servidores a anos GTA RP,
										servidores Linux, hoje estou até mesmo com meu banco de
										dados hospedado, sem quedas e SLA perfeito.
									</p>
								</div>
							</CardBody>
						</Card>
						<Card className="bg-[#202024] rounded-lg">
							<CardBody>
								<div className="p-4">
									<h3 className="font-bold pt-3">Excelente suporte</h3>
									<p className="text-gray-300 text-[14px] pt-1 font-bold">
										por Tomas
									</p>
									<Divider className="mt-3 mb-3" />
									<p className="text-gray-300 text-[14px]">
										Razehost com suporte e jogos top para jogar, já contratei
										outros, mas esse servidor está muito bom e com equipamentos
										muito bons também.
									</p>
								</div>
							</CardBody>
						</Card>
					</div>
				</section>

				<div className="rounded-xl shadow-lg mt-12 p-5 bg-[#202024]">
					<h2 className="text-lg font-semibold">
						Qual a melhor host para Arma Reforger?
					</h2>
					<p className="text-gray-400">
						A RazeHost é a primeira hospedagem de jogos no Brasil,
						garantimos baixa latência e hardware potente. Com proteção DDoS
						mitagamos qualquer tipo de ataque, mantendo sua gameplay limpa.
					</p>
				</div>
			</section>
  </section>
	)
}
