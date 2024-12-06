import Footer from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
      default: "Plataforma de servidores de jogos e VPS no Brasil | RazeHost",
      template: `%s - ${siteConfig.name}`,
  },
  description: "Potencialize sua presença online com a RazeHost, especialista em servidores VPS para jogos e aplicações no Brasil. Tenha desempenho, proteção e suporte de primeira!",
  keywords: [
      "host de FiveM",
      "host de Minecraft",
      "hospedagem de jogo",
      "RazeHost",
      "FiveM host",
      "Terraria",
      "Satisfactory",
      "hospedagem de Tibia",
      "Tibia",
      "MU Online",
      "VPS Brasil",
      "VPS gamer",
      "servidores dedicados",
      "cloud",
      "hospedagem de FiveM",
      "FiveM Brasil",
      "Minecraft",
      "Minecraft Brasil",
      "anti DDoS",
      "VPS no Brasil",
      "VPS gamer com anti DDoS",
      "VPS para FiveM",
      "host 7 Days to Die",
      "Project Zomboid",
      "VPS jogos",
      "host de jogos",
      "Cloudflare",
      "anti DDoS"
  ],
  openGraph: {
      title: "Plataforma de servidores de jogos e VPS no Brasil | RazeHost",
      description: "Potencialize sua presença online com a RazeHost, especialista em servidores VPS para jogos e aplicações no Brasil. Tenha desempenho, proteção e suporte de primeira!",
      url: 'https://razehost.com.br/',
      siteName: 'RazeHost',
      images: ['/banner.webp']
  },
  twitter: {
      card: 'summary_large_image',
      title: "Plataforma de servidores de jogos e VPS no Brasil | RazeHost",
      description: "Potencialize sua presença online com a RazeHost, especialista em servidores VPS para jogos e aplicações no Brasil. Tenha desempenho, proteção e suporte de primeira!",
      images: ['/banner.webp'],
  },
  icons: {
      icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <head />
      <body className={clsx("min-h-screen  bg-[#0B0E13]", inter.className)}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <div className="border-b border-b-gray-700">
              <NavbarComponent />
            </div>
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
