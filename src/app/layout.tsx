import type { Metadata } from "next";
import { Akatab, Notable, Krona_One, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

const akatab = Akatab({
  subsets: ["latin"],
  variable: "--font-akatab-next",
  weight: "400",
});

const notable = Notable({
  subsets: ["latin"],
  variable: "--font-notable-next",
  weight: "400",
});

const kronaOne = Krona_One({
  subsets: ["latin"],
  variable: "--font-krona-next",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portofolio Erland Widyatamaka",
  description: "Portofolio Erland Widyatamaka, a man who interests in machine learning, data science, and software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${akatab.variable} ${notable.variable} ${kronaOne.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`min-h-screen flex flex-col`}>
        <Navbar />

        <main className="grow">
          {children}
        </main>
      
      </body>
    </html>
  );
}
