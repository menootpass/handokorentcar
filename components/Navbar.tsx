import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Handoko<span>Rentcar</span>
        </Link>
        <div className={styles.links}>
          <Link href="#home" className={styles.link}>Home</Link>
          <Link href="#vehicles" className={styles.link}>Kendaraan</Link>
          <a href="https://wa.me/6285743422700" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 24px' }}>
            <FaWhatsapp size={20} /> Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}
