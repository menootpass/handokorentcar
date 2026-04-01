import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogSection.module.css';
import { articles } from '../data/articles';

export default function BlogSection() {
  // Use up to 5 articles. 1 for featured, up to 4 for grid.
  const displayArticles = articles.slice(0, 5);
  const featuredArticle = displayArticles[0];
  const regularArticles = displayArticles.slice(1);

  if (!featuredArticle) return null;

  return (
    <section id="blog" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.subtitle}>Kegiatan & Tips</span>
          <h2 className={styles.title}>Kegiatan Harian & Tips dari Handoko Rentcar</h2>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.featuredCard}>
            <div className={styles.featuredInner}>
              <Link href={`/artikel/${featuredArticle.slug}`} className={styles.featuredImgWrapper}>
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.img}
                />
              </Link>
              <div className={styles.featuredContent}>
                <Link href={`/artikel/${featuredArticle.slug}`}>
                  <h3 className={styles.featuredTitle}>{featuredArticle.title}</h3>
                </Link>
                <Link href={`/artikel/${featuredArticle.slug}`} className={styles.readMore}>
                  READ MORE &raquo;
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.regularGrid}>
            {regularArticles.map((article) => (
              <article key={article.id} className={styles.regularCard}>
                <Link href={`/artikel/${article.slug}`} className={styles.regularImgWrapper}>
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className={styles.img}
                  />
                </Link>
                <div className={styles.regularContent}>
                  <Link href={`/artikel/${article.slug}`}>
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
