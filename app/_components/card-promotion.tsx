import { X } from "lucide-react";
import { useState } from "react";

export const CardPromotion = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null; // Se não for visível, não renderiza nada

	return (
<div className="fixed opacity-95 flex flex-col bottom-8 left-8 z-10 border border-zinc-800 bg-zinc-900 p-6 rounded-lg w-[270px] md:w-[400px] overflow-hidden">
			<div className="absolute right-1 top-1">
				<button
					onClick={() => setIsVisible(false)}
					className="text-white opacity-55"
				>
					<X size={20} />
				</button>
			</div>
			<div className="flex justify-center">
				<img
					src="banner.webp"
					alt=""
					className="w-[350px] rounded-lg object-contain"
				/>
			</div>
			<div className="mt-4">
				<h3 className="text-center text-amber-500 font-extrabold text-xs md:text-base lg:text-2xl">
					Jogos: Primeira Compra!
				</h3>
				<p className="text-xs opacity-85 mt-4 md:text-sm text-center">
					Aproveite 25 de desconto na sua primeira compra com o cupom
					ESPECIAL25!
				</p>
			</div>
			<div className="text-center mt-10">
			<a href="https://app.razehost.com.br/store" target="_blank" rel="noopener noreferrer">
  <button className="bg-amber-500 px-20 py-4 rounded-xl hover:bg-amber-600 duration-250 font-bold">
    Aproveitar Promoção
  </button>
</a>

			</div>
			<div className="text-center mt-5">
				<p className="opacity-50 text-xs">
					Descubra as promoções exclusivas que temos para você!
				</p>
				<p className="opacity-50 text-xs">
					Quanto mais você aproveita, mais benefícios você ganha!
				</p>
			</div>
		</div>
	);
};
