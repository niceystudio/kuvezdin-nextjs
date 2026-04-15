import { readFile } from "node:fs/promises";
import { join } from "node:path";
import HistoryImageGroup from "@/components/HistoryImageGroup";
import SiteNav from "@/components/SiteNav";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zakon Boziji | Manastir Kuvezdin",
  description:
    "Predgovor, sadrzaj i fotografije knjige Zakon Boziji, uz mogucnost preuzimanja. Duhovno i poucno stivo na sajtu manastira Kuvezdin.",
};

type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string };

function stripInline(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\\(.)/g, "$1");
}

function parseMdContent(md: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  let pendingList: string[] = [];

  const flushList = () => {
    if (pendingList.length > 0) {
      blocks.push({ type: "list", items: pendingList });
      pendingList = [];
    }
  };

  for (const raw of md.split("\n")) {
    const line = raw.trim();

    if (!line) {
      flushList();
      continue;
    }

    if (line.startsWith("#")) {
      flushList();
      blocks.push({ type: "heading", text: stripInline(line.replace(/^#+\s*/, "")) });
      continue;
    }

    if (line.startsWith("> ")) {
      flushList();
      blocks.push({ type: "blockquote", text: stripInline(line.slice(2)) });
      continue;
    }

    const listMatch = line.match(/^\d+\.\s+(.*)/);
    if (listMatch) {
      pendingList.push(stripInline(listMatch[1]));
      continue;
    }

    flushList();

    if (/^\*\*[^*]+\*\*$/.test(line)) {
      blocks.push({ type: "heading", text: stripInline(line) });
      continue;
    }

    blocks.push({ type: "paragraph", text: stripInline(line) });
  }

  flushList();
  return blocks;
}

async function getContentBlocks() {
  const mdPath = join(
    process.cwd(),
    "documents",
    "copy",
    "6. ЗАКОН БОЖИЈИ",
    "ЗАКОН БОЖИЈИ sadržaj.md",
  );
  const md = await readFile(mdPath, "utf8");
  return parseMdContent(md);
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
            КЊИГА ЗА ПОРОДИЦУ И ШКОЛУ
          </p>
          <h1 className="font-serif text-[#F5EDD8]">
            {titleText}
          </h1>
        </div>
      </section>

      <main className="container mx-auto max-w-6xl px-6 py-16">
        <section className="border-b border-[#6B1A1A]/15 py-16">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
              I
            </span>
            <h2 className="font-serif text-4xl text-[#6B1A1A]">Предговор</h2>
          </div>
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

              if (block.type === "blockquote") {
                return (
                  <blockquote
                    key={`blockquote-${index}`}
                    className="border-l-4 border-[#C9A84C] bg-[#F5EDD8] px-6 py-5 font-serif text-lg italic leading-relaxed text-[#6B1A1A]"
                  >
                    {block.text}
                  </blockquote>
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

        <section className="border-b border-[#6B1A1A]/15 py-16">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
              II
            </span>
            <h2 className="font-serif text-4xl text-[#6B1A1A]">Садржај</h2>
          </div>
          <HistoryImageGroup
            images={contentScreens}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          />
        </section>

        <section className="border-b border-[#6B1A1A]/15 py-16">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
              III
            </span>
            <h2 className="font-serif text-4xl text-[#6B1A1A]">Галерија</h2>
          </div>
          <HistoryImageGroup
            images={bookPhotos.map((photo) => ({
              ...photo,
              aspectClassName: "aspect-[4/3]",
            }))}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          />
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

      <Footer />

      <a
        href="/preuzimanja/zakon-boziji.pdf"
        download
        className="fixed bottom-6 left-6 z-50 inline-flex h-12 items-center gap-2 border border-[#C9A84C]/35 bg-[#2C0808]/95 px-3 text-[#F5EDD8] shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#451010] hover:shadow-xl md:h-auto md:gap-3 md:px-4 md:py-3"
      >
        <span className="flex h-8 w-8 items-center justify-center border border-[#C9A84C]/40 text-[11px] font-semibold tracking-[0.16em] text-[#C9A84C] md:h-9 md:w-9 md:text-xs">
          ПДФ
        </span>
        <span className="text-left">
          <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#C9A84C] md:text-[10px] md:tracking-[0.18em]">
            Преузми књигу
          </span>
          <span className="hidden text-sm font-medium leading-tight md:block">
            Закон Божији
          </span>
        </span>
      </a>

      <ScrollToTop />
    </div>
  );
}
