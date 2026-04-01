import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  { id: 1, image: '/image/testimoni/customer-documentation.jpeg' },
  { id: 2, image: '/image/testimoni/customer-documentation-1.jpeg' },
  { id: 3, image: '/image/testimoni/tour-testimonial.jpeg' },
];

export default function Testimonials({ dict }: { dict: any }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            {dict.title1} <span>{dict.title2}</span>
          </h2>
          <p className={styles.subtitle}>{dict.desc}</p>
        </div>
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {testimonials.map((item) => (
            <div key={item.id} className={styles.imgCard}>
              <Image
                src={item.image}
                alt="Customer Testimonial"
                fill
                className={styles.img}
                sizes="380px"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
