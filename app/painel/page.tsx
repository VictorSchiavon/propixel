// src/components/Header.js
'use client';

import painel2 from '@/public/painel/ftpfilezilla.png';
import painel from '@/public/painel/painel1.png';
import Image from 'next/image';
import { BiCog, BiShield } from 'react-icons/bi';
import CardBenefitsComponent from './_components/card-benefitis.component';

const benefits = {
    benefits: [
        {
            title: "Configurações personalizadas",
            description: "Suas configurações são geradas sob medida, ajustando-se instantaneamente a qualquer mudança em seus mods, plugins ou servidor.",
            icon: <BiCog size={22} color="white" />
        },
        {
            title: "Backup & Segurança",
            description: "Tenha a tranquilidade de saber que seus mundos e configurações estão seguros. Você pode realizar backups diários em nosso painel.",
            icon: <BiShield size={22} color="white" />
        }
    ]
};

const HeaderPanel = () => {
    return (
        <>
            <section className="container mx-auto max-w-9xl pt-10 flex-grow">

                <div className="pt-[5%]">
                    <h1 className="text-white text-3xl font-bold">RAZEHOST PAINEL</h1>
                    <p className="text-md">
                        Seu arsenal completo para construir e controlar seus servidores de jogos.
                    </p>

                    <Image src={painel} alt="Painel" className="w-full pt-10"/>

                    <section className="pt-5">
                        <div className="flex flex-wrap justify-between space-x-4">
                            {benefits.benefits.map((item, index) => (
                                <CardBenefitsComponent
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    content={item.description}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[10%]">
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl font-bold mb-4">Gerenciador de arquivos</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Tenha o controle total dos seus arquivos de servidor diretamente no seu navegador. Com nossa ferramenta, você pode explorar, editar e mover arquivos com a mesma facilidade que em seu computador.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <Image
                            src={painel2}
                            alt="Gerenciador de arquivos"
                            className="w-full"
                        />
                    </div>
                </div>

                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-[10%] mb-[10%]">
                    <div className="flex justify-center md:justify-end">
                        <Image
                            src={painel2}
                            alt="Backups"
                            className="w-full"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-5xl font-bold mb-4">Backups</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Seus backups de jogo são armazenados em local seguro e redundante, garantindo a proteção dos seus dados. Restaure ou baixe seus backups a qualquer momento com um simples clique.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeaderPanel;
