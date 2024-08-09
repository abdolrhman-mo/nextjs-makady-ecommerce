import type { Metadata } from "next"
import { Inter } from "next/font/google"
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/app/globals.css"
import StoreProvider from "./StoreProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Makady Ecommerce Store",
  description: "Makady ecommerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        {children}
      </html>
    </StoreProvider>
  );
}
