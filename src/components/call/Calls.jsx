import React from "react";
import { FaPhone } from "react-icons/fa6";

const Calls = () => {
    return (
        <div className="fixed right-10 lg:left-10 bottom-10 z-50">
            {/* <a
                title="Biz bilan bog'lanish"
                href="tel:+998942860422"
                className="w-[55px] h-[55px] animate-bounce bg-green-400 border dark:border-white flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:bg-green-500 glow-effect">
                <FaPhone className="text-2xl text-white dark:text-black" />
            </a> */}
            <a
                title="Biz bilan bog'lanish"
                href="tel:+998942860422"
                className="w-[55px] h-[55px] animate-bounce bg-green-400 border dark:border-white flex items-center justify-center rounded-full shadow-lg glow-effect">
                <FaPhone className="text-2xl text-white dark:text-black" />
            </a>

            {/* <a
                title="Biz bilan bog'lanish"
                href="tel:+998942860422"
                className="w-[55px] h-[55px] animate-bounce bg-green-400  border dark:border-white flex items-center justify-center rounded-full">
                <FaPhone className="text-2xl text-white dark:text-black" />
            </a> */}
        </div>
    );
};

export default Calls;
