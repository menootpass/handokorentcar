import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogSection.module.css';
import { articles } from '../data/articles';

export default function BlogSection({ dict, lang }: { dict: any, lang: 'en' | 'id' }) {
  const articleList = articles[lang] || articles['en'];
  const displayArticles = articleList.slice(0, 5);
  const featuredArticle = displayArticles[0];
  const regularArticles = displayArticles.slice(1);

  if (!featuredArticle) return null;

  return (
    <section id="blog" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>{dict.subtitle}</span>
          <h2 className={styles.title}>{dict.title}</h2>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredInner}>
              <Link href={`/${lang}/artikel/${featuredArticle.slug}`} className={styles.featuredImgWrapper}>
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.img}
                />
              </Link>
              <div className={styles.featuredContent}>
                <Link href={`/${lang}/artikel/${featuredArticle.slug}`}>
                  <h3 className={styles.featuredTitle}>{featuredArticle.title}</h3>
                </Link>
                <Link href={`/${lang}/artikel/${featuredArticle.slug}`} className={styles.readMore}>
                  {dict.readMore}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.regularGrid}>
            {regularArticles.map((article) => (
              <article key={article.id} className={styles.regularCard}>
                <Link href={`/${lang}/artikel/${article.slug}`} className={styles.regularImgWrapper}>
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.img}
                  />
                </Link>
                <div className={styles.regularContent}>
                  <Link href={`/${lang}/artikel/${article.slug}`}>
                    <h4 className={styles.regularTitle}>{article.title}</h4>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
