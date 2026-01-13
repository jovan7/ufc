import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = 'https://undergroundfightclub.com';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Underground Fight Club 23 | Boks i Kik-boks Pirot',
        template: 'UFC - Underground Fight Club Pirot',
    },
    description: 'Najbolji boks i kik-boks klub u Pirotu, Srbija. Treniraj sa šampionima. Prijavi se za probni trening.',

    openGraph: {
        title: 'Underground Fight Club Pirot',
        description: 'Najbolji boks i kik-boks klub u Pirotu, Srbija. Treniraj sa šampionima. Prijavi se za probni trening.',
        url: baseUrl,
        siteName: 'Underground Fight Club Pirot',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/logo.webp',
                width: 1200,
                height: 630,
                alt: 'Prikaz mog sajta',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Underground Fight Club 23 | Boks i Kik-boks Pirot',
        description: 'Najbolji boks i kik-boks klub u Pirotu, Srbija. Treniraj sa šampionima. Prijavi se za probni trening.',
        images: ['/logo.webp']
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
