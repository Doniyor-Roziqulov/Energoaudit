import React, { useState } from "react";

import logo1 from "@/images/midea.png";
import logo2 from "@/images/tdtu.png";
import logo3 from "@/images/welkin.png";
import logo4 from "@/images/green.png";
import logo5 from "@/images/sugar.png";
import logo6 from "@/images/akfa.png";
import logo7 from "@/images/logo7.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Use = () => {
  const [openState1, setOpenState1] = useState(false);
  const [openState2, setOpenState2] = useState(false);
  const [openState3, setOpenState3] = useState(false);
  const [openState4, setOpenState4] = useState(false);

  return (
    <section className="overflow-x-hidden pb-20">
      <div className="container mx-auto max-w-[1385px] px-5">
        <h2 className="text-3xl text-center mb-8 dark:text-white">
          Bizning afzaliklarimiz
        </h2>
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 mb-20">
          <button
            onClick={() => setOpenState1(!openState1)}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Tajriba va ishonch</p>
            <div
              className={`absolute border-2 z-50 rounded-2xl dark:bg-neutral-800 px-2 transition-all py-6 bg-[#d6f5ffe2] border-y-black ${
                openState1
                  ? "z-20 top-[134px] opacity-100"
                  : "z-0 opacity-0 top-[-20px]"
              }`}
            >
              <p className="dark:text-white">
                • Energiya va energoaudit sohasida tajriba va ishonch juda muhim
                omillar hisoblanadi. Ushbu sohalar aniq hisob-kitoblar,
                samaradorlik tahlillari va muammolarni hal qilishni talab
                qiladigan murakkab texnologik jarayonlarni o‘z ichiga oladi.
                Tajriba va ishonch bu jarayonlarda yuqori natijalarga erishish
                uchun asosiy poydevor hisoblanadi.
              </p>
            </div>
          </button>
          <button
            onClick={() => setOpenState2(!openState2)}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Sifat</p>
            <div
              className={`absolute border-2 z-50 rounded-2xl dark:bg-neutral-800 px-2 transition-all py-6 bg-[#d6f5ffe2] border-y-black ${
                openState2
                  ? "z-20 top-[134px] opacity-100"
                  : "z-0 opacity-0 top-[-20px]"
              }`}
            >
              <p className="dark:text-white">
                • Sifat — bu mahsulot, xizmat yoki jarayonning belgilangan talab
                va ehtiyojlarga muvofiqligini tavsiflovchi asosiy xususiyatdir.
                Bu tushuncha turli sohalarda turli ma'nolarni anglatishi mumkin,
                lekin ularning barchasida sifatlilik yuqori darajada qoniqarli
                bo'lishni anglatadi.
              </p>
            </div>
          </button>
          <button
            onClick={() => setOpenState3(!openState3)}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Malakali mutaxassislar</p>
            <div
              className={`absolute border-2 z-50 rounded-2xl dark:bg-neutral-800 px-2 transition-all py-6 bg-[#d6f5ffe2] border-y-black ${
                openState3
                  ? "z-20 top-[134px] opacity-100"
                  : "z-0 opacity-0 top-[-20px]"
              }`}
            >
              <p className="dark:text-white">
                • Malakali mutaxassislar - bu o‘z sohasida chuqur bilim va
                tajribaga ega bo‘lgan, aniq maqsadlar va yuqori sifatli
                natijalarga erishishni ta'minlaydigan professional kadrlar
                hisoblanadi. Energiya va energoaudit sohasida malakali
                mutaxassislarning o‘rni juda muhimdir.
              </p>
            </div>
          </button>
          <button
            onClick={() => setOpenState4(!openState4)}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">O’lchov asboblari majmuasi</p>
            <div
              className={`absolute border-2 z-50 rounded-2xl dark:bg-neutral-800 px-2 transition-all py-6 bg-[#d6f5ffe2] border-y-black ${
                openState4
                  ? "z-20 top-[134px] opacity-100"
                  : "z-0 opacity-0 top-[-20px]"
              }`}
            >
              <p className="dark:text-white">
                • Energiya va energoaudit sohasida o‘lchov asboblari majmuasi
                asosan ob'ektning energiya sarfi, samaradorligi va atrof-muhitga
                ta'sirini aniqlash uchun zarur bo‘lgan texnologik vositalarni
                anglatadi. Ushbu asboblar aniq o‘lchovlar va tahlillar uchun
                asosiy vositalar bo‘lib xizmat qiladi.
              </p>
            </div>
          </button>
        </div>
        <div
          className="flex items-center py-8 lg:py-0 flex-col sm:flex-row overflow-x-hidden flex-wrap
         gap-y-2 justify-between pb-6"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-[200px]  object-contain"
                  src={logo1}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-[200px]  object-contain"
                  src={logo2}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" flex items-center justify-center">
                <img
                  className="pt-6 w-[200px] h-[200px] object-contain"
                  src={logo3}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-[200px]  object-contain"
                  src={logo4}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-[200px]  object-contain"
                  src={logo5}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-[200px]  object-contain"
                  src={logo6}
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  className="w-[200px] h-[200px]  object-contain"
                  src={logo7}
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Use;
