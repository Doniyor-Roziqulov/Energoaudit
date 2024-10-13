import React from "react";
import { TfiAlignRight } from "react-icons/tfi";

const Product = () => {
    return (
        <section className="py-8 overflow-x-hidden">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex items-center gap-x-4 mb-4">
                    <TfiAlignRight className="text-2xl text-blue-500" />
                    <h1 className="text-2xl lg:text-4xl font-semibold dark:text-white">
                        Mahsulotlar
                    </h1>
                </div>
                <div>
                    <div
                        data-aos="flip-down"
                        className="p-5 shadow-lg dark:shadow-white dark:shadow-md rounded-lg">
                        <p className="text-center lg:text-lg dark:text-slate-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum pariatur enim a ad voluptatibus quos,
                            distinctio quae magnam dolor adipisci mollitia
                            recusandae veniam nobis ratione aspernatur veritatis
                            laudantium totam. Molestias eos repellat excepturi
                            voluptate consequatur porro quisquam veritatis dicta
                            cupiditate laborum cum veniam sed tempora recusandae
                            rerum hic iusto fuga, itaque omnis, debitis adipisci
                            placeat accusamus nobis! Reprehenderit veniam modi
                            dicta cum perferendis eveniet corrupti voluptatum
                            quasi labore est voluptate nisi sequi, doloribus
                            repellendus saepe numquam commodi id error sapiente
                            fugit recusandae quis, aspernatur, quam sit? Labore,
                            nobis perferendis! Aliquid repudiandae soluta culpa.
                            Rerum, praesentium. Atque quaerat impedit voluptatum
                            repellendus!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
                        {Array.from({ length: 8 }, (_, index) => (
                            <div
                                key={index}
                                data-aos="zoom-out-up"
                                className="shadow-2xl dark:shadow-white dark:shadow-md dark:hover:bg-slate-950 pb-3 rounded-lg   transition-all">
                                <img
                                    className="rounded-lg"
                                    src="https://sibledeks.ru/images/articles/energoaudit-2.jpg"
                                    alt=""
                                />
                                <strong className="block pl-4 mt-2 dark:text-white">
                                    Mahsulot nomi
                                </strong>
                                <p className="pl-4 text-zinc-500 dark:text-slate-300">
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Dignissimos, officiis?
                                    Esse ex repellat accusamus magnam commodi
                                    dolore adipisci repellendus quia.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
