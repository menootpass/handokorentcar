import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand & Desc */}
          <div>
            <a href="#" className={styles.logo}>
              <img src="/image/logo.png" alt="Handoko Rentcar Footer Logo" style={{ height: '40px', width: 'auto', display: 'block', marginBottom: '16px' }} />
            </a>
            <p className={styles.desc}>
              Melayani dengan sepenuh hati, memberikan perjalanan yang aman, nyaman, dan berkesan. Kami adalah solusi transportasi kendaraan terbaik Anda.
            </p>
            <div className={styles.social}>
              <a href="https://web.facebook.com/dwi.handoko.9083" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/handoko.dwi95273" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/6285743422700" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.title}>Tautan Cepat</h3>
            <ul className={styles.links}>
              <li><a href="#home"><FaChevronRight size={12} color="#16a86e" /> Beranda</a></li>
              <li><a href="#vehicles"><FaChevronRight size={12} color="#16a86e" /> Armada Kami</a></li>
              <li><a href="#about"><FaChevronRight size={12} color="#16a86e" /> Tentang Kami</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={styles.title}>Hubungi Kami</h3>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaWhatsapp />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#666' }}>WhatsApp</span>
                <span style={{ fontWeight: 600, color: '#fff' }}>+62 857-4342-2700</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <FaInstagram />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: '#666' }}>Instagram</span>
                <span style={{ fontWeight: 600, color: '#fff' }}>@handoko.dwi95273</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Handoko Rentcar. All rights reserved. Created with <span style={{ color: 'var(--primary)' }}>❤</span></p>
        </div>
      </div>
    </footer>
  );
}
