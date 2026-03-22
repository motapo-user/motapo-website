import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motapo | Enterprise Transformation & AI Delivery",
  description:
    "Motapo helps leaders turn transformation and AI strategy into real delivery momentum.",
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
