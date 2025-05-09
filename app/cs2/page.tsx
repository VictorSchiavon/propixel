"use client"

import React from "react"
import { useRef } from "react"
import { CheckCircle2, Shield, Zap, Server, Cpu, Globe, HeadsetIcon, HardDrive } from "lucide-react"

// Definição do tipo para os planos
interface PlanDescription {
  ram: string
  ssd: string
  slots: string
  location: string
  tickRate: string
  ddosProtection: boolean
  support: string
}

interface Plan {
  id: string
  name: string
  originalPrice: string
  price: string
  color: string
  description: PlanDescription
  recommended?: boolean
}

// Planos de CS2 Host
const cs2HostPlans: Plan[] = [
  {
    id: "basic",
    name: "BÁSICO",
    originalPrice: "R$39,90",
    price: "R$29,90",
    color: "bg-gray-700",
    description: {
      ram: "2 GB",
      ssd: "15 GB SSD NVME",
      slots: "12 slots",
      location: "São Paulo",
      tickRate: "64 tick",
      ddosProtection: true,
      support: "Suporte padrão",
    },
  },
  {
    id: "advanced",
    name: "AVANÇADO",
    originalPrice: "R$59,90",
    price: "R$49,90",
    color: "bg-orange-500",
    recommended: true,
    description: {
      ram: "4 GB",
      ssd: "25 GB SSD NVME",
      slots: "20 slots",
      location: "São Paulo",
      tickRate: "128 tick",
      ddosProtection: true,
      support: "Suporte prioritário",
    },
  },
  {
    id: "pro",
    name: "PROFISSIONAL",
    originalPrice: "R$79,90",
    price: "R$69,90",
    color: "bg-blue-600",
    description: {
      ram: "6 GB",
      ssd: "40 GB SSD NVME",
      slots: "32 slots",
      location: "São Paulo",
      tickRate: "128 tick",
      ddosProtection: true,
      support: "Suporte premium 24/7",
    },
  },
]

// Planos de CS2 VPS
const cs2VpsPlans: Plan[] = [
  {
    id: "vps-basic",
    name: "VPS BÁSICO",
    originalPrice: "R$79,90",
    price: "R$69,90",
    color: "bg-purple-700",
    description: {
      ram: "2 GB",
      ssd: "50 GB SSD NVME",
      slots: "Ilimitados",
      location: "São Paulo",
      tickRate: "Configurável",
      ddosProtection: true,
      support: "Suporte padrão",
    },
  },
  {
    id: "vps-advanced",
    name: "VPS AVANÇADO",
    originalPrice: "R$119,90",
    price: "R$99,90",
    color: "bg-orange-500",
    recommended: true,
    description: {
      ram: "4 GB",
      ssd: "80 GB SSD NVME",
      slots: "Ilimitados",
      location: "São Paulo",
      tickRate: "Configurável",
      ddosProtection: true,
      support: "Suporte prioritário",
    },
  },
  {
    id: "vps-pro",
    name: "VPS PROFISSIONAL",
    originalPrice: "R$179,90",
    price: "R$159,90",
    color: "bg-green-600",
    description: {
      ram: "6 GB",
      ssd: "120 GB SSD NVME",
      slots: "Ilimitados",
      location: "São Paulo",
      tickRate: "Configurável",
      ddosProtection: true,
      support: "Suporte premium 24/7",
    },
  },
]

export default function CS2HostingPage() {
  const [selectedPlan, setSelectedPlan] = React.useState<Plan | null>(null)
  const [planType, setPlanType] = React.useState<"host" | "vps">("host")
  const detailsRef = useRef<HTMLDivElement>(null)

  // Função para mostrar detalhes do plano e rolar para a seção de detalhes
  const showPlanDetails = (plan: Plan) => {
    setSelectedPlan(plan)
    // Rolar para a seção de detalhes em dispositivos móveis
    if (window.innerWidth < 1024 && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  // Obter os planos ativos com base no tipo selecionado
  const activePlans = planType === "host" ? cs2HostPlans : cs2VpsPlans

  return (
    <div className="bg-[rgb(11,14,19)] min-h-screen text-white">
      {/* Header com estilo CS2 */}
      <div className="relative w-full h-[500px] overflow-hidden bg-[rgb(11,14,19)]">
        {/* Imagem de fundo com overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1200')] bg-cover bg-center opacity-30"></div>

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(11,14,19)] via-[rgb(11,14,19)]/90 to-transparent"></div>

        {/* Conteúdo do hero */}
        <div className="container mx-auto px-6 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Host de <span className="text-orange-500">Counter Strike 2</span> de alta performance
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Servidores CS2 com processadores de última geração, proteção Anti-DDoS e suporte técnico especializado
              para gamers exigentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#plans"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg rounded-md inline-block text-center"
              >
                Ver planos de Host CS2
              </a>

              <a
                href="#contact"
                className="border-2 border-orange-500 text-white hover:bg-orange-500/20 font-bold px-8 py-4 text-lg rounded-md inline-block text-center"
              >
                Falar com especialista
              </a>
            </div>
          </div>

          {/* Imagem de CS2 */}
          <div className="hidden lg:block absolute right-0 bottom-0">
            <div className="relative w-[400px] h-[400px]">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Counter Strike 2 Character"
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Seção de vantagens */}
      <div className="bg-[rgb(15,18,23)] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                <Zap className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Desempenho Superior</h3>
              <p className="text-gray-400">
                Servidores otimizados para CS2 com alta taxa de tick e baixo ping para jogabilidade fluida.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                <Shield className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Proteção Anti-DDoS</h3>
              <p className="text-gray-400">
                Proteção avançada contra ataques DDoS para manter seu servidor sempre online.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                <HeadsetIcon className="text-orange-500" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte Especializado</h3>
              <p className="text-gray-400">
                Equipe técnica especializada em CS2 disponível para ajudar com qualquer problema.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de planos com estilo CS2 */}
      <div id="plans" className="bg-[rgb(11,14,19)] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Planos de Host para Counter Strike 2</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha o plano ideal para seu servidor de CS2 com a melhor relação custo-benefício do mercado
            </p>
          </div>

          {/* Seletor de tipo de plano */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg p-1 flex">
              <button
                onClick={() => setPlanType("host")}
                className={`px-6 py-3 rounded-md font-medium text-lg transition-all ${
                  planType === "host"
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Server size={20} />
                  <span>Host CS2</span>
                </div>
              </button>
              <button
                onClick={() => setPlanType("vps")}
                className={`px-6 py-3 rounded-md font-medium text-lg transition-all ${
                  planType === "vps"
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <HardDrive size={20} />
                  <span>VPS CS2</span>
                </div>
              </button>
            </div>
          </div>

          {/* Descrição do tipo de plano */}
          <div className="text-center mb-12">
            {planType === "host" ? (
              <p className="text-gray-300 max-w-3xl mx-auto">
                Nossos planos <span className="text-orange-500 font-bold">Host CS2</span> são otimizados para jogadores
                que desejam um servidor gerenciado e fácil de configurar, ideal para comunidades e partidas casuais.
              </p>
            ) : (
              <p className="text-gray-300 max-w-3xl mx-auto">
                Nossos planos <span className="text-orange-500 font-bold">VPS CS2</span> oferecem controle total sobre o
                servidor, com acesso root e recursos dedicados, perfeito para competições e servidores personalizados.
              </p>
            )}
          </div>

          {/* Grid de planos e painel de detalhes */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Grid de planos */}
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {activePlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-[#1A1A1A] border-2 ${
                    plan.recommended ? "border-orange-500" : "border-gray-800"
                  } rounded-lg overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:shadow-orange-500/20 relative`}
                >
                  {plan.recommended && (
                    <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white font-bold text-center py-1 px-2 z-10">
                      MAIS POPULAR
                    </div>
                  )}
                  <div className={`${plan.recommended ? "pt-10 pb-4" : "py-6"} text-center`}>
                    <div
                      className={`w-16 h-16 mx-auto rounded-full ${plan.color} flex items-center justify-center mb-2`}
                    >
                      {planType === "host" ? (
                        <Server size={32} className="text-white" />
                      ) : (
                        <HardDrive size={32} className="text-white" />
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <h3 className="text-xl font-bold text-white mb-2 text-center">{plan.name}</h3>
                    <div className="flex flex-col items-center mb-4">
                      <div className="text-sm text-gray-500 line-through">{plan.originalPrice}/mês</div>
                      <div className="text-2xl font-bold text-orange-500">{plan.price}/mês</div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300">
                        <CheckCircle2 className="text-orange-500 mr-2" size={16} />
                        <span>{plan.description.ram} RAM</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle2 className="text-orange-500 mr-2" size={16} />
                        <span>{plan.description.ssd}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <CheckCircle2 className="text-orange-500 mr-2" size={16} />
                        <span>{plan.description.slots}</span>
                      </div>
                    </div>
                    <button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium"
                      onClick={() => showPlanDetails(plan)}
                    >
                      Ver detalhes
                    </button>
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
                        <CheckCircle2 className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.ram} RAM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.ssd}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.slots}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">Taxa de tick: {selectedPlan.description.tickRate}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">Localização: {selectedPlan.description.location}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">Proteção Anti-DDoS avançada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-orange-500 mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-gray-300">{selectedPlan.description.support}</span>
                      </li>
                    </ul>

                    <a
                      href={`https://app.razehost.com.br/store/cs2/${selectedPlan.id}`}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md inline-block text-center"
                    >
                      CONTRATAR
                    </a>
                  </>
                ) : (
                  <div className="text-gray-400 text-center py-8">Selecione um plano para ver os detalhes</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de comparação de planos */}
      <div className="bg-[rgb(15,18,23)] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comparação de planos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Entenda as diferenças entre nossos planos Host e VPS para Counter Strike 2
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-[#1A1A1A] border border-gray-800"></th>
                  <th className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <div className="flex flex-col items-center">
                      <Server size={24} className="text-orange-500 mb-2" />
                      <span className="font-bold text-lg">Host CS2</span>
                    </div>
                  </th>
                  <th className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <div className="flex flex-col items-center">
                      <HardDrive size={24} className="text-orange-500 mb-2" />
                      <span className="font-bold text-lg">VPS CS2</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 bg-[#1A1A1A] border border-gray-800 font-medium">Facilidade de uso</td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-green-500 font-bold">Muito fácil</span>
                  </td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-yellow-500 font-bold">Requer conhecimento técnico</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#1A1A1A] border border-gray-800 font-medium">Controle</td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-gray-300">Painel de controle específico</span>
                  </td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-green-500 font-bold">Acesso root completo</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#1A1A1A] border border-gray-800 font-medium">Personalização</td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-gray-300">Plugins e configurações básicas</span>
                  </td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-green-500 font-bold">Personalização total</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#1A1A1A] border border-gray-800 font-medium">Preço</td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-green-500 font-bold">A partir de R$29,90</span>
                  </td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-gray-300">A partir de R$69,90</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#1A1A1A] border border-gray-800 font-medium">Ideal para</td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-gray-300">Comunidades e jogos casuais</span>
                  </td>
                  <td className="p-4 text-center bg-[#1A1A1A] border border-gray-800">
                    <span className="text-gray-300">Competições e servidores avançados</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Seção de recursos para CS2 */}
      <div className="bg-[rgb(11,14,19)] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recursos exclusivos para seu servidor CS2</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Oferecemos ferramentas e recursos especiais para melhorar a experiência do seu servidor Counter Strike 2
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-2 border-gray-800 rounded-lg shadow-xl p-6">
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                  <Cpu className="text-orange-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Configuração otimizada para CS2</h3>
                <p className="text-gray-400 mb-6">
                  Nossos servidores são configurados especificamente para Counter Strike 2, com ajustes de performance
                  que garantem a melhor experiência de jogo possível.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Configurações otimizadas para CS2</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Suporte para plugins populares</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Painel de controle intuitivo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border-2 border-gray-800 rounded-lg shadow-xl p-6">
              <div className="flex flex-col">
                <div className="w-16 h-16 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                  <Globe className="text-orange-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Conectividade global</h3>
                <p className="text-gray-400 mb-6">
                  Servidores estrategicamente localizados para garantir baixa latência e conexão estável para jogadores
                  de todo o Brasil.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Servidores no Brasil</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Baixa latência garantida</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="text-orange-500 mr-2 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Uptime de 99,9%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de depoimentos */}
      <div className="bg-[rgb(15,18,23)] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Veja o que os jogadores e administradores de servidores CS2 acham da nossa hospedagem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg shadow-xl p-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Ricardo S.</h4>
                    <p className="text-sm text-gray-400">Admin de servidor competitivo</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Desde que mudei para esta hospedagem, os jogadores não param de elogiar a estabilidade e o desempenho
                  do servidor. A taxa de tick de 128 faz toda a diferença nas partidas competitivas."
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg shadow-xl p-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Fernanda L.</h4>
                    <p className="text-sm text-gray-400">Líder de comunidade CS2</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "O suporte técnico é incrível! Sempre que tive alguma dúvida ou problema, eles resolveram rapidamente.
                  A proteção anti-DDoS realmente funciona e mantém nosso servidor sempre online."
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg shadow-xl p-6">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Carlos M.</h4>
                    <p className="text-sm text-gray-400">Organizador de torneios</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Realizamos torneios semanais de CS2 e a estabilidade dos servidores é fundamental. Nunca tivemos
                  problemas de lag ou quedas, mesmo com 32 jogadores simultâneos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de FAQ */}
      <div className="bg-[rgb(11,14,19)] py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Perguntas frequentes</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossa hospedagem de servidores Counter Strike 2
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">O que é taxa de tick?</h3>
              <p className="text-gray-400">
                A taxa de tick determina quantas vezes por segundo o servidor atualiza o estado do jogo. Uma taxa de 128
                tick oferece uma experiência mais fluida e precisa, ideal para jogos competitivos de CS2.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Qual a diferença entre Host e VPS?</h3>
              <p className="text-gray-400">
                O Host CS2 é uma solução gerenciada e fácil de usar, ideal para comunidades e jogos casuais. Já o VPS
                oferece controle total com acesso root, perfeito para competições e configurações avançadas.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Qual plano é recomendado para competições?</h3>
              <p className="text-gray-400">
                Para competições e jogos oficiais, recomendamos o plano VPS Avançado ou Profissional, que oferecem maior
                controle e recursos suficientes para garantir estabilidade mesmo em momentos de alta demanda.
              </p>
            </div>

            <div className="bg-[#1A1A1A] border-2 border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Como funciona a proteção Anti-DDoS?</h3>
              <p className="text-gray-400">
                Nossa proteção Anti-DDoS filtra automaticamente tráfego malicioso antes que ele chegue ao seu servidor,
                garantindo que ele permaneça online mesmo durante tentativas de ataque.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de contato */}
      <div id="contact" className="bg-[rgb(15,18,23)] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#1A1A1A] border-2 border-gray-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Precisa de ajuda para escolher?</h2>
              <p className="text-xl text-gray-400">
                Nossa equipe especializada em Counter Strike 2 está pronta para ajudar
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <a
                href="https://discord.gg/p8YXcEuKdH"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg rounded-md inline-block text-center"
              >
                Entrar no Discord
              </a>

              <a
                href="mailto:suporte@razehost.com.br"
                className="border-2 border-orange-500 text-white hover:bg-orange-500/20 font-bold px-8 py-4 text-lg rounded-md inline-block text-center"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer com SEO */}
      <footer className="bg-[rgb(8,10,15)] py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Host de CS2</h3>
              <p className="text-gray-400 mb-4">
                A melhor hospedagem para servidores Counter Strike 2 do Brasil, com planos a partir de R$29,90.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Planos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Host CS2 Básico - 2GB</li>
                <li>Host CS2 Avançado - 4GB</li>
                <li>Host CS2 Profissional - 6GB</li>
                <li>VPS CS2 - Controle total</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Servidores CS2 128 tick</li>
                <li>Proteção Anti-DDoS para CS2</li>
                <li>Painel de controle para CS2</li>
                <li>Suporte técnico especializado</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Discord: discord.gg/p8YXcEuKdH</li>
                <li>Email: contato@raze.host</li>
                <li>WhatsApp: (11) 96892-7685</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2025 RazeHost - A melhor hospedagem para Counter Strike 2 (CS2) do Brasil</p>
            <p className="mt-2 text-sm">
              Hospedagem de CS2 | Host de Counter Strike 2 | Servidores CS2 | Servidor CS2 128 tick | Host CS2 Anti-DDoS
              | VPS CS2
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
