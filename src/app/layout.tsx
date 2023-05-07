
import Footer from "@/components/widgets/Footer";


import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/widgets/Header";
import SearchComp from "@/components/widgets/SearchComp";

const open_sans = Open_Sans({ subsets: ["latin"], preload: true });

export const metadata = {
  title: "FOOD RECIPES",
  description: "The best desi and all types of food recipes on the internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Header />
        {children}
        <SearchComp />
        <Footer />
      </body>
    </html>
  );
}
