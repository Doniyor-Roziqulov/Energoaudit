import tg from "@/images/tg.svg";
import { IoCallOutline } from "react-icons/io5";
const Headerend = () => {
  return (
    <div className="fixed w-full hidden lg:block top-0 left-0 z-40 bg-[#1E56A1]">
      <div className="mx-auto max-w-[1385px] px-5 flex items-center gap-x-6 py-[9px] justify-end">
        <a href="#">
          <img src={tg} alt="telgram" />
        </a>
        <a className="flex items-center text-white" href="tel:+998909999999">
          <IoCallOutline />
          +998 94 830 66 44
        </a>
      </div>
    </div>
  );
};

export default Headerend;
