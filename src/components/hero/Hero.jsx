import React from "react";
import bgone from "@/images/herobg1.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgone})` }}
      className="lg:pt-[253px] py-20 lg:pb-[140px] bg-cover bg-no-repeat"
    >
      <div className="container mx-auto">
        <div data-aos="zoom-in">
          <div className=" w-full">
            <h1 className="hero__title">
              Energiya iste'moli harajatlarni qisqartirish, chiqindi gazlarni
              kamaytirish hamda barqaror rivojlanish uchun innovatsion yechimlar
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
