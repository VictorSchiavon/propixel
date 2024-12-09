'use client'
import { Button } from "@nextui-org/button";
import logo_companies from "@/public/logos_companies.webp"
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { BrainCircuit, EarthLock, ShieldCheck, SquareMousePointer, Zap } from "lucide-react";


export default function Home() {
    return (
        <>
            <section className="container mx-auto px-6 flex-grow">
                <section className="pt-[5%]">
                    <h1 className="text-6xl font-bold pt-4">Colocation no Brasil</h1>
                    <p className="text-muted pt-5 pb-5">
                        Estrutura montada com toda dedicação, qualidade e comprometimento. Estamos fornecendo a estrutura que você montaria <br /> para sua empresa, podendo ter certeza que seu servidor estará em boas mãos.
                    </p>
                    <div className="pt-5 flex gap-3">
                    <Button className="rounded-md bg-transparent text-white border" onClick={() => window.location.href = 'https://discord.gg/p8YXcEuKdH'}>Começar agora</Button>
         <a href="https://discord.gg/p8YXcEuKdH " className="rounded-md bg-transparent text-white bg-[#18181B]"> Entrar em contato</a>

                    </div>
                </section>

                <section className="pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <Zap color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Equipamentos de alto nível</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Redundância total de equipamentos para garantir que sua operação funcione 24/7/365 sem falhas.</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <BrainCircuit color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Segurança</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Datacenter projetado para oferecer o melhor aos nossos clientes, com estrutura construída para zero comprometimentos, garantindo máxima estabilidade e segurança.</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <ShieldCheck color="orange" size={26} />
                                    <h3 className="font-bold pt-3">1u até CageRack</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Opções de colocation variando de 1U até Cage Rack, adaptadas para atender suas necessidades específicas.</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </section>
        </>
    );
}
