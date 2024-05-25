import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import { ModeToggle } from "@/components/DarkModeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="flex z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
              <Link href="/">
                <h2 className="text-2xl font-bold">Search For Your Pokemon</h2>
              </Link>
              <div className="flex gap-18">
                <ModeToggle />
              </div>
            </div>
            <div className="mt-10">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
