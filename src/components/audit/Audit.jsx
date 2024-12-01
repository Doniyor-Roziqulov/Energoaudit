import React, { useEffect } from "react";

const Audit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="container mx-auto max-w-[1240px] pt-7 px-4 lg:px-0">
        <p className="pb-8 lg:text-xl dark:text-white">
          Energiya auditi – bu tizimli va chuqur tekshiruv bo‘lib, u orqali
          korxonalar, binolar yoki boshqa inshootlarda energiya resurslarining
          iste’moli, samaradorligi va yo‘qotilishi aniqlanadi. Ushbu jarayon,
          ortiqcha energiya sarfini kamaytirish, chiqindilarni kamaytirish va
          umumiy xarajatlarni kamaytirish maqsadida amalga oshiriladi.
          <br />
          Energiya auditining turlari:
          <br />
          Energiya auditlari o‘zining chuqurligi va ko‘lami bo‘yicha bir necha
          turlarga bo‘linadi:
          <span className="block pl-4">
            <br />
            1. Oddiy energiya auditi (yoki o‘chog‘ qidirish auditi): Bu qisqacha
            o‘tkaziladigan, asosiy energiya sarfi omillarini va isroflarini
            aniqlashga qaratilgan tahlil. Oddiy audit odatda binoning umumiy
            energiya sarfini kuzatadi, yoritish va isitish tizimlarini
            tekshiradi.
            <br />
            2. Chuqurlashtirilgan energiya auditi: Bu to‘liq tahlil va
            o‘lchovlarni o‘z ichiga oladi. Har bir qurilma va tizimning
            samaradorligi, energiya iste’moli, elektr tizimlaridagi yuklanish va
            isitish-sovutish tizimlarining ishlash ko‘rsatkichlari batafsil
            o‘rganiladi. Bu auditda ko‘pincha qurilmalar va tizimlarning
            energiyani tejash bo‘yicha texnik holati, ularning modernizatsiya
            qilinishiga bo‘lgan ehtiyoji ham aniqlanadi.
            <br />
            3. Davriy yoki maxsus audit: Ushbu turdagi audit maxsus texnik
            jarayonlar va texnologiyalarni tekshirish uchun amalga oshiriladi,
            masalan, ishlab chiqarish texnologiyalarida o‘zgarish kiritilganidan
            so‘ng energiya tejamkorligi o‘lchanadi.
          </span>
          <br />
          Energiya auditining asosiy bosqichlari:
          <br />
          1. Ma’lumotlar yig‘ish va dastlabki tahlil
          <span className="block pl-4">
            <br />• Ma’lumotlarni yig‘ish: Yillik yoki oylik energiya sarfi,
            ishlatilayotgan asbob-uskunalar, yoritish va isitish tizimlari
            to‘g‘risidagi ma’lumotlarni yig‘ish. Hisob-kitoblar va energetik
            xarajatlar to‘g‘risidagi ma’lumotlar tahlil qilinadi.
            <br />• Dastlabki tahlil: Binoning energiya xarajatlari va ularning
            qismlari o‘rtasidagi bog‘liqlikni tahlil qilish. Bu bosqichda eng
            ko‘p energiya sarflanadigan joylar aniqlanadi.
          </span>
          <br />
          2. Audit obyektini tekshirish va o‘lchash
          <span className="pl-4 block">
            <br />• Vizual tekshiruv: Binoda energiya iste’mol qiluvchi barcha
            qurilma va tizimlarning umumiy holati o‘rganiladi. Issiqlik
            yo‘qotishlari va havo oqimlarining yaroqsiz joylari aniqlanadi.
            <br />• O‘lchovlar: Yoritish, isitish-sovutish, shamollatish
            tizimlari, elektr qurilmalari va boshqalar bo‘yicha aniq o‘lchovlar
            amalga oshiriladi. Ultratovush, infraqizil yoki boshqa yuqori
            aniqlikdagi o‘lchov uskunalari qo‘llaniladi.
          </span>
          <br />
          3. Tahlil va muammolarni aniqlash
          <span className="pl-4 block">
            <br />• Energiya isrofi va samaradorlikni baholash: Energiya
            iste’molidagi yo‘qotishlarni, masalan, issiqlik izolyatsiyasi
            yetishmasligi yoki reaktiv energiya miqdorini aniqlash.
            <br />• Maslahatlar va takliflar ishlab chiqish: Qurilmalar yoki
            tizimlarni almashtirish, modernizatsiya qilish, samaradorligini
            oshirishga qaratilgan texnik takliflar kiritiladi.
          </span>
          <br />
          4. Hisobot tuzish va tavsiyalar
          <span className="block pl-4">
            <br />• Energiya auditi hisobotini tayyorlash: To‘plangan
            ma’lumotlar va o‘lchov natijalari asosida batafsil hisobot tuziladi,
            bunda tahlil, energiya sarfi omillari va samaradorlikni oshirish
            uchun tavsiyalar kiritiladi.
            <br />• Qaror qabul qilish: Texnik tavsiyalar va iqtisodiy tahlillar
            asosida qanday o‘zgarishlar amalga oshirilishi kerakligi haqida
            qaror qabul qilinadi.
          </span>
          <br />
          Energiya auditining foydalari:
          <span className="pl-4 block">
            <br />• Xarajatlarni kamaytirish: Energiya auditi orqali ortiqcha
            xarajatlar va yo‘qotishlar aniqlanadi, bu esa energiyani tejashga va
            xarajatlarni kamaytirishga olib keladi.
            <br />• Atrof-muhitga ta’sirni kamaytirish: Uglerod chiqindilarini
            kamaytirish orqali ekologik ta’sirni pasaytirish imkoniyati
            yaratiladi.
            <br />• Qonuniy talablarni bajarish: Energiya samaradorligini
            oshirish bo‘yicha xalqaro standartlarga va mahalliy qonunchilik
            talablariga rioya qilish uchun yo‘l ochiladi.
          </span>
          <br />
          Energiya auditi natijasida amalga oshirilishi mumkin bo‘lgan
          chora-tadbirlar:
          <br />{" "}
          <span className="text-red-500 dark:text-white pl-4">
            • Yoritishni optimallashtirish: Kam energiya sarflaydigan LED
            yoritish tizimlarini o‘rnatish.
          </span>
          <br />{" "}
          <span className="text-red-500 dark:text-white pl-4">
            • Isitish va sovutish tizimlarini modernizatsiya qilish: Qozonlarni
            yoki konditsionerlarni yangilash yoki ularning samaradorligini
            oshirish bo‘yicha texnik o‘zgarishlar kiritish.
          </span>
          <br />{" "}
          <span className="text-red-500 dark:text-white pl-4">
            • Reaktiv quvvatni boshqarish: Kompensatsiya tizimlarini o‘rnatish
            orqali reaktiv quvvat yo‘qotilishini kamaytirish.
          </span>
          <br />
          Energiya auditi samarali energiya menejmentini yo‘lga qo‘yish,
          xarajatlarni kamaytirish va ekologik jihatdan xavfsiz faoliyat
          yuritishni ta'minlash uchun asosiy qadam hisoblanadi.
        </p>
      </div>
    </section>
  );
};

export default Audit;
