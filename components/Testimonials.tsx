import Image from 'next/image';
import styles from './Testimonials.module.css';

const images = [
  "20240729_070732_Original.jpg.jpeg",
  "20240729_154632_Original.jpg.jpeg",
  "20240827_150608_Original.jpg.jpeg",
  "beach-destination-testimonial.jpeg",
  "beach-tour-testimonial.jpeg",
  "city-tour-testimonial.jpeg",
  "classic-riding-testimonial.jpeg",
  "customer-documentation-3.jpeg",
  "customers-documentation-2.jpeg",
  "customers-documentation.jpeg",
  "documentation-with-client.jpeg",
  "europe-clients-testimonial.jpeg",
  "hiace-testimonial.GIF",
  "nature-destination-testimonial.jpeg",
  "tample-at-yogyakarta-testimonial.jpeg",
  "tample-testimonial.jpeg",
  "tour-testimonial.jpeg",
  "touring-testimonial.jpeg",
  "yogyakarta-tour-testimonial.jpeg"
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimoni">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Dokumentasi <span>Perjalanan Spesial</span></h2>
          <p className={styles.subtitle}>
            Berbagai dokumentasi dan testimoni pelanggan yang telah membuktikan kualitas pelayan kami.
          </p>
        </div>
      </div>
      
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {images.map((img, i) => (
            <div key={i} className={styles.imgCard}>
              <Image 
                src={`/image/testimoni/${img}`} 
                alt={`Testimoni ${i + 1}`}
                fill
                sizes="(max-width: 768px) 300px, 400px"
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
