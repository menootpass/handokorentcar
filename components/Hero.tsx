import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ dict, lang }: { dict: any; lang: string }) {
  return (
    <section id="home" className={styles.hero}>
      <Image
        src="/image/hero_background.png"
        alt="Handoko Rentcar - Sewa Mobil Jogja"
        fill
        className={styles.bgImage}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay}></div>
      <div className="container">
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-fade-in-up`}>
            {dict.title1} <span>{dict.title2}</span>
          </h1>
          <p className={`${styles.description} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            {dict.desc}
          </p>
          <div className={`${styles.actions} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
            <Link href={`/${lang}/#vehicles`} className="btn btn-primary">
              {dict.btnRent}
            </Link>
            <a
              href="https://wa.me/6285743422700"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ color: 'white', borderColor: 'white' }}
            >
              {dict.btnConsult}
            </a>
          </div>

          <div className={`${styles.stats} animate-fade-in-up`} style={{ animationDelay: '0.6s' }}>
            <div className={styles.statItem}>
              <h4>10+</h4>
              <p>{dict.stat1}</p>
            </div>
            <div className={styles.statItem}>
              <h4>99%</h4>
              <p>{dict.stat2}</p>
            </div>
            <div className={styles.statItem}>
              <h4>24/7</h4>
              <p>{dict.stat3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
