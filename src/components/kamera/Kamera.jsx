import React from "react";
import img1 from "@/images/imgper1.png";
import img2 from "@/images/imgpre2.png";
import img3 from "@/images/imgpre.png";
import img4 from "@/images/imgpre3.png";
import img5 from "@/images/imgpre4.png";
import img6 from "@/images/imgpre6.png";
import img7 from "@/images/imgbiz.png";

const Kamera = () => {
  return (
    <>
      <div className="max-w-[1240px] container mx-auto px-5 lg:text-xl text-black dark:text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between pb-5 border-b gap-x-5">
          <p>
            Thermal kamera yoki infraqizil kamera obyektlarning ko'rinadigan
            yorug'lik emas, balki ular chiqaradigan issiqlik asosida tasvirlarni
            oladi. U infraqizil nurlanishni aniqlaydi va ularni termogramma deb
            ataladigan tasvirlarga aylantiradi, bunda har xil haroratlar turli
            ranglarda aks etadi. Thermal kameralar quyidagi sohalarda, harorat
            farqlari muhim bo'lganda, juda foydali:
            <br /> • Energiya auditi: Binolardagi issiqlik yo'qotilishini, yomon
            izolyatsiyani va havo sizib chiqishini aniqlash, bu energiya
            samaradorligini oshirish uchun muhim.
            <br /> • Elektr tekshiruvlari: Isib ketayotgan elektr
            komponentlarini ularning ishdan chiqishidan oldin aniqlash.
            <br /> • HVAC tizimlari: Issiqlik va sovutish tizimlarining
            samaradorligi va ishlashini tekshirish.
            <br /> • Mexanik tekshiruvlar: Harakatlanuvchi qismlardagi
            ishqalanish va eskirishni harorat o'zgarishlarini aniqlash orqali
            topish.
            <br />
            Bu kameralar energiya menejmenti, sanoat texnik xizmat ko'rsatish va
            xavfsizlikda keng qo'llaniladi. Ular energiya samarasizligini vizual
            ko'rinishga keltiradi, bu esa xarajatlarni tejash va xavfsizlikni
            oshirish imkonini beradi.
          </p>
          <img src={img1} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pb-5 border-b pt-4 gap-x-5">
          <img src={img2} alt="" />
          <p>
            Flue gas analizatori – bu yondiriladigan yoqilg'idan hosil
            bo'ladigan chiqindi gazlar tarkibini o'lchash uchun ishlatiladigan
            asbob. U pechlar, qozonlar, sanoat o'choqlari va boshqa yonuvchi
            tizimlardan chiqqan gazlarni tekshiradi. Flue gaz analizatori
            quyidagi tarkibiy qismlarni o'lchaydi:
            <br /> • Kislorod (O₂): Yoqilg'i yonishining qanchalik samarali
            bo'lganini ko'rsatadi.
            <br /> • Karbonat angidrid (CO₂): Yonish samaradorligini baholashda
            yordam beradi.
            <br /> • Karbon oksidi (CO): Gazning to'liq yonmaganini ko'rsatadi
            va xavfli chiqindi hisoblanadi.
            <br /> • Azot oksidlari (NOx): Havo ifloslanishiga va kislotali
            yomg'irga sabab bo'ladigan birikmalar.
            <br />
            Flue gaz analizatorlari yonish jarayonini optimallashtirishda,
            energiya samaradorligini oshirishda va ifloslanishni kamaytirishda
            muhim ahamiyatga ega. Ular sanoat energiya menejmenti va ekologik
            nazorat uchun keng qo'llaniladi.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pb-5 border-b pt-4 gap-x-5">
          <p>
            3 fazali quvvat analizatori – bu elektr tizimlarida uch fazali
            quvvatning turli parametrlari, jumladan kuchlanish, tok, faol
            quvvat, reaktiv quvvat, quvvat faktori va chastotani o‘lchash uchun
            ishlatiladigan asbob. Bu analizator elektr tarmoqlarining
            samaradorligi va barqarorligini baholashda muhim ahamiyatga ega. 3
            fazali quvvat analizatori quyidagilarni bajarishga yordam beradi:
            <br /> • Faol quvvatni o‘lchash (kW): Tizimda haqiqatan iste’mol
            qilinayotgan quvvat miqdorini ko'rsatadi.
            <br /> • Reaktiv quvvat (kVAR): Tizimda quvvat omili past bo‘lsa,
            ortiqcha reaktiv quvvat mavjud bo‘lishi mumkin.
            <br /> • To‘liq quvvat (kVA): Faol va reaktiv quvvatni
            birlashtiradi, bu esa umumiy yukni ko‘rsatadi.
            <br /> • Quvvat faktori (PF): Elektr quvvatini qanday samaradorlikda
            ishlatilayotganini aniqlaydi.
            <br /> • Chastota (Hz): Elektr tarmog‘ining chastotasini nazorat
            qilish imkonini beradi.
            <br /> • 3 fazali quvvat analizatori elektr tarmoqlarda muammolarni
            aniqlash, ortiqcha quvvat sarfini kamaytirish va tizimning umumiy
            samaradorligini oshirish uchun muhim vosita hisoblanadi. Ular,
            ayniqsa, sanoat, qurilish va katta quvvat iste’mol qiladigan
            joylarda keng qo‘llaniladi.
          </p>
          <img src={img3} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pb-5 border-b pt-4 gap-x-5">
          <img src={img4} alt="" />
          <p>
            Ultrasonik oqim o‘lchagich – bu suyuqlik yoki gazning quvur orqali
            oqish tezligini ultratovush to‘lqinlari yordamida o‘lchaydigan
            asbob. Bu qurilma o‘lchashni kontakt usulida yoki quvurning tashqi
            tomoniga o‘rnatilgan holda bajarishi mumkin, bu esa o‘lchovlarni
            yanada qulay va xavfsiz qiladi. Ultrasonik oqim o‘lchagich qanday
            ishlaydi:
            <br /> • Tranzit vaqt usuli: Oqim yo‘nalishidagi va unga
            qarama-qarshi yo‘nalishda yuborilgan ultratovush to‘lqinlarining
            o‘tish vaqtini solishtiradi. Bu vaqt farqi oqim tezligini aniqlaydi.
            <br /> • Doppler usuli: Oqimdagi zarrachalar yoki pufakchalar
            ultratovush to‘lqinini qaytaradi, va bu to‘lqinlarning chastotasi
            o‘zgarishi asosida oqim tezligi hisoblanadi.
            <br /> • Ultrasonik oqim o‘lchagichlar quyidagi sabablar tufayli
            keng qo‘llaniladi:
            <br /> • Kontakt bo‘lmagan o‘lchov: Quvur ichiga kirmasdan o‘lchash
            imkoniyati tufayli xavfsiz.
            <br /> • Harakatlanuvchi qismlarning yo‘qligi: Uzoq muddatli
            foydalanish uchun ishonchli va kam texnik xizmat talab qiladi.
            <br /> • Suyuqlik va gazlar uchun mosligi: Turli muhitlar, jumladan
            suv, neft, kimyoviy moddalarning oqim tezligini o‘lchashga mos
            keladi.
            <br />
            Ultrasonik oqim o‘lchagichlar suv ta’minoti tizimlari, energiya
            sektorida va sanoat texnologiyalarida, oqimni aniqlik bilan nazorat
            qilish talab qilinadigan sohalarda keng qo‘llaniladi.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pb-5 border-b pt-4 gap-x-5">
          <p>
            Lazer termometr, yoki infraqizil termometr, – bu lazer ko‘rsatkich
            yordamida aniq bir nuqtaning haroratini kontakt qilmasdan
            o‘lchaydigan qurilma. U ob'ektlardan chiqariladigan infraqizil
            nurlanishni o‘lchaydi va uni harorat ko‘rsatkichiga aylantiradi.
            Lazer termometrlari tezkor va xavfsiz bo‘lib, qiyin yetib
            boriladigan yoki xavfli joylarning haroratini o‘lchash uchun ideal.
            Lazer termometr qanday ishlaydi:
            <br />• Infraqizil nurlanishni o‘lchash: Ob'ekt sirtidan
            chiqariladigan infraqizil energiyani to‘playdi va uni haroratga
            aylantiradi.
            <br />• Lazer yordamida aniqlikni oshirish: Lazer nurlari o‘lchov
            nuqtasini aniqlashda yordam beradi, lekin u haroratni o‘lchashda
            ishtirok etmaydi.
            <br /> Lazer termometrining afzalliklari:
            <br />• Kontakt qilmasdan o‘lchash: Xavfsiz masofadan turib
            haroratni aniqlash.
            <br />• Tezkorlik: Sekundlar ichida harorat ko‘rsatkichini beradi.
            <br />• Turli materiallar uchun mos: Metall, plastmassa, suyuqlik va
            boshqa yuzalarning haroratini o‘lchashi mumkin.
            <br />
            Lazer termometrlar energiya menejmentida, qozon va isitish
            tizimlarida, sanoat texnik xizmat ko‘rsatishda, shuningdek
            oziq-ovqat va farmatsevtika sanoatida haroratni nazorat qilishda
            keng qo‘llaniladi.
          </p>
          <img src={img5} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pb-5 border-b pt-4 gap-x-5">
          <img src={img6} alt="" />
          <p>
            Anemometr – bu shamolning tezligini va ko‘pincha yo‘nalishini
            o‘lchaydigan asbob. Anemometrlar ob-havoni kuzatish, meteorologiya,
            shamol energiyasini o‘rganish va sanoat shamol tezligini aniqlashda
            keng qo‘llaniladi.
            <br />
            Anemometrning turlari:
            <br />• Qopqoqli anemometr: U bir necha kichik kuboklardan iborat
            bo‘lib, shamol harakati bilan kuboklar aylanadi. Aylanish tezligi
            shamol tezligini o‘lchash uchun ishlatiladi.
            <br />• Issiq simli anemometr: Simni qizdirib, uning sovish tezligi
            orqali shamol tezligini o‘lchaydi. Bu usul past tezlikdagi shamolni
            aniqlashda aniq.
            <br />• Ultrasonik anemometr: Shamol yo‘nalishidagi va unga
            qarama-qarshi yo‘nalishdagi ultratovush signallari vaqtini
            solishtirib tezlikni aniqlaydi.
            <br />• Bosimga asoslangan anemometr: Shamolning dinamik bosimini
            o‘lchab, uni tezlikka aylantiradi.
            <br />• Anemometrlar quyidagi sohalarda qo‘llaniladi:
            <br />• Ob-havo kuzatuvlari: Meteorologiyada shamol tezligi va
            yo‘nalishini aniqlash uchun muhim.
            <br />• Shamol energetikasi: Shamol elektr stansiyalari joylashuvini
            aniqlash va samaradorligini oshirish.
            <br />• Sanoat va qurilish: Bino va inshootlarda shamol ta'sirini
            aniqlash.
            <br />
            Anemometrlar ayniqsa qurilish, parvozlar, suv transporti va energiya
            ishlab chiqarish sohalarida xavfsizlik va samaradorlikni oshirish
            uchun muhimdir.
          </p>
        </div>
        <p className="pt-7 text-xl pb-6">
          Yuqorida keltirilgan o’lchov asboblatidan tashqari, malakali
          hodimlarimiz tomonidan namlik o’lchagich (gigrometr), metal qalinlik
          o’lchagich, yorug’lik oqimini o’lchagich (lyuksemetr) bosim o’lchagich
          (manometr) va boshqa asboblar ish faoliyatida faol foydalaniladi.
        </p>
      </div>
      <img className="w-full mx-auto container" src={img7} alt="" />
    </>
  );
};

export default Kamera;
