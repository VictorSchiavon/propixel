'use client';
import games from '@/config/games.json';
import { Button } from '@nextui-org/button';
import { Card, CardBody, Chip } from '@nextui-org/react';
import { LucideArrowLeft, LucideArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper as SwiperInterface } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { calculateDiscountPercentage, CardGameComponent } from './_components/card-game-plans.component';

export default function Games() {
  const gamesWithDiscount = games.filter((game) => game.discountPrice !== null);
  const newGames = games.filter((game) => game.new);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInterface | null>(null);
  const [swiperInstanceDiscount, setSwiperInstanceDiscount] = useState<SwiperInterface | null>(null);
  const [displayGame, setDisplayGame] = useState<any | null>(null);

  const handlerDisplayGame = (id: number) => {
    const findGame = games.find((item) => item.id === id);
    if (findGame) {
      setDisplayGame(findGame);
    }
  };

  useEffect(() => {
    const findGame = games.find((item) => item.id === 1);
    if (findGame) {
      setDisplayGame(findGame);
    }
  }, []);

  return (
    <section className="container mx-auto px-6 flex-grow pt-[2%]">
      {/* Navegação */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="flex gap-4 sm:col-span-2 lg:col-span-6 justify-start">
            <Link href="https://app.razehost.com.br/">
              <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b hover:border-b-orange-400">Descobrir</p>
            </Link>
            <Link href="#jogos">
              <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Navegar</p>
            </Link>
            <Link href="#jogosnovos">
              <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Novidades</p>
            </Link>
          </div>
          <div className="flex gap-4 sm:col-span-2 lg:col-span-6 justify-end">
            <Link href="https://app.razehost.com.br/">
              <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Lista de desejo</p>
            </Link>
            <Link href="https://app.razehost.com.br/">
              <p className="text-sm hover:font-semibold transition-all duration-200 hover:border-b-2 hover:border-b-orange-400">Carrinho</p>
            </Link>
          </div>
        </div>

        {/* Exibição principal do jogo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 pt-8">
          {displayGame && (
            <>
              <div
                className="col-span-1 sm:col-span-2 lg:col-span-10 bg-cover bg-center p-4 text-white h-[620px] rounded-lg flex items-end"
                style={{ backgroundImage: `url('${displayGame.wallpaper}')` }}
              >
                <div className="p-5 w-full">
                  <h3 className="font-bold uppercase text-xs">Já disponível</h3>
                  <p className="text-gray-300 text-sm w-[280px] pt-2">{displayGame.contents.description}</p>
                  <div className="pt-3 flex gap-4">
                    <Button className="text-white bg-orange-400 px-8 py-4">Comprar agora</Button>
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
                        <Chip className="mt-2 text-white" size="sm" color="warning">
                          -{calculateDiscountPercentage(parseFloat(displayGame.price.replace('R$', '')), parseFloat(displayGame.discountPrice.replace('R$', '')))}%
                        </Chip>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                {games.slice(0, 6).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handlerDisplayGame(item.id)}
                    className={`${item.id === displayGame.id ? 'border-r-4 border-r-orange-400' : ''} cursor-pointer`}
                  >
                    <div className="flex items-center space-x-2 pt-5">
                      <Image src={item.img} alt={item.name} width={100} height={100} className="w-16 h-22 object-cover rounded-lg hover:animate-pulse" />
                      <span className="text-xs hover:text-orange-400">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Slider de Jogos */}
      <div className="pt-[5%]" id="jogos">
        <h1 className="text-xl font-bold pt-2">Todos os jogos</h1>
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView={6}
          spaceBetween={30}
          loop
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
            1536: { slidesPerView: 6, spaceBetween: 30 },
          }}
        >
          {games.map((item) => (
            <SwiperSlide key={item.id}>
              <CardGameComponent name={item.name} img={item.img} link={item.link} price={item.price} priceDiscount={item.discountPrice} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
