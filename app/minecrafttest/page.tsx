"use client"

import { Button } from "@nextui-org/button"
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react"
import { CircleCheckBig, Download, MonitorIcon, Package, Server, ShieldCheck, Zap, Cpu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

// Definição dos processadores disponíveis
const processors = [
  { id: "5950x", name: "Ryzen 9 5950x" },
  { id: "7950x", name: "Ryzen 9 7950x" },
  { id: "5900x", name: "Ryzen 9 5900x" },
  { id: "xeon", name: "Xeon 2680v4" },
]

// Modificar a definição dos planos Java para incluir links de contratação
const javaPlans = [
  {
    id: "basic",
    name: "BASIC",
    originalPrice: "R$45,00",
    price: "R$37,90",
    image: "/textures/terra.webp",
    color: "bg-gray-800",
    link: "https://app.razehost.com.br/store/minecraft/basic",
    description: {
      ram: "4 GB DDR5",
      ssd: "10 GB SSD NVME",
      cores: "AMD Ryzen",
      processor: "AMD Ryzen",
      additionalServer: false,
      ddosProtection: "Sub-domínios incluso",
      defaultPort: "Backups incluso • Mods e Plugins",
    },
  },
  {
    id: "advanced",
    name: "ADVANCED",
    originalPrice: "R$60,00",
    price: "R$49,90",
    image: "/textures/ferro.webp",
    color: "bg-blue-700",
    link: "https://app.razehost.com.br/store/minecraft/advanced",
    description: {
      ram: "6 GB DDR5",
      ssd: "20 GB SSD NVME",
      cores: "AMD Ryzen",
      processor: "AMD Ryzen",
      additionalServer: false,
      ddosProtection: "Sub-domínios incluso",
      defaultPort: "Backups incluso • Mods e Plugins",
    },
  },
  {
    id: "pro",
    name: "PRO",
    originalPrice: "R$85,00",
    price: "R$73,90",
    image: "/textures/ouro.webp",
    color: "bg-yellow-400",
    link: "https://app.razehost.com.br/store/minecraft/pro",
    description: {
      ram: "10 GB DDR5",
      ssd: "20 GB SSD NVME",
      cores: "AMD Ryzen",
      processor: "AMD Ryzen",
      additionalServer: false,
      ddosProtection: "Sub-domínios incluso",
      defaultPort: "Backups incluso • Mods e Plugins",
    },
  },
  {
    id: "ultra",
    name: "ULTRA",
    originalPrice: "R$120,00",
    price: "R$94,90",
    image: "/textures/diamante.webp",
    color: "bg-green-500",
    link: "https://app.razehost.com.br/store/minecraft/ultra",
    description: {
      ram: "16 GB DDR5",
      ssd: "25 GB SSD NVME",
      cores: "AMD Ryzen",
      processor: "AMD Ryzen",
      additionalServer: false,
      ddosProtection: "Sub-domínios incluso",
      defaultPort: "Backups incluso • Mods e Plugins",
    },
  },
  {
    id: "plus",
    name: "PLUS+",
    originalPrice: "R$150,00",
    price: "R$129,90",
    image: "/textures/esmeralda.webp",
    color: "bg-cyan-400",
    link: "https://app.razehost.com.br/store/minecraft/plus",
    description: {
      ram: "20 GB DDR5",
      ssd: "50 GB SSD NVME",
      cores: "AMD Ryzen",
      processor: "AMD Ryzen",
      additionalServer: false,
      ddosProtection: "Sub-domínios incluso",
      defaultPort: "Backups incluso • Mods e Plugins",
    },
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    originalPrice: "R$220,00",
    price: "R$190,00",
    image: "/textures/ether.webp",
    color: "bg-gray-900",
    link: "https://app.razehost.com.br/store/minecraft/enterprise",
    description: {
      ram: "24 GB DDR5",
      ssd: "60 GB SSD NVME",
      cores: "AMD Ryzen 9 7950X / 7900X3D",
      processor: "AMD Ryzen 9 7950X / 7900X3D",
      additionalServer: false,
      ddosProtection: "Sub-domínios incluso",
      defaultPort: "Backups incluso • Mods e Plugins",
    },
  },
  {
    id: "dedicated",
    name: "DEDICATED",
    originalPrice: "R$299,90",
    price: "R$259,90",
    image: "/textures/carvao.webp",
    color: "bg-gray-700",
    link: "https://app.razehost.com.br/store/minecraft/dedicated",
    description: {
      ram: "32 GB DDR5",
      ssd: "100 GB SSD NVME",
      cores: "AMD Ryzen 9 7950X / 7900X3D",
      processor: "AMD Ryzen 9 7950X / 7900X3D",
      additionalServer: false,
      ddosProtection: "Sub-domínios incluso",
      defaultPort: "Backups incluso • Mods e Plugins • Suporte Premium",
    },
  },
]

// Planos Bedrock
const bedrockPlans = [
  {
    id: "bedrock_entry",
    name: "BEDROCK SERVER",
    originalPrice: "R$29,90",
    price: "R$19,90",
    image: "/textures/terra.webp",
    color: "bg-gray-800",
    link: "https://app.razehost.com.br/store/minecraft/bedrock-server",
    description: {
      ram: "4 GB DDR5",
      ssd: "10 GB SSD NVME",
      cores: "2 vCores",
      processor: "AMD Ryzen 9",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS",
      defaultPort: "Suporta 5 jogadores • Addons • Todas as versões",
    },
  },
  {
    id: "bedrock_plus_entry",
    name: "BEDROCK PLUS+",
    originalPrice: "R$39,90",
    price: "R$29,40",
    image: "/textures/ferro.webp",
    color: "bg-blue-700",
    link: "https://app.razehost.com.br/store/minecraft/bedrock-plus",
    description: {
      ram: "8 GB DDR5",
      ssd: "20 GB SSD NVME",
      cores: "3 vCores",
      processor: "AMD Ryzen 9",
      additionalServer: true,
      ddosProtection: "Proteção Anti-DDoS",
      defaultPort: "Suporta 10 jogadores • Addons • Todas as versões",
    },
  },
]

export default function MinecraftPage() {
  const [selectedTab, setSelectedTab] = useState("java")
  const [selectedProcessor, setSelectedProcessor] = useState("5950x")
  const [selectedPlan, setSelectedPlan] = useState<any>(null)

  // Cor laranja conforme solicitado
  const primaryColor = "rgb(251 146 60)"

  // Função para mostrar detalhes do plano
  const showPlanDetails = (plan: any) => {
    setSelectedPlan(plan)
  }

  return (
    <>
      {/* Hero Section com estilo Minecraft */}
      <div className="relative w-full h-[500px] overflow-hidden bg-black">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1200')] bg-cover bg-center opacity-50"></div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        {/* Conteúdo do hero */}
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Eleve o nível do seu <span className="text-orange-400">servidor</span> de minecraft
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

          {/* Imagem de servidor com personagem Minecraft */}
          <div className="hidden lg:block absolute right-0 bottom-0">
            {/* Placeholder para imagem de servidor com personagem Minecraft */}
            <div className="w-[400px] h-[400px] bg-transparent relative">
              <div className="absolute bottom-0 right-0 w-[100px] h-[200px] bg-gray-700 rounded-t-lg"></div>
              <div className="absolute bottom-0 right-[120px] w-[100px] h-[250px] bg-gray-800 rounded-t-lg"></div>
              <div className="absolute bottom-0 right-[240px] w-[100px] h-[180px] bg-gray-600 rounded-t-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de planos com estilo Minecraft */}
      <div className="bg-[#121212] py-20">
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
              onSelectionChange={(key) => setSelectedTab(key.toString())}
              color="warning"
              size="lg"
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

          {/* Seleção de processador */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Escolha seu processador:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {processors.map((processor) => (
                <Button
                  key={processor.id}
                  className={`${
                    selectedProcessor === processor.id
                      ? "bg-orange-500 text-white"
                      : "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]"
                  } px-6 py-3 rounded-lg flex items-center gap-2`}
                  onClick={() => setSelectedProcessor(processor.id)}
                >
                  <Cpu size={18} />
                  <span>{processor.name}</span>
                </Button>
              ))}
            </div>
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
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      width={96}
                      height={96}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                    <div className="flex flex-col items-center mb-4">
                      <div className="text-sm text-gray-500 line-through">{plan.originalPrice}/mês</div>
                      <div className="text-2xl font-bold text-orange-500">{plan.price}/mês</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button
                        className="w-full bg-orange-500/20 text-orange-500 hover:bg-orange-500/30"
                        onClick={() => showPlanDetails(plan)}
                      >
                        Ver detalhes
                      </Button>
                      <Button
                        as="a"
                        href={plan.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                      >
                        Contratar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Painel de detalhes */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg p-6 shadow-lg sticky top-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Detalhes do plano</h3>

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

                    <Button
                      as="a"
                      href={selectedPlan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
                      size="lg"
                    >
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
      <div className="relative w-full py-16 overflow-hidden bg-black">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center opacity-30"></div>

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
              {/* Placeholder para imagem 3D de Minecraft */}
              <div className="w-full max-w-[400px] h-[250px] relative">
                <div className="absolute bottom-0 left-0 w-[100px] h-[150px] bg-green-600 rounded"></div>
                <div className="absolute bottom-0 left-[120px] w-[150px] h-[200px] bg-orange-800 rounded"></div>
                <div className="absolute bottom-[50px] left-[80px] w-[80px] h-[80px] bg-blue-500 rounded"></div>
                <div className="absolute bottom-[150px] left-[200px] w-[120px] h-[100px] bg-yellow-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Modpacks e Troca de Versões */}
      <div className="bg-[#0A0A0A] py-20">
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
                  <h3 className="text-2xl font-bold mb-4">Instalação de Modpacks automáticos</h3>
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
                  <h3 className="text-2xl font-bold mb-4">Troca de versões automáticas</h3>
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
      <div className="bg-[#121212] py-20 relative overflow-hidden">
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
                  <h3 className="text-2xl font-bold mb-4">Desempenho de verdade</h3>
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
                  <h3 className="text-2xl font-bold mb-4">Painel Pterodactyl</h3>
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
                  <h3 className="text-2xl font-bold mb-4">Proteção e Uptime</h3>
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
    </>
  )
}
