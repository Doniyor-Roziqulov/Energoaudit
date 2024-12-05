import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="overflow-x-hidden pb-10 pt-10 bg-[#17195A] text-white">
      <div className="container max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col gap-y-5 min-[500px]:flex-row min-[500px]:flex-wrap min-[640px]:justify-around min-[772px]:justify-between justify-between">
          <div className="flex flex-col">
            <Link
              className="text-2xl italic font-bold dark:text-white mb-5"
              to={"/"}
            >
              LOGO
            </Link>
            <p className="dark:text-slate-300 mb-4">
              Kompaniya sanoat korxonalari va <br /> binolarda energiya
              samaradorligini <br /> oshirish sohasida injiniring va konsalting{" "}
              <br /> hizmatlarini ko‘rsatish bilan birga innovatsion <br />{" "}
              ishlanmalar taqdim etadi.
            </p>
            <div className="flex items-center gap-x-4 mt-4 text-2xl">
              <a
                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                href="https://www.instagram.com/rahmatullayev_dostonbek"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                href="https://www.instagram.com/rahmatullayev_dostonbek"
                target="_blank"
              >
                <FaTelegramPlane />
              </a>
              <a
                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                href="https://www.instagram.com/rahmatullayev_dostonbek"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                href="https://www.instagram.com/rahmatullayev_dostonbek"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                href="https://www.instagram.com/rahmatullayev_dostonbek"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <strong className="text-2xl dark:text-white mb-5">Sahifalar</strong>
            <Link
              className="hover:border-white text-lg font-medium transition-all border-b border-[#17195A] dark:text-gray-300 dark:hover:text-gray-500"
              to={""}
            >
              Biz haqimizda
            </Link>
            <Link
              className="hover:border-white text-lg font-medium transition-all border-b border-[#17195A] dark:text-gray-300 dark:hover:text-gray-500"
              to={""}
            >
              Xizmatlar va mahsulotlar
            </Link>
            <Link
              className="hover:border-white text-lg font-medium transition-all border-b border-[#17195A] dark:text-gray-300 dark:hover:text-gray-500"
              to={""}
            >
              Foydali ma'lumotlar
            </Link>
            <Link
              className="hover:border-white text-lg font-medium transition-all border-b border-[#17195A] dark:text-gray-300 dark:hover:text-gray-500"
              to={"/contact"}
            >
              Aloqa
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <strong className="text-2xl dark:text-white mb-5">Aloqa</strong>
            <div className="bg-[#0A9642] rounded-[80px] py-2 px-4">
              <a
                className="flex items-center gap-x-2 transition-all dark:text-gray-300 dark:hover:text-gray-500"
                href="https://maps.app.goo.gl/8RNQG1hJ256K5aXa6"
                target="_blank"
              >
                <div className="p-3 bg-[#FE5716] rounded-full">
                  <IoLocationOutline className="inline text-xl text-white" />
                </div>
                Shayxantaxur tumani <br /> 12 ko‘ch. 5-etaj.
              </a>
            </div>
            <div className="bg-[#0A9642] rounded-[80px] py-2 px-4">
              <a
                className="flex items-center gap-x-2 transition-all dark:text-gray-300 dark:hover:text-gray-500"
                href="tel:+998948306644"
              >
                <div className="p-3 bg-[#FE5716] rounded-full">
                  <BsFillTelephoneFill className="text-xl text-white " />
                </div>
                +998 (94) 830 66 44
              </a>
            </div>
            <div className="bg-[#0A9642] rounded-[80px] py-2 px-4">
              <a
                className="flex items-center gap-x-2 transition-all dark:text-gray-300 dark:hover:text-gray-500"
                href="mailto:doniyorruziqulov33@gmail.com"
              >
                <div className="p-3 bg-[#FE5716] rounded-full">
                  <AiTwotoneMail className="text-xl text-white" />
                </div>
                ruziqulov33@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
