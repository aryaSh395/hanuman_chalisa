import type { Metadata, Viewport } from "next";
import { Marcellus, Poppins } from "next/font/google";
import "./globals.css";

const display = Marcellus({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Shri Hanuman",
  description: "Stories, devotion, and the glory of Bajrangbali",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ff6f00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
