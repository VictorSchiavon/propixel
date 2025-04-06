'use client'
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";

export default function TermsOfUse() {
    return (
        <>
            <section className="container mx-auto px-6 flex-grow">
                <section className="pt-[5%]">
                    <h1 className="text-6xl font-bold pt-4">Termos de Uso</h1>
                    <p className="text-muted pt-5 pb-5">
                        Este documento estabelece os Termos de Uso dos serviços prestados pela RazeHost. Ao utilizar nossos serviços, você concorda com todas as condições descritas abaixo.
                    </p>
                    <div className="pt-5 flex gap-3">
                        <Button className="rounded-md bg-transparent text-white border" onClick={() => window.location.href = '/'}>Voltar ao início</Button>
                        <Button className="rounded-md bg-transparent text-white bg-[#18181B]" onClick={() => window.location.href = 'https://discord.gg/p8YXcEuKdH'}>Fale conosco</Button>
                    </div>
                </section>

                <section className="pt-16 pb-20 space-y-6">
                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">1. Aceitação dos Termos</h2>
                        <p className="text-gray-300 text-[15px]">
                            Ao contratar qualquer serviço da RazeHost, você declara ter lido, compreendido e aceito os termos e condições descritos neste documento. Caso não concorde com algum dos termos, por favor, não utilize nossos serviços.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">2. Pagamentos</h2>
                        <p className="text-gray-300 text-[15px]">
                            É responsabilidade do cliente manter seus pagamentos em dia. Para métodos que exigem comprovação (ex: depósito/transferência bancária), é necessário o envio do comprovante. Consulte o setor financeiro para informações sobre multas e juros por atraso. Serviços serão suspensos após 1 dia de atraso. Após 3 dias, os serviços serão cancelados permanentemente e os dados excluídos. Pendências em serviços adicionais causam suspensão geral. A RazeHost pode alterar valores e equipamentos para manter o equilíbrio econômico-financeiro, mediante aviso prévio.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">3. Backups</h2>
                        <p className="text-gray-300 text-[15px]">
                            A RazeHost não se responsabiliza por arquivos armazenados. O cliente deve manter cópias externas de segurança. Servidores dedicados e VPS não possuem backup incluso — a responsabilidade é do cliente.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">4. Cancelamentos e Reembolsos</h2>
                        <p className="text-gray-300 text-[15px]">
                            Contas que violarem estes termos poderão ser canceladas sem reembolso. Atitudes desrespeitosas também podem gerar suspensão ou encerramento da conta. O cliente pode solicitar cancelamento a qualquer momento via Central do Assinante. Garantimos reembolso em até 7 dias para planos convencionais (Art. 49 do CDC). Não há reembolso de servidores dedicados [Que são feitos sobre encomendas.] ou proteções adicionais.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">5. Política Anti-Spam</h2>
                        <p className="text-gray-300 text-[15px]">
                            Tolerância zero para spam ou mensagens não solicitadas. Inclui safelists e double opt-in. Contas envolvidas em spam podem ser encerradas sem aviso. Sites promovidos via spam são proibidos. IPs em blacklists resultam em suspensão imediata. Podemos desativar sites que violem esta política.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">6. Utilização de Tráfego (Bandwidth)</h2>
                        <p className="text-gray-300 text-[15px]">
                            Cada plano possui cota mensal de tráfego. O uso deve ser equilibrado. Tráfego não é cumulativo. Se o limite for excedido, o serviço será suspenso até o próximo ciclo, salvo contratação de recursos adicionais.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">7. Garantia de Disponibilidade (Uptime)</h2>
                        <p className="text-gray-300 text-[15px]">
                            Garantimos 99,9% de uptime mensal. Problemas técnicos que comprometam esse índice podem gerar créditos proporcionais, mediante comprovação. Ferramentas de terceiros podem ser desconsideradas. Solicitações via chamado na Central do Assinante. Ataques DDoS não geram compensação. Interrupções planejadas serão informadas previamente.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">8. Atividades Não Permitidas</h2>
                        <p className="text-gray-300 text-[15px]">
                            Proibido hospedar ou usar nossos serviços para: softwares piratas, lives/streaming, sites de cracks/cheats/warez, serviços financeiros não autorizados, AutoSurf/PTC/PTS/PPC, fraudes, loterias, ódio, hacking, brute-force, proxies abusivos, e-mails em massa, vírus/malware/backdoors ou qualquer conteúdo ilegal.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">9. Envio de Notificações</h2>
                        <p className="text-gray-300 text-[15px]">
                            Enviamos notificações automáticas por e-mail, SMS e WhatsApp com informações sobre faturas, vencimentos, descontos e demais comunicados relevantes.
                        </p>
                    </CardBody></Card>

                    <Card className="bg-[#0A0C10] rounded-sm"><CardBody>
                        <h2 className="font-bold text-xl pb-2">10. Alterações nos Termos</h2>
                        <p className="text-gray-300 text-[15px]">
                            A RazeHost pode alterar estes Termos de Uso a qualquer momento, com aviso prévio aos clientes.
                        </p>
                    </CardBody></Card>
                </section>
            </section>
        </>
    );
}
