import type { Metadata } from "next";
import { Roboto, Playball, Caladea } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
