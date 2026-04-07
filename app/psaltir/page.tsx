import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "О Псалтиру | Манастир Кувеждин",
  description: "Упутство за читање псалтира.",
};

const uvodniCitat = [
  "Ако желиш да се кајеш и исповедаш, или те је снашла нека патња и искушења, уколико те прогоне,",
  "или су туга и немир овладали тобом, или нешто слично трпиш, уколико тежиш ка врлини и напретку у",
  "њој, а видиш да ти враг смета, желиш ли да хвалиш, прослављаш Господа и да Му благодариш -",
  "у Божанственим псалмима наћи ћеш упутства за све то.",
] as const;

const sadrzaj = [
  {
    type: "pasus",
    text: 'Псалтир се састоји од 20 катизми (глава), а свака од њих подељена је на три дела (славе). Када читамо псалме и дођемо до речи "Слава" тада изговарамо следеће речи:',
  },
  {
    type: "istaknuto",
    text: "Слава Оцу и Сину и Светоме Духу, и сада и увек и у векове векова. Амин. Алилуја, алилуја, алилуја слава Теби Боже (3x). Господе помилуј (3x)",
  },
  {
    type: "pasus",
    text: "И затим можемо својим речима изговорити молитву за здравље својих ближњих или своје здравље.",
  },
  {
    type: "oznaka",
    text: "Например:",
  },
  {
    type: "istaknuto",
    text: "Помени Господе слугу Твог (име) и подај му здравље и спасење.",
  },
  {
    type: "oznaka",
    text: "Или:",
  },
  {
    type: "istaknuto",
    text: "Помени Господе кћер моју (име) и подај јој успех у учењу и слогу у браку.",
  },
  {
    type: "oznaka",
    text: "А за упокојене сроднике:",
  },
  {
    type: "istaknuto",
    text: "Упокој Господе душу уснулог слуге Твог (име) и даруј му Царство небеско.",
  },
  {
    type: "pasus",
    text: "И ако постоји нека духовна потреба или молба, на овом месту можемо је изговарати, одабравши сами прикладне речи.",
  },
  {
    type: "oznaka",
    text: "Например:",
  },
  {
    type: "istaknuto",
    text: "Господе помози ми да престанем да пушим дуван.",
  },
  {
    type: "pasus",
    text: "Затим, када поменемо све оне које желимо, говоримо:",
  },
  {
    type: "istaknuto",
    text: "Слава Оцу и Сину и Светоме Духу, и сада и увек и у векове векова. Амин.",
  },
  {
    type: "pasus",
    text: 'И затим настављамо да читамо псалтир до следеће "Славе" где поново можемо поменути имена која желимо.',
  },
  {
    type: "pasus",
    text: "Постоји благочестива пракса читања псалтира према којој се на пример, на првој слави молимо за здравље наших ближњих, на другој за своје здравље и спасење, а на трећој за упокојење душа наших православних сродника.",
  },
  {
    type: "pasus",
    text: "Приликом читања псалтира у свом дому, добро је имати упаљену свећу или кандило.",
  },
  {
    type: "pasus",
    text: "Преподобни Серафим Саровски саветује да се псалми читају наглас или шапатом, да би и ум и уши пазили на изговорене речи. Приликом читања може се седети.",
  },
  {
    type: "pasus",
    text: "Једини период у току године када се не практикује читање псалтира је период од Великог Четвртка Страсне седмице до Томине недеље (Антипасхе), када се псалтир не чита ни у храмовима.",
  },
] as const;

const zaNovoupokojene = [
  'По благочестивом обичају, за православног новоупокојеног хришћанина, чита се цео псалтир за један дан, од момента констатације смрти до сахране, а име упокојеног се помиње на свим "славама". У манастирима постоји пракса непрекидног читања псалтира у истом том периоду.',
  "Сматра се да речи псалама помажу души новоупокојеног на путу ка Суду Божијем, да је укрепљују и теше. Управо из тог разлога псалтир за упокојеног се чита постојано у току 40 дана после упокојења, будући да душа упокојеног у том периоду пролази митарства и у четрдесети дан над њом се окончава Суд Божији.",
] as const;

export default function PsaltirPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <SiteNav />

      <section className="relative overflow-hidden bg-[#2C0808]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url(/ornament-2.svg)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative mx-auto flex min-h-[320px] flex-col items-center justify-center px-6 py-16 text-center md:py-20">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <RussianOrthodoxCross size={24} />
            <div className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <p className="mb-4 text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase">
            О Псалтиру
          </p>
          <h1 className="font-serif text-5xl leading-none text-[#F5EDD8] md:text-6xl">
            Упутство за читање псалтира
          </h1>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-6 py-16">
        <section className="border-b border-[#6B1A1A]/15 pb-16">
          <blockquote className="mx-auto max-w-4xl border-y border-[#C9A84C]/40 py-8 text-center font-serif text-2xl leading-10 text-[#6B1A1A] italic md:text-[2rem] md:leading-[2.9rem]">
            {uvodniCitat.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="mt-6 text-sm tracking-[0.18em] text-[#8D6A2B] uppercase not-italic">
              свети Атанасије Велики
            </p>
          </blockquote>
        </section>

        <section className="border-b border-[#6B1A1A]/15 pb-16" id="osnovno">
          <div className="mt-12 mb-8 flex items-baseline gap-4">
            <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
              I
            </span>
            <h2 className="font-serif text-4xl text-[#6B1A1A]">
              Основно о читању Псалтира
            </h2>
          </div>

          <div className="space-y-5">
            {sadrzaj.map((item, index) => {
              if (item.type === "istaknuto") {
                return (
                  <div
                    key={index}
                    className="border border-[#6B1A1A]/10 bg-[#FBF7EE] px-6 py-5 font-serif text-xl leading-9 text-[#6B1A1A]"
                  >
                    {item.text}
                  </div>
                );
              }

              if (item.type === "oznaka") {
                return (
                  <p
                    key={index}
                    className="pt-2 text-[10px] tracking-wider text-[#6B5C4C] uppercase"
                  >
                    {item.text}
                  </p>
                );
              }

              return (
                <p key={index} className="text-base leading-relaxed text-[#4A3C2A]">
                  {item.text}
                </p>
              );
            })}
          </div>

          <blockquote className="mt-10 border-l-4 border-[#C9A84C] bg-[#FBF7EE] px-6 py-6 text-base leading-relaxed text-[#4A3C2A] italic">
            Не треба се бринути и узнемиравати уколико смисао псалама није
            јасан. Светитељ Варсануфије Оптински о томе говори овако:{" "}
            &quot;Ти не разумеш али бесови разумеју и беже&quot;.
          </blockquote>
        </section>

        <section className="pb-16" id="novoupokojeni">
          <div className="mt-12 mb-8 flex items-baseline gap-4">
            <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
              II
            </span>
            <h2 className="font-serif text-4xl text-[#6B1A1A]">
              Како читати Псалтир за новоупокојене?
            </h2>
          </div>

          <div className="space-y-5">
            {zaNovoupokojene.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-[#4A3C2A]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 bg-[#2C0808] p-8 text-center md:p-10">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-[#C9A84C]/60" />
              <RussianOrthodoxCross size={20} />
              <div className="h-px w-10 bg-[#C9A84C]/60" />
            </div>
            <p className="mb-6 font-serif text-xl text-[#F5EDD8] italic">
              Упутство за читање псалтира доступно је и у PDF формату.
            </p>
            <a
              href="/preuzimanja/uputstvo-za-citanje-psaltira.pdf"
              download
              className="inline-block bg-[#C9A84C] px-8 py-3 text-xs font-medium tracking-[0.15em] text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]"
            >
              Преузми PDF
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
