import Image from "next/image";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import HistoryImageGroup, {
  type HistoryImageCard,
} from "@/components/HistoryImageGroup";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Историјат | Манастир Кувеждин",
  description: "Историја манастира Кувеждин.",
};

type Paragraph =
  | { type: "paragraph"; text: string }
  | { type: "quote"; lines: string[] };

type Section = {
  heading: string | null;
  paragraphs: Paragraph[];
};

type HistoryImage = HistoryImageCard;

const imageCatalog: Record<number, HistoryImage> = {
  1: {
    src: "/istorijat/1.jpg",
    imageFit: "contain",
    figureClassName: "mx-auto w-full max-w-md",
    caption: "СВЕТИ БЛАГОВЕРНИ КНЕЗ СТЕФАН ШТИЉАНОВИЋ",
    alt: "Свети благоверни кнез Стефан Штиљановић",
  },
  2: {
    src: "/istorijat/2.jpg",
    caption: "МАНАСТИР КУВЕЖДИН 18. ВЕК",
    alt: "Манастир Кувеждин 18. век",
  },
  3: {
    src: "/istorijat/3.JPG",
    caption: "ЦРТЕЖ - 1828. ГОДИНА",
    alt: "Цртеж манастира Кувеждин из 1828. године",
  },
  4: {
    src: "/istorijat/4.jpg",
    caption: "ГРАВИРА 1840. ГОДИНА",
    alt: "Гравира манастира Кувеждин из 1840. године",
  },
  5: {
    src: "/istorijat/5.JPG",
    caption: "ИКОНОСТАС 1853. ГОДИНА",
    alt: "Иконостас 1853. година",
  },
  6: {
    src: "/istorijat/6.jpg",
    caption: "ПОЧЕТАК 20. ВЕКА",
    alt: "Манастир на почетку 20. века",
  },
  7: {
    src: "/istorijat/7.JPG",
    caption: "МАНАСТИР КУВЕЖДИН ИЗМЕЂУ ДВА СВЕТСКА РАТА",
    alt: "Манастир Кувеждин између два светска рата",
  },
  8: {
    src: "/istorijat/8.JPG",
    caption: "МАТИ МЕЛАНИЈА КРИВОКУЋИН",
    alt: "Мати Меланија Кривокућин",
  },
  9: {
    src: "/istorijat/9.jpg",
    caption: "МАТИ МЕЛАНИЈА СА СЕСТРИНСТВОМ",
    alt: "Мати Меланија са сестринством",
  },
  10: {
    src: "/istorijat/10.JPG",
    caption: "ДЕЧИЈИ ДОМ, САРАЈЕВО 1930. ГОДИНА",
    alt: "Дечији дом, Сарајево 1930. година",
  },
  11: {
    src: "/istorijat/11.jpg",
    caption: "РУЧНИ ЗАПИСИ У ЦВЕТНОМ ТРИОДУ ИЗ 1943. И 1944. ГОДИНЕ",
    alt: "Ручни записи у Цветном Триоду",
  },
  12: {
    src: "/istorijat/12.jpg",
    caption: "МАНАСТИР КУВЕЖДИН ПОСЛЕ РУШЕЊА 1946. ГОДИНА",
    alt: "Манастир Кувеждин после рушења 1946. године",
  },
  13: {
    src: "/istorijat/13.JPG",
    caption: "1989. ГОДИНА",
    alt: "Манастир 1989. године",
  },
  14: {
    src: "/istorijat/14.JPG",
    imageClassName: "object-[50%_18%]",
    caption: "ЕПИСКОП СРЕМСКИ ГОСПОДИН ВАСИЛИЈЕ ВАДИЋ",
    alt: "Епископ сремски господин Василије Вадић",
  },
  15: {
    src: "/istorijat/15.jpg",
    imageFit: "contain",
    figureClassName: "mx-auto w-full max-w-md",
    caption: "ИЗГЛЕД МАНАСТИРА 90-их ГОДИНА",
    alt: "Изглед манастира 90-их година",
  },
  16: {
    src: "/istorijat/16.JPG",
    caption: "ИЗГЛЕД ЦРКВЕ 2004. ГОДИНЕ",
    alt: "Изглед цркве 2004. године",
  },
  17: {
    src: "/istorijat/17.JPG",
    caption: "УНУТРАШЊОСТ ЦРКВЕ 2004. ГОДИНЕ",
    alt: "Унутрашњост цркве 2004. године",
  },
  18: {
    src: "/istorijat/18.JPG",
    caption: "НАСТОЈАТЕЉ МАНАСТИРА КУВЕЖДИН ЈЕРОМОНАХ ВАРНАВА ЛУКИЋ",
    alt: "Настојатељ манастира Кувеждин јеромонах Варнава Лукић",
  },
  19: {
    src: "/istorijat/19.JPG",
    caption: "ИГУМАН ВАРНАВА",
    alt: "Игуман Варнава",
  },
  20: {
    src: "/istorijat/20.jpg",
    caption: "КРВОТОЧЕЊЕ КАЗАНСКЕ ИКОНЕ ПРЕСВЕТЕ БОГОРОДИЦЕ 2008. ГОДИНЕ",
    alt: "Крвоточење Казанске иконе Пресвете Богородице",
  },
  21: {
    src: "/istorijat/21.JPG",
    caption: "ЗИДАЊЕ КАПЕЛЕ ЈОВАНА ЗЛАТОУСТОГ 2008-2009 ГОДИНА",
    alt: "Зидање капеле Јована Златоустог",
  },
  22: {
    src: "/istorijat/22.JPG",
    caption: "УРЕЂЕЊЕ КАПЕЛЕ СВ. ЈОВАНА ЗЛАТОУСТОГ 2010. ГОДИНА",
    alt: "Уређење капеле Светог Јована Златоустог 2010. године",
  },
  23: {
    src: "/istorijat/23.JPG",
    caption: "УРЕЂЕЊЕ ПОРТЕ 2011. ГОДИНА",
    alt: "Уређење порте 2011. године",
  },
  24: {
    src: "/istorijat/24.jpg",
    caption: "ЧИШЋЕЊЕ ИСТОЧНОГ КРИЛА 2017. ГОДИНЕ",
    alt: "Чишћење источног крила 2017. године",
  },
  25: {
    src: "/istorijat/25.jpg",
    caption: "ОБНОВА ИСТОЧНОГ КОНАКА 2018. ГОДИНА",
    alt: "Обнова источног конака 2018. година",
  },
  26: {
    src: "/istorijat/26.JPG",
    caption: "СНИМАК ИЗ ВАЗДУХА 2021. ГОДИНА",
    alt: "Снимак манастира из ваздуха 2021. године",
  },
  27: {
    src: "/istorijat/27.jpg",
    caption: "ПОДНО ГРЕЈАЊЕ У ТРПЕЗАРИЈИ 2022. ГОДИНА",
    alt: "Подно грејање у трпезарији 2022. година",
  },
  28: {
    src: "/istorijat/28.JPG",
    caption: "ВАЗНЕСЕНСКА КАПЕЛА 2025. ГОДИНА",
    alt: "Вазнесенска капела 2025. година",
  },
  29: {
    src: "/istorijat/29.jpg",
    caption: "ТРЕНУТНИ ИЗГЛЕД МАНАСТИРА 2026. ГОДИНА",
    alt: "Тренутни изглед манастира 2026. година",
  },
};

const imageGroups = new Map<number, number[]>([
  [0, [1]],
  [8, [2]],
  [11, [3, 4]],
  [12, [5]],
  [13, [6]],
  [15, [7, 8]],
  [16, [9, 10]],
  [17, [11]],
  [23, [12]],
  [26, [13, 14]],
  [27, [15]],
  [28, [16, 17, 18]],
  [29, [19, 20]],
  [30, [21, 22, 23]],
  [31, [24, 25, 26]],
  [32, [27, 28]],
  [34, [29]],
]);

function cleanQuoteLine(line: string) {
  return line
    .replace(/^>\s*/, "")
    .replace(/^\*/, "")
    .replace(/\*$/, "")
    .trim();
}

async function getSections(): Promise<Section[]> {
  const filePath = join(
    process.cwd(),
    "documents",
    "copy",
    "4. ИСТОРИЈАТ",
    "istorija-manastira-kuvezdin.md",
  );
  const content = await readFile(filePath, "utf8");

  const blocks = content
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const sections: Section[] = [];
  let current: Section = { heading: null, paragraphs: [] };

  for (const block of blocks) {
    if (block.startsWith("# ")) {
      if (current.heading || current.paragraphs.length > 0) {
        sections.push(current);
      }
      current = {
        heading: block.replace(/^# /, "").trim(),
        paragraphs: [],
      };
      continue;
    }

    if (block === "---") {
      if (current.heading || current.paragraphs.length > 0) {
        sections.push(current);
      }
      current = { heading: null, paragraphs: [] };
      continue;
    }

    if (block.startsWith(">")) {
      const lines = block
        .split(/\r?\n/)
        .map(cleanQuoteLine)
        .filter(Boolean);

      current.paragraphs.push({ type: "quote", lines });
      continue;
    }

    current.paragraphs.push({ type: "paragraph", text: block });
  }

  if (current.heading || current.paragraphs.length > 0) {
    sections.push(current);
  }

  return sections;
}

function renderParagraph(paragraph: Paragraph, key: string) {
  if (paragraph.type === "quote") {
    return (
      <blockquote
        key={key}
        className="border-l-4 border-[#C9A84C] bg-[#FBF7EE] px-6 py-6 font-serif text-lg leading-8 text-[#4A3C2A] italic"
      >
        <div className="space-y-1">
          {paragraph.lines.map((line, index) => (
            <p key={`${key}-${index}`} className="m-0">
              {line}
            </p>
          ))}
        </div>
      </blockquote>
    );
  }

  return (
    <p key={key} className="text-base leading-relaxed text-[#4A3C2A]">
      {paragraph.text}
    </p>
  );
}

function renderImageGroup(ids: number[], key: string) {
  const images = ids.map((id) => imageCatalog[id]).filter(Boolean);

  if (images.length === 0) {
    return null;
  }

  const gridClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";

  return (
    <HistoryImageGroup
      key={key}
      images={images}
      className={`grid gap-4 ${gridClass}`}
    />
  );
}

export default async function IstorijatPage() {
  const sections = await getSections();
  const [introSection, ...restSections] = sections;
  const introParagraphs =
    introSection?.paragraphs.map((paragraph, index) => ({
      paragraph,
      globalIndex: index,
      key: `intro-${index}`,
    })) ?? [];

  const indexedRestSections = restSections.reduce<
    Array<
      Section & {
        indexedParagraphs: Array<{
          paragraph: Paragraph;
          globalIndex: number;
          key: string;
        }>;
      }
    >
  >((acc, section) => {
    const previousCount =
      acc.at(-1)?.indexedParagraphs.at(-1)?.globalIndex ?? introParagraphs.length - 1;
    const startIndex = previousCount + 1;

    acc.push({
      ...section,
      indexedParagraphs: section.paragraphs.map((paragraph, paragraphIndex) => ({
        paragraph,
        globalIndex: startIndex + paragraphIndex,
        key: `${section.heading ?? "sekcija"}-${paragraphIndex}`,
      })),
    });

    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <nav className="sticky top-0 z-40 border-b border-[#C9A84C]/20 bg-[#4A0E0E]">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/spc-logo.svg"
                alt="Српска Православна Црква"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
              <div className="border-l border-[#C9A84C]/30 pl-3 py-2">
                <p className="text-xs leading-tight tracking-[0.15em] text-[#F5EDD8] uppercase">
                  Српска Православна Црква
                </p>
                <p className="mt-0.5 text-[10px] tracking-wider text-[#C9A84C] uppercase">
                  Епархија Сремска
                </p>
              </div>
            </Link>
            <div className="hidden items-center gap-4 lg:flex">
              {[
                { href: "/", label: "Почетна" },
                { href: "/ispovest", label: "О исповести" },
                { href: "/psaltir", label: "О псалтиру" },
                { href: "/istorijat", label: "Историјат" },
                { href: "/galerija", label: "Галерија" },
                { href: "/zakon-boziji", label: "Закон Божији" },
              ].map((item, i) => (
                <span key={item.href} className="flex items-center gap-4">
                  {i > 0 && <div className="h-3 w-px bg-[#C9A84C]/30" />}
                  <Link
                    href={item.href}
                    className={`text-sm tracking-wide uppercase transition-colors ${
                      item.href === "/istorijat"
                        ? "text-[#C9A84C]"
                        : "text-white/90 hover:text-[#C9A84C]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
              <div className="h-3 w-px bg-[#C9A84C]/30" />
              <Link
                href="/zaduzbinarstvo"
                className="ml-2 bg-[#C9A84C] px-5 py-2 text-xs font-medium tracking-wider text-[#1A1209] uppercase transition-colors hover:bg-[#E8C96A]"
              >
                Задужбинарство
              </Link>
            </div>
            <Link
              href="/"
              className="text-sm tracking-wide text-[#F5EDD8]/70 transition-colors hover:text-[#C9A84C] lg:hidden"
            >
              Почетна
            </Link>
          </div>
        </div>
      </nav>

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
        <div className="relative grid min-h-[420px] md:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <RussianOrthodoxCross size={24} />
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <p className="mb-4 text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase">
              Историјат
            </p>
            <h1 className="mb-6 font-serif text-5xl leading-none text-[#F5EDD8] md:text-6xl">
              {introSection?.heading ?? "Историја"}
            </h1>
            <div className="mb-6 h-px w-24 bg-[#C9A84C]/40" />
            <p className="max-w-sm font-serif text-base leading-relaxed text-[#F5EDD8]/70 italic">
              Историја манастира Кувеждин од оснивања до обнове у нашем времену.
            </p>
          </div>
          <div className="grid gap-4 px-6 py-8 md:grid-cols-2 md:px-8 md:py-10">
            <div className="relative min-h-[240px] overflow-hidden border border-[#C9A84C]/20 md:col-span-2">
              <Image
                src="/istorijat/29.jpg"
                alt="Тренутни изглед манастира 2026. година"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2C0808]/55 to-transparent" />
            </div>
            <div className="relative min-h-[180px] overflow-hidden border border-[#C9A84C]/20">
              <Image
                src="/istorijat/2.jpg"
                alt="Манастир Кувеждин 18. век"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative min-h-[180px] overflow-hidden border border-[#C9A84C]/20">
              <Image
                src="/istorijat/4.jpg"
                alt="Гравира 1840. година"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-6 py-16">
        {introSection ? (
          <section className="border-b border-[#6B1A1A]/15 pb-16">
            <div className="space-y-5">
              {introParagraphs.flatMap(({ paragraph, globalIndex, key }) => {
                const nodes = [
                  renderParagraph(paragraph, key),
                ];
                const group = imageGroups.get(globalIndex);
                if (group) {
                  nodes.push(renderImageGroup(group, `images-${globalIndex}`)!);
                }
                return nodes;
              })}
            </div>
          </section>
        ) : null}

        {indexedRestSections.map((section, index) => (
          <section
            key={`${section.heading ?? "sekcija"}-${index}`}
            className={
              index === restSections.length - 1
                ? "pb-16"
                : "border-b border-[#6B1A1A]/15 pb-16"
            }
          >
            {section.heading ? (
              <div className="mt-12 mb-8 flex items-baseline gap-4">
                <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
                  {index + 1}
                </span>
                <h2 className="font-serif text-4xl text-[#6B1A1A]">
                  {section.heading}
                </h2>
              </div>
            ) : (
              <div className="mt-12" />
            )}

            <div className="space-y-5">
              {section.indexedParagraphs.flatMap(({ paragraph, globalIndex, key }) => {
                const nodes = [
                  renderParagraph(paragraph, key),
                ];
                const group = imageGroups.get(globalIndex);
                if (group) {
                  nodes.push(renderImageGroup(group, `images-${globalIndex}`)!);
                }
                return nodes;
              })}
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-[#C9A84C]/20 bg-[#2C0808] px-6 py-8">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-8">
            <div className="text-[#F5EDD8]">
              <p className="text-lg font-serif">Манастир Кувеждин</p>
              <p className="mt-1 text-[10px] tracking-wider text-[#C9A84C] uppercase">
                Српска Православна Црква · Епархија Сремска
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-1">
              {[
                { label: "О исповести", href: "/ispovest" },
                { label: "О псалтиру", href: "/psaltir" },
                { label: "Историјат", href: "/istorijat" },
                { label: "Галерија", href: "/galerija" },
                { label: "Закон Божији", href: "/zakon-boziji" },
                { label: "Задужбинарство", href: "/zaduzbinarstvo" },
                { label: "Обавештења", href: "/#obavestenja" },
                { label: "Преузимања", href: "/#preuzimanja" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] text-[#F5EDD8]/55 transition-colors hover:text-[#C9A84C]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t border-[#C9A84C]/10 pt-4 text-center">
            <p className="text-[10px] tracking-wide text-[#F5EDD8]/30">
              Манастир Кувеждин · Сремска епархија СПЦ
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
