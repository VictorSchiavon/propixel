"use client";
import logo_companies from "@/public/logos_companies.webp";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { Plus, Zap } from "lucide-react";
import Image from "next/image";
import { FaqSectionComponent } from "./_components/faq-section.component";
import { PaymentsSectionsComponent } from "./_components/payments-section.component";
import { useState } from "react";
import gamesData from "@/config/games.json";
import plansData from "@/config/plans.json";

export default function Home() {
	const [isGameActive, setIsGameActive] =
		useState<keyof typeof plansGames>("palworld");

	const games = gamesData;
	const plansGames = plansData;
	const gameInfo = games.find(
		(game) =>
			game.name.replace(/\s+/g, "").toLocaleLowerCase() === isGameActive,
	);

	const handleGameSelect = (game: keyof typeof plansGames) => {
		const formattedGame = game.replace(/\s+/g, "").toLocaleLowerCase() as keyof typeof plansGames;
		setIsGameActive(formattedGame);
	};
	return (
		<>
			<section className="container mx-auto px-6 flex-grow">
				<section className="pt-[5%] flex flex-col">
					<div className="mb-6 flex flex-col">
						<h1 className="text-5xl font-bold mb-4">
							Sua plataforma de servidores de jogos
						</h1>
						<p className="text-lg leading-8 max-w-full font-medium text-zinc-300 lg:max-w-4xl">
						Com nossa plataforma avançada, criar seu servidor de jogo online é rápido e fácil.</p>
					</div>
					<div className="flex flex-col xl:flex-row items-center gap-16">
						<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
							{games.slice(0, 11).map((game, index) => (
								<div
									key={game.id}
									className="flex flex-col duration-200 hover:bg-zinc-800 cursor-pointer items-center justify-center bg-tauri-dark border border-zinc-800 rounded-lg"
									onClick={() => {
										const gameName = game.name as keyof typeof plansGames;
										handleGameSelect(gameName);
									}}
								>
									<p className="py-4 px-14">
										<img
											src={game.logo}
											alt={game.name}
											className="w-20 h-16 object-contain"
										/>
									</p>
								</div>
							))}
							<div className="flex flex-col duration-200 hover:bg-zinc-800 cursor-pointer items-center justify-center bg-tauri-dark border border-zinc-800 rounded-lg">
								<a href="/games">
									<p className="py-4 px-14">
										<Plus />
									</p>
								</a>
							</div>
						</div>
						<div className="grid gap-8 grid-cols-1">
							{isGameActive && (
								<div className="flex flex-col items-center w-full">
									<div className="grid gap-4 grid-cols-1 flex-grow">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<img
													src={gameInfo?.img}
													alt={gameInfo?.name}
													className="w-12 h-12 mr-4 rounded-full"
												/>
												<p className="text-base font-bold">{gameInfo?.name}</p>
											</div>
											<div className="ml-auto">
												<a href="https://app.razehost.com.br/store/">
													<p className="sm:text-xs md:text-sm font-medium text-center text-amber-500">
														Ver todos os planos
													</p>
												</a>
											</div>
										</div>
										{isGameActive &&
											plansGames[isGameActive]
												.slice(0, 3)
												.map((plan, index) => (
													<a
														href={plan.link}
														key={`${index + 1}`}
														className="overflow-hidden border border-zinc-800 bg-zinc-900 p-6 rounded-lg text-center flex h-[96px] w-[270px] md:w-[500px] items-center justify-between"
													>
														<img
															src={plan.img}
															alt=""
															className="w-8 h-8 rounded-full"
														/>
														<div className="text-start ml-5 flex-grow">
															<h3 className="text-xs font-bold whitespace-nowrap md:text-base">
																{plan.name.slice(0, 30)}
															</h3>
															<p className="text-[10px] opacity-85 mt-1.3 whitespace-nowrap md:text-sm">
																{plan.description.slice(0, 2).join(" • ")
																	.length > 34
																	? `${plan.description.slice(0, 2).join(" • ").slice(0, 34)}`
																	: plan.description.slice(0, 2).join(" • ")}
															</p>
														</div>
														<div className="ml-4 text-right">
															<h3 className="font-bold -mb-2 text-xs md:text-base">
																<span className="text-amber-500">R$ </span>
																{plan.discountPrice.split("R$")[1]}
															</h3>
															<p className="text-sm font-medium opacity-85 mt-1.5 md:text-xs">
																/Por mês
															</p>
														</div>
													</a>
												))}
									</div>
								</div>
							)}
						</div>
					</div>
				</section>

				<Divider className="mt-40" />
				<section className="pt-[4%]">
					<div className="flex items-center justify-center">
						<div>
							<h1 className="text-md text-center">
								Usamos as melhores empresas do mundo
							</h1>
							<div className="pt-3">
								<Image src={logo_companies} alt="logo_companies" />
							</div>
						</div>
					</div>
				</section>

				<section className="pt-[5%]">
					<Divider className="mb-5" />
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card className="bg-[#0A0C10] rounded-sm">
							<CardBody>
								<div className="p-4">
									<div className="flex gap-2">
										<Zap size={18} className="mt-1" />
										<h3 className="font-bold">Segurança</h3>
									</div>
									<p className="text-gray-300 text-[14px] pt-1">
										Proteção com Cloudflare, firewall premium e DNS de alta
										performance para conexões seguras e rápidas.
									</p>
								</div>
							</CardBody>
						</Card>
						<Card className="bg-[#0A0C10] rounded-sm">
							<CardBody>
								<div className="p-4">
									<div className="flex gap-2">
										<Zap size={18} className="mt-1" />
										<h3 className="font-bold">Uptime 99,9%</h3>
									</div>
									<p className="text-gray-300 text-[14px] pt-1">
										Garantimos 99,9% de uptime, mantendo seus sites e jogos
										sempre online e sem interrupções.{" "}
									</p>
								</div>
							</CardBody>
						</Card>
						<Card className="bg-[#0A0C10] rounded-sm">
							<CardBody>
								<div className="p-4">
									<div className="flex gap-2">
										<Zap size={18} className="mt-1" />
										<h3 className="font-bold">Suporte rápido</h3>
									</div>
									<p className="text-gray-300 text-[14px] pt-1">
										Suporte ágil e eficiente, pronto para ajudar você a qualquer
										hora, com atendimento rápido e amigável.{" "}
									</p>
								</div>
							</CardBody>
						</Card>
					</div>
				</section>
			</section>

			<section className="bg-[#07090c] mt-10 p-5">
				<div className="container mx-auto px-6 flex-grow">
					<section>
						<h1 className="text-4xl font-bold text-center pt-[5%]">
							Impulsione seu negócio com <br />{" "}
							<span className="text-orange-400">
								soluções de hospedagem de{" "}
							</span>{" "}
							alto desempenho.
						</h1>
						<p className="text-muted pt-2 pb-5 text-center">
							Potencialize sua presença online com a RazeHost, especialista em
							servidores VPS para jogos e aplicações no Brasil
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-[5%]">
							<Card className="bg-[#0A0C10] rounded-sm">
								<CardBody>
									<div>
										<h3 className="font-bold text-center">Latência</h3>
										<h1 className="text-6xl font-bold text-center pt-5 pb-5">
											20<span className="text-3xl font-bold">/ms</span>
										</h1>
										<p className="text-gray-300 text-[14px] pt-1 text-center">
											Experiência de jogo fluida e resposta rápida com latência
											mínima.
										</p>
									</div>
								</CardBody>
							</Card>
							<Card className="bg-[#0A0C10] rounded-sm">
								<CardBody>
									<div>
										<h3 className="font-bold text-center">Redes</h3>
										<h1 className="text-6xl font-bold text-center pt-5 pb-5">
											10<span className="text-3xl font-bold">GBPS</span>
										</h1>
										<p className="text-gray-300 text-[14px] pt-1 text-center">
											Conexão estável e rápida, garantindo serviços sempre
											disponíveis.
										</p>
									</div>
								</CardBody>
							</Card>
							<Card className="bg-[#0A0C10] rounded-sm">
								<CardBody>
									<div>
										<h3 className="font-bold text-center">Suporte 24/7</h3>
										<h1 className="text-6xl font-bold text-center pt-5 pb-5">
											24<span className="text-3xl font-bold">Horas</span>
										</h1>
										<p className="text-gray-300 text-[14px] pt-1 text-center">
											Assistência rápida e eficiente a qualquer hora, todos os
											dias.
										</p>
									</div>
								</CardBody>
							</Card>
							<Card className="bg-[#0A0C10] rounded-sm">
								<CardBody>
									<div>
										<h3 className="font-bold text-center">Proteção DDoS</h3>
										<h1 className="text-6xl font-bold text-center pt-5 pb-5">
											296<span className="text-3xl font-bold">Tbps</span>
										</h1>
										<p className="text-gray-300 text-[14px] pt-1 text-center">
											Defesa integrada contra ataques, mantendo seus serviços
											seguros e estáveis.
										</p>
									</div>
								</CardBody>
							</Card>
						</div>
					</section>
					<Divider className="mb-5 mt-5" />
					<FaqSectionComponent></FaqSectionComponent>
					<Divider className="mb-5 mt-5" />
					<PaymentsSectionsComponent />
				</div>
			</section>
		</>
	);
}
