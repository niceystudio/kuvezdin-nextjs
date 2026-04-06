import Image from "next/image";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import CopyButton from "@/components/CopyButton";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Задужбинарство | Манастир Кувеждин",
  description:
    "Позив на задужбинарство и добровољне прилоге за обнову манастира Кувеждин.",
};

type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

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

  for (const paragraphXml of paragraphMatches) {
    const text = [...paragraphXml.matchAll(/<w:t(?:\s+[^>]*)?>([\s\S]*?)<\/w:t>/g)]
      .map((match) => decodeXml(match[1]))
      .join("")
      .replace(/\u00A0/g, " ")
      .trim();

    if (!text) {
      continue;
    }

    const isCentered = /<w:jc[^>]*w:val="center"/.test(paragraphXml);
    const styleMatch = paragraphXml.match(/<w:pStyle[^>]*w:val="([^"]+)"/);
    const style = styleMatch?.[1] ?? "";

    if (style === "Title" || isCentered) {
      blocks.push({ type: "heading", text });
      continue;
    }

    blocks.push({ type: "paragraph", text });
  }

  return blocks;
}

async function getContentBlocks() {
  const xmlPath = join(
    process.cwd(),
    "app",
    "zaduzbinarstvo",
    "_source",
    "docx",
    "word",
    "document.xml",
  );
  const xml = await readFile(xmlPath, "utf8");
  return parseDocxContent(xml);
}

export default async function ZaduzbinarstvoPage() {
  const blocks = await getContentBlocks();
  const headings = blocks.filter(
    (block): block is Extract<ContentBlock, { type: "heading" }> =>
      block.type === "heading",
  );
  const paragraphs = blocks.filter(
    (block): block is Extract<ContentBlock, { type: "paragraph" }> =>
      block.type === "paragraph",
  );

  const pageTitle = headings[0]?.text ?? "Задужбинарство";
  const subtitle = headings[1]?.text ?? "(донације)";
  const intro = paragraphs[1]?.text ?? "";
  const accountNumber = "205-507773-57";

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <nav className="sticky top-0 z-40 border-b border-[#C9A84C]/20 bg-[#4A0E0E]">
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/spc-logo.svg"
                alt="Српска православна црква"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
              <div className="border-l border-[#C9A84C]/30 py-2 pl-3">
                <p className="text-xs leading-tight tracking-[0.15em] text-[#F5EDD8] uppercase">
                  Српска православна црква
                </p>
                <p className="mt-0.5 text-[10px] tracking-wider text-[#C9A84C] uppercase">
                  Епархија сремска
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
              ].map((item, index) => (
                <span key={item.href} className="flex items-center gap-4">
                  {index > 0 && <div className="h-3 w-px bg-[#C9A84C]/30" />}
                  <Link
                    href={item.href}
                    className="text-sm tracking-wide uppercase text-white/90 transition-colors hover:text-[#C9A84C]"
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
        <div className="container relative mx-auto px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <RussianOrthodoxCross size={24} />
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <p className="mb-4 text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase">
              Задужбинарство
            </p>
            <h1 className="font-serif text-5xl leading-none text-[#F5EDD8] md:text-6xl">
              {pageTitle}
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-[#F5EDD8]/80">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-5xl px-6 py-16">
        <section className="border-b border-[#6B1A1A]/15 pb-16">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <p className="font-serif text-2xl leading-10 text-[#6B1A1A]">
              Драга браћо и сестре у Христу,
            </p>
            <p className="text-lg leading-9 text-[#4A3C2A]">{intro}</p>
          </div>
        </section>

        <section className="pb-16">
          <div className="mb-8 mt-12 flex items-baseline gap-4">
            <span className="font-serif text-5xl leading-none text-[#C9A84C]/50">
              II
            </span>
            <h2 className="font-serif text-4xl text-[#6B1A1A]">
              Добровољни прилози
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-8 border border-[#6B1A1A]/15 bg-[#E8DCC8] p-8">
            <div>
              <p className="mb-3 text-base text-[#4A3C2A]">
                Ваше добровољне прилоге можете уплатити на следећи рачун:
              </p>
              <p className="mb-2 text-2xl font-semibold tracking-wide text-[#6B1A1A]">
                {accountNumber}
              </p>
              <p className="text-sm text-[#6B5C4C]">НЛБ Комерцијална банка</p>
            </div>
            <CopyButton text={accountNumber} />
          </div>
        </section>
      </main>

      <footer className="border-t border-[#C9A84C]/20 bg-[#2C0808] px-6 py-8">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-8">
            <div className="text-[#F5EDD8]">
              <p className="text-lg font-serif">Манастир Кувеждин</p>
              <p className="mt-1 text-[10px] tracking-wider text-[#C9A84C] uppercase">
                Српска православна црква · Епархија сремска
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
                <Link
                  key={label}
                  href={href}
                  className="text-[11px] text-[#F5EDD8]/55 transition-colors hover:text-[#C9A84C]"
                >
                  {label}
                </Link>
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
