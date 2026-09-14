import type { Metadata } from "next";
import {
  khand,
  array,
  arrayWide,
  arraySemibold,
  arraySemiboldWide,
  arrayBold,
  arrayBoldWide,
} from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaius Gana — UI/UX Product Designer & AI Automation Specialist",
  description:
    "I design digital products that are clear, usable, and built for real-world constraints. I also build AI automations that remove repetitive work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${khand.variable} ${array.variable} ${arrayWide.variable} ${arraySemibold.variable} ${arraySemiboldWide.variable} ${arrayBold.variable} ${arrayBoldWide.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}