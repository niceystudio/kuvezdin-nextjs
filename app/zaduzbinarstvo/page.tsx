import Image from "next/image";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import CopyButton from "@/components/CopyButton";
import SiteNav from "@/components/SiteNav";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

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
            Задужбинарство
          </p>
          <h1 className="font-serif text-[#F5EDD8]">
            {pageTitle}
          </h1>
          <p className="mt-4 font-serif text-2xl italic text-[#F5EDD8]/80">
            {subtitle}
          </p>
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

      <Footer />

      <ScrollToTop />
    </div>
  );
}
