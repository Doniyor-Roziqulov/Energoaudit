import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { TfiAlignRight } from "react-icons/tfi";

const BOT_TOKEN = "7736707923:AAGYwNyq8nTz3XXY5pn8KpnEozBwePIjDEw";
const USER_ID = 6227525533;

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());
    let text = "";
    text += `<b>Mijoz</b> %0A`;
    text += `<b>Ism:</b> <b>${data.fname}</b> %0A`;
    text += `<b>Familiya:</b> <b>${data.lname}</b> %0A`;
    text += `<b>Tel number:</b> <code>${data.number}</code> %0A`;
    text += `<b>Xabar:</b> <i>${data.message}</i>`;
    console.log(text);
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    e.target.reset();
  };
  return (
    <section className="pt-9 pb-9 overflow-x-hidden">
      <div className="container max-w-[1240px] mx-auto px-5">
        <div className="flex items-center gap-x-4 mb-4">
          <TfiAlignRight className="text-2xl text-blue-500" />
          <h1 className="text-4xl font-semibold dark:text-white">Aloqa</h1>
        </div>
        <div className="flex items-center min-[730px]:flex-row lg:items-start lg:gap-x-5 flex-col justify-between">
          <div data-aos="flip-down">
            <form
              onSubmit={handleSendMessage}
              className="w-[280px] min-[480px]:w-[370px] flex flex-col gap-y-4 min-[630px]:w-[450px] min-[730px]:w-[280px] min-[840px]:w-[370px] min-[900px]:w-[420px] lg:w-[600px] dark:text-white px-3 py-3 rounded-md"
              action=""
            >
              <div className="flex flex-col gap-y-2">
                <label className={"flex items-center"}>
                  <span className="text-red-500">*</span> Ismingizni kiriting
                </label>
                <input
                  autoComplete="off"
                  className="border py-1 pl-2 rounded-lg border-neutral-600 dark:bg-neutral-800 dark:border-white"
                  required
                  name="fname"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="flex items-center">
                  <span className="text-red-500">*</span>
                  {"  "}
                  Familiya kiriting
                </label>
                <input
                  autoComplete="off"
                  className="border py-1 pl-2 rounded-lg border-neutral-600 dark:bg-neutral-800 dark:border-white"
                  required
                  name="lname"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="flex items-center">
                  <span className="text-red-500">*</span> Telefon raqam kiriting
                </label>
                <input
                  autoComplete="off"
                  className="border py-1 pl-2 rounded-lg border-neutral-600 dark:bg-neutral-800 dark:border-white"
                  required
                  placeholder="+998948306644"
                  name="number"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="flex items-center">
                  <span className="text-red-500">*</span> Xabar yozing
                </label>
                <textarea
                  autoComplete="off"
                  className="border py-1 pl-2 rounded-lg border-neutral-600 dark:bg-neutral-800 dark:border-white"
                  name="message"
                  id=""
                ></textarea>
              </div>
              <button className="w-full bg-[#FE5716] text-white py-2 rounded-lg border transition-all hover:bg-white hover:text-black hover:border-black font-semibold text-base">
                Send Message
              </button>
            </form>
          </div>
          <div data-aos="flip-up">
            <div className="mb-3 bg-[#0A9642] py-5 px-6 rounded-[30px]">
              <strong className="block mb-3 text-2xl text-white">Manzil</strong>
              <a
                className=" font-semibold text-slate-200"
                href="https://maps.app.goo.gl/8RNQG1hJ256K5aXa6"
                target="_blank"
              >
                Shayxantaxur tumani, 12 ko‘ch. 5-etaj.
              </a>
            </div>
            <div className="mb-3 bg-[#0A9642] py-5 px-6 rounded-[30px]">
              <strong className="block mb-3 text-2xl text-white">
                Qo'ng'iroq qiling
              </strong>
              <a
                className="block mb-2 font-semibold text-slate-200"
                href="tel:+998948306644"
              >
                +998 (94) 830 66 44
              </a>
            </div>
            <div className="mb-6 bg-[#0A9642] py-5 px-6 rounded-[30px]">
              <strong className="block mb-3 text-2xl text-white">Email</strong>
              <a
                className=" font-semibold text-slate-200"
                href="mailto:doniyorruziqulov33@gmail.com"
              >
                ruziqulov33@gmail.com
              </a>
            </div>
            <div className="flex gap-x-4 text-4xl">
              <a
                className="hover:scale-125 transition-all dark:text-white dark:hover:text-blue-600 hover:text-blue-600"
                href="https://t.me/Energyaudit_uzb"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="hover:scale-125 transition-all dark:text-white dark:hover:text-blue-600 hover:text-blue-600"
                href="https://t.me/Energyaudit_uzb"
                target="_blank"
              >
                <FaTelegramPlane />
              </a>
              <a
                className="hover:scale-125 transition-all dark:text-white dark:hover:text-blue-600 hover:text-blue-600"
                href="https://t.me/Energyaudit_uzb"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="hover:scale-125 transition-all dark:text-white dark:hover:text-blue-600 hover:text-blue-600"
                href="https://t.me/Energyaudit_uzb"
                target="_blank"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
