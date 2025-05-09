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
    name: "VPS Lester",
    price: "R$39,90",
    players: "Testes",
    link: "https://app.razehost.com.br/store/vps/vps-hermes",
    description: {
      ram: "1 GB",
      ssd: "30 GB",
      cores: "1 núcleo",
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
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
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
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
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
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
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
    popular: true,
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
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
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
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
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
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
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
      attrs: ["Cachê-externo 10GBPS", "Anti DDoS Incluso", "AMD Ryzen 9"],
    },
  },
]

const features = [
  {
    icon: <Zap className="text-orange-500" size={26} />,
    title: "AMD Ryzen 9",
    text: "Ofereça a melhor experiência de jogo com nossos servidores VPS equipados com processadores AMD Ryzen 9, otimizados para jogos exigentes e altas cargas de trabalho.",
  },
  {
    icon: <BrainCircuit className="text-orange-500" size={26} />,
    title: "SSD NVMe",
    text: "Aproveite a velocidade do SSD NVMe para garantir carregamento rápido e a melhor performance para seu servidor FiveM.",
  },
  {
    icon: <ShieldCheck className="text-orange-500" size={26} />,
    title: "Proteção DDoS",
    text: "Protegemos seu servidor contra ataques DDoS para garantir estabilidade e segurança em jogos online, mantendo sua comunidade sempre conectada.",
  },
  {
    icon: <Wifi className="text-orange-500" size={26} />,
    title: "Cachê-externo 10GBPS",
    text: "Nosso sistema de cachê-externo com velocidade de 10GBPS garante carregamento ultrarrápido de recursos e uma experiência sem lag para seus jogadores.",
    highlight: true,
  },
  {
    icon: <Clock className="text-orange-500" size={26} />,
    title: "Baixa Latência",
    text: "Servidores localizados em São Paulo, garantindo conexão rápida e com o menor ping possível para jogadores brasileiros.",
    highlight: true,
  },
  {
    icon: <Server className="text-orange-500" size={26} />,
    title: "Suporte 24/7",
    text: "99,9% de uptime e atendimento ágil para que seu servidor fique sempre online, com suporte técnico especializado em FiveM.",
  },
]

export default function Games() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5bccd5717788971625e09ffc/1613495458341-Q1PMJDEVOICALUSJ3NSY/Motorcycle_Shooting_Car_3000px.jpg?format=1500w"
          alt="Host de FiveM"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-1 mb-4">
            <Rocket size={16} className="text-orange-400" />
            <span className="text-sm font-medium text-orange-400">A melhor hospedagem para seu servidor FiveM</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            VPS FiveM no Brasil com <span className="text-orange-400">AMD Ryzen 9</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Hospedagem de alta performance com proteção Anti-DDoS e cachê-externo de 10GBPS para uma experiência de jogo
            perfeita
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
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400">10GBPS</h3>
              <p className="text-gray-300 mt-2">Cachê-externo</p>
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
              <span className="text-sm font-medium text-orange-400">Planos Personalizados</span>
            </div>
            <h2 className="text-4xl font-bold">Host de FiveM no Brasil com Anti DDoS Incluso</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Escolha o plano ideal para seu servidor e evolua conforme sua comunidade cresce. Todos os planos incluem
              cachê-externo de 10GBPS para uma experiência de jogo perfeita.
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
                {/* Badge MAIS VENDIDO */}
                {vpsItem.popular && (
                  <div className="absolute -top-3 -right-3 bg-orange-400 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
                    MAIS VENDIDO
                  </div>
                )}

                <div className="p-2">
                  <h4 className="text-2xl font-bold">{vpsItem.name}</h4>

                  {vpsItem.players && (
                    <div className="inline-block bg-orange-400/20 border border-orange-400/30 text-orange-400 text-xs font-bold py-1 px-3 rounded-full mt-2">
                      {vpsItem.players}
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

                {/* Info RAM */}
                <div className="mt-4">
                  <Tooltip content="Memória RAM dedicada para seu servidor">
                    <div className="bg-[#0A0C10] border border-gray-800 w-full text-center p-3 rounded-lg hover:border-orange-400/50 transition-colors">
                      <p className="font-bold text-sm flex justify-center items-center gap-2">
                        <MemoryStick size={18} className="text-orange-400" /> {vpsItem.description.ram}
                      </p>
                      <p className="font-bold text-xs text-gray-500 mt-1">RAM</p>
                    </div>
                  </Tooltip>
                </div>

                {/* Info CPU + SSD */}
                <div className="flex gap-4 mt-5">
                  <Tooltip content="Núcleos de processador AMD Ryzen 9">
                    <div className="bg-[#0A0C10] border border-gray-800 w-full text-center p-3 rounded-lg hover:border-orange-400/50 transition-colors">
                      <p className="font-bold text-sm flex justify-center items-center gap-2">
                        <Cpu size={18} className="text-orange-400" /> {vpsItem.description.cores}
                      </p>
                      <p className="font-bold text-xs text-gray-500 mt-1">CPU</p>
                    </div>
                  </Tooltip>
                  <Tooltip content="Armazenamento SSD NVMe de alta velocidade">
                    <div className="bg-[#0A0C10] border border-gray-800 w-full text-center p-3 rounded-lg hover:border-orange-400/50 transition-colors">
                      <p className="font-bold text-sm flex justify-center items-center gap-2">
                        <HardDrive size={18} className="text-orange-400" /> {vpsItem.description.ssd}
                      </p>
                      <p className="font-bold text-xs text-gray-500 mt-1">SSD NVMe</p>
                    </div>
                  </Tooltip>
                </div>

                {/* Painel de controle */}
                <div className="flex items-center gap-1 pt-6 justify-center">
                  <div className="border-t border-gray-800 flex-1"></div>
                  <p className="text-xs flex gap-1 items-center justify-center text-green-500">
                    <MonitorCog size={14} /> Painel de Controle Intuitivo
                  </p>
                  <div className="border-t border-gray-800 flex-1"></div>
                </div>

                {/* Benefícios */}
                <div className="mt-4 space-y-3">
                  {vpsItem.description.attrs.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CircleCheckBig className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Botão */}
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
            <h2 className="text-4xl font-bold">Por que escolher a RazeHost?</h2>
            <p className="text-gray-400 mt-4 text-lg">
              Oferecemos a melhor infraestrutura para seu servidor FiveM com recursos exclusivos que garantem
              performance e estabilidade.
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

        {/* Cachê-externo e Latência Destacados */}
        <section className="mt-20 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-900/20 z-0"></div>
          <div className="absolute inset-0 bg-[url('/network-bg.webp')] bg-cover bg-center opacity-20 z-0"></div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/30 border border-orange-500/40 rounded-full px-4 py-1 mb-4">
                  <Wifi size={16} className="text-orange-400" />
                  <span className="text-sm font-medium text-orange-400">Velocidade Incomparável</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Cachê-externo com 10GBPS de velocidade</h2>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  Nosso sistema de cachê-externo com velocidade de 10GBPS garante que seus jogadores tenham uma
                  experiência fluida e sem interrupções, mesmo em servidores com muitos recursos e mods.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Carregamento ultrarrápido de recursos e mods",
                    "Redução significativa de lag e stuttering",
                    "Suporte para servidores com muitos jogadores",
                    "Otimizado para FiveM e outros jogos exigentes",
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
                    10GBPS
                  </div>
                  <div className="absolute bottom-4 right-4 bg-orange-500/80 text-white p-4 rounded-full z-20 shadow-lg">
                    <Wifi size={60} />
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
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Baixa Latência para uma Experiência Perfeita
                </h2>
                <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                  Nossos servidores estão localizados em São Paulo, garantindo a menor latência possível para jogadores
                  brasileiros, com média de apenas 15ms de ping.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Servidores localizados em São Paulo",
                    "Média de 15ms de ping para jogadores brasileiros",
                    "Conexões otimizadas para reduzir jitter e packet loss",
                    "Compatível com Exitlag para otimização adicional",
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
          <h2 className="text-2xl font-bold text-white">Qual a melhor host para FiveM?</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            A RazeHost é referência em hospedagem de alto desempenho para servidores FiveM no Brasil, garantindo baixa
            latência e estabilidade máxima. Nossa infraestrutura é especialmente otimizada para FiveM, com processadores
            AMD Ryzen 9, SSD NVMe e proteção DDoS avançada para manter seu servidor sempre online e com performance
            excepcional.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Nosso diferencial está no cachê-externo com velocidade de 10GBPS, que proporciona carregamento ultrarrápido
            de recursos e mods, além da baixa latência média de 15ms para jogadores brasileiros. Tudo isso com suporte
            técnico especializado 24/7 para garantir a melhor experiência para você e sua comunidade.
          </p>
        </div>

        {/* Seção de imagens e sistemas operacionais */}
        <section className="container mx-auto max-w-9xl pt-20">
          <Card className="bg-gradient-to-br from-[#0E131D] to-[#0A0C10] rounded-xl border border-gray-800">
            <CardBody className="p-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
                <div className="col-span-1 md:col-span-4">
                  <p className="font-bold text-gray-200 text-xl">
                    Você pode hospedar qualquer projeto, servidor de jogo, BOT, site e aplicações.
                  </p>
                </div>
                {[
                  { img: "/vps/windows.webp", title: "VPS FiveM Windows" },
                  { img: "/vps/ubuntu.webp", title: "VPS Linux" },
                  { img: "/vps/amd.webp", title: "VPS FiveM Ryzen" },
                  { img: "/vps/brasil.webp", title: "VPS Brasil" },
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
          <div className="absolute inset-0 bg-[url('/fivem-cta-bg.webp')] bg-cover bg-center opacity-20 z-0"></div>

          <div className="relative z-10 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl mx-auto">
              Pronto para criar o melhor servidor FiveM do Brasil?
            </h2>
            <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
              Comece agora mesmo com a RazeHost e ofereça a melhor experiência para sua comunidade.
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

        {/* Pagamentos */}
        <PaymentsSectionsComponent />
      </section>
    </>
  )
}
