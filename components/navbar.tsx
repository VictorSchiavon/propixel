"use client";
import games from "@/config/games.json";
import logo_br from "@/public/br.webp";
import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/navbar";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { Gamepad2, GlobeLock, Handshake, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { default as Link, default as NextLink } from "next/link";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePopover, setActivePopover] = useState(null);

  const handlePopover = (popoverKey:any) => {
    setActivePopover((prev) => (prev === popoverKey ? null : popoverKey));
  };
  
  const closePopover = () => setActivePopover(null);

  return (
    <Navbar className="pb-4 bg-transparent" maxWidth={"2xl"} position="sticky" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden mt-4" />
        <NavbarBrand as="li" className="gap-3 max-w-fit pt-4">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logo.webp" alt="logo" height="80" width="80" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem key="01" className="mt-4">
          <NextLink href="/" className="p-0">
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300">Início</p>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "servers"}>
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
                endContent={<BiChevronDown />}
                onMouseEnter={() => handlePopover("servers")}
              >
                Servidores
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[570px] p-0" onMouseLeave={closePopover}>
              <div className="w-full p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Link href="/vps">
                    <div className="relative bg-gradient-to-b from-orange-500 to-yellow-600 h-72 rounded-lg">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <Image src="/logo_icon.webp" alt="logo" height="120" width="50" />
                        <p className="text-lg font-bold">VPS Gamer</p>
                        <p>Servidores localizados em São Paulo.</p>
                      </div>
                    </div>
                  </Link>
                  <div>
                    {[
                      { href: "/vps-trader", title: "VPS Trader", description: "Servidor veloz para traders." },
                      { href: "/vps-flex", title: "VPS Flex", description: "Servidores custo-benefício único." },
                      { href: "/colocation", title: "Colocation", description: "Hospede seu servidor em nossa infraestrutura." },
                      { href: "/semidedicados", title: "Semidedicados", description: "Configurações superiores, para aplicação grandes." }
                    ].map((item, index) => (
                      <Link href={item.href} key={index}>
                        <div className="p-2 hover:bg-[#303030] rounded-lg">
                          <p className="text-lg">{item.title}</p>
                          <p className="text-md text-gray-500">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <Link href="/dedicados">
                    <div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg">
                      <h3 className="text-md font-bold">Dedicados</h3>
                      <p>Seu próprio dedicado, não compartilhe recursos com ninguém.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "gamers"}>
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
                endContent={<BiChevronDown />}
                onMouseEnter={() => handlePopover("gamers")}
              >
                Jogos
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[570px] p-0" onMouseLeave={closePopover}>
              <div className="w-full p-5">
                <p className="text-xs text-gray-500">JOGOS POPULARES</p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {games.slice(0, 4).map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg flex items-center h-18 h-full">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded-lg hover:animate-pulse"
                          />
                          <h3 className="text-md font-bold">{item.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-[#0B0B0B] w-full rounded-md p-5">
                <Link href="/games/">
                  <p className="text-xs text-orange-400 text-center hover:text-white">Visualizar todos os jogos</p>
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "platform"}>
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
                endContent={<BiChevronDown />}
                onMouseEnter={() => handlePopover("platform")}
              >
                Plataforma
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[700px] p-0" onMouseLeave={closePopover}>
              <div className="w-full p-5">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "https://suporte.razehost.com.br",
                      title: "Tutoriais",
                      description: "Dicas, soluções e tutoriais.",
                      icon: <GlobeLock />
                    },
                    {
                      href: "/painel",
                      title: "Painel de Jogos",
                      description: "Poderoso arsenal para gerenciamento dos jogos.",
                      icon: <Gamepad2 />
                    },
                    {
                      href: "https://drive.google.com/file/d/1u89J-ACHVAsE8nTUwe9zWOaw06Eaqo16/view",
                      title: "Termos de Serviço",
                      description: "Para garantir a melhor experiência, recomendamos a leitura completa dos termos.",
                      icon: <Handshake />
                    },
                    {
                      href: "/anti-ddos",
                      title: "Proteção DDoS",
                      description: "Seu servidor protegido contra ataques.",
                      icon: <ShieldCheck />
                    }
                  ].map((item, index) => (
                    <Link href={item.href} key={index}>
                      <div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg flex items-center h-18 h-full">
                        <div className="mr-3">{item.icon}</div>
                        <div>
                          <h3 className="text-md font-bold">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex mt-5 sm:flex" justify="end">
        <NavbarItem>
          <NextLink href="https://app.razehost.com.br/login">
            <Button variant="flat" size="sm" className="text-sm font-normal bg-orange-500 border-0 text-white rounded-full">Acessar minha conta</Button>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="sm:block hidden">
  <a 
    href="https://discord.gg/p8YXcEuKdH" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center justify-center p-0 m-0"
  >
    <Image 
      src="/discord.png" 
      alt="Discord" 
      width={20} 
      height={20} 
      className="p-0 m-0"
    />
  </a>
</NavbarItem>


      </NavbarContent>
      <NavbarMenu>
        <NavbarItem key="01" className="mt-4">
          <NextLink href="/" className="p-0">
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300">Início</p>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "servers-mobile"}>
            <PopoverTrigger>
              <Button className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300" radius="sm" variant="light" endContent={<BiChevronDown />} onClick={() => handlePopover("servers-mobile")}>Servidores</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[370px] p-0" onMouseLeave={closePopover}>
              <div className="w-full p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Link href="/vps">
                    <div className="relative bg-gradient-to-b from-orange-500 to-yellow-600 h-72 rounded-lg">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <Image src="/logo_icon.webp" alt="logo" height="120" width="50" />
                        <p className="text-lg font-bold">VPS Gamer</p>
                        <p>Servidores localizados em São Paulo.</p>
                      </div>
                    </div>
                  </Link>
                  <div>
                    {[
                      { href: "/vps-trader", title: "VPS Trader", description: "Servidor veloz para traders." },
                      { href: "/vps-flex", title: "VPS Flex", description: "Servidores custo-benefício único." },
                      { href: "/semidedicados", title: "Semidedicados", description: "Configurações superiores, para aplicação grandes." },
                      { href: "/colocation", title: "Colocation", description: "Hospedeu seu próprio servidor em nossa infraestrutura" }
                    ].map((item, index) => (
                      <Link href={item.href} key={index}>
                        <div className="p-2 hover:bg-[#303030] rounded-lg">
                          <p className="text-lg">{item.title}</p>
                          <p className="text-md text-gray-500">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <Link href="/dedicados">
                    <div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg">
                      <h3 className="text-md font-bold">Dedicados</h3>
                      <p>Seu próprio dedicado, não compartilhe recursos com ninguém.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "gamers-mobile"}>
            <PopoverTrigger>
              <Button className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300" radius="sm" variant="light" endContent={<BiChevronDown />} onClick={() => handlePopover("gamers-mobile")}>Outros jogos</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[370px] p-0" onMouseLeave={closePopover}>
              <div className="w-full p-5">
                <p className="text-xs text-gray-500">JOGOS POPULARES</p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {games.slice(0, 4).map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg flex items-center h-18 h-full">
                        <div className="flex items-center space-x-2">
                          <Image src={item.img} alt={item.name} width={48} height={48} className="w-12 h-12 object-cover rounded-lg hover:animate-pulse" />
                          <h3 className="text-md font-bold">{item.name}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="bg-[#0B0B0B] w-full rounded-md p-5">
                <Link href="/games/">
                  <p className="text-xs text-orange-400 text-center hover:text-white">Visualizar todos os jogos</p>
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "platform-mobile"}>
            <PopoverTrigger>
              <Button className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300" radius="sm" variant="light" endContent={<BiChevronDown />} onClick={() => handlePopover("platform-mobile")}>Plataforma</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[370px] p-0" onMouseLeave={closePopover}>
              <div className="w-full p-5">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/colocation",
                      title: "Colocation",
                      description: "Configurações para aplicações maiores.",
                      icon: <GlobeLock />
                    },
                    {
                      href: "/painel",
                      title: "Painel de Jogos",
                      description: "Tenha seu próprio servidor, não divida.",
                      icon: <Gamepad2 />
                    },
                    {
                      href: "https://drive.google.com/file/d/1u89J-ACHVAsE8nTUwe9zWOaw06Eaqo16/view",
                      title: "Termos de Serviço",
                      description: "Para garantir a melhor experiência, recomendamos a leitura completa dos termos.",
                      icon: <Handshake />
                    },
                    {
                      href: "/anti-ddos",
                      title: "Proteção DDoS",
                      description: "Seu servidor protegido contra ataques.",
                      icon: <ShieldCheck />
                    }
                  ].map((item, index) => (
                    <Link href={item.href} key={index}>
                      <div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg flex items-center h-18 h-full">
                        <div className="mr-3">{item.icon}</div> {/* Ícone à esquerda */}
                        <div>
                          <h3 className="text-md font-bold">{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
