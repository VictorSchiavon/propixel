"use client";
import games from "@/config/games.json";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Chip } from "@nextui-org/react";
import {
	ArrowRight,
	ExternalLink,
	Link2,
	LucideArrowLeft,
	LucideArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper as SwiperInterface } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	calculateDiscountPercentage,
	CardGameComponent,
} from "./_components/card-game-plans.component";
import { CardPromotion } from "../_components/card-promotion";
import { title } from "process";
import { link } from "fs";

export default function Games() {
	const gamesWithDiscount = games.filter((game) => game.discountPrice !== null);
	const newGames = games.filter((game) => game.new);
	const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();
	const [swiperInstanceDiscount, setSwiperInstanceDiscount] =
		useState<SwiperInterface>();
	const [swiperNotices, setSwiperNotices] = useState<SwiperInterface>();

	const [displayGame, setDisplayGame] = useState<any>();

	const handlerDisplayGame = (id: number) => {
		const findGame = games.filter((item) => item.id == id);
		setDisplayGame(findGame[0]);
	};

	useEffect(() => {
		const findGame = games.filter((item) => item.id == 2);
		setDisplayGame(findGame[0]);
	}, []);

	const notices = [
		{
			title: "Atualize seu jogo",
			description:
				"Seu servidor de jogo atualizou e você não sabe como atualizar, não se preocupe acompanhe nosso guia e atualize seu servidor em segundos!",
			img: "https://www.razehost.com.br/wallpapers/palworld.webp",
			link: "https://Razehost/vps",
		},
		{
			title: "Instale Modpacks automático",
			description:
				"Você não tem conhecimento em Minecraft? Isso não é um problema com nossos sistemas você pode instalar Modpacks de forma automático com apenas 1 click!",
			img: "https://www.razehost.com.br/wallpapers/minecraft.webp",
			link: "https://suporte.razehost.com.br/pt-BR/articles/9993474-como-instalar-modpacks-no-seu-servidor-de-minecraft",
		},
		{
			title: "Abra uma cidade Roleplay",
			description:
				"Pare de perder tempo, e abra seu servidor de FiveM com a RazeHost, processadores AMD Ryzen e Proteção Anti DDoS, você possui estabilidade e segurança!",
			img: "https://www.razehost.com.br/wallpapers/fivem.webp",
			link: "/fivem",
		},
	];

	const mockData = {
		"Mais Vendidos": [
			{
				title: "Palworld",
				link: "/game/palworld",
				description: "",
				price: "R$ 79,90",
				image: "/games/palworld.webp",
			},
			{
				title: "Minecraft",
				link: "/game/minecraft",
				description: "",
				price: "R$ 13,90",
				image: "/games/minecraft.webp",
			},
			{
				title: "FiveM",
				link: "/fivem",
				description: "",
				price: "R$ 74,90",
				image: "/games/cards/fivem.webp",
			},
		],
		"Jogos VPS": [
			{
				title: "DayZ",
				link: "/dayz",
				description: "",
				price: "R$ 74,90",
				image: "/games/dayz.webp",
			},
			{
				title: "Ragnarok",
				link: "/ragnarokshh",
				description: "",
				price: "R$ 74,90",
				image: "/games/ragnarok.webp",
			},
			{
				title: "RedM",
				link: "/game/redm",
				description: "",
				price: "R$ 74,90",
				image: "/games/redm.webp",
			},
		],
		"Próximos Títulos Mais Aguardados": [
			{
				title: "Hytale",
				link: "",
				description: "",
				price: "Em breve",
				image: "/games/hytale.webp",
			},
			{
				title: "GTA 6",
				link: "/games",
				description: "",
				price: "Em breve",
				image: "/games/gta6.webp",
			},
			{
				title: "ARK 2",
				link: "https://razehost.com.br/games",
				description: "", 
				price: "Em breve",
				image: "/games/ark2.webp",
			},
		],
	};
	return (
		<section className="container mx-auto px-6 flex-grow pt-[2%]">
			<CardPromotion />
			<section>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
					<div className="flex gap-4 sm:col-span-2 lg:col-span-6 justify-start">
						<Link href={"https://app.razehost.com.br/"}>
							<p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b hover:border-b-orange-400">
								Descobrir
							</p>
						</Link>
						<Link href={"#jogos"}>
							<p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">
								Navegar
							</p>
						</Link>
						<Link href={"#jogosnovos"}>
							<p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">
								Novidades
							</p>
						</Link>
					</div>
					<div className="flex gap-4 sm:col-span-2 lg:col-span-6 justify-end">
						<Link href={"https://app.razehost.com.br/"}>
							<p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">
								Lista de desejo
							</p>
						</Link>
						<Link href={"https://app.razehost.com.br/"}>
							<p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">
								Carrinho
							</p>
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 pt-8">
					{displayGame ? (
						<div
							className="col-span-1 sm:col-span-2 lg:col-span-10 bg-cover bg-center p-4 text-white h-[620px] rounded-lg flex items-end"
							style={{
								backgroundImage: `url('${displayGame.wallpaper}')`,
							}}
						>
							<div className="p-5 w-full">
								<h3 className="font-bold uppercase text-xs">Já disponível</h3>
								<p className="text-gray-300 text-sm w-[280px] pt-2">
									{displayGame.contents.description}
								</p>
								<div className="pt-3 flex gap-4">
									<Link href={displayGame.link}>
										<Button className="text-white bg-orange-400 px-8 py-4">
											Comprar agora
										</Button>
									</Link>
									{!displayGame.discountPrice ? (
										<Link href={displayGame.link}>
											<Button variant="bordered">{displayGame.price}</Button>
										</Link>
									) : (
										<div className="sm:flex gap-2">
											<Button variant="bordered">
												<p className="line-through text-xs text-gray-400 pt-1">
													{displayGame.price}
												</p>
												<p>{displayGame.discountPrice}</p>
											</Button>
											<Chip
												className="mt-2 text-white"
												size="sm"
												color="warning"
											>
												-
												{calculateDiscountPercentage(
													parseFloat(displayGame.price.replace("R$", "")),
													parseFloat(
														displayGame.discountPrice.replace("R$", ""),
													),
												)}
												%
											</Chip>
										</div>
									)}
								</div>
							</div>
						</div>
					) : (
						""
					)}
					{displayGame ? (
						<div className="col-span-1 sm:col-span-2 lg:col-span-2">
							{games.slice(0, 6).map((item, index) => (
								<div
									key={index}
									onClick={() => {
										handlerDisplayGame(item.id);
									}}
									className={`${item.id == displayGame.id ? "border-r-4 border-r-orange-400" : ""} cursor-pointer`}
								>
									<div
										className={`flex items-center space-x-2 ${index === 0 ? "" : "pt-5"}`}
									>
										<Image
											src={item.img}
											alt={item.name}
											width={100}
											height={100}
											className="w-16 h-22 object-cover rounded-lg hover:animate-pulse"
										/>
										<span className="text-xs hover:text-orange-400">
											{item.name}
										</span>
									</div>
								</div>
							))}
						</div>
					) : (
						""
					)}
				</div>
			</section>

			<div className="pt-[5%]" id="jogos">
				{swiperInstance ? (
					<div className="flex justify-between pt-4 pb-4">
						<h1 className="text-xl font-bold pt-2">Todos os jogos</h1>
						<div className="flex gap-2">
							<Button
								onClick={() => swiperInstance.slidePrev()}
								isIconOnly
								aria-label="Take a photo"
								size="sm"
								className="bg-[#0E131D] border border-neutral-600"
							>
								<LucideArrowLeft color="orange" size={15} />
							</Button>
							<Button
								onClick={() => swiperInstance.slideNext()}
								isIconOnly
								aria-label="Take a photo"
								size="sm"
								className="bg-[#0E131D] border border-neutral-600"
							>
								<LucideArrowRight color="orange" size={15} />
							</Button>
						</div>
					</div>
				) : (
					""
				)}
				<div>
					<Swiper
						onSwiper={(swiper) => setSwiperInstance(swiper)}
						slidesPerView={6}
						spaceBetween={30}
						loop={true}
						modules={[Navigation]}
						className="mySwiper"
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							480: {
								slidesPerView: 1,
								spaceBetween: 15,
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 40,
							},
							1280: {
								slidesPerView: 5,
								spaceBetween: 50,
							},
							1536: {
								slidesPerView: 6,
								spaceBetween: 30,
							},
						}}
					>
						{games.map((item, index) => (
							<SwiperSlide>
								<CardGameComponent
									key={index}
									name={item.name}
									img={item.img}
									link={item.link}
									price={item.price}
									priceDiscount={item.discountPrice}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="pt-[5%]">
				{swiperNotices ? (
					<div className="flex justify-between pt-4 pb-4">
						<div className="flex gap-2">
							<Button
								onClick={() => swiperNotices.slidePrev()}
								isIconOnly
								aria-label="Take a photo"
								size="sm"
								className="bg-[#0E131D] border border-neutral-600"
							>
								<LucideArrowLeft color="orange" size={15} />
							</Button>
							<Button
								onClick={() => swiperNotices.slideNext()}
								isIconOnly
								aria-label="Take a photo"
								size="sm"
								className="bg-[#0E131D] border border-neutral-600"
							>
								<LucideArrowRight color="orange" size={15} />
							</Button>
						</div>
					</div>
				) : (
					""
				)}
				<div>
					<Swiper
						onSwiper={(swiper) => setSwiperNotices(swiper)}
						slidesPerView={3}
						spaceBetween={400}
						loop={true}
						modules={[Navigation]}
						className="mySwiper"
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							480: {
								slidesPerView: 1,
								spaceBetween: 15,
							},
							640: {
								slidesPerView: 1,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							1024: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
							1280: {
								slidesPerView: 3,
								spaceBetween: 50,
							},
							1536: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
					>
						{notices.map((item, index) => (
							<SwiperSlide key={index}>
								<div className="rounded-xl overflow-hidden shadow-lg">
									<a href={item.link} target="_blank" rel="noopener noreferrer">
										<img
											className="max-w-[476px]"
											src={item.img}
											alt="img Notices"
										/>
									</a>
									<div className="py-4">
										<a
											href={item.link}
											target="_blank"
											rel="noopener noreferrer"
											className="font-bold text-xl mb-2"
										>
											{item.title}
										</a>
										<p className="text-gray-400 text-base">
											{item.description}
										</p>
									</div>
									<div className="pb-4">
										<a href={item.link}>
											<Button
												className="font-semibold py-2 px-4"
												endContent={<ExternalLink size={18} />}
											>
												Clique aqui
											</Button>
										</a>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="pt-[5%] hidden">
				{swiperInstanceDiscount ? (
					<div className="flex justify-between pt-4 pb-4">
						<h1 className="text-xl font-bold pt-2">Jogos com Descontos</h1>
						<div className="flex gap-2">
							<Button
								onClick={() => swiperInstanceDiscount.slidePrev()}
								isIconOnly
								aria-label="Prev"
								size="sm"
								className="bg-[#0E131D] border border-neutral-600"
							>
								<LucideArrowLeft color="orange" size={15} />
							</Button>
							<Button
								onClick={() => swiperInstanceDiscount.slideNext()}
								isIconOnly
								aria-label="Next"
								size="sm"
								className="bg-[#0E131D] border border-neutral-600"
							>
								<LucideArrowRight color="orange" size={15} />
							</Button>
						</div>
					</div>
				) : (
					""
				)}
				<div>
					<Swiper
						onSwiper={(swiper) => setSwiperInstanceDiscount(swiper)}
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						modules={[Navigation]}
						className="mySwiper"
						breakpoints={{
							320: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							480: {
								slidesPerView: 1,
								spaceBetween: 15,
							},
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
							1024: {
								slidesPerView: 4,
								spaceBetween: 40,
							},
							1280: {
								slidesPerView: 5,
								spaceBetween: 50,
							},
							1536: {
								slidesPerView: 6,
								spaceBetween: 30,
							},
						}}
					>
						{gamesWithDiscount.map((item, index) => (
							<SwiperSlide>
								<CardGameComponent
									key={index}
									name={item.name}
									img={item.img}
									link={item.link}
									price={item.price}
									priceDiscount={item.discountPrice}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>

			<div className="pt-[5%]">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{Object.entries(mockData).map(([category, games], idx, arr) => (
						<div key={idx} className="flex">
							{idx > 0 && <div className="border-l-1 border-gray-700 pl-4" />}
							<div>
								<h2 className="text-xl font-bold capitalize mb-4 flex gap-2 items-center">
									{category.replace(/([A-Z])/g, " $1")} <ArrowRight size={18} />
								</h2>
								<div className="space-y-4">
									{games.map((game, index) => (
										<a href={game.link} key={index} className="flex items-center space-x-4">
											<div className="flex items-center space-x-4">
											<Image
												src={game.image!}
												alt={game.title}
												width={80}
												height={100}
												className="rounded"
											/>
											<div>
												<p className="font-semibold">{game.title}</p>
												<p className="text-gray-500">{game.description}</p>
												<p className="text-gray-400">{game.price}</p>
											</div>
										</div>
										</a>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="pt-[5%]">
				<h1 className="text-xl font-bold" id="jogosnovos">
					Jogos Novos
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-5 pt-4">
					{newGames.slice(0, 3).map((item, index) => (
						<Link href={item.link} key={index}>
							<Card className="bg-[#0B0E13] border-none">
								<CardBody className="overflow-visible p-0 border-none bg-[#0B0E13]">
									<div>
										<Image
											width={800}
											height={450}
											alt={item.name}
											className="w-full h-auto object-cover max-h-[300px] rounded-lg"
											src={item.img}
										/>
									</div>
									<div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-b-lg">
										<h1 className="font-bold pb-2 text-center p-2">
											Jogo novo
										</h1>
									</div>
									<div className="pt-2">
										<h1 className="font-bold pb-2">{item.name}</h1>
										{!item.discountPrice ? (
											<p> A partir de {item.price}</p>
										) : (
											<div className="flex gap-2">
												<Chip className="text-white" size="sm" color="warning">
													-
													{calculateDiscountPercentage(
														parseFloat(item.price.replace("R$", "")),
														parseFloat(item.discountPrice.replace("R$", "")),
													)}
													%
												</Chip>
												<p className="line-through text-xs text-gray-400 pt-1">
													{item.price}
												</p>
												<p>{item.discountPrice}</p>
											</div>
										)}
									</div>
								</CardBody>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
