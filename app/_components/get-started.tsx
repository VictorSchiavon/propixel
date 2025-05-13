import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function GetStarted() {
  return (
    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/5 rounded-lg p-8 my-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Comece Agora Mesmo</h2>
        <p className="text-gray-300 mb-8">
          Crie seu servidor de jogos em menos de 60 segundos e comece a jogar com seus amigos. Sem complicações, sem
          configurações complexas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/todos-planos">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-6 text-lg">
              Ver Todos os Jogos
            </Button>
          </Link>
          <Link href="/contato">
            <Button variant="outline" className="px-8 py-6 text-lg">
              Falar com um Especialista <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
