import { Server, Shield, Zap, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Server,
      title: "Hardware Premium",
      description: "Servidores com processadores de última geração e SSDs NVMe para máxima performance.",
    },
    {
      icon: Shield,
      title: "Proteção Anti-DDoS",
      description: "Proteção avançada contra ataques DDoS para manter seu servidor sempre online.",
    },
    {
      icon: Zap,
      title: "Ativação Instantânea",
      description: "Seu servidor estará pronto para uso em menos de 60 segundos após a confirmação do pagamento.",
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Equipe de suporte técnico disponível 24 horas por dia, 7 dias por semana.",
    },
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Por que escolher a NexusHost?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-500/20 p-3 rounded-full">
                <feature.icon className="h-6 w-6 text-yellow-500" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
