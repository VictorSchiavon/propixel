"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@nextui-org/button"
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react"
import { CircleCheckBig, Download, MonitorIcon, Package, Server, ShieldCheck, Zap } from "lucide-react"
import { useState } from "react"

// Definição dos processadores disponíveis
const processors = [
  { id: "5950x", name: "Ryzen 9 5950x" },
  { id: "7950x", name: "Ryzen 9 7950x" },
  { id: "5900x", name: "Ryzen 9 5900x" },
  { id: "xeon", name: "Xeon 2680v4" },
]

// Planos Java
const javaPlans = [
  {
    id: "stone",
    name: "2GB RAM / 2vCores",
    originalPrice: "R$27,90",
    price: "R$21,99",
    image: "/textures/terra.webp", // Placeholder para imagem de bloco de carvão
    color: "bg-gray-800",
    description: {
      ram: "2 GB",
      ssd: "10 GB",
      cores: "2 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: false,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "iron",
    name: "4GB RAM / 3vCores",
    originalPrice: "R$50,00",
    price: "R$43,99",
    image: "/textures/ferro.webp", // Placeholder para imagem de bloco de ferro
    color: "bg-blue-700",
    description: {
      ram: "4 GB",
      ssd: "30 GB",
      cores: "3 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "gold",
    name: "8GB RAM / 5vCores",
    originalPrice: "R$100,00",
    price: "R$87,99",
    image: "/textures/ouro.webp", // Placeholder para imagem de bloco de ferro
    color: "bg-gray-300",
    description: {
      ram: "8 GB",
      ssd: "50 GB",
      cores: "5 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "diamond",
    name: "12GB RAM / 7vCores",
    originalPrice: "R$150,00",
    price: "R$131,99",
    image: "/textures/diamante.webp", // Placeholder para imagem de bloco de ouro
    color: "bg-yellow-500",
    description: {
      ram: "12 GB",
      ssd: "80 GB",
      cores: "7 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "emerald",
    name: "16GB RAM / 9vCores",
    originalPrice: "R$200,00",
    price: "R$175,99",
    image: "/textures/esmeralda.webp", // Placeholder para imagem de bloco de esmeralda
    color: "bg-green-500",
    description: {
      ram: "16 GB",
      ssd: "100 GB",
      cores: "9 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "diamond_block",
    name: "24GB RAM / 14vCores",
    originalPrice: "R$300,00",
    price: "R$263,99",
    image: "/textures/ametista.webp", // Placeholder para imagem de bloco de diamante
    color: "bg-cyan-400",
    description: {
      ram: "24 GB",
      ssd: "150 GB",
      cores: "14 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "obsidian",
    name: "32GB RAM / 16vCores",
    originalPrice: "R$400,00",
    price: "R$351,99",
    image: "/textures/carvao.webp", // Placeholder para imagem de bloco de obsidiana
    color: "bg-gray-900",
    description: {
      ram: "32 GB",
      ssd: "200 GB",
      cores: "16 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "bedrock",
    name: "48GB RAM / 20vCores",
    originalPrice: "R$600,00",
    price: "R$527,99",
    image: "/minecraft/bedrock.png", // Placeholder para imagem de bloco de bedrock
    color: "bg-gray-700",
    description: {
      ram: "48 GB",
      ssd: "300 GB",
      cores: "20 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
]

// Planos Bedrock
const bedrockPlans = [
  {
    id: "bedrock_basic",
    name: "4GB RAM / 3vCores",
    originalPrice: "R$55,00",
    price: "R$47,99",
    image: "/minecraft/iron_ore.png", // Placeholder para imagem de bloco de ferro
    color: "bg-blue-700",
    description: {
      ram: "4 GB",
      ssd: "30 GB",
      cores: "3 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "bedrock_plus",
    name: "8GB RAM / 5vCores",
    originalPrice: "R$110,00",
    price: "R$95,99",
    image: "/minecraft/iron_block.png", // Placeholder para imagem de bloco de ferro
    color: "bg-gray-300",
    description: {
      ram: "8 GB",
      ssd: "50 GB",
      cores: "5 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
  {
    id: "bedrock_pro",
    name: "16GB RAM / 9vCores",
    originalPrice: "R$210,00",
    price: "R$185,99",
    image: "/minecraft/emerald_ore.png", // Placeholder para imagem de bloco de esmeralda
    color: "bg-green-500",
    description: {
      ram: "16 GB",
      ssd: "100 GB",
      cores: "9 vCores",
      processor: "AMD Ryzen 9 7950X/9900X/7900X",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS MagicTransit",
      defaultPort: "Porta padrão por R$20,00",
    },
  },
]

export default function MinecraftPage() {
  const [selectedTab, setSelectedTab] = useState("java")
  const [selectedProcessor, setSelectedProcessor] = useState("5950x")
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const detailsRef = useRef<HTMLDivElement>(null)

  // Cor laranja conforme solicitado
  const primaryColor = "rgb(251 146 60)"

  // Função para mostrar detalhes do plano e rolar para a seção de detalhes
  const showPlanDetails = (plan: any) => {
    setSelectedPlan(plan)
    // Rolar para a seção de detalhes em dispositivos móveis
    if (window.innerWidth < 1024 && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <div className="bg-[rgb(11,14,19)] min-h-screen text-white">
      {/* Header com estilo Minecraft */}
      <div className="relative w-full h-[500px] overflow-hidden bg-[rgb(11,14,19)]">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 bg-[url('
        /textures/terra.webp')] bg-cover bg-center opacity-30"></div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(11,14,19)] via-[rgb(11,14,19)]/90 to-transparent"></div>

        {/* Conteúdo do hero */}
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Eleve o nível do seu <span className="text-orange-500">servidor</span> de minecraft
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Profissionalize seu servidor com hardware de alta performance e proteção Anti-DDoS de alta capacidade!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg" size="lg">
                Ver todos os planos
              </Button>
              <Button
                className="bg-transparent border-2 border-orange-500 text-white hover:bg-orange-500/20 font-bold px-8 py-6 text-lg"
                size="lg"
              >
                Entrar em contato
              </Button>
            </div>
          </div>

          {/* Imagem de personagem Minecraft */}
          <div className="hidden lg:block absolute right-0 bottom-0">
            <div className="relative w-[400px] h-[400px]">
              {/* Imagem de Steve (personagem Minecraft) */}
              <Image
                src="https://www.minecraft.net/content/dam/minecraftnet/franchise/component-library/redeemheroa/Redeem-Hero_Mobile_576x324.png"
                alt="Personagem Minecraft"
                width={300}
                height={400}
                 className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de planos com estilo Minecraft */}
      <div className="bg-[rgb(11,14,19)] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Escolha seu plano ideal</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Servidores otimizados para Minecraft com processadores de alta performance
            </p>
          </div>

          {/* Tabs para Java e Bedrock */}
          <div className="flex justify-center mb-12">
            <Tabs
              selectedKey={selectedTab}
              onSelectionChange={(key) => setSelectedTab(key as string)}
              color="warning"
              size="lg"
              aria-label="Minecraft Edition Tabs"
              classNames={{
                tab: "data-[selected=true]:bg-orange-500 data-[selected=true]:text-white",
                cursor: "bg-orange-500",
                tabList: "bg-[#1A1A1A] border-2 border-gray-800",
              }}
            >
              <Tab
                key="java"
                title={
                  <div className="flex items-center gap-2 px-4">
                    <Server size={20} />
                    <span>Java Edition</span>
                  </div>
                }
              />
              <Tab
                key="bedrock"
                title={
                  <div className="flex items-center gap-2 px-4">
                    <Package size={20} />
                    <span>Bedrock Edition</span>
                  </div>
                }
              />
            </Tabs>
          </div>

          {/* Grid de planos e painel de detalhes */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Grid de planos */}
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {(selectedTab === "java" ? javaPlans : bedrockPlans).map((plan) => (
                <div
                  key={plan.id}
                  className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:shadow-orange-500/20"
                >
                  <div className="flex justify-center py-6">
                    {/* Imagens dos blocos de Minecraft */}
                    <Image
                      src={`/textures/terra.webp6`}
                      alt={plan.name}
                      width={96}
                      height={96}
                      className={`rounded-lg ${plan.color}`}
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                    <div className="flex flex-col items-center mb-4">
                      <div className="text-sm text-gray-500 line-through">{plan.originalPrice}/mês</div>
                      <div className="text-2xl font-bold text-orange-500">{plan.price}/mês</div>
                    </div>
                    <Button className="w-full bg-orange-500 text-white" onClick={() => showPlanDetails(plan)}>
                      Clique para ver os detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Painel de detalhes */}
            <div className="lg:w-1/4" ref={detailsRef}>
              <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg p-6 shadow-lg sticky top-4">
                <h3 className="text-xl font-bold text-white mb-4">Detalhes do plano</h3>

                {selectedPlan ? (
                  <>
                    <div className="text-sm text-gray-500 mb-2">{selectedPlan.originalPrice}</div>
                    <div className="text-2xl font-bold text-orange-500 mb-6">{selectedPlan.price}/mês</div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <CircleCheckBig className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.processor}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleCheckBig className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.cores}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleCheckBig className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.ram} RAM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleCheckBig className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.ssd} SSD NVMe</span>
                      </li>
                      {selectedPlan.description.additionalServer && (
                        <li className="flex items-start gap-2">
                          <CircleCheckBig className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-gray-300">Até +1 servidor adicional</span>
                        </li>
                      )}
                      <li className="flex items-start gap-2">
                        <CircleCheckBig className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.ddosProtection}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CircleCheckBig className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.defaultPort}</span>
                      </li>
                    </ul>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold" size="lg">
                      Contratar
                    </Button>
                  </>
                ) : (
                  <div className="text-gray-400 text-center py-8">Selecione um plano para ver os detalhes</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Construtor de Network */}
      <div className="relative w-full py-16 overflow-hidden bg-[rgb(11,14,19)]">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-20"></div>

        {/* Conteúdo */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Construtor de networks</h2>
              <p className="text-xl text-gray-300 mb-6">
                Abra a sua rede de servidores de minecraft com o melhor custo-benefício do mercado
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg" size="lg">
                Abrir construtor
              </Button>
            </div>

            <div className="md:w-1/2 flex justify-end">
              {/* Imagem 3D de Minecraft */}
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Minecraft Network"
                width={400}
                height={250}
                className="rounded-lg border-2 border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Modpacks e Troca de Versões */}
      <div className="bg-[rgb(11,14,19)] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos exclusivos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos serviços adicionais para tornar sua experiência ainda melhor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-2 border-gray-800 shadow-xl">
              <CardBody>
                <div className="flex flex-col p-6">
                  <div className="w-16 h-16 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                    <Package className="text-orange-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Instalação de Modpacks automáticos</h3>
                  <p className="text-gray-400 mb-6">
                    Instale modpacks populares como FTB, Tekkit, RLCraft e muitos outros com apenas um clique. Nosso
                    sistema automatizado configura tudo para você, sem complicações.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CircleCheckBig className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Mais de 100 modpacks disponíveis</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheckBig className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Instalação com um clique</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheckBig className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Configuração automática</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-2 border-gray-800 shadow-xl">
              <CardBody>
                <div className="flex flex-col p-6">
                  <div className="w-16 h-16 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                    <Download className="text-orange-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Troca de versões automáticas</h3>
                  <p className="text-gray-400 mb-6">
                    Mude facilmente entre diferentes versões do Minecraft sem perder seus dados. Nosso sistema preserva
                    seus mundos, plugins e configurações durante a atualização.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CircleCheckBig className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Suporte para todas as versões do Minecraft</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheckBig className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Backup automático antes da troca</span>
                    </li>
                    <li className="flex items-center">
                      <CircleCheckBig className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                      <span className="text-gray-300">Migração de dados entre versões</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Seção de recursos com estilo Minecraft */}
      <div className="bg-[rgb(11,14,19)] py-20 relative overflow-hidden">
        {/* Padrão de blocos de fundo (estilo Minecraft) */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array(144)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`border border-white ${Math.random() > 0.5 ? "bg-gray-500" : "bg-gray-700"}`}
                ></div>
              ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher nossa hospedagem?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos a melhor infraestrutura para garantir que sua experiência Minecraft seja incrível
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-2 border-gray-800 shadow-xl">
              <CardBody>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-20 h-20 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                    <Zap className="text-orange-500" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Desempenho de verdade</h3>
                  <p className="text-gray-400">
                    Processadores Ryzen e SSD NVMe para rodar seu servidor de Minecraft com estabilidade, TPS alto e
                    performance máxima mesmo com muitos plugins.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-2 border-gray-800 shadow-xl">
              <CardBody>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-20 h-20 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                    <MonitorIcon className="text-orange-500" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Painel Pterodactyl</h3>
                  <p className="text-gray-400">
                    Gerencie seu servidor com praticidade através do painel Pterodactyl: instale plugins, mods e faça
                    backups com poucos cliques.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-2 border-gray-800 shadow-xl">
              <CardBody>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-20 h-20 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                    <ShieldCheck className="text-orange-500" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Proteção e Uptime</h3>
                  <p className="text-gray-400">
                    Seu servidor protegido com Anti-DDoS avançado e uptime de 99,9%. Jogue com tranquilidade e segurança
                    a qualquer hora.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-orange-900/20 to-black py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Pronto para começar sua aventura?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Escolha um dos nossos planos e tenha seu servidor Minecraft online em minutos!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-6 text-lg" size="lg">
                Ver todos os planos
              </Button>
              <Button
                className="bg-transparent border-2 border-orange-500 text-white hover:bg-orange-500/20 font-bold px-8 py-6 text-lg"
                size="lg"
              >
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
