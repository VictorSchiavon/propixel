'use client'
import games from "@/config/games.json";
import { Button } from "@nextui-org/button";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Swiper as SwiperInterface } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { calculateDiscountPercentage, CardGameComponent } from "./_components/card-game-plans.component";

export default function Games() {
    const gamesWithDiscount = games.filter(game => game.discountPrice !== null);
    const newGames = games.filter(game => game.new);
    const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();
    const [swiperInstanceDiscount, setSwiperInstanceDiscount] = useState<SwiperInterface>();
    const [displayGame, setDisplayGame] = useState<any>()

    const handlerDisplayGame = (id: number) => {
        console.log(id)
        const findGame = games.filter((item) => item.id == id)
        setDisplayGame(findGame[0])
    }

    useEffect(() => {
        const findGame = games.filter((item) => item.id == 14)
        setDisplayGame(findGame[0])
    }, [])

    return (
        <section className="container mx-auto px-6 flex-grow pt-[2%]">
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
                    <div className="flex gap-4 sm:col-span-2 lg:col-span-6 justify-start">
                        <Link href={"https://app.razehost.com.br/"}>
                            <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b hover:border-b-orange-400">
                                Descobrir
                            </p>
                        </Link>
                        <Link href={"#jogos"}>
                            <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Navegar</p>
                        </Link>
                        <Link href={"#jogosnovos"}>
                            <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Novidades</p>
                        </Link>
                    </div>
                    <div className="flex gap-4 sm:col-span-2 lg:col-span-6 justify-end">
                        <Link href={"https://app.razehost.com.br/"}>
                            <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Lista de desejo</p>
                        </Link>
                        <Link href={"https://app.razehost.com.br/"}>
                            <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Carrinho</p>
                        </Link>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 pt-8">
                    {displayGame ? (
                        <div className="col-span-1 sm:col-span-2 lg:col-span-10 bg-cover bg-center p-4 text-white h-[620px] rounded-lg flex items-end"
                            style={{
                                backgroundImage: `url('${displayGame.wallpaper}')`
                            }}>
                            <div className="p-5 w-full">
                                <h3 className="font-bold uppercase text-xs">Já disponível</h3>
                                <p className="text-gray-300 text-sm w-[280px] pt-2">{displayGame.contents.description}</p>
                                <div className="pt-3 flex gap-4">
                                <Link href={displayGame.link}><Button className="text-white bg-orange-400 px-8 py-4">Comprar agora</Button></Link>
                                    {!displayGame.discountPrice ? (
                                        <Link href={displayGame.link}>
                                            <Button variant="bordered">{displayGame.price}</Button>
                                        </Link>
                                    ) : (
                                        <div className="flex gap-2">
                                            <Button variant="bordered">
                                                <p className="line-through text-xs text-gray-400 pt-1">{displayGame.price}</p>
                                                <p>{displayGame.discountPrice}</p>
                                            </Button>
                                            <Chip className="mt-2 text-white" size="sm" color="warning">-{calculateDiscountPercentage(parseFloat(displayGame.price.replace("R$", "")), parseFloat(displayGame.discountPrice.replace("R$", "")))}%</Chip>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : ""}
                    {displayGame ? (
                        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                            {games.slice(0, 6).map((item, index) => (
                                <div key={index} onClick={() => { handlerDisplayGame(item.id) }} className={`${item.id == displayGame.id ? 'border-r-4 border-r-orange-400' : ''} cursor-pointer`}>
                                    <div className={`flex items-center space-x-2 ${index === 0 ? '' : 'pt-5'}`}>
                                        <Image src={item.img} alt={item.name} width={100} height={100} className="w-16 h-22 object-cover rounded-lg hover:animate-pulse" />
                                        <span className="text-xs hover:text-orange-400">{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : ""}
                </div>

            </section>

            <div className="pt-[5%]" id="jogos">
                {swiperInstance
                    ?
                    <div className="flex justify-between pt-4 pb-4">
                        <h1 className="text-xl font-bold pt-2">Todos os jogos</h1>
                        <div className="flex gap-2">
                            <Button onClick={() => swiperInstance.slidePrev()} isIconOnly aria-label="Take a photo" size="sm" className="bg-[#0E131D] border border-neutral-600">
                                <LucideArrowLeft color="orange" size={15} />
                            </Button>
                            <Button onClick={() => swiperInstance.slideNext()} isIconOnly aria-label="Take a photo" size="sm" className="bg-[#0E131D] border border-neutral-600">
                                <LucideArrowRight color="orange" size={15} />
                            </Button>
                        </div>
                    </div>
                    :
                    ""
                }
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
                                <CardGameComponent key={index} name={item.name} img={item.img} link={item.link} price={item.price} priceDiscount={item.discountPrice} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </div>

            <div className="pt-[5%]">
                {swiperInstanceDiscount
                    ?
                    <div className="flex justify-between pt-4 pb-4">
                        <h1 className="text-xl font-bold pt-2">Jogos com Descontos</h1>
                        <div className="flex gap-2">
                            <Button onClick={() => swiperInstanceDiscount.slidePrev()} isIconOnly aria-label="Prev" size="sm" className="bg-[#0E131D] border border-neutral-600">
                                <LucideArrowLeft color="orange" size={15} />
                            </Button>
                            <Button onClick={() => swiperInstanceDiscount.slideNext()} isIconOnly aria-label="Next" size="sm" className="bg-[#0E131D] border border-neutral-600">
                                <LucideArrowRight color="orange" size={15} />
                            </Button>
                        </div>
                    </div>
                    :
                    ""
                }
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
                                <CardGameComponent key={index} name={item.name} img={item.img} link={item.link} price={item.price} priceDiscount={item.discountPrice} />
                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </div>

            <div className="pt-[5%]">
                <h1 className="text-xl font-bold pt-2" id="jogosnovos">Jogos Novos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-5 pt-4">
                    {newGames.slice(0, 3).map((item, index) => (
                        <Link href={item.link} key={index}>
                            <Card className="bg-[#0B0E13] border-none">
                                <CardBody className="overflow-visible p-0 border-none bg-[#0B0E13]">
                                    <div>
                                    <Image width={800} height={450} alt={item.name} className="w-full h-auto object-cover max-h-[300px] rounded-lg" src={item.img} />
                                    </div>
                                    <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-b-lg">
                                        <h1 className="font-bold pb-2 text-center p-2">Jogo novo</h1>
                                    </div>
                                    <div className="pt-2">
                                        <h1 className="font-bold pb-2">{item.name}</h1>
                                        {!item.discountPrice ? (
                                            <p> A partir de {item.price}</p>
                                        ) : (
                                            <div className="flex gap-2">
                                                <Chip className="text-white" size="sm" color="warning">-{calculateDiscountPercentage(parseFloat(item.price.replace("R$", "")), parseFloat(item.discountPrice.replace("R$", "")))}%</Chip>
                                                <p className="line-through text-xs text-gray-400 pt-1">{item.price}</p>
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
