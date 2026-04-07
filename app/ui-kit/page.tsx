import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";

export const metadata = {
  title: "UI Kit | Кувеждин Design System",
  robots: { index: false, follow: false },
};

// ─── Token data ───────────────────────────────────────────────────────────────

const palette = [
  {
    group: "Акценат — злато",
    swatches: [
      { name: "Gold Primary", hex: "#C9A84C", on: "#1A1209", label: "Примарни злато — CTA, активни елементи, иконе" },
      { name: "Gold Hover",   hex: "#E8C96A", on: "#1A1209", label: "Hover стање злато дугмади" },
      { name: "Gold Brown",   hex: "#8D6A2B", on: "#F5EDD8", label: "Терцијарни текст, мали натписи" },
    ],
  },
  {
    group: "Примарна — бордо",
    swatches: [
      { name: "Burgundy Dark",    hex: "#6B1A1A", on: "#F5EDD8", label: "Наслови, тамни текст, акцентни бордо" },
      { name: "Burgundy Nav",     hex: "#4A0E0E", on: "#F5EDD8", label: "Навигација — позадина" },
      { name: "Burgundy Footer",  hex: "#2C0808", on: "#F5EDD8", label: "Подножје, тамне секције" },
      { name: "Burgundy Overlay", hex: "#1A0404", on: "#F5EDD8", label: "Градијент преклоп на сликама" },
    ],
  },
  {
    group: "Позадине — топле нијансе",
    swatches: [
      { name: "Page BG",    hex: "#FAF7F2", on: "#4A3C2A", label: "Главна позадина странице" },
      { name: "Card BG",    hex: "#FBF7EE", on: "#4A3C2A", label: "Позадина картица и оквира" },
      { name: "Hero BG",    hex: "#F5EDD8", on: "#4A3C2A", label: "Светла херо секција, текст на тамном" },
      { name: "Alt BG",     hex: "#F2EDE3", on: "#4A3C2A", label: "Алтернативна картица / блок позадина" },
      { name: "Muted BG",   hex: "#F3EEE4", on: "#4A3C2A", label: "Placeholder / мирна позадина" },
    ],
  },
  {
    group: "Текст",
    swatches: [
      { name: "Body",      hex: "#4A3C2A", on: "#FAF7F2", label: "Тело текста (основни)" },
      { name: "Secondary", hex: "#6B5C4C", on: "#FAF7F2", label: "Секундарни текст, натписи" },
      { name: "On Dark",   hex: "#F5EDD8", on: "#2C0808", label: "Текст на тамним позадинама" },
      { name: "Near Black",hex: "#1A1209", on: "#C9A84C", label: "Текст на злато дугмади" },
    ],
  },
];

const typeScale = [
  { label: "text-[10px] tracking-[0.25em] uppercase", size: "10px", sample: "Света тајна · О Псалтиру · Галерија", note: "Микро натпис — секцијска ознака" },
  { label: "text-xs tracking-[0.15em] uppercase",     size: "12px", sample: "Српска Православна Црква",             note: "Мали натпис — навигација, лого" },
  { label: "text-sm tracking-wide uppercase",          size: "14px", sample: "О исповести · Историјат",              note: "Навигациони линк" },
  { label: "text-sm leading-relaxed",                  size: "14px", sample: "Помоћник за исповест и митарства",     note: "Мали текст тела" },
  { label: "text-base leading-relaxed",                size: "16px", sample: "Православно крштени верници, уредно обучени.", note: "Тело текста" },
  { label: "text-xl font-serif",                       size: "20px", sample: "За добијање опроштаја грехова",        note: "Поднаслов / h3" },
  { label: "text-4xl font-serif",                      size: "36px", sample: "Основно о Светој тајни",              note: "Наслов секције / h2" },
  { label: "text-5xl font-serif leading-none",         size: "48px", sample: "Покајање и исповест",                 note: "Херо наслов (мобилни)" },
  { label: "text-6xl font-serif leading-none",         size: "60px", sample: "Манастир Кувеждин",                   note: "Херо наслов (десктоп)" },
];

const buttons = [
  {
    label: "Primary — Gold",
    desc: "Главна акција. Увек злато, увек uppercase.",
    className: "inline-block bg-[#C9A84C] px-6 py-3 text-sm font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]",
    text: "Задужбинарство",
  },
  {
    label: "Primary Small",
    desc: "Компактнија верзија примарног дугмета.",
    className: "inline-block bg-[#C9A84C] px-5 py-2 text-xs font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]",
    text: "Преузми",
  },
  {
    label: "Secondary — Outlined",
    desc: "Секундарна акција поред примарне.",
    className: "inline-block border border-[#6B1A1A] bg-transparent px-6 py-3 text-sm tracking-wider text-[#6B1A1A] uppercase transition-colors hover:bg-[#6B1A1A]/5",
    text: "Историјат",
  },
  {
    label: "Copy / Action",
    desc: "Акција са иконом — копирај, преузми и сл.",
    className: "inline-flex items-center gap-2 bg-[#C9A84C] px-5 py-3 text-xs font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]",
    text: "Копирај број рачуна",
    icon: true,
  },
  {
    label: "Nav CTA",
    desc: "Задужбинарство дугме у навигацији.",
    className: "inline-block bg-[#C9A84C] px-5 py-2 text-xs font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]",
    text: "Задужбинарство",
  },
  {
    label: "Dark Section CTA",
    desc: "Примарно дугме на тамним секцијама.",
    className: "inline-block bg-[#C9A84C] px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:bg-[#E8C96A]",
    text: "Преузми помоћник за исповест",
    dark: true,
  },
];

const surfaces = [
  { name: "Card Default",    bg: "bg-[#FBF7EE]", border: "border border-[#6B1A1A]/10",           accent: "",                          desc: "Стандардна картица" },
  { name: "Card Accent Top", bg: "bg-[#FBF7EE]", border: "border border-[#6B1A1A]/10 border-t-4 border-t-[#6B1A1A]", accent: "",   desc: "Картица са акцентним горњим бордером — бордо" },
  { name: "Card Gold Top",   bg: "bg-[#FBF7EE]", border: "border border-[#6B1A1A]/10 border-t-4 border-t-[#C9A84C]", accent: "",   desc: "Картица са акцентним горњим бордером — злато" },
  { name: "Blockquote",      bg: "bg-[#F2EDE3]", border: "border border-[#6B1A1A]/10",            accent: "",                         desc: "Информациони блок / цитат" },
  { name: "Left Accent",     bg: "bg-transparent", border: "border-l-4 border-[#6B1A1A]",         accent: "pl-6",                     desc: "Блок са левим акцентом — важна напомена" },
  { name: "Gold Left",       bg: "bg-transparent", border: "border-l-4 border-[#C9A84C]",         accent: "pl-6",                     desc: "Блок са левим акцентом — цитат" },
];

const spacing = [
  { token: "px-6",   px: "24px",  use: "Хоризонтални padding контејнера" },
  { token: "py-16",  px: "64px",  use: "Вертикални padding секција" },
  { token: "p-6",    px: "24px",  use: "Padding картица (стандард)" },
  { token: "p-8",    px: "32px",  use: "Padding картица (велике)" },
  { token: "gap-4",  px: "16px",  use: "Gap у гриду картица" },
  { token: "gap-10", px: "40px",  use: "Gap у великим layout гридовима" },
  { token: "mb-8",   px: "32px",  use: "Размак испод наслова секције" },
  { token: "mb-6",   px: "24px",  use: "Размак испод параграфа / елемента" },
  { token: "mt-12",  px: "48px",  use: "Размак изнад наслова под-секције" },
  { token: "h-20",   px: "80px",  use: "Висина навигације" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UiKitPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <header className="border-b border-[#C9A84C]/30 bg-[#2C0808] px-6 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-3">
            <RussianOrthodoxCross size={20} />
            <p className="text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase">Интерна страница</p>
          </div>
          <h1 className="font-serif text-5xl text-[#F5EDD8] leading-none mb-3">UI Kit</h1>
          <p className="text-sm text-[#F5EDD8]/60">Дизајн систем · Манастир Кувеждин</p>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 py-16 space-y-20">

        {/* ── 1. Colors ─────────────────────────────────────────────────────── */}
        <section id="colors">
          <SectionHeading number="I" title="Боје" />

          <div className="space-y-10">
            {palette.map((group) => (
              <div key={group.group}>
                <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-4">{group.group}</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.swatches.map((s) => (
                    <div key={s.hex} className="overflow-hidden border border-[#6B1A1A]/10 bg-[#FBF7EE]">
                      <div
                        className="h-20 w-full flex items-end px-3 pb-2"
                        style={{ backgroundColor: s.hex }}
                      >
                        <span
                          className="text-[10px] font-mono tracking-wider opacity-80"
                          style={{ color: s.on }}
                        >
                          {s.hex}
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-medium text-[#4A3C2A] mb-1">{s.name}</p>
                        <p className="text-[11px] text-[#6B5C4C] leading-relaxed">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 2. Typography ─────────────────────────────────────────────────── */}
        <section id="typography">
          <SectionHeading number="II" title="Типографија" />

          <div className="mb-10 grid sm:grid-cols-2 gap-6">
            <div className="border border-[#6B1A1A]/10 bg-[#FBF7EE] p-6">
              <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-4">font-serif</p>
              <p className="font-serif text-4xl text-[#6B1A1A] leading-none mb-2">Аа Бб Вв Гг</p>
              <p className="font-serif text-xl text-[#4A3C2A]">Православни · Хришћански</p>
              <p className="text-xs text-[#6B5C4C] mt-3">Наслови, хероји, декоративни бројеви</p>
            </div>
            <div className="border border-[#6B1A1A]/10 bg-[#FBF7EE] p-6">
              <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-4">font-sans (default)</p>
              <p className="text-4xl text-[#6B1A1A] leading-none mb-2">Аа Бб Вв Гг</p>
              <p className="text-xl text-[#4A3C2A]">Православни · Хришћански</p>
              <p className="text-xs text-[#6B5C4C] mt-3">Тело текста, навигација, UI елементи</p>
            </div>
          </div>

          <div className="border border-[#6B1A1A]/10 bg-[#FBF7EE] overflow-hidden">
            <div className="border-b border-[#6B1A1A]/10 px-5 py-3 grid grid-cols-[1fr_auto] gap-4">
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase">Узорак</p>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase">Класа / употреба</p>
            </div>
            <div className="divide-y divide-[#6B1A1A]/8">
              {typeScale.map((t) => (
                <div key={t.label} className="px-5 py-5 grid grid-cols-[1fr_300px] gap-6 items-center">
                  <div
                    className="text-[#4A3C2A] overflow-hidden"
                    style={{ fontSize: t.size }}
                  >
                    {t.sample}
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-[#6B1A1A] mb-1">{t.label}</p>
                    <p className="text-[10px] text-[#6B5C4C]">{t.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 3. Buttons ────────────────────────────────────────────────────── */}
        <section id="buttons">
          <SectionHeading number="III" title="Дугмад" />

          <div className="grid gap-4 md:grid-cols-2">
            {buttons.map((btn) => (
              <div
                key={btn.label}
                className={`border border-[#6B1A1A]/10 p-6 flex flex-col gap-4 ${btn.dark ? "bg-[#2C0808]" : "bg-[#FBF7EE]"}`}
              >
                <div>
                  <p className={`text-xs font-medium mb-1 ${btn.dark ? "text-[#F5EDD8]" : "text-[#4A3C2A]"}`}>{btn.label}</p>
                  <p className={`text-[11px] ${btn.dark ? "text-[#F5EDD8]/50" : "text-[#6B5C4C]"}`}>{btn.desc}</p>
                </div>
                <div>
                  <button className={btn.className} type="button">
                    {btn.icon && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" />
                        <path d="M2 10V2H10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    )}
                    {btn.text}
                  </button>
                </div>
                <p className={`font-mono text-[10px] break-all ${btn.dark ? "text-[#F5EDD8]/30" : "text-[#6B5C4C]"}`}>
                  {btn.className}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 4. Surfaces & Cards ───────────────────────────────────────────── */}
        <section id="surfaces">
          <SectionHeading number="IV" title="Површине и картице" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {surfaces.map((s) => (
              <div key={s.name} className={`${s.bg} ${s.border} ${s.accent} p-6`}>
                <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase mb-3">{s.name}</p>
                <p className="text-base text-[#4A3C2A] leading-relaxed mb-4">
                  Узорни текст садржаја — наслов или кратак опис унутар ове површине.
                </p>
                <p className="text-[10px] text-[#6B5C4C]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 5. Dividers & Ornaments ───────────────────────────────────────── */}
        <section id="dividers">
          <SectionHeading number="V" title="Раздвајачи и орнаменти" />

          <div className="space-y-8 border border-[#6B1A1A]/10 bg-[#FBF7EE] p-8">

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase mb-4">Крст + линије — херо орнамент</p>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#C9A84C]" />
                <RussianOrthodoxCross size={24} />
                <div className="h-px w-8 bg-[#C9A84C]" />
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase mb-4">Секцијски дивидер</p>
              <hr className="border-t border-[#C9A84C]/30" />
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase mb-4">Вертикални сепаратор навигације</p>
              <div className="flex items-center gap-4 text-sm text-[#F5EDD8]/90 bg-[#4A0E0E] px-4 py-3">
                <span>О исповести</span>
                <div className="h-3 w-px bg-[#C9A84C]/30" />
                <span>О псалтиру</span>
                <div className="h-3 w-px bg-[#C9A84C]/30" />
                <span>Историјат</span>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase mb-4">Декоративни број секције</p>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-[#C9A84C]/50 leading-none">I</span>
                <h3 className="font-serif text-4xl text-[#6B1A1A]">Назив секције</h3>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase mb-4">Бордер са леве стране — натпис секције</p>
              <div className="border-l border-[#C9A84C]/30 pl-5">
                <p className="text-[10px] tracking-[0.24em] text-[#8D6A2B] uppercase">Раздобља</p>
              </div>
            </div>

            <div>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase mb-4">Декоративни маркер листе ✦</p>
              <ul className="space-y-2">
                {["Прва ставка листе", "Друга ставка листе", "Трећа ставка листе"].map((item) => (
                  <li key={item} className="pl-6 relative text-base text-[#4A3C2A]">
                    <span className="absolute left-0 top-2 text-[7px] text-[#C9A84C]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 6. Spacing ────────────────────────────────────────────────────── */}
        <section id="spacing">
          <SectionHeading number="VI" title="Размаци" />

          <div className="border border-[#6B1A1A]/10 bg-[#FBF7EE] overflow-hidden">
            <div className="grid grid-cols-3 border-b border-[#6B1A1A]/10 px-5 py-3">
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase">Token</p>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase">Вредност</p>
              <p className="text-[10px] tracking-[0.2em] text-[#8D6A2B] uppercase">Употреба</p>
            </div>
            <div className="divide-y divide-[#6B1A1A]/8">
              {spacing.map((s) => (
                <div key={s.token} className="grid grid-cols-3 items-center px-5 py-4 gap-4">
                  <p className="font-mono text-sm text-[#6B1A1A]">{s.token}</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-[#C9A84C]/30 h-3 shrink-0"
                      style={{ width: s.px }}
                    />
                    <p className="font-mono text-xs text-[#6B5C4C]">{s.px}</p>
                  </div>
                  <p className="text-xs text-[#6B5C4C]">{s.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 7. Icons & SVG ────────────────────────────────────────────────── */}
        <section id="icons">
          <SectionHeading number="VII" title="Иконе и SVG" />

          <div className="border border-[#6B1A1A]/10 bg-[#FBF7EE] p-8">
            <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-6">RussianOrthodoxCross — <span className="font-mono">size</span> проп</p>
            <div className="flex items-end gap-8 flex-wrap">
              {[16, 20, 24, 32, 48].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <RussianOrthodoxCross size={size} />
                  <p className="font-mono text-[10px] text-[#6B5C4C]">{size}px</p>
                </div>
              ))}
            </div>

            <hr className="border-t border-[#C9A84C]/20 my-8" />

            <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-6">UI иконе (inline SVG)</p>
            <div className="flex items-center gap-8 flex-wrap">
              {[
                { name: "Затвори", svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 5L5 15M5 5l10 10" /></svg> },
                { name: "Стрела горе", svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 12V4M4 8l4-4 4 4" /></svg> },
                { name: "Копирај", svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" /><path d="M2 10V2H10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg> },
                { name: "Мени", svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg> },
                { name: "Чекирано", svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L6 11L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
                { name: "Стрела доле", svg: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
              ].map((icon) => (
                <div key={icon.name} className="flex flex-col items-center gap-2 text-[#6B1A1A]">
                  {icon.svg}
                  <p className="text-[10px] text-[#6B5C4C]">{icon.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 8. Patterns ───────────────────────────────────────────────────── */}
        <section id="patterns">
          <SectionHeading number="VIII" title="Layout шаблони" />

          <div className="space-y-6">
            {/* Nav example */}
            <div>
              <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-3">Навигација — десктоп</p>
              <div className="border-b border-[#C9A84C]/20 bg-[#4A0E0E] px-6">
                <div className="flex h-20 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 border border-[#C9A84C]/20 flex items-center justify-center">
                      <RussianOrthodoxCross size={20} />
                    </div>
                    <div className="border-l border-[#C9A84C]/30 py-2 pl-3">
                      <p className="text-xs leading-tight tracking-[0.15em] text-[#F5EDD8] uppercase">Српска Православна Црква</p>
                      <p className="mt-0.5 text-[10px] tracking-wider text-[#C9A84C] uppercase">Епархија Сремска</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {["Почетна", "О исповести", "Галерија"].map((item, i) => (
                      <span key={item} className="flex items-center gap-4">
                        {i > 0 && <div className="h-3 w-px bg-[#C9A84C]/30" />}
                        <span className="text-sm tracking-wide text-[#C9A84C] uppercase">{item}</span>
                      </span>
                    ))}
                    <div className="h-3 w-px bg-[#C9A84C]/30" />
                    <span className="ml-2 bg-[#C9A84C] px-5 py-2 text-xs font-medium tracking-wider text-[#1A1209] uppercase">Задужбинарство</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero example */}
            <div>
              <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-3">Херо секција</p>
              <div className="relative overflow-hidden bg-[#2C0808] flex flex-col items-center justify-center min-h-[220px] text-center px-6 py-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "url(/ornament-2.svg)", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%", backgroundPosition: "center" }}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-[#C9A84C]" />
                  <RussianOrthodoxCross size={20} />
                  <div className="h-px w-8 bg-[#C9A84C]" />
                </div>
                <p className="relative text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase mb-3">Света тајна</p>
                <h2 className="relative font-serif text-5xl leading-none text-[#F5EDD8]">Покајање и исповест</h2>
              </div>
            </div>

            {/* Footer example */}
            <div>
              <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase mb-3">Подножје</p>
              <div className="border-t border-[#C9A84C]/20 bg-[#2C0808] px-6 py-6">
                <div className="flex justify-between items-start gap-8 flex-wrap mb-4">
                  <div className="text-[#F5EDD8]">
                    <p className="text-lg font-serif">Манастир Кувеждин</p>
                    <p className="text-[10px] text-[#C9A84C] tracking-wider uppercase mt-1">Српска Православна Црква · Епархија Сремска</p>
                  </div>
                  <nav className="flex flex-wrap gap-x-6 gap-y-1">
                    {["О исповести", "О псалтиру", "Историјат", "Галерија"].map((label) => (
                      <span key={label} className="text-[11px] text-[#F5EDD8]/55">{label}</span>
                    ))}
                  </nav>
                </div>
                <div className="border-t border-[#C9A84C]/10 pt-4 text-center">
                  <p className="text-[10px] text-[#F5EDD8]/30 tracking-wide">Манастир Кувеждин · Сремска епархија СПЦ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#C9A84C]/20 bg-[#2C0808] px-6 py-6 mt-20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-[10px] text-[#F5EDD8]/30 tracking-wide">UI Kit · Интерна страница · /ui-kit</p>
        </div>
      </footer>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="font-serif text-5xl text-[#C9A84C]/50 leading-none">{number}</span>
      <h2 className="font-serif text-4xl text-[#6B1A1A]">{title}</h2>
    </div>
  );
}

function Divider() {
  return <hr className="border-t border-[#6B1A1A]/10" />;
}
