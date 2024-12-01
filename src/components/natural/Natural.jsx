import React, { useEffect } from "react";

const Natural = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-8 overflow-x-hidden">
      <div className="container max-w-[1240px] mx-auto px-5">
        <p className="pb-8 lg:text-xl dark:text-white">
          Isteʼmolchilarga o‘zlarining tasarrufidagi mavjud maʼnan eskirgan va
          foydali ish koeffitsiyenti past bo‘lgan gazdan foydalanish uskunasini
          yangi energiya tejamkor uskunalarga almashtirish natijasida iqtisod
          qilingan tabiiy gaz hajmiga 3 yil davomida amaldagi tarifga nisbatan
          15 foiz chegirma beriladi. Bunda: <br /> -isteʼmolchilar gazdan
          foydalanish uskunasini almashtirish jadvali va uning natijasida
          erishiladigan iqtisodni nazarda tutuvchi dasturni tasdiqlash uchun
          O‘zenergoinspeksiyaga kiritadi; <br /> -O‘zenergoinspeksiya o‘n kun
          muddatda taqdim etilgan dasturni asoslanganligini ko‘rib chiqadi va
          natijasi bo‘yicha kelishadi yoki asoslantirgan holda kelishishni rad
          etadi; <br /> tasdiqlangan dasturga asosan amalga oshirilgan ishlar
          natijasida iqtisod qilingan tabiiy gaz hajmi energiya auditori
          tomonidan o‘rganiladi va ushbu hajmlar bo‘yicha xulosa beriladi;
          -Energiya auditor xulosasi O‘zenergoinspeksiya va gaz taʼminoti
          tashkilotiga taqdim etiladi va ijobiy xulosa taqdim etilgan kundan
          boshlab chegirmalar qo‘llaniladi.
        </p>
      </div>
    </section>
  );
};

export default Natural;
