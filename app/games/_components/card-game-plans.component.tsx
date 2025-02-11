import { Card, CardBody, Chip, Image } from "@nextui-org/react";
import Link from "next/link";

export function calculateDiscountPercentage(
	originalPrice: number,
	discountPrice: number | null,
): number {
	if (originalPrice && discountPrice !== null) {
		const discountAmount = originalPrice - discountPrice;
		const discountPercentage = (discountAmount / originalPrice) * 100;
		return parseFloat(discountPercentage.toFixed(2));
	}
	return 0;
}

export const CardGameComponent = ({
	name,
	img,
	link,
	price,
	priceDiscount,
}: any) => {
	return (
		<>
			<Link href={link}>
				<Card className="bg-[#0B0E13] border-none shadow-none">
					<CardBody className="overflow-visible p-0 border-none bg-transparent">
						<div>
							<Image
								width="100%"
								alt={name}
								className="w-full object-cover h-72"
								src={img}
							/>
						</div>
						<div className="pt-2 pl-2">
							<h1 className="font-bold pb-2">{name}</h1>
							{!priceDiscount ? (
								<p className="truncate md:whitespace-normal">
									A partir de {price}
								</p>
							) : (
								<div className="flex flex-wrap gap-2 items-center">
									<Chip className="text-white" size="sm" color="warning">
										-
										{calculateDiscountPercentage(
											parseFloat(price.replace("R$", "")),
											parseFloat(priceDiscount.replace("R$", "")),
										)}
										%
									</Chip>
									<p className="line-through text-gray-400 text-xs">{price}</p>
									<p>{priceDiscount}</p>
								</div>
							)}
						</div>
					</CardBody>
				</Card>
			</Link>
		</>
	);
};
