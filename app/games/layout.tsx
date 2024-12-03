import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Hospedagem de Jogos no Brasil | RazeHost",
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
        title: 'Hospedagem de Jogos no Brasil | RazeHost',
        description: 'Desempenho, estabilidade e baixa latência. Com infraestrutura no Brasil, armazenamento NVMe e proteção anti-DDoS, garantimos uma experiência de jogo fluida para Minecraft, FiveM e mais. Hospede com RazeHost e jogue sem interrupções!',
        url: 'https://raze.host/',
        siteName: 'Raze Host',
        images: ['/banner.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hospedagem de Jogos no Brasil | RazeHost',
        description: 'Desempenho, estabilidade e baixa latência. Com infraestrutura no Brasil, armazenamento NVMe e proteção anti-DDoS, garantimos uma experiência de jogo fluida para Minecraft, FiveM e mais. Hospede com RazeHost e jogue sem interrupções!',
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
