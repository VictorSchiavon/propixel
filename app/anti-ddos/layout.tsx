import "@/styles/globals.css";
import { Metadata } from "next";


import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
    title: {
        default: "Proteção Anti DDoS",
        template: `%s - ${siteConfig.name}`,
    },
    description: "Proteção Anti DDoS com capacidade total de até 248TB/s. Mitigação a tempo real, sempre ativa, garantido o tempo de resposta mais rápido contra qualquer ameaças/ataques.",
};

export default function Layout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            {children}
        </>
    );
}
