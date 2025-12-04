import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premier Studio for Creative Digital Solutions",
  description: "  Elevate your brand with our innovative digital solutions. From stunning web design to impactful marketing strategies, we bring your vision to life. Partner with us for a transformative digital experience that drives results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sherika:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${bricolageGrotesque.variable} antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
