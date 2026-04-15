import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";

export const metadata = {
  title: "UI Kit | Kuvezdin Design System",
  alternates: {
    canonical: "/ui-kit",
  },
  robots: { index: false, follow: false },
};

// ─── Token data ───────────────────────────────────────────────────────────────
// These arrays are the source of truth - they mirror globals.css @theme and
// @layer components. When you change a token or class there, update here too.

const palette = [
  {
    group: "Акценат - злато",
    swatches: [
      { name: "Gold Primary",  hex: "#C9A84C", token: "--color-gold",        on: "#1A1209", label: "Примарни злато - CTA, активни елементи, иконе" },
      { name: "Gold Hover",    hex: "#E8C96A", token: "--color-gold-hover",   on: "#1A1209", label: "Hover стање злато дугмади" },
      { name: "Gold Brown",    hex: "#8D6A2B", token: "--color-gold-brown",   on: "#F5EDD8", label: "Терцијарни текст, мали натписи" },
    ],
  },
  {
    group: "Примарна - бордо",
    swatches: [
      { name: "Burgundy Dark",    hex: "#6B1A1A", token: "--color-primary",  on: "#F5EDD8", label: "Наслови, тамни текст, акцентни бордо" },
      { name: "Burgundy Nav",     hex: "#4A0E0E", token: "--color-nav",      on: "#F5EDD8", label: "Навигација - позадина" },
      { name: "Burgundy Footer",  hex: "#2C0808", token: "--color-dark",     on: "#F5EDD8", label: "Подножје, тамне секције" },
      { name: "Burgundy Overlay", hex: "#1A0404", token: "--color-overlay",  on: "#F5EDD8", label: "Градијент преклоп на сликама" },
    ],
  },
  {
    group: "Позадине - топле нијансе",
    swatches: [
      { name: "Page BG",    hex: "#FAF7F2", token: "--color-bg",             on: "#4A3C2A", label: "Главна позадина странице" },
      { name: "Card BG",    hex: "#FBF7EE", token: "--color-surface",        on: "#4A3C2A", label: "Позадина картица и оквира" },
      { name: "Alt BG",     hex: "#F2EDE3", token: "--color-surface-alt",    on: "#4A3C2A", label: "Алтернативна картица / блок позадина" },
      { name: "Muted BG",   hex: "#F3EEE4", token: "--color-surface-muted",  on: "#4A3C2A", label: "Placeholder / мирна позадина" },
      { name: "Warm BG",    hex: "#E8DCC8", token: "--color-surface-warm",   on: "#4A3C2A", label: "Секција за донације / рачун" },
    ],
  },
  {
    group: "Текст",
    swatches: [
      { name: "Body",       hex: "#4A3C2A", token: "--color-body",           on: "#FAF7F2", label: "Тело текста (основни)" },
      { name: "Secondary",  hex: "#6B5C4C", token: "--color-muted",          on: "#FAF7F2", label: "Секундарни текст, натписи" },
      { name: "On Dark",    hex: "#F5EDD8", token: "--color-on-dark",        on: "#2C0808", label: "Текст на тамним позадинама" },
      { name: "Near Black", hex: "#1A1209", token: "--color-on-gold",        on: "#C9A84C", label: "Текст на злато дугмади" },
    ],
  },
];

const typeScale = [
  { label: "text-[10px] tracking-[0.25em] uppercase", size: "10px", sample: "Света тајна · О Псалтиру · Галерија", note: "Микро натпис - секцијска ознака" },
  { label: "text-xs tracking-[0.15em] uppercase",     size: "12px", sample: "Српска Православна Црква",             note: "Мали натпис - навигација, лого" },
  { label: "text-sm tracking-wide uppercase",         size: "14px", sample: "О исповести · Историјат",              note: "Навигациони линк" },
  { label: "text-sm leading-relaxed",                 size: "14px", sample: "Помоћник за исповест и митарства",     note: "Мали текст тела" },
  { label: "text-base leading-relaxed",                size: "16px", sample: "Православно крштени верници, уредно обучени.", note: "Тело текста" },
  { label: "text-xl font-serif",                       size: "20px", sample: "За добијање опроштаја грехова",        note: "Поднаслов / h3" },
  { label: "text-4xl font-serif",                      size: "36px", sample: "Основно о Светој тајни",               note: "Наслов секције / h2" },
  { label: "h1 · MonahOCS · text-6xl→7xl→8xl",        size: "60px", sample: "Кувеждин",                             note: "Херо наслов (breakpoint-responsive)" },
];

// CSS component classes defined in globals.css @layer components
const buttons = [
  {
    label: "Primary - Gold",
    desc: "Главна акција. Увек злато, увек uppercase.",
    cssClass: "btn-primary",
    text: "Задужбинарство",
  },
  {
    label: "Primary Small",
    desc: "Компактнија верзија примарног дугмета.",
    cssClass: "btn-primary-sm",
    text: "Преузми",
  },
  {
    label: "Secondary - Outlined",
    desc: "Секундарна акција поред примарне.",
    cssClass: "btn-secondary",
    text: "Историјат",
  },
];

// CSS component classes for surfaces
const surfaces = [
  { name: "Card Default",        cssClass: "card",                desc: "Стандардна картица" },
  { name: "Card Accent Primary", cssClass: "card-accent-primary", desc: "Картица са горњим акцентом - бордо" },
  { name: "Card Accent Gold",    cssClass: "card-accent-gold",    desc: "Картица са горњим акцентом - злато" },
  { name: "Blockquote",          cssClass: "blockquote",          desc: "Информациони блок / цитат" },
  { name: "Callout Primary",     cssClass: "callout-primary",     desc: "Блок са левим акцентом - важна напомена" },
  { name: "Callout Gold",        cssClass: "callout-gold",        desc: "Блок са левим акцентом - цитат" },
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
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-gold/30 bg-dark px-6 py-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-3">
            <RussianOrthodoxCross size={20} />
            <p className="eyebrow">Интерна страница</p>
          </div>
          <h1 className="font-serif text-on-dark mb-3">UI Kit</h1>
          <p className="text-sm text-on-dark/60">Дизајн систем · Манастир Кувеждин</p>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 py-16 space-y-20">

        {/* ── 1. Colors ─────────────────────────────────────────────────────── */}
        <section id="colors">
          <SectionHeading number="I" title="Боје" />

          <div className="space-y-10">
            {palette.map((group) => (
              <div key={group.group}>
                <p className="eyebrow-muted mb-4">{group.group}</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.swatches.map((s) => (
                    <div key={s.hex} className="overflow-hidden border border-primary/10 bg-surface">
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
                        <p className="font-mono text-[10px] text-gold mb-1">{s.token}</p>
                        <p className="text-xs font-medium text-body mb-1">{s.name}</p>
                        <p className="text-[11px] text-muted leading-relaxed">{s.label}</p>
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
            <div className="card">
              <p className="eyebrow-muted mb-4">font-serif (MonahOCS - само h1)</p>
              <h1 className="text-primary mb-2" style={{ fontSize: "2rem" }}>Аа Бб Вв Гг</h1>
              <p className="text-xs text-muted mt-3">Само h1 наслови - MonahOCS.otf</p>
            </div>
            <div className="card">
              <p className="eyebrow-muted mb-4">font-serif (системски serif - h2, h3, декорација)</p>
              <p className="font-serif text-4xl text-primary leading-none mb-2">Аа Бб Вв Гг</p>
              <p className="font-serif text-xl text-body">Православни · Хришћански</p>
              <p className="text-xs text-muted mt-3">h2, h3, наслови секција, декоративни бројеви</p>
            </div>
          </div>

          <div className="border border-primary/10 bg-surface overflow-hidden">
            <div className="border-b border-primary/10 px-5 py-3 grid grid-cols-[1fr_auto] gap-4">
              <p className="eyebrow-muted">Узорак</p>
              <p className="eyebrow-muted">Класа / употреба</p>
            </div>
            <div className="divide-y divide-primary/8">
              {typeScale.map((t) => (
                <div key={t.label} className="px-5 py-5 grid grid-cols-[1fr_300px] gap-6 items-center">
                  <div className="text-body overflow-hidden" style={{ fontSize: t.size }}>
                    {t.sample}
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-primary mb-1">{t.label}</p>
                    <p className="text-[10px] text-muted">{t.note}</p>
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
              <div key={btn.label} className="card flex flex-col gap-4">
                <div>
                  <p className="text-xs font-medium text-body mb-1">{btn.label}</p>
                  <p className="text-[11px] text-muted">{btn.desc}</p>
                </div>
                <div>
                  <button className={btn.cssClass} type="button">
                    {btn.text}
                  </button>
                </div>
                <p className="font-mono text-[10px] text-muted break-all">.{btn.cssClass}</p>
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
              <div key={s.name} className={s.cssClass}>
                <p className="eyebrow-muted mb-3">{s.name}</p>
                <p className="text-base text-body leading-relaxed mb-4">
                  Узорни текст садржаја унутар ове површине.
                </p>
                <p className="font-mono text-[10px] text-gold">.{s.cssClass}</p>
                <p className="text-[10px] text-muted mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 5. Dividers & Ornaments ───────────────────────────────────────── */}
        <section id="dividers">
          <SectionHeading number="V" title="Раздвајачи и орнаменти" />

          <div className="space-y-8 card p-8">

            <div>
              <p className="eyebrow-muted mb-4">Крст + линије - херо орнамент</p>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-gold" />
                <RussianOrthodoxCross size={24} />
                <div className="h-px w-8 bg-gold" />
              </div>
            </div>

            <div>
              <p className="eyebrow-muted mb-4">Секцијски дивидер</p>
              <hr className="border-t border-gold/30" />
            </div>

            <div>
              <p className="eyebrow-muted mb-4">Вертикални сепаратор навигације</p>
              <div className="flex items-center gap-4 text-sm text-on-dark/90 bg-nav px-4 py-3">
                <span>О исповести</span>
                <div className="h-3 w-px bg-gold/30" />
                <span>О псалтиру</span>
                <div className="h-3 w-px bg-gold/30" />
                <span>Историјат</span>
              </div>
            </div>

            <div>
              <p className="eyebrow-muted mb-4">Декоративни број секције</p>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl text-gold/50 leading-none">I</span>
                <h3 className="font-serif text-4xl text-primary">Назив секције</h3>
              </div>
            </div>

            <div>
              <p className="eyebrow-muted mb-4">Бордер са леве стране - натпис секције</p>
              <div className="border-l border-gold/30 pl-5">
                <p className="eyebrow-muted">Раздобља</p>
              </div>
            </div>

            <div>
              <p className="eyebrow-muted mb-4">Декоративни маркер листе ✦ - <span className="font-mono">.list-item-ornament</span></p>
              <ul className="space-y-2">
                {["Прва ставка листе", "Друга ставка листе", "Трећа ставка листе"].map((item) => (
                  <li key={item} className="list-item-ornament">{item}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <Divider />

        {/* ── 6. Spacing ────────────────────────────────────────────────────── */}
        <section id="spacing">
          <SectionHeading number="VI" title="Размаци" />

          <div className="border border-primary/10 bg-surface overflow-hidden">
            <div className="grid grid-cols-3 border-b border-primary/10 px-5 py-3">
              <p className="eyebrow-muted">Token</p>
              <p className="eyebrow-muted">Вредност</p>
              <p className="eyebrow-muted">Употреба</p>
            </div>
            <div className="divide-y divide-primary/8">
              {spacing.map((s) => (
                <div key={s.token} className="grid grid-cols-3 items-center px-5 py-4 gap-4">
                  <p className="font-mono text-sm text-primary">{s.token}</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-gold/30 h-3 shrink-0" style={{ width: s.px }} />
                    <p className="font-mono text-xs text-muted">{s.px}</p>
                  </div>
                  <p className="text-xs text-muted">{s.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 7. Icons & SVG ────────────────────────────────────────────────── */}
        <section id="icons">
          <SectionHeading number="VII" title="Иконе и SVG" />

          <div className="card p-8">
            <p className="eyebrow-muted mb-6">RussianOrthodoxCross - <span className="font-mono">size</span> проп</p>
            <div className="flex items-end gap-8 flex-wrap">
              {[16, 20, 24, 32, 48].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <RussianOrthodoxCross size={size} />
                  <p className="font-mono text-[10px] text-muted">{size}px</p>
                </div>
              ))}
            </div>

            <hr className="border-t border-gold/20 my-8" />

            <p className="eyebrow-muted mb-6">UI иконе (inline SVG)</p>
            <div className="flex items-center gap-8 flex-wrap">
              {[
                { name: "Затвори",      svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 5L5 15M5 5l10 10" /></svg> },
                { name: "Стрела горе",  svg: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 12V4M4 8l4-4 4 4" /></svg> },
                { name: "Копирај",      svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" /><path d="M2 10V2H10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg> },
                { name: "Мени",         svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg> },
                { name: "Чекирано",     svg: <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L6 11L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
                { name: "Стрела доле",  svg: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
              ].map((icon) => (
                <div key={icon.name} className="flex flex-col items-center gap-2 text-primary">
                  {icon.svg}
                  <p className="text-[10px] text-muted">{icon.name}</p>
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
              <p className="eyebrow-muted mb-3">Навигација - десктоп</p>
              <div className="border-b border-gold/20 bg-nav px-6">
                <div className="flex h-20 items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-14 w-14 border border-gold/20 flex items-center justify-center">
                      <RussianOrthodoxCross size={20} />
                    </div>
                    <div className="border-l border-gold/30 py-2 pl-3">
                      <p className="text-xs leading-tight tracking-[0.15em] text-on-dark uppercase">Српска Православна Црква</p>
                      <p className="mt-0.5 text-[10px] tracking-wider text-gold uppercase">Епархија Сремска</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {["Почетна", "О исповести", "Галерија"].map((item, i) => (
                      <span key={item} className="flex items-center gap-4">
                        {i > 0 && <div className="h-3 w-px bg-gold/30" />}
                        <span className="text-sm tracking-wide text-gold uppercase">{item}</span>
                      </span>
                    ))}
                    <div className="h-3 w-px bg-gold/30" />
                    <span className="btn-primary-sm ml-2">Задужбинарство</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero example */}
            <div>
              <p className="eyebrow-muted mb-3">Херо секција</p>
              <div className="relative overflow-hidden bg-dark flex flex-col items-center justify-center min-h-[220px] text-center px-6 py-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "url(/ornament-2.svg)", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%", backgroundPosition: "center" }}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-gold" />
                  <RussianOrthodoxCross size={20} />
                  <div className="h-px w-8 bg-gold" />
                </div>
                <p className="relative eyebrow mb-3">Света тајна</p>
                <h2 className="relative font-serif text-5xl leading-none text-on-dark">Покајање и исповест</h2>
              </div>
            </div>

            {/* Footer example */}
            <div>
              <p className="eyebrow-muted mb-3">Подножје</p>
              <div className="border-t border-gold/20 bg-dark px-6 py-6">
                <div className="flex justify-between items-start gap-8 flex-wrap mb-4">
                  <div className="text-on-dark">
                    <p className="text-lg font-serif">Манастир Кувеждин</p>
                    <p className="eyebrow mt-1">Српска Православна Црква · Епархија Сремска</p>
                  </div>
                  <nav className="flex flex-wrap gap-x-6 gap-y-1">
                    {["О исповести", "О псалтиру", "Историјат", "Галерија"].map((label) => (
                      <span key={label} className="text-[11px] text-on-dark/55">{label}</span>
                    ))}
                  </nav>
                </div>
                <div className="border-t border-gold/10 pt-4 text-center">
                  <p className="text-[10px] text-on-dark/30 tracking-wide">Манастир Кувеждин · Сремска епархија СПЦ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-dark px-6 py-6 mt-20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-[10px] text-on-dark/30 tracking-wide">UI Kit · Интерна страница · /ui-kit</p>
        </div>
      </footer>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-8">
      <span className="font-serif text-5xl text-gold/50 leading-none">{number}</span>
      <h2 className="font-serif text-4xl text-primary">{title}</h2>
    </div>
  );
}

function Divider() {
  return <hr className="border-t border-primary/10" />;
}
