import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from './page.module.css'; // CSS is in same folder as page.tsx
import { articles } from '../../../data/articles';
import { getDictionary } from '../../../dictionaries/getDictionary';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  return {
    title: isEn ? 'Blog & Travel Guides - Handoko Rentcar' : 'Blog & Panduan Sewa Mobil Jogja - Handoko Rentcar',
    description: isEn ? 'Find various travel tips and complete guides about renting a car in Jogja with Handoko Rentcar.' : 'Temukan berbagai tips wisata dan panduan lengkap seputar sewa mobil di Jogja bersama Handoko Rentcar.',
  };
}

export default async function ArtikelPage({ params }: { params: Promise<{ lang: 'en' | 'id' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const displayArticles = articles[lang] || articles['en'];

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1>{dict.articlePage.heroTitle1} <span>{dict.articlePage.heroTitle2}</span></h1>
            <p>{dict.articlePage.heroDesc}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.grid}>
              {displayArticles.map((article) => (
                <article key={article.id} className={styles.card}>
                  <Link href={`/${lang}/artikel/${article.slug}`}>
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
                      {new Date(article.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <Link href={`/${lang}/artikel/${article.slug}`}>
                      <h2 className={styles.title}>{article.title}</h2>
                    </Link>
                    <p className={styles.excerpt}>{article.excerpt}</p>
                    <Link href={`/${lang}/artikel/${article.slug}`} className={styles.btn}>
                      {dict.articlePage.btnRead} <FaArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
