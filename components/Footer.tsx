import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <Link href={`/${lang}`} className={styles.logo}>
            <img src="/image/logo.png" alt="Handoko Rentcar" style={{ height: '60px', width: 'auto', display: 'block' }} />
          </Link>
          <p className={styles.desc}>{dict.desc}</p>
          <div className={styles.social}>
            <a href="https://web.facebook.com/dwi.handoko.9083/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/handoko.dwi95273/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://wa.me/6285743422700" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h3 className={styles.title}>{dict.servicesTitle}</h3>
          <ul className={styles.links}>
            <li><Link href={`/${lang}/#home`}>{dict.service1}</Link></li>
            <li><Link href={`/${lang}/#vehicles`}>{dict.service2}</Link></li>
            <li><Link href={`/${lang}/#about`}>{dict.service3}</Link></li>
            <li><Link href={`/${lang}/artikel`}>{lang === 'en' ? 'Articles' : 'Artikel'}</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.title}>{dict.contactTitle}</h3>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}><FaPhone size={16} /></span>
            <span>+62 857-4342-2700</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}><FaEnvelope size={16} /></span>
            <span>handoko.dwi95273@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}><FaMapMarkerAlt size={16} /></span>
            <span>Sleman, Yogyakarta 55551</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {dict.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
