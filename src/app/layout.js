import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " viemonte",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body style={{ width: '100%', height: '100vh', margin: 'auto', display: 'flex', justifyContent: 'center' }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}