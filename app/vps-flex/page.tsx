'use client'

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";
import { BrainCircuit, CircleCheckBig, Cpu, HardDrive, MemoryStick, MonitorCog, ShieldCheck, Zap } from "lucide-react";
import Image from 'next/image';
import { PaymentsSectionsComponent } from "../_components/payments-section.component";

const minecraftPlans = [
    {
        "name": "MC Stone",
        "price": "R$29,90",
        "link": "https://app.razehost.com.br/store/minecraft/mc-stone",
        "description": {
            "ram": "2 GB",
            "ssd": "10 GB",
            "cores": "1 núcleo",
            "attrs": ["Anti DDoS Incluso", "Painel Pterodactyl"]
        }
    },
    {
        "name": "MC Iron",
        "price": "R$49,90",
        "link": "https://app.razehost.com.br/store/minecraft/mc-iron",
        "description": {
            "ram": "4 GB",
            "ssd": "20 GB",
            "cores": "2 núcleos",
            "attrs": ["Anti DDoS Incluso", "Painel Pterodactyl"]
        }
    },
    {
        "name": "MC Diamond",
        "price": "R$79,90",
        "link": "https://app.razehost.com.br/store/minecraft/mc-diamond",
        "description": {
            "ram": "6 GB",
            "ssd": "40 GB",
            "cores": "3 núcleos",
            "attrs": ["Anti DDoS Incluso", "Painel Pterodactyl"]
        }
    },
    {
        "name": "MC Netherite",
        "price": "R$129,90",
        "link": "https://app.razehost.com.br/store/minecraft/mc-netherite",
        "description": {
            "ram": "8 GB",
            "ssd": "60 GB",
            "cores": "4 núcleos",
            "attrs": ["Anti DDoS Incluso", "Painel Pterodactyl"]
        }
    }
];

export default function MinecraftPage() {
    return (
        <section className="container mx-auto px-6 flex-grow pt-[2%]">
            <div>
                <h1 className="text-5xl font-bold pt-2 text-center">
                    Hospedagem de Minecraft Profissional
                </h1>
                <p className="text-muted pt-2 pb-2 text-center">
                    Escolha seu plano ideal para jogar com amigos ou criar seu próprio servidor!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                {minecraftPlans.map((plan, index) => (
                    <div key={index} className="bg-[#0B0E13] border border-gray-800 p-4 rounded-lg shadow-lg">
                        <div className="p-2">
                            <h4 className="text-2xl font-bold">{plan.name}</h4>
                            <h1 className="text-green-400 font-bold text-4xl pt-2">
                                {plan.price} <span className="text-gray-400 font-normal text-sm">/mês*</span>
                            </h1>
                            <p className="text-sm text-gray-600 pt-1">Servidores no Brasil 🇧🇷</p>
                        </div>
                        <div className="mt-4 border border-gray-900"></div>

                        <div className="mt-4">
                            <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                                <p className="font-bold text-sm flex justify-center items-center gap-1"><MemoryStick size={16} /> {plan.description.ram}</p>
                                <p className="font-bold text-xs text-gray-500">RAM</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-5">
                            <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                                <p className="font-bold text-sm flex justify-center items-center gap-1"><Cpu size={16} /> {plan.description.cores}</p>
                                <p className="font-bold text-xs text-gray-500">CPU</p>
                            </div>
                            <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                                <p className="font-bold text-sm flex justify-center items-center gap-1"><HardDrive size={16} /> {plan.description.ssd}</p>
                                <p className="font-bold text-xs text-gray-500">ARMAZENAMENTO</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 pt-4 justify-center">
                            <div className="border-t-1 border-gray-900 flex-1"></div>
                            <p className="text-xs flex gap-1 items-center justify-center">
                                <MonitorCog size={13} color="green" /> Pterodactyl incluso
                            </p>
                            <div className="border-t-1 border-gray-900 flex-1"></div>
                        </div>

                        {plan.description.attrs.map((item, idx) => (
                            <div key={idx} className="pt-4">
                                <p className="flex gap-4 text-sm pb-2">
                                    <CircleCheckBig color="green" size={20} /> {item}
                                </p>
                            </div>
                        ))}

                        <div className="pt-4">
                            <a href={plan.link} target="_blank" rel="noopener noreferrer">
                                <Button className="w-full bg-green-600 text-white text-md font-bold" size="md">
                                    Contratar Agora
                                </Button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <section className="pt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <Zap color="green" size={26} />
                                <h3 className="font-bold pt-3">Desempenho de verdade</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Processadores Ryzen e SSD NVMe para rodar seu servidor de Minecraft com estabilidade, TPS alto e performance máxima.</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <BrainCircuit color="green" size={26} />
                                <h3 className="font-bold pt-3">Fácil de Gerenciar</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Com o painel Pterodactyl você gerencia seu servidor com praticidade: instale plugins, mods e faça backups com poucos cliques.</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <ShieldCheck color="green" size={26} />
                                <h3 className="font-bold pt-3">Proteção e Uptime</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Seu servidor protegido com Anti-DDoS avançado e uptime de 99,9%. Jogue com tranquilidade e segurança.</p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </section>
        </section>
    )
}
