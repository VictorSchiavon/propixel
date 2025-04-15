"use client"

import painel2 from "@/public/painel/ftpfilezilla.webp"
import painel from "@/public/painel/painel1.webp"
import Image from "next/image"
import { BiCog, BiShield } from "react-icons/bi"
import { motion } from "framer-motion"

// Card Benefits Component (moved inline)
const CardBenefitsComponent = ({ icon, title, content }) => {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="relative p-6 rounded-xl overflow-hidden group">
      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl z-0"></div>

      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-700"></div>

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 mr-3">{icon}</div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{content}</p>
      </div>
    </motion.div>
  )
}

const benefits = {
  benefits: [
    {
      title: "Configurações personalizadas",
      description:
        "Suas configurações são geradas sob medida, ajustando-se instantaneamente a qualquer mudança em seus mods, plugins ou servidor.",
      icon: <BiCog size={22} color="white" />,
    },
    {
      title: "Backup & Segurança",
      description:
        "Tenha a tranquilidade de saber que seus mundos e configurações estão seguros. Você pode realizar backups diários em nosso painel.",
      icon: <BiShield size={22} color="white" />,
    },
  ],
}

const HeaderPanel = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0"></div>

      <section className="container mx-auto max-w-9xl pt-10 flex-grow relative z-10">
        <div className="pt-[5%]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-white text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              RAZEHOST PAINEL
            </h1>
            <p className="text-lg text-gray-300 mt-2">
              Seu arsenal completo para construir e controlar seus servidores de jogos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-10 rounded-xl overflow-hidden border border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 z-0"></div>
            <Image
              src={painel || "/placeholder.svg"}
              alt="Painel"
              className="w-full relative z-10 hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          </motion.div>

          <section className="pt-10">
            <div className="flex flex-wrap justify-between gap-4">
              {benefits.benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="w-full md:w-[calc(50%-1rem)]"
                >
                  <CardBenefitsComponent icon={item.icon} title={item.title} content={item.description} />
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[10%]"
        >
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Gerenciador de arquivos
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Tenha o controle total dos seus arquivos de servidor diretamente no seu navegador. Com nossa ferramenta,
              você pode explorar, editar e mover arquivos com a mesma facilidade que em seu computador.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4 mb-6 md:mx-0 mx-auto"></div>
          </div>
          <div className="flex justify-center md:justify-end">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-xl overflow-hidden border border-cyan-500/30"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20"></div>
              <Image
                src={painel2 || "/placeholder.svg"}
                alt="Gerenciador de arquivos"
                className="w-full relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[10%] mb-[10%]"
        >
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-xl overflow-hidden border border-purple-500/30"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur opacity-20"></div>
              <Image src={painel2 || "/placeholder.svg"} alt="Backups" className="w-full relative z-10" />
            </motion.div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Backups
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Seus backups de jogo são armazenados em local seguro e redundante, garantindo a proteção dos seus dados.
              Restaure ou baixe seus backups a qualquer momento com um simples clique.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-4 mb-6 md:mx-0 mx-auto"></div>
          </div>
        </motion.div>
      </section>

      {/* Animated background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}

export default HeaderPanel
