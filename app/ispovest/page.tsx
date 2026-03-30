import Image from "next/image";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";
import MitarstvaAccordion from "./MitarstvaAccordion";

export const metadata = {
  title: "О исповести | Манастир Кувеждин",
  description: "Света тајна покајања — о исповести, митарствима и путу душе. Манастир Кувеждин, Епархија Сремска.",
};

export default function IspovesPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#4A0E0E] border-b border-[#C9A84C]/20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3">
              <Image src="/spc-logo.svg" alt="Српска Православна Црква" width={56} height={56} className="h-14 w-auto object-contain" />
              <div className="border-l border-[#C9A84C]/30 pl-3 py-2">
                <p className="text-xs text-[#F5EDD8] tracking-[0.15em] uppercase leading-tight">Српска Православна Црква</p>
                <p className="text-[10px] text-[#C9A84C] tracking-wider uppercase mt-0.5">Епархија Сремска</p>
              </div>
            </a>
            <div className="hidden lg:flex items-center gap-4">
              {[
                { href: "/", label: "Почетна" },
                { href: "/ispovest", label: "О исповести" },
                { href: "/#psaltir", label: "О псалтиру" },
                { href: "/#istorijat", label: "Историјат" },
                { href: "/#galerija", label: "Галерија" },
                { href: "/#zakon", label: "Закон Божији" },
              ].map((item, i) => (
                <span key={item.href} className="flex items-center gap-4">
                  {i > 0 && <div className="h-3 w-px bg-[#C9A84C]/30"></div>}
                  <a
                    href={item.href}
                    className={`text-sm tracking-wide uppercase transition-colors ${
                      item.href === "/ispovest"
                        ? "text-[#C9A84C]"
                        : "text-white/90 hover:text-[#C9A84C]"
                    }`}
                  >
                    {item.label}
                  </a>
                </span>
              ))}
              <div className="h-3 w-px bg-[#C9A84C]/30"></div>
              <a
                href="/#zaduzbinastvo"
                className="ml-2 px-5 py-2 bg-[#C9A84C] text-[#1A1209] text-xs tracking-wider uppercase hover:bg-[#E8C96A] transition-colors font-medium"
              >
                Задужбинарство
              </a>
            </div>
            <a href="/" className="lg:hidden text-[#F5EDD8]/70 hover:text-[#C9A84C] text-sm tracking-wide transition-colors">
              Почетна
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#2C0808] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url(/ornament-2.svg)`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative grid md:grid-cols-2 min-h-[420px]">
          <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]"></div>
              <RussianOrthodoxCross size={24} />
              <div className="h-px w-8 bg-[#C9A84C]"></div>
            </div>
            <p className="text-[10px] text-[#C9A84C] tracking-[0.25em] uppercase mb-4">Света тајна</p>
            <h1 className="text-5xl md:text-6xl text-[#F5EDD8] font-serif leading-none mb-6">
              Покајање<br />и исповест
            </h1>
            <div className="h-px w-24 bg-[#C9A84C]/40 mb-6"></div>
            <p className="text-base text-[#F5EDD8]/70 font-serif italic leading-relaxed max-w-sm">
              Браћо и сестре исповедајте се код својих парохијских свештеника
            </p>
          </div>
          <div className="relative min-h-[300px] md:min-h-0">
            <Image
              src="/ispovest-hero.jpg"
              alt="Света тајна исповести"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C0808]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 max-w-5xl">

        {/* I. Основно о Светој тајни покајања */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="osnovno">
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">I</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Основно о Светој тајни покајања</h2>
          </div>
          <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-6">из Закона Божијег</p>

          <div className="space-y-5">
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              <strong className="text-[#6B1A1A]">Покајање је Света тајна</strong>, у којој верујући човек исповеда (открива усно) своје грехе Богу у присуству свештеника и добија кроз свештеника опроштај грехова — од Самог Господа Исуса Христа.
            </p>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              Исус Христос дао је светим <strong className="text-[#6B1A1A]">апостолима</strong>, а кроз њих и свим <strong className="text-[#6B1A1A]">свештеницима</strong>, власт да разрешују (опраштају) грехе: <em>„Примите Духа Светога. Коме опростите грехе, том се опраштају; и коме оставите, на том остају"</em> (Јн. 20, 22-23). Још је Јован Крститељ, припремајући људе за примање Спаситеља, проповедао „крштење покајања за опроштење грехова. И крштаваше их све у реци Јордану, и <strong className="text-[#6B1A1A]">исповедаху грехе своје</strong>" (Мк.1, 4-5).
            </p>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              Свети апостоли, примивши од Бога за то власт, савршавали су тајну покајања: „многи од оних који су поверовали, долажаху те <strong className="text-[#6B1A1A]">исповедаху</strong> и <strong className="text-[#6B1A1A]">казиваху</strong> дела своја" (Дела ап. 19, 18).
            </p>
          </div>

          <hr className="border-t border-[#C9A84C]/30 my-8" />

          <h3 className="text-xl text-[#6B1A1A] font-serif mb-4">За добијање опроштаја грехова од онога који се исповеда тражи се:</h3>
          <ul className="space-y-3 mb-8">
            {[
              "да се измири са свима ближњима",
              "искрено да жали за грехе своје и усмено их исповеди",
              "чврста намера да се исправи свој живот",
              "вера у Господа Исуса Христа и нада на Његово милосрђе",
            ].map((stavka) => (
              <li key={stavka} className="pl-6 relative text-base text-[#4A3C2A] leading-relaxed">
                <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                {stavka}
              </li>
            ))}
          </ul>

          <div className="bg-[#F2EDE3] border-l-4 border-[#6B1A1A] p-5">
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              У посебним случајевима на покајаног се налаже <strong className="text-[#6B1A1A]">„епитимија"</strong> (грчка реч — забрана, ограничење), која се sastoji od добрих дела и неких лишавања, направљених због савладавања греховних навика.
            </p>
          </div>
        </section>

        {/* II. О митарствима */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="mitarstva-uvod">
          <div className="flex items-baseline gap-4 mb-8 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">II</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">О митарствима</h2>
          </div>

          <div className="space-y-5 mb-10">
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              Поред наведеног одломка о Светој тајни покајања из уџбеника веронауке Закон Божији, сматрамо да је веома корисно за сваког православног хришћанина да буде упознат са тиме какав је пут душе упокојеног хришћанина у периоду од смрти тела до четрдесетог дана. У наставку следи светоотачки текст који то открива, и који у исто време за православне вернике може представљати веома добро <strong className="text-[#6B1A1A]">упутство за исповест</strong>.
            </p>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              У време Светог и славног преподобног Оца нашег <strong className="text-[#6B1A1A]">Василија новог</strong> (IX век), великог чудотворца и угодника Божјег, даром Духа Светог, Којим овај беше испуњен још од детињства, дешаваху се по његовим молитвама, Божјом Благодаћу, силом и премудрошћу, дивна и необична чудеса. Посебно су корисне за опште спасење свих људи, по његовим светим и Богу милим молитвама, две визије ученика његовог, Григорија.
            </p>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              <strong className="text-[#6B1A1A]">Прва је о митарствима</strong> — царинарницама душе човечје, кроз која ова има да прође и да се испита, те да јој се одреди место вечног боравка после смрти.
            </p>
            <p className="text-base text-[#4A3C2A] leading-relaxed">
              <strong className="text-[#6B1A1A]">Друга визија је о Страшном суду Божјем</strong> и ономе шта ће се после Страшног суда збити.
            </p>
          </div>

          <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 p-6 mb-10">
            <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-4">Шта су митарства</p>
            <p className="text-base text-[#4A3C2A] leading-relaxed mb-4">
              Митарства су нека врста царинарница, на које наилазе душе умрлих људи улазећи ка престолу Небеског Судије. На митарствима стоје духови зла и траже од сваке душе царину или откуп за грехе које је починила. Та царина, тај откуп sastoji се у добрим делима, супротним учињеном греху. Назив: митарства и митари, позајмљен је из историје јеврејске. Код Јевреја митарима су се називала лица, одређена од Римљана за скупљање пореза. При том послу, митари су употребљавали сва могућа средства, само да би што више скупили дажбина. Митари су стојали код нарочитих царинарница, или трошаринских станица, и наплаћивали за преношену робу трошарину. Те трошаринске станице називале су се митнице, митарства. Овај назив хришћански писци су употребили и назвали митарствима она места у ваздуху између земље и неба, на којима зли дуси задржавају душе покојника при њиховом улазу ка Престолу Господњем, истражују њихове грехе, и на тај начин низводе у ад.
            </p>
          </div>

          {/* Citat sv. Kirila */}
          <div className="border-l-4 border-[#C9A84C] pl-6 mb-10">
            <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-3">Свети Кирило Александријски (444. год.) — О исходу душе</p>
            <p className="text-base text-[#4A3C2A] leading-relaxed italic">
              „При разлучењу душе наше са телом, стаће пред нас, с једне стране, војска и Силе небеске, с друге — власти таме, старешине ваздушних митарстава, изобличитељи наших дела. Угледавши их, душа ће задрхтати и устрептати; и у тој пометености и ужасу она ће тражити себи заштиту у анђела Божијих. Но и примљена од анђела и под њиховим окриљем пролазећи ваздушно пространство и улазећи на висину, она ће наићи на разна митарства која ће јој препречавати пут њен у Царство, заустављати и задржавати њено стремљење ка Царству. На сваком од ових митарстава тражиће се рачуна за посебне грехе... И ако се душа због побожног и богоугодног живота свог покаже достојна награде, узеће је Анђели и она ће неустрашиво полетети к Царству... Ако се пак, напротив, покаже да је она проводила живот у нераду и неуздржавању, онда ће она чути онај страшни глас: Нека се узме безбожник, нека не види славе Господње! (Ис. 26, 10); тада ће је оставити Анђели Божији и узеће је страшни демони, и душа, везана нераздрешивим узама, строваљује се у тамнице пакла."
            </p>
          </div>

          {/* Teodora bio */}
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/death-of-theodora.jpg"
                alt="Преп. Теодора Цариградска"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0404]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-xs text-white/80 tracking-[0.12em] uppercase">Преп. Теодора Цариградска</p>
              </div>
            </div>
            <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 p-6">
              <h3 className="text-xl text-[#6B1A1A] font-serif mb-4">Преп. Теодора Цариградска</h3>
              <p className="text-base text-[#4A3C2A] leading-relaxed mb-4">
                Христочежњива монахиња и самопрегорна послушница светог Василија Новог. По смрти јавила се Григорију, ученику св. Василија Новог, и описала му свих <strong className="text-[#6B1A1A]">двадесет митарстава</strong>, кроз која је душа њена прошла после разлучења од тела, док није помоћу молитава св. Василија ушла у вечни покој.
              </p>
              <p className="text-base text-[#4A3C2A] leading-relaxed">
                Преставила се 30. децембра 940. године.
              </p>
              <hr className="border-t border-[#C9A84C]/30 my-4" />
              <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase">
                Пут душе по изласку из тела
              </p>
              <p className="text-xs text-[#6B5C4C] mt-1">
                делови из Житија преп. Василија Новог од авве Јустина
              </p>
            </div>
          </div>
        </section>

        {/* III. Dvadeset mitarstava */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="mitarstva">
          <div className="flex items-baseline gap-4 mb-4 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">III</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Двадесет митарстава</h2>
          </div>
          <p className="text-base text-[#4A3C2A] leading-relaxed mb-8">
            Двадесет митарстава, која могу послужити као добро <strong className="text-[#6B1A1A]">упутство за исповест</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10 items-start">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/mytarstva.jpg"
                alt="Митарства"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0404]/50 to-transparent"></div>
            </div>
            <div className="bg-[#F2EDE3] border border-[#6B1A1A]/10 p-6">
              <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-3">Напомена</p>
              <p className="text-sm text-[#4A3C2A] leading-relaxed">
                Они који истински исповеде сва своја зла дела, и жале и кају се због учињених зала, њима се греси милосрђем Божијим на невидљив начин бришу. И кад таква душа долази овамо, ваздушни иследници отварају своје књиге, али ништа не налазе записано против ње, и не могу да јој учине никакву пакост, нити да је уплаше, и душа радујући се улази к престолу благодати.
              </p>
            </div>
          </div>

          <MitarstvaAccordion />
        </section>

        {/* IV. Napomena — savremeni gresi */}
        <section className="pb-16 border-b border-[#6B1A1A]/15" id="napomena">
          <div className="flex items-baseline gap-4 mb-8 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">IV</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Напомена</h2>
          </div>

          <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 border-t-4 border-t-[#6B1A1A] p-6 md:p-8">
            <p className="text-base text-[#4A3C2A] leading-relaxed mb-6">
              Треба обратити пажњу на то, као што је већ речено, да је Преподобна Теодора живела у 10. веку, када се живот у многом разликаовао од садашњег. Замке злих духова се разликују, заправо постају све лукавије и опасније, а самим тим и греси савременог човека се умножавају и добијају нове форме. Овде ћемо навести само неке од најтежих и најраспрострањенијих са којим се наши духовницу свакодневно сусрећу на исповестима:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "чедоморства у утроби мајке (абортус)",
                "пушење",
                "алкохолизам",
                "наркоманија",
                "коцкање (клађење, игре на срећу)",
                "интернет зависност",
                "играње компијутерских игара",
                "порнографија",
                "тражење помоћи од врачара, хоџа и сличних",
                "бављење јогом и медитацијом",
              ].map((greh) => (
                <div key={greh} className="pl-5 relative text-sm text-[#4A3C2A] leading-relaxed font-semibold">
                  <span className="absolute left-0 top-1.5 text-[7px] text-[#6B1A1A]">✦</span>
                  {greh}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* V. Rec o ishodu duse */}
        <section className="pb-16" id="ishod-duse">
          <div className="flex items-baseline gap-4 mb-4 mt-12">
            <span className="text-5xl text-[#C9A84C]/50 font-serif leading-none">V</span>
            <h2 className="text-4xl text-[#6B1A1A] font-serif">Реч о исходу душе праведних и грешних</h2>
          </div>
          <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-8">из списа св. Макарија Александријског</p>

          <p className="text-base text-[#4A3C2A] leading-relaxed mb-8">
            Једном Свети Макарије Александриски упита Анђеле који су га пратили по пустињи: „Пошто је од Светих Отаца предато да се у Цркви врши принос Богу за преминулог у трећи, девети и четрдесети дан, каква онда од тога бива корист по душу покојника?" Анђео одговори: „Бог није допустио да ишта непотребно и некорисно бива у Његовој Цркви."
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 border-t-4 border-t-[#6B1A1A] p-6">
              <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-2">Трећи дан</p>
              <p className="text-3xl text-[#6B1A1A] font-serif mb-4">3.</p>
              <p className="text-sm text-[#4A3C2A] leading-relaxed">
                Када у трећи дан бива у Цркви принос, онда душа умрлога добија од чувајућег је Анђела олакшање у тузи коју она осећа због разлучења са телом. У трећи дан Онај који је васкрсао из мртвих наређује да се свака хришћанска душа, по угледу на Његово васкрсење, узнесе на небеса ради поклоњења Богу свих. После поклоњења Богу, Бог наређује да се покажу души разна и пријатна насеља Светих и лепота Раја. Све то разгледа душа шест дана.
              </p>
            </div>
            <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 border-t-4 border-t-[#C9A84C] p-6">
              <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-2">Девети дан</p>
              <p className="text-3xl text-[#6B1A1A] font-serif mb-4">9.</p>
              <p className="text-sm text-[#4A3C2A] leading-relaxed">
                А после разгледања у току шест дана свих радости Праведника, Анђели је поново узносе на поклоњење Богу. Стога, добро чини Црква, вршећи у девети дан службе и принос за усопшег. После другог поклоњења, Владика свих наређује одвести душу у пакао и показати јој сва тамошња места мучења, разна одељења пакла, и разноврсна мучења нечестивих.
              </p>
            </div>
            <div className="bg-[#FBF7EE] border border-[#6B1A1A]/10 border-t-4 border-t-[#6B1A1A]/40 p-6">
              <p className="text-[10px] text-[#6B5C4C] tracking-wider uppercase mb-2">Четрдесети дан</p>
              <p className="text-3xl text-[#6B1A1A] font-serif mb-4">40.</p>
              <p className="text-sm text-[#4A3C2A] leading-relaxed">
                По овим разним местима мука, душа се носи тридесет дана, дршћући, да и сама не буде осуђена на затвор у њима. У четрдесети дан душа се опет узноси на поклоњење Богу; и тада већ Судија одређује души место које одговара њој према њеним делима. Стога Црква поступа правилно, чинећи у четрдесети дан помен за преминуле.
              </p>
            </div>
          </div>

          <p className="text-xs text-[#6B5C4C] mt-6 text-right">
            Из житија преп. Василија Новог. Авва Јустин, „Житија Светих за март"
          </p>

          {/* CTA */}
          <div className="mt-12 bg-[#2C0808] p-8 md:p-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A84C]/60"></div>
              <RussianOrthodoxCross size={20} />
              <div className="h-px w-10 bg-[#C9A84C]/60"></div>
            </div>
            <p className="text-xl text-[#F5EDD8] font-serif italic mb-6">
              Браћо и сестре исповедајте се код својих парохијских свештеника
            </p>
            <a
              href="/#raspored"
              className="inline-block px-8 py-3 bg-[#C9A84C] text-[#1A1209] text-xs tracking-[0.15em] uppercase hover:bg-[#E8C96A] transition-colors font-medium"
            >
              Распоред богослужења
            </a>
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
              {[
                { label: "О исповести", href: "/ispovest" },
                { label: "О псалтиру", href: "/#psaltir" },
                { label: "Историјат", href: "/#istorijat" },
                { label: "Галерија", href: "/#galerija" },
                { label: "Закон Божији", href: "/#zakon" },
                { label: "Задужбинарство", href: "/#zaduzbinastvo" },
                { label: "Обавештења", href: "/#obavestenja" },
                { label: "Преузимања", href: "/#preuzimanja" },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="text-[11px] text-[#F5EDD8]/55 hover:text-[#C9A84C] transition-colors">{label}</a>
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
