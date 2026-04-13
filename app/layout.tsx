import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Agentation } from "agentation";

const monahOCS = localFont({
  src: "./fonts/MonahOCS.otf",
  variable: "--font-monahocs",
});

export const metadata: Metadata = {
  title: "Манастир Кувеждин | Српска Православна Црква",
  description: "Информативна страница Манастира Кувеждин, Епархије Сремске, Српске Православне Цркве.",
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
