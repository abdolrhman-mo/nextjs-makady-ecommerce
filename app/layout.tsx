import type { Metadata } from "next"
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/app/globals.css"
import StoreProvider from "./StoreProvider"

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
      <html lang="en" className="font-sans">
        {children}
      </html>
    </StoreProvider>
  );
}
