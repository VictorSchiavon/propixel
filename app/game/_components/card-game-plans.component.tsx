import { calculateDiscountPercentage } from "@/app/games/_components/card-game-plans.component";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import Link from "next/link";
import { BiCheck } from "react-icons/bi";
import { Badge } from "@nextui-org/react";

interface CardGamePlansComponentProps {
	title: string;
	img: string;
	link: string;
	price: string;
	priceDiscount: string;
	features: string[];
}

export const CardGamePlansComponent: React.FC<CardGamePlansComponentProps> = ({
	title,
	img,
	link,
	price,
	features,
	priceDiscount,
}) => {
	// Determinar se é um plano popular (para fins de demonstração, vamos considerar que planos com desconto são populares)
	const isPopular = !!priceDiscount;

	return (
		<Link href={link}>
			<Card 
				className={`relative overflow-hidden border-2 ${isPopular ? 'border-orange-400' : 'border-transparent'} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-[700px] transform hover:-translate-y-1`}
				isHoverable
			>
				{isPopular && (
					<div className="absolute top-0 right-0 z-10">
						<Badge content="POPULAR" color="warning" placement="top-right" className="p-4 font-bold" />
					</div>
				)}
				
				<CardBody className="overflow-visible p-0 border-none bg-gradient-to-b from-[#0E131D] to-[#1A2030] h-full flex flex-col">
					<div className="h-[220px] relative overflow-hidden">
						<Image
							width="100%"
							height={220}
							alt={title}
							className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
							src={img || "/placeholder.svg"}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#0E131D] to-transparent opacity-60"></div>
						<div className="absolute bottom-4 left-4 right-4">
							<h1 className="text-xl font-bold text-white drop-shadow-md">{title}</h1>
						</div>
					</div>

					<div className="pt-6 px-5 flex-grow">
						<div className="mb-4">
							{!priceDiscount ? (
								<p className="text-lg font-semibold">A partir de <span className="text-orange-400">{price}</span></p>
							) : (
								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2">
										<Chip className="text-white font-bold" size="sm" color="warning">
											-
											{calculateDiscountPercentage(
												parseFloat(price.replace("R$", "")),
												parseFloat(priceDiscount.replace("R$", "")),
											)}
											%
										</Chip>
										<p className="line-through text-sm text-gray-400">
											{price}
										</p>
									</div>
									<p className="text-xl font-bold text-orange-400">{priceDiscount}</p>
								</div>
							)}
						</div>

						<div className="pt-3 space-y-3">
							{features?.map((item, index) => (
								<div
									key={index}
									className="flex items-start gap-2 group"
								>
									<div className="mt-1 p-1 rounded-full bg-orange-400/20 text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-colors duration-300">
										<BiCheck size={16} />
									</div>
									<span className="text-sm text-gray-200">{item}</span>
								</div>
							))}
						</div>
					</div>

					<div className="p-5 mt-auto">
						<Button 
							className="text-white bg-orange-400 hover:bg-orange-500 w-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
							size="lg"
							radius="sm"
						>
							Contratar agora
						</Button>
						<Button 
							className="text-white w-full mt-3 border-gray-600 hover:border-gray-400 transition-colors duration-300" 
							variant="bordered"
							size="sm"
							radius="sm"
						>
							Dúvidas? Fale conosco
						</Button>
					</div>
				</CardBody>
			</Card>
		</Link>
	);
};
