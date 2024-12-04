import React, { useState } from "react";

import logo1 from "@/images/logo1.png";
import logo2 from "@/images/logo2.png";
import logo3 from "@/images/logo3.png";
import logo4 from "@/images/logo4.png";
import logo5 from "@/images/logo5.png";
import logo6 from "@/images/logo6.png";
import logo7 from "@/images/logo7.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Use = () => {
  const [openState, setOpenState] = useState({
    open0: false,
    open1: false,
    open2: false,
    open3: false,
  });

  const handleClick = (key) => {
    setOpenState((prevState) => ({
      open0: false,
      open1: false,
      open2: false,
      open3: false,
      [key]: !prevState[key],
    }));
  };
  return (
    <section className="overflow-x-hidden pb-9">
      <div className="container mx-auto max-w-[1385px] px-5">
        <h2 className="text-3xl text-center mb-4 dark:text-white">
          Bizning afzaliklarimiz
        </h2>
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 mb-20">
          <div
            onClick={() => handleClick("open0")}
            className="py-3 bg-[#D9D9D9] hover:bg-[#696969] hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Tajriba va ishonch</p>
            <div
              className={`absolute border-2 z-50 dark:bg-neutral-800 px-2 transition-all py-3 bg-neutral-100 ${
                openState.open0
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
          </div>
          <div
            onClick={() => handleClick("open1")}
            className="py-3 bg-[#D9D9D9] hover:bg-[#696969] hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Sifat</p>
            <div
              className={`absolute border-2 z-50 dark:bg-neutral-800 px-2 transition-all py-3 bg-neutral-100 ${
                openState.open1
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
          </div>
          <div
            onClick={() => handleClick("open2")}
            className="py-3 bg-[#D9D9D9] hover:bg-[#696969] hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Malakali mutaxassislar</p>
            <div
              className={`absolute border-2 z-50 dark:bg-neutral-800 px-2 transition-all py-3 bg-neutral-100 ${
                openState.open2
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
          </div>
          <div
            onClick={() => handleClick("open3")}
            className="py-3 bg-[#D9D9D9] hover:bg-[#696969] hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">O’lchov asboblari majmuasi</p>
            <div
              className={`absolute border-2 z-50 dark:bg-neutral-800 px-2 transition-all py-3 bg-neutral-100 ${
                openState.open3
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
          </div>
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
                <img src={logo1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img src={logo2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center h-full justify-center">
                <img className="pt-6" src={logo3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img src={logo4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img src={logo5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img src={logo6} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img src={logo7} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Use;
