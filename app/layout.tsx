"use client";
import { Provider } from "react-redux";
import "./globals.css";
import store from "@/store/store";
import Header from "@/components/header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-gradient-to-r from-rose-100 via-amber-100 to-lime-100 font-mono backdrop-blur-lg">
          <Provider store={store}>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
