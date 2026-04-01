import { articles } from '../../../../data/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import styles from './article.module.css';
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { getDictionary } from '../../../../dictionaries/getDictionary';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const allSlugs = [
    ...articles.en.map((a) => ({ lang: 'en', slug: a.slug })),
    ...articles.id.map((a) => ({ lang: 'id', slug: a.slug }))
  ];
  return allSlugs;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en'|'id', slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const articleList = articles[lang] || articles['en'];
  const article = articleList.find((a) => a.slug === slug);
  
  if (!article) return { title: dict.articlePage.notFound };

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

export default async function ArticleDetail({ params }: { params: Promise<{ lang: 'en'|'id', slug: string }> }) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const articleList = articles[lang] || articles['en'];
  const article = articleList.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const msgParam = encodeURIComponent(`${dict.articlePage.waMsg} *${article.title}*`);

  return (
    <>
      <Navbar dict={dict.navbar} lang={lang} />
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
              {new Date(article.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
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
            <h3>{dict.articlePage.ctaTitle}</h3>
            <p>{dict.articlePage.ctaDesc}</p>
            <a 
              href={`https://wa.me/6285743422700?text=${msgParam}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn-primary ${styles.waBtn}`}
            >
              <FaWhatsapp size={22} /> {dict.articlePage.btnConsult}
            </a>
          </div>
        </article>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
