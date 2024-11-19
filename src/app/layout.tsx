// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// กำหนด local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  title: "Me Skills - Learning & Matching Platform",
  description: "Empower your learning journey with cutting-edge courses and career-boosting skills.",
  icons: {
    icon: '/img/logo.png', // favicon
  },
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Me Skills',
    description: 'Learning & Matching Platform',
    images: '/img/logo.png',
  },
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/img/logo.png" /> 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}