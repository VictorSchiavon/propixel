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

		}

