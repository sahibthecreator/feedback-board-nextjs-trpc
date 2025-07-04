import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ReactQueryProvider } from "./react-query-provider";
import NavBar from "@/components/navBar";

const poppins = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buildscout Feedback Board",
  description: "Leave your feedback and make us better!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ReactQueryProvider>
          <NavBar />
          {children}
        </ReactQueryProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
