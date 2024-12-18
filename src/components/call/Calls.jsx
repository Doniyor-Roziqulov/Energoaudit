import React from "react";
import { FaPhone } from "react-icons/fa6";

const Calls = () => {
  return (
    <div className="fixed right-10 lg:left-10 bottom-10 z-50 w-[55px]">
      <a
        title="Biz bilan bog'lanish"
        href="tel:+998948306644"
        className="w-[55px] h-[55px] animate-bounce bg-green-400 border dark:border-white flex items-center justify-center rounded-full shadow-lg glow-effect"
      >
        <FaPhone className="text-2xl text-white dark:text-black" />
      </a>
    </div>
  );
};

export default Calls;
