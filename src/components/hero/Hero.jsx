import React from "react";
import bgone from "@/images/hero1.png";
import bgtwo from "@/images/heroimg2.png";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgone})` }}
      className=" bg-cover bg-no-repeat"
    >
      <div
        style={{ backgroundImage: `url(${bgtwo})` }}
        className="container bg-no-repeat bg-contain hero__box mx-auto lg:pt-[253px] lg:px-5 py-20 lg:pb-[200px]"
      >
        <div data-aos="zoom-in">
          <div className=" w-full">
            <h1 className="hero__title dark:text-black">
              Energiya iste'moli harajatlarni qisqartirish, <br /> chiqindi
              gazlarni kamaytirish hamda barqaror rivojlanish uchun innovatsion
              yechimlar
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
