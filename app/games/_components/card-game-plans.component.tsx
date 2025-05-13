"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@nextui-org/react";

interface CardGameProps {
  img: string;
  name: string;
  price: string;
  priceDiscount: string | null;
  link: string;
}

export function CardGameComponent({ img, name, price, priceDiscount, link }: CardGameProps) {
  return (
    <Card isPressable className="bg-[#0B0E13] border-gray-800 hover:border-orange-500/50 transition-all duration-300">
      <Link href={link}>
        <CardBody className="p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            height={140}
            src={img || "/placeholder.svg"}
            alt={name}
            className="w-full object-cover h-48"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-white">{name}</h3>
            {priceDiscount ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through">{price}</span>
                <span className="text-orange-500 font-bold">{priceDiscount}</span>
              </div>
            ) : (
              <p className="text-orange-500 font-bold">{price}</p>
            )}
          </div>
        </CardBody>
      </Link>
    </Card>
  );
}
