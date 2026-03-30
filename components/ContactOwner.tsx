import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import styles from './ContactOwner.module.css';

export default function ContactOwner() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.title}>Siap Melayani <span>Kapan Pun</span></h2>
            <p className={styles.paragraph}>
              Kapan pun Anda membutuhkan kendaraan untuk perjalanan bisnis, liburan keluarga, atau keperluan khusus lainnya, Handoko Rentcar siap memberikan solusi rental mobil yang dapat diandalkan dan efisien.
            </p>
            <p className={styles.paragraph}>
              Percayakan perjalanan Anda kepada kami, dan kami akan memastikan pengalaman rental mobil yang tak terlupakan. Hubungi kami hari ini untuk informasi lebih lanjut atau lakukan pemesanan online melalui situs web kami yang user-friendly.
            </p>
          </div>
          
          <div className={styles.right}>
            <div className={styles.ownerCard}>
              <div className={styles.ownerInfo}>
                <div className={styles.photoWrapper}>
                  <Image src="/owner_photo.png" alt="Dwi Handoko" fill className={styles.photo} />
                </div>
                <div className={styles.details}>
                  <h4>Dwi Handoko</h4>
                  <span className={styles.role}>Founder & Owner</span>
                  <p className={styles.desc}>Berkomitmen memberi pelayanan transportasi terbaik untuk perjalanan Anda.</p>
                </div>
              </div>
              <div className={styles.socials}>
                <a href="https://wa.me/6285743422700" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.wa}`}>
                  <FaWhatsapp size={20} />
                </a>
                <a href="https://instagram.com/handoko.dwi95273" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.ig}`}>
                  <FaInstagram size={20} />
                </a>
                <a href="https://web.facebook.com/dwi.handoko.9083" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.fb}`}>
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
