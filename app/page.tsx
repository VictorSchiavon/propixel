'use client'
import logo_companies from "@/public/logos_companies.webp";
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
              RazeHost
            </Button>
          </center>
          <h1 className="text-6xl font-bold text-center pt-4">Datacenter no Brasil</h1>
          <p className="text-muted pt-5 pb-5 text-center">Potencialize sua presença online com a RazeHost, especialista em servidores VPS para jogos e aplicações no Brasil. <br /> Ferramentas para tudo que seu projeto precisa e uma equipe que está sempre disposta a te levar ao sucesso.</p>
          <div className="flex gap-3 justify-center pt-10 pb-10">
          <a href="/vps" target="_blank" rel="noopener noreferrer">
  <Button className="rounded-md bg-orange-500 text-white">VPS Gamer</Button>
</a>

<a href="/games" target="_blank" rel="noopener noreferrer">
  <Button className="rounded-md bg-transparent text-white bg-[#18181B]">Hospedagem de Jogos</Button>
</a>
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
                  <p className="text-gray-300 text-[14px] pt-1">Proteção com Cloudflare, firewall premium e DNS de alta performance para conexões seguras e rápidas.</p>
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
                  <p className="text-gray-300 text-[14px] pt-1">Garantimos 99,9% de uptime, mantendo seus sites e jogos sempre online e sem interrupções.                  </p>
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
                  <p className="text-gray-300 text-[14px] pt-1">Suporte ágil e eficiente, pronto para ajudar você a qualquer hora, com atendimento rápido e amigável.                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </section>


      <section className="bg-[#07090c] mt-10 p-5">
        <div className="container mx-auto px-6 flex-grow">
          <section>
            <h1 className="text-4xl font-bold text-center pt-[5%]">Impulsione seu negócio com <br /> <span className="text-orange-400">soluções de hospedagem de </span> alto desempenho.</h1>
            <p className="text-muted pt-2 pb-5 text-center">Potencialize sua presença online com a RazeHost, especialista em servidores VPS para jogos e aplicações no Brasil</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-[5%]">
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Latência</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">20<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Experiência de jogo fluida e resposta rápida com latência mínima.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Redes</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">10<span className="text-3xl font-bold">GBPS</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Conexão estável e rápida, garantindo serviços sempre disponíveis.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Suporte 24/7</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">24<span className="text-3xl font-bold">Horas</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Assistência rápida e eficiente a qualquer hora, todos os dias.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Proteção DDoS</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">296<span className="text-3xl font-bold">Tbps</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Defesa integrada contra ataques, mantendo seus serviços seguros e estáveis.</p>
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