import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Registeration Soft-En",
  description: "Create by Trin Chuainugoon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
