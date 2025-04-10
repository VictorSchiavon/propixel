"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import {
	Card,
	CardBody,
} from "@nextui-org/react";
import {
	BrainCircuit,
	CircleCheckBig,
	Cpu,
	HardDrive,
	MemoryStick,
	MonitorCog,
	Zap,
} from "lucide-react";

const vpsGamer = [
	{
		name: "VPS Hermes",
		price: "R$39,90",
		link: "https://app.razehost.com.br/store/vps/vps-hermes",
		description: {
			ram: "1 GB",
			ssd: "30 GB",
			cores: "1 núcleo",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Hera",
		price: "R$74,90",
		link: "https://app.razehost.com.br/store/vps/vps-l1",
		description: {
			ram: "2 GB",
			ssd: "40 GB",
			cores: "2 núcleos",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Ares",
		price: "R$139,90",
		link: "https://app.razehost.com.br/store/vps/vps-l2",
		description: {
			ram: "4 GB",
			ssd: "50 GB",
			cores: "3 núcleos",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Athena",
		price: "R$209,90",
		link: "https://app.razehost.com.br/store/vps/vps-l3",
		description: {
			ram: "6 GB",
			ssd: "60 GB",
			cores: "4 núcleos",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Hades",
		price: "R$249,90",
		link: "https://app.razehost.com.br/store/vps/vps-l4",
		description: {
			ram: "8 GB",
			ssd: "70 GB",
			cores: "5 núcleos",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Poseidon",
		price: "R$309,90",
		link: "https://app.razehost.com.br/store/vps/vps-l5",
		description: {
			ram: "10 GB",
			ssd: "80 GB",
			cores: "6 núcleos",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Zeus",
		price: "R$369,00",
		link: "https://app.razehost.com.br/store/vps/vps-poseidon",
		description: {
			ram: "12 GB",
			ssd: "90 GB",
			cores: "6 núcleos",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Mestre do Olimpo",
		price: "R$419,00",
		link: "https://app.razehost.com.br/store/vps/vps-mestre",
		description: {
			ram: "16 GB",
			ssd: "100 GB",
			cores: "6 núcleos",
			attrs: ["Anti DDoS Incluso", "AMD Ryzen"],
		},
	},
];

const vpsFlex = [
	{
		name: "🦊 Plano Fox",
		price: "R$39,56",
		link: "https://app.razehost.com.br/store/vps-flex",
		description: {
			ram: "2 GB",
			cores: "2 vCores",
			ssd: "30 GB",
			attrs: ["Personalizável", "Hospedado no Brasil"],
		},
	},
	{
		name: "🐺 Plano Wolf",
		price: "R$79,12",
		link: "https://app.razehost.com.br/store/vps-flex",
		description: {
			ram: "4 GB",
			cores: "3 vCores",
			ssd: "40 GB",
			attrs: ["Personalizável", "Hospedado no Brasil"],
		},
	},
	{
		name: "🦁 Plano Lion",
		price: "R$98,68",
		link: "https://app.razehost.com.br/store/vps-flex",
		description: {
			ram: "6 GB",
			cores: "4 vCores",
			ssd: "50 GB",
			attrs: ["Personalizável", "Hospedado no Brasil"],
		},
	},
	{
		name: "🐉 Plano Dragon",
		price: "R$138,24",
		link: "https://app.razehost.com.br/store/vps-flex",
		description: {
			ram: "8 GB",
			cores: "5 vCores",
			ssd: "60 GB",
			attrs: ["Personalizável", "Hospedado no Brasil"],
		},
	},
	{
		name: "🐯 Plano Tiger",
		price: "R$187,80",
		link: "https://app.razehost.com.br/store/vps-flex",
		description: {
			ram: "10 GB",
			cores: "6 vCores",
			ssd: "70 GB",
			attrs: ["Personalizável", "Hospedado no Brasil"],
		},
	},
	{
		name: "🦅 Plano Eagle",
		price: "R$207,36",
		link: "https://app.razehost.com.br/store/vps-flex",
		description: {
			ram: "12 GB",
			cores: "7 vCores",
			ssd: "80 GB",
			attrs: ["Personalizável", "Hospedado no Brasil"],
		},
	},
	{
		name: "🐦‍🔥 Plano Phoenix",
		price: "R$306,48",
		link: "https://app.razehost.com.br/store/vps-flex",
		description: {
			ram: "16 GB",
			cores: "8 vCores",
			ssd: "100 GB",
			attrs: ["Personalizável", "Hospedado no Brasil"],
		},
	},
];

export default function Games() {
	const [activeTab, setActiveTab] = useState<"gamer" | "flex">("gamer");
	const currentPlans = activeTab === "gamer" ? vpsGamer : vpsFlex;

	return (
		<section className="container mx-auto px-6 flex-grow pt-[2%]">
			<section>
				<div className="text-center">
					<h1 className="text-5xl font-bold pt-2">
						{activeTab === "gamer" ? "VPS Gamer no Brasil" : "VPS Flex no Brasil"}
					</h1>
					<p className="text-muted pt-2 pb-4">
						Escolha o plano ideal para seu projeto e evolua conforme suas necessidades.
					</p>

					<div className="flex justify-center gap-4 pb-6">
						<Button
							onClick={() => setActiveTab("gamer")}
							className={`px-4 py-2 font-bold ${activeTab === "gamer" ? "bg-orange-400 text-white" : "bg-gray-800 text-gray-300"}`}
						>
							VPS Gamer
						</Button>
						<Button
							onClick={() => setActiveTab("flex")}
							className={`px-4 py-2 font-bold ${activeTab === "flex" ? "bg-orange-400 text-white" : "bg-gray-800 text-gray-300"}`}
						>
							VPS Flex
						</Button>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
					{currentPlans.map((vpsItem, index) => (
						<div
							key={index}
							className="bg-[#0B0E13] border border-gray-800 p-4 rounded-lg shadow-lg"
						>
							<div className="p-2">
								<h4 className="text-2xl font-bold">{vpsItem.name}</h4>
								<h1 className="text-orange-400 font-bold text-4xl pt-2">
									{vpsItem.price}{" "}
									<span className="text-gray-400 font-normal text-sm">/mês*</span>
								</h1>
								<p className="text-sm text-gray-600 pt-1">Hospedado no Brasil 🇧🇷</p>
							</div>
							<div className="mt-4 border border-gray-900"></div>

							<div className="mt-4">
								<div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
									<p className="font-bold text-sm flex justify-center items-center gap-1">
										<MemoryStick size={16} /> {vpsItem.description.ram}
									</p>
									<p className="font-bold text-xs text-gray-500">RAM</p>
								</div>
							</div>

							<div className="flex gap-4 mt-5">
								<div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
									<p className="font-bold text-sm flex justify-center items-center gap-1">
										<Cpu size={16} /> {vpsItem.description.cores}
									</p>
									<p className="font-bold text-xs text-gray-500">CPU</p>
								</div>
								<div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
									<p className="font-bold text-sm flex justify-center items-center gap-1">
										<HardDrive size={16} /> {vpsItem.description.ssd}
									</p>
									<p className="font-bold text-xs text-gray-500">ARMAZENAMENTO</p>
								</div>
							</div>

							<div className="flex items-center gap-1 pt-4 justify-center">
								<div className="border-t-1 border-gray-900 flex-1"></div>
								<p className="text-xs flex gap-1 items-center justify-center">
									<MonitorCog size={13} color="green" />
									Painel de Controle
								</p>
								<div className="border-t-1 border-gray-900 flex-1"></div>
							</div>

							{vpsItem.description.attrs.map((item, index) => (
								<div key={index} className="pt-4">
									<p className="flex gap-4 text-sm pb-2">
										<CircleCheckBig color="green" size={20} /> {item}
									</p>
								</div>
							))}

							<div className="pt-4">
								<a href={vpsItem.link} target="_blank" rel="noopener noreferrer">
									<Button className="w-full bg-orange-400 text-white text-md font-bold" size="md">
										Adquirir
									</Button>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="pt-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<Card className="bg-[#0A0C10] rounded-sm">
						<CardBody>
							<div>
								<Zap color="orange" size={26} />
								<h3 className="font-bold pt-3">AMD Ryzen</h3>
								<p className="text-gray-300 text-[14px] pt-1">
									Ofereça a melhor experiência de jogo com nossos servidores VPS
									equipados com processadores AMD Ryzen, otimizados para jogos
									exigentes e altas cargas de trabalho, garantindo desempenho
									superior. A diferença é que a VPS Gamer possui processadores melhores.
								</p>
							</div>
						</CardBody>
					</Card>
		
					<Card className="bg-[#0A0C10] rounded-sm">
						<CardBody>
							<div>
								<BrainCircuit color="orange" size={26} />
								<h3 className="font-bold pt-3">Proteção DDoS</h3>
								<p className="text-gray-300 text-[14px] pt-1">
								Mantenha seus servidores de jogos seguros com nossa proteção DDoS avançada. Garantimos que seu servidor esteja sempre protegido contra ataques, proporcionando uma jogabilidade sem interrupções.
								</p>
							</div>
						</CardBody>
					</Card>
					<Card className="bg-[#0A0C10] rounded-sm">
						<CardBody>
							<div>
								<BrainCircuit color="orange" size={26} />
								<h3 className="font-bold pt-3">Proteção DDoS</h3>
								<p className="text-gray-300 text-[14px] pt-1">
								Mantenha seus servidores de jogos seguros com nossa proteção DDoS avançada. Garantimos que seu servidor esteja sempre protegido contra ataques, proporcionando uma jogabilidade sem interrupções.
								</p>
							</div>
						</CardBody>
					</Card>
					<Card className="bg-[#0A0C10] rounded-sm">
						<CardBody>
							<div>
								<BrainCircuit color="orange" size={26} />
								<h3 className="font-bold pt-3">Sem lag</h3>
								<p className="text-gray-300 text-[14px] pt-1">
								Na RazeHost nos usamos equipamentos com discos SSD NVMe, e o melhor máquinas AMD Ryzen com uplinks de até 10GBPS.
								</p>
							</div>
						</CardBody>
					</Card>
					<Card className="bg-[#0A0C10] rounded-sm">
						<CardBody>
							<div>
								<BrainCircuit color="orange" size={26} />
								<h3 className="font-bold pt-3">Baixa latência</h3>
								<p className="text-gray-300 text-[14px] pt-1">
								Com servidores VPS em São Paulo, garantimos baixa latência e conexão rápida para jogadores em todo o Brasil, oferecendo uma experiência de jogo sem lag e com alto desempenho.
								</p>
							</div>
						</CardBody>
					</Card>
					<Card className="bg-[#0A0C10] rounded-sm">
						<CardBody>
							<div>
								<BrainCircuit color="orange" size={26} />
								<h3 className="font-bold pt-3">Suporte								</h3>
								<p className="text-gray-300 text-[14px] pt-1">
								Com 99,9% de uptime, seus servidores estarão sempre online, permitindo que você aproveite seus jogos e aplicações sem falhas, dia e noite.
								</p>
							</div>
						</CardBody>
					</Card>
				</div>
			</section>
		</section>
		<section className="pt-[5%] container mx-auto max-w-7xl">
		<h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Compare nossos planos</h2>
		<Card className="bg-[#0E131D] rounded-sm">
		  <CardBody className="p-8">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
			  <div className="col-span-1">
				<h3 className="text-lg font-bold mb-4">Recurso</h3>
				<ul className="space-y-4">
				  <li>Processador</li>
				  <li>Upload</li>
				  <li>Desempenho para jogos</li>
				  <li>Indicado para</li>
				  <li>Preço</li>
				</ul>
			  </div>
			  <div className="col-span-1">
				<h3 className="text-lg font-bold mb-4 text-orange-400">VPS Gamer</h3>
				<ul className="space-y-4">
				  <li>AMD Ryzen de última geração</li>
				  <li>Ilimitado</li>
				  <li>Máximo desempenho</li>
				  <li>Jogos, servidores pesados, aplicações exigentes</li>
				  <li>Mais alto (com foco em performance)</li>
				</ul>
			  </div>
			  <div className="col-span-1">
				<h3 className="text-lg font-bold mb-4 text-orange-400">VPS Flex</h3>
				<ul className="space-y-4">
				  <li>Processadores bons, porém inferiores ao Ryzen</li>
				  <li>Limitado</li>
				  <li>Desempenho intermediário</li>
				  <li>Projetos leves, bots, sites e jogos menos exigentes</li>
				  <li>Mais acessível</li>
				</ul>
			  </div>
			</div>
		  </CardBody>
		</Card>
	  </section>
	  
	);
}
