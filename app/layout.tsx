import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Sewa Mobil Jogja Handoko Rentcar & Tour Guide',
  description: 'Sewa mobil jogja berkualitas lepas kunci atau dengan driver dengan harga terjangkau di Handoko Rentcar & Tour Guide. Harga murah, armada bersih, layani wisata keluarga hingga keperluan bisnis (Avanza, Hiace, Brio).',
  keywords: ['sewa mobil jogja', 'rental mobil jogja', 'sewa mobil jogja murah', 'sewa mobil jogja lepas kunci', 'sewa mobil jogja dengan driver', 'mobil jogja harian', 'pariwisata jogja', 'sewa mobil jogja bandara', 'rental mobil sleman', 'handoko rentcar'],
  alternates: {
    canonical: 'https://handokorentcar.com',
  },
  openGraph: {
    title: 'Sewa Mobil Jogja Handoko Rentcar & Tour Guide',
    description: 'Solusi sewa mobil jogja nomor 1. Lepas kunci & dengan driver handal pariwisata.',
    url: 'https://handokorentcar.com',
    siteName: 'Sewa Mobil Jogja - Handoko Rentcar & Tour Guide',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: "/og-image.jpg", // Foto mobil atau kantor untuk preview link
        width: 1200,
        height: 630,
      },
    ],
  },
  // BAGIAN LOGO (FAVICON)
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Pastikan file ini ada di folder /public
      { url: "/logo.png", type: "image/png" }, // Versi PNG untuk kualitas lebih baik
    ],
    apple: [
      { url: "/apple-touch-icon.png" }, // Untuk pengguna iPhone yang save web ke home screen
    ],
  },
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
    "priceRange": "Rp. 300.000 - Rp. 3.500.000",
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
