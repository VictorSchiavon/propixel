"use client";

import dashboard_footer from "@/public/1.webp";
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/react';
import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const sections = [
    { title: "Servidores", links: [{ name: "Servidores VPS", url: "/vps" }, { name: "Semidedicados", url: "/semidedicados" }, { name: "Servidores Dedicados", url: "/dedicados" }] },
    { title: "Recursos", links: [{ name: "Painel de jogos", url: "/painel" }, { name: "Proteção Anti DDoS", url: "/anti-ddos" }, { name: "Afilie-se", url: "#" }] },
    { title: "Integração", links: [{ name: "Documentação", url: "https://docs.raze.host/product-docs" }, { name: "Suporte", url: "https://suporte.razehost.com.br/" }] },
    { title: "Legal", links: [{ name: "Termos e Condições", url: "https://drive.google.com/file/d/1u89J-ACHVAsE8nTUwe9zWOaw06Eaqo16/view" }, { name: "Privacidade", url: "https://drive.google.com/file/d/1u89J-ACHVAsE8nTUwe9zWOaw06Eaqo16/view" }] },
];

const socialMedia = [
    { name: "Facebook", icon: FaFacebook, url: "https://www.facebook.com/razehost" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com/raze.host" },
    { name: "Discord", icon: FaDiscord, url: "https://discord.gg/p8YXcEuKdH" },
    { name: "Youtube", icon: FaYoutube, url: "https://twitter.com/RazeHost/" },
];

const Footer = () => {
    return (
        <>
            <section className="container mx-auto max-w-8xl px-5 pt-10 flex-grow">
                <Card className="bg-[#0E131D] rounded-sm">
                    <CardBody className="p-0">
                        <div className="grid h-full gap-12 px-4 sm:px-6 md:grid-cols-2">
                            <div className="flex flex-col items-center justify-between gap-6 px-4 py-8 md:items-start">
                                <h3 className="font-bold text-3xl">Seu sonho, nossa missão!</h3>
                                <p className="text-gray-300 text-[15px] pt-4 pb-4">
                                    Oferecemos uma ampla gama de planos para atender a diversos tipos de projetos, desde hospedagem de servidores de Minecraft, FiveM e outros jogos, até VPS para aplicações de sites, bots e soluções digitais em geral. Nossas opções escaláveis e econômicas garantem desempenho e confiabilidade, atendendo tanto a pequenas iniciativas quanto a grandes demandas de infraestrutura
                                </p>
                                <Button className='bg-orange-400 text-white rounded-md px-8 py-4'>Confira os planos</Button>
                            </div>
                            <div className="relative h-full max-h-80 w-full max-w-[512px] place-self-center justify-self-end max-md:hidden lg:mr-4">
                                <Image src={dashboard_footer} alt="Dashboard" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent' }} />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </section>
            <div className="bg-[#0B0E13] w-full mt-24 text-gray-30 border-t border-t-gray-800 border-b border-b-gray-800">
                <div className="container mx-auto max-w-8xl flex flex-col px-2 py-4 justify-between">
                    <div className="grid grid-cols-2 md:grid-cols-6 py-8">
                        <div className="col-span-2 pt-8 md:pt-2">
                            <h1 className="text-4xl font-bold">PROJETANDO IDEIAS</h1>
                            <p>Feito com ❤️ no Brasil</p>
                        </div>
                        {sections.map((section, index) => (
                            <div key={index}>
                                <h6 className="font-bold capitalize pt-2 text-white pb-3">{section.title}</h6>
                                <ul>
                                    {section.links.map((link, i) => (
                                        <li key={i} className="py-1 text-white hover:text-orange-400 text-sm pt-2">
                                            <Link href={link.url}>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-8xl flex flex-col px-2 py-4 justify-between sm:flex-row">
                <p className="py-4 text-sm">RazeHost <br /> CNPJ: 41.460.733/0001-96</p>
                <div className="flex justify-between sm:w-[150px] pt-4 text-lg">
                    {socialMedia.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                <Icon className="hover:text-orange-400" />
                            </a>
                        );
                    })}
                </div>
            </div>
            <Script id="intercom">{`
                window.intercomSettings = {
                    api_base: "https://api-iam.intercom.io",
                    app_id: "sephaq3d",
                };
            `}</Script>
            <Script id="intercom2">{`
                (function(){
                    var w=window;var ic=w.Intercom;if(typeof ic==="function"){
                        ic('reattach_activator');
                        ic('update',w.intercomSettings);
                    }else{
                        var d=document;var i=function(){i.c(arguments);};i.q=[];
                        i.c=function(args){i.q.push(args);};w.Intercom=i;
                        var l=function(){
                            var s=d.createElement('script');s.type='text/javascript';s.async=true;
                            s.src='https://widget.intercom.io/widget/sephaq3d';
                            var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
                        };
                        if(document.readyState==='complete'){l();}
                        else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}
                    }
                })();
            `}</Script>
        </>
    );
};

export default Footer;
