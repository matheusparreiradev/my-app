import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "../shared/ui/top-bar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meu Projeto",
  description: "",
};

const topBarMock = {
  phone: "(+98) 0234 456 789",
  storeHref: "#",
  trackOrderHref: "#",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopBar {...topBarMock} />
        {children}
      </body>
    </html>
  );
}
