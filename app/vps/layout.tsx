import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "VPS Gamer no Brasil com Anti DDoS | RazeHost",
        template: `%s - ${siteConfig.name}`,
    },
    description: "VPS Gamer com processadores AMD Ryzen e Proteção Anti DDoS para aplicações de alto nível e servidores de jogos.",
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
        title: 'VPS Gamer no Brasil com Anti DDoS | RazeHost',
        description: 'VPS Gamer com processadores AMD Ryzen e Proteção Anti DDoS para aplicações de alto nível e servidores de jogos.',
        url: 'https://raze.host/',
        siteName: 'Raze Host',
        images: ['/banner.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VPS Gamer no Brasil com Anti DDoS | RazeHost',
        description: 'VPS Gamer com processadores AMD Ryzen e Proteção Anti DDoS para aplicações de alto nível e servidores de jogos.',
        images: ['/banner.png'],
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            {children}
        </>
    );
}
