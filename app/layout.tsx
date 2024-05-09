import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local'
import { Provide } from "@/components/Provide";

const clash = localFont({
  src:'../fonts/ClashDisplay-Variable.ttf',
   variable:'--clash'
  

});   

const general = localFont({
  src:'../fonts/GeneralSans-Variable.ttf',
    variable:"--general"
  

});   



export const metadata: Metadata = {
  title: "PokeBook| 0xNunana",
  description: "Largest Pokemon Index",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={`${clash.className} ${general.className}`}>
       
      <body >
        <Provide>    {children}</Provide>
    </body>
    </html>
  );
}
