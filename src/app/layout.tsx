import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interview management system",
  description: "Interview management system with many loves !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://img.freepik.com/free-vector/green-leaves-logo_78370-2096.jpg?t=st=1713371223~exp=1713374823~hmac=a0d1b54d676a9b861b827bdc3ed21453faf76ca592fafe48728c460b1583a937&w=740" />
      </Head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
