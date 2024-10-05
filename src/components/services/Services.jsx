import React from "react";
import { serviceslist } from "@/static";
import "@/components/services/Services.css";

const Services = () => {
    const lists = serviceslist.map((e, inx) => (
        <li data-aos="flip-right" className="px-3 relative serlist" key={inx}>
            <div className="flex justify-center">
                <div className="serbox border-2 border-[#01bafd] p-4 rounded-full">
                    <img src={e.url} alt="" />
                </div>
            </div>
            <p className="text-xs min-[550px]:text-base lg:text-sm min-[1200px]:text-base text-center mt-4 dark:text-white">
                {e.text}
            </p>
        </li>
    ));
    return (
        <section className="pb-8 pt-4 ">
            <div className="container max-w-[1240px] mx-auto px-5">
                <h2 className="text-center text-3xl font-bold mb-3 dark:text-white">
                    Bizning xizmatlar
                </h2>
                <p className="text-center mb-10 dark:text-white">
                    Kompaniya sanoat korxonasi va binolar energiya
                    samaradorligini oshirish sohasida innovatsion ishlanma va
                    xizmatlarni <br /> taqdim qiladi
                </p>
                <ul className="grid grid-cols-2 gap-y-8 gap-x-4 lg:grid-cols-4">
                    {lists}
                </ul>
            </div>
        </section>
    );
};

export default Services;
