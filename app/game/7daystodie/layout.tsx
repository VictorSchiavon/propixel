import "@/styles/globals.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Host de 7Days To Die - Hospedagem de 7 Days to Die | RazeHost",
    description: "A melhor hospedagem de 7 Days To Die no Brasil com o melhor painel de gerenciamento, instale mods, convide seus amigos e se divirta-se com o alto desempenho da Host.",
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
        title: 'Host de 7Days To Die - Hospedagem de 7 Days to Die | RazeHost',
        description: 'A melhor hospedagem de 7 Days To Die no Brasil com o melhor painel de gerenciamento, instale mods, convide seus amigos e se divirta-se com o alto desempenho da Host.',
        url: 'https://raze.host/',
        siteName: 'Raze Host',
        images: ['/banner.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Host de 7Days To Die - Hospedagem de 7 Days to Die | RazeHost',
        description: 'A melhor hospedagem de 7 Days To Die no Brasil com o melhor painel de gerenciamento, instale mods, convide seus amigos e se divirta-se com o alto desempenho da Host.',
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