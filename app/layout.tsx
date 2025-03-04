import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

const inter = Poppins({ weight: "400", subsets: ["latin"] });


export const metadata: Metadata = {
  title: "UTKU BORA EFIL",
  description: "my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`${inter.className} bg-[#1a191d] text-white`)}>{children}</body>
    </html>
  );
}

