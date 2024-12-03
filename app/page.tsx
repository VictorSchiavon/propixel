'use client'
import logo_companies from "@/public/logos_companies.png";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { Zap } from "lucide-react";
import Image from "next/image";
import { FaqSectionComponent } from "./_components/faq-section.component";
import { PaymentsSectionsComponent } from "./_components/payments-section.component";


export default function Home() {
  return (
    <>
      <section className="container mx-auto px-6 flex-grow">
        <section className="pt-[5%]">
          <center>
            <Button className="rounded-full border border-orange-400 text-sm p-4 bg-transparent" size="sm">
              <div className="h-3 w-3 bg-orange-500 rounded-full"></div>
              Raze Host - Referência no Mercado Nacional
            </Button>
          </center>
          <h1 className="text-6xl font-bold text-center pt-4">VPS Gamer e Host de Jogos</h1>
          <p className="text-muted pt-5 pb-5 text-center">Potencialize sua presença online com a RazeHost, especialista em servidores VPS para jogos e aplicações no Brasil. <br /> Ferramentas para tudo que seu projeto precisa e uma equipe que está sempre disposta a te levar ao sucesso..</p>
          <div className="flex gap-3 justify-center pt-10 pb-10">
            <Button className="rounded-md bg-orange-500 text-white">Começar agora</Button>
            <Button className="rounded-md bg-transparent text-white bg-[#18181B]">Entrar em contato</Button>
          </div>
        </section>

        <Divider className="mt-5" />
        <section className="pt-[4%]">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-md text-center">
                Usamos as melhores empresas do mundo
              </h1>
              <div className="pt-3">
                <Image src={logo_companies} alt="logo_companies" />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[5%]">
          <Divider className="mb-5" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#0A0C10] rounded-sm">
              <CardBody>
                <div className="p-4">
                  <div className="flex gap-2">
                    <Zap size={18} className="mt-1" />
                    <h3 className="font-bold">Segurança</h3>
                  </div>
                  <p className="text-gray-300 text-[14px] pt-1">Oferecemos uma solução completa com proteção Cloudflare, firewall premium para proteger seu site contra ataques e acessos não autorizados, além de um serviço DNS de alta performance, garantindo conexões rápidas e confiáveis para seus usuários.</p>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-[#0A0C10] rounded-sm">
              <CardBody>
                <div className="p-4">
                  <div className="flex gap-2">
                    <Zap size={18} className="mt-1" />
                    <h3 className="font-bold">Uptime 99,9%</h3>
                  </div>
                  <p className="text-gray-300 text-[14px] pt-1">Com nossos serviços, você pode contar com uma disponibilidade de 99,9% de uptime, garantindo que seus sites e jogos estejam sempre no ar. Nosso compromisso é oferecer uma experiência estável e sem interrupções para todos os nossos clientes..</p>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-[#0A0C10] rounded-sm">
              <CardBody>
                <div className="p-4">
                  <div className="flex gap-2">
                    <Zap size={18} className="mt-1" />
                    <h3 className="font-bold">Suporte rápido</h3>
                  </div>
                  <p className="text-gray-300 text-[14px] pt-1">Nosso suporte é ágil e amigável, pronto para resolver qualquer dúvida ou problema que você possa ter. Com uma equipe dedicada e sempre disponível, garantimos uma experiência tranquila e eficiente para nossos clientes.</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </section>


      <section className="bg-[#07090c] mt-10 p-5">
        <div className="container mx-auto px-6 flex-grow">
          <section>
            <h1 className="text-4xl font-bold text-center pt-[5%]">Potencialize seu negócio com <br /> <span className="text-orange-400">soluções de ponta</span> em hospedagem.</h1>
            <p className="text-muted pt-2 pb-5 text-center">A RazeHost oferece serviços para potencializar seus serviços <br /> digitais para tudo que seu projeto precisa e uma equipe que está sempre disposta a te levar ao sucesso.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-[5%]">
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Latência</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">20<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Com uma latência extremamente baixa, nossos servidores garantem uma experiência de navegação e jogo sem interrupções, proporcionando uma resposta rápida para seus usuários.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Redes</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">15<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Utilizamos redes de alta performance para assegurar uma conexão estável e veloz, garantindo que seus serviços permaneçam sempre rápidos e disponíveis, independentemente da demanda.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Suporte 24/7</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">15<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Nosso suporte está disponível 24/7, pronto para resolver qualquer questão com rapidez e eficiência, oferecendo a assistência necessária a qualquer hora do dia ou da noite.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Datacenter</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">15<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Com proteção DDoS integrada, nossos sistemas defendem seus serviços contra ataques, garantindo a continuidade e segurança do seu site e servidores sem preocupações.</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>
          <Divider className="mb-5 mt-5" />
          <FaqSectionComponent></FaqSectionComponent>
          <Divider className="mb-5 mt-5" />
          <PaymentsSectionsComponent />
        </div>
      </section>
    </>
  );
}