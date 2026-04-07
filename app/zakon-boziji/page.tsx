import Image from "next/image";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import HistoryImageGroup from "@/components/HistoryImageGroup";
import SiteNav from "@/components/SiteNav";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Закон Божији | Манастир Кувеждин",
  description: "Предговор и преглед књиге Закон Божији.",
};

type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

function decodeXml(value: string) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");
}

function parseDocxContent(xml: string): ContentBlock[] {
  const paragraphMatches = xml.match(/<w:p\b[\s\S]*?<\/w:p>/g) ?? [];
  const blocks: ContentBlock[] = [];
  let pendingList: string[] = [];

  const flushList = () => {
    if (pendingList.length > 0) {
      blocks.push({ type: "list", items: pendingList });
      pendingList = [];
    }
  };

  for (const paragraphXml of paragraphMatches) {
    const texts = [...paragraphXml.matchAll(/<w:t(?:\s+[^>]*)?>([\s\S]*?)<\/w:t>/g)]
      .map((match) => decodeXml(match[1]))
      .join("")
      .replace(/\u00A0/g, " ")
      .trim();

    if (!texts) {
      flushList();
      continue;
    }

    const isListItem = /<w:numPr>[\s\S]*?<\/w:numPr>/.test(paragraphXml);
    const isCentered = /<w:jc[^>]*w:val="center"/.test(paragraphXml);
    const styleMatch = paragraphXml.match(/<w:pStyle[^>]*w:val="([^"]+)"/);
    const style = styleMatch?.[1] ?? "";

    if (isListItem) {
      pendingList.push(texts);
      continue;
    }

    flushList();

    if (style === "Title" || isCentered) {
      blocks.push({ type: "heading", text: texts });
      continue;
    }

    blocks.push({ type: "paragraph", text: texts });
  }

  flushList();

  return blocks;
}

async function getContentBlocks() {
  const xmlPath = join(
    process.cwd(),
    "app",
    "zakon-boziji",
    "_source",
    "docx",
    "word",
    "document.xml",
  );
  const xml = await readFile(xmlPath, "utf8");
  return parseDocxContent(xml);
}

const bookPhotos = [
  {
    src: "/zakon-boziji/knjiga-01.jpg",
    alt: "Закон Божији, корица",
    caption: "ЗАКОН БОЖИЈИ",
  },
  {
    src: "/zakon-boziji/knjiga-02.jpg",
    alt: "Закон Божији, отворена књига",
    caption: "КЊИГА ЗА ПОРОДИЦУ И ШКОЛУ",
  },
  {
    src: "/zakon-boziji/knjiga-ugao-96.jpg",
    alt: "Закон Божији, књига из угла",
    caption: "ИЗДАЊЕ МАНАСТИРА КУВЕЖДИН",
  },
  {
    src: "/zakon-boziji/knjiga-ugao-97.jpg",
    alt: "Закон Божији, бочни угао",
    caption: "ФОТОГРАФИЈА КЊИГЕ",
  },
  {
    src: "/zakon-boziji/knjiga-ugao-98.jpg",
    alt: "Закон Божији, детаљ корице",
    caption: "ДЕТАЉ ИЗДАЊА",
  },
  {
    src: "/zakon-boziji/knjiga-ugao-99.jpg",
    alt: "Закон Божији, приказ књиге",
    caption: "ПРИКАЗ КЊИГЕ",
  },
  {
    src: "/zakon-boziji/knjiga-ugao-100.jpg",
    alt: "Закон Божији, приказ из угла",
    caption: "ШТАМПАНО ИЗДАЊЕ",
  },
] as const;

const contentScreens = Array.from({ length: 10 }, (_, index) => ({
  src: `/zakon-boziji/sadrzaj-${String(index + 1).padStart(2, "0")}.png`,
  alt: `Садржај књиге, страна ${index + 1}`,
  caption: `САДРЖАЈ КЊИГЕ ${index + 1}`,
  imageFit: "contain" as const,
  aspectClassName: "aspect-[3/4]",
}));

export default async function ZakonBozijiPage() {
  const blocks = await getContentBlocks();
  const [titleBlock, ...restBlocks] = blocks;
  const titleText =
    titleBlock && "text" in titleBlock ? titleBlock.text : "Закон Божији";

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
            Закон Божији
          </p>
          <h1 className="font-serif text-5xl leading-none text-[#F5EDD8] md:text-6xl">
            {titleText}
          </h1>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-6 py-16">
        <section className="border-b border-[#6B1A1A]/15 pb-16">
          <HistoryImageGroup
            images={bookPhotos.map((photo) => ({
              ...photo,
              aspectClassName: "aspect-[4/3]",
            }))}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          />
        </section>

        <section className="border-b border-[#6B1A1A]/15 py-16">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
              I
            </span>
            <h2 className="font-serif text-4xl text-[#6B1A1A]">Садржај</h2>
          </div>
          <HistoryImageGroup
            images={contentScreens}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          />
        </section>

        <section className="py-16">
          <div className="space-y-6">
            {restBlocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.text}-${index}`}
                    className="pt-6 text-center font-serif text-3xl text-[#6B1A1A]"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ol
                    key={`list-${index}`}
                    className="space-y-3 pl-6 text-base leading-relaxed text-[#4A3C2A]"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li key={`${itemIndex}-${item}`}>{item}</li>
                    ))}
                  </ol>
                );
              }

              return (
                <p
                  key={`${index}-${block.text.slice(0, 24)}`}
                  className="text-base leading-relaxed text-[#4A3C2A]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </section>

        <section className="border border-[#C9A84C]/30 bg-[#FBF7EE] px-8 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] tracking-[0.22em] text-[#8D6A2B] uppercase">
                Преузимање
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#6B1A1A]">
                Закон Божији
              </h2>
            </div>
            <a
              href="/preuzimanja/zakon-boziji.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[#6B1A1A] bg-[#6B1A1A] px-6 py-3 text-sm tracking-[0.18em] text-[#F5EDD8] uppercase transition-colors hover:bg-[#8C2424]"
            >
              Преузми књигу
            </a>
          </div>
        </section>
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
