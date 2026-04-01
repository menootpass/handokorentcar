import Image from 'next/image';
import styles from './Reasons.module.css';

export default function Reasons({ dict }: { dict: any }) {
  return (
    <section id="reasons" className={styles.section}>
      <div className={styles.shape}></div>
      <div className={styles.circle}></div>
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image
                src="/image/cars/all-cars-variants.png"
                alt={dict.qualityTitle}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 968px) 100vw, 350px"
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{dict.qualityTitle}</h3>
              <p className={styles.desc}>{dict.qualityDesc}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image
                src="/image/testimoni/tour-testimonial.jpeg"
                alt={dict.satisfactionTitle}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 968px) 100vw, 350px"
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{dict.satisfactionTitle}</h3>
              <p className={styles.desc}>{dict.satisfactionDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
