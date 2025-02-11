import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const FaqSectionComponent = () => {
	// Array containing FAQ questions and answers
	const faqs = [
		{
			title: "Qual é o ping?",
			content:
				"Os servidores da RazeHost oferecem uma média de ping de 20ms em todo o Brasil, proporcionando uma latência mínima e 99,9% de uptime garantido.",
		},
		{
			title: "Qual o tempo de ativação?",
			content:
				"Assim que o pagamento for confirmado, seu plano será ativado de forma automática. Em situações excepcionais, a ativação pode levar até 2 horas para ser concluída.",
		},
		{
			title: "Posso solicitar reembolso?",
			content:
				"Se não ficar satisfeito com os nossos serviços, garantimos a devolução do seu pagamento em até 7 dias após a contratação.",
		},
	];

	return (
		<section className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-[5%]">
			<div className="col-span-1 sm:col-span-4 px-4 sm:px-0">
				<Button variant="bordered" className="rounded-full" size="sm">
					FAQ
				</Button>
				<h1 className="text-2xl sm:text-3xl font-bold pt-3">
					Perguntas frequentes
				</h1>
			</div>
			<div className="col-span-1 sm:col-span-8 px-4 sm:px-0">
				<Accordion>
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							aria-label={`Accordion ${index + 1}`}
							title={faq.title}
						>
							{faq.content}
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};
