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
                    <h1 className="text-6xl font-bold pt-4">Crie seu servidor de Minecraft</h1>
                    <p className="text-muted pt-5 pb-5">
                    Ofereça uma experiência de jogo sem interrupções com servidores dedicados para Minecraft, com alta performance e estabilidade. Todos os nossos servidores estão localizados em São Paulo, garantindo baixa latência e conexão rápida para jogadores do Brasil. Com suporte para diversas versões do Minecraft, incluindo Java e Bedrock, além de compatibilidade com mods e plugins populares, seu servidor estará sempre otimizado para a melhor jogabilidade. Seja para jogar sozinho ou com uma grande comunidade, temos a solução perfeita para seu servidor de Minecraft, com recursos escaláveis e confiabilidade garantida.                    </p>
                    <div className="pt-5 flex gap-3">
                    <Button className="rounded-md bg-transparent text-white border" onClick={() => window.location.href = '/game/minecraft'}>Ver planos</Button>
                    <Button className="rounded-md bg-transparent text-white bg-[#18181B]" onClick={() => window.location.href = 'https://discord.gg/p8YXcEuKdH'}>Entrar em contato</Button>

                    </div>
                </section>

                <section className="pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <Zap color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Proteção DDoS para Servidores de Minecraft</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Mantenha seu servidor de Minecraft sempre online com nossa proteção DDoS avançada, ideal para evitar lag e quedas durante ataques.</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <BrainCircuit color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Hospedagem Minecraft com Suporte a Mods e Plugins</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Oferecemos servidores totalmente compatíveis com mods como Forge, Fabric, e plugins populares como Essentials e WorldEdit.</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <ShieldCheck color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Compatível com Todas as Versões de Minecraft</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Desde as versões mais antigas até as mais recentes, nossos servidores suportam Minecraft Vanilla, Spigot, Paper, Bukkit e Bedrock.</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </section>

            <section className="bg-[#07090c] mt-10 p-5">
                <div className="container mx-auto px-6 flex-grow pt-10">
                    <section>
                        <h2 className="text-4xl font-bold">Minecraft Java e Bedrock em um Só Lugar</h2>
                        <p className="text-muted pt-2 pb-5">Configure servidores para Java Edition e Bedrock Edition em um único painel, com fácil gerenciamento e recursos avançados. <span className="text-orange-400">Jogue JAVA e BEDROCK juntos.</span></p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 pb-10">
                            <Card className="bg-[#0A0C10] rounded-sm">
                                <CardBody>
                                    <div>
                                        <center>
                                            <ShieldCheck color="orange" size={26} />
                                        </center>
                                        <h3 className="font-bold text-center pt-3">Escalabilidade para Grandes Comunidades de Minecraft</h3>
                                        <p className="text-gray-300 text-[14px] pt-1 text-center">
                                        Seja para um servidor pequeno ou uma grande rede como Hypixel, oferecemos planos que se ajustam ao tamanho da sua comunidade.
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="bg-[#0A0C10] rounded-sm">
                                <CardBody>
                                    <div>
                                        <center>
                                            <EarthLock color="orange" size={26} />
                                        </center>
                                        <h3 className="font-bold text-center pt-3">Gerenciamento e instalação de mods</h3>
                                        <p className="text-gray-300 text-[14px] pt-1 text-center">
                                        Sim! Oferecemos suporte a mods como Pixelmon, RLCraft, e outros pacotes customizados.
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="bg-[#0A0C10] rounded-sm">
                                <CardBody>
                                    <div>
                                        <center>
                                            <SquareMousePointer color="orange" size={26} />
                                        </center>
                                        <h3 className="font-bold text-center pt-3">Gamepanel</h3>
                                        <p className="text-gray-300 text-[14px] pt-1 text-center">
                                        Gerencie plugins, mods, backups e mais com nosso painel de controle intuitivo, ideal para iniciantes e experientes.
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}