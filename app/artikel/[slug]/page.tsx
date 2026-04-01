import { articles } from '../../../data/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from './article.module.css';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { Metadata } from 'next';

// Dynamic Param Static generation
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Generate dynamic SEO tags per article
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  
  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: `${article.title} - Handoko Rentcar`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    }
  };
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const customMsg = encodeURIComponent(`Halo Mas Handoko, saya tertarik dengan informasi di artikel *${article.title}*. Boleh tanya-tanya informasi sewa mobilnya?`);

  return (
    <>
      <Navbar />
      <main className={styles.articlePage}>
        <header className={styles.hero}>
          <Image 
            src={article.coverImage} 
            alt={article.title} 
            fill 
            className={styles.heroBg}
            priority
          />
          <div className={styles.heroContent}>
            <span className={styles.date}>
              <FaCalendarAlt style={{ display: 'inline', marginRight: '6px' }} />
              {new Date(article.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <h1 className={styles.title}>{article.title}</h1>
          </div>
        </header>

        <article className={styles.contentWrapper}>
          <div 
            className={styles.richText}
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
          
          <div className={styles.cta}>
            <h3>Siap Mengeksplorasi Keajaiban Jogja?</h3>
            <p>Dapatkan armada terbaru dan harga spesial promo dengan menghubungi konsultan transportasi Handoko Rentcar sekarang juga.</p>
            <a 
              href={`https://wa.me/6285743422700?text=${customMsg}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn-primary ${styles.waBtn}`}
            >
              <FaWhatsapp size={22} /> Konsultasi Sewa Mobil Sekarang
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
