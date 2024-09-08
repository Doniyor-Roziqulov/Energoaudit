import React from "react";
import { TfiAlignRight } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import img1 from "@/images/men.jpg";
import { HiOutlineCheck } from "react-icons/hi";

const Worker = () => {
    return (
        <section className="py-9 bg-[#D0EBF8]">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div className="flex items-center gap-x-4 mb-4">
                    <TfiAlignRight className="text-2xl text-blue-500" />
                    <h1 className="text-2xl lg:text-4xl font-semibold">
                        Xodimlar
                    </h1>
                </div>
                <div>
                    <h2 className="text-center text-xl lg:text-3xl font-medium mb-3 lg:mb-5">
                        Direktor
                    </h2>
                    <div className="flex flex-col min-[800px]:flex-row items-start justify-between gap-x-4">
                        <div className="w-full min-[800px]:w-1/2">
                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                grabCursor={true}
                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                modules={[EffectCreative, Autoplay]}
                                className="mySwiper">
                                <SwiperSlide>
                                    <img
                                        className="h-80 object-contain"
                                        src={img1}
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="h-80 object-contain"
                                        src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="h-80 object-contain"
                                        src={`https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg`}
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div>
                            <strong className="flex items-center gap-x-3 text-xl lg:text-2xl text-blue-500 mb-2 font-serif">
                                <HiOutlineCheck /> Dostonbek
                            </strong>
                            <strong className="flex items-center gap-x-3 text-xl lg:text-2xl text-blue-500 font-serif mb-2">
                                <HiOutlineCheck /> Rahmatullayev
                            </strong>
                            <p className="text-lg lg:text-xl flex items-center gap-x-3 mb-4">
                                <HiOutlineCheck />
                                2000-yil 24-yosh
                            </p>
                            <div className="border p-1 rounded-md">
                                <p className="text-slate-600 text-sm lg:text-base">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Non tempora laudantium
                                    ullam delectus iure laborum quia aliquid,
                                    debitis voluptatibus tempore provident,
                                    obcaecati, suscipit velit ipsum ex! Aperiam
                                    optio neque quo esse hic temporibus ratione?
                                    Illo, hic. Optio sed explicabo assumenda
                                    fugit illo nihil magnam corrupti ea
                                    reiciendis quam, pariatur impedit!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 mt-4">
                        <img
                            className="w-20 lg:w-40 hover:scale-105 transition-all"
                            src="https://aokonvin.uz/d/4.jpg"
                            alt=""
                        />
                        <img
                            className="w-20 lg:w-40 hover:scale-105 transition-all"
                            src="https://aokonvin.uz/d/4.jpg"
                            alt=""
                        />
                        <img
                            className="w-20 lg:w-40 hover:scale-105 transition-all"
                            src="https://aokonvin.uz/d/4.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 min-[440px]:grid-cols-2 min-[860px]:grid-cols-3 gap-x-6 gap-y-6 mt-5">
                    <div className="hover:scale-105 transition-all">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={img1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 lg:h-[240px] min-[440px]:h-48 object-contain"
                                    src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={`https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg`}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500 mb-1 ">
                            Doniyor
                        </strong>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500  mb-1">
                            Roziqulov
                        </strong>
                        <p className="text-lg flex items-center gap-x-3 mb-3">
                            2000-yil 24-yosh
                        </p>
                        <div className="border p-1 rounded-md">
                            <p className="text-slate-600 text-sm lg:text-base">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non tempora laudantium ullam
                                delectus iure laborum quia aliquid, debitis
                                voluptatibus tempore provident, obcaecati,
                                suscipit velit ipsum ex! Aperiam optio neque quo
                            </p>
                        </div>
                    </div>
                    <div className="hover:scale-105 transition-all">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={img1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 lg:h-[240px] min-[440px]:h-48 object-contain"
                                    src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={`https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg`}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500 mb-1 ">
                            Doniyor
                        </strong>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500  mb-1">
                            Roziqulov
                        </strong>
                        <p className="text-lg flex items-center gap-x-3 mb-3">
                            2000-yil 24-yosh
                        </p>
                        <div className="border p-1 rounded-md">
                            <p className="text-slate-600 text-sm lg:text-base">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non tempora laudantium ullam
                                delectus iure laborum quia aliquid, debitis
                                voluptatibus tempore provident, obcaecati,
                                suscipit velit ipsum ex! Aperiam optio neque quo
                            </p>
                        </div>
                    </div>
                    <div className="hover:scale-105 transition-all">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={img1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 lg:h-[240px] min-[440px]:h-48 object-contain"
                                    src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={`https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg`}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500 mb-1 ">
                            Doniyor
                        </strong>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500  mb-1">
                            Roziqulov
                        </strong>
                        <p className="text-lg flex items-center gap-x-3 mb-3">
                            2000-yil 24-yosh
                        </p>
                        <div className="border p-1 rounded-md">
                            <p className="text-slate-600 text-sm lg:text-base">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non tempora laudantium ullam
                                delectus iure laborum quia aliquid, debitis
                                voluptatibus tempore provident, obcaecati,
                                suscipit velit ipsum ex! Aperiam optio neque quo
                            </p>
                        </div>
                    </div>
                    <div className="hover:scale-105 transition-all">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={img1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 lg:h-[240px] min-[440px]:h-48 object-contain"
                                    src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={`https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg`}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500 mb-1 ">
                            Doniyor
                        </strong>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500  mb-1">
                            Roziqulov
                        </strong>
                        <p className="text-lg flex items-center gap-x-3 mb-3">
                            2000-yil 24-yosh
                        </p>
                        <div className="border p-1 rounded-md">
                            <p className="text-slate-600 text-sm lg:text-base">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non tempora laudantium ullam
                                delectus iure laborum quia aliquid, debitis
                                voluptatibus tempore provident, obcaecati,
                                suscipit velit ipsum ex! Aperiam optio neque quo
                            </p>
                        </div>
                    </div>
                    <div className="hover:scale-105 transition-all">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={img1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 lg:h-[240px] min-[440px]:h-48 object-contain"
                                    src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={`https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg`}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500 mb-1 ">
                            Doniyor
                        </strong>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500  mb-1">
                            Roziqulov
                        </strong>
                        <p className="text-lg flex items-center gap-x-3 mb-3">
                            2000-yil 24-yosh
                        </p>
                        <div className="border p-1 rounded-md">
                            <p className="text-slate-600 text-sm lg:text-base">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non tempora laudantium ullam
                                delectus iure laborum quia aliquid, debitis
                                voluptatibus tempore provident, obcaecati,
                                suscipit velit ipsum ex! Aperiam optio neque quo
                            </p>
                        </div>
                    </div>
                    <div className="hover:scale-105 transition-all">
                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative, Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={img1}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 lg:h-[240px] min-[440px]:h-48 object-contain"
                                    src={`https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=`}
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    className="h-64 min-[440px]:h-48 lg:h-[240px] object-contain"
                                    src={`https://img.freepik.com/free-photo/young-handsome-business-man-with-laptop-office_1303-21060.jpg`}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500 mb-1 ">
                            Doniyor
                        </strong>
                        <strong className="flex justify-center gap-x-3 text-xl text-blue-500  mb-1">
                            Roziqulov
                        </strong>
                        <p className="text-lg flex items-center gap-x-3 mb-3">
                            2000-yil 24-yosh
                        </p>
                        <div className="border p-1 rounded-md">
                            <p className="text-slate-600 text-sm lg:text-base">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Non tempora laudantium ullam
                                delectus iure laborum quia aliquid, debitis
                                voluptatibus tempore provident, obcaecati,
                                suscipit velit ipsum ex! Aperiam optio neque quo
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Worker;
