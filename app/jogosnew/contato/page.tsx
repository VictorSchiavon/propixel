import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { GetStarted } from "@/components/get-started"

export default function ContatoPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Entre em Contato</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-8">
                  Tem alguma dúvida sobre nossos serviços? Precisa de ajuda com seu servidor? Nossa equipe está pronta
                  para ajudar! Preencha o formulário ou utilize um dos canais de contato abaixo.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-yellow-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">contato@nexushost.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-yellow-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Telefone</h3>
                      <p className="text-gray-400">(11) 9999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-yellow-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Discord</h3>
                      <p className="text-gray-400">discord.gg/nexushost</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-yellow-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Endereço</h3>
                      <p className="text-gray-400">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-300">
                    Suporte técnico: 24 horas, 7 dias por semana
                    <br />
                    Atendimento comercial: Segunda a Sexta, das 9h às 18h
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input id="nome" placeholder="Seu nome" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="assunto" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input id="assunto" placeholder="Assunto da mensagem" className="bg-gray-800 border-gray-700" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      placeholder="Digite sua mensagem aqui..."
                      className="bg-gray-800 border-gray-700 min-h-[150px]"
                    />
                  </div>

                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Enviar Mensagem</Button>
                </form>
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
