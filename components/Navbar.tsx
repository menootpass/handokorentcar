"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const switchLanguage = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    // segments[1] is the locale (en or id)
    if (segments[1] === 'en' || segments[1] === 'id') {
      segments[1] = newLang;
    } else {
      // In case it's somehow missing
      segments.splice(1, 0, newLang);
    }
    const newPath = segments.join('/');
    router.push(newPath || '/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href={`/${lang}`} className={styles.logo} onClick={closeMenu}>
          <img src="/image/logo.png" alt="Handoko Rentcar Logo" style={{ height: '50px', width: 'auto', display: 'block' }} />
        </Link>

        <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <Link href={`/${lang}/#home`} className={styles.link} onClick={closeMenu}>{dict.home}</Link>
          <Link href={`/${lang}/#reasons`} className={styles.link} onClick={closeMenu}>{dict.reasons}</Link>
          <Link href={`/${lang}/#vehicles`} className={styles.link} onClick={closeMenu}>{dict.vehicles}</Link>
          <Link href={`/${lang}/#about`} className={styles.link} onClick={closeMenu}>{dict.about}</Link>
          <Link href={`/${lang}/artikel`} className={styles.link} onClick={closeMenu}>{dict.article}</Link>
          <a href="https://wa.me/6285743422700" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 24px' }}>
            <FaWhatsapp size={20} /> {dict.contact}
          </a>

          {/* Language Switcher UI */}
          <div className={styles.langSwitcher}>
            <button
              onClick={() => switchLanguage('en')}
              className={`${styles.langBtn} ${lang === 'en' ? styles.activeLang : ''}`}
            >
              EN
            </button>
            <span className={styles.langDivider}>|</span>
            <button
              onClick={() => switchLanguage('id')}
              className={`${styles.langBtn} ${lang === 'id' ? styles.activeLang : ''}`}
            >
              ID
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
