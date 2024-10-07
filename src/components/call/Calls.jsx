import React from "react";
import { FaPhone } from "react-icons/fa6";

const Calls = () => {
    return (
        <div className="fixed left-10 bottom-10">
            <a
                title="Biz bilan bog'lanish"
                href="tel:+998942860422"
                className="w-[55px] h-[55px] animate-bounce bg-green-400 dark:bg-white border dark:border-black flex items-center justify-center rounded-full">
                <FaPhone className="text-2xl text-white dark:text-black" />
            </a>
        </div>
    );
};

export default Calls;
