import React, { useEffect } from "react";
import img from "@/images/image.png";

const Calculyator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="overflow-x-hidden py-8">
      <div className="container max-w-[1240px] mx-auto px-5">
        <div className="flex gap-x-[198px]">
          <div className="w-[724px]">
            <p className="lg:text-xl dark:text-white">
              Energiya auditi– O‘zbekiston respublikasining 2024-yil
              7-avgustdagi 940-sonli “Energiyani tejash, undan oqilona
              foydalanish va energiya samaradorligini oshirish to‘g‘risida” gi
              qonunni (lex.uz silka) hamda   vazirlar mahkamasining 2024-yil 19
              oktyabrdagi 690-sonli “Yoqilg‘i-Energetika resurslari
              isteʼmolchilarini hamda bino va inshooatlarni energiya isteʼmolini
              energiya auditdan o‘tkazish tartiiblarini belgtlash
              tog‘risidagi”   qaroriga asosan o‘tkaziladi.
              <br />
              Mazkur, 940-sonli qonuning 3-moddasiga ko’ra yiliga besh yuz hamda
              undan ortiq tonna shartliyoqilg‘ini va (yoki) ikki yuz ellik va
              undan ortiq tonna motor yoqilg‘isini iste’mol qiladigan yuridik
              shaxslar Davlat energetika reyestriga kiritilgan subyektlar
              hisoblanadi. Shu qonuning 16-moddasiga ko’ra Energiyaauditi
              majburiy va ixtiyoriy tarzda tashkil etililib, Davlat energetika
              reyestriga kiritilgan subyektlarda Majburiy energiya auditi
              o’tkaziliadi. <br />   Yoqilg‘i-energetika resurslari
              iste’molchilarining energiya auditi O‘zbekiston Respublikasi
              Vazirlar Mahkamasi tomonidan belgilangan tartibda o‘tkaziladi.
              Energetiktekshiruv (energoaudit) bajariladigan korxonalar ro’yxati
            </p>
          </div>
          <div className="w-[275px]">
            <img className="w-[275px]" src={img} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculyator;
