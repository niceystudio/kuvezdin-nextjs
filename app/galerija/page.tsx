import { readdir } from "node:fs/promises";
import { join } from "node:path";
import GalleryBrowser from "@/components/GalleryBrowser";
import SiteNav from "@/components/SiteNav";
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
            Галерија
          </p>
          <h1 className="font-serif text-5xl leading-none text-[#F5EDD8] md:text-6xl">
            Манастир Кувеждин кроз време
          </h1>
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
