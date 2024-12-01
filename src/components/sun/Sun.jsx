import React, { useEffect } from "react";

const Sun = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-8 overflow-x-hidden">
      <div className="container max-w-[1240px] mx-auto px-5">
        <p className="pb-8 lg:text-xl dark:text-white">
          Umumiy quvvati 100 kVtgacha bo‘lgan qayta tiklanuvchi energiya
          manbalari qurilmalarini o‘rnatgan va ulardan foydalanuvchi shaxslar,
          ular foydalanishga topshirilgan kundan e’tiboran uch yil muddatga,
          quyidagi soliqlarni to‘lashdan ozod etiladi: <br /> ushbu qurilmalar
          bo‘yicha — yuridik shaxslarning mol-mulkiga solinadigan soliqni,
          alohida turuvchi qurilmalar bilan band bo‘lgan yer uchastkalari
          bo‘yicha — yuridik shaxslardan olinadigan yer solig‘ini, elektr
          energiyasini umumiy tarmoqqa sotishdan olingan foyda bo‘yicha <br /> —
          foyda solig‘ini; <br /> uy-joy fondining ko‘chmas mulk obyektlari
          bo‘yicha jismoniy shaxslardan olinadigan mol-mulk solig‘i va jismoniy
          shaxslardan olinadigan yer solig‘ini. <br /> Agar qurilmalar
          o‘rnatilayotgan quyosh panellari quvvatining 25 foizidan kam bo‘lmagan
          quvvatni tashkil etadigan elektr energiyasini saqlash tizimi bilan
          o‘rnatilgan bo‘lsa, ushbu kichik bandda nazarda tutilgan soliq
          imtiyozlari ular foydalanishga topshirilgan kundan boshlab o‘n yil
          muddatga qo‘llaniladi. <br /> Ushbu kichik bandda belgilangan soliq
          imtiyozlari jismoniy shaxslarga ular tomonidan umumiy quvvati 1 kVtdan
          ortiq bo‘lgan qayta tiklanuvchi energiya manbalari qurilmalari
          o‘rnatilganda har bir obyekt bo‘yicha bir marotaba qo‘llaniladi.{" "}
          <br /> Bunda soliq imtiyozlarining yillik miqdori jismoniy shaxslardan
          olinadigan mol-mulk solig‘i bo‘yicha — bazaviy hisoblash miqdorining
          ikki baravaridan, jismoniy shaxslardan olinadigan yer solig‘i bo‘yicha
          esa — bazaviy hisoblash miqdoridan oshmasligi lozim
        </p>
      </div>
    </section>
  );
};

export default Sun;
