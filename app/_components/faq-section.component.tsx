import { Button } from "@nextui-org/button";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const FaqSectionComponent = () => {

    // Array containing FAQ questions and answers
    const faqs = [
        {
            title: "O que é Lorem Ipsum?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "Como posso usar o Lorem Ipsum?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "Qual é o propósito do Lorem Ipsum?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "O Lorem Ipsum é seguro para uso?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            title: "Quais são as alternativas ao Lorem Ipsum?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

    return (
        <section className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-[5%]">
            <div className="col-span-1 sm:col-span-4 px-4 sm:px-0">
                <Button variant="bordered" className="rounded-full" size="sm">FAQ</Button>
                <h1 className="text-2xl sm:text-3xl font-bold pt-3">Perguntas frequentes</h1>
            </div>
            <div className="col-span-1 sm:col-span-8 px-4 sm:px-0">
                <Accordion>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={faq.title}>
                            {faq.content}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
