"use client"

import { Button } from "@nextui-org/button"
import { Card, CardBody, Tabs, Tab } from "@nextui-org/react"
import { CircleCheckBig, Download, MonitorIcon, Package, Server, ShieldCheck, Zap } from "lucide-react"
import { useState } from "react"

// Planos Java
const javaPlans = [
  {
    name: "MC Stone",
    price: "R$29,90",
    link: "https://app.razehost.com.br/store/minecraft/mc-stone",
    image: "/minecraft/steve-stone.png",
    description: {
      ram: "2 GB",
      ssd: "10 GB",
      cores: "1 núcleo",
      attrs: ["Anti DDoS Incluso", "Painel Pterodactyl"],
    },
  },
  {
    name: "MC Iron",
    price: "R$49,90",
    link: "https://app.razehost.com.br/store/minecraft/mc-iron",
    image: "/minecraft/steve-iron.png",
    description: {
      ram: "4 GB",
      ssd: "20 GB",
      cores: "2 núcleos",
      attrs: ["Anti DDoS Incluso", "Painel Pterodactyl"],
    },
  },
  {
    name: "MC Diamond",
    price: "R$79,90",
    link: "https://app.razehost.com.br/store/minecraft/mc-diamond",
    image: "/minecraft/steve-diamond.png",
    description: {
      ram: "6 GB",
      ssd: "40 GB",
      cores: "3 núcleos",
      attrs: ["Anti DDoS Incluso", "Painel Pterodactyl"],
    },
  },
  {
    name: "MC Netherite",
    price: "R$129,90",
    link: "https://app.razehost.com.br/store/minecraft/mc-netherite",
    image: "/minecraft/steve-netherite.png",
    description: {
      ram: "8 GB",
      ssd: "60 GB",
      cores: "4 núcleos",
      attrs: ["Anti DDoS Incluso", "Painel Pterodactyl"],
    },
  },
]

// Planos Bedrock
const bedrockPlans = [
  {
    name: "Bedrock Basic",
    price: "R$39,90",
    link: "https://app.razehost.com.br/store/minecraft/bedrock-basic",
    image: "/minecraft/bedrock-basic.png",
    description: {
      ram: "3 GB",
      ssd: "15 GB",
      cores: "2 núcleos",
      attrs: ["Anti DDoS Incluso", "Painel Pterodactyl", "Suporte a Add-ons"],
    },
  },
  {
    name: "Bedrock Plus",
    price: "R$69,90",
    link: "https://app.razehost.com.br/store/minecraft/bedrock-plus",
    image: "/minecraft/bedrock-plus.png",
    description: {
      ram: "6 GB",
      ssd: "30 GB",
      cores: "3 núcleos",
      attrs: ["Anti DDoS Incluso", "Painel Pterodactyl", "Suporte a Add-ons", "Backups Diários"],
    },
  },
  {
    name: "Bedrock Pro",
    price: "R$99,90",
    link: "https://app.razehost.com.br/store/minecraft/bedrock-pro",
    image: "/minecraft/bedrock-pro.png",
    description: {
      ram: "8 GB",
      ssd: "50 GB",
      cores: "4 núcleos",
      attrs: ["Anti DDoS Incluso", "Painel Pterodactyl", "Suporte a Add-ons", "Backups Diários", "Domínio Grátis"],
    },
  },
]

export default function MinecraftPage() {
  const [selectedTab, setSelectedTab] = useState("java")

  // Cor laranja conforme solicitado
  const primaryColor = "rgb(251 146 60)"

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
              Servidores otimizados para Minecraft com processadores AMD Ryzen 9 5950X
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

          {/* Planos baseados na tab selecionada */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(selectedTab === "java" ? javaPlans : bedrockPlans).map((plan, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(251,146,60,0.3)]"
              >
                {/* Cabeçalho do plano com imagem do personagem */}
                <div className="h-[180px] bg-gradient-to-b from-gray-800 to-[#1A1A1A] relative overflow-hidden">
                  {/* Placeholder para imagem do personagem */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[150px]">
                    <div
                      className={`w-full h-full ${
                        plan.name.includes("Stone")
                          ? "bg-gray-500"
                          : plan.name.includes("Iron")
                            ? "bg-gray-400"
                            : plan.name.includes("Diamond")
                              ? "bg-blue-500"
                              : plan.name.includes("Netherite")
                                ? "bg-purple-900"
                                : plan.name.includes("Basic")
                                  ? "bg-green-500"
                                  : plan.name.includes("Plus")
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                      } rounded-t-lg opacity-70`}
                    ></div>
                  </div>

                  {/* Badge do processador */}
                  <div className="absolute top-4 left-4 bg-black/70 text-xs text-white px-2 py-1 rounded-full">
                    AMD Ryzen 9 5950X
                  </div>
                </div>

                {/* Conteúdo do plano */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-orange-500 mb-1">{plan.price}</div>
                    <div className="text-sm text-gray-500">/mês</div>
                  </div>

                  {/* Especificações principais */}
                  <div className="flex justify-between text-center mb-6">
                    <div>
                      <div className="text-xl font-bold text-white">{plan.description.ram}</div>
                      <div className="text-xs text-gray-500 mt-1">RAM</div>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-800"></div>
                    <div>
                      <div className="text-xl font-bold text-white">{plan.description.cores}</div>
                      <div className="text-xs text-gray-500 mt-1">vCPU</div>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-800"></div>
                    <div>
                      <div className="text-xl font-bold text-white">{plan.description.ssd}</div>
                      <div className="text-xs text-gray-500 mt-1">SSD</div>
                    </div>
                  </div>

                  {/* Recursos adicionais */}
                  <div className="space-y-3 mb-6">
                    {plan.description.attrs.map((attr, idx) => (
                      <div key={idx} className="flex items-center">
                        <CircleCheckBig className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                        <span className="text-sm text-gray-300">{attr}</span>
                      </div>
                    ))}
                  </div>

                  {/* Botão de ação */}
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold" size="lg">
                      Contratar Agora
                    </Button>
                  </a>
                </div>
              </div>
            ))}
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
