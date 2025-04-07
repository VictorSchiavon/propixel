'use client'
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { Network, ShieldCheck, ServerCog, SatelliteDish, Radar } from "lucide-react";

export default function Home() {
    return (
        <>
            <section className="container mx-auto px-6 flex-grow">
                <section className="pt-[5%]">
                    <h1 className="text-6xl font-bold pt-4">Informações sobre nossa Infraestrutura</h1>
                    <p className="text-muted pt-5 pb-5">
                    Conectados ao IX.br São Paulo e carriers Tier 1, oferecemos baixa latência, rotas otimizadas e proteção DDoS Always On para garantir a performance e segurança que sua operação precisa.                    </p>
                    <div className="pt-5 flex gap-3">
                        <Button className="rounded-md bg-transparent text-white border" onClick={() => window.location.href = 'https://discord.gg/p8YXcEuKdH'}>Começar agora</Button>
                        <Button className="rounded-md bg-transparent text-white bg-[#18181B]" onClick={() => window.location.href = 'https://discord.gg/p8YXcEuKdH'}>Entrar em contato</Button>
                    </div>
                </section>

                <section className="pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <Network color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Rede de Alta Performance</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">
                                        Conexão direta com o IX.br São Paulo e principais pontos de troca de tráfego nacionais, além de peering com provedores, clouds e CDNs. Baixa latência e máxima estabilidade para sua operação.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <ShieldCheck color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Proteção Avançada</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">
                                        Sistema Anti-DDoS Always On, sem blackhole ou null route. Monitoramento constante do tráfego e certificações de segurança que seguem as melhores práticas da Internet.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <ServerCog color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Infraestrutura Confiável</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">
                                        Equipamentos das melhores marcas do mercado e opções de colocation de 1U até Cage Rack. Tudo preparado para garantir desempenho, escalabilidade e segurança.
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>

                <section className="pt-20">
                    <h2 className="text-3xl font-bold mb-6">Upstreams e Peerings</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300 text-sm">
                        <div className="bg-[#0A0C10] p-4 rounded-sm">
                            <SatelliteDish className="mb-2" size={20} color="orange" />
                            <p><strong>Cirion / Lumen</strong><br />AS3356</p>
                        </div>
                        <div className="bg-[#0A0C10] p-4 rounded-sm">
                            <Radar className="mb-2" size={20} color="orange" />
                            <p><strong>Cloudflare</strong><br />AS13335</p>
                        </div>
                        <div className="bg-[#0A0C10] p-4 rounded-sm">
                            <Radar className="mb-2" size={20} color="orange" />
                            <p><strong>OpenX</strong><br />AS263444</p>
                        </div>
                        <div className="bg-[#0A0C10] p-4 rounded-sm">
                            <Radar className="mb-2" size={20} color="orange" />
                            <p><strong>TGlobal Networks</strong><br />AS53427</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
