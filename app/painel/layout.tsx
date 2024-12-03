import "@/styles/globals.css";
import { Metadata } from "next";


import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: {
        default: "Painel de Jogos  | RazeHost",
        template: `%s - ${siteConfig.name}`,
    },
    description: "Gerencie seu servidor de jogos com facilidade e eficiência. Nosso painel intuitivo oferece instalação rápida, monitoramento em tempo real e controle total para você configurar e personalizar sua experiência de jogo sem complicações.",
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
        title: 'Painel de Jogos  | RazeHost',
        description: 'Gerencie seu servidor de jogos com facilidade e eficiência. Nosso painel intuitivo oferece instalação rápida, monitoramento em tempo real e controle total para você configurar e personalizar sua experiência de jogo sem complicações.',
        url: 'https://raze.host/',
        siteName: 'Raze Host',
        images: ['/banner.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Painel de Jogos  | RazeHost',
        description: 'Gerencie seu servidor de jogos com facilidade e eficiência. Nosso painel intuitivo oferece instalação rápida, monitoramento em tempo real e controle total para você configurar e personalizar sua experiência de jogo sem complicações.',
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
