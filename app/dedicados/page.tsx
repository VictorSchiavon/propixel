'use client'

import { Accordion, AccordionItem, Badge, Card, CardBody, Chip, Slider } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import amd_logo from "@/public/amd-logo.webp"
import intel_logo from "@/public/intel-logo.webp"; // Ajuste o caminho/nome conforme sua imagem
import Image from "next/image";
import { ArrowDownToDot, ArrowUpFromDot, Cpu, HardDrive, MemoryStick, Network, Star } from "lucide-react";

// Array de planos AMD Ryzen (original, sem alterações)
const planosAMD = [
    {
      "nome": "AMD Ryzen 5 5600X",
      "frequencia": "3.7GHz até 4.6GHz",
      "disponibilidade": false,
      "preco": 800.00,
      "nucleos": 6,
      "threads": 12,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "6 Núcleos", "descricao": "12 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "1TB DE SSD NVME" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "64GB DE RAM", "descricao": "DDR4" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    },
    {
      "nome": "AMD Ryzen 7 7700X",
      "frequencia": "4.5GHz até 5.4GHz",
      "disponibilidade": true,
      "preco": 1500.00,
      "nucleos": 8,
      "threads": 16,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "8 Núcleos", "descricao": "16 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "2TB DE SSD NVME" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "128GB DE RAM", "descricao": "DDR5" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    },
    {
      "nome": "AMD Ryzen 9 7900X",
      "frequencia": "4.7GHz até 5.6GHz",
      "disponibilidade": true,
      "preco": 1650.00,
      "nucleos": 12,
      "threads": 24,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "12 Núcleos", "descricao": "24 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "2TB DE SSD NVME" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "128GB DE RAM", "descricao": "DDR5" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    },
    {
      "nome": "AMD Ryzen 9 5900X",
      "frequencia": "3.7GHz até 4.8GHz",
      "disponibilidade": true,
      "preco": 1200.00,
      "nucleos": 12,
      "threads": 24,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "12 Núcleos", "descricao": "24 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "2TB DE SSD NVME M.2" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "128GB DE RAM", "descricao": "DDR4" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    },
    {
      "nome": "AMD Ryzen 7 5800X",
      "frequencia": "3.8GHz até 4.7GHz",
      "disponibilidade": true,
      "preco": 1100.00,
      "nucleos": 8,
      "threads": 16,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "8 Núcleos", "descricao": "16 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "2TB DE SSD NVME" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "128GB DE RAM", "descricao": "DDR4" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    }
];

// Novo array de planos Intel Xeon (exemplo padrão)
const planosXeon = [
    {
      "nome": "Intel Xeon E5-2680 v4",
      "frequencia": "2.4GHz até 3.3GHz",
      "disponibilidade": true,
      "preco": 729.90,
      "nucleos": 14,
      "threads": 28,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "14 Núcleos", "descricao": "28 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "1TB DE SSD" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "128GB DE RAM", "descricao": "DDR4" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    },
    {
      "nome": "Intel Xeon E5-2680 v4",
      "frequencia": "2.4GHz até 3.3GHz",
      "disponibilidade": true,
      "preco": 829.90,
      "nucleos": 14,
      "threads": 28,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "14 Núcleos", "descricao": "28 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "1TB DE SSD NVME" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "128GB DE RAM", "descricao": "DDR4" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    },
    {
      "nome": "Intel Xeon E5-2680 v4",
      "frequencia": "2.4GHz até 3.3GHz",
      "disponibilidade": true,
      "preco": 1290.90,
      "nucleos": 14,
      "threads": 28,
      "icons": [
        { "icone": <Cpu size={30} />, "titulo": "14 Núcleos", "descricao": "28 Threads" },
        { "icone": <HardDrive size={30} />, "titulo": "Armazenamento", "descricao": "2TB DE SSD NVME" },
        { "icone": <Network size={30} />, "titulo": "Rede", "descricao": "1GBPS UPLINK" },
        { "icone": <MemoryStick size={30} />, "titulo": "256GB DE RAM", "descricao": "DDR4" },
        { "icone": <ArrowUpFromDot size={30} />, "titulo": "Inputstream", "descricao": "20Tb Incluso" },
        { "icone": <ArrowDownToDot size={30} />, "titulo": "Outputstream", "descricao": "20Tb Incluso" }
      ]
    }
];

export default function Games() {
    const [ram, setRam] = useState(16)
    const [nucleos, setNucleos] = useState([8])
    // Novo estado para controlar o tipo de plano exibido
    const [tipoPlano, setTipoPlano] = useState("AMD");

    const handlerRam = (e: any) => {
        setRam(e)
    }

    const handlerNucleos = (e: any) => {
        setNucleos(e)
    }

    // Função para alternar entre AMD e Xeon
    const planosExibidos = tipoPlano === "AMD" ? planosAMD : planosXeon;

    const defaultContent =
        "Os servidores da RazeHost oferecem uma média de ping de 20ms em todo o Brasil, proporcionando uma latência mínima e 99,9% de uptime garantido.";

    return (
        <section className="container mx-auto px-6 flex-grow pt-[2%]">
            <section>
                <h1 className="text-2xl text-gray-400 font-semibold">Confira configurações <br /> baremetal disponível na RazeHost. <br /> Outras configurações podem ser encontradas, valores podem possuir descontos.</h1>

                {/* Adição dos botões para alternar entre AMD e Xeon */}
                <div className="pt-5 flex gap-4">
                    <Button 
                        className={`w-44 ${tipoPlano === "AMD" ? "bg-orange-400 text-white" : "bg-gray-200 text-black"} font-bold`}
                        onClick={() => setTipoPlano("AMD")}
                    >
                        Planos AMD Ryzen
                    </Button>
                    <Button 
                        className={`w-44 ${tipoPlano === "Xeon" ? "bg-orange-400 text-white" : "bg-gray-200 text-black"} font-bold`}
                        onClick={() => setTipoPlano("Xeon")}
                    >
                        Planos Intel Xeon
                    </Button>
                </div>

                <section className="pt-10">
                    <div>
                    {planosExibidos.map((plano, index) => (
    <Card key={index} className="bg-transparent mt-10">
        <CardBody>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 p-5 pt-10 pb-10">
                <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center">
                    <Image 
                        src={tipoPlano === "AMD" ? amd_logo : intel_logo} 
                        alt={tipoPlano === "AMD" ? "amd-logo" : "intel-logo"} 
                    />
                    <p className="pt-3 text-center text-gray-700 font-bold">{plano.nome}</p>
                    <p className="text-center pt-4 text-sm text-gray-400">{plano.frequencia}</p>
                    <Chip size="lg" className="mt-5 font-bold text-green-600" variant="flat" color="success">
                        {plano.disponibilidade ? 'Disponível' : 'Indisponível'}
                    </Chip>
                </div>
                                        <div className="col-span-1 sm:col-span-2 md:col-span-6 flex-col items-center justify-center pt-5">
                                            <div className="grid grid-cols-3 gap-12">
                                                {plano.icons.map((cpu, index) => (
                                                    <div key={index} className="flex flex-col items-center justify-center gap-4">
                                                        <div className="flex items-center justify-center">
                                                            {cpu.icone}
                                                        </div>
                                                        <div className="text-center">
                                                            <h1 className="text-xl font-bold">{cpu.titulo}</h1>
                                                            <p className="text-sm">{cpu.descricao}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center">
                                            <h4 className="text-3xl font-bold">
                                                R$ {plano.preco} <span className="text-sm">/mês</span>
                                            </h4>
                                            <a href="https://wa.me/5511968927685?text=Gostaria%20de%20saber%20sobre%20dedicados" target="_blank" rel="noopener noreferrer">
                                                <Button className="text-white bg-orange-400 w-[200px] mt-3 font-bold">
                                                    <Star /> Verificar disponíbilidade
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </section>
            </section>

            <section className="pt-[5%]">
                <div>
                    <h1 className="text-5xl font-bold pt-2">
                        Preço acessível e sem surpresas
                    </h1>
                    <p className="text-muted pt-2 pb-2">
                        Escolha o plano ideal para seu negócio e evolua conforme suas necessidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-5">
                    <div>
                        <div className="pt-5">
                            <Slider value={ram} maxValue={100} minValue={0} step={1} onChange={handlerRam} color="warning" />
                        </div>
                        <div className="pt-4 gap-4">
                            <div>
                                <p className="font-bold text-xl">RAM</p>
                                <h1 className="text-5xl font-bold pt-1">{ram} GB</h1>
                            </div>
                            <div>
                                <p className="text-gray-400 font-bold text-sm pt-3"> As aplicações usam memória porque algumas são maiores, lidam com mais informações ou usam recursos extras, como bibliotecas adicionais.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="pt-5">
                            <Slider value={nucleos} maxValue={100} minValue={0} step={1} onChange={handlerNucleos} color="warning" />
                        </div>
                        <div className="pt-4 gap-4">
                            <div>
                                <p className="font-bold text-xl">Núcleos</p>
                                <h1 className="text-5xl font-bold pt-1">{nucleos} GB</h1>
                            </div>
                            <div>
                                <p className="text-gray-400 font-bold text-sm pt-3"> As aplicações usam memória porque algumas são maiores, lidam com mais informações ou usam recursos extras, como bibliotecas adicionais.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <center>
                    <div className="pt-5">
                        <a href="https://wa.me/5511968927685?text=Gostaria%20de%20saber%20sobre%20dedicados" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-orange-400 text-white font-bold w-44">
                                Entrar em contato
                            </Button>
                        </a>
                    </div>
                </center>
            </section>

            <section className="grid grid-cols-12 gap-6 pt-[5%]">
                <div className="col-span-4">
                    <Button variant="bordered" className="rounded-full" size="sm">FAQ</Button>
                    <h1 className="text-3xl font-bold pt-3">Perguntas frequentes</h1>
                </div>
                <div className="col-span-8">
                    <Accordion>
                        <AccordionItem key="1" aria-label="Ping" subtitle="Pressione" title="Ping">
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Uptime"
                            subtitle={
                                <span>
                                    Pressione
                                </span>
                            }
                            title="Uptime"
                        >
                            {defaultContent}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Datacenter" subtitle="Pressione" title="Datacenter">
                            {defaultContent}
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </section>
    );
}