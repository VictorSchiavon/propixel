import type React from "react"
import { calculateDiscountPercentage } from "@/app/games/_components/card-game-plans.component"
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react"
import Link from "next/link"
import { BiCheck } from "react-icons/bi"

interface CardGamePlansComponentProps {
  title: string
  img: string
  link: string
  price: string
  priceDiscount: string
  features: string[]
  players?: string
}

export const CardGamePlansComponent: React.FC<CardGamePlansComponentProps> = ({
  title,
  img,
  link,
  price,
  features,
  priceDiscount,
  players = "Proteção Cloudflare Magic Transit",
}) => {
  // Calcular a porcentagem de desconto
  const discountPercentage = priceDiscount
    ? calculateDiscountPercentage(
        Number.parseFloat(price.replace("R$", "")),
        Number.parseFloat(priceDiscount.replace("R$", "")),
      )
    : 0

  return (
    <Link href={link} className="block h-full">
      <Card className="bg-[#121212] h-full flex flex-col rounded-lg overflow-hidden">
        {/* Cabeçalho com imagem */}
        <div className="relative w-full h-[220px] overflow-hidden">
          <img
            src={img || "/placeholder.svg?height=300&width=400"}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24"></div>
        </div>

        {/* Conteúdo do card */}
        <CardBody className="p-4 flex-grow">
          {/* Título e jogadores */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-sm text-gray-300">{players}</p>
          </div>

          {/* Lista de recursos */}
          <div className="space-y-3">
            {features?.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <BiCheck size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>
        </CardBody>

        {/* Rodapé com preço e botão */}
        <CardFooter className="flex flex-col items-stretch gap-3 p-4 pt-0">
          {/* Preço com desconto */}
          <div className="flex items-center gap-3">
            {discountPercentage > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}

            <div className="flex items-center gap-2">
              {priceDiscount && (
                <span className="text-gray-400 line-through text-sm">
                  R$ {Number.parseFloat(price.replace("R$", "")).toFixed(2).replace(".", ",")}
                </span>
              )}
              <span className="text-white font-bold text-xl">
                R${" "}
                {Number.parseFloat(priceDiscount ? priceDiscount.replace("R$", "") : price.replace("R$", ""))
                  .toFixed(2)
                  .replace(".", ",")}
              </span>
            </div>
          </div>

          {/* Botão de contratar */}
          <Button
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-medium py-3"
            radius="sm"
            size="lg"
          >
            Contratar agora
          </Button>

          {/* Link de dúvidas */}
          <div className="text-center mt-1">
            <span className="text-gray-400 text-sm">
              Em caso de dúvidas,{" "}
              <Link href="#" className="text-gray-300 hover:underline">
                clique aqui
              </Link>
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
