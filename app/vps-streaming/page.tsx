"use client"
import { Button } from "@nextui-org/button"
import { Card, CardBody, Tooltip } from "@nextui-org/react"
import {
  Cpu,
  HardDrive,
  MemoryStick,
  Wifi,
  Clock,
  MonitorSmartphone,
  ShieldCheck,
  Video,
  Cloud,
  Server,
  Rocket,
  Award,
  CheckCircle2
} from "lucide-react"
import { PaymentsSectionsComponent } from "../_components/payments-section.component"
import { CardPromotion } from "../_components/card-promotion"

const vps = [
  {
    name: "VPS Stream Start",
    price: "R$49,90",
    usecase: "Lives em 720p",
    link: "https://app.razehost.com.br/store/vps/vps-start-streaming",
    description: {
      ram: "4 GB DDR5",
      ssd: "50 GB NVMe",
      cores: "2 núcleos",
      attrs: ["Uplink Gamer 1Gbps", "Anti DDoS Incluso", "Ideal para OBS Studio"],
    },
  },
  {
    name: "VPS Stream Pro",
    price: "R$99,90",
    usecase: "Streaming 1080p",
    link: "https://app.razehost.com.br/store/vps/vps-pro-streaming",
    description: {
      ram: "8 GB DDR5",
      ssd: "100 GB NVMe",
      cores: "4 núcleos",
      attrs: ["Processador AMD Ryzen 9", "Alta Estabilidade", "Suporte a múltiplos softwares de stream"],
    },
  },
  {
    name: "VPS Stream Max",
    price: "R$149,90",
    usecase: "Transmissão 2K/4K",
    link: "https://app.razehost.com.br/store/vps/vps-max-streaming",
    description: {
      ram: "16 GB DDR5",
      ssd: "200 GB NVMe",
      cores: "6 núcleos",
      attrs: ["Streaming profissional", "Alta performance para múltiplas tarefas", "Painel com monitoramento em tempo real"],
    },
  },
]

const features = [
  {
    icon: <Cpu className="text-violet-500" size={26} />, title: "Ryzen 9 para Stream",
    text: "Desempenho de ponta com AMD Ryzen 9 para codificação de vídeo rápida e eficiente sem travamentos em transmissões."
  },
  {
    icon: <MemoryStick className="text-violet-500" size={26} />, title: "Memória DDR5",
    text: "Alta velocidade de leitura e escrita com memória DDR5, ideal para streaming multitarefa e edição leve."
  },
  {
    icon: <HardDrive className="text-violet-500" size={26} />, title: "Armazenamento NVMe",
    text: "Leitura e gravação de arquivos de mídia em alta velocidade com SSD NVMe de última geração."
  },
  {
    icon: <Wifi className="text-violet-500" size={26} />, title: "Uplink Gamer 1Gbps",
    text: "Conectividade superior para transmissões estáveis com menor ping e maior entrega de dados ao vivo."
  },
  {
    icon: <ShieldCheck className="text-violet-500" size={26} />, title: "Proteção Anti-DDoS",
    text: "Mantenha seu stream online mesmo sob ataque com nossa camada de proteção inteligente."
  },
  {
    icon: <Clock className="text-violet-500" size={26} />, title: "Alta Disponibilidade",
    text: "Uptime de 99,9% para você não se preocupar com quedas durante sua live."
  },
]

export default function StreamingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black z-10"></div>
        <img src="/streaming-hero.webp" alt="VPS para Streaming" className="w-full h-full object-cover absolute inset-0" />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-1 mb-4">
            <Rocket size={16} className="text-violet-400" />
            <span className="text-sm font-medium text-violet-400">Acelere suas lives com VPS dedicado</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            VPS para Streaming com <span className="text-violet-400">Ryzen 9 & DDR5</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Performance profissional com uplink gamer de 1Gbps, estabilidade e proteção DDoS. Pronto para OBS, Twitch, YouTube e mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-6 text-lg" size="lg" as="a" href="#planos">
              Ver Planos
            </Button>
            <Button className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-6 text-lg" size="lg" as="a" href="#beneficios">
              Conheça os Benefícios
            </Button>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="bg-gradient-to-r from-violet-500/10 to-violet-600/10 border-y border-violet-500/20">
        <div className="container mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-violet-400">99.9%</h3>
            <p className="text-gray-300 mt-2">Uptime Garantido</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-violet-400">1Gbps</h3>
            <p className="text-gray-300 mt-2">Conexão Gamer</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-violet-400">DDR5</h3>
            <p className="text-gray-300 mt-2">Memória de Alta Velocidade</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-violet-400">Ryzen 9</h3>
            <p className="text-gray-300 mt-2">Processamento Profissional</p>
          </div>
        </div>
      </div>

      {/* Promo */}
      <section className="container mx-auto px-6 pt-12">
        <CardPromotion />
      </section>

      {/* Planos */}
      <section id="planos" className="container mx-auto px-6 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-1 mb-4">
            <Server size={16} className="text-violet-400" />
            <span className="text-sm font-medium text-violet-400">Escolha o seu plano</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Hospedagem Profissional para Streamers</h2>
          <p className="text-gray-400 mt-4 text-lg">
            Planos com performance de ponta para transmissões ao vivo em múltiplas plataformas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {vps.map((item, idx) => (
            <Card key={idx} className="bg-gradient-to-b from-[#0B0E13] to-[#0F1319] border border-violet-600 p-4 rounded-lg shadow-lg hover:shadow-violet-600/20 hover:scale-105 transition">
              <CardBody>
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                <p className="text-violet-400 text-sm mt-1 font-semibold">{item.usecase}</p>
                <h1 className="text-violet-500 font-bold text-3xl mt-4">{item.price}<span className="text-sm text-gray-400"> /mês</span></h1>
                <div className="mt-4 border-t border-gray-800 pt-4 space-y-2">
                  <p className="text-sm text-gray-300 flex gap-2 items-center"><MemoryStick size={16} /> {item.description.ram}</p>
                  <p className="text-sm text-gray-300 flex gap-2 items-center"><Cpu size={16} /> {item.description.cores}</p>
                  <p className="text-sm text-gray-300 flex gap-2 items-center"><HardDrive size={16} /> {item.description.ssd}</p>
                </div>
                <div className="mt-4 space-y-2">
                  {item.description.attrs.map((att, i) => (
                    <p key={i} className="text-sm text-gray-400 flex gap-2 items-center"><CheckCircle2 className="text-green-500" size={16} /> {att}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold">Contratar</Button>
                  </a>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="pt-24 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-1 mb-4">
            <Award size={16} className="text-violet-400" />
            <span className="text-sm font-medium text-violet-400">Infraestrutura Profissional</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Por que escolher a RazeHost para streaming?</h2>
          <p className="text-gray-400 mt-4 text-lg">
            Recursos premium, estabilidade de rede e hardware de última geração para quem leva o conteúdo a sério.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="bg-gradient-to-b from-[#0A0C10] to-[#0F1319] border border-gray-800/50 rounded-xl p-6 hover:shadow-violet-500/20">
              <CardBody>
                <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-violet-500/10">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{f.text}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="my-20 relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-violet-900/30 z-0"></div>
        <div className="absolute inset-0 bg-[url('/streaming-cta-bg.webp')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-10 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
            Pronto para elevar o nível das suas lives?
          </h2>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Tenha uma VPS dedicada, rápida e segura para garantir a melhor experiência para seus espectadores.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-6 text-lg" size="lg" as="a" href="#planos">
              Ver Planos
            </Button>
            <Button className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-6 text-lg" size="lg" as="a" href="https://app.razehost.com.br/contact" target="_blank">
              Fale com o Suporte
            </Button>
          </div>
        </div>
      </section>

      {/* Pagamentos */}
      <div className="container mx-auto px-6">
        <PaymentsSectionsComponent />
      </div>
    </div>
  )
}
