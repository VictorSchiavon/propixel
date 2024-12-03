import { calculateDiscountPercentage } from "@/app/games/_components/card-game-plans.component";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";

interface CardGamePlansComponentProps {
    title: string;
    img: string;
    link: string;
    price: string;
    priceDiscount:string;
    features: string[];
}

export const CardGamePlansComponent: React.FC<CardGamePlansComponentProps> = ({ title, img, link, price, features, priceDiscount }) => {
    return (
        <Link href={link}>
            <Card className="bg-[#202024] border-none rounded-lg h-[700px]">
                <CardBody className="overflow-visible p-0 border-none bg-[#0E131D] h-full flex flex-col">
                    <div className="h-[250px]">
                        <Image
                            width="100%"
                            height={250}
                            radius="none"
                            alt={title}
                            className="w-full"
                            src={img}
                        />
                    </div>

                    <div className="pt-5 p-4 flex-grow">
                        <h1 className="text-lg font-bold">{title}</h1>

                        <div className="pt-5">
                            {features?.map((item, index) => (
                                <p key={index} className="text-md text-gray-200 pb-2 flex gap-3">
                                    <BiCheck size={20} />
                                    <span>{item}</span>
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="pt-5 mt-auto mb-5 p-4">
                        <div className="pb-3">
                            {!priceDiscount ? <>
                                <p> a partir de {price}</p>
                            </> : <div className="flex gap-2">
                                <Chip className="text-white" size="sm" color="warning"> -{calculateDiscountPercentage(parseFloat(price.replace("R$", "")), parseFloat(priceDiscount.replace("R$", "")))}%</Chip>
                                <p className="line-through text-xs text-gray-400 pt-1">{price}</p>
                                <p>{priceDiscount}</p>
                            </div>}
                        </div>
                        <Button className="text-white bg-orange-400 w-full">Visualizar planos</Button>
                        <Button className="text-white w-full mt-2" variant="bordered">Em caso de dúvidas, clique aqui</Button>
                    </div>
                </CardBody>
            </Card>
        </Link>

    )
}
