import type { Metadata } from "next";
import { Roboto, Playball, Caladea } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic"],
});
const playball = Playball({
  weight: ["400"],
  subsets: ["latin"],
});
const caladea = Caladea({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Haroon Talib",
  description: "Welcome to my world",
  icons: {
    icon: "/haroon1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.className} ${playball.className} ${caladea.className} antialiased`}
      >
        {/* Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BMY694J9YG"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BMY694J9YG');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
