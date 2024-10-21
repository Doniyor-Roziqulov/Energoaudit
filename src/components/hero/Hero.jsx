import React from "react";
import { Carousel } from "antd";
import bgone from "@/images/herobg1.jpg";
import bgtwo from "@/images/herobg2.jpg";
import bgthere from "@/images/herobgthere.png";

const Hero = () => {
    return (
        <div className="container mx-auto">
            <div data-aos="zoom-in">
                <Carousel arrows infinite={true} autoplay>
                    <div>
                        <div className="bg-cover h-[250px] min-[500px]:h-[300px] min-[720px]:h-[350px] min-[900px]:h-[400px] min-[1070px]:h-[450px] xl:h-[500px]  relative">
                            <img
                                src={bgone}
                                className="absolute w-full h-full top-0 left-0 inset-0 object-cover brightness-50"
                            />
                            <h1 className="text-3xl min-[500px]:text-4xl lg:text-4xl font-semibold text-white text-center pt-3 relative">
                                Energiya sarfini aniqlash
                            </h1>
                            <p className="text-sm relative text-white text-center mt-6 px-2 lg:text-lg">
                                Energiya sarfini aniqlash jarayoni tashkilotning
                                energiya iste'molining o'ziga xos jihatlarini
                                o'rganishdan iborat. Bu bosqichda oylik va
                                yillik energiya hisob-fakturalari, qurilmalar va{" "}
                                <br />
                                jarayonlar orqali energiya iste'molining
                                taqsimoti tahlil qilinadi. Maqsad energiya
                                sarfini optimallashtirish uchun zarur bo'lgan
                                ma'lumotlarni yig'ishdir.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-cover h-[250px] min-[500px]:h-[300px] min-[720px]:h-[350px] min-[900px]:h-[400px] min-[1070px]:h-[450px] xl:h-[500px] bg-neutral-800 relative">
                            <img
                                src={bgtwo}
                                className="absolute w-full h-full top-0 left-0 inset-0 object-cover brightness-50"
                            />
                            <h1 className="text-3xl min-[500px]:text-4xl lg:text-4xl font-semibold text-white text-center pt-3 relative">
                                Samaradorlikni oshirish
                            </h1>
                            <p className="text-sm relative text-white text-center mt-6 px-2 lg:text-lg">
                                Samaradorlikni oshirish energiya resurslaridan
                                yanada samarali foydalanishni ta'minlash uchun
                                zarur chora-tadbirlarni aniqlashni o'z ichiga
                                oladi. Bu jarayonda olingan ma'lumotlar asosida{" "}
                                <br />
                                energiya iste'molini kamaytirishga qaratilgan
                                takliflar va tavsiyalar ishlab chiqiladi.
                                Maqsad, energiya sarfini qisqartirish va
                                iqtisodiy xarajatlarni kamaytirishdir.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-cover h-[250px] min-[500px]:h-[300px] min-[720px]:h-[350px] min-[900px]:h-[400px] min-[1070px]:h-[450px] xl:h-[500px] bg-neutral-800 relative">
                            <img
                                src={bgthere}
                                className="absolute w-full h-full top-0 left-0 inset-0 object-cover brightness-50"
                            />
                            <h1 className="text-3xl min-[500px]:text-4xl lg:text-4xl font-semibold text-white text-center pt-3 z-30 relative">
                                Atrof-muhitni muhofaza qilish
                            </h1>
                            <p className="text-sm relative text-white text-center mt-6 px-2 lg:text-lg">
                                Atrof-muhitni muhofaza qilish maqsadi energiya
                                iste'molining kamayishi orqali ekologik ta'sirni
                                kamaytirishdir. Energiya auditidan olingan
                                natijalar orqali chiqindilarni va zararli <br />
                                emissiyalarni kamaytirish imkoniyatlari
                                aniqlanadi. Bu, tashkilotning barqaror
                                rivojlanishga hissa qo'shishi va atrof-muhitga
                                bo'lgan salbiy ta'sirni kamaytirishi uchun
                                muhimdir
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Hero;
