import React from "react";
import { aboutlist } from "@/static";

const About = () => {
  const lists = aboutlist.map((e, inx) => (
    <div
      data-aos="fade-up"
      key={inx}
      style={{ backgroundImage: `url(${e.url})` }}
      className={`border shadow-2xl rounded-[20px] bg-no-repeat bg-cover px-4 pb-4 pt-3 min-[430px]:px-2 h-[216px] hover:scale-[1.02] transition-[0.3s]`}
    >
      <h2 className="text-center about__title text-xl font-bold mb-2 dark:text-white">
        {e.title}
      </h2>
    </div>
  ));
  return (
    <section className="pt-10 pb-10">
      <div className="container max-w-[1240px] mx-auto px-5">
        <div className="grid grid-cols-1 gap-x-3 min-[430px]:grid-cols-2 min-[860px]:grid-cols-4 gap-y-3">
          {lists}
        </div>
        <p className="mt-[86px] dark:text-white text-xl">
          Tashkilot energiya samaradorlikni oshirish bo‘yicha professional 
          konsulting  xizmatlar ko‘rsatish maqsadida tashkil etilgan. <br />{" "}
          <br />
          Bizning faoliyatimiz sanoat korxonalar, ijtimoiy va  tijorat binolari
          uchun kompleks energiya auditlarini taqdim etishga ixtisoslashgan.
          Turli sohalardagi mutaxassislardan iborat jamoamiz korxonangizda
          energiya tejash imkoniyatlarini aniqlab, energiya resurslari uchun
          bo‘lgan to‘lovlaringizni kamaytirishga, operatsiya samaradorligini
          oshirishga va korxonaning atrof-muhitga salbiy ta’sirini kamaytirishni
          ta’minlaydi.
        </p>
      </div>
    </section>
  );
};

export default About;
