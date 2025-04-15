"use client"

import { useState } from "react"
import Image from "next/image"
import { Accordion, AccordionItem, Card, CardBody, Chip, Slider } from "@nextui-org/react"
import { Button } from "@nextui-org/button"
import {
  ArrowDownToDot,
  ArrowUpFromDot,
  Cpu,
  HardDrive,
  MemoryStick,
  Network,
  Star,
  ShieldCheck,
  Shield,
  Globe,
  Zap,
  Server,
} from "lucide-react"

// Array de planos AMD Ryzen
const planosAMD = [
  {
    nome: "AMD Ryzen 5 5600X",
    frequencia: "3.7GHz até 4.6GHz",
    disponibilidade: false,
    preco: 800.0,
    nucleos: 6,
    threads: 12,
    destaque: false,
    icons: [
      { icone: <Cpu size={30} />, titulo: "6 Núcleos", descricao: "12 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "1TB DE SSD NVME" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "64GB DE RAM", descricao: "DDR4" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
  {
    nome: "AMD Ryzen 7 7700X",
    frequencia: "4.5GHz até 5.4GHz",
    disponibilidade: true,
    preco: 1500.0,
    nucleos: 8,
    threads: 16,
    destaque: true,
    icons: [
      { icone: <Cpu size={30} />, titulo: "8 Núcleos", descricao: "16 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "2TB DE SSD NVME" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "128GB DE RAM", descricao: "DDR5" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
  {
    nome: "AMD Ryzen 9 7900X",
    frequencia: "4.7GHz até 5.6GHz",
    disponibilidade: true,
    preco: 1650.0,
    nucleos: 12,
    threads: 24,
    destaque: false,
    icons: [
      { icone: <Cpu size={30} />, titulo: "12 Núcleos", descricao: "24 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "2TB DE SSD NVME" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "128GB DE RAM", descricao: "DDR5" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
  {
    nome: "AMD Ryzen 9 5900X",
    frequencia: "3.7GHz até 4.8GHz",
    disponibilidade: true,
    preco: 1200.0,
    nucleos: 12,
    threads: 24,
    destaque: false,
    icons: [
      { icone: <Cpu size={30} />, titulo: "12 Núcleos", descricao: "24 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "2TB DE SSD NVME M.2" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "128GB DE RAM", descricao: "DDR4" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
  {
    nome: "AMD Ryzen 7 5800X",
    frequencia: "3.8GHz até 4.7GHz",
    disponibilidade: true,
    preco: 1100.0,
    nucleos: 8,
    threads: 16,
    destaque: false,
    icons: [
      { icone: <Cpu size={30} />, titulo: "8 Núcleos", descricao: "16 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "2TB DE SSD NVME" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "128GB DE RAM", descricao: "DDR4" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
]

// Array de planos Intel Xeon
const planosXeon = [
  {
    nome: "Intel Xeon E5-2680 v4",
    frequencia: "2.4GHz até 3.3GHz",
    disponibilidade: true,
    preco: 749.9,
    nucleos: 14,
    threads: 28,
    destaque: false,
    icons: [
      { icone: <Cpu size={30} />, titulo: "14 Núcleos", descricao: "28 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "1TB DE SSD" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "2x1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "128GB DE RAM", descricao: "DDR4" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
  {
    nome: "Intel Xeon Silver 4214",
    frequencia: "2.2GHz até 3.2GHz",
    disponibilidade: true,
    preco: 849.9,
    nucleos: 12,
    threads: 24,
    destaque: true,
    icons: [
      { icone: <Cpu size={30} />, titulo: "12 Núcleos", descricao: "24 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "1TB DE SSD NVME" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "2x1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "128GB DE RAM", descricao: "DDR4" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
  {
    nome: "Intel Xeon Gold 6248R",
    frequencia: "3.0GHz até 4.0GHz",
    disponibilidade: true,
    preco: 1394.9,
    nucleos: 24,
    threads: 48,
    destaque: false,
    icons: [
      { icone: <Cpu size={30} />, titulo: "24 Núcleos", descricao: "48 Threads" },
      { icone: <HardDrive size={30} />, titulo: "Armazenamento", descricao: "2TB DE SSD NVME" },
      { icone: <Network size={30} />, titulo: "Rede", descricao: "2x1GBPS UPLINK" },
      { icone: <MemoryStick size={30} />, titulo: "256GB DE RAM", descricao: "DDR4" },
      { icone: <ArrowUpFromDot size={30} />, titulo: "Inputstream", descricao: "20Tb Incluso" },
      { icone: <ArrowDownToDot size={30} />, titulo: "Outputstream", descricao: "20Tb Incluso" },
    ],
  },
]

// FAQ items
const faqItems = [
  {
    title: "Qual é a latência média dos servidores?",
    content:
      "Os servidores da RazeHost oferecem uma média de ping de 20ms em todo o Brasil, proporcionando uma latência mínima para suas aplicações. Nossa infraestrutura é otimizada para garantir a melhor experiência possível.",
  },
  {
    title: "Qual é a garantia de uptime?",
    content:
      "Garantimos 99,9% de uptime para todos os nossos servidores dedicados. Em caso de falha, você recebe créditos proporcionais ao tempo de inatividade conforme nosso SLA (Service Level Agreement).",
  },
  {
    title: "Onde estão localizados os datacenters?",
    content:
      "Nossos datacenters estão estrategicamente posicionados em São Paulo, com conexões redundantes para todo o Brasil e América Latina. Contamos com certificações Tier III e IV, garantindo máxima segurança e disponibilidade.",
  },
  {
    title: "Como funciona a proteção DDoS?",
    content:
      "Nossa proteção DDoS utiliza tecnologia avançada de mitigação que limpa o tráfego malicioso antes que ele chegue ao seu servidor. Diferente de outras soluções, não utilizamos null route, mantendo seu servidor sempre online mesmo durante ataques.",
  },
  {
    title: "É possível personalizar a configuração do servidor?",
    content:
      "Sim! Além dos planos padrão, oferecemos personalização completa de hardware. Entre em contato conosco para discutir suas necessidades específicas e montaremos uma configuração sob medida.",
  },
]

export default function DedicatedServers() {
  const [ram, setRam] = useState(16)
  const [nucleos, setNucleos] = useState(8)
  const [tipoPlano, setTipoPlano] = useState("AMD")

  const handlerRam = (e: number | number[]) => {
    setRam(Array.isArray(e) ? e[0] : e)
  }

  const handlerNucleos = (e: number | number[]) => {
    setNucleos(Array.isArray(e) ? e[0] : e)
  }

  // Função para alternar entre AMD e Xeon
  const planosExibidos = tipoPlano === "AMD" ? planosAMD : planosXeon

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <section className="container mx-auto px-4 sm:px-6 flex-grow pt-8 pb-20">
        {/* HERO SECTION - DDoS PROTECTION */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-6 text-white rounded-2xl mb-16 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                <Shield size={16} className="mr-2" /> Proteção Premium
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Servidores Dedicados com Proteção DDoS Total
              </h1>
              <p className="text-gray-300 text-lg mt-6 max-w-xl leading-relaxed">
                Infraestrutura robusta com mitigação inteligente, sem null route, sem aumento de latência. Proteção real
                para projetos exigentes.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start">
                  <ShieldCheck className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Mitigação ativa 24/7 com IA</span>
                </div>
                <div className="flex items-start">
                  <Globe className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>296 Tbps de capacidade global</span>
                </div>
                <div className="flex items-start">
                  <Zap className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Zero uso de blackhole/null route</span>
                </div>
                <div className="flex items-start">
                  <Server className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span>Limpeza próxima da origem</span>
                </div>
              </div>
              <a
                href="https://wa.me/5511968927685?text=Gostaria%20de%20saber%20sobre%20dedicados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                  Ver Planos Dedicados
                </Button>
              </a>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700/50 space-y-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Shield className="mr-2 text-orange-400" /> Estatísticas de Proteção
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-300">Ataques Mitigados</div>
                    <div className="text-green-400 text-xl font-bold">3,102</div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-300">Tráfego Mitigado</div>
                    <div className="text-blue-400 text-xl font-bold">126.54 TB</div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-300">Centros Globais</div>
                    <div className="text-yellow-400 text-xl font-bold">288 cidades</div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-300">Capacidade Total</div>
                    <div className="text-red-400 text-xl font-bold">296 Tbps</div>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSOR SELECTION TABS */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha seu Processador Ideal</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Servidores de alto desempenho com os melhores processadores do mercado para suas aplicações mais exigentes
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              className={`px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 ${
                tipoPlano === "AMD"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setTipoPlano("AMD")}
              startContent={
                <div className="w-8 h-8 mr-2 flex items-center justify-center">
                  <img src="/amd-logo.webp" alt="AMD Logo" width={32} height={32} />
                </div>
              }
            >
              AMD Ryzen
            </Button>
            <Button
              className={`px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 ${
                tipoPlano === "Xeon"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setTipoPlano("Xeon")}
              startContent={
                <div className="w-8 h-8 mr-2 flex items-center justify-center">
                  <img src="/intel-logo.webp" alt="Intel Logo" width={32} height={32} />
                </div>
              }
            >
              Intel Xeon
            </Button>
          </div>

          {/* SERVER PLANS */}
          <div className="space-y-8">
            {planosExibidos.map((plano, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plano.destaque
                    ? "border-2 border-orange-500 shadow-lg shadow-orange-500/10"
                    : "border border-gray-200 dark:border-gray-800"
                }`}
              >
                {plano.destaque && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                    MAIS POPULAR
                  </div>
                )}
                <CardBody className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* PROCESSOR INFO */}
                    <div className="lg:col-span-3 bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 mb-4 flex items-center justify-center">
                        <img
                          src={
                            tipoPlano === "AMD"
                              ? "/amd-logo.webp"
                              : "/intel-logo.webp"
                          }
                          alt={tipoPlano === "AMD" ? "AMD Logo" : "Intel Logo"}
                          width={96}
                          height={96}
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{plano.nome}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{plano.frequencia}</p>
                      <Chip
                        size="lg"
                        className={`font-medium ${
                          plano.disponibilidade
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {plano.disponibilidade ? "Disponível" : "Indisponível"}
                      </Chip>
                    </div>

                    {/* SPECS */}
                    <div className="lg:col-span-6 p-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {plano.icons.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                          >
                            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
                              {spec.icone}
                            </div>
                            <h4 className="font-bold mb-1">{spec.titulo}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{spec.descricao}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* PRICE & CTA */}
                    <div className="lg:col-span-3 bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center justify-center">
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">A partir de</p>
                        <div className="flex items-center justify-center">
                          <span className="text-3xl font-bold">R$ {plano.preco.toFixed(2)}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-1">/mês</span>
                        </div>
                      </div>
                      <a
                        href="https://wa.me/5511968927685?text=Gostaria%20de%20saber%20sobre%20dedicados"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          className={`w-full py-6 font-bold ${
                            plano.destaque
                              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                              : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500"
                          }`}
                          startContent={<Star size={18} />}
                        >
                          Verificar disponibilidade
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>

        {/* CUSTOM SERVER BUILDER */}
        <section className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Configure seu Servidor Ideal</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Escolha o plano ideal para seu negócio e evolua conforme suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <MemoryStick className="mr-2 text-orange-500" /> Memória RAM
              </h3>
              <div className="mb-6">
                <Slider
                  value={ram}
                  maxValue={256}
                  minValue={8}
                  step={8}
                  onChange={handlerRam}
                  color="warning"
                  classNames={{
                    track: "bg-orange-100 dark:bg-gray-700",
                    thumb: "bg-orange-500",
                  }}
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-5xl font-bold">
                    {ram} <span className="text-2xl">GB</span>
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">Memória DDR4/DDR5</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimativa</p>
                  <p className="text-xl font-bold text-orange-500">+ R$ {(ram * 5).toFixed(2)}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Aplicações de alto desempenho necessitam de mais memória para processar grandes volumes de dados e
                  executar múltiplas tarefas simultaneamente.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Cpu className="mr-2 text-orange-500" /> Núcleos de CPU
              </h3>
              <div className="mb-6">
                <Slider
                  value={nucleos}
                  maxValue={64}
                  minValue={4}
                  step={2}
                  onChange={handlerNucleos}
                  color="warning"
                  classNames={{
                    track: "bg-orange-100 dark:bg-gray-700",
                    thumb: "bg-orange-500",
                  }}
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-5xl font-bold">
                    {nucleos} <span className="text-2xl">Núcleos</span>
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">{nucleos * 2} Threads</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimativa</p>
                  <p className="text-xl font-bold text-orange-500">+ R$ {(nucleos * 15).toFixed(2)}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mais núcleos permitem melhor desempenho em aplicações que exigem processamento paralelo, como bancos
                  de dados e virtualização.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-bold mb-4">
              Estimativa Total: <span className="text-orange-500">R$ {(ram * 5 + nucleos * 15).toFixed(2)}/mês</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Esta é apenas uma estimativa. Entre em contato para obter um orçamento personalizado com base nas suas
              necessidades específicas.
            </p>
            <a
              href="https://wa.me/5511968927685?text=Gostaria%20de%20saber%20sobre%20dedicados"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                Solicitar Orçamento Personalizado
              </Button>
            </a>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Encontre respostas para as dúvidas mais comuns sobre nossos servidores dedicados e serviços.
                </p>
                <div className="hidden lg:block">
                  <a
                    href="https://wa.me/5511968927685?text=Tenho%20uma%20dúvida%20sobre%20servidores%20dedicados"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 font-medium px-6 py-2 rounded-lg">
                      Fazer outra pergunta
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <Accordion variant="splitted" className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    aria-label={item.title}
                    title={item.title}
                    classNames={{
                      title: "text-lg font-medium",
                      content: "text-gray-600 dark:text-gray-400",
                      base: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm",
                    }}
                  >
                    {item.content}
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 lg:hidden">
                <a
                  href="https://wa.me/5511968927685?text=Tenho%20uma%20dúvida%20sobre%20servidores%20dedicados"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 font-medium px-6 py-2 rounded-lg">
                    Fazer outra pergunta
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  )
}
