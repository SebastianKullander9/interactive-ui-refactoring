import type { Metadata } from "next";
import "../globals.css";
import "./style.css"

export const metadata: Metadata = {
    title: "Testing",
    description: "A page for testing and building things",
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
