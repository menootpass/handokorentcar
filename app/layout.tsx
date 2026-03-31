import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Handoko Rentcar & Tour Guide - Sewa Mobil Jogja',
  description: 'Sewa mobil jogja berkualitas lepas kunci atau dengan driver dengan harga terjangkau di Handoko Rentcar & Tour Guide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Handoko Rentcar",
    "description": "Handoko Rentcar Jogja \u2013 Jasa sewa mobil lepas kunci atau dengan driver terpercaya di Yogyakarta. Tersedia berbagai pilihan unit (Avanza, Innova, Innova Reborn, Pajero, Fortuner, Mobilio, Hiace, Brio, Elf Long, Alphard) untuk lepas kunci atau dengan supir. Armada bersih, harga kompetitif mulai dari Rp. 350.000 per hari., siap melayani wisata & bisnis Anda. Booking via WhatsApp sekarang!",
    "url": "https://handokorentcar.com",
    "logo": "https://handokorentcar.com/logo.png",
    "telephone": "+62 857-4342-2700",
    "email": "handoko.dwi95273@gmail.com",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Babadan, RT.01/RW.17, Bangunmulyo, Girikerto, Kec. Turi",
      "addressLocality": "Yogyakarta",
      "addressRegion": "Sleman",
      "postalCode": "55551",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.620083256034175,
      "longitude": 110.39349762308058
    },
    "sameAs": [
      "https://web.facebook.com/dwi.handoko.9083/",
      "https://www.instagram.com/handoko.dwi95273/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "500"
    }
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.variable}>
        {children}
      </body>
    </html>
  );
}
