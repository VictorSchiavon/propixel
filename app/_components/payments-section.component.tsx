import pix_icon from "@/public/icons/pix.png"
import visa_icon from "@/public/icons/visa.webp"
import mastercard_icon from "@/public/icons/mastercard.webp"
import picpay_icon from "@/public/icons/picpay.png"
import paypal_icon from "@/public/icons/paypal.webp"
import mercadopago_icon from "@/public/icons/mercadopago.png"
import Image from 'next/image'
import { Button } from "@nextui-org/button"

export const PaymentsSectionsComponent = () => {
    return (
        <>
            <section className="flex flex-col lg:flex-row pt-[5%] mb-[5%] justify-between gap-4">
                <div className="text-center lg:text-left">
                    <Button variant="bordered" className="rounded-full" size="sm">
                        Métodos de pagamento
                    </Button>
                    <h1 className="text-3xl font-bold pt-3">Nós aceitamos</h1>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <div className="mt-5">
                        <div className="h-16 w-16 bg-[#0D0F1F] rounded-md">
                            <Image src={pix_icon} alt="pix_icon" className="w-full object-cover pt-3" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="h-16 w-16 bg-[#0D0F1F] rounded-md">
                            <Image src={visa_icon} alt="pix_icon" className="w-full object-cover pt-3" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="h-16 w-16 bg-[#0D0F1F] rounded-md">
                            <Image src={mastercard_icon} alt="pix_icon" className="w-full object-cover pt-3" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="h-16 w-16 bg-[#0D0F1F] rounded-md">
                            <Image src={picpay_icon} alt="pix_icon" className="w-full object-cover pt-3" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="h-16 w-16 bg-[#0D0F1F] rounded-md">
                            <Image src={paypal_icon} alt="pix_icon" className="w-full object-cover pt-3" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="h-16 w-16 bg-[#0D0F1F] rounded-md">
                            <Image src={mercadopago_icon} alt="pix_icon" className="w-full object-cover pt-3" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}