import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Handoko Rentcar - Solusi Kendaraan Anda',
  description: 'Sewa mobil berkualitas dengan harga terjangkau di Handoko Rentcar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={outfit.variable}>
        {children}
      </body>
    </html>
  );
}
