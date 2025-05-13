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

export default function JogoDetalhePage({ params }: { params: { id: string } }) {
  // Simulando dados do jogo
  const jogos = [
    { id: "1", title: "Minecraft", category: "Sandbox" },
    { id: "2", title: "7 Days to Die", category: "Survival" },
    { id: "3", title: "Palworld", category: "Survival" },
    { id: "4", title: "FiveM", category: "Roleplay" },
    { id: "5", title: "Ark: Survival Evolved", category: "Survival" },
    // Adicione mais jogos conforme necessário
  ]

  const jogo = jogos.find((j) => j.id === params.id) || {
    id: params.id,
    title: "Jogo",
    category: "Categoria",
  }

  // Gerar nome da imagem baseado no título do jogo
  const gameImageName = jogo.title.toLowerCase().replace(/\s+/g, "").replace(/:/g, "")
  const imagePath = `/${gameImageName}card.webp`

  // Planos para o jogo
  const planos = [
    {
      id: 1,
      title: `${jogo.title} Básico`,
      description: "Ideal para servidores pequenos com até 10 jogadores",
      price: "R$ 19,99",
      features: ["2GB RAM", "10 Slots", "Suporte 24/7", "Painel de Controle"],
      specs: {
        cpu: "AMD Ryzen 5 5600X",
        ram: "2GB",
        storage: "20GB SSD NVMe",
        slots: "10",
      },
    },
    {
      id: 2,
      title: `${jogo.title} Padrão`,
      description: "Perfeito para servidores médios com até 30 jogadores",
      price: "R$ 39,99",
      features: ["4GB RAM", "30 Slots", "Suporte 24/7", "Painel de Controle", "Backup Diário", "Domínio Grátis"],
      popular: true,
      specs: {
        cpu: "AMD Ryzen 7 7700X",
        ram: "4GB",
        storage: "50GB SSD NVMe",
        slots: "30",
      },
    },
    {
      id: 3,
      title: `${jogo.title} Premium`,
      description: "Ideal para servidores grandes com muitos jogadores e mods",
      price: "R$ 69,99",
      features: [
        "8GB RAM",
        "100 Slots",
        "Suporte 24/7 Prioritário",
        "Painel de Controle",
        "Anti-DDoS",
        "Backup Diário",
        "Domínio Grátis",
        "IP Dedicado",
      ],
      specs: {
        cpu: "AMD Ryzen 9 9900X",
        ram: "8GB",
        storage: "100GB SSD NVMe",
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
  const jogosSimilares = jogos.filter((j) => j.id !== params.id && j.category === jogo.category).slice(0, 5)

  return (
    <div className="flex min-h-screen flex-col bg-[#0F1014]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Image
                  src={imagePath || "/placeholder.svg"}
                  alt={jogo.title}
                  width={800}
                  height={600}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <Badge className="mb-2 bg-yellow-500 hover:bg-yellow-600 text-black">{jogo.category}</Badge>
                  <h1 className="text-3xl font-bold">{jogo.title}</h1>
                  <p className="text-gray-400 mt-2">
                    Hospedagem de servidores de {jogo.title} com alta performance e estabilidade.
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
                            Adicionar aos Favoritos
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
                {jogosSimilares.map((jogoSimilar) => {
                  const similarImageName = jogoSimilar.title.toLowerCase().replace(/\s+/g, "").replace(/:/g, "")
                  return (
                    <Link key={jogoSimilar.id} href={`/jogo/${jogoSimilar.id}`} className="group">
                      <div className="bg-gray-900 rounded-lg overflow-hidden">
                        <div className="relative aspect-square">
                          <Image
                            src={`/${similarImageName}card.webp`}
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
                  )
                })}
              </div>
            </div>

            <GetStarted />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
