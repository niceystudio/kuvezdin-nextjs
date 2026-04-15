import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Agentation } from "agentation";

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
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}

