"use client";
import { Provider } from "react-redux";
import "./globals.css";
import store from "@/store/store";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
