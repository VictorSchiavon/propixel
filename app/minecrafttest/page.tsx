import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Diamond, Globe, Server, Shield } from 'lucide-react'

export default function MinecraftPlans() {
  return (
    <div className="bg-gradient-to-b from-green-900 to-green-950 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Planos de Minecraft</h1>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Escolha o plano perfeito para sua aventura no mundo de blocos. Servidores otimizados para a melhor
            experiência de jogo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Plano Básico */}
          <Card className="bg-white/10 backdrop-blur-sm border-green-400/20 text-white">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Plano Básico</CardTitle>
              <CardDescription className="text-green-200">Ideal para pequenos grupos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">
                  R$19,90<span className="text-lg font-normal">/mês</span>
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>2GB de RAM</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>10 jogadores simultâneos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Suporte básico</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-2" />
                  <span>Backups semanais</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Escolher Plano</Button>
            </CardFooter>
          </Card>

          {/* Plano Premium */}
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30 text-white relative overflow-hidden transform transition-all hover:scale-105">
            <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 text-sm">POPULAR</div>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                <Diamond className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Plano Premium</CardTitle>
              <CardDescription className="text-yellow-200">Para servidores médios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">
                  R$39,90<span className="text-lg font-normal">/mês</span>
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>6GB de RAM</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>25 jogadores simultâneos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>Backups diários</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>Domínio personalizado</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">Escolher Plano</Button>
            </CardFooter>
          </Card>

          {/* Plano Ultimate */}
          <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-white">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Plano Ultimate</CardTitle>
              <CardDescription className="text-purple-200">Para grandes comunidades</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">
                  R$79,90<span className="text-lg font-normal">/mês</span>
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-2" />
                  <span>12GB de RAM</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-2" />
                  <span>50+ jogadores simultâneos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Suporte 24/7</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Backups automáticos</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Domínio personalizado</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Plugins premium inclusos</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Escolher Plano</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Seção de recursos */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Todos os planos incluem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proteção DDoS</h3>
              <p className="text-green-200">Proteção avançada contra ataques para manter seu servidor sempre online.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Painel de Controle</h3>
              <p className="text-green-200">Interface intuitiva para gerenciar seu servidor com facilidade.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Uptime 99.9%</h3>
              <p className="text-green-200">Garantimos que seu servidor estará disponível quando você precisar.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mx-auto mb-4">
                <Diamond className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Mods e Plugins</h3>
              <p className="text-green-200">Suporte para os mods e plugins mais populares da comunidade.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-green-400/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ainda com dúvidas?</h2>
          <p className="text-xl text-green-200 max-w-2xl mx-auto mb-8">
            Nossa equipe está pronta para ajudar você a escolher o plano perfeito para sua aventura no Minecraft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700">Fale Conosco</Button>
            <Button variant="outline" className="border-green-400 text-white hover:bg-green-800">
              Ver FAQ
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
