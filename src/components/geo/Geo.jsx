import React, { useEffect } from "react";
import geo1 from "@/images/geo1.png";
import geo2 from "@/images/geo2.png";
import geo3 from "@/images/geo3.png";
import geo4 from "@/images/geo4.png";
import geo5 from "@/images/geo5.png";
import geo6 from "@/images/geo6.png";

const Geo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-7">
      <div className="container mx-auto max-w-[1240px] px-4 lg:px-0">
        <div className="dark:text-white">
          <div className="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 pb-[60px] border-b border-black dark:border-white">
            <img src={geo1} alt="" />
            <p className="lg:text-2xl">
              1. Geo treat 1000. (Katalog) Plastik harorati 180 °C dan yuqori
              bo‘lgan geotermal suv quduqlari uchun, xususan, geotermal elektr
              stansiyalarida ishlatish uchun ishlab chiqilgan, suvning yuqori
              darajadagi qattiqlik, silikatlar va sulfatlar miqdorida ham
              samarali ishlovchi, hatto kichik dozalarida ham yuqori
              xususiyatlarga ega, qurum (nakip) hosil bo‘lishining oldini
              oluvchi mahsulot.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 pb-[60px] border-b border-black dark:border-white pt-10">
            <p className="lg:text-2xl">
              2. MET-TREAT. Metall yuzasiga kimyoviy ishlov beruvchi mahsulot.
              (Katalog) Konservatsiyalovchi moylar — bu mineral moylar va
              eritgichlar asosida tayyorlangan mahsulot bo‘lib, ular himoya
              muddati va qo‘llash sharoitiga qarab, metall yuzasida maxsus
              qoplamali qatlam hosil qiladi.
            </p>
            <img src={geo2} alt="" />
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 pb-[60px] border-b border-black dark:border-white pt-10">
            <img src={geo3} alt="" />
            <p className="lg:text-2xl">
              3. Mine TREAT Tog‘-kon texnologiyalari. Pomol va maydalashni
              jadallashtiruvchi moddalar. Pomol va maydalash intensifikatorlari
              maydalash va pomol tsikllarini optimallashtirishga yordam beradi.
              Mahsulot reologiya modifikatorlari, aminlar va dispersatorlarni
              o‘z ichiga olib, pomol samaradorligini oshirishga ko‘maklashadi
            </p>
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 pb-[60px] border-b border-black dark:border-white pt-10">
            <p className="lg:text-2xl">
              4. OIL TREAT. Neft-gaz sanoati maxsulotlari. Neft va gaz qazib
              olish uchun kimyoviy reagentlar qazib olish hajmini va
              uglevodorodlarni umumiy chiqarishni oshirishga yordam beradi,
              moddalarning oquvchanligini taʼminlaydi va yaxlitligini saqlab
              qoladi
            </p>
            <img src={geo4} alt="" />
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 pb-[60px] border-b border-black dark:border-white pt-10">
            <img src={geo5} alt="" />
            <p className="lg:text-2xl">
               5.Waste TREAT. Oqava suvlarni tozalash texnologiyalari. Oqova
              suvlarni tozalash uchun organik koagulyantlar — suvdagi suzuvchi
              moddalar miqdorini kamaytirish uchun maxsus ishlab chiqilgan
              yuqori samarador organik koagulyantlar qatoridir.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row items-center gap-x-10 pb-[60px] border-b border-black dark:border-white pt-10">
            <p className="lg:text-2xl">
               6.Wet TREAT. Qozon suvini tozalash  Qozonning ishlash muddatini
              uzaytirish, texnik xizmat ko'rsatish xarajatlarini
              minimallashtirish, rejadan tashqari uzilishlarning oldini olish va
              qozon samaradorligini oshirish uchun to'g'ri kimyodan foydalanish
              juda muhimdir
            </p>
            <img src={geo6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Geo;
