import localFont from "next/font/local";
import { Khand } from "next/font/google";

export const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-khand",
  display: "swap",
});

export const array = localFont({
  src: "./fonts/Array-Regular.woff2",
  variable: "--font-array",
  display: "swap",
});

export const arrayWide = localFont({
  src: "./fonts/Array-Wide.woff2",
  variable: "--font-array-wide",
  display: "swap",
});

export const arraySemibold = localFont({
  src: "./fonts/Array-Semibold.woff2",
  variable: "--font-array-semibold",
  display: "swap",
});

export const arraySemiboldWide = localFont({
  src: "./fonts/Array-SemiboldWide.woff2",
  variable: "--font-array-semibold-wide",
  display: "swap",
});

export const arrayBold = localFont({
  src: "./fonts/Array-Bold.woff2",
  variable: "--font-array-bold",
  display: "swap",
});

export const arrayBoldWide = localFont({
  src: "./fonts/Array-BoldWide.woff2",
  variable: "--font-array-bold-wide",
  display: "swap",
});