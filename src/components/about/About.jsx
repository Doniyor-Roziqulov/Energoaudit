import React from "react";
import { GrAction } from "react-icons/gr";
import { aboutlist } from "@/static";

const About = () => {
    const lists = aboutlist.map((e, inx) => (
        <div
            style={{ backgroundColor: `${e.color}` }}
            key={inx}
            className="border rounded-lg px-4 pb-4 pt-3 min-[430px]:px-2 hover:scale-110 transition-[0.3s]">
            <GrAction className="block mx-auto text-3xl mb-2" />
            <h2 className="text-center text-xl font-bold mb-2">{e.title}</h2>
            <p className="text-center min-[430px]:text-sm sm:text-base min-[860px]:text-sm lg:text-base text-[#7E7E7E]">
                {e.text}
            </p>
        </div>
    ));
    return (
        <section className="pt-10 pb-10">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="grid grid-cols-1 gap-x-3 min-[430px]:grid-cols-2 min-[860px]:grid-cols-4 gap-y-3">
                    {lists}
                </div>
            </div>
        </section>
    );
};

export default About;
