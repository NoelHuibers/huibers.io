import "~/styles/globals.css";

import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Huibers",
  description: "Noel Huibers Portfolio Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inconsolata.variable}`}>{children}</body>
    </html>
  );
}
