'use client'
import { Button } from "@nextui-org/button";
import logo_companies from "@/public/logos_companies.png"
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";
import { BrainCircuit, EarthLock, ShieldCheck, SquareMousePointer, Zap } from "lucide-react";


export default function Home() {
    return (
        <>
            <section className="container mx-auto px-6 flex-grow">
                <section className="pt-[5%]">
                    <h1 className="text-6xl font-bold pt-4">Localização e Anti DDoS</h1>
                    <p className="text-muted pt-5 pb-5">
                        Proteção Anti DDoS com capacidade total de até 248TB/s. Mitigação a tempo real, sempre ativa, garantido o tempo de resposta mais rápido contra qualquer ameaças/ataques. Todos nossos servidores são em São Paulo, e também contamos com o modelo de proteção Cloudflare Magic Transit. Com 296TB/s. de capacidade de rede, 23x vezes maior que os maiores ataques DDoS já registrados, a Cloudflare pode mitigar ataques de qualquer tamanho.
                    </p>
                    <div className="pt-5 flex gap-3">
                        <Button className="rounded-md bg-transparent text-white border">Começar agora</Button>
                        <Button className="rounded-md bg-transparent text-white bg-[#18181B]">Entrar em contato</Button>
                    </div>
                </section>

                <section className="pt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <Zap color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Sem taxas de ingresso</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <BrainCircuit color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Sem taxas de ingresso</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="bg-[#0A0C10] rounded-sm">
                            <CardBody>
                                <div>
                                    <ShieldCheck color="orange" size={26} />
                                    <h3 className="font-bold pt-3">Sem taxas de ingresso</h3>
                                    <p className="text-gray-300 text-[14px] pt-1">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </section>
            </section>

            <section className="bg-[#07090c] mt-10 p-5">
                <div className="container mx-auto px-6 flex-grow pt-10">
                    <section>
                        <h1 className="text-4xl font-bold">Qual a capacidade?</h1>
                        <p className="text-muted pt-2 pb-5">Garantimos toda a segurança e estabilidade da proteção DDoS com capacidade de até <span className="text-orange-400">248 TB/s.</span></p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 pb-10">
                            <Card className="bg-[#0A0C10] rounded-sm">
                                <CardBody>
                                    <div>
                                        <center>
                                            <ShieldCheck color="orange" size={26} />
                                        </center>
                                        <h3 className="font-bold text-center pt-3">Mitigação em tempo real</h3>
                                        <p className="text-gray-300 text-[14px] pt-1 text-center">
                                            Mantemos nossa rede permanentemente ativa para oferecer a resposta mais ágil contra qualquer tipo de ameaça ou ataque. Sua segurança é nossa prioridade.
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
                                        <h3 className="font-bold text-center pt-3">Sem null-route/blackhole</h3>
                                        <p className="text-gray-300 text-[14px] pt-1 text-center">
                                            Optamos por não empregar técnicas como null-route/blackhole e redirecionamento de rota em nosso sistema de proteção. Priorizamos as abordagens mais eficazes.
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
                                        <h3 className="font-bold text-center pt-3">Direto ao ponto</h3>
                                        <p className="text-gray-300 text-[14px] pt-1 text-center">
                                            Realizamos a mitigação dos ataques diretamente em sua origem, garantindo sempre recursos disponíveis para uso.
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
