import React from "react";
import { data } from "@/static";
import { TfiAlignRight } from "react-icons/tfi";

const Lists = () => {
    const lists = data.map((e) => (
        <div
            className="flex justify-start pt-4 pb-4 px-7 border-b border-black hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:text-slate-300"
            key={e.key}>
            <div className="w-[400px]">
                <p className="lg:text-xl">{e.name}</p>
            </div>
            <div className="w-[400px]">
                <p className="lg:text-lg font-bold">{e.year}</p>
            </div>
            <div className="w-[400px]">
                <p>{e.address}</p>
            </div>
        </div>
    ));
    return (
        <section className="py-8">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex items-center gap-x-4 mb-4">
                    <TfiAlignRight className="text-2xl text-blue-500" />
                    <h1 className="text-4xl font-semibold dark:text-white">
                        Bizning ishlar
                    </h1>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className="font-semibold bg-slate-200 dark:bg-zinc-800 text-gray-700 border rounded-md border-gray-500"
                    dataSource={data}>
                    <div className="flex justify-start bg-zinc-300 dark:bg-zinc-950 pt-4 pb-3 px-7 rounded-t-md">
                        <div className="w-[400px]">
                            <p className="text-black dark:text-white lg:text-xl">
                                Name
                            </p>
                        </div>
                        <div className="w-[400px]">
                            <p className="text-black dark:text-white lg:text-xl">
                                Years
                            </p>
                        </div>
                        <div className="w-[400px]">
                            <p className="text-black dark:text-white lg:text-xl">
                                Addres
                            </p>
                        </div>
                    </div>
                    {lists}
                </div>
            </div>
        </section>
    );
};

export default Lists;
