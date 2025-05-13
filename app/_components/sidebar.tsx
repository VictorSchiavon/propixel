"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Gamepad2,
  Package,
  Users,
  Server,
  MonitorSmartphone,
  Layers,
  BookOpen,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const mainNavItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Minecraft", href: "/minecraft", icon: Gamepad2, submenu: true },
    { name: "GTA V", href: "/fivem", icon: Gamepad2, submenu: true },
    { name: "Software", href: "/software", icon: MonitorSmartphone, submenu: true },
    { name: "VPS Gamer", href: "/vps-gamer", icon: Layers, submenu: true },
  ]

  const browseCategories = [
    { name: "Todos os Planos", href: "/todos-planos", icon: Server },
    { name: "Novidades", href: "/novidades", icon: Package, badge: "3" },
    { name: "Mais Populares", href: "/populares", icon: Users },
  ]

  const personalItems = [{ name: "Base de Conhecimento", href: "/base-conhecimento", icon: BookOpen }]

  return (
    <div
      className={cn(
        "h-screen flex-shrink-0 bg-[#0F1014] dark:bg-[#0F1014] transition-all duration-300 border-r border-gray-800/50",
        collapsed ? "w-[70px]" : "w-[250px]",
      )}
    >
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-sm">
            <Server className="h-5 w-5 text-black" />
          </div>
          {!collapsed && <span className="font-bold text-lg">NexusHost</span>}
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1 py-2 h-[calc(100vh-4rem)]">
        <nav className="grid gap-1 px-2">
          <div className="py-2">
            {!collapsed && <p className="px-2 text-xs font-semibold text-gray-500 mb-1">Menu</p>}
            <div className="grid gap-1">
              {mainNavItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50",
                    pathname === item.href && "bg-gray-800/50 text-gray-50",
                  )}
                >
                  <item.icon className={cn("h-5 w-5", pathname === item.href && "text-yellow-500")} />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.name}</span>
                      {item.submenu && <ChevronRight className="h-4 w-4 opacity-50" />}
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-2">
            {!collapsed && <p className="px-2 text-xs font-semibold text-gray-500 mb-1">Categorias</p>}
            <div className="grid gap-1">
              {browseCategories.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50",
                    pathname === item.href && "bg-gray-800/50 text-gray-50",
                  )}
                >
                  <item.icon className={cn("h-5 w-5", pathname === item.href && "text-yellow-500")} />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-xs font-medium">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-2">
            {!collapsed && <p className="px-2 text-xs font-semibold text-gray-500 mb-1">Pessoal</p>}
            <div className="grid gap-1">
              {personalItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-gray-50",
                    pathname === item.href && "bg-gray-800/50 text-gray-50",
                  )}
                >
                  <item.icon className={cn("h-5 w-5", pathname === item.href && "text-yellow-500")} />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </ScrollArea>
    </div>
  )
}
