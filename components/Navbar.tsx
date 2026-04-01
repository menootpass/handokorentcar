"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // disable body scroll on mobile when menu is open
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

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <img src="/image/logo.png" alt="Handoko Rentcar Logo" style={{ height: '50px', width: 'auto', display: 'block' }} />
        </Link>

        <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <Link href="/#home" className={styles.link} onClick={closeMenu}>Home</Link>
          <Link href="/#reasons" className={styles.link} onClick={closeMenu}>Keunggulan</Link>
          <Link href="/#vehicles" className={styles.link} onClick={closeMenu}>Armada</Link>
          <Link href="/#about" className={styles.link} onClick={closeMenu}>Tentang Kami</Link>
          <Link href="/artikel" className={styles.link} onClick={closeMenu}>Artikel</Link>
          <a href="https://wa.me/6285743422700" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 24px' }}>
            <FaWhatsapp size={20} /> Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
}
