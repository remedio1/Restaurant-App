import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Notification from "@/components/Notification";
import { Inter } from "next/font/google";
import { QueryProvider } from "../components/QueryProvider";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Restaurant",
  description: "A delightful dining experience",
};

<meta name="viewport" content="width=device-width, initial-scale=1" />;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SessionProvider >
        <QueryProvider>
          <Notification />
          <NavBar />
          {children}
          <Footer />
          <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
        </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
