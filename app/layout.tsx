import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interactive web design",
  description: "A website for interactively learning web design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
