import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import styles from './ContactOwner.module.css';

export default function ContactOwner({ dict }: { dict: any }) {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              {dict.title1} <span>{dict.title2}</span>
            </h2>
            <p className={styles.paragraph}>{dict.desc1}</p>
            <p className={styles.paragraph}>{dict.desc2}</p>
          </div>
          <div className={styles.right}>
            <div className={styles.ownerCard}>
              <div className={styles.ownerInfo}>
                <div className={styles.photoWrapper}>
                  <Image
                    src="/image/profile.png"
                    alt="Dwi Handoko - Owner Handoko Rentcar"
                    fill
                    className={styles.photo}
                    sizes="120px"
                  />
                </div>
                <div className={styles.details}>
                  <h4>Dwi Handoko</h4>
                  <span className={styles.role}>{dict.ownerRole}</span>
                  <p className={styles.desc}>{dict.ownerDesc}</p>
                </div>
              </div>
              <div className={styles.socials}>
                <a
                  href="https://wa.me/6285743422700"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.wa}`}
                >
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/handoko.dwi95273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.ig}`}
                >
                  <FaInstagram size={18} /> Instagram
                </a>
                <a
                  href="https://web.facebook.com/dwi.handoko.9083/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialBtn} ${styles.fb}`}
                >
                  <FaFacebook size={18} /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
