// src/components/Header.js
"use client"

import painel2 from "@/public/painel/ftpfilezilla.webp"
import painel from "@/public/painel/painel1.webp"
import Image from "next/image"
import { BiCog, BiShield } from "react-icons/bi"
import CardBenefitsComponent from "./_components/card-benefitis.component"

const benefits = {
  benefits: [
    {
      title: "Configurações personalizadas",
      description:
        "Suas configurações são geradas sob medida, ajustando-se instantaneamente a qualquer mudança em seus mods, plugins ou servidor.",
      icon: <BiCog size={24} color="white" />,
    },
    {
      title: "Backup & Segurança",
      description:
        "Tenha a tranquilidade de saber que seus mundos e configurações estão seguros. Você pode realizar backups diários em nosso painel.",
      icon: <BiShield size={24} color="white" />,
    },
  ],
}

const HeaderPanel = () => {
  return (
    <>
      <section className="container mx-auto max-w-9xl pt-10 flex-grow relative overflow-hidden bg-gradient-to-b from-black to-slate-900">
        {/* Animated background grid - Add this CSS in your globals.css */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] w-full h-full animate-[gridMove_20s_linear_infinite]"></div>
        </div>

        {/* Glowing orb effects */}
        <div className="absolute top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="pt-[5%] relative z-10">
          <div className="flex items-center space-x-2">
            <div className="h-1 w-10 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            <h1 className="text-white text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              RAZEHOST PAINEL
            </h1>
          </div>
          <p className="text-md text-gray-300">
            Seu arsenal completo para construir e controlar seus servidores de jogos com tecnologia de ponta.
          </p>

          <div className="mt-10 rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-purple-500/10 backdrop-blur-sm">
            <Image
              src={painel || "/placeholder.svg"}
              alt="Painel"
              className="w-full hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          <section className="pt-5">
            <div className="flex flex-wrap justify-between space-x-4">
              {benefits.benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-[300px] bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/5"
                >
                  <CardBenefitsComponent
                    icon={
                      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600">{item.icon}</div>
                    }
                    title={item.title}
                    content={item.description}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[10%] relative z-10">
          <div className="text-center md:text-left">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/20 text-cyan-400 text-sm">
              Controle Avançado
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Gerenciador de arquivos
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Tenha o controle total dos seus arquivos de servidor diretamente no seu navegador. Com nossa ferramenta de
              última geração, você pode explorar, editar e mover arquivos com a mesma facilidade que em seu computador.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl"></div>
              <Image
                src={painel2 || "/placeholder.svg"}
                alt="Gerenciador de arquivos"
                className="w-full rounded-xl border border-gray-700 shadow-lg relative z-10 hover:translate-y-[-5px] transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[10%] mb-[10%] relative z-10">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <Image
                src={painel2 || "/placeholder.svg"}
                alt="Backups"
                className="w-full rounded-xl border border-gray-700 shadow-lg relative z-10 hover:translate-y-[-5px] transition-all duration-500"
              />
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <div className="inline-block mb-3 px-4 py-1 rounded-full bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/20 text-purple-300 text-sm">
              Segurança Garantida
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Backups
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Seus backups de jogo são armazenados em local seguro e redundante, garantindo a proteção dos seus dados.
              Restaure ou baixe seus backups a qualquer momento com um simples clique através de nossa interface
              intuitiva.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-cyan-500 rounded-full"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeaderPanel
