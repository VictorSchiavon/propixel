import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Server, Shield, Clock, Users, Award, Cpu } from "lucide-react"
import { GetStarted } from "@/components/get-started"

export default function SobrePage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Sobre a NexusHost</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8">
                A NexusHost é uma empresa especializada em hospedagem de servidores de jogos, oferecendo soluções de
                alta performance para Minecraft, GTA V e diversos outros jogos. Nossa missão é proporcionar a melhor
                experiência de jogo com servidores estáveis, rápidos e seguros.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <Server className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Infraestrutura Premium</h3>
                  <p className="text-gray-400">
                    Servidores com hardware de última geração, utilizando SSDs NVMe e processadores de alta performance.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <Shield className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Proteção Anti-DDoS</h3>
                  <p className="text-gray-400">
                    Proteção avançada contra ataques DDoS, garantindo a disponibilidade do seu servidor 24/7.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <Clock className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
                  <p className="text-gray-400">
                    Equipe de suporte técnico disponível 24 horas por dia, 7 dias por semana para ajudar com qualquer
                    problema.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <Users className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Comunidade Ativa</h3>
                  <p className="text-gray-400">
                    Faça parte de uma comunidade ativa de jogadores e administradores de servidores.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <Award className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Garantia de Qualidade</h3>
                  <p className="text-gray-400">
                    Oferecemos garantia de uptime de 99.9% e reembolso em até 7 dias caso não esteja satisfeito.
                  </p>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <Cpu className="h-10 w-10 text-yellow-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Painel Intuitivo</h3>
                  <p className="text-gray-400">
                    Painel de controle fácil de usar para gerenciar seu servidor, instalar mods e plugins com apenas
                    alguns cliques.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-6">Nossa História</h2>
              <p className="text-gray-300 mb-4">
                Fundada em 2023, a NexusHost nasceu da paixão por jogos e da necessidade de oferecer serviços de
                hospedagem de qualidade para a comunidade gamer brasileira. Começamos com servidores de Minecraft e
                rapidamente expandimos para outros jogos populares.
              </p>
              <p className="text-gray-300 mb-4">
                Hoje, somos referência no mercado de hospedagem de jogos, atendendo milhares de clientes em todo o
                Brasil e América Latina, sempre com o compromisso de oferecer a melhor experiência possível.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-6">Por que escolher a NexusHost?</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Servidores de alta performance com hardware de última geração</li>
                <li>Proteção anti-DDoS avançada</li>
                <li>Suporte técnico especializado 24/7</li>
                <li>Painel de controle intuitivo e fácil de usar</li>
                <li>Instalação instantânea de servidores e mods</li>
                <li>Backups automáticos diários</li>
                <li>Preços competitivos e transparentes</li>
                <li>Garantia de satisfação com reembolso em até 7 dias</li>
              </ul>
            </div>

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
