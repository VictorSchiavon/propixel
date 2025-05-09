"use client"
import games from "@/config/games.json"
import type React from "react"

import { Button } from "@nextui-org/button"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/navbar"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { Gamepad2, GlobeLock, Handshake, LayoutGrid, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { default as Link, default as NextLink } from "next/link"
import { useState, useEffect, useCallback } from "react"
import { BiChevronDown } from "react-icons/bi"

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePopover, setActivePopover] = useState<string | null>(null)
  const [popoverTimeout, setPopoverTimeout] = useState<NodeJS.Timeout | null>(null)

  // Improved handler for popovers that properly manages state
  const handlePopover = useCallback(
    (popoverKey: string, event?: React.MouseEvent) => {
      // Stop event propagation to prevent conflicts
      if (event) {
        event.stopPropagation()
      }

      if (popoverTimeout) {
        clearTimeout(popoverTimeout)
        setPopoverTimeout(null)
      }

      // Toggle popover if it's the same one, otherwise open the new one
      setActivePopover((prev) => (prev === popoverKey ? null : popoverKey))
    },
    [popoverTimeout],
  )

  // Close popover with delay
  const closePopoverWithDelay = useCallback(() => {
    if (popoverTimeout) {
      clearTimeout(popoverTimeout)
    }

    const timeout = setTimeout(() => {
      setActivePopover(null)
    }, 300) // Reduced delay for better responsiveness

    setPopoverTimeout(timeout)
  }, [popoverTimeout])

  // Close menu when a link is clicked
  const handleLinkClick = useCallback(
    (event?: React.MouseEvent) => {
      // Stop event propagation to prevent conflicts
      if (event) {
        event.stopPropagation()
      }

      setIsMenuOpen(false)
      setActivePopover(null)

      if (popoverTimeout) {
        clearTimeout(popoverTimeout)
        setPopoverTimeout(null)
      }
    },
    [popoverTimeout],
  )

  // Force close all menus
  const forceCloseAll = useCallback(() => {
    setIsMenuOpen(false)
    setActivePopover(null)

    if (popoverTimeout) {
      clearTimeout(popoverTimeout)
      setPopoverTimeout(null)
    }
  }, [popoverTimeout])

  // Handle menu toggle specifically
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
    setActivePopover(null)
  }, [])

  // Clean up timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (popoverTimeout) {
        clearTimeout(popoverTimeout)
      }
    }
  }, [popoverTimeout])

  // Add event listener to close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      // If clicking outside navbar elements and menus are open
      if (
        !target.closest(".navbar-content") &&
        !target.closest(".popover-content") &&
        (isMenuOpen || activePopover !== null)
      ) {
        forceCloseAll()
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMenuOpen, activePopover, forceCloseAll])

  return (
    <Navbar
      className="pb-4 bg-transparent"
      maxWidth={"2xl"}
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: "navbar-content",
        menu: "navbar-content popover-content",
        content: "navbar-content",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden mt-4 navbar-menu-toggle"
          onClick={handleMenuToggle}
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit pt-4">
          <NextLink className="flex justify-start items-center gap-1" href="/" onClick={(e) => handleLinkClick(e)}>
            <Image src="/logo.webp" alt="logo" height="80" width="80" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem key="01" className="mt-4">
          <NextLink href="/" className="p-0" onClick={(e) => handleLinkClick(e)}>
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300">
              Início
            </p>
          </NextLink>
        </NavbarItem>
        <NavbarItem key="minecraft" className="mt-4">
          <NextLink href="/game/minecraft" className="p-0 flex items-center gap-2" onClick={(e) => handleLinkClick(e)}>
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300">
              Minecraft
            </p>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
              AMD Ryzen 9 7950X
            </span>
          </NextLink>
        </NavbarItem>

        <NavbarItem className="mt-4" onMouseLeave={closePopoverWithDelay}>
          <Popover
            placement="bottom"
            offset={20}
            showArrow
            isOpen={activePopover === "servers"}
            onOpenChange={(open) => {
              if (!open) setActivePopover(null)
            }}
            classNames={{
              content: "popover-content",
            }}
          >
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
            <PopoverContent
              className="w-[570px] p-0"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Link href="/vps" onClick={(e) => handleLinkClick(e)}>
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
                      {
                        href: "/fivem",
                        title: "FiveM",
                        description: "Hospede seu servidor de FiveM com AMD Ryzen 9.",
                      },
                      {
                        href: "/dedicados",
                        title: "Baremetal",
                        description: "Seu próprio servidor dedicado, não divida recursos.",
                      },
                      {
                        href: "/colocation",
                        title: "Colocation",
                        description: "Hospede seu servidor em nossa infraestrutura.",
                      },
                      {
                        href: "/semidedicados",
                        title: "Semidedicados",
                        description: "Configurações superiores, para aplicação grandes.",
                      },
                    ].map((item, index) => (
                      <Link href={item.href} key={index} onClick={(e) => handleLinkClick(e)}>
                        <div className="p-2 hover:bg-[#303030] rounded-lg">
                          <p className="text-lg">{item.title}</p>
                          <p className="text-md text-gray-500">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Linha inferior */}
                <div className="mt-6 border-t border-gray-700 pt-4 grid grid-cols-3 gap-4">
                  {[
                    {
                      label: "Documentação",
                      href: "https://suporte.razehost.com.br/pt-BR/collections/9663609-servidor-vps",
                    },
                    { label: "Redes", href: "/redes" },
                    { label: "Changelog", href: "https://discord.gg/GghrUQ9vMN" },
                  ].map((item, index) => (
                    <Link href={item.href} key={index} onClick={(e) => handleLinkClick(e)}>
                      <div className="flex justify-between items-center text-sm font-medium text-gray-300 hover:text-white transition">
                        {item.label} <span>→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>

        <NavbarItem className="mt-4" onMouseLeave={closePopoverWithDelay}>
          <Popover
            placement="bottom"
            offset={20}
            showArrow
            isOpen={activePopover === "gamers"}
            onOpenChange={(open) => {
              if (!open) setActivePopover(null)
            }}
            classNames={{
              content: "popover-content",
            }}
          >
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
            <PopoverContent
              className="w-[800px] p-0"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-5">
                <div className="grid grid-cols-3 gap-4">
                  {games.slice(0, 8).map((item, index) => (
                    <Link href={item.link} key={index} onClick={(e) => handleLinkClick(e)}>
                      <div className="p-2 rounded-lg flex items-center h-18 h-full hover:bg-[#303030]">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={item.img || "/placeholder.svg"}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded-lg hover:animate-pulse"
                          />
                          <div className="flex flex-col">
                            <h3 className="text-md font-bold">{item.name}</h3>
                            <p className="text-xs text-nowrap">
                              A partir de <span className="font-bold">{item.discountPrice}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link href="/games" onClick={(e) => handleLinkClick(e)}>
                    <div className="p-2 rounded-lg flex items-center h-18 h-full hover:bg-[#303030]">
                      <div className="flex items-center space-x-2">
                        <LayoutGrid
                          width={40}
                          height={40}
                          color="#fff"
                          className="bg-amber-600 p-2 object-cover rounded-lg hover:animate-pulse"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-md font-bold">Todos jogos</h3>
                          <p className="text-xs text-nowrap">Ver todos nossos jogos</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="mt-4" onMouseLeave={closePopoverWithDelay}>
          <Popover
            placement="bottom"
            offset={20}
            showArrow
            isOpen={activePopover === "platform"}
            onOpenChange={(open) => {
              if (!open) setActivePopover(null)
            }}
            classNames={{
              content: "popover-content",
            }}
          >
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
            <PopoverContent
              className="w-[700px] p-0"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-5">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "https://suporte.razehost.com.br",
                      title: "Tutoriais",
                      description: "Dicas, soluções e tutoriais.",
                      icon: <GlobeLock />,
                    },
                    {
                      href: "/painel",
                      title: "Painel de Jogos",
                      description: "Poderoso arsenal para gerenciamento dos jogos.",
                      icon: <Gamepad2 />,
                    },
                    {
                      href: "/termos",
                      title: "Termos de Serviço",
                      description: "Para garantir a melhor experiência, recomendamos a leitura completa dos termos.",
                      icon: <Handshake />,
                    },
                    {
                      href: "/anti-ddos",
                      title: "Proteção DDoS",
                      description: "Seu servidor protegido contra ataques.",
                      icon: <ShieldCheck />,
                    },
                  ].map((item, index) => (
                    <Link href={item.href} key={index} onClick={(e) => handleLinkClick(e)}>
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
          <NextLink href="https://app.razehost.com.br/login" onClick={(e) => handleLinkClick(e)}>
            <Button
              variant="flat"
              size="sm"
              className="text-sm font-normal bg-orange-500 border-0 text-white rounded-full"
            >
              Acessar minha conta
            </Button>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="sm:block hidden">
          <a
            href="https://discord.gg/p8YXcEuKdH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-0 m-0"
            onClick={(e) => handleLinkClick(e)}
          >
            <Image src="/discord.png" alt="Discord" width={20} height={20} className="p-0 m-0" />
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-6">
        <NavbarItem key="01" className="mt-4">
          <NextLink href="/" className="p-0" onClick={(e) => handleLinkClick(e)}>
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300">
              Início
            </p>
          </NextLink>
        </NavbarItem>
        <NavbarItem key="minecraft" className="mt-4">
          <NextLink href="/game/minecraft" className="p-0 flex items-center gap-2" onClick={(e) => handleLinkClick(e)}>
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300">
              Minecraft
            </p>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
              AMD Ryzen 9 7950X
            </span>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover
            placement="bottom"
            offset={20}
            showArrow
            isOpen={activePopover === "servers-mobile"}
            onOpenChange={(open) => {
              if (!open) setActivePopover(null)
            }}
            classNames={{
              content: "popover-content",
            }}
          >
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
                endContent={<BiChevronDown />}
                onClick={(e) => handlePopover("servers-mobile", e)}
              >
                Servidores
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[370px] p-0">
              <div className="w-full p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Link href="/vps" onClick={(e) => handleLinkClick(e)}>
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
                      {
                        href: "/vps-trader",
                        title: "VPS Trader",
                        description: "Servidor veloz para traders.",
                      },
                      {
                        href: "/vps-flex",
                        title: "VPS Flex",
                        description: "Servidores custo-benefício único.",
                      },
                      {
                        href: "/semidedicados",
                        title: "Semidedicados",
                        description: "Configurações superiores, para aplicação grandes.",
                      },
                      {
                        href: "/colocation",
                        title: "Colocation",
                        description: "Hospedeu seu próprio servidor em nossa infraestrutura",
                      },
                    ].map((item, index) => (
                      <Link href={item.href} key={index} onClick={(e) => handleLinkClick(e)}>
                        <div className="p-2 hover:bg-[#303030] rounded-lg">
                          <p className="text-lg">{item.title}</p>
                          <p className="text-md text-gray-500">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <Link href="/dedicados" onClick={(e) => handleLinkClick(e)}>
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
          <Popover
            placement="bottom"
            offset={20}
            showArrow
            isOpen={activePopover === "gamers-mobile"}
            onOpenChange={(open) => {
              if (!open) setActivePopover(null)
            }}
            classNames={{
              content: "popover-content",
            }}
          >
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
                endContent={<BiChevronDown />}
                onClick={(e) => handlePopover("gamers-mobile", e)}
              >
                Outros jogos
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] p-0">
              <div className="w-full p-5">
                <div className="grid grid-cols-1 gap-4">
                  {games.slice(0, 3).map((item, index) => (
                    <Link href={item.link} key={index} onClick={(e) => handleLinkClick(e)}>
                      <div className="p-2 rounded-lg flex items-center h-18 h-full">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={item.img || "/placeholder.svg"}
                            alt={item.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded-lg hover:animate-pulse"
                          />
                          <div className="flex flex-col">
                            <h3 className="text-md font-bold">{item.name}</h3>
                            <p className="text-xs text-nowrap">
                              Apartir de <span className="font-bold">{item.discountPrice}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link href="/games" onClick={(e) => handleLinkClick(e)}>
                    <div className="p-2 rounded-lg flex items-center h-18 h-full">
                      <div className="flex items-center space-x-2">
                        <LayoutGrid
                          width={40}
                          height={40}
                          color="#fff"
                          className="bg-amber-600 p-2 object-cover rounded-lg hover:animate-pulse"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-md font-bold">Todos jogos</h3>
                          <p className="text-xs text-nowrap">Ver todos nossos jogos</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem className="mt-4">
          <Popover
            placement="bottom"
            offset={20}
            showArrow
            isOpen={activePopover === "platform-mobile"}
            onOpenChange={(open) => {
              if (!open) setActivePopover(null)
            }}
            classNames={{
              content: "popover-content",
            }}
          >
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
                endContent={<BiChevronDown />}
                onClick={(e) => handlePopover("platform-mobile", e)}
              >
                Plataforma
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[370px] p-0">
              <div className="w-full p-5">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: "/colocation",
                      title: "Colocation",
                      description: "Configurações para aplicações maiores.",
                      icon: <GlobeLock />,
                    },
                    {
                      href: "/painel",
                      title: "Painel de Jogos",
                      description: "Tenha seu próprio servidor, não divida.",
                      icon: <Gamepad2 />,
                    },
                    {
                      href: "/termos",
                      title: "Termos de Serviço",
                      description: "Para garantir a melhor experiência, recomendamos a leitura completa dos termos.",
                      icon: <Handshake />,
                    },
                    {
                      href: "/anti-ddos",
                      title: "Proteção DDoS",
                      description: "Seu servidor protegido contra ataques.",
                      icon: <ShieldCheck />,
                    },
                  ].map((item, index) => (
                    <Link href={item.href} key={index} onClick={(e) => handleLinkClick(e)}>
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
      </NavbarMenu>
    </Navbar>
  )
}
