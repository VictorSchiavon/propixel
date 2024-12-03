import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Semidedicados no Brasil com Anti DDoS | RazeHost",
        template: `%s - ${siteConfig.name}`,
    },
    description: "Semidedicados no Brasil com proteção Anti DDoS, e hardware de nova geração, garantindo seu servidor sem lag.",
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
        title: 'Semidedicados no Brasil com Anti DDoS | RazeHost',
        description: 'Semidedicados no Brasil com proteção Anti DDoS, e hardware de nova geração, garantindo seu servidor sem lag.',
        url: 'https://raze.host/',
        siteName: 'Raze Host',
        images: ['/banner.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Semidedicados no Brasil com Anti DDoS | RazeHost',
        description: 'Semidedicados no Brasil com proteção Anti DDoS, e hardware de nova geração, garantindo seu servidor sem lag.',
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
