import React from "react";
import { Carousel } from "antd";
import bgone from "@/images/herobg1.jpg";
import bgtwo from "@/images/herobg2.jpg";
import bgthere from "@/images/herobgthere.png";
import bgfour from "@/images/herobg4.jpg";

const Hero = () => {
    return (
        <div className="container max-w-[1240px] mx-auto px-5">
            <Carousel arrows infinite={true} autoplay>
                <div>
                    <div className="bg-cover h-[250px] min-[500px]:h-[300px] min-[720px]:h-[350px] min-[900px]:h-[400px] min-[1070px]:h-[450px] xl:h-[500px]  rounded-xl border-2 relative">
                        <img
                            src={bgone}
                            className="absolute w-full h-full top-0 left-0 inset-0 object-cover brightness-50 rounded-xl"
                        />
                        <h1 className="text-3xl min-[500px]:text-4xl lg:text-5xl text-white text-center pt-3 relative">
                            Energoaudit
                        </h1>
                        <p className="relative text-white text-center mt-6 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ut illum inventore quisquam quia tempore nobis
                            libero dolor dolorem, aperiam quasi? Necessitatibus
                            earum labore dolores quaerat quos numquam amet,
                            aliquam, quas nobis, veniam quis cum? Incidunt
                            ducimus dicta laborum vero, magnam, repellendus
                            numquam fugit aliquam atque necessitatibus impedit
                            rem tempore itaque quo non ab fugiat similique
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-cover h-[250px] min-[500px]:h-[300px] min-[720px]:h-[350px] min-[900px]:h-[400px] min-[1070px]:h-[450px] xl:h-[500px] bg-neutral-800 rounded-xl border-2 relative">
                        <img
                            src={bgtwo}
                            className="absolute w-full h-full top-0 left-0 inset-0 object-cover brightness-50 rounded-xl"
                        />
                        <h1 className="text-3xl min-[500px]:text-4xl lg:text-5xl text-white text-center pt-3 relative">
                            Energoaudit2
                        </h1>
                        <p className="relative text-white text-center mt-6 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ut illum inventore quisquam quia tempore nobis
                            libero dolor dolorem, aperiam quasi? Necessitatibus
                            earum labore dolores quaerat quos numquam amet,
                            aliquam, quas nobis, veniam quis cum? Incidunt
                            ducimus dicta laborum vero, magnam, repellendus
                            numquam fugit aliquam atque necessitatibus impedit
                            rem tempore itaque quo non ab fugiat similique
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-cover h-[250px] min-[500px]:h-[300px] min-[720px]:h-[350px] min-[900px]:h-[400px] min-[1070px]:h-[450px] xl:h-[500px] bg-neutral-800 rounded-xl border-2 relative">
                        <img
                            src={bgthere}
                            className="absolute w-full h-full top-0 left-0 inset-0 object-cover brightness-50 rounded-xl"
                        />
                        <h1 className="text-3xl min-[500px]:text-4xl lg:text-5xl text-white text-center pt-3 z-30 relative">
                            Energoaudit3
                        </h1>
                        <p className="relative text-white text-center mt-6 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ut illum inventore quisquam quia tempore nobis
                            libero dolor dolorem, aperiam quasi? Necessitatibus
                            earum labore dolores quaerat quos numquam amet,
                            aliquam, quas nobis, veniam quis cum? Incidunt
                            ducimus dicta laborum vero, magnam, repellendus
                            numquam fugit aliquam atque necessitatibus impedit
                            rem tempore itaque quo non ab fugiat similique
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-cover h-[250px] min-[500px]:h-[300px] min-[720px]:h-[350px] min-[900px]:h-[400px] min-[1070px]:h-[450px] xl:h-[500px] rounded-xl border-2 relative">
                        <img
                            src={bgfour}
                            className="absolute w-full h-full top-0 left-0 inset-0 object-cover brightness-50 rounded-xl"
                        />
                        <h1 className="text-3xl min-[500px]:text-4xl lg:text-5xl text-white text-center pt-3 z-30 relative">
                            Energoaudit4
                        </h1>
                        <p className="relative text-white text-center mt-6 text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ut illum inventore quisquam quia tempore nobis
                            libero dolor dolorem, aperiam quasi? Necessitatibus
                            earum labore dolores quaerat quos numquam amet,
                            aliquam, quas nobis, veniam quis cum? Incidunt
                            ducimus dicta laborum vero, magnam, repellendus
                            numquam fugit aliquam atque necessitatibus impedit
                            rem tempore itaque quo non ab fugiat similique
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;
