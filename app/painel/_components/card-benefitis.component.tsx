"use client"

import type React from "react"
import { motion } from "framer-motion"

interface CardBenefitsProps {
  icon: React.ReactNode
  title: string
  content: string
}

const CardBenefitsComponent: React.FC<CardBenefitsProps> = ({ icon, title, content }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(138, 75, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl p-6 flex flex-col h-full border border-gray-800 relative overflow-hidden"
    >
      {/* Glowing accent */}
      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-purple-500/20 blur-xl"></div>

      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <p className="text-gray-300 leading-relaxed">{content}</p>

      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700"></div>
    </motion.div>
  )
}

export default CardBenefitsComponent
