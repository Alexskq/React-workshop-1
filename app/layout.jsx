import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";
import { fromJSON } from "postcss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Journey ",
  description: "The journey of your React learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "h-full")}>{children}</body>
    </html>
  );
}
