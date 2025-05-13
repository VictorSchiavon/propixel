import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PlanCard } from "@/components/plan-card"
import { Cpu, Shield, Clock, Server, Globe, Zap, Database, Cloud } from "lucide-react"
import { GetStarted } from "@/components/get-started"

export default function PlanosPage() {
  const planos = [
    {
      id: 1,
      title: "Minecraft Básico",
      description: "Ideal para servidores pequenos com até 10 jogadores",
      price: "R$ 19,99",
      features: ["2GB RAM", "10 Slots", "Suporte 24/7", "Painel de Controle"],
      popular: false,
    },
    {
      id: 2,
      title: "Minecraft Premium",
      description: "Perfeito para servidores médios com até 30 jogadores",
      price: "R$ 39,99",
      features: ["4GB RAM", "30 Slots", "Suporte 24/7", "Painel de Controle", "Backup Diário", "Domínio Grátis"],
      popular: true,
    },
    {
      id: 3,
      title: "GTA V Básico",
      description: "Servidor FiveM para comunidades pequenas",
      price: "R$ 59,99",
      features: ["4GB RAM", "32 Slots", "Suporte 24/7", "Painel de Controle", "Anti-DDoS"],
      popular: false,
    },
    {
      id: 4,
      title: "GTA V Premium",
      description: "Servidor FiveM para comunidades grandes",
      price: "R$ 99,99",
      features: [
        "8GB RAM",
        "64 Slots",
        "Suporte 24/7",
        "Painel de Controle",
        "Anti-DDoS",
        "Backup Diário",
        "Domínio Grátis",
      ],
      popular: false,
    },
  ]

  const beneficios = [
    {
      icon: Cpu,
      title: "Processadores AMD Ryzen 9",
      description: "Servidores equipados com os mais recentes processadores AMD Ryzen 9 9900X para máxima performance.",
    },
    {
      icon: Shield,
      title: "Proteção Cloudflare",
      description:
        "Proteção avançada contra ataques DDoS com Cloudflare Enterprise para manter seu servidor sempre online.",
    },
    {
      icon: Clock,
      title: "Uptime de 99.9%",
      description: "Garantimos disponibilidade de 99.9% com monitoramento 24/7 e redundância de sistemas.",
    },
    {
      icon: Server,
      title: "Datacenter Tier III",
      description: "Servidores hospedados em datacenter Tier III da Cirion em São Paulo com redundância N+1.",
    },
    {
      icon: Globe,
      title: "Baixa Latência",
      description: "Conexões de baixa latência para todo o Brasil e América Latina com rotas otimizadas.",
    },
    {
      icon: Zap,
      title: "Ativação Instantânea",
      description: "Seu servidor estará pronto para uso em menos de 60 segundos após a confirmação do pagamento.",
    },
    {
      icon: Database,
      title: "SSD NVMe",
      description: "Armazenamento em discos SSD NVMe para tempos de carregamento ultrarrápidos e melhor desempenho.",
    },
    {
      icon: Cloud,
      title: "Backups Automáticos",
      description: "Backups diários automáticos com retenção de 7 dias para garantir a segurança dos seus dados.",
    },
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">Nossos Planos</h1>
            <p className="text-gray-400 mb-8">Escolha o plano ideal para o seu servidor de jogos</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {planos.map((plano) => (
                <PlanCard key={plano.id} plan={plano} />
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Informações do Datacenter</h2>
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Cirion São Paulo</h3>
                    <p className="text-gray-300 mb-4">
                      Nossos servidores estão localizados no datacenter Tier III da Cirion (antiga Lumen Technologies)
                      em São Paulo, garantindo alta disponibilidade, segurança e baixa latência para todo o Brasil e
                      América Latina.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Certificação Tier III (99.982% de disponibilidade)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Redundância N+1 em todos os sistemas críticos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Segurança física 24/7 com controle de acesso biométrico</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Sistemas avançados de detecção e supressão de incêndios</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Conectividade</h3>
                    <p className="text-gray-300 mb-4">
                      Oferecemos conectividade de alta velocidade com múltiplos provedores e proteção Cloudflare
                      Enterprise para garantir a melhor experiência possível para seus jogadores.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Múltiplos links de 100 Gbps com redundância</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Proteção DDoS Cloudflare Enterprise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Latência média de 5-20ms para São Paulo e região</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span>Peering direto com os principais provedores brasileiros</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Benefícios NexusHost</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6">
                    <div className="flex justify-center mb-4">
                      <div className="bg-yellow-500/20 p-3 rounded-full">
                        <beneficio.icon className="h-6 w-6 text-yellow-500" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">{beneficio.title}</h3>
                    <p className="text-gray-400 text-sm text-center">{beneficio.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
