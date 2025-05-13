"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, Bell, Menu, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const { setTheme, theme } = useTheme()
  const [showNotification, setShowNotification] = useState(false)
  const router = useRouter()

  const handleBellClick = () => {
    setShowNotification(!showNotification)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/pesquisa?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="flex h-16 items-center gap-4 border-b border-gray-800/50 bg-[#0F1014] dark:bg-[#0F1014] px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="relative w-full max-w-md">
        <form onSubmit={handleSearch}>
          <div className="relative flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Pesquisar planos..."
              className="w-full bg-[#1A1B23] dark:bg-[#1A1B23] pl-9 border-0 rounded-full h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <Link href="/sobre" className="hidden md:block text-sm text-gray-400 hover:text-white">
          Sobre Nós
        </Link>
        <Link href="/blog" className="hidden md:block text-sm text-gray-400 hover:text-white">
          Blog
        </Link>
        <Link href="/contato" className="hidden md:block text-sm text-gray-400 hover:text-white">
          Contato
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-gray-400">
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Alternar tema</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Escuro</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>Sistema</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative">
          <Button variant="ghost" size="icon" className="text-gray-400 relative" onClick={handleBellClick}>
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificações</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
          </Button>

          {showNotification && (
            <div className="absolute right-0 mt-2 w-72 bg-[#1A1B23] rounded-md shadow-lg py-1 z-50 border border-gray-800">
              <div className="px-4 py-3 border-b border-gray-800">
                <p className="text-sm font-medium">Notificações</p>
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-yellow-500">Novidade!</p>
                <p className="text-sm text-gray-300">Novos servidores AMD Ryzen disponíveis!</p>
                <p className="text-xs text-gray-500 mt-1">Há 2 horas</p>
              </div>
              <div className="px-4 py-3 border-t border-gray-800">
                <p className="text-sm font-medium text-green-500">Promoção!</p>
                <p className="text-sm text-gray-300">20% de desconto em todos os planos Minecraft Premium.</p>
                <p className="text-xs text-gray-500 mt-1">Há 1 dia</p>
              </div>
            </div>
          )}
        </div>

        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full">Área do Cliente</Button>
      </div>
    </header>
  )
}
