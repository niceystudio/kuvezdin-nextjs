import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import CopyButton from "@/components/CopyButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Hero />

      <main className="container mx-auto px-6 py-16 max-w-5xl">

        {/* I. Дневни распоред богослужења */}
        <section className="mt-16 pb-16 border-b border-[#6B1A1A]/15" id="raspored">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">I</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Дневни распоред богослужења</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 border-t-4 border-t-[#6B1A1A] p-6">
              <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-4">Радним данима</p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline pb-3 border-b border-[#6B1A1A]/10">
                  <span className="text-sm text-[#4A3C2A]">Света Литургија</span>
                  <span className="text-xl text-[#6B1A1A] font-serif">6:00</span>
                </div>
                <div className="flex justify-between items-baseline pb-3 border-b border-[#6B1A1A]/10">
                  <span className="text-sm text-[#4A3C2A]">Молитва за здравље — Јелеосвећење</span>
                  <span className="text-xl text-[#6B1A1A] font-serif">9:30</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-[#4A3C2A]">Вечерња служба</span>
                  <span className="text-xl text-[#6B1A1A] font-serif">16:45</span>
                </div>
              </div>
            </div>
            <div className="bg-[#FBF7EE] border border-[#C9A84C]/30 border-t-4 border-t-[#C9A84C] p-6">
              <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-4">Недељом и празницима (црвено слово)</p>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline pb-3 border-b border-[#6B1A1A]/10">
                  <span className="text-sm text-[#4A3C2A]">Света Литургија</span>
                  <span className="text-xl text-[#6B1A1A] font-serif">9:00</span>
                </div>
                <div className="flex justify-between items-baseline pb-3 border-b border-[#6B1A1A]/10">
                  <span className="text-sm text-[#4A3C2A]">Јелеосвећења нема</span>
                  <span className="text-xl text-[#6B1A1A] font-serif">—</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-[#4A3C2A]">Вечерња служба</span>
                  <span className="text-xl text-[#6B1A1A] font-serif">16:45</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* II. Света Литургија */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="liturgija">
          <div className="flex items-baseline gap-4 mb-8 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">II</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Света Литургија</h2>
          </div>
          <div className="mb-6">
            <h3 className="text-xl text-[#6B1A1A] font-serif mb-3">Ко може да присуствује Литургији?</h3>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              Православно крштени верници, уредно обучени: жене у сукњама (не изнад колена) са марамом, мушкарци у дугим панталонама, пожељно сви у дугим рукавима.
            </p>
          </div>
          <hr className="border-t border-[#C9A84C]/30 my-6" />
          <div className="mb-6">
            <h3 className="text-xl text-[#6B1A1A] font-serif mb-3">Молитва за живе и упокојене</h3>
            <p className="text-base text-[#4A3C2A] leading-relaxed mb-3">Читко ћириличним писмом уписујемо на листић имена својих сродника:</p>
            <ul className="space-y-3">
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-3">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                <strong className="text-[#6B1A1A]">Живих</strong> — православно крштених сродника. Папирић треба да овери потписом неко од манастирске браће. Помињање траје минимум 40 дана на проскомидији.
              </li>
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed pb-3">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                <strong className="text-[#6B1A1A]">Упокојених</strong> — уколико су имали православно опело. Не примамо на молитву имена особа које нису биле православно крштене, самоубица, нити особа кремираних по сопственој вољи. Помињање траје минимум 40 дана на проскомидији и парастосу.
              </li>
            </ul>
            <div className="mt-4 p-3 bg-[#6B1A1A]/5 border-l-4 border-[#6B1A1A] text-sm text-[#4A3C2A]">
              Ценовник не постоји — можете оставити добровољни прилог.
            </div>
          </div>
        </section>

        {/* III. Света Тајна Јелеосвећења */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="jeleoskvecenje">
          <div className="flex items-baseline gap-4 mb-8 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">III</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Света Тајна Јелеосвећења</h2>
          </div>
          <p className="text-[11px] text-[#6B5C4C] tracking-wider uppercase mb-6">Манастирска правила за присуствовање на молитви за здравље</p>
          <div className="mb-6">
            <h3 className="text-xl text-[#6B1A1A] font-serif mb-3">Ко може да присуствује?</h3>
            <p className="text-base text-[#4A3C2A] leading-relaxed mb-3">
              Православно крштене особе <span className="text-[#6B1A1A] font-semibold border-b-2 border-[#C9A84C]/50 pb-0.5">са крстом око врата</span>, које посте <span className="text-[#6B1A1A] font-semibold border-b-2 border-[#C9A84C]/50 pb-0.5">сва четири поста</span> у току године: Васкршњи, Петровски, Великогоспојински и Божићни пост, као и <span className="text-[#6B1A1A] font-semibold border-b-2 border-[#C9A84C]/50 pb-0.5">среду и петак</span> у свим седмицама у току године (изузетак су тзв. трапаве седмице).
            </p>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              Они који не посте могу присуствовати, али ће бити помазивани тек после периода од 40 дана у ком су постили у складу са календаром СПЦ.
            </p>
          </div>
          <hr className="border-t border-[#C9A84C]/30 my-6" />
          <div className="mb-6">
            <h3 className="text-xl text-[#6B1A1A] font-serif mb-3">Посебни случајеви</h3>
            <ul className="space-y-3">
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-3">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                <strong className="text-[#6B1A1A]">Пушачи</strong> — не помазујемо на светој тајни јелеосвећења, већ после 10 дана од момента потпуног остављања дувана, уз услов поста у складу са календаром СПЦ.
              </li>
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-3">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                <strong className="text-[#6B1A1A]">Деца до 10 година</strong> — која су болесна или имају сметње у развоју могу присуствовати уколико родитељи посте у складу са календаром СПЦ.
              </li>
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-3">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                <strong className="text-[#6B1A1A]">Одрасле особе са озбиљним психичким проблемима, нарко-зависне особе, алкохоличари</strong> — могу долазити на молитву за здравље уколико посте по правилима СПЦ, узимају медицинску терапију и уз обавезну пратњу сродника, али не могу ноћивати у манастиру.
              </li>
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed pb-3">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                <strong className="text-[#6B1A1A]">Женске особе</strong> које на себи имају пудер, шминку или лаковане нокте — не примамо на молитву и не помазујемо.
              </li>
            </ul>
          </div>
          <hr className="border-t border-[#C9A84C]/30 my-6" />
          <div className="mb-6">
            <h3 className="text-xl text-[#6B1A1A] font-serif mb-3">Напомена</h3>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              Уколико желите да у манастиру Кувеждин добијате духовну помоћ, поред наведеног поредка поста треба да читате јутарње и вечерње молитве из молитвеника и Псалтир. Супружници треба да ступе у православни брак уколико нису црквено венчани. Духовник манастира исповеда православне вернике по завршетку Свете тајне јелеосвећења.
            </p>
          </div>
          <div className="bg-[#F2EDE3] border border-[#C9A84C]/30 p-6">
            <p className="text-[11px] text-[#6B1A1A] tracking-wider uppercase mb-3">Распоред служења Јелеосвећења у току године</p>
            <p className="text-base text-[#4A3C2A] leading-relaxed mb-3">Света тајна јелеосвећења служи се радним данима у току целе године, осим:</p>
            <ul className="space-y-2">
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-2">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                У периоду од Божића до Светог Јована
              </li>
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-2">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                У првој седмици Великог поста
              </li>
              <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                У периоду од Великог четвртка до понедељка после Томине седмице
              </li>
            </ul>
          </div>
        </section>

        {/* IV. Групне посете и коначење */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="posete">
          <div className="flex items-baseline gap-4 mb-8 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">IV</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Групне посете и коначење</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 p-6">
              <p className="text-[11px] text-[#6B5C4C] tracking-wider uppercase mb-4">Групне посете</p>
              <ul className="space-y-3">
                <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-3">
                  <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                  Организоване групне посете аутобусом или минибусом морају бити <strong className="text-[#6B1A1A]">унапред најављене</strong> и добити благослов.
                </li>
                <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed pb-3">
                  <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                  За све посетиоце манастир је отворен од <strong className="text-[#6B1A1A]">6:00 до 20:00 часова</strong>.
                </li>
              </ul>
            </div>
            <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 p-6">
              <p className="text-[11px] text-[#6B5C4C] tracking-wider uppercase mb-4">Коначење</p>
              <ul className="space-y-3">
                <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-3">
                  <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                  У манастиру могу коначити само <strong className="text-[#6B1A1A]">мушке особе</strong>.
                </li>
                <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed border-b border-[#6B1A1A]/8 pb-3">
                  <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                  Услов: <strong className="text-[#6B1A1A]">непушачи</strong> са усменим благословом.
                </li>
                <li className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed pb-3">
                  <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                  Долазак најкасније до краја вечерње службе — <strong className="text-[#6B1A1A]">19:30 часова</strong>.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* V. Добровољни прилози */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="zaduzbinastvo">
          <div className="flex items-baseline gap-4 mb-8 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">V</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Добровољни прилози</h2>
          </div>
          <div className="bg-[#E8DCC8] border border-[#6B1A1A]/15 p-8 flex items-center justify-between gap-8 flex-wrap">
            <div>
              <p className="text-base text-[#4A3C2A] mb-3">Ваше добровољне прилоге можете уплатити на следећи рачун:</p>
              <p className="text-2xl text-[#6B1A1A] font-semibold tracking-wide mb-2">205-507773-57</p>
              <p className="text-sm text-[#6B5C4C]">НЛБ Комерцијална банка</p>
            </div>
            <CopyButton text="205-507773-57" />
          </div>
        </section>

        {/* VI. Галерија */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="galerija">
          <div className="flex items-baseline gap-4 mb-8 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">VI</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Галерија</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { src: "/monastery-1.svg", alt: "Архитектура манастира", label: "АРХИТЕКТУРА" },
              { src: "/monastery-2.svg", alt: "Перспектива манастира", label: "ПЕРСПЕКТИВА" },
              { src: "/monastery-3.svg", alt: "Детаљи манастира", label: "ДЕТАЉИ" },
            ].map((img) => (
              <a key={img.label} href="#galerija" className="relative aspect-[4/3] group overflow-hidden block">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-white/90 tracking-[0.15em] uppercase font-medium">{img.label}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <a href="#galerija" className="px-8 py-3 bg-[#C9A84C] text-[#1A1209] text-xs tracking-[0.15em] uppercase font-medium hover:bg-[#E8C96A] transition-colors">
              ПОГЛЕДАЈ СВЕ ФОТОГРАФИЈЕ
            </a>
          </div>
        </section>

        {/* VII. Како доћи */}
        <section className="mt-16 pb-16" id="mapa">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">VII</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Како доћи до манастира</h2>
          </div>
          <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 p-4 md:p-6">
            <div className="aspect-[16/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1d2814.962073961971!2d19.508446526609937!3d45.127104305866624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b9fa9114988d3%3A0x238344dbb02868b1!2sManastir%20Kuve%C5%BEdin!5e0!3m2!1sen!2srs!4v1774609655930!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Манастир Кувеждин на мапи"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C0808] border-t border-[#C9A84C]/20 py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-start gap-8 flex-wrap mb-6">
            <div className="text-[#F5EDD8]">
              <p className="text-lg font-serif">Манастир Кувеждин</p>
              <p className="text-[10px] text-[#C9A84C] tracking-wider uppercase mt-1">Српска Православна Црква · Епархија Сремска</p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-1">
              {["О исповести", "О псалтиру", "Историјат", "Галерија", "Закон Божији", "Задужбинарство", "Обавештења", "Преузимања"].map((label) => (
                <a key={label} href="#" className="text-[11px] text-[#F5EDD8]/55 hover:text-[#C9A84C] transition-colors">{label}</a>
              ))}
            </nav>
          </div>
          <div className="pt-4 border-t border-[#C9A84C]/10 text-center">
            <p className="text-[10px] text-[#F5EDD8]/30 tracking-wide">Манастир Кувеждин · Сремска епархија СПЦ</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
