export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
}

export type ArticlesDict = {
  en: Article[];
  id: Article[];
};

export const articles: ArticlesDict = {
  id: [
    {
      id: "1",
      slug: "update-harga-sewa-mobil-jogja",
      title: "Update Harga Sewa Mobil Jogja 2026: Lepas Kunci & Paket All-In Murah",
      excerpt: "Daftar harga sewa mobil Jogja terbaru dari Handoko Rentcar. Temukan layanan lepas kunci maupun dengan driver untuk wisata keluarga Anda.",
      date: "2026-04-01",
      coverImage: "/image/cars/innova-reborn.png",
      content: `
        <h2>Solusi Transportasi Premium dan Terjangkau di Jogja</h2>
        <p>Mencari jasa <strong>sewa mobil Jogja</strong> yang transparan soal harga dan unitnya selalu terawat mutlak diperlukan untuk kenyamanan berwisata. Memilih <strong>Handoko Rentcar</strong> berarti Anda mengutamakan ketenangan pikiran. Kami hadir sebagai solusi transportasi terpercaya, baik untuk keperluan wisata keluarga yang santai, perjalanan bisnis yang padat, acara kedinasan, maupun momen-momen spesial Anda selama di Daerah Istimewa Yogyakarta.</p>
        
        <p>Memasuki tahun 2026 yang penuh dinamika ini, kami senantiasa memperbarui kualitas dan varian daftar armada kami. Tujuannya hanya satu: memastikan Anda selalu mendapatkan pengalaman berkendara kelas atas dengan penawaran harga yang rasional dan terbaik. Berikut adalah daftar harga sewa mobil di Jogja terbaru persembahan eksklusif dari kami:</p>
        
        <img src="/image/cars/innova-reborn.png" alt="Sewa Innova Jogja Handoko Rentcar" class="article-img" />

        <h3>Daftar Harga Sewa Mobil Jogja Lepas Kunci (24 Jam)</h3>
        <p>Bagi Anda yang menginginkan privasi maksimal dan fleksibilitas jadwal tanpa batas waktu kunjung destinasi, maka layanan <strong>lepas kunci tanpa driver</strong> adalah opsi paling cerdas. Anda diberikan kebebasan utuh mengatur setir sendiri layaknya warga lokal.</p>
        
        <table class="article-table">
          <thead>
            <tr>
              <th>Jenis Armada</th>
              <th>Kapasitas</th>
              <th>Harga Per Hari (24 Jam)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Toyota All New Avanza</strong></td><td>7 Penumpang</td><td>Rp 350.000</td></tr>
            <tr><td><strong>Honda Mobilio</strong></td><td>7 Penumpang</td><td>Rp 300.000</td></tr>
            <tr><td><strong>Toyota Innova Reborn</strong></td><td>7 Penumpang</td><td>Mulai Rp 350.000 - Rp 400.000</td></tr>
            <tr><td><strong>Honda Brio (City Car)</strong></td><td>5 Penumpang</td><td>Rp 350.000</td></tr>
          </tbody>
        </table>

        <h3>Paket Sewa Mobil + Driver Profesional + BBM (Paket All In)</h3>
        <p>Malas menyetir sendiri menembus kemacetan Jalan Malioboro atau ragu menyetir melintasi jalur perbukitan? Serahkan pada <strong>driver profesional kami</strong>. Kami siap mengantar jemput Anda ke pesona magis Candi Borobudur, kesejukan HeHa Sky View, atau indahnya karang Pantai Gunung Kidul tanpa Anda harus repot mengecek GPS.</p>
        
        <ul>
          <li><strong>Avanza All New + Driver (All In):</strong> Rp 700.000</li>
          <li><strong>Innova Reborn + Driver (All In):</strong> Rp 900.000</li>
          <li><strong>Hiace Commuter (15 Seat) + Driver (All In):</strong> Rp 1.200.000</li>
          <li><strong>Toyota Fortuner / Pajero + Driver:</strong> Mulai Rp 1.400.000</li>
          <li><strong>Toyota Alphard Luxury + Driver:</strong> Rp 3.300.000 (VIP Class)</li>
        </ul>
      `
    },
    {
      id: "2",
      slug: "sewa-mobil-jogja-dekat-stasiun",
      title: "Sewa Mobil Jogja Dekat Stasiun Tugu & Lempuyangan: Gratis Antar Jemput!",
      excerpt: "Apakah Anda turun di stasiun Tugu atau Lempuyangan? Handoko Rentcar sediakan armada tepat di pintu kedatangan stasiun, tanpa biaya antar tambahan.",
      date: "2026-04-03",
      coverImage: "/image/cars/avanza-black.jpeg",
      content: `
        <h2>Mobil Tepat Berada di Pintu Kedatangan Stasiun Kereta</h2>
        <p>Mendengar pengumuman suara stasiun bahwa kereta sebentar lagi tiba sering kali mencetuskan perasaan tak sabar. Bagaimana caranya menuju penginapan secara optimal sedangkan Anda kelelahan membawa koper berat? Tenang saja, <strong>Handoko Rentcar</strong> mendobrak kekhawatiran tersebut! Roda mobil bersih kami sudah menyentuh pelataran parkir Stasiun Tugu/Lempuyangan, siap mengemban seluruh rasa letih Anda.</p>
        
        <img src="/image/cars/avanza-black.jpeg" alt="sewa-mobil-stasiun-tugu-jogja" class="article-img" />

        <h3>Nilai Inti Sewa Mobil Stasiun</h3>
        <ul>
          <li><strong>Layanan Antar Jemput Gratis Absolut:</strong> Tidak ada hidden-fee lembur stasiun. Kunci di tangan begitu di area drop-off.</li>
          <li><strong>Unit Segar Seperti Baru:</strong> Mobil jenis keluarga diset dengan aroma segar penghambat pening, kaca jendela yang diseka steril.</li>
        </ul>
        <p>Jangan sia-siakan liburan. Pastikan Anda memesan mobil idaman ke kru WhatsApp <strong>Handoko Rentcar</strong> selambat-lambatnya 1x24 jam sebelum boarding!</p>
      `
    },
    {
      id: "3",
      slug: "wisata-hits-gunung-kidul-hiace",
      title: "7 Rekomendasi Wisata Hits Gunung Kidul yang Wajib Dikunjungi dengan Sewa Hiace Jogja",
      excerpt: "Rombongan besar mencari eksotisme pasir putih dan tebing Gunung Kidul? Temukan spot wisata viral terbaik dan sewa Hiace besar dari Handoko Rentcar.",
      date: "2026-04-05",
      coverImage: "/image/cars/toyota_hiace.png",
      content: `
        <h2>Gelombang Keindahan Ekstrem Gunung Kidul</h2>
        <p>Tahun 2026 menahbiskan <strong>Gunung Kidul</strong> sebagai ibu kota keindahan alam bahari estetik di Jawa. Bila Anda datang dengan formasi armada "Squad" (9 hingga 15 orang), pesona ini patut dicicipi sekaligus! Melibatkan armada <strong>Toyota Hiace Commuter</strong> atau tipe sejenis dari silsilah garasi <strong>Sewa Hiace Handoko Rentcar Jogja</strong> menggaransi 100% senyum simpul keluarga sepanjang mendaki jalur tenggara.</p>
        
        <img src="/image/cars/toyota_hiace.png" alt="Sewa Hiace Wisata Gunung Kidul" class="article-img" />

        <h3>Mengapa Rombongan Harus Menggunakan Hiace/Elf Long?</h3>
        <ol>
          <li><strong>Leganya Tanpa Tandingan:</strong> Sorakan nyanyian lagu keluarga di bawah tata sound system Hiace akan membuat durasi perjalanan terasa eksklusif.</li>
          <li><strong>Iklim Mikro Kutub C:</strong> Fitur AC individual sirkulasi atap menyeluruh menjamin hawa selalu dingin di cuaca 32° Celcius.</li>
          <li><strong>Pilot Medan Berat Spesialis Tikungan:</strong> Sopir pariwisata profesional kami telah menghafal letak belokan berbahaya dengan mulus.</li>
        </ol>
      `
    },
    {
      id: "5",
      slug: "tips-wisata-hemat-di-jogja",
      title: "5 Tips Wisata Hemat di Jogja 2026: Liburan Puas Tanpa Bikin Kantong Jebol!",
      excerpt: "Siasati pengeluaran pelesir Anda dengan cara jenius. Baca strategi liburan Jogja komplit untuk menekan anggaran berlebih bersama Handoko Rentcar.",
      date: "2026-04-12",
      coverImage: "/image/testimoni/tour-testimonial.jpeg",
      content: `
        <h2>Memecahkan Teka-Teki Liburan Kaya Pengalaman Walau Dompet Bersahaja</h2>
        <p>Yogyakarta selalu menjelma sebuah utopia romantis. Tapi seiring populernya spot Instagramable, pelesir bisa membobol rekening. Bisakah liburan hemat? Tentu saja! Ikuti taktik dari <strong>Handoko Rentcar</strong>.</p>
        
        <img src="/image/testimoni/tour-testimonial.jpeg" alt="Tips Wisata Hemat Handoko Rentcar" class="article-img" />

        <h3>Top Solusi Menekan Estimasi Anggaran Anda</h3>
        <h4>1. Hindari Serbuan Manusia di Rentang Jumat-Minggu</h4>
        <p>Berbekal permohonan pelimpahan cuti di H-1 weekday (Hari Selasa hingga Kamis), Anda disuguhkan harga obral villa, tiket murah dan kelowongan area wisata.</p>
        
        <h4>2. Reduksi Total Biaya Kendaraan Sewa Hingga 60%</h4>
        <p>Menyetop taksi online berkali kali merogoh saldo tajam. Penawar jitu? Pesan <strong>Mobil Lepas Kunci di Handoko Rentcar (kisaran Rp 350rb)</strong>. Belah iuran bensin dari ke-4 gerombolan teman Anda, dan rasakan bepergian bagai VIP kelas satu hanya dengan Rp 70 ribu-an per orang/hari-nya.</p>
        
        <p>Apabila Anda membutuhkan rekomendasi akurat rute termurah, hubungi CS kami di WhatsApp kapan saja.</p>
      `
    }
  ],
  en: [
    {
      id: "1",
      slug: "update-harga-sewa-mobil-jogja",
      title: "2026 Jogja Car Rental Price Update: Self-Drive & Cheap All-In Packages",
      excerpt: "The latest Jogja car rental price list from Handoko Rentcar. Find self-drive services or with a driver for your family vacation.",
      date: "2026-04-01",
      coverImage: "/image/cars/innova-reborn.png",
      content: `
        <h2>Premium and Affordable Transportation Solutions in Jogja</h2>
        <p>Looking for <strong>car rental services in Jogja</strong> with transparent pricing and well-maintained units is an absolute necessity for travel comfort. Choosing <strong>Handoko Rentcar</strong> means you prioritize peace of mind. We exist as a trusted transportation solution, whether for relaxed family tours, dense business trips, official events, or your special moments during your stay in the Special Region of Yogyakarta.</p>
        
        <p>Entering the dynamic year of 2026, we constantly upgrade the quality and variants of our fleet roster. Our goal is simple: to ensure you always get top-tier driving experiences with the most rational and best price offerings. Here is the latest exclusive car rental price list from us:</p>
        
        <img src="/image/cars/innova-reborn.png" alt="Rent Innova Jogja Handoko Rentcar" class="article-img" />

        <h3>Self-Drive Car Rental Rates (24 Hours)</h3>
        <p>For those of you who desire maximum privacy and scheduling flexibility without time limits at destinations, the <strong>self-drive without driver</strong> service is the smartest option. You are given the complete freedom to take the wheel just like a local resident.</p>
        
        <table class="article-table">
          <thead>
            <tr>
              <th>Fleet Type</th>
              <th>Capacity</th>
              <th>Price Per Day (24 Hours)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Toyota All New Avanza</strong></td><td>7 Seats</td><td>IDR 350,000</td></tr>
            <tr><td><strong>Honda Mobilio</strong></td><td>7 Seats</td><td>IDR 300,000</td></tr>
            <tr><td><strong>Toyota Innova Reborn</strong></td><td>7 Seats</td><td>From IDR 350,000 - 400,000</td></tr>
            <tr><td><strong>Honda Brio (City Car)</strong></td><td>5 Seats</td><td>IDR 350,000</td></tr>
          </tbody>
        </table>

        <h3>Car + Professional Driver + Fuel Packages (All In Package)</h3>
        <p>Reluctant to drive through the bustling traffic of Malioboro Street or hesitant to navigate hilly routes? Leave it to <strong>our professional drivers</strong>. We are ready to shuttle you to the magical charm of Borobudur Temple, the cool breeze of HeHa Sky View, or the beautiful coral beaches of Gunung Kidul without you ever having to check the GPS.</p>
        
        <ul>
          <li><strong>Avanza All New + Driver (All In):</strong> IDR 700,000</li>
          <li><strong>Innova Reborn + Driver (All In):</strong> IDR 900,000</li>
          <li><strong>Hiace Commuter (15 Seats) + Driver (All In):</strong> IDR 1,200,000</li>
          <li><strong>Toyota Fortuner / Pajero + Driver:</strong> From IDR 1,400,000</li>
          <li><strong>Toyota Alphard Luxury + Driver:</strong> IDR 3,300,000 (VIP Class)</li>
        </ul>
      `
    },
    {
      id: "2",
      slug: "sewa-mobil-jogja-dekat-stasiun",
      title: "Jogja Car Rental Near Tugu & Lempuyangan Stations: Free Pick-up & Drop-off!",
      excerpt: "Arriving at Tugu or Lempuyangan stations? Handoko Rentcar provides a fleet right at the station arrival gate, with no extra drop-off fees.",
      date: "2026-04-03",
      coverImage: "/image/cars/avanza-black.jpeg",
      content: `
        <h2>Your Car is Waiting Right at the Station Arrival Gate</h2>
        <p>Hearing the station announcement that the train will soon arrive often triggers a feeling of impatient excitement. How do you get to your accommodation optimally while you are exhausted carrying heavy suitcases? Rest assured, <strong>Handoko Rentcar</strong> breaks down those worries! The wheels of our clean cars have already touched the parking lot of Tugu/Lempuyangan Station, ready to shoulder all your travel fatigue.</p>
        
        <img src="/image/cars/avanza-black.jpeg" alt="car-rental-tugu-station-jogja" class="article-img" />

        <h3>Core Value of Station Car Rental</h3>
        <ul>
          <li><strong>Absolute Free Shuttle Service:</strong> No hidden overtime station fees. The keys are in your hand the moment you reach the drop-off area.</li>
          <li><strong>Fresh Like New Units:</strong> Family-type cars are set with fresh aromas to prevent dizziness, and window panes are sterilized wipe clean.</li>
        </ul>
        <p>Don't waste your holiday. Make sure you book your dream car to the <strong>Handoko Rentcar</strong> WhatsApp crew no later than 24 hours before boarding!</p>
      `
    },
    {
      id: "3",
      slug: "wisata-hits-gunung-kidul-hiace",
      title: "7 Recommended Viral Gunung Kidul Attractions to Visit with Jogja Hiace Rental",
      excerpt: "Large group seeking the exoticism of white sands and Gunung Kidul cliffs? Find the best viral tourist spots and rent a big Hiace from Handoko Rentcar.",
      date: "2026-04-05",
      coverImage: "/image/cars/toyota_hiace.png",
      content: `
        <h2>The Extreme Beauty Wave of Gunung Kidul</h2>
        <p>The year 2026 crowns <strong>Gunung Kidul</strong> as the capital of aesthetic marine natural beauty in Java. If you come with a full "Squad" fleet formation (9 to 15 people), this charm is worth tasting all at once! Involving a <strong>Toyota Hiace Commuter</strong> or similar types from the garage lineage of <strong>Hiace Rental Handoko Rentcar Jogja</strong> guarantees 100% subtle family smiles along the southeast route climbing.</p>
        
        <img src="/image/cars/toyota_hiace.png" alt="Hiace Rental Gunung Kidul Tour" class="article-img" />

        <h3>Why Should Groups Use Hiace/Elf Long?</h3>
        <ol>
          <li><strong>Unrivaled Spaciousness:</strong> The cheers of family sing-alongs under the Hiace sound system arrangement will make the duration feel exclusive.</li>
          <li><strong>Arctic Microclimate:</strong> Individual roof circulation AC features guarantee the air is always cool in 32° Celsius weather.</li>
          <li><strong>Heavy Terrain Pilots Cornering Specialists:</strong> Our professional tourism drivers have memorized the location of sharp turns seamlessly.</li>
        </ol>
      `
    },
    {
      id: "5",
      slug: "tips-wisata-hemat-di-jogja",
      title: "5 Budget Travel Tips in Jogja 2026: Satisfying Vacation Without Breaking the Bank!",
      excerpt: "Outsmart your leisure expenses ingeniously. Read the complete Jogja holiday strategy to suppress excess budget with Handoko Rentcar.",
      date: "2026-04-12",
      coverImage: "/image/testimoni/tour-testimonial.jpeg",
      content: `
        <h2>Solving the Puzzle of an Experience-Rich Holiday Despite a Modest Wallet</h2>
        <p>Yogyakarta always manifests as a romantic utopia. But as Instagrammable spots become more popular, holidaying can break the bank account. Can we have a budget vacation? Absolutely! Follow tactics from <strong>Handoko Rentcar</strong>.</p>
        
        <img src="/image/testimoni/tour-testimonial.jpeg" alt="Budget Travel Tips Handoko Rentcar" class="article-img" />

        <h3>Top Solutions to Suppress Your Budget Estimation</h3>
        <h4>1. Avoid the Human Invasions from Friday to Sunday</h4>
        <p>Armed with a request to shift your leave to a weekday (Tuesday to Thursday), you are presented with clearance sale villa prices, cheap ticket promos, and vacant tourist areas.</p>
        
        <h4>2. Reduce Total Rental Car Costs by Up to 60%</h4>
        <p>Hailing online taxis repeatedly digs sharp into your balance. The surefire antidote? Order a <strong>Self-Drive Car at Handoko Rentcar (around IDR 350K)</strong>. Split the gas cost among 4 of your friends, and feel traveling like a first-class VIP for only IDR 70 thousands per person/day.</p>
        
        <p>If you need accurate recommendations for the cheapest routes, contact our CS on WhatsApp anytime.</p>
      `
    }
  ]
};
