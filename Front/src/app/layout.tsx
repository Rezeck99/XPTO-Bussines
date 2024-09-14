import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XPTO",
  description: "Sistema de cadastro da XPTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header className="w-screen h-12 bg-slate-700 text-white font-bold text-2xl text-center grid place-content-center">
          <Link href={"/"}>XPTO</Link>
        </header>
        <main className="grid w-screen h-[calc(100vh-3rem)] place-content-center">
          {children}
        </main>
      </body>
    </html>
  );
}
