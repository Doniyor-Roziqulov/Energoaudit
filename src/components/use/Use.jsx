import React, { useState } from "react";
import { Button, Modal } from "antd";

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
  const [openState, setOpenState] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleToggle = (key) => {
    setOpenState((prevState) => {
      const newState = { 1: false, 2: false, 3: false, 4: false };
      newState[key] = !prevState[key];
      return newState;
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const showModal4 = () => {
    setIsModalOpen4(true);
  };
  const handleOk4 = () => {
    setIsModalOpen4(false);
  };
  const handleCancel4 = () => {
    setIsModalOpen4(false);
  };

  return (
    <section className="overflow-x-hidden pb-20">
      <div className="container mx-auto max-w-[1385px] px-5">
        <h2 className="text-3xl text-center mb-8 dark:text-white">
          Bizning afzaliklarimiz
        </h2>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 mb-20">
          <button
            onClick={showModal}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Tajriba va ishonch</p>
          </button>
          <Modal
            title="Tajriba va ishonch"
            open={isModalOpen}
            onOk={handleOk}
            footer={null}
            onCancel={handleCancel}
          >
            <p className="">
              • Energiya va energoaudit sohasida tajriba va ishonch juda muhim
              omillar hisoblanadi. Ushbu sohalar aniq hisob-kitoblar,
              samaradorlik tahlillari va muammolarni hal qilishni talab
              qiladigan murakkab texnologik jarayonlarni o‘z ichiga oladi.
              Tajriba va ishonch bu jarayonlarda yuqori natijalarga erishish
              uchun asosiy poydevor hisoblanadi.
            </p>
          </Modal>
          <button
            onClick={showModal2}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Sifat</p>
          </button>{" "}
          <Modal
            title="Sifat"
            open={isModalOpen2}
            onOk={handleOk2}
            footer={null}
            onCancel={handleCancel2}
          >
            <p className="">
              • Sifat — bu mahsulot, xizmat yoki jarayonning belgilangan talab
              va ehtiyojlarga muvofiqligini tavsiflovchi asosiy xususiyatdir. Bu
              tushuncha turli sohalarda turli ma'nolarni anglatishi mumkin,
              lekin ularning barchasida sifatlilik yuqori darajada qoniqarli
              bo'lishni anglatadi.
            </p>
          </Modal>
          <button
            onClick={showModal3}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">Malakali mutaxassislar</p>
          </button>
          <Modal
            title="Malakali mutaxassislar"
            open={isModalOpen3}
            onOk={handleOk3}
            footer={null}
            onCancel={handleCancel3}
          >
            <p className="">
              • Malakali mutaxassislar - bu o‘z sohasida chuqur bilim va
              tajribaga ega bo‘lgan, aniq maqsadlar va yuqori sifatli
              natijalarga erishishni ta'minlaydigan professional kadrlar
              hisoblanadi. Energiya va energoaudit sohasida malakali
              mutaxassislarning o‘rni juda muhimdir.
            </p>
          </Modal>
          <button
            onClick={showModal4}
            className="py-3 bg-[#fff] hover:bg-[#0A9642] use__box hover:scale-105 hover:z-20 relative cursor-pointer flex items-center justify-center px-0"
          >
            <p className="text__use">O’lchov asboblari majmuasi</p>
          </button>
          <Modal
            title="O‘lchov asboblari majmuasi"
            open={isModalOpen4}
            onOk={handleOk4}
            footer={null}
            onCancel={handleCancel4}
          >
            <p className="">
              • Energiya va energoaudit sohasida o‘lchov asboblari majmuasi
              asosan ob'ektning energiya sarfi, samaradorligi va atrof-muhitga
              ta'sirini aniqlash uchun zarur bo‘lgan texnologik vositalarni
              anglatadi. Ushbu asboblar aniq o‘lchovlar va tahlillar uchun
              asosiy vositalar bo‘lib xizmat qiladi.
            </p>
          </Modal>
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
