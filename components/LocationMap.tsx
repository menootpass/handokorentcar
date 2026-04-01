import styles from './LocationMap.module.css';

export default function LocationMap({ dict }: { dict: any }) {
  return (
    <section className={styles.location}>
      <div className="container">
        <h2 className="section-title">{dict.title}</h2>
        <div className={styles.card}>
          <div className={styles.mapWrapper}>
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.035760124888!2d110.3831979496359!3d-7.629337586524273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5fac7cbecc65%3A0x868d18305f6d7eb8!2sHandoko%20trans!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Maps Location Handoko Rentcar"
            ></iframe>
          </div>
          <div className={styles.info}>
            <h3>Sleman, Yogyakarta</h3>
            <p>{dict.address}</p>
            <a href="https://maps.app.goo.gl/yTjVXXb3bXqYZMWe8" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{width: '100%', marginTop: '20px'}}>
              {dict.btnRoute}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
