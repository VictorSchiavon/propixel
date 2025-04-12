"use client";

import dashboard_footer from "@/public/1.webp";
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/react';
import Image from "next/image";
import Link from "next/link";
import Script from 'next/script';
import { FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const sections = [
    { title: "Servidores", links: [{ name: "VPS Gamer", url: "/vps" }, { name: "VPS FiveM", url: "/fivem" }, { name: "VPS Ryzen", url: "/vpsryzen" }, { name: "Semidedicados", url: "/semidedicados" }, { name: "Servidores Dedicados", url: "/dedicados" }, { name: "VPS Trader", url: "/vps-trader" }] },
    { title: "Recursos", links: [{ name: "Painel de jogos", url: "/painel" }, { name: "Proteção Anti DDoS", url: "/anti-ddos" }, { name: "Afilie-se", url: "#" }] },
    { title: "Jogos", links: [{ name: "Host de FiveM", url: "/game/fivem" }, { name: "Host de Minecraft", url: "/game/minecraft" }, { name: "Host de 7 Days to Die", url: "/game/7daystodie" }, { name: "Host de Project Zomboid", url: "/game/projectzomboid" }, { name: "Host de Palworld", url: "/game/palworld" }, { name: "Outros jogos", url: "/games" }] },
    { title: "Legal", links: [{ name: "Termos e Condições", url: "/termos" }, { name: "Privacidade", url: "/termos" }] },
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
             <section className="container mx-auto max-w-7xl px-4 py-12">
      <Card className="overflow-hidden border-0 bg-[#0E131D] shadow-xl relative">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            {/* Content Side */}
            <div className="flex flex-col justify-center space-y-6 p-6 md:p-8 lg:p-10">
              <div>
                <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-[#4CAF50]">Hospedagem Premium</h2>
                <h3 className="text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
                  Seu sonho, nossa missão!
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-[#FF6B00]" />
                  <span className="text-sm text-slate-300">Minecraft</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-[#FF6B00]" />
                  <span className="text-sm text-slate-300">FiveM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-[#FF6B00]" />
                  <span className="text-sm text-slate-300">VPS</span>
                </div>
              </div>

              <p className="text-pretty text-base text-slate-300">
                Oferecemos uma ampla gama de planos para atender a diversos tipos de projetos, desde hospedagem de
                servidores de Minecraft, FiveM e outros jogos, até VPS para aplicações de sites, bots e soluções
                digitais em geral. Nossas opções escaláveis e econômicas garantem desempenho e confiabilidade.
              </p>

              <div>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-[#FF6B00] text-white transition-all hover:bg-[#FF8C00]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Confira os planos
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                    />
                  </span>
                </Button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative flex items-center justify-center overflow-hidden">
              <div className="relative h-[240px] w-full md:h-[280px] lg:h-[300px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mine2-2ed7yxAZu1bIu3JSRA3mQAPUH26ty6.webp"
                  alt="Mascote RAZE"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center bottom", // Position at the bottom
                    width: "100%",
                    height: "100%", // Use full height of container
                    maxHeight: "100%",
                    transform: "translateY(5%) scale(1.25)", // Larger scale and adjusted position
                  }}
                  width={400}
                  height={400}
                  priority
                />
              </div>
              {/* Natural cutoff with card edge instead of gradient */}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  
            <div className="bg-[#0B0E13] w-full mt-24 text-gray-30 border-t border-t-gray-800 border-b border-b-gray-800">
                <div className="container mx-auto max-w-8xl flex flex-col px-2 py-4 justify-between">
                    <div className="grid grid-cols-2 md:grid-cols-6 py-8">
                        <div className="col-span-2 pt-8 md:pt-2">
                            <h2 className="text-4xl font-bold">PROJETANDO IDEIAS</h2>
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
            <Script id="ahrefs-analytics" src="https://analytics.ahrefs.com/analytics.js" data-key="BnN5UiGRCrViwc2OGU9mjQ" defer={true}></Script>
           <Script id="google-analytics">{`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtag/js?id=G-DRZ3S40SFS';f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','G-DRZ3S40SFS');
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-DRZ3S40SFS');
`}</Script>
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
