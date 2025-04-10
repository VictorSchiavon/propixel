"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import logo_companies from "@/public/logos_companies.webp";
import {
  BrainCircuit,
  EarthLock,
  ShieldCheck,
  SquareMousePointer,
  Zap,
  Cpu,
  ServerCog,
  Rocket,
  Users2,
  Clock3,
} from "lucide-react";

export default function MinecraftPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold">Hospedagem de Servidores Minecraft</h1>
        <p className="text-muted pt-4 pb-6 text-lg">
          Com hardware de ponta, proteção DDoS e suporte para Java e Bedrock, sua aventura começa com estabilidade e performance!
        </p>
        <div className="flex justify-center gap-4">
          <Button
            className="rounded-md bg-[#18181B] text-white"
            onClick={() => (window.location.href = "/game/minecraft")}
          >
            Ver Planos
          </Button>
          <Button
            className="rounded-md border text-white"
            onClick={() => (window.location.href = "https://discord.gg/p8YXcEuKdH")}
          >
            Entrar em contato
          </Button>
        </div>
      </section>

      <section className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[ 
          {
            icon: <Zap color="orange" size={26} />, 
            title: "AMD Ryzen 9 7950X/9 9900X/9 7900X3D",
            desc: "Ou qualquer outro processador AMD Ryzen do mesmo nível."
          },
          {
            icon: <BrainCircuit color="orange" size={26} />,
            title: "Suporte a Mods/Plugins",
            desc: "Compatível com Forge, Fabric, Spigot, Paper, Bukkit e muito mais."
          },
          {
            icon: <ShieldCheck color="orange" size={26} />,
            title: "Todas as Versões",
            desc: "Oferecemos suporte desde as versões clássicas até as mais novas."
          },
          {
            icon: <Cpu color="orange" size={26} />,
            title: "Desempenho Máximo",
            desc: "Servidores com CPUs Ryzen 9 e SSDs NVMe de alta velocidade."
          },
          {
            icon: <ServerCog color="orange" size={26} />,
            title: "Painel Pterodactyl",
            desc: "Painel intuitivo para gerenciar backups, mods, players e mais."
          },
          {
            icon: <Rocket color="orange" size={26} />,
            title: "Instalação Rápida",
            desc: "Seu servidor ativo em minutos com nosso sistema automatizado."
          }
        ].map(({ icon, title, desc }, idx) => (
          <Card key={idx} className="bg-[#0A0C10]">
            <CardBody>
              <div className="flex items-center gap-4">
                {icon}
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-400">{desc}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </section>

      <section className="mt-16 bg-[#07090c] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Minecraft Java e Bedrock no Mesmo Lugar</h2>
        <p className="text-muted mb-6">
          Instale, configure e jogue Java e Bedrock Edition com suporte cruzado e ferramentas fáceis de usar. Gerencie tudo em um único painel intuitivo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#0A0C10]">
            <CardBody className="text-center">
              <Users2 color="orange" size={26} className="mx-auto" />
              <h3 className="font-bold mt-3">Ideal para Comunidades</h3>
              <p className="text-sm text-gray-400 mt-2">
                Escalabilidade para servidores grandes como Hypixel ou comunidades iniciantes.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-[#0A0C10]">
            <CardBody className="text-center">
              <EarthLock color="orange" size={26} className="mx-auto" />
              <h3 className="font-bold mt-3">Mods Populares</h3>
              <p className="text-sm text-gray-400 mt-2">
                Instale RLCraft, Pixelmon, BetterMC, Create e muitos outros sem complicação.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-[#0A0C10]">
            <CardBody className="text-center">
              <Clock3 color="orange" size={26} className="mx-auto" />
              <h3 className="font-bold mt-3">99.9% Uptime</h3>
              <p className="text-sm text-gray-400 mt-2">
                Confiabilidade total com servidores em São Paulo, otimizados para latência mínima.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="mt-16 text-center">
        <Image
          src={logo_companies}
          alt="Empresas que confiam"
          width={800}
          height={200}
          className="mx-auto rounded-md"
        />
        <p className="text-gray-500 mt-4">Empresas e criadores confiam na nossa infraestrutura para hospedar experiências Minecraft de alto nível.</p>
      </section>
    </main>
  );
}
