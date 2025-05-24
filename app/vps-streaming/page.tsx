"use client"
import { Button } from "@nextui-org/button"
import { Card, CardBody, Tooltip } from "@nextui-org/react"
import {
  BrainCircuit,
  CircleCheckBig,
  Cpu,
  HardDrive,
  MemoryStick,
  MonitorIcon as MonitorCog,
  ShieldCheck,
  Zap,
  Globe,
  Wifi,
  Clock,
  Server,
  Award,
  CheckCircle2,
  Rocket,
} from "lucide-react"
import { PaymentsSectionsComponent } from "../_components/payments-section.component"
import { CardPromotion } from "../_components/card-promotion"

const vps = [
  {
    name: "Stream Starter",
    price: "R$39,90",
    users: "Até 100 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-hermes",
    description: {
      ram: "2 GB DDR5",
      ssd: "40 GB NVMe",
      cores: "1 núcleo",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "Stream Pro",
    price: "R$69,90",
    users: "Até 500 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-l1",
    description: {
      ram: "4 GB DDR5",
      ssd: "60 GB NVMe",
      cores: "2 núcleos",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "Stream Elite",
    price: "R$99,90",
    users: "Até 1000 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-l2",
    description: {
      ram: "8 GB DDR5",
      ssd: "80 GB NVMe",
      cores: "3 núcleos",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
    popular: true,
  },
  {
    name: "Stream Master",
    price: "R$159,90",
    users: "Até 2000 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-l3",
    description: {
      ram: "16 GB DDR5",
      ssd: "120 GB NVMe",
      cores: "4 núcleos",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "Stream Ultra",
    price: "R$199,90",
    users: "Até 5000 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-l4",
    description: {
      ram: "32 GB DDR5",
      ssd: "200 GB NVMe",
      cores: "6 núcleos",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "Stream Max",
    price: "R$249,90",
    users: "Até 8000 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-l5",
    description: {
      ram: "48 GB DDR5",
      ssd: "300 GB NVMe",
      cores: "8 núcleos",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "Stream Titan",
    price: "R$299,90",
    users: "Até 12000 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-poseidon",
    description: {
      ram: "64 GB DDR5",
      ssd: "400 GB NVMe",
      cores: "10 núcleos",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
  {
    name: "Stream Legend",
    price: "R$349,90",
    users: "Até 20000 espectadores",
    link: "https://app.razehost.com.br/store/vps/vps-mestre",
    description: {
      ram: "96 GB DDR5",
      ssd: "500 GB NVMe",
      cores: "12 núcleos",
      attrs: ["Uplink 1Gbps", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
]

const features = [
  {
    icon: <Zap className="text-orange-500" size={26} />,
    title: "AMD Ryzen 9",
    text: "Potência máxima com processadores AMD Ryzen 9, perfeitos para codificação de vídeo em tempo real e streaming de alta qualidade.",
  },
  {
    icon: <BrainCircuit className="text-orange-500" size={26} />,
    title: "Memória DDR5",
    text: "Aproveite a velocidade da memória DDR5 para garantir desempenho fluido em transmissões ao vivo e multitarefa intensiva.",
  },
  {
    icon: <HardDrive className="text-orange-500" size={26} />,
    title: "SSD NVMe",
    text: "Armazenamento NVMe ultrarrápido para carregamento instantâneo de conteúdos e gerenciamento eficiente de grandes arquivos de mídia.",
  },
  {
    icon: <Wifi className="text-orange-500" size={26} />,
    title: "Uplink 1Gbps",
    text: "Transmissão sem interrupções com uplink de 1Gbps, ideal para streaming em alta resolução para milhares de espectadores.",
    highlight: true,
  },
  {
    icon: <ShieldCheck className="text-orange-500" size={26} />,
    title: "Proteção DDoS",
    text: "Mantenha suas lives seguras com proteção Anti-DDoS avançada, garantindo estabilidade mesmo sob ataques.",
    highlight: true,
  },
  {
    icon: <Server className="text-orange-500" size={26} />,
    title: "Suporte 24/7",
    text: "Suporte técnico especializado 24/7 para resolver qualquer problema e manter suas transmissões sempre online.",
  },
]

export default function Streaming() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
          alt="Hospedagem de Streaming"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1 mb-4">
            <Rocket size={16} className="text-orange-400" />
            <span className="text-sm font-medium text-orange-400">A melhor hospedagem para streaming</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            VPS para Streaming com <span className="text-orange-400">AMD Ryzen 9 e DDR5</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Hospedagem otimizada para lives, com uplink de 1Gbps e proteção Anti-DDoS para transmissões estáveis e de alta qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg"
              size="lg"
              as="a"
              href="#planos"
            >
              Ver Planos
            </Button>
            <Button
              className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-6 text-lg"
              size="lg"
              as="a"
              href="#beneficios"
            >
              Conheça os Benefícios
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-y border-orange-500/20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400">99.9%</h3>
              <p className="text-gray-300 mt-2">Uptime Garantido</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400">1Gbps</h3>
              <p className="text-gray-300 mt-2">Uplink</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400">24/7</h3>
              <p className="text-gray-300 mt-2">Suporte Técnico</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400">15ms</h3>
              <p className="text-gray-300 mt-2">Latência Média</p>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 flex-grow pt-12">
        <CardPromotion />

        {/* Título e descrição */}
        <section id="planos" className="pt-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1 mb-4">
              <Server size={16} className="text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Planos para Streaming</span>
            </div>
            <h2 className="text-4xl font-bold">Hospedagem de Streaming no Brasil com Anti-DDoS</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Escolha o plano perfeito para suas lives e expanda sua audiência com desempenho impecável. Todos os planos incluem uplink de 1Gbps.
            </p>
          </div>

          {/* Grid dos Planos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            {vps.map((vpsItem, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-b from-[#0B0E13] to-[#0F1319] border ${
                  vpsItem.popular ? "border-orange-400" : "border-gray-800"
                } p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-orange-500/10`}
              >
                {vpsItem.popular && (
                  <div className="absolute -top-3 -right-3 bg-orange-400 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                    MAIS VENDIDO
                  </div>
                )}
                <div className="p-2">
                  <h4 className="text-2xl font-bold">{vpsItem.name}</h4>
                  {vpsItem.users && (
                    <div className="inline-block bg-orange-400/20 border border-orange-400/30 text-orange-400 text-xs font-bold py-1 px-3 rounded-full mt-2">
                      {vpsItem.users}
                    </div>
                  )}
                  <h1 className="text-orange-400 font-bold text-4xl pt-4">
                    {vpsItem.price}
                    <span className="text-gray-400 font-normal text-sm"> /mês*</span>
                  </h1>
                  <div className="flex items-center gap-2 pt-1">
                    <Globe size={14} className="text-green-500" />
                    <p className="text-sm text-gray-400">Hospedado no Brasil 🇧🇷</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-gray-800 pt-4"></div>
                <div className="mt-4">
                  <Tooltip content="Memória DDR5 para streaming de alta performance">
                    <div className="bg-[#0A0C10] border border-gray-800 w-full text-center p-3 rounded-lg hover:border-orange-400/50 transition-colors">
                      <p className="font-bold text-sm flex justify-center items-center gap-2">
                        <MemoryStick size={18} className="text-orange-400" /> {vpsItem.description.ram}
                      </p>
                      <p className="font-bold text-xs text-gray-500 mt-1">RAM</p>
                    </div>
                  </Tooltip>
                </div>
                <div className="flex gap-4 mt-5">
                  <Tooltip content="Núcleos de processador AMD Ryzen 9">
                    <div className="bg-[#0A0C10] border border-gray-800 w-full text-center p-3 rounded-lg hover:border-orange-400/50 transition-colors">
                      <p className="font-bold text-sm flex justify-center items-center gap-2">
                        <Cpu size={18} className="text-orange-400" /> {vpsItem.description.cores}
                      </p>
                      <p className="font-bold text-xs text-gray-500 mt-1">CPU</p>
                    </div>
                  </Tooltip>
                  <Tooltip content="Armazenamento SSD NVMe para arquivos de mídia">
                    <div className="bg-[#0A0C10] border border-gray-800 w-full text-center p-3 rounded-lg hover:border-orange-400/50 transition-colors">
                      <p className="font-bold text-sm flex justify-center items-center gap-2">
                        <HardDrive size={18} className="text-orange-400" /> {vpsItem.description.ssd}
                      </p>
                      <p className="font-bold text-xs text-gray-500 mt-1">SSD NVMe</p>
                    </div>
                  </Tooltip>
                </div>
                <div className="flex items-center gap-1 pt-6 justify-center">
                  <div className="border-t border-gray-800 flex-1"></div>
                  <p className="text-xs flex gap-1 items-center justify-center text-green-500">
                    <MonitorCog size={14} /> Painel de Controle Intuitivo
                  </p>
                  <div className="border-t border-gray-800 flex-1"></div>
                </div>
                <div className="mt-4 space-y-3">
                  {vpsItem.description.attrs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CircleCheckBig className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <a href={vpsItem.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${vpsItem.popular ? "bg-orange-400" : "bg-[#1A1D23] hover:bg-orange-400/80"} text-white text-md font-bold transition-all duration-300`}
                      size="lg"
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
        <section id="beneficios" className="pt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1 mb-4">
              <Award size={16} className="text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Diferenciais Exclusivos</span>
            </div>
            <h2 className="text-4xl font-bold">Por que escolher a RazeHost para Streaming?</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Infraestrutura otimizada para streaming, com recursos que garantem qualidade, estabilidade e alcance para sua audiência.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className={`bg-gradient-to-br ${feature.highlight ? "from-[#0A0C10] to-[#141A26] border-orange-500/30" : "from-[#0A0C10] to-[#0F1319] border-gray-800/50"} border rounded-xl shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:scale-105`}
              >
                <CardBody className="p-6">
                  <div
                    className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${feature.highlight ? "bg-orange-500/20" : "bg-gray-800/50"}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className={`font-bold text-xl ${feature.highlight ? "text-orange-400" : "text-white"}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-[15px] mt-3 leading-relaxed">{feature.text}</p>
                  {feature.highlight && (
                    <div className="mt-4 flex items-center gap-2 text-orange-400 text-sm font-medium">
                      <CheckCircle2 size={16} />
                      <span>Recurso Premium</span>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* Uplink Destacado */}
        <section className="mt-20 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-900/20 z-0"></div>
          <div className="absolute inset-0 bg-[url('/network-bg.webp')] bg-cover bg-center opacity-20 z-0"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/30 border border-orange-500/40 rounded-full px-4 py-1 mb-4">
                  <Wifi size={16} className="text-orange-400" />
                  <span className="text-sm font-medium text-orange-400">Velocidade Máxima</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Uplink de 1Gbps para Streaming</h2>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  Nosso uplink de 1Gbps garante transmissões em alta resolução sem buffering, mesmo para grandes audiências.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Streaming em 4K sem interrupções",
                    "Suporte para plataformas como Twitch e YouTube",
                    "Transmissão estável para milhares de espectadores",
                    "Otimizado para OBS e outros softwares de streaming",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xl font-bold p-3 rounded-full z-20 shadow-lg">
                    1Gbps
                  </div>
                  <div className="absolute Oppenheimer
                    <Wifi size={60} className="text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Baixa Latência Destacada */}
        <section className="mt-12 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80 z-0"></div>
          <div className="absolute inset-0 bg-[url('/latency-bg.webp')] bg-cover bg-center opacity-20 z-0"></div>
          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-3xl opacity-20"></div>
                  <img src="/latencia.png" alt="Baixa Latência" className="relative z-10 rounded-lg w-full h-auto" />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-xl font-bold p-3 rounded-full z-20 shadow-lg">
                    15ms
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-500/80 text-white p-4 rounded-full z-20 shadow-lg">
                    <Clock size={60} />
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-green-500/30 border border-green-500/40 rounded-full px-4 py-1 mb-4">
                  <Clock size={16} className="text-green-400" />
                  <span className="text-sm font-medium text-green-400">Resposta Instantânea</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Baixa Latência para Lives Perfeitas</h2>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  Servidores em São Paulo garantem latência média de 15ms, ideal para streaming ao vivo sem atrasos.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Servidores localizados em São Paulo",
                    "Latência média de 15ms para espectadores brasileiros",
                    "Conexões otimizadas para minimizar jitter",
                    "Compatível com ferramentas de streaming como OBS",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre a RazeHost */}
        <div className="rounded-xl shadow-lg mt-16 p-8 bg-gradient-to-br from-[#202024] to-[#1A1D23] border border-gray-800">
          <h2 className="text-2xl font-bold text-white">Qual a melhor hospedagem para streaming?</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            A RazeHost é a escolha ideal para streamers no Brasil, oferecendo servidores otimizados com AMD Ryzen 9, memória DDR5 e SSD NVMe. Nosso uplink de 1Gbps garante transmissões em alta qualidade, enquanto a proteção Anti-DDoS mantém suas lives seguras.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Com servidores em São Paulo e latência média de 15ms, proporcionamos uma experiência fluida para você e sua audiência. Nosso suporte 24/7 está pronto para ajudar com configurações de OBS, plataformas de streaming e muito mais.
          </p>
        </div>

        {/* Seção de imagens e sistemas operacionais */}
        <section className="container mx-auto max-w-9xl pt-20">
          <Card className="bg-gradient-to-br from-[#0E131D] to-[#0A0C10] rounded-xl border border-gray-800">
            <CardBody className="p-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
                <div className="col-span-1 md:col-span-4">
                  <p className="font-bold text-gray-200 text-xl">
                    Hospede suas lives, plataformas de streaming, bots e aplicações com facilidade.
                  </p>
                </div>
                {[
                  { img: "/vps/windows.webp", title: "VPS Streaming Windows" },
                  { img: "/vps/ubuntu.webp", title: "VPS Streaming Linux" },
                  { img: "/vps/amd.webp", title: "VPS Ryzen Streaming" },
                  { img: "/vps/brasil.webp", title: "VPS Brasil Streaming" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="col-span-1 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-110"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-800/50 rounded-full p-3 mb-4">
                      <img src={item.img || "/placeholder.svg"} alt={item.title} className="w-[50px] h-[50px]" />
                    </div>
                    <p className="text-sm font-bold">{item.title}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="my-20 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-orange-900/30 z-0"></div>
          <div className="absolute inset-0 bg-[url('/streaming-cta-bg.webp')] bg-cover bg-center opacity-20 z-0"></div>
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
              Pronto para levar suas lives ao próximo nível?
            </h2>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
              Comece agora com a RazeHost e alcance sua audiência com qualidade incomparável.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg"
                size="lg"
                as="a"
                href="#planos"
              >
                Ver Planos
              </Button>
              <Button
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-6 text-lg"
                size="lg"
                as="a"
                href="https://app.razehost.com.br/contact"
                target="_blank"
              >
                Falar com Suporte
              </Button>
            </div>
          </div>
        </section>

        <PaymentsSectionsComponent />
      </section>
    </>
  )
}