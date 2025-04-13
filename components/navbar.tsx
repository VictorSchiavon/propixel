"use client";
import games from "@/config/games.json";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Gamepad2, GlobeLock, Handshake, LayoutGrid, ShieldCheck, ChevronDown } from 'lucide-react';
import Image from "next/image";
import { default as Link, default as NextLink } from "next/link";
import { useState } from "react";

export const NavbarVariation1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700"
      maxWidth={"2xl"}
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logo.webp" alt="logo" height="60" width="60" />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <NextLink href="/" className="text-gray-300 hover:text-white transition-colors">
            Início
          </NextLink>
        </NavbarItem>
        
        <NavbarItem>
          <NextLink href="/game/minecraft" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            Minecraft
            <span className="bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
              AMD Ryzen 9 7950X
            </span>
          </NextLink>
        </NavbarItem>
        
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-gray-300 hover:text-white transition-colors"
                endContent={<ChevronDown className="h-4 w-4" />}
              >
                Servidores
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Servidores" className="w-[400px]">
              <DropdownItem key="vps" textValue="VPS Gamer">
                <Link href="/vps" className="flex items-start gap-3">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-lg">
                    <Image src="/logo_icon.webp" alt="logo" height="30" width="30" />
                  </div>
                  <div>
                    <p className="font-bold">VPS Gamer</p>
                    <p className="text-sm text-gray-400">Servidores localizados em São Paulo.</p>
                  </div>
                </Link>
              </DropdownItem>
              <DropdownItem key="dedicados" textValue="Baremetal">
                <Link href="/dedicados" className="flex items-start gap-3">
                  <div>
                    <p className="font-bold">Baremetal</p>
                    <p className="text-sm text-gray-400">Seu próprio servidor dedicado, não divida recursos.</p>
                  </div>
                </Link>
              </DropdownItem>
              <DropdownItem key="colocation" textValue="Colocation">
                <Link href="/colocation" className="flex items-start gap-3">
                  <div>
                    <p className="font-bold">Colocation</p>
                    <p className="text-sm text-gray-400">Hospede seu servidor em nossa infraestrutura.</p>
                  </div>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-gray-300 hover:text-white transition-colors"
                endContent={<ChevronDown className="h-4 w-4" />}
              >
                Jogos
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Jogos" className="w-[600px]">
              <div className="grid grid-cols-3 gap-2 p-2">
                {games.slice(0, 6).map((item, index) => (
                  <DropdownItem key={index} textValue={item.name}>
                    <Link href={item.link} className="flex items-center gap-2">
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="rounded-md"
                      />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-xs">A partir de {item.discountPrice}</p>
                      </div>
                    </Link>
                  </DropdownItem>
                ))}
                <DropdownItem key="all-games" textValue="Todos jogos">
                  <Link href="/games" className="flex items-center gap-2">
                    <div className="bg-amber-600 p-2 rounded-md">
                      <LayoutGrid className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold">Todos jogos</p>
                      <p className="text-xs">Ver todos nossos jogos</p>
                    </div>
                  </Link>
                </DropdownItem>
              </div>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-gray-300 hover:text-white transition-colors"
                endContent={<ChevronDown className="h-4 w-4" />}
              >
                Plataforma
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Plataforma" className="w-[500px]">
              <div className="grid grid-cols-2 gap-2 p-2">
                {[
                  {
                    href: "https://suporte.razehost.com.br",
                    title: "Tutoriais",
                    description: "Dicas, soluções e tutoriais.",
                    icon: <GlobeLock className="h-5 w-5" />,
                  },
                  {
                    href: "/painel",
                    title: "Painel de Jogos",
                    description: "Poderoso arsenal para gerenciamento dos jogos.",
                    icon: <Gamepad2 className="h-5 w-5" />,
                  },
                  {
                    href: "/termos",
                    title: "Termos de Serviço",
                    description: "Para garantir a melhor experiência, recomendamos a leitura completa dos termos.",
                    icon: <Handshake className="h-5 w-5" />,
                  },
                  {
                    href: "/anti-ddos",
                    title: "Proteção DDoS",
                    description: "Seu servidor protegido contra ataques.",
                    icon: <ShieldCheck className="h-5 w-5" />,
                  },
                ].map((item, index) => (
                  <DropdownItem key={index} textValue={item.title}>
                    <Link href={item.href} className="flex items-start gap-2">
                      <div className="mt-1 bg-gray-800 p-2 rounded-md">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.description}</p>
                      </div>
                    </Link>
                  </DropdownItem>
                ))}
              </div>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <NextLink href="https://app.razehost.com.br/login">
            <Button
              variant="flat"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full"
            >
              Acessar minha conta
            </Button>
          </NextLink>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <a
            href="https://discord.gg/p8YXcEuKdH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src="/discord.png"
              alt="Discord"
              width={24}
              height={24}
            />
          </a>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-gray-900 pt-6">
        <NavbarItem>
          <NextLink href="/" className="text-gray-300 hover:text-white transition-colors block py-2">
            Início
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/game/minecraft" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 py-2">
            Minecraft
            <span className="bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
              AMD Ryzen 9 7950X
            </span>
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-gray-300 hover:text-white transition-colors justify-start px-0"
                endContent={<ChevronDown className="h-4 w-4" />}
              >
                Servidores
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Servidores Mobile">
              <DropdownItem key="vps">
                <Link href="/vps">VPS Gamer</Link>
              </DropdownItem>
              <DropdownItem key="dedicados">
                <Link href="/dedicados">Baremetal</Link>
              </DropdownItem>
              <DropdownItem key="colocation">
                <Link href="/colocation">Colocation</Link>
              </DropdownItem>
              <DropdownItem key="semidedicados">
                <Link href="/semidedicados">Semidedicados</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-gray-300 hover:text-white transition-colors justify-start px-0"
                endContent={<ChevronDown className="h-4 w-4" />}
              >
                Jogos
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Jogos Mobile">
              {games.slice(0, 3).map((item, index) => (
                <DropdownItem key={index}>
                  <Link href={item.link}>{item.name}</Link>
                </DropdownItem>
              ))}
              <DropdownItem key="all-games">
                <Link href="/games">Todos os jogos</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                variant="light"
                className="text-gray-300 hover:text-white transition-colors justify-start px-0"
                endContent={<ChevronDown className="h-4 w-4" />}
              >
                Plataforma
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Plataforma Mobile">
              <DropdownItem key="tutoriais">
                <Link href="https://suporte.razehost.com.br">Tutoriais</Link>
              </DropdownItem>
              <DropdownItem key="painel">
                <Link href="/painel">Painel de Jogos</Link>
              </DropdownItem>
              <DropdownItem key="termos">
                <Link href="/termos">Termos de Serviço</Link>
              </DropdownItem>
              <DropdownItem key="anti-ddos">
                <Link href="/anti-ddos">Proteção DDoS</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
