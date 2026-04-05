import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  { id: 1, image: '/image/testimoni/testimonial-destination.jpeg' },
  { id: 2, image: '/image/testimoni/tourist-testimonial.jpeg' },
  { id: 3, image: '/image/testimoni/tour-testimonial.jpeg' },
  { id: 4, image: '/image/testimoni/customers-documentation-2.jpeg' },
  { id: 5, image: '/image/testimoni/customer-documentation-3.jpeg' },
  { id: 6, image: '/image/testimoni/documentation-with-client.jpeg' },
  { id: 7, image: '/image/testimoni/beach-destination-testimonial.jpeg' },
  { id: 8, image: '/image/testimoni/beach-tour-testimonial.jpeg' },
  { id: 9, image: '/image/testimoni/city-tour-testimonial.jpeg' },
  { id: 10, image: '/image/testimoni/classic-riding-testimonial.jpeg' },
  { id: 11, image: '/image/testimoni/europe-clients-testimonial.jpeg' },
  { id: 12, image: '/image/testimoni/hiace-testimonial.GIF' },
  { id: 13, image: '/image/testimoni/nature-destination-testimonial.jpeg' },
  { id: 14, image: '/image/testimoni/tample-at-yogyakarta-testimonial.jpeg' },
  { id: 15, image: '/image/testimoni/tample-testimonial.jpeg' },
  { id: 16, image: '/image/testimoni/touring-testimonial.jpeg' },
  { id: 17, image: '/image/testimoni/yogyakarta-tour-testimonial.jpeg' },
  { id: 18, image: '/image/testimoni/family-tour.mp4' },
  { id: 19, image: '/image/testimoni/testimonial.mp4' },
];

export default function Testimonials({ dict }: { dict: any }) {
  const isVideo = (path: string) => typeof path === 'string' && path.toLowerCase().endsWith('.mp4');
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
              {isVideo(item.image) ? (
                /* Render tag video jika file adalah .mp4 */
                <video
                  src={item.image}
                  className={styles.img || "w-full h-full object-cover"}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                />
              ) : (
                /* Render tag img standar agar kompatibel dengan pratinjau ini */
                <img
                  src={item.image}
                  alt="Customer Testimonial"
                  className={styles.img || "w-full h-full object-cover"}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
