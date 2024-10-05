import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="overflow-x-hidden pb-10 pt-10 bg-stone-100 dark:bg-stone-800">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex flex-col gap-y-5 min-[500px]:flex-row min-[500px]:flex-wrap min-[640px]:justify-around min-[772px]:justify-between justify-between">
                    <div data-aos="fade-right" className="flex flex-col">
                        <Link
                            className="text-2xl italic font-bold dark:text-white"
                            to={"/"}>
                            LOGO
                        </Link>
                        <p className="dark:text-slate-300">
                            Kompaniya sanoat korxonalari va <br /> binolarda
                            energiya samaradorligini <br /> oshirish sohasida
                            injiniring va konsalting <br /> hizmatlarini
                            ko‘rsatish bilan birga innovatsion <br />{" "}
                            ishlanmalar taqdim etadi.
                        </p>
                        <div className="flex items-center gap-x-4 mt-4 text-2xl">
                            <a
                                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaInstagram />
                            </a>
                            <a
                                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaTelegramPlane />
                            </a>
                            <a
                                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaFacebook />
                            </a>
                            <a
                                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaTwitter />
                            </a>
                            <a
                                className="hover:scale-125 transition-all dark:text-white hover:text-blue-600 dark:hover:hover:text-blue-600"
                                href="https://www.instagram.com/rahmatullayev_dostonbek"
                                target="_blank">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="flex flex-col gap-y-2">
                        <strong className="text-xl dark:text-white text-[#253D4E]">
                            Sahifalar
                        </strong>
                        <Link
                            className="hover:text-black text-neutral-600 font-medium transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            to={"/about"}>
                            Biz haqimizda
                        </Link>
                        <Link
                            className="hover:text-black text-neutral-600 font-medium transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            to={"/work"}>
                            Bizning ishlar
                        </Link>
                        <Link
                            className="hover:text-black text-neutral-600 font-medium transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            to={"/personnel"}>
                            Xodimlar
                        </Link>
                        <Link
                            className="hover:text-black text-neutral-600 font-medium transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            to={"/price"}>
                            Mahsulot narxlari
                        </Link>
                        <Link
                            className="hover:text-black text-neutral-600 font-medium transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            to={"/lists"}>
                            Korxonalar ro'yxati
                        </Link>
                    </div>
                    <div data-aos="fade-left" className="flex flex-col gap-y-2">
                        <strong className="text-xl dark:text-white text-[#253D4E]">
                            Aloqa
                        </strong>
                        <a
                            className="hover:text-green-500 transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            href="https://maps.app.goo.gl/8RNQG1hJ256K5aXa6"
                            target="_blank">
                            <IoLocationOutline className="inline text-xl" />
                            100128, O‘zbekiston, Toshkent sh. <br />,
                            Shayxantaxur tumani, Zulfiyaxanum, <br /> 12 ko‘ch.
                            5-etaj.
                        </a>
                        <a
                            className="flex items-center gap-x-2 hover:text-green-500 transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            href="tel:+998942860422">
                            <BsFillTelephoneFill /> +998 (94) 286 04 22
                        </a>
                        <a
                            className="flex items-center gap-x-2 hover:text-green-500 transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            href="tel:+998993746920">
                            <BsFillTelephoneFill /> +998 (99) 374 69 20
                        </a>
                        <a
                            className=" hover:text-green-500 transition-all dark:text-gray-300 dark:hover:text-gray-500"
                            href="mailto:doniyorruziqulov33@gmail.com">
                            doniyorruziqulov33@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
