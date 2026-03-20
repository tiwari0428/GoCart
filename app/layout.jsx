

import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";

import StoreProvider from "./StoreProvider";
import { ClerkProvider } from "@clerk/nextjs";  
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";




const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "GoCart. - Shop smarter",
  description: "GoCart. - Shop smarter",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.className} antialiased`}>
          <StoreProvider>
            <Toaster />
            <Banner />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

