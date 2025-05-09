import type React from "react"
import { calculateDiscountPercentage } from "@/app/games/_components/card-game-plans.component"
import { Button, Card, CardBody, Image } from "@nextui-org/react"
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
  players = "30 jogadores"
}) => {
  // Calcular a porcentagem de desconto
  const discountPercentage = priceDiscount 
    ? calculateDiscountPercentage(
        Number.parseFloat(price.replace("R$", "")),
        Number.parseFloat(priceDiscount.replace("R$", ""))
      )
    : 0

  return (
    <Link href={link}>
      <Card className="bg-[#121212] border-none rounded-lg overflow-hidden h-full">
        <CardBody className="p-0 h-full flex flex-col">
          {/* Cabeçalho com imagem e título */}
          <div className="relative h-[200px]">
            <Image
              src={img || "/placeholder.svg?height=200&width=400"}
              alt={title}
              className="w-full h-full object-cover"
              radius="none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h2 className="text-xl font-bold text-white">{title}</h2>
              <p className="text-sm text-gray-300">{players}</p>
            </div>
          </div>

          {/* Lista de recursos */}
          <div className="p-4 flex-grow">
            {features?.map((item, index) => (
              <div key={index} className="flex items-start gap-2 mb-3">
                <BiCheck size={20} className="text-purple-500 mt-0.5 flex-shrink-0" />
                <span className="text-white text-sm">{item}</span>
              </div>
            ))}
          </div>

          {/* Preço e botão */}
          <div className="p-4 mt-auto">
            {/* Preço com desconto */}
            <div className="flex items-center gap-3 mb-4">
              {discountPercentage > 0 && (
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{discountPercentage}%
                </span>
              )}
              
              <div className="flex items-center gap-2">
                {priceDiscount && (
                  <span className="text-gray-400 line-through text-sm">
                    R$ {parseFloat(price.replace("R$", "")).toFixed(2).replace(".", ",")}
                  </span>
                )}
                <span className="text-white font-bold text-xl">
                  R$ {parseFloat(priceDiscount ? priceDiscount.replace("R$", "") : price.replace("R$", "")).toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            {/* Botão de contratar */}
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium py-3"
              radius="sm"
              size="lg"
            >
              Contratar agora
            </Button>
            
            {/* Link de dúvidas */}
            <div className="text-center mt-3">
              <span className="text-gray-400 text-sm">
                Em caso de dúvidas, <Link href="#" className="text-gray-300 hover:underline">clique aqui</Link>
              </span>
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}
