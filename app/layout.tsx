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

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (!theme) theme = 'dark';
      if (theme === 'dark') document.documentElement.classList.add('dark');
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${khand.variable} ${array.variable} ${arrayWide.variable} ${arraySemibold.variable} ${arraySemiboldWide.variable} ${arrayBold.variable} ${arrayBoldWide.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}