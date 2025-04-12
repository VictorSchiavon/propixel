"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import games from "@/config/games.json"
import { Button } from "@nextui-org/button"
import {
  Card,
  CardBody,
  Chip,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react"
import {
  ArrowRight,
  ExternalLink,
  LucideArrowLeft,
  LucideArrowRight,
  Search,
  Sparkles,
  Gamepad2,
  TrendingUp,
  Tag,
  Heart,
} from "lucide-react"
import type { Swiper as SwiperInterface } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-cards"
import { Navigation, Pagination, EffectCards } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { calculateDiscountPercentage, CardGameComponent } from "./_components/card-game-plans.component"
import { CardPromotion } from "../_components/card-promotion"

export default function Games() {
  const gamesWithDiscount = games.filter((game) => game.discountPrice !== null)
  const newGames = games.filter((game) => game.new)
  const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>()
  const [swiperInstanceDiscount, setSwiperInstanceDiscount] = useState<SwiperInterface>()
  const [swiperNotices, setSwiperNotices] = useState<SwiperInterface>()
  const [displayGame, setDisplayGame] = useState<any>()
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredGames, setFilteredGames] = useState(games)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handlerDisplayGame = (id: number) => {
    const findGame = games.filter((item) => item.id == id)
    setDisplayGame(findGame[0])
  }

  useEffect(() => {
    const findGame = games.filter((item) => item.id == 2)
    setDisplayGame(findGame[0])
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredGames(games)
    } else {
      const filtered = games.filter((game) => game.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setFilteredGames(filtered)
    }
  }, [searchQuery])

  const notices = [
    {
      title: "Atualize seu jogo",
      description:
        "Seu servidor de jogo atualizou e você não sabe como atualizar, não se preocupe acompanhe nosso guia e atualize seu servidor em segundos!",
      img: "/wallpapers/palworld.webp",
      link: "/vps",
    },
    {
      title: "Instale Modpacks automático",
      description:
        "Você não tem conhecimento em Minecraft? Isso não é um problema com nossos sistemas você pode instalar Modpacks de forma automático com apenas 1 click!",
      img: "/wallpapers/minecraft.webp",
      link: "https://suporte.razehost.com.br/pt-BR/articles/9993474-como-instalar-modpacks-no-seu-servidor-de-minecraft",
    },
    {
      title: "Abra uma cidade Roleplay",
      description:
        "Pare de perder tempo, e abra seu servidor de FiveM com a RazeHost, processadores AMD Ryzen e Proteção Anti DDoS, você possui estabilidade e segurança!",
      img: "/wallpapers/fivem.webp",
      link: "/fivem",
    },
  ]

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
  }

  return (
    <section className="container mx-auto px-6 flex-grow pt-[2%] pb-12">
      {/* Header with search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4 md:mb-0">
          Explore Nossos Jogos
        </h1>
        <div className="w-full md:w-auto">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[20rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Pesquisar jogos..."
            size="sm"
            startContent={<Search size={18} />}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onOpen()
              }
            }}
          />
        </div>
      </div>

      {/* Search Results Modal */}
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" size="3xl">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Search size={20} />
              <span>Resultados da pesquisa: {searchQuery}</span>
            </div>
          </ModalHeader>
          <ModalBody className="pb-6">
            {filteredGames.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredGames.map((game, index) => (
                  <Link href={game.link} key={index} onClick={onClose}>
                    <Card className="hover:scale-105 transition-transform duration-200">
                      <CardBody className="p-0 overflow-hidden">
                        <Image
                          src={game.img || "/placeholder.svg"}
                          alt={game.name}
                          width={300}
                          height={200}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-3">
                          <h3 className="font-semibold">{game.name}</h3>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm">{game.discountPrice || game.price}</span>
                            {game.discountPrice && (
                              <Chip size="sm" color="warning" variant="flat">
                                -
                                {calculateDiscountPercentage(
                                  Number.parseFloat(game.price.replace("R$", "")),
                                  Number.parseFloat(game.discountPrice.replace("R$", "")),
                                )}
                                %
                              </Chip>
                            )}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg">Nenhum jogo encontrado para "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-2">Tente outro termo de pesquisa</p>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Navigation Links */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-4 mb-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex gap-6 mb-2 md:mb-0">
            <Link
              href={"https://app.razehost.com.br/"}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Gamepad2 size={18} />
              <span className="text-sm font-medium">Descobrir</span>
            </Link>
            <Link href={"#jogos"} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <TrendingUp size={18} />
              <span className="text-sm font-medium">Navegar</span>
            </Link>
            <Link href={"#jogosnovos"} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Sparkles size={18} />
              <span className="text-sm font-medium">Novidades</span>
            </Link>
          </div>
          <div className="flex gap-6">
            <Link
              href={"https://app.razehost.com.br/"}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Heart size={18} />
              <span className="text-sm font-medium">Lista de desejo</span>
            </Link>
            <Link
              href={"https://app.razehost.com.br/"}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Tag size={18} />
              <span className="text-sm font-medium">Carrinho</span>
            </Link>
          </div>
        </div>
      </div>

      <CardPromotion />

      {/* Featured Game */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-8">
        {displayGame ? (
          <div
            className="col-span-1 lg:col-span-10 bg-cover bg-center p-4 text-white h-[620px] rounded-xl flex items-end relative overflow-hidden group"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 100%), url('${displayGame.wallpaper}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-5 w-full relative z-10">
              <h3 className="font-bold uppercase text-xs bg-orange-500 inline-block px-3 py-1 rounded-full">
                Já disponível
              </h3>
              <h2 className="text-3xl font-bold mt-2">{displayGame.name}</h2>
              <p className="text-gray-300 text-sm max-w-xl pt-2">{displayGame.contents.description}</p>
              <div className="pt-5 flex flex-wrap gap-4">
                <Link href={displayGame.link}>
                  <Button className="text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-6 font-semibold">
                    Comprar agora
                  </Button>
                </Link>
                {!displayGame.discountPrice ? (
                  <Link href={displayGame.link}>
                    <Button variant="bordered" className="border-orange-400 text-white">
                      {displayGame.price}
                    </Button>
                  </Link>
                ) : (
                  <div className="flex gap-2 items-center">
                    <Button variant="bordered" className="border-orange-400 text-white">
                      <p className="line-through text-xs text-gray-400 mr-2">{displayGame.price}</p>
                      <p>{displayGame.discountPrice}</p>
                    </Button>
                    <Chip className="text-white" size="sm" color="warning">
                      -
                      {calculateDiscountPercentage(
                        Number.parseFloat(displayGame.price.replace("R$", "")),
                        Number.parseFloat(displayGame.discountPrice.replace("R$", "")),
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
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-gray-900/50 p-4 rounded-xl h-full">
              <h3 className="font-semibold text-sm mb-4 text-orange-400">Jogos em destaque</h3>
              {games.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handlerDisplayGame(item.id)
                  }}
                  className={`${
                    item.id == displayGame.id
                      ? "bg-gradient-to-r from-orange-500/20 to-transparent border-l-4 border-l-orange-500"
                      : "hover:bg-gray-800/50"
                  } cursor-pointer rounded-lg transition-all duration-200 mb-2`}
                >
                  <div className="flex items-center space-x-2 p-2">
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <span className="text-xs hover:text-orange-400 transition-colors">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* All Games Section */}
      <div className="pt-[5%]" id="jogos">
        <div className="flex justify-between items-center pt-4 pb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Todos os jogos</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
          </div>
          {swiperInstance && (
            <div className="flex gap-2">
              <Button
                onClick={() => swiperInstance.slidePrev()}
                isIconOnly
                aria-label="Previous"
                size="sm"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700"
              >
                <LucideArrowLeft className="text-orange-400" size={15} />
              </Button>
              <Button
                onClick={() => swiperInstance.slideNext()}
                isIconOnly
                aria-label="Next"
                size="sm"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700"
              >
                <LucideArrowRight className="text-orange-400" size={15} />
              </Button>
            </div>
          )}
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            slidesPerView={6}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper pb-10"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
              1536: { slidesPerView: 6, spaceBetween: 20 },
            }}
          >
            {games.map((item, index) => (
              <SwiperSlide key={index}>
                <CardGameComponent
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

      {/* Notices Section */}
      <div className="pt-[5%]">
        <div className="flex justify-between items-center pt-4 pb-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Notícias & Guias</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
          </div>
          {swiperNotices && (
            <div className="flex gap-2">
              <Button
                onClick={() => swiperNotices.slidePrev()}
                isIconOnly
                aria-label="Previous"
                size="sm"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700"
              >
                <LucideArrowLeft className="text-orange-400" size={15} />
              </Button>
              <Button
                onClick={() => swiperNotices.slideNext()}
                isIconOnly
                aria-label="Next"
                size="sm"
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700"
              >
                <LucideArrowRight className="text-orange-400" size={15} />
              </Button>
            </div>
          )}
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => setSwiperNotices(swiper)}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper pb-10"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
              1536: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {notices.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300">
                  <CardBody className="p-0">
				  <div className="relative">
  <img
    src={item.img || "/placeholder.svg"}
    alt={item.title}
    className="w-full h-48 object-cover"
    width={800}
    height={450}
  />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h2 className="font-bold text-xl mb-2">{item.title}</h2>
                      <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                      <a href={item.link}>
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold w-full"
                          endContent={<ExternalLink size={16} />}
                        >
                          Saiba mais
                        </Button>
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Game Categories */}
      <div className="pt-[5%]">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-xl font-bold">Categorias de Jogos</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(mockData).map(([category, games], idx) => (
            <div key={idx} className="flex">
              {idx > 0 && <div className="border-l border-gray-700 mr-4" />}
              <div className="w-full">
                <h2 className="text-xl font-bold capitalize mb-4 flex gap-2 items-center text-orange-400">
                  {category.replace(/([A-Z])/g, " $1")} <ArrowRight size={18} />
                </h2>
                <div className="space-y-4">
                  {games.map((game, index) => (
                    <a
                      href={game.link}
                      key={index}
                      className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-4 w-full">
                        <div className="relative w-20 h-20 overflow-hidden rounded-lg">
                          <Image
                            src={game.image || "/placeholder.svg"}
                            alt={game.title}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{game.title}</p>
                          <p className="text-gray-500">{game.description}</p>
                          <p className="text-orange-400 font-medium">{game.price}</p>
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

      {/* New Games Section - Innovative 3D Card Design */}
      <div className="pt-[5%]" id="jogosnovos">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-xl font-bold">Jogos Novos</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: 3D Card Effect */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-md">
              <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="w-full">
                {newGames.map((game, index) => (
                  <SwiperSlide key={index} className="bg-transparent">
                    <Link href={game.link}>
                      <Card className="w-full h-[400px] bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 overflow-hidden">
                        <CardBody className="p-0 relative">
                          <div className="absolute inset-0">
                            <Image
                              src={game.img || "/placeholder.svg"}
                              alt={game.name}
                              width={400}
                              height={400}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                          </div>

                          <div className="absolute top-4 left-4 right-4">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full px-4 py-1 inline-flex items-center">
                              <Sparkles size={16} className="mr-2" />
                              <span className="font-bold text-sm">Novo Lançamento</span>
                            </div>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h2 className="font-bold text-2xl mb-2">{game.name}</h2>

                            {!game.discountPrice ? (
                              <p className="text-lg font-medium mb-4">A partir de {game.price}</p>
                            ) : (
                              <div className="flex flex-wrap items-center gap-2 mb-4">
                                <Chip className="text-white" size="sm" color="warning">
                                  -
                                  {calculateDiscountPercentage(
                                    Number.parseFloat(game.price.replace("R$", "")),
                                    Number.parseFloat(game.discountPrice.replace("R$", "")),
                                  )}
                                  %
                                </Chip>
                                <p className="line-through text-sm text-gray-400">{game.price}</p>
                                <p className="text-lg font-medium">{game.discountPrice}</p>
                              </div>
                            )}

                            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold">
                              Ver detalhes
                            </Button>
                          </div>
                        </CardBody>
                      </Card>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="text-center text-sm text-gray-400 mt-4">Deslize para ver mais jogos novos</p>
            </div>
          </div>

          {/* Right side: Features */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Por que jogar os novos lançamentos?</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Sparkles size={24} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Experiência Inovadora</h3>
                    <p className="text-gray-400">
                      Seja o primeiro a experimentar as mecânicas e gráficos de última geração.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <TrendingUp size={24} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Comunidade Ativa</h3>
                    <p className="text-gray-400">
                      Participe de uma comunidade vibrante e em crescimento desde o início.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/20 p-3 rounded-lg">
                    <Tag size={24} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Ofertas Exclusivas</h3>
                    <p className="text-gray-400">
                      Aproveite promoções e bônus especiais disponíveis apenas para novos lançamentos.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold">
                Ver todos os novos jogos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Games with Discounts Section */}
      <div className="pt-[5%]">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-xl font-bold">Jogos com Descontos</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => setSwiperInstanceDiscount(swiper)}
            slidesPerView={6}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper pb-10"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              480: { slidesPerView: 2, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 5, spaceBetween: 20 },
              1536: { slidesPerView: 6, spaceBetween: 20 },
            }}
          >
            {gamesWithDiscount.map((item, index) => (
              <SwiperSlide key={index}>
                <CardGameComponent
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
    </section>
  )
}
