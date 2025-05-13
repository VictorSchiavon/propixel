import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Server, Cpu, Shield, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GetStarted } from "@/components/get-started"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Host de ARK: Survival Evolved no Brasil | Servidores ARK | NexusHost",
  description:
    "Hospedagem de servidores ARK: Survival Evolved no Brasil com alta performance, proteção DDoS e suporte 24/7. Crie seu servidor de ARK hoje!",
  keywords: "ark, ark survival evolved, host ark, servidor ark, hospedagem ark brasil, ark server, ark hosting",
}

export default function ArkSurvivalEvolvedPage() {
  // Planos para o jogo
  const planos = [
    {
      id: 1,
      title: "ARK Básico",
      description: "Ideal para servidores pequenos com até 20 jogadores",
      price: "R$ 49,99",
      features: ["6GB RAM", "20 Slots", "Suporte 24/7", "Painel de Controle", "Anti-DDoS"],
      specs: {
        cpu: "AMD Ryzen",
        ram: "6GB",
        storage: "80GB SSD NVMe",
        slots: "20",
      },
    },
    {
      id: 2,
      title: "ARK Padrão",
      description: "Perfeito para servidores médios com até 50 jogadores",
      price: "R$ 89,99",
      features: [
        "10GB RAM",
        "50 Slots",
        "Suporte 24/7",
        "Painel de Controle",
        "Anti-DDoS",
        "Backup Diário",
        "Domínio Grátis",
      ],
      popular: true,
      specs: {
        cpu: "AMD Ryzen",
        ram: "10GB",
        storage: "120GB SSD NVMe",
        slots: "50",
      },
    },
    {
      id: 3,
      title: "ARK Premium",
      description: "Ideal para servidores grandes com até 100 jogadores",
      price: "R$ 139,99",
      features: [
        "16GB RAM",
        "100 Slots",
        "Suporte 24/7 Prioritário",
        "Painel de Controle",
        "Anti-DDoS",
        "Backup Diário",
        "Domínio Grátis",
        "IP Dedicado",
      ],
      specs: {
        cpu: "AMD Ryzen",
        ram: "16GB",
        storage: "200GB SSD NVMe",
        slots: "100",
      },
    },
  ]

  // Recursos do jogo
  const recursos = [
    {
      icon: Cpu,
      title: "Processadores AMD Ryzen",
      description: "Servidores equipados com os mais recentes processadores AMD Ryzen para máxima performance.",
    },
    {
      icon: Shield,
      title: "Proteção Anti-DDoS",
      description: "Proteção avançada contra ataques DDoS para manter seu servidor sempre online.",
    },
    {
      icon: Clock,
      title: "Ativação Instantânea",
      description: "Seu servidor estará pronto para uso em menos de 60 segundos após a confirmação do pagamento.",
    },
    {
      icon: Server,
      title: "Painel de Controle Intuitivo",
      description: "Gerencie seu servidor facilmente com nosso painel de controle intuitivo e amigável.",
    },
  ]

  // Jogos similares
  const jogosSimilares = [
    { id: "ark-survival-ascended", title: "ARK: Survival Ascended", category: "Survival" },
    { id: "rust", title: "Rust", category: "Survival" },
    { id: "valheim", title: "Valheim", category: "Survival" },
    { id: "7-days-to-die", title: "7 Days to Die", category: "Survival" },
    { id: "conan-exiles", title: "Conan Exiles", category: "Survival" },
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="ARK: Survival Evolved"
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-2 bg-yellow-500 hover:bg-yellow-600 text-black">Survival</Badge>
                  <h1 className="text-3xl font-bold">ARK: Survival Evolved</h1>
                  <p className="text-gray-400 mt-2">
                    Hospedagem de servidores ARK: Survival Evolved com alta performance e estabilidade. Suporte para
                    mods, DLCs e configurações personalizadas.
                  </p>
                </div>

                <Tabs defaultValue="basico" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="basico">Básico</TabsTrigger>
                    <TabsTrigger value="padrao">Padrão</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                  </TabsList>
                  {planos.map((plano, index) => (
                    <TabsContent key={plano.id} value={index === 0 ? "basico" : index === 1 ? "padrao" : "premium"}>
                      <div className="space-y-4">
                        <div className="flex items-baseline">
                          <span className="text-4xl font-bold">{plano.price}</span>
                          <span className="text-gray-400 ml-2">/mês</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm">CPU</p>
                            <p className="font-semibold">{plano.specs.cpu}</p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm">RAM</p>
                            <p className="font-semibold">{plano.specs.ram}</p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm">Armazenamento</p>
                            <p className="font-semibold">{plano.specs.storage}</p>
                          </div>
                          <div className="bg-gray-900 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm">Slots</p>
                            <p className="font-semibold">{plano.specs.slots}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {plano.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="h-5 w-5 text-yellow-500 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                            Contratar Agora
                          </Button>
                          <Button variant="outline" className="w-full">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Recursos do Servidor</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recursos.map((recurso, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-lg">
                    <div className="flex justify-center mb-4">
                      <div className="bg-yellow-500/20 p-3 rounded-full">
                        <recurso.icon className="h-6 w-6 text-yellow-500" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-center">{recurso.title}</h3>
                    <p className="text-gray-400 text-sm text-center">{recurso.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Jogos Similares</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {jogosSimilares.map((jogoSimilar) => (
                  <Link key={jogoSimilar.id} href={`/${jogoSimilar.id}`} className="group">
                    <div className="bg-gray-900 rounded-lg overflow-hidden">
                      <div className="relative aspect-square">
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/809/809654.png"
                          alt={jogoSimilar.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-center group-hover:text-yellow-500 transition-colors">
                          {jogoSimilar.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
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
