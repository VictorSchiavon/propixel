import { calculateDiscountPercentage } from "@/app/games/_components/card-game-plans.component";
import plans from "@/config/plans.json";
import { Button } from "@nextui-org/button";
import { Chip, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CardGamePlansComponent } from "./card-game-plans.component";

interface DisplayGame {
    name: string;
    wallpaper: string;
    logo: string;
    price: string;
    discountPrice: string;
    link: string;
    contents: {
        description: string;
        refundType: string;
        developer: string;
        mods: string;
        processador: string;
        platform: string;
    };
}

function getPlans(json: any, chave: string) {
    return json.hasOwnProperty(chave) ? json[chave] : null;
}

interface TabsComponentProps {
    displayGame: DisplayGame;
}

export const TabsComponent: React.FC<TabsComponentProps> = ({ displayGame }) => {
    const [selected, setSelected] = React.useState("general");

    const handleSelectionChange = (key: any) => {
        setSelected(key.toString());
    };

    return (
        <>
            <h1 className="text-3xl font-bold mb-3">{displayGame.name}</h1>
            <Tabs
                aria-label="Game Tabs"
                variant="underlined"
                color="warning"
                selectedKey={selected}
                onSelectionChange={handleSelectionChange}
            >
                <Tab key="general" title="Visão Geral" className="p-0 m-0">
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            {displayGame && (
                                <>
                                    {/* Coluna principal */}
                                    <div className="col-span-1 md:col-span-9 mt-3">
                                        <div
                                            className="bg-cover bg-center p-4 text-white h-[320px] md:h-[620px] rounded-lg flex items-end"
                                            style={{
                                                backgroundImage: `url('${displayGame.wallpaper}')`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        ></div>
                                        <p className="pt-3 text-gray-400 text-sm">{displayGame.contents.description}</p>

                                        {/* Gêneros e Sistemas */}
                                        <div className="pt-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                                            {/* Gêneros */}
                                            <div className="col-span-1 md:col-span-6">
                                                <p className="text-gray-500 text-sm">Sistemas</p>
                                                <div className="pt-2 flex flex-wrap gap-2">
                                                    <Button size="sm">Mods e Plugins</Button>
                                                    <Button size="sm">Modpacks</Button>
                                                    <Button size="sm">Atualização automática</Button>
                                                </div>
                                            </div>

                                            {/* Sistemas */}
                                            <div className="col-span-1 md:col-span-6 md:border-l-2 border-gray-600">
                                                <p className="text-gray-500 text-sm md:pl-4">Informações</p>
                                                <div className="pt-2 flex flex-wrap gap-2 md:pl-4">
                                                    <Button size="sm">Proteção DDoS</Button>
                                                    <Button size="sm">São Paulo</Button>
                                                    <Button size="sm">Multiplataforma</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Coluna lateral */}
                                    <div className="col-span-1 md:col-span-3">
                                        <div className="flex justify-center items-center">
                                            <Image src={displayGame.logo} alt="Logo do jogo" width={200} height={200} />
                                        </div>
                                        <div className="pt-5">
                                            {!displayGame.discountPrice ? (
                                                <p className="text-center">A partir de {displayGame.price}</p>
                                            ) : (
                                                <div className="flex gap-2 justify-center">
                                                    <Chip className="text-white" size="sm" color="warning">
                                                        -{calculateDiscountPercentage(
                                                            parseFloat(displayGame.price.replace("R$", "")),
                                                            parseFloat(displayGame.discountPrice.replace("R$", ""))
                                                        )}
                                                        %
                                                    </Chip>
                                                    <p className="line-through text-xs text-gray-400 pt-1">{displayGame.price}</p>
                                                    <p>{displayGame.discountPrice}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className="pt-3">
                                            <Button
                                                className="text-white bg-orange-400 w-full"
                                                onClick={() => setSelected("plans")}
                                            >
                                                Visualizar planos
                                            </Button>
                                            <a href="https://discord.gg/p8YXcEuKdH" target="_blank" rel="noopener noreferrer">
  <Button className="text-white bg-slate-800 w-full mt-2">Comunidade</Button>
</a>
<a href="/vps" target="_blank" rel="noopener noreferrer">
  <Button className="text-white bg-slate-800 w-full mt-2">VPS</Button>
</a>

                                        </div>
                                        <div className="pt-10">
                                            <div className="flex justify-between text-sm">
                                                <p className="text-gray-400">Tipo de Reembolso:</p>
                                                <p>{displayGame.contents.refundType}</p>
                                            </div>
                                            <div className="flex justify-between pt-3 text-sm">
                                                <p className="text-gray-400">Desenvolvedor:</p>
                                                <p>{displayGame.contents.developer}</p>
                                            </div>
                                            <div className="flex justify-between pt-3 text-sm">
                                                <p className="text-gray-400">Mods:</p>
                                                <p>{displayGame.contents.mods}</p>
                                            </div>
                                            <div className="flex justify-between pt-3 text-sm">
                                                <p className="text-gray-400">Processador:</p>
                                                <p>{displayGame.contents.processador}</p>
                                            </div>
                                            <div className="flex justify-between pt-3 text-sm">
                                                <p className="text-gray-400">Plataforma:</p>
                                                <p>{displayGame.contents.platform}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </section>
                </Tab>

                {/* Tab de planos */}
                <Tab key="plans" title="Planos">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                        {getPlans(plans, displayGame.name.toLowerCase().replace(/\s+/g, ""))?.map(
                            (plan: any, index: number) => (
                                <CardGamePlansComponent
                                    key={index}
                                    title={plan.name}
                                    price={plan.price}
                                    priceDiscount={plan.discountPrice}
                                    link={plan.link}
                                    features={plan.description}
                                    img={plan.img}
                                />
                            )
                        )}
                    </div>
                </Tab>
            </Tabs>
        </>
    );
};
