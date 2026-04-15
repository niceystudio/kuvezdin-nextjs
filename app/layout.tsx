import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Agentation } from "agentation";
import { Analytics } from "@vercel/analytics/next";

const monahOCS = localFont({
  src: "./fonts/MonahOCS.otf",
  variable: "--font-monahocs",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manastirkuvezdin.rs"),
  alternates: {
    canonical: "/",
  },
  title: "Manastir Kuveždin | Srpska pravoslavna crkva",
  description: "Informativna stranica manastira Kuveždin, Eparhije sremske, Srpske pravoslavne crkve.",
  icons: {
    icon: "/Грб_СПЦ.png",
    shortcut: "/Грб_СПЦ.png",
    apple: "/Грб_СПЦ.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={monahOCS.variable}>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
        <Analytics />
      </body>
    </html>
  );
}

