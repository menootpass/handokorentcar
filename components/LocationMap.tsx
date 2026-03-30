import styles from './LocationMap.module.css';

export default function LocationMap() {
  return (
    <section className={styles.section} id="location">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Head <span>Office</span></h2>
          <p className={styles.address}>
            Jl. Babadan, RT.01/RW.17, Bangunmulyo, Girikerto, Kec. Turi, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55551
          </p>
        </div>
        <div className={styles.mapWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.1983056088463!2d110.39091197479815!3d-7.620125792393397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a61d456eca8cf%3A0xe85ce05e051e990e!2sHandoko%20Rentcar%20%26%20Tour%20Guide!5e0!3m2!1sen!2sid!4v1711200000000!5m2!1sen!2sid"
            className={styles.iframe} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
