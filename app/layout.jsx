import { Toaster } from "react-hot-toast";

import StoreProvider from "./StoreProvider";
import { ClerkProvider } from "@clerk/nextjs";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "GoCart. - Shop smarter",
  description: "GoCart. - Shop smarter",
};

export default function RootLayout({ children }) {
  const content = (
    <html lang="en">
      <body className="antialiased">
        <StoreProvider>
          <Toaster />
          <Banner />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );

  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return content;
  }

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {content}
    </ClerkProvider>
  );
}
