import React from "react";

const Common = () => {
    return (
        <section className="pb-12 pt-8 overflow-hidden">
            <div className="container max-w-[1240px] mx-auto px-5">
                <div
                    data-aos="zoom-out-up"
                    className="border-2 border-gray-300 rounded-lg p-6 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg hover:shadow-2xl transition-shadow dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-xl">
                    <h2 className="text-center  text-2xl lg:text-5xl font-semibold mb-5  dark:text-white">
                        Energoaudit uzi nima ?
                    </h2>
                    <p className="text-[14px] text-neutral-700 lg:text-lg dark:text-neutral-300">
                        Energo audit — bu energiya resurslaridan foydalanish
                        samaradorligini baholash jarayoni. U tashkilotlarning
                        energiya sarfini tahlil qilib, ularni tejamkorligini
                        oshirish va xarajatlarni kamaytirishga yordam beradi.
                        Energo auditining asosiy maqsadi energiya resurslarini
                        yanada samarali ishlatish va atrof-muhitga bo'lgan
                        salbiy ta'sirni kamaytirishdir.
                    </p>
                    {/* <strong className="dark:text-white text-black">
                        Energo auditining asosiy jarayonlari:
                    </strong>
                    <ol className="dark:text-neutral-300 text-neutral-700">
                        <li>
                            <h3>Ma'lumot to'plash:</h3>
                            <ul>
                                <li>
                                    <p>
                                        Tashkilotdagi energiya sarfi haqidagi
                                        ma'lumotlar (elektr, gaz, issiqlik va
                                        boshqalar) yig'iladi.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Energiya iste'mol qiluvchi qurilmalar,
                                        jarayonlar va ularning samaradorligi
                                        o'rganiladi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Tahlil</h3>
                            <ul>
                                <li>
                                    <p>
                                        Olingan ma'lumotlar asosida energiya
                                        sarfi tahlil qilinadi.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Energiya tejamkorligi, energiya
                                        yo'qotishlari va mumkin bo'lgan
                                        takliflar aniqlanadi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Hisobot tayyorlash:</h3>
                            <ul>
                                <li>
                                    <p>
                                        Tahlil natijalari, energiya iste'moli va
                                        mumkin bo'lgan tejamkorlik usullari
                                        haqida hisobot tayyorlanadi.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Hisobotda muammolar va ularni hal qilish
                                        uchun takliflar beriladi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Tavsiyalar berish:</h3>
                            <ul>
                                <li>
                                    <p>
                                        Energiya samaradorligini oshirish
                                        bo'yicha tavsiyalar ishlab chiqiladi. Bu
                                        tavsiyalar yangi texnologiyalarni joriy
                                        etish, qurilmalarni yangilash yoki
                                        operatsion jarayonlarni o'zgartirishni
                                        o'z ichiga olishi mumkin.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3>Monitoring va baholash:</h3>
                            <ul>
                                <li>
                                    <p>
                                        Energo auditidan so'ng, tavsiyalarning
                                        amalga oshirilishini kuzatish va
                                        natijalarni baholash uchun monitoring
                                        jarayoni amalga oshiriladi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ol> */}
                    <strong className="text-black dark:text-white font-semibold text-lg">
                        Energo auditining asosiy jarayonlari:
                    </strong>
                    <ol className="text-neutral-700 dark:text-neutral-300 list-decimal ml-6 space-y-4">
                        <li>
                            <h3 className="text-base font-medium mb-2">
                                Ma'lumot to'plash:
                            </h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>
                                    <p className="text-sm">
                                        Tashkilotdagi energiya sarfi haqidagi
                                        ma'lumotlar (elektr, gaz, issiqlik va
                                        boshqalar) yig'iladi.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm">
                                        Energiya iste'mol qiluvchi qurilmalar,
                                        jarayonlar va ularning samaradorligi
                                        o'rganiladi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="text-base font-medium mb-2">
                                Tahlil:
                            </h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>
                                    <p className="text-sm">
                                        Olingan ma'lumotlar asosida energiya
                                        sarfi tahlil qilinadi.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm">
                                        Energiya tejamkorligi, energiya
                                        yo'qotishlari va mumkin bo'lgan
                                        takliflar aniqlanadi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="text-base font-medium mb-2">
                                Hisobot tayyorlash:
                            </h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>
                                    <p className="text-sm">
                                        Tahlil natijalari, energiya iste'moli va
                                        mumkin bo'lgan tejamkorlik usullari
                                        haqida hisobot tayyorlanadi.
                                    </p>
                                </li>
                                <li>
                                    <p className="text-sm">
                                        Hisobotda muammolar va ularni hal qilish
                                        uchun takliflar beriladi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="text-base font-medium mb-2">
                                Tavsiyalar berish:
                            </h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>
                                    <p className="text-sm">
                                        Energiya samaradorligini oshirish
                                        bo'yicha tavsiyalar ishlab chiqiladi. Bu
                                        tavsiyalar yangi texnologiyalarni joriy
                                        etish, qurilmalarni yangilash yoki
                                        operatsion jarayonlarni o'zgartirishni
                                        o'z ichiga olishi mumkin.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="text-base font-medium mb-2">
                                Monitoring va baholash:
                            </h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>
                                    <p className="text-sm">
                                        Energo auditidan so'ng, tavsiyalarning
                                        amalga oshirilishini kuzatish va
                                        natijalarni baholash uchun monitoring
                                        jarayoni amalga oshiriladi.
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Common;
