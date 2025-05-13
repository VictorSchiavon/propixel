import Link from "next/link"
import { Server } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A0B0F] border-t border-gray-800/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-sm">
                <Server className="h-5 w-5 text-black" />
              </div>
              <span className="font-bold text-lg">NexusHost</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Hospedagem de servidores de jogos de alta performance com suporte 24/7 e proteção anti-DDoS.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Jogos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/plano/1" className="text-gray-400 hover:text-white">
                  Minecraft
                </Link>
              </li>
              <li>
                <Link href="/plano/4" className="text-gray-400 hover:text-white">
                  GTA V FiveM
                </Link>
              </li>
              <li>
                <Link href="/plano/5" className="text-gray-400 hover:text-white">
                  ARK: Survival Evolved
                </Link>
              </li>
              <li>
                <Link href="/plano/9" className="text-gray-400 hover:text-white">
                  Rust
                </Link>
              </li>
              <li>
                <Link href="/todos-planos" className="text-gray-400 hover:text-white">
                  Ver todos os jogos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-400 hover:text-white">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tutoriais" className="text-gray-400 hover:text-white">
                  Tutoriais
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-400 hover:text-white">
                  Status dos Servidores
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/nexushost" className="text-gray-400 hover:text-white">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="mailto:contato@nexushost.com.br" className="text-gray-400 hover:text-white">
                  contato@nexushost.com.br
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexusHost. Todos os direitos reservados.
          </p>
          <div className="flex space-x-4">
            <Link href="/termos" className="text-gray-400 hover:text-white text-sm">
              Termos
            </Link>
            <Link href="/privacidade" className="text-gray-400 hover:text-white text-sm">
              Privacidade
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
