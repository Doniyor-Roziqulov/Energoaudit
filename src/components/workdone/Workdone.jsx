import React, { useEffect } from "react";
import img from "@/images/imgishlar.png";

const Workdone = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mx-auto container mb-10">
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default Workdone;
