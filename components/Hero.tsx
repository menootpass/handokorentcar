import Image from 'next/image';
import { FaCarSide, FaCalendarCheck } from 'react-icons/fa';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <Image 
        src="/hero_bg.png" 
        alt="Hero Background" 
        fill
        className={styles.bgImage}
        priority
      />
      <div className="container">
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-fade-in-up`}>
            Kebebasan Menjelajahi Kota dengan <span>Mobil Terbaik</span>
          </h1>
          <p className={`${styles.description} animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
            Kami menyediakan pilihan mobil dan armada berkualitas dengan harga terjangkau, memberikan Anda pengalaman perjalanan yang nyaman, aman, dan memukau bersama Handoko Rentcar.
          </p>
          <div className={`${styles.actions} animate-fade-in-up`} style={{ animationDelay: '0.4s' }}>
            <a href="#vehicles" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              <FaCarSide size={20} /> Lihat Kendaraan
            </a>
            <a href="https://wa.me/6285743422700" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '1.1rem', color: 'white', borderColor: 'white' }}>
              <FaCalendarCheck size={20} /> Booking Sekarang
            </a>
          </div>

          <div className={`${styles.stats} animate-fade-in-up`} style={{ animationDelay: '0.6s' }}>
            <div className={styles.statItem}>
              <h4>10+</h4>
              <p>Kendaraan Pilihan</p>
            </div>
            <div className={styles.statItem}>
              <h4>99%</h4>
              <p>Pelanggan Puas</p>
            </div>
            <div className={styles.statItem}>
              <h4>24/7</h4>
              <p>Layanan Dukungan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
