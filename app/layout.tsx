import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css'
import ImportBsJS from "./importBsJS";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
   subsets: ["latin"],
   variable: '--font-inter',
   });


const jost = Jost({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: "SoulSync",
  description: "Souls Synced",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jost.variable}`}>
        <main>{children}</main>
      </body>
      <ImportBsJS />
    </html>
  );
}
