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
                        Este documento estabelece os Termos de Uso dos serviços prestados pela nossa empresa. Ao utilizar nossos serviços, você concorda com todas as condições descritas abaixo.
                    </p>
                    <div className="pt-5 flex gap-3">
                        <Button className="rounded-md bg-transparent text-white border" onClick={() => window.location.href = '/'}>Voltar ao início</Button>
                        <Button className="rounded-md bg-transparent text-white bg-[#18181B]" onClick={() => window.location.href = 'https://discord.gg/p8YXcEuKdH'}>Fale conosco</Button>
                    </div>
                </section>

                <section className="pt-16 pb-20 space-y-6">
                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">1. Aceitação dos Termos</h2>
                            <p className="text-gray-300 text-[15px]">
                                Ao acessar ou usar qualquer um dos nossos serviços, você concorda em obedecer a estes Termos de Uso. Caso não concorde com algum dos termos, você não deve utilizar nossos serviços.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">2. Uso dos Serviços</h2>
                            <p className="text-gray-300 text-[15px]">
                                Você se compromete a utilizar os serviços de forma lícita, respeitando todas as leis vigentes no Brasil e quaisquer normas técnicas ou políticas internas que possuímos. Qualquer uso abusivo poderá resultar na suspensão ou cancelamento imediato dos serviços.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">3. Cadastro e Dados do Usuário</h2>
                            <p className="text-gray-300 text-[15px]">
                                Para utilizar determinados serviços, você deve fornecer informações pessoais precisas e atualizadas. Você é inteiramente responsável por manter a confidencialidade de seus dados e por todas as atividades realizadas com sua conta.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">4. Suspensão e Cancelamento</h2>
                            <p className="text-gray-300 text-[15px]">
                                Reservamo-nos o direito de suspender ou encerrar o acesso aos serviços, temporária ou permanentemente, caso o usuário viole estes termos, a legislação aplicável ou comprometa a segurança/funcionamento da infraestrutura.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">5. Pagamentos e Faturas</h2>
                            <p className="text-gray-300 text-[15px]">
                                O usuário é responsável pelo pagamento pontual das faturas emitidas. O não pagamento poderá acarretar a suspensão ou cancelamento do serviço sem aviso prévio. Valores pagos não são reembolsáveis, exceto em casos expressamente acordados.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">6. Limitação de Responsabilidade</h2>
                            <p className="text-gray-300 text-[15px]">
                                Não nos responsabilizamos por danos indiretos, lucros cessantes ou perdas de dados que possam ocorrer em decorrência da utilização ou impossibilidade de uso dos serviços, ainda que tenhamos sido avisados da possibilidade de tais danos.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">7. Alterações nos Termos</h2>
                            <p className="text-gray-300 text-[15px]">
                                Podemos modificar estes Termos de Uso a qualquer momento. Recomendamos que o usuário revise esta página periodicamente. O uso contínuo dos serviços após alterações implica na aceitação dos novos termos.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">8. Suporte e Contato</h2>
                            <p className="text-gray-300 text-[15px]">
                                Qualquer dúvida ou solicitação deve ser enviada por meio do nosso canal oficial no Discord ou e-mail informado no site. Nosso suporte está disponível para orientar o uso correto dos serviços contratados.
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="bg-[#0A0C10] rounded-sm">
                        <CardBody>
                            <h2 className="font-bold text-xl pb-2">9. Foro e Legislação Aplicável</h2>
                            <p className="text-gray-300 text-[15px]">
                                Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de [sua cidade], com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir eventuais controvérsias decorrentes deste contrato.
                            </p>
                        </CardBody>
                    </Card>
                </section>
            </section>
        </>
    );
}
