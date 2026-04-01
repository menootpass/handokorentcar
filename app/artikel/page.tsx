import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import { articles } from '../../data/articles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Panduan Sewa Mobil Jogja - Handoko Rentcar',
  description: 'Temukan berbagai tips wisata, rekomendasi destinasi, dan panduan lengkap seputar sewa mobil di Jogja bersama Handoko Rentcar.',
};

export default function ArtikelPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1>Panduan & <span>Tips Wisata Jogja</span></h1>
            <p>Jelajahi berbagai artikel terbaru dari kami yang akan membantu memaksimalkan waktu liburan Anda di Yogyakarta.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              {articles.map((article) => (
                <article key={article.id} className={styles.card}>
                  <Link href={`/artikel/${article.slug}`}>
                    <div className={styles.imgWrapper}>
                      <Image 
                        src={article.coverImage} 
                        alt={article.title} 
                        fill 
                        className={styles.img}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </Link>
                  <div className={styles.content}>
                    <div className={styles.date}>
                      {new Date(article.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <Link href={`/artikel/${article.slug}`}>
                      <h2 className={styles.title}>{article.title}</h2>
                    </Link>
                    <p className={styles.excerpt}>{article.excerpt}</p>
                    <Link href={`/artikel/${article.slug}`} className={styles.btn}>
                      Baca Selengkapnya <FaArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
