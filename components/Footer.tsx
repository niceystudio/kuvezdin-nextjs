import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2C0808] border-t border-[#C9A84C]/20 py-8 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-start gap-8 flex-wrap mb-6">
          <div className="flex items-center gap-3 text-[#F5EDD8]">
            <Image
              src="/Грб_СПЦ.png"
              alt="Српска Православна Црква"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
            />
            <div>
              <p className="text-lg font-serif">Манастир Кувеждин</p>
              <p className="text-[10px] text-[#C9A84C] tracking-wider uppercase mt-1">Српска Православна Црква · Епархија Сремска</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { label: "О исповести", href: "/ispovest" },
              { label: "О псалтиру", href: "/psaltir" },
              { label: "Историјат", href: "/istorijat" },
              { label: "Галерија", href: "/galerija" },
              { label: "Закон Божији", href: "/zakon-boziji" },
              { label: "Задужбинарство", href: "/zaduzbinarstvo" },
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
  );
}
