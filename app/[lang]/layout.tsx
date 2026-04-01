import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import '../globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';

  return {
    title: isEn ? 'Best Yogyakarta Car Rental - Handoko Rentcar & Tour Guide' : 'Sewa Mobil Jogja Terbaik dan Terpercaya - Handoko Rentcar & Tour Guide',
    description: isEn ? 'Rent a car in Jogja with or without a driver at Handoko Rentcar. Cheap, clean, and well-maintained units. Book now!' : 'Sewa mobil Jogja lepas kunci atau dengan driver di Handoko Rentcar. Harga murah, lengkap, unit bersih & terawat. Siap untuk wisata & bisnis. Booking sekarang!',
    keywords: isEn ? ['rent car jogja', 'yogyakarta car rental', 'cheap car rental jogja', 'yogyakarta tour', 'handoko rentcar', 'self drive jogja'] : ['sewa mobil jogja', 'rental mobil jogja', 'sewa mobil jogja murah', 'sewa mobil jogja lepas kunci', 'sewa mobil jogja dengan driver', 'mobil jogja harian', 'pariwisata jogja', 'sewa mobil jogja bandara', 'rental mobil sleman', 'handoko rentcar'],
    alternates: {
      canonical: 'https://handokorentcar.com',
    },
    openGraph: {
      title: isEn ? 'Best Yogyakarta Car Rental - Handoko Rentcar' : 'Sewa Mobil Jogja Terbaik dan Terpercaya - Handoko Rentcar & Tour Guide',
      description: isEn ? 'Rent a car in Jogja with or without a driver at Handoko Rentcar.' : 'Sewa mobil Jogja lepas kunci atau dengan driver di Handoko Rentcar. Harga murah, lengkap, unit bersih & terawat. Siap untuk wisata & bisnis. Booking sekarang!',
      url: 'https://handokorentcar.com',
      siteName: isEn ? 'Jogja Car Rental - Handoko Rentcar' : 'Sewa Mobil Jogja - Handoko Rentcar & Tour Guide',
      locale: isEn ? 'en_US' : 'id_ID',
      type: 'website',
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/logo.png", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png" },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEn = lang === 'en';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Handoko Rentcar",
    "description": isEn ? "Yogyakarta car rental services offering self-drive and driver options at affordable rates." : "Sewa mobil Jogja lepas kunci atau dengan driver di Handoko Rentcar. Harga murah, lengkap, unit bersih & terawat. Siap untuk wisata & bisnis. Booking sekarang!",
    "url": "https://handokorentcar.com",
    "logo": "https://handokorentcar.com/logo.png",
    "telephone": "+62 857-4342-2700",
    "email": "handoko.dwi95273@gmail.com",
    "priceRange": isEn ? "IDR 300,000 - IDR 3,500,000" : "Rp. 300.000 - Rp. 3.500.000",
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
    <html lang={lang}>
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
