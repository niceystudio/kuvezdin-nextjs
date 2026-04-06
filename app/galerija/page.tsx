import Image from "next/image";
import Link from "next/link";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import GalleryBrowser from "@/components/GalleryBrowser";
import RussianOrthodoxCross from "@/components/RussianOrthodoxCross";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Галерија | Манастир Кувеждин",
  description: "Фотографије манастира Кувеждин кроз временска раздобља.",
};

const galleryPeriods = [
  {
    id: "prva-polovina-20-veka-ruske-monahinje",
    title: "Прва половина 20. века - Период руских монахиња",
    folder: "prva-polovina-20-veka-ruske-monahinje",
  },
  {
    id: "druga-polovina-20-veka",
    title: "Друга половина 20. века",
    folder: "druga-polovina-20-veka",
  },
  {
    id: "1994-2004",
    title: "1994-2004",
    folder: "1994-2004",
  },
  {
    id: "2005-2012",
    title: "2005-2012",
    folder: "2005-2012",
  },
  {
    id: "2016-2020",
    title: "2016-2020",
    folder: "2016-2020",
  },
  {
    id: "2022-2026",
    title: "2022-2026",
    folder: "2022-2026",
  },
] as const;

function toLabel(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/\s*\(Medium\)/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function getGallerySections() {
  const collator = new Intl.Collator("sr", { numeric: true, sensitivity: "base" });
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];

  return Promise.all(
    galleryPeriods.map(async (period) => {
      const dirPath = join(process.cwd(), "public", "galerija", period.folder);
      const entries = await readdir(dirPath, { withFileTypes: true });
      const images = entries
        .filter(
          (entry) =>
            entry.isFile() &&
            imageExtensions.some((extension) =>
              entry.name.toLowerCase().endsWith(extension),
            ),
        )
        .map((entry) => entry.name)
        .sort((a, b) => collator.compare(a, b))
        .map((fileName) => ({
          src: `/galerija/${period.folder}/${fileName}`,
          alt: `${period.title} - ${toLabel(fileName)}`,
          label: toLabel(fileName),
          sectionId: period.id,
          sectionTitle: period.title,
        }));

      return {
        id: period.id,
        title: period.title,
        images,
      };
    }),
  );
}

export default async function GalerijaPage() {
  const sections = await getGallerySections();

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
              <div className="border-l border-[#C9A84C]/30 py-2 pl-3">
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
              ].map((item, index) => (
                <span key={item.href} className="flex items-center gap-4">
                  {index > 0 && <div className="h-3 w-px bg-[#C9A84C]/30" />}
                  <Link
                    href={item.href}
                    className={`text-sm tracking-wide uppercase transition-colors ${
                      item.href === "/galerija"
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
        <div className="container relative mx-auto grid min-h-[360px] gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <RussianOrthodoxCross size={24} />
              <div className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <p className="mb-4 text-[10px] tracking-[0.25em] text-[#C9A84C] uppercase">
              Галерија
            </p>
            <h1 className="font-serif text-5xl leading-none text-[#F5EDD8] md:text-6xl">
              Манастир Кувеждин кроз време
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-3 self-center">
            {[
              "/galerija/prva-polovina-20-veka-ruske-monahinje/1930 - Сарајево, дечији дом (1) (Medium).JPG",
              "/galerija/1994-2004/2004 (1) (Medium).JPG",
              "/galerija/2005-2012/2009 (1) (Medium).JPG",
              "/galerija/2016-2020/2018 (1) (Medium).jpg",
              "/galerija/2022-2026/2025 (1) (Medium).jpg",
              "/galerija/druga-polovina-20-veka/1989 (Medium).JPG",
            ].map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden border border-[#C9A84C]/20 ${
                  index === 0 || index === 4 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={src}
                  alt="Фотографија манастира Кувеждин"
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto max-w-7xl px-6 py-16">
        <GalleryBrowser sections={sections} />
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
