import { Check, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PlanCardProps {
  plan: {
    id: number
    title: string
    description: string
    price: string
    features: string[]
    popular?: boolean
  }
}

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <div
      className={`bg-gray-900 rounded-lg overflow-hidden border ${plan.popular ? "border-yellow-500" : "border-gray-800"}`}
    >
      {plan.popular && (
        <div className="bg-yellow-500 text-center py-1 text-black text-sm font-medium">MAIS POPULAR</div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{plan.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
          </div>
          <Server className="h-6 w-6 text-yellow-500" />
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{plan.price}</span>
            <span className="text-gray-400 ml-1">/mês</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className="h-5 w-5 text-yellow-500 mr-2 shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Link href={`/plano/${plan.id}`}>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Contratar Agora</Button>
          </Link>
          <Button variant="outline" className="w-full">
            Ver Detalhes
          </Button>
        </div>
      </div>
    </div>
  )
}
