import Image from 'next/image';
import { FaUsers, FaCogs, FaWhatsapp, FaClock } from 'react-icons/fa';
import styles from './VehicleList.module.css';
import { vehicles } from '../data/vehicles';

export default function VehicleList({ dict, lang }: { dict: any; lang: 'en' | 'id' }) {
  const displayVehicles = vehicles[lang] || vehicles['en'];

  return (
    <section id="vehicles" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>
            {lang === 'en' ? 'Choose Our Fleet' : 'Nikmati kenyamanan berkendara dengan armada mobil terbaik kami.'}
          </h2>
          <p>{dict.desc}</p>
        </div>

        <div className={styles.grid}>
          {displayVehicles.map((vehicle) => {
            const waMessage = encodeURIComponent(
              `${dict.whatsappMsg1} ${vehicle.name}`
            );
            return (
              <div key={vehicle.id} className={styles.card}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className={styles.img}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{vehicle.name}</h3>

                  <div className={styles.priceContainer}>
                    <p className={styles.price}>
                      {vehicle.price} <span>/ {dict.perDay}</span>
                    </p>
                    {vehicle.lepasKunci && (
                      <p className={styles.priceLepasKunci}>
                        {dict.lepasKunci}: <strong>{vehicle.lepasKunci}</strong>
                      </p>
                    )}
                    <span className={styles.timeInfo}>
                      <FaClock size={12} /> {dict.validUntil}
                    </span>
                  </div>

                  <div className={styles.details}>
                    <div className={styles.detailItem}>
                      <FaUsers size={14} /> {vehicle.passengers}
                    </div>
                    <div className={styles.detailItem}>
                      <FaCogs size={14} /> {dict.transmission}: {vehicle.transmission}
                    </div>
                  </div>

                  <div className={styles.footer}>
                    <a
                      href={`https://wa.me/6285743422700?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaWhatsapp size={18} /> {dict.btnBooking}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.customBooking}>
          <h3>{dict.customTitle}</h3>
          <p>{dict.customDesc}</p>
          <a
            href={`https://wa.me/6285743422700?text=${encodeURIComponent(dict.whatsappMsgCustom)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline ${styles.customBtn}`}
          >
            <FaWhatsapp size={18} /> {dict.btnCustom}
          </a>
        </div>
      </div>
    </section>
  );
}
