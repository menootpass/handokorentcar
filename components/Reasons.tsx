import Image from 'next/image';
import styles from './Reasons.module.css';

export default function Reasons() {
  return (
    <section className={styles.section} id="reasons">
      <div className={styles.shape}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
               <Image src="/reason_1.png" alt="Kualitas Terbaik" fill style={{objectFit: 'cover'}} />
            </div>
            <div className={styles.content}>
               <h3 className={styles.title}>Kualitas Terbaik</h3>
               <p className={styles.desc}>Kami memahami pentingnya nilai uang Anda. Oleh karena itu, kami menawarkan harga yang kompetitif dan transparan.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
               <Image src="/hero_bg.png" alt="Kepuasan Pelanggan" fill style={{objectFit: 'cover'}} />
            </div>
            <div className={styles.content}>
               <h3 className={styles.title}>Kepuasan Pelanggan</h3>
               <p className={styles.desc}>Kami menyediakan berbagai pilihan kendaraan untuk memenuhi kebutuhan perjalanan Anda.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
