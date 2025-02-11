"use client";
import games from "@/config/games.json";
import { Card, CardBody, Divider } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CircularProgress from "../_components/circular-progress.component";
import { TabsComponent } from "../_components/tabs-component";

export default function Games() {
	const [displayGame, setDisplayGame] = useState<any>();

	useEffect(() => {
		const findGame = games.filter((item) => item.id === 1);
		setDisplayGame(findGame[0]);
	}, []);

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
				<h3 className="font-bold text-2xl">Notas e avaliações:</h3>

				<div className="flex gap-8 pt-5">
					<div>
						<CircularProgress percentage={100} />
						<p className="text-center text-sm text-gray-500">
							Classificação do Google
						</p>
					</div>
					<div>
						<CircularProgress percentage={100} />
						<p className="text-center text-sm text-gray-500">
							Classificação do Trustpilot
						</p>
					</div>
					<div>
						<CircularProgress percentage={100} />
						<p className="text-center text-sm text-gray-500">
							Classificação do Discord
						</p>
					</div>
				</div>

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
						Qual a melhor host para Fivem?
					</h2>
					<p className="text-gray-400">
						A Raze Host é referência em hospedagem de alto desempenho,
						garantindo baixa latência e estabilidade máxima. Com proteção DDoS
						avançada, mitigamos ataques Layer 7, assegurando a segurança e o
						desempenho ideal do seu servidor mesmo em momentos críticos.
					</p>
				</div>
			</section>
		</section>
	);
}
