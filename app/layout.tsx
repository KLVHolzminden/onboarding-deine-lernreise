import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LSB Niedersachsen | Lernreise für neue Referierende",
  description:
    "Szenariobasierte Onboarding-App für neue Referierende im LandesSportBund Niedersachsen e.V.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
