import Image from 'next/image';
import { FaWhatsapp, FaUsers, FaGasPump, FaCogs } from 'react-icons/fa';
import styles from './VehicleList.module.css';

const vehicles = [
  {
    id: 1,
    name: 'Honda Brio',
    price: 'Rp. 650.000',
    image: '/honda_brio.png',
    passengers: '4 Kursi',
    transmission: 'Auto/Manual',
    fuel: 'Bensin'
  },
  {
    id: 2,
    name: 'Avanza G Series',
    price: 'Rp. 700.000',
    image: '/avanza_g.png',
    passengers: '7 Kursi',
    transmission: 'Manual',
    fuel: 'Bensin'
  },
  {
    id: 3,
    name: 'Toyota HIACE',
    price: 'Rp. 1.200.000',
    image: '/toyota_hiace.png',
    passengers: '15 Kursi',
    transmission: 'Manual',
    fuel: 'Diesel'
  }
];

export default function VehicleList() {
  const whatsappMsg = (carName: string) => encodeURIComponent(`Halo Handoko Rentcar, saya tertarik untuk menyewa ${carName}. Boleh minta informasi lebih lanjut?`);

  return (
    <section id="vehicles" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2>Kendaraan <span>Terbaru</span></h2>
          <p>Nikmati kenyamanan berkendara dengan armada mobil terbaik kami.</p>
        </div>

        <div className={styles.grid}>
          {vehicles.map((car) => (
            <div key={car.id} className={styles.card}>
              <div className={styles.imgWrapper}>
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  fill 
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{car.name}</h3>
                <div className={styles.price}>{car.price} <span>/ hari</span></div>
                
                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <FaUsers color="#16a86e" /> {car.passengers}
                  </div>
                  <div className={styles.detailItem}>
                    <FaCogs color="#16a86e" /> {car.transmission}
                  </div>
                  <div className={styles.detailItem}>
                    <FaGasPump color="#16a86e" /> {car.fuel}
                  </div>
                </div>

                <div className={styles.footer}>
                  <a 
                    href={`https://wa.me/6285743422700?text=${whatsappMsg(car.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <FaWhatsapp size={18} /> Booking via WA
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
