'use client'
import { Button } from "@nextui-org/button";
import { BrainCircuit, CircleCheckBig, Cpu, HardDrive, MemoryStick, MonitorCog, ShieldCheck, Zap } from "lucide-react";
import Image from 'next/image'
import { Card, CardBody } from "@nextui-org/react";
import { PaymentsSectionsComponent } from "../_components/payments-section.component";


const vps = [
    {
        "name": "VPS Trader",
        "price": "R$39,90",
        "link": "https://app.razehost.com.br/store/vps/vps-hermes",
        "description": {
            "ram": "1 GB",
            "ssd": "30 GB",
            "cores": "1 núcleo",
         "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
            
        }
    },
    {
        "name": "VPS Trader",
        "price": "R$74,90",
        "link": "https://app.razehost.com.br/store/vps/vps-l1",
        "description": {
            "ram": "2 GB",
            "ssd": "40 GB",
            "cores": "2 núcleos",
         "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
        }
    },
    {
        "name": "VPS Trader",
        "price": "R$139,90",
        "link": "https://app.razehost.com.br/store/vps/vps-l2",
        "description": {
            "ram": "4 GB",
            "ssd": "50 GB",
            "cores": "3 núcleos",
        "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
        }
    },
    {
        "name": "VPS Trader",
        "price": "R$209,90",
        "link": "https://app.razehost.com.br/store/vps/vps-l3",
        "description": {
            "ram": "6 GB",
            "ssd": "60 GB",
            "cores": "4 núcleos",
         "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
        }
    },
    {
        "name": "VPS Trader",
        "price": "R$249,90",
        "link": "https://app.razehost.com.br/store/vps/vps-l4",
        "description": {
            "ram": "8 GB",
            "ssd": "70 GB",
            "cores": "5 núcleos",
      "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
        }
    },
    {
        "name": "VPS Trader",
        "price": "R$309,90",
        "link": "https://app.razehost.com.br/store/vps/vps-l5",
        "description": {
            "ram": "10 GB",
            "ssd": "80 GB",
            "cores": "6 núcleos",
        "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
        }
    },
    {
        "name": "VPS Trader",
        "price": "R$369,00",
        "link": "https://app.razehost.com.br/store/vps/vps-poseidon",
        "description": {
            "ram": "12 GB",
            "ssd": "90 GB",
            "cores": "6 núcleos",
         "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
        }
    },
    {
        "name": "VPS Trader",
        "price": "R$419,00",
        "link": "https://app.razehost.com.br/store/vps/vps-mestre",
        "description": {
            "ram": "16 GB",
            "ssd": "100 GB",
            "cores": "6 núcleos",
         "attrs": ["Anti DDoS Incluso", "AMD Ryzen", "MetaTrader"]
        }
    }
]



export default function Games() {
    return (
        <section className="container mx-auto px-6 flex-grow pt-[2%]">
            <section>
                <div>
                    <h1 className="text-5xl font-bold pt-2 text-center">
                        VPS Trader no Brasil
                    </h1>
                    <p className="text-muted pt-2 pb-2 text-center">
                        Escolha o plano ideal para seu negócio e evolua conforme suas necessidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                    {vps.map((vpsItem, index) => (
                        <div key={index} className="bg-[#0B0E13] border border-gray-800 p-4 rounded-lg shadow-lg">
                            <div className="p-2">
                                <h4 className="text-2xl font-bold">{vpsItem.name}</h4>
                                <h1 className="text-orange-400 font-bold text-4xl pt-2">
                                    {vpsItem.price} <span className="text-gray-400 font-normal text-sm">/mês*</span>
                                </h1>
                                <p className="text-sm text-gray-600 pt-1">Hospedado no Brasil 🇧🇷</p>
                            </div>
                            <div className="mt-4 border border-gray-900"></div>

                            <div className="mt-4">
                                <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                                    <p className="font-bold text-sm flex justify-center items-center gap-1"><MemoryStick size={16} /> {vpsItem.description.ram}</p>
                                    <p className="font-bold text-xs text-gray-500">RAM</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-5">
                                <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                                    <p className="font-bold text-sm flex justify-center items-center gap-1"><Cpu size={16} /> {vpsItem.description.cores}</p>
                                    <p className="font-bold text-xs text-gray-500">CPU</p>
                                </div>
                                <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                                    <p className="font-bold text-sm flex justify-center items-center gap-1"><HardDrive size={16} /> {vpsItem.description.ssd}</p>
                                    <p className="font-bold text-xs text-gray-500">SSD NVMe</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 pt-4 justify-center">
                                <div className="border-t-1 border-gray-900 flex-1"></div>
                                <p className="text-xs flex gap-1 items-center, justify-center">
                                    <MonitorCog size={13} color="green" />Painel de Controle
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
                                <p className="text-gray-300 text-[14px] pt-1">Ofereça a melhor experiência de jogo com nossos servidores VPS equipados com processadores AMD Ryzen, otimizados para jogos exigentes e altas cargas de trabalho, garantindo desempenho superior.</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <BrainCircuit color="orange" size={26} />
                                <h3 className="font-bold pt-3">SSD NVMe</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Aproveite a velocidade do SSD NVMe em nossa VPS Gamer, proporcionando tempos de carregamento rápidos e a melhor performance para servidores de jogos e aplicações pesadas..</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <ShieldCheck color="orange" size={26} />
                                <h3 className="font-bold pt-3">Proteção DDoS</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Mantenha seus servidores de jogos seguros com nossa proteção DDoS avançada. Garantimos que seu servidor esteja sempre protegido contra ataques, proporcionando uma jogabilidade sem interrupções.</p>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <Zap color="orange" size={26} />
                                <h3 className="font-bold pt-3">Exitlag</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Adquira a melhor plataforma de solução de lags do mercado, você pode incluir a Exitlag adicional no seu serviço, juntamente com a RazeHost.</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <BrainCircuit color="orange" size={26} />
                                <h3 className="font-bold pt-3">Baixa latência</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Com servidores VPS em São Paulo, garantimos baixa latência e conexão rápida para jogadores em todo o Brasil, oferecendo uma experiência de jogo sem lag e com alto desempenho.</p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <div>
                                <ShieldCheck color="orange" size={26} />
                                <h3 className="font-bold pt-3">Suporte</h3>
                                <p className="text-gray-300 text-[14px] pt-1">Com 99,9% de uptime, seus servidores estarão sempre online, permitindo que você aproveite seus jogos e aplicações sem falhas, dia e noite.</p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </section>

            <section className="container mx-auto max-w-9xl  pt-[10%]">
                <Card className="bg-[#0E131D] rounded-sm">
                    <CardBody className="p-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
                            <div className="col-span-1 md:col-span-4">
                                <p className="font-bold text-gray-300 text-xl pt-1">
                                   Você pode hospedar qualquer projeto, <br /> seja servidor de jogo, BOT, site e outras aplicações.
                                </p>
                            </div>
                            <div className="col-span-1">
                                <Image src="/vps-trader/metatrader.webp" alt="logo_xp" width={50} height={50} />
                                <p className="text-sm font-bold pt-5">Meta Trader</p>
                                <p className="pt-1 text-xs">
                                Você gosta de operar seus ativos no Metatrader 4, Metatrader 5? Com nossa VPS Trader com AMD Ryzen você consegue rodar qualquer aplicação que desejar.
                                </p>
                            </div>
                            <div className="col-span-1">
                                <Image src="/vps-trader/xp.webp" alt="logo_xp" width={50} height={50} />
                                <p className="text-sm font-bold pt-5">XP Investimentos</p>
                                <p className="pt-1 text-xs">
                                Você gosta de operar seus ativos na Binance? Com nossa VPS Trader com AMD Ryzen você consegue rodar qualquer aplicação que desejar.
                                </p>
                            </div>
                            <div className="col-span-1">
                                <Image src="/vps-trader/binance.webp" alt="logo_xp" width={50} height={50} />
                                <p className="text-sm font-bold pt-5">Binance</p>
                                <p className="pt-1 text-xs">
                                    Você gosta de operar seus ativos na Binance? Com nossa VPS Trader com AMD Ryzen você consegue rodar qualquer aplicação que desejar.
                                </p>
                            </div>
                            <div className="col-span-1">
                                <Image src="/vps-trader/rico.webp" alt="logo_xp" width={50} height={50} />
                                <p className="text-sm font-bold pt-5">Rico</p>
                                <p className="pt-1 text-xs">
                                Você gosta de operar seus ativos na Rico? Com nossa VPS Trader com AMD Ryzen você consegue rodar qualquer aplicação que desejar.
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </section>

            <PaymentsSectionsComponent />
        </section>
    );
}
