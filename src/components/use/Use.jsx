import React from "react";

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
  return (
    <section className="overflow-x-hidden">
      <div className="container mx-auto max-w-[1385px] px-5">
        <h2 className="text-3xl text-center mb-4 dark:text-white">
          Bizning afzaliklarimiz
        </h2>
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 mb-20">
          <div className="py-4 bg-[#D9D9D9] flex items-center justify-center px-0">
            <p className="text__use">Tajriba va ishonch</p>
          </div>
          <div className="py-4 bg-[#D9D9D9] flex items-center justify-center px-0">
            <p className="text__use">Sifat</p>
          </div>
          <div className="py-4 bg-[#D9D9D9] flex items-center justify-center px-0">
            <p className="text__use">Malakali mutaxassislar</p>
          </div>
          <div className="py-4 bg-[#D9D9D9] flex items-center justify-center px-0">
            <p className="text__use">O’lchov asboblari majmuasi</p>
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
                slidesPerView: 2, // Kichik ekranlarda bir slayd
                spaceBetween: 10, // Har bir slayd orasidagi masofa
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
