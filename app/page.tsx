"use client";

import Image from "next/image";
import logo_companies from "@/public/logos_companies.webp";
import { useState } from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { Plus, Zap } from "lucide-react";

import { FaqSectionComponent } from "./_components/faq-section.component";
import { PaymentsSectionsComponent } from "./_components/payments-section.component";

import gamesData from "@/config/games.json";
import plansData from "@/config/plans.json";

export default function Home() {
	const [activeGame, setActiveGame] = useState<keyof typeof plansData>("palworld");

	const games = gamesData;
	const plans = plansData;

	const selectedGame = games.find(
		(game) =>
			game.name.replace(/\s+/g, "").toLowerCase() === activeGame
	);

	const handleSelectGame = (game: keyof typeof plans) => {
		const formatted = game.replace(/\s+/g, "").toLowerCase() as keyof typeof plans;
		setActiveGame(formatted);
	};

	return (
		<>
			<section className="container mx-auto px-6 flex-grow">
				<section className="pt-[5%] flex flex-col">
					<div className="mb-6">
						<h1 className="text-5xl font-bold mb-4">
							Sua plataforma de servidores de jogos
						</h1>
						<p className="text-lg leading-8 max-w-full font-medium text-zinc-300 lg:max-w-4xl">
							Com nossa plataforma, você cria servidores de jogo online com
							facilidade. Oferecemos VPS de alto desempenho para garantir a
							melhor experiência.
						</p>
					</div>

					<div className="flex flex-col xl:flex-row items-center gap-16">
						<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
							{games.slice(0, 11).map((game) => (
								<div
									key={game.id}
									className="flex flex-col duration-200 hover:bg-zinc-800 cursor-pointer items-center justify-center bg-tauri-dark border border-zinc-800 rounded-lg"
									onClick={() => handleSelectGame(game.name as keyof typeof plans)}
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

						{activeGame && (
							<div className="grid gap-8 grid-cols-1">
								<div className="flex flex-col items-center w-full">
									<div className="grid gap-4 grid-cols-1 flex-grow">
										<div className="flex items-center justify-between">
											<div className="flex items-center">
												<img
													src={selectedGame?.img}
													alt={selectedGame?.name}
													className="w-12 h-12 mr-4 rounded-full"
												/>
												<p className="text-base font-bold">{selectedGame?.name}</p>
											</div>
											<div className="ml-auto">
												<a href="/games">
													<p className="sm:text-xs md:text-sm font-medium text-center text-amber-500">
														Ver todos os planos
													</p>
												</a>
											</div>
										</div>

										{plans[activeGame]
											.slice(0, 3)
											.map((plan, index) => (
												<a
													href={plan.link}
													key={index}
													className="overflow-hidden border border-zinc-800 bg-zinc-900 p-6 rounded-lg text-center flex h-[96px] w-[270px] md:w-[500px] items-center justify-between hover:opacity-85"
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
															{plan.description.slice(0, 2).join(" • ").slice(0, 34)}
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
							</div>
						)}
					</div>
				</section>

				<Divider className="mt-24" />
				<section className="pt-[4%]">
					<div className="flex items-center justify-center">
						<div className="pt-3">
							<Image src={logo_companies} alt="Logos de empresas" />
						</div>
					</div>
				</section>

				<section className="pt-[5%]">
					<Divider className="mb-5" />
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "Segurança",
								text: "Proteção com Cloudflare, firewall premium e DNS de alta performance para conexões seguras e rápidas.",
							},
							{
								title: "Uptime 99,9%",
								text: "Garantimos 99,9% de uptime, mantendo seus sites e jogos sempre online e sem interrupções.",
							},
							{
								title: "Suporte rápido",
								text: "Suporte ágil e eficiente, pronto para ajudar você a qualquer hora, com atendimento rápido e amigável.",
							},
						].map((item, index) => (
							<Card className="bg-[#0A0C10] rounded-sm" key={index}>
								<CardBody>
									<div className="p-4">
										<div className="flex gap-2">
											<Zap size={18} className="mt-1" />
											<h3 className="font-bold">{item.title}</h3>
										</div>
										<p className="text-gray-300 text-[14px] pt-1">{item.text}</p>
									</div>
								</CardBody>
							</Card>
						))}
					</div>
				</section>
			</section>

			<section className="bg-[#07090c] mt-10 p-5">
				<div className="container mx-auto px-6 flex-grow">
					<section>
						<h1 className="text-4xl font-bold text-center pt-[5%]">
							Impulsione seu negócio com <br />
							<span className="text-orange-400">soluções de hospedagem de </span>
							alto desempenho.
						</h1>
						<p className="text-muted pt-2 pb-5 text-center">
							Potencialize sua presença online com a RazeHost, especialista em
							servidores VPS para jogos e aplicações no Brasil
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-[5%]">
							{[
								{
									title: "Latência",
									value: "20",
									unit: "/ms",
									desc: "Experiência de jogo fluida e resposta rápida com latência mínima.",
								},
								{
									title: "Redes",
									value: "10",
									unit: "GBPS",
									desc: "Conexão estável e rápida, garantindo serviços sempre disponíveis.",
								},
								{
									title: "Suporte 24/7",
									value: "24",
									unit: "Horas",
									desc: "Assistência rápida e eficiente a qualquer hora, todos os dias.",
								},
							].map((item, index) => (
								<Card className="bg-[#0A0C10] rounded-sm" key={index}>
									<CardBody>
										<div>
											<h3 className="font-bold text-center">{item.title}</h3>
											<h1 className="text-6xl font-bold text-center pt-5 pb-5">
												{item.value}
												<span className="text-3xl font-bold">{item.unit}</span>
											</h1>
											<p className="text-gray-300 text-[14px] pt-1 text-center">
												{item.desc}
											</p>
										</div>
									</CardBody>
								</Card>
							))}
						</div>
					</section>
				</div>
			</section>
		</>
	);
}
