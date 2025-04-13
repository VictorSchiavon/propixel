"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Star, ExternalLink, Award, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import games from "@/config/games.json"
import { CircularProgress } from "./circular-progress"

export default function Games() {
  const [displayGame, setDisplayGame] = useState<any>(null)

  useEffect(() => {
    const findGame = games.filter((item) => item.id === 14)
    setDisplayGame(findGame[0])
  }, [])

  if (!displayGame) {
    return (
      <div className="container mx-auto px-6 flex-grow pt-[2%] min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-48 bg-slate-700 rounded"></div>
          <div className="h-64 w-full max-w-3xl bg-slate-800 rounded-lg"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 flex-grow pt-8 pb-16">
      {/* Game Display Section */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-2/5">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-slate-900 to-slate-800">
              {displayGame.image && (
                <img
                  src={displayGame.image || "/placeholder.svg"}
                  alt={displayGame.name}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-4 left-4">
                <Badge className="bg-emerald-600 hover:bg-emerald-700">Disponível</Badge>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <div className="flex flex-col h-full">
              <div>
                <h1 className="text-3xl font-bold mb-2">{displayGame.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">(100+ avaliações)</span>
                </div>
                <p className="text-gray-300 mb-6">
                  {displayGame.description ||
                    "Experimente o melhor servidor para seu jogo favorito com hardware de ponta e suporte 24/7."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <div>
                    <p className="font-medium">Proteção DDoS</p>
                    <p className="text-xs text-gray-400">Proteção contra ataques</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="font-medium">Baixa Latência</p>
                    <p className="text-xs text-gray-400">Servidores no Brasil</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white">
                  Contratar Servidor
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Game Details Tabs */}
        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="grid grid-cols-3 sm:grid-cols-5 mb-8">
            <TabsTrigger value="features">Recursos</TabsTrigger>
            <TabsTrigger value="specs">Especificações</TabsTrigger>
            <TabsTrigger value="plans">Planos</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="tutorials">Tutoriais</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-2">
                    <Award className="w-10 h-10 text-emerald-500 mb-2" />
                    <CardTitle className="text-lg">Recurso Premium {item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      Descrição detalhada do recurso e como ele beneficia sua experiência de jogo.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specs">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Hardware</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-400">Processador</span>
                        <span>AMD Ryzen 9 5950X</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Memória</span>
                        <span>32GB DDR4</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Armazenamento</span>
                        <span>NVMe SSD</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Rede</span>
                        <span>10 Gbps</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Software</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-400">Sistema Operacional</span>
                        <span>Linux</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Painel de Controle</span>
                        <span>Personalizado</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Backups</span>
                        <span>Automáticos</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-400">Mods</span>
                        <span>Suporte Completo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="plans">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Básico", "Padrão", "Premium"].map((plan, index) => (
                <Card key={plan} className={`bg-slate-800 border-slate-700 ${index === 2 ? "border-emerald-600" : ""}`}>
                  <CardHeader>
                    <CardTitle>{plan}</CardTitle>
                    <CardDescription>
                      {index === 0 && "Para jogadores casuais"}
                      {index === 1 && "Para grupos pequenos"}
                      {index === 2 && "Para comunidades"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">R${(index + 1) * 25},90</span>
                      <span className="text-gray-400">/mês</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>{(index + 1) * 2} GB RAM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>{(index + 1) * 10} Jogadores</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>{(index + 1) * 10} GB SSD</span>
                      </li>
                      {index > 0 && (
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Backups Diários</span>
                        </li>
                      )}
                      {index > 1 && (
                        <li className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>Suporte Prioritário</span>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${index === 2 ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}>
                      Escolher Plano
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6 space-y-4">
                {[
                  {
                    question: "Como instalar mods no servidor?",
                    answer:
                      "Nosso painel de controle permite a instalação de mods com apenas alguns cliques. Basta acessar a seção de mods, selecionar os desejados e clicar em instalar.",
                  },
                  {
                    question: "Quanto tempo leva para ativar meu servidor?",
                    answer: "Servidores são ativados instantaneamente após a confirmação do pagamento.",
                  },
                  {
                    question: "Posso mudar de plano depois?",
                    answer:
                      "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento através do painel de controle.",
                  },
                  {
                    question: "Como funciona o suporte técnico?",
                    answer: "Oferecemos suporte 24/7 via ticket, chat ao vivo e Discord para todos os clientes.",
                  },
                ].map((item, i) => (
                  <div key={i} className="pb-4">
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-300 text-sm">{item.answer}</p>
                    {i < 3 && <Separator className="mt-4 bg-slate-700" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="bg-slate-800 border-slate-700 overflow-hidden">
                  <div className="aspect-video bg-slate-900 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-600/90 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-1">Tutorial {item}: Configuração Inicial</h3>
                    <p className="text-sm text-gray-400">Aprenda a configurar seu servidor em minutos</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Ratings Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Notas e avaliações</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center">
            <CircularProgress percentage={100} size={120} strokeWidth={10} color="#10b981" />
            <p className="mt-4 text-center text-gray-300">Classificação do Google</p>
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center">
            <CircularProgress percentage={100} size={120} strokeWidth={10} color="#10b981" />
            <p className="mt-4 text-center text-gray-300">Classificação do Trustpilot</p>
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 flex flex-col items-center">
            <CircularProgress percentage={100} size={120} strokeWidth={10} color="#10b981" />
            <p className="mt-4 text-center text-gray-300">Classificação do Discord</p>
            <div className="flex mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Avaliações dos clientes</h2>
          <Link
            href="https://br.trustpilot.com/review/raze.host"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Ver todas as avaliações</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800 border-slate-700 hover:border-emerald-600/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Raze Host é incrível</CardTitle>
                  <CardDescription>por Humberto Junior</CardDescription>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4 bg-slate-700" />
              <p className="text-gray-300 text-sm">
                A razehost e incrível, custo benefício e um belo suporte, tanto pra colocar mods e essas coisas,
                recomendo e irei utilizar muito
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-emerald-600/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Uso e recomendo</CardTitle>
                  <CardDescription>por Alexandre Denardi</CardDescription>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4 bg-slate-700" />
              <p className="text-gray-300 text-sm">
                Já uso a empresa para hospedar servidores a anos GTA RP, servidores Linux, hoje estou até mesmo com meu
                banco de dados hospedado, sem quedas e SLA perfeito.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:border-emerald-600/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Excelente suporte</CardTitle>
                  <CardDescription>por Tomas</CardDescription>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4 bg-slate-700" />
              <p className="text-gray-300 text-sm">
                Razehost com suporte e jogos top para jogar, já contratei outros, mas esse servidor está muito bom e com
                equipamentos muito bons também.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <CardContent className="p-8">
            <h2 className="text-xl font-bold mb-4">Qual a melhor host para Palworld?</h2>
            <p className="text-gray-300">
              A RazeHost é a primeira hospedagem de jogos no Brasil, garantimos baixa latência e hardware potente. Com
              proteção DDoS mitigamos qualquer tipo de ataque, mantendo sua gameplay limpa.
            </p>
            <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700">Contratar Agora</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
