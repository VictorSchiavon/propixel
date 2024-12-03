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
          <p className="text-muted pt-5 pb-5 text-center">A RazeHost oferece serviços para potencializar seus serviços <br /> digitais para tudo que seu projeto precisa e uma equipe que está sempre disposta a te levar ao sucesso.</p>
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
                Com a confiança de milhares de empresas em todo o mundo
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
                    <h3 className="font-bold">Sem taxas de ingresso</h3>
                  </div>
                  <p className="text-gray-300 text-[14px] pt-1">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-[#0A0C10] rounded-sm">
              <CardBody>
                <div className="p-4">
                  <div className="flex gap-2">
                    <Zap size={18} className="mt-1" />
                    <h3 className="font-bold">Sem taxas de ingresso</h3>
                  </div>
                  <p className="text-gray-300 text-[14px] pt-1">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-[#0A0C10] rounded-sm">
              <CardBody>
                <div className="p-4">
                  <div className="flex gap-2">
                    <Zap size={18} className="mt-1" />
                    <h3 className="font-bold">Sem taxas de ingresso</h3>
                  </div>
                  <p className="text-gray-300 text-[14px] pt-1">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
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
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">15<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Redes</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">15<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Suporte 24/7</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">15<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
                  </div>
                </CardBody>
              </Card>
              <Card className="bg-[#0A0C10] rounded-sm">
                <CardBody>
                  <div>
                    <h3 className="font-bold text-center">Datacenter</h3>
                    <h1 className="text-6xl font-bold text-center pt-5 pb-5">15<span className="text-3xl font-bold">/ms</span></h1>
                    <p className="text-gray-300 text-[14px] pt-1 text-center">Com taxas ZERO para tráfego de entrada, torna-se simples e econômico armazenar e servir seus arquivos.</p>
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