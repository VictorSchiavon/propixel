import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Video, Search, ChevronRight } from "lucide-react"
import Link from "next/link"
import { GetStarted } from "@/components/get-started"

export default function BaseConhecimentoPage() {
  const artigos = [
    {
      id: 1,
      title: "Como configurar um servidor de Minecraft",
      category: "Minecraft",
      type: "tutorial",
      excerpt: "Aprenda a configurar seu servidor de Minecraft do zero, incluindo plugins e mods.",
    },
    {
      id: 2,
      title: "Otimizando seu servidor FiveM",
      category: "FiveM",
      type: "tutorial",
      excerpt: "Dicas para melhorar a performance do seu servidor FiveM e reduzir lag.",
    },
    {
      id: 3,
      title: "Configurando backups automáticos",
      category: "Geral",
      type: "tutorial",
      excerpt: "Como configurar backups automáticos para seu servidor de jogos.",
    },
    {
      id: 4,
      title: "Instalando mods no ARK",
      category: "ARK",
      type: "tutorial",
      excerpt: "Guia completo para instalar e gerenciar mods no seu servidor de ARK.",
    },
    {
      id: 5,
      title: "Problemas comuns com servidores de Minecraft",
      category: "Minecraft",
      type: "faq",
      excerpt: "Soluções para os problemas mais comuns em servidores de Minecraft.",
    },
    {
      id: 6,
      title: "Como configurar permissões no seu servidor",
      category: "Geral",
      type: "tutorial",
      excerpt: "Guia para configurar permissões de usuários no seu servidor de jogos.",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "Tutorial: Configurando seu servidor Minecraft",
      category: "Minecraft",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Como instalar mods no servidor ARK",
      category: "ARK",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Otimizando seu servidor FiveM",
      category: "FiveM",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Backup e restauração de servidores",
      category: "Geral",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categorias = [
    { name: "Minecraft", icon: BookOpen, count: 15 },
    { name: "FiveM", icon: BookOpen, count: 12 },
    { name: "ARK", icon: BookOpen, count: 10 },
    { name: "Rust", icon: BookOpen, count: 8 },
    { name: "Valheim", icon: BookOpen, count: 7 },
    { name: "Geral", icon: BookOpen, count: 20 },
  ]

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2">Base de Conhecimento</h1>
            <p className="text-gray-400 mb-8">
              Encontre tutoriais, guias e respostas para suas dúvidas sobre nossos serviços
            </p>

            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">O que você está procurando?</h2>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input
                  placeholder="Pesquisar na base de conhecimento..."
                  className="pl-10 bg-gray-800 border-gray-700 h-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-1">
                <h2 className="text-xl font-bold mb-4">Categorias</h2>
                <div className="space-y-2">
                  {categorias.map((categoria) => (
                    <Link
                      key={categoria.name}
                      href={`/base-conhecimento/categoria/${categoria.name.toLowerCase()}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <categoria.icon className="h-5 w-5 text-yellow-500" />
                        <span>{categoria.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{categoria.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="md:col-span-3">
                <Tabs defaultValue="artigos" className="w-full">
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="artigos" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Artigos
                    </TabsTrigger>
                    <TabsTrigger value="videos" className="flex items-center gap-2">
                      <Video className="h-4 w-4" /> Vídeos
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="artigos">
                    <div className="space-y-4">
                      {artigos.map((artigo) => (
                        <Link
                          key={artigo.id}
                          href={`/base-conhecimento/artigo/${artigo.id}`}
                          className="block p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-medium mb-1 group-hover:text-yellow-500 transition-colors">
                                {artigo.title}
                              </h3>
                              <p className="text-gray-400 text-sm mb-2">{artigo.excerpt}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                                  {artigo.category}
                                </span>
                                <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded">
                                  {artigo.type === "tutorial" ? "Tutorial" : "FAQ"}
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Ver Mais Artigos</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="videos">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {videos.map((video) => (
                        <Link
                          key={video.id}
                          href={`/base-conhecimento/video/${video.id}`}
                          className="block rounded-lg overflow-hidden bg-gray-900 hover:bg-gray-800 transition-colors"
                        >
                          <div className="aspect-video relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="bg-black/50 rounded-full p-3">
                                <Video className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <img
                              src={video.thumbnail || "/placeholder.svg"}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="text-lg font-medium mb-1">{video.title}</h3>
                            <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded">
                              {video.category}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-center">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Ver Mais Vídeos</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <GetStarted />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
