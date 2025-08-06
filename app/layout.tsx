import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Aside from "@/components/aside";
import { TransactionsProvider } from "@/context/transactions-context";

const publicSans = Public_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTrack",
  description: "A personal finance tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased px-8 md:px-12 `}>
        <TransactionsProvider>
          <Header />
          <main className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-12">
            <Aside />
            <div className="flex-1 p-4 md:p-6 bg-background min-h-screen">
             
              {children}
            </div>
          </main>
        </TransactionsProvider>
      </body>
    </html>
  );
}
