import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store app by Umar Sulaiman",
  description: "This is an ecommerce store app for HNG stage 3 task",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
