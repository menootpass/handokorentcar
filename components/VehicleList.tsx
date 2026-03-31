import Image from 'next/image';
import { FaWhatsapp, FaUsers, FaCogs, FaRegClock, FaKey } from 'react-icons/fa';
import styles from './VehicleList.module.css';

const vehicles = [
  {
    id: 1,
    name: 'Honda Brio',
    price: 'Rp 650.000',
    lepasKunci: 'Rp 350.000',
    image: '/honda_brio.png',
    passengers: '4 Kursi',
    transmission: 'Auto/Manual'
  },
  {
    id: 2,
    name: 'Avanza G Series',
    price: 'Rp 700.000',
    lepasKunci: 'Rp 350.000',
    image: '/avanza_g.png',
    passengers: '7 Kursi',
    transmission: 'Auto/Manual'
  },
  {
    id: 7,
    name: 'Mobilio',
    price: 'Rp 650.000',
    lepasKunci: 'Rp 900.000',
    image: '/mobilio.png',
    passengers: '7 Kursi',
    transmission: 'Auto/Manual'
  },
  {
    id: 6,
    name: 'Innova Reborn',
    price: 'Rp 900.000',
    lepasKunci: 'Rp 350.000',
    image: '/innova-reborn.png',
    passengers: '7 Kursi',
    transmission: 'Auto/Manual'
  },
  {
    id: 5,
    name: 'Elf Long',
    price: 'Rp 1.200.000',
    image: '/elf-long.png',
    passengers: '15-19 Kursi',
    transmission: 'Manual'
  },
  {
    id: 3,
    name: 'Toyota HIACE',
    price: 'Rp 1.200.000',
    image: '/toyota_hiace.png',
    passengers: '15 Kursi',
    transmission: 'Manual'
  },
  {
    id: 9,
    name: 'Fortuner',
    price: 'Rp 1.400.000',
    image: '/fortuner.png',
    passengers: '7 Kursi',
    transmission: 'Auto'
  },
  {
    id: 8,
    name: 'Pajero',
    price: 'Rp 1.500.000',
    image: '/pajero.png',
    passengers: '7 Kursi',
    transmission: 'Auto'
  },
  {
    id: 4,
    name: 'Bus Medium & Big Bus',
    price: 'Rp 1.800.000',
    image: '/image/all-cars-variants.png',
    passengers: '30-50 Kursi',
    transmission: 'Manual'
  },
  {
    id: 10,
    name: 'Alphard',
    price: 'Rp 3.300.000',
    image: '/image/alphard.png',
    passengers: '7 Kursi',
    transmission: 'Auto'
  }
];

export default function VehicleList() {
  const whatsappMsg = (carName: string) => encodeURIComponent(`Halo Handoko Rentcar, saya tertarik untuk menyewa ${carName}. Boleh minta informasi lebih lanjut?`);
  const customMsg = encodeURIComponent("Hallo saya ingin menyewa secara custom");

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
                
                <div className={styles.priceContainer}>
                   <div className={styles.price}>{car.price} <span>/ hari (All in)</span></div>
                   {car.lepasKunci && (
                     <div className={styles.priceLepasKunci}>
                       <FaKey size={14}/> Lepas Kunci: {car.lepasKunci} <span>/ hari</span>
                     </div>
                   )}
                   <div className={styles.timeInfo}>
                     <FaRegClock size={12}/> Berlaku dari jam 00:00 hingga 23:59
                   </div>
                </div>

                <div className={styles.details}>
                  <div className={styles.detailItem}>
                    <FaUsers color="#16a86e" /> {car.passengers}
                  </div>
                  <div className={styles.detailItem}>
                    <FaCogs color="#16a86e" /> {car.transmission}
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
        
        <div className={styles.customBooking}>
           <h3>Butuh Layanan Berbeda?</h3>
           <p>Kami menyadari setiap perjalanan memiliki kebutuhan yang unik. Jika Anda membutuhkan waktu sewa spesifik, rute custom, keperluan grup khusus, atau lainnya, jangan ragu hubungi kami!</p>
           <a 
              href={`https://wa.me/6285743422700?text=${customMsg}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn btn-outline ${styles.customBtn}`}
            >
              <FaWhatsapp size={18} /> Booking Custom
            </a>
        </div>
      </div>
    </section>
  );
}
