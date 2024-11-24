import tg from "@/images/tg.svg";
import { IoCallOutline } from "react-icons/io5";
const Headerend = () => {
  return (
    <div className="fixed w-full hidden lg:block top-0 left-0 z-20 bg-[#A1A3FF]">
      <div className="mx-auto max-w-[1385px] px-5 flex items-center gap-x-6 py-[9px] justify-end">
        <a href="#">
          <img src={tg} alt="telgram" />
        </a>
        <a className="flex items-center" href="tel:+998909999999">
          <IoCallOutline />
          +998 90 999 99 99
        </a>
      </div>
    </div>
  );
};

export default Headerend;
