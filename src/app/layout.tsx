import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-cal",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Resa Pamungkas | Network Engineer",
    template: "%s | Resa Pamungkas",
  },
  description: "Network Operation Center (NOC) Engineer with 3+ years of experience monitoring, maintaining, and troubleshooting network systems. Skilled in Zabbix, Grafana, Mikrotik RouterOS, and Cisco infrastructure.",
  keywords: ["NOC Engineer", "Network Engineer", "Zabbix", "Grafana", "Mikrotik", "Cisco", "PRTG", "Network Monitoring", "Indonesia"],
  authors: [{ name: "Resa Putra Agung Pamungkas" }],
  creator: "Resa Putra Agung Pamungkas",
  publisher: "Resa Pamungkas",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://repamungkas.dev",
    title: "Resa Pamungkas | Network Engineer",
    description: "NOC Engineer with 3+ years monitoring and troubleshooting network systems 24/7.",
    siteName: "Resa Pamungkas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resa Pamungkas | Network Engineer",
    description: "NOC Engineer with 3+ years monitoring and troubleshooting network systems 24/7.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
