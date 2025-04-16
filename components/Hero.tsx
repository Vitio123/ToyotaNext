"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
export default function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Tu próximo Toyota, a solo un clic</h1>

        <p className="hero__subtitle">
          Reserva, alquila o encuentra el modelo ideal con una experiencia ágil,
          segura y 100% digital.
        </p>

        <CustomButton
          title="Explorar Autos"
          containerStyles="bg-[#EA0B1E]
         text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}
