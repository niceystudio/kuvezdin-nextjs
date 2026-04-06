import Image from "next/image";

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
    <main className="min-h-screen bg-[#f7f1e6] text-[#2f2417]">
      <section className="relative overflow-hidden bg-[#2c0808] text-[#f6edd7]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url(/ornament-2.svg)",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        />
        <div className="container relative z-10 mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#c9a84c]">
              О Псалтиру
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-none md:text-6xl">
              Упутство за читање псалтира
            </h1>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative min-h-[240px] overflow-hidden border border-[#c9a84c]/20 sm:col-span-2">
              <Image
                src="/psaltir/psaltir-slika.jpg"
                alt="Псалтир"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2c0808]/65 via-[#2c0808]/10 to-transparent" />
            </div>
            <div className="relative min-h-[180px] overflow-hidden border border-[#c9a84c]/20">
              <Image
                src="/psaltir/psaltir-a.jpg"
                alt="Књига псалтира"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[180px] overflow-hidden border border-[#c9a84c]/20">
              <Image
                src="/psaltir/zlatni-psaltir.png"
                alt="Издање псалтира"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-4xl px-6 py-12 md:py-14">
        <blockquote className="mx-auto border-y border-[#c9a84c]/45 py-8 text-center font-serif text-2xl leading-10 text-[#5d1515] italic md:text-[2rem] md:leading-[2.9rem]">
          {uvodniCitat.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[#8d6a2b] not-italic">
            свети Атанасије Велики
          </p>
        </blockquote>
      </section>

      <section className="container mx-auto max-w-4xl px-6 pb-14 md:pb-16">
        <article className="space-y-6">
          {sadrzaj.map((item, index) => {
            if (item.type === "istaknuto") {
              return (
                <div
                  key={index}
                  className="border border-[#6b1a1a]/10 bg-[#fbf7ee] px-6 py-5 font-serif text-xl leading-9 text-[#6b1a1a]"
                >
                  {item.text}
                </div>
              );
            }

            if (item.type === "oznaka") {
              return (
                <p
                  key={index}
                  className="pt-2 text-sm uppercase tracking-[0.14em] text-[#6b5c4c]"
                >
                  {item.text}
                </p>
              );
            }

            return (
              <p key={index} className="text-lg leading-8">
                {item.text}
              </p>
            );
          })}

          <section className="pt-6">
            <h2 className="mb-5 font-serif text-3xl text-[#6b1a1a]">
              Како читати Псалтир за новоупокојене?
            </h2>
            <div className="space-y-5">
              {zaNovoupokojene.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <blockquote className="border-l-4 border-[#c9a84c] bg-[#fbf7ee] px-6 py-6 text-lg italic leading-8 text-[#4b3a27]">
            Не треба се бринути и узнемиравати уколико смисао псалама није
            јасан. Светитељ Варсануфије Оптински о томе говори овако:{" "}
            &quot;Ти не разумеш али бесови разумеју и беже&quot;.
          </blockquote>
        </article>
      </section>

      <section className="container mx-auto max-w-4xl px-6 pb-16 md:pb-20">
        <div className="overflow-hidden border border-[#c9a84c]/35 bg-[#2c0808] text-[#f6edd7]">
          <div className="grid gap-6 px-6 py-8 md:grid-cols-[1fr_auto] md:items-center md:px-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#c9a84c]">
                Преузимање
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                Упутство за читање псалтира
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#f6edd7]/85">
                PDF издање је доступно за преузимање.
              </p>
            </div>

            <a
              href="/preuzimanja/uputstvo-za-citanje-psaltira.pdf"
              download
              className="inline-flex items-center justify-center border border-[#c9a84c] bg-[#c9a84c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#2c0808] transition hover:bg-transparent hover:text-[#f6edd7]"
            >
              Преузми PDF
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
