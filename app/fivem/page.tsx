"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";
import {
  BrainCircuit,
  CircleCheckBig,
  Cpu,
  HardDrive,
  MemoryStick,
  MonitorCog,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { PaymentsSectionsComponent } from "../_components/payments-section.component";
import { CardPromotion } from "../_components/card-promotion";

const vps = [
  {
    name: "VPS Lester",
    price: "R$39,90",
    link: "https://app.razehost.com.br/store/vps/vps-hermes",
    description: {
      ram: "1 GB",
      ssd: "30 GB",
      cores: "1 núcleo",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "VPS Tommy Vercetti",
    price: "R$69,90",
    players: "20 jogadores",
    link: "https://app.razehost.com.br/store/vps/vps-l1",
    description: {
      ram: "2 GB",
      ssd: "40 GB",
      cores: "2 núcleos",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "VPS Niko Bellic",
    price: "R$99,90",
    players: "40-60 jogadores",
    link: "https://app.razehost.com.br/store/vps/vps-l2",
    description: {
      ram: "4 GB",
      ssd: "50 GB",
      cores: "3 núcleos",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "VPS Michael",
    price: "R$159,90",
    players: "60-80 jogadores",
    link: "https://app.razehost.com.br/store/vps/vps-l3",
    description: {
      ram: "6 GB",
      ssd: "60 GB",
      cores: "4 núcleos",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "VPS Trevor",
    price: "R$199,90",
    players: "80-120 jogadores",
    link: "https://app.razehost.com.br/store/vps/vps-l4",
    description: {
      ram: "8 GB",
      ssd: "70 GB",
      cores: "5 núcleos",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "VPS Franklin",
    price: "R$249,90",
    players: "120-140 jogadores",
    link: "https://app.razehost.com.br/store/vps/vps-l5",
    description: {
      ram: "10 GB",
      ssd: "80 GB",
      cores: "6 núcleos",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "VPS Big Smoke",
    price: "R$299,90",
    players: "140-160 jogadores",
    link: "https://app.razehost.com.br/store/vps/vps-poseidon",
    description: {
      ram: "12 GB",
      ssd: "90 GB",
      cores: "6 núcleos",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "VPS CJ",
    price: "R$349,90",
    players: "160-200 jogadores",
    link: "https://app.razehost.com.br/store/vps/vps-mestre",
    description: {
      ram: "16 GB",
      ssd: "100 GB",
      cores: "6 núcleos",
      attrs: ["Cachê-externo", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
];

export default function Games() {
  return (
    <section className="container mx-auto px-6 flex-grow pt-[2%]">
      <CardPromotion />

      {/* Título e descrição */}
      <section>
        <div>
          <h1 className="text-5xl font-bold pt-2 text-center">
            VPS FiveM no Brasil com Anti DDoS Incluso
          </h1>
          <p className="text-muted pt-2 pb-2 text-center">
            Escolha o plano ideal para seu negócio e evolua conforme suas
            necessidades.
          </p>
        </div>

        {/* Grid dos Planos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {vps.map((vpsItem, index) => (
            <div
              key={index}
              className="bg-[#0B0E13] border border-gray-800 p-4 rounded-lg shadow-lg"
            >
              <div className="p-2">
                <h4 className="text-2xl font-bold">{vpsItem.name}</h4>

                {/* Badge jogadores */}
                {vpsItem.players && (
                  <div className="inline-block bg-orange-400 text-white text-xs font-bold py-1 px-3 rounded-full mt-2">
                    {vpsItem.players}
                  </div>
                )}

                <h1 className="text-orange-400 font-bold text-4xl pt-2">
                  {vpsItem.price}
                  <span className="text-gray-400 font-normal text-sm"> /mês*</span>
                </h1>
                <p className="text-sm text-gray-600 pt-1">
                  Hospedado no Brasil 🇧🇷
                </p>
              </div>

              <div className="mt-4 border border-gray-900"></div>

              {/* Info RAM */}
              <div className="mt-4">
                <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                  <p className="font-bold text-sm flex justify-center items-center gap-1">
                    <MemoryStick size={16} /> {vpsItem.description.ram}
                  </p>
                  <p className="font-bold text-xs text-gray-500">RAM</p>
                </div>
              </div>

              {/* Info CPU + SSD */}
              <div className="flex gap-4 mt-5">
                <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                  <p className="font-bold text-sm flex justify-center items-center gap-1">
                    <Cpu size={16} /> {vpsItem.description.cores}
                  </p>
                  <p className="font-bold text-xs text-gray-500">CPU</p>
                </div>
                <div className="bg-transparent border border-gray-900 w-full text-center p-2 rounded-lg">
                  <p className="font-bold text-sm flex justify-center items-center gap-1">
                    <HardDrive size={16} /> {vpsItem.description.ssd}
                  </p>
                  <p className="font-bold text-xs text-gray-500">ARMAZENAMENTO</p>
                </div>
              </div>

              {/* Painel de controle */}
              <div className="flex items-center gap-1 pt-4 justify-center">
                <div className="border-t-1 border-gray-900 flex-1"></div>
                <p className="text-xs flex gap-1 items-center justify-center">
                  <MonitorCog size={13} color="green" /> Painel de Controle
                </p>
                <div className="border-t-1 border-gray-900 flex-1"></div>
              </div>

              {/* Benefícios */}
              {vpsItem.description.attrs.map((item, idx) => (
                <div key={idx} className="pt-4">
                  <p className="flex gap-4 text-sm pb-2">
                    <CircleCheckBig color="green" size={20} /> {item}
                  </p>
                </div>
              ))}

              {/* Botão */}
              <div className="pt-4">
                <a href={vpsItem.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-orange-400 text-white text-md font-bold"
                    size="md"
                  >
                    Adquirir
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefícios adicionais */}
      <section className="pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap color="orange" size={26} />,
              title: "AMD Ryzen 9",
              text: "Ofereça a melhor experiência de jogo com nossos servidores VPS equipados com processadores AMD Ryzen 9, otimizados para jogos exigentes e altas cargas de trabalho.",
            },
            {
              icon: <BrainCircuit color="orange" size={26} />,
              title: "SSD NVMe",
              text: "Aproveite a velocidade do SSD NVMe para garantir carregamento rápido e a melhor performance.",
            },
            {
              icon: <ShieldCheck color="orange" size={26} />,
              title: "Proteção DDoS",
              text: "Protegemos seu servidor contra ataques DDoS para garantir estabilidade e segurança em jogos online.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="bg-[#0A0C10] rounded-sm">
              <CardBody>
                <div>
                  {item.icon}
                  <h3 className="font-bold pt-3">{item.title}</h3>
                  <p className="text-gray-300 text-[14px] pt-1">{item.text}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Seção Exitlag, Latência, Suporte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[
            {
              icon: <Zap color="orange" size={26} />,
              title: "Exitlag",
              text: "Inclua Exitlag no seu serviço e otimize ainda mais sua conexão para jogos.",
            },
            {
              icon: <BrainCircuit color="orange" size={26} />,
              title: "Baixa Latência",
              text: "Servidores localizados em São Paulo, garantindo conexão rápida e com o menor ping.",
            },
            {
              icon: <ShieldCheck color="orange" size={26} />,
              title: "Suporte",
              text: "99,9% de uptime e atendimento ágil para que seu servidor fique sempre online.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="bg-[#0A0C10] rounded-sm">
              <CardBody>
                <div>
                  {item.icon}
                  <h3 className="font-bold pt-3">{item.title}</h3>
                  <p className="text-gray-300 text-[14px] pt-1">{item.text}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Sobre a RazeHost */}
      <div className="rounded-xl shadow-lg mt-12 p-5 bg-[#202024]">
        <h2 className="text-lg font-semibold">
          Qual a melhor host para Fivem?
        </h2>
        <p className="text-gray-400">
          A Raze Host é referência em hospedagem de alto desempenho, garantindo baixa latência e estabilidade máxima. Proteção DDoS avançada para servidores FiveM sem interrupções.
        </p>
      </div>

      {/* Seção de imagens e sistemas operacionais */}
      <section className="container mx-auto max-w-9xl pt-[10%]">
        <Card className="bg-[#0E131D] rounded-sm">
          <CardBody className="p-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
              <div className="col-span-1 md:col-span-4">
                <p className="font-bold text-gray-300 text-xl pt-1">
                  Você pode hospedar qualquer projeto, servidor de jogo, BOT, site e aplicações.
                </p>
              </div>
              {[
                { img: "/vps/windows.webp", title: "VPS FiveM Windows" },
                { img: "/vps/ubuntu.webp", title: "VPS Linux" },
                { img: "/vps/amd.webp", title: "VPS FiveM Ryzen" },
                { img: "/vps/brasil.webp", title: "VPS Brasil" },
              ].map((item, idx) => (
                <div key={idx} className="col-span-1">
                  <Image src={item.img} alt="logo" width={50} height={50} />
                  <p className="text-sm font-bold pt-5">{item.title}</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </section>

      {/* Pagamentos */}
      <PaymentsSectionsComponent />
    </section>
  );
}
