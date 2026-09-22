// Konten primbon per weton. Watak = gabungan sifat hari + pasaran.
// Sifat-sifat ini adalah tuturan tradisi Jawa (bukan kepastian ilmiah).

export const WATAK_HARI: Record<string, string> = {
  minggu:
    "Lahir di hari Minggu digambarkan seperti matahari: berwibawa, cerah, dan mudah menjadi pusat perhatian. Umumnya mandiri, punya pendirian kuat, dan suka hal-hal yang terang.",
  senin:
    "Lahir di hari Senin digambarkan seperti air: tenang di permukaan, lembut hati, mudah iba, dan pandai menyimpan perasaan. Cocok bergaul luas, tapi butuh waktu sendiri untuk memulihkan energi.",
  selasa:
    "Lahir di hari Selasa digambarkan seperti api: tegas, berani mengambil risiko, dan mudah tersulut emosi. Pemiliknya cenderung jujur dan tidak suka basa-basi.",
  rabu:
    "Lahir di hari Rabu digambarkan seperti daun: luwes, mudah beradaptasi, enak diajak bicara, dan pandai mencari jalan tengah. Kelemahannya kadang mudah terpengaruh.",
  kamis:
    "Lahir di hari Kamis digambarkan seperti angin: luas wawasan, gemar belajar, dan berjiwa pengembara. Berbakat bicara dan memimpin, meski kadang angin-anginan.",
  jumat:
    "Lahir di hari Jumat digambarkan seperti tanah yang diberkahi: penyayang, mudah disukai, kuat di urusan rumah tangga dan spiritual. Termasuk hari yang dianggap bertuah dalam tradisi Jawa.",
  sabtu:
    "Lahir di hari Sabtu digambarkan seperti gunung: kokoh, berwibawa, ambisius, dan tahan tekanan. Cenderung serius dan tidak mudah percaya orang lain.",
};

export const WATAK_PASARAN: Record<string, string> = {
  legi:
    "Pasaran Legi bermakna 'manis'. Legi identik dengan keramahan, keluwesan, dan kemampuan membuat orang merasa nyaman.",
  pahing:
    "Pasaran Pahing bermakna 'tampar/pukul' — energinya kuat dan keras kepala, tapi juga tekun dan pantang menyerah. Pahing dianggap pasaran paling tinggi neptunya.",
  pon: "Pasaran Pon bermakna 'mengambang' — identik dengan kehati-hatian, daya tahan, dan sifat pendiam yang menyimpan banyak hal.",
  wage:
    "Pasaran Wage bermakna 'tenang/diam'. Wage identik dengan sifat kalem, sabar, dan tidak suka ribut, meski kadang terlihat lambat mengambil keputusan.",
  kliwon:
    "Pasaran Kliwon bermakna 'berdiri tegak' — pasaran paling spiritual dalam tradisi Jawa, identik dengan intuisi kuat, kharisma, dan kedekatan dengan hal-hal gaib.",
};

// Catatan khusus untuk weton yang terkenal dalam tuturan primbon.
export const WETON_KHUSUS: Record<string, string> = {
  "sabtu-pahing":
    "Sabtu Pahing (neptu 18) adalah weton dengan neptu tertinggi, terkenal sebagai 'weton para raja'. Dalam tuturan Jawa, pemiliknya berwibawa besar, disegani, dan konon sulit ditindas — cocok memimpin dan memegang tanggung jawab besar.",
  "jumat-kliwon":
    "Jumat Kliwon (neptu 14) adalah weton paling spiritual. Malam Jumat Kliwon terkenal sebagai malam penuh nuansa gaib; pemilik weton ini dipercaya punya intuisi tajam dan kharisma yang tak terlihat tapi terasa.",
  "selasa-kliwon":
    "Selasa Kliwon (neptu 11) menggabungkan api Selasa dengan spiritualitas Kliwon — pemiliknya dipercaya tegas, berintuisi kuat, dan tidak mudah dibaca orang lain.",
  "senin-wage":
    "Senin Wage (neptu 8) adalah weton dengan neptu terendah bersama Senin Pon (11 tidak — Senin Wage = 8). Dalam tuturan, pemiliknya lembut, rendah hati, dan lebih cocok menjadi pendukung setia daripada pemimpin keras.",
  "minggu-legi":
    "Minggu Legi (neptu 10) menggabungkan wibawa Minggu dengan manisnya Legi — pemiliknya dianggap pandai bergaul, disukai banyak orang, dan mudah menarik rezeki lewat relasi.",
  "kamis-pahing":
    "Kamis Pahing (neptu 17) — angin Kamis bertemu kerasnya Pahing — digambarkan sebagai pribadi yang berpikiran luas namun keras kepala, cocok untuk peran yang butuh ketegasan dan visi.",
  "rabu-pon":
    "Rabu Pon (neptu 14) — luwesnya Rabu bertemu pendiamnya Pon — menghasilkan pribadi yang pandai bicara tapi hati-hati, jarang gegabah, dan pandai menjaga rahasia.",
  "jumat-pon":
    "Jumat Pon (neptu 13) — dalam tuturan Jawa dianggap weton yang penyayang dan setia, cocok untuk rumah tangga yang tenang dan penuh ketulusan.",
  "sabtu-wage":
    "Sabtu Wage (neptu 13) — gunung Sabtu bertemu tenangnya Wage — digambarkan sebagai pribadi yang kokoh tapi tidak agresif, pekerja keras yang diam-diam menghanyutkan.",
  "minggu-kliwon":
    "Minggu Kliwon (neptu 13) — matahari bertemu pasaran spiritual — dianggap punya daya tarik alami dan intuisi baik, meski kadang dianggap 'terlalu idealis'.",
};

// Kategori jodoh — penjelasan lengkap untuk halaman /jodoh/[kategori].
export const JODOH_DETAIL: Record<
  string,
  { name: string; arti: string; saran: string }
> = {
  pegat: {
    name: "Pegat",
    arti:
      "Dalam primbon Jawa, hasil 'Pegat' menandakan hubungan yang rawan pertengkaran, terutama karena masalah ekonomi, ego, atau perebutan kuasa. Disebut 'pegat' karena dipercaya berisiko berujung perpisahan bila tidak dijaga.",
    saran:
      "Bukan vonis — banyak pasangan Pegat tetap langgeng karena sadar mengelola ego dan keuangan bersama. Perkuat komunikasi dan keterbukaan soal uang sejak awal.",
  },
  ratu: {
    name: "Ratu",
    arti:
      "Hasil 'Ratu' adalah salah satu kategori terbaik dalam hitungan jodoh Jawa: pasangan saling menghormati, disegani lingkungan, dan rumah tangganya diibaratkan raja-ratu — dipandang tinggi dan harmonis.",
    saran:
      "Jaga kehormatan satu sama lain di depan keluarga dan lingkungan. Kategori ini kuat secara sosial — jangan sampai 'sibuk dihormati orang lain' mengalahkan kedekatan berdua.",
  },
  jodoh: {
    name: "Jodoh",
    arti:
      "Sesuai namanya, hasil 'Jodoh' berarti pasangan ini secara hitungan weton memang ditakdirkan cocok — saling menerima kelebihan dan kekurangan masing-masing, hubungan terasa 'mengalir'.",
    saran:
      "Kategori ini paling ringan dijalani, tapi tetap butuh perawatan: kecocokan bukan alasan untuk berhenti berusaha memahami pasangan.",
  },
  topo: {
    name: "Topo",
    arti:
      "Hasil 'Topo' berarti awal pernikahan/hubungan akan terasa berat — khasnya soal ekonomi atau penyesuaian hidup — namun semakin lama semakin membaik dan berakhir bahagia, seperti orang bertapa yang akhirnya mencapai tujuan.",
    saran:
      "Bersabar di fase awal. Siapkan fondasi ekonomi dan ekspektasi realistis sebelum menikah; hasil Topo justru sering jadi kisah 'dari nol bersama' yang paling kuat.",
  },
  tinari: {
    name: "Tinari",
    arti:
      "Hasil 'Tinari' berarti pasangan ini dikaruniai kemudahan rezeki dan keberuntungan — hidup tidak kekurangan, selalu ada jalan keluar saat menghadapi kesulitan material.",
    saran:
      "Manfaatkan keberuntungan finansial untuk menabung dan berbagi. Rezeki lancar bukan izin untuk boros — justru momentum membangun masa depan.",
  },
  padu: {
    name: "Padu",
    arti:
      "Hasil 'Padu' menandakan pasangan yang sering bertengkar atau berselisih paham — namun menariknya, dalam tuturan primbon kategori ini justru jarang berujung cerai; pertengkarannya 'ramai tapi awet'.",
    saran:
      "Belajar bertengkar dengan sehat: sepakati aturan main (tidak bawa masa lalu, tidak angkat tangan, selesaikan sebelum tidur). Api yang terkendali menghangatkan; yang liar membakar.",
  },
  sujanan: {
    name: "Sujanan",
    arti:
      "Hasil 'Sujanan' menandakan hubungan yang rawan gangguan pihak ketiga — godaan, perselingkuhan, atau campur tangan keluarga/orang luar yang menguji kesetiaan.",
    saran:
      "Jaga batas dengan pihak ketiga dan rawat kemesraan berdua. Transparansi soal pertemanan dan media sosial sangat membantu menangkal godaan sejak dini.",
  },
  pesthi: {
    name: "Pesthi",
    arti:
      "Hasil 'Pesthi' berarti pasangan yang rukun, saling menguatkan, dan harmonis hingga tua — dalam tuturan Jawa termasuk hasil yang paling didambakan karena mencerminkan 'jodoh yang terawat'.",
    saran:
      "Pertahankan ritual kebersamaan (makan bersama, diskusi kecil rutin). Pesthi kuat karena konsistensi, bukan keberuntungan semata.",
  },
};

// Hari baik — konten per acara.
export interface HariBaikTopic {
  slug: string;
  title: string;
  keyword: string;
  desc: string;
  tips: string[];
}

export const HARI_BAIK_TOPICS: HariBaikTopic[] = [
  {
    slug: "pernikahan",
    title: "Hari Baik Pernikahan",
    keyword: "hari baik pernikahan menurut primbon jawa",
    desc: "Menentukan hari pernikahan menurut primbon Jawa dilakukan dengan menjumlahkan neptu weton kedua calon, lalu memilih tanggal yang jatuh pada pasaran dan hari yang selaras. Secara umum, pasaran Legi dan Kliwon sering dipilih untuk acara sakral, sementara hasil hitungan yang jatuh pada kategori Jodoh, Ratu, atau Pesthi dianggap terbaik.",
    tips: [
      "Hitung dulu neptu weton kedua calon mempelai dengan kalkulator di atas.",
      "Pilih tanggal yang hasil hitungannya masuk kategori Jodoh, Ratu, Tinari, atau Pesthi.",
      "Hindari tanggal yang jatuh pada kategori Pegat atau Sujanan bila memungkinkan.",
      "Banyak keluarga Jawa masih mengonsultasikan tanggal ke sesepuh/dukun adat — kalkulator ini membantu menyiapkan beberapa kandidat tanggal.",
    ],
  },
  {
    slug: "membuka-usaha",
    title: "Hari Baik Membuka Usaha",
    keyword: "hari baik membuka usaha menurut primbon jawa",
    desc: "Untuk membuka usaha atau memulai dagangan, primbon Jawa menyarankan hari dan pasaran yang bernilai neptu tinggi atau yang selaras dengan weton pemilik usaha. Pasaran Pahing (neptu 9) dan hari Kamis sering disebut baik untuk memulai rezeki baru.",
    tips: [
      "Selaraskan tanggal pembukaan dengan weton pribadi Anda — hitung dulu dengan kalkulator.",
      "Pahing dan Legi sering dipilih untuk urusan dagang dan rezeki.",
      "Beberapa tradisi juga menghindari pasaran Wage untuk memulai usaha baru.",
    ],
  },
  {
    slug: "pindah-rumah",
    title: "Hari Baik Pindah Rumah",
    keyword: "hari baik pindah rumah menurut primbon jawa",
    desc: "Pindah rumah menurut primbon Jawa memperhitungkan weton kepala keluarga dan arah rumah. Hari dengan neptu besar seperti Sabtu atau pasaran Pahing dipercaya memberi energi kuat untuk hunian baru.",
    tips: [
      "Utamakan weton kepala keluarga sebagai acuan utama.",
      "Arah rumah (timur/barat/utara/selatan) juga punya pasangan hari baiknya masing-masing dalam primbon.",
      "Hindari hari yang bertepatan dengan 'hari sial' keluarga menurut hitungan weton.",
    ],
  },
  {
    slug: "membeli-kendaraan",
    title: "Hari Baik Membeli Kendaraan",
    keyword: "hari baik beli kendaraan menurut primbon jawa",
    desc: "Membeli kendaraan atau barang besar menurut primbon Jawa sebaiknya dilakukan pada hari yang selaras dengan weton pembeli — banyak keluarga Jawa percaya kendaraan yang 'cocok hari belinya' lebih awet dan membawa keselamatan.",
    tips: [
      "Hitung weton Anda, lalu pilih tanggal dengan pasaran Legi atau Pahing untuk pembelian besar.",
      "Sebagian tradisi menghindari pasaran Pon untuk transaksi besar.",
      "Gabungkan dengan kepraktisan: hari baik + kondisi kendaraan bagus = kombinasi terbaik.",
    ],
  },
  {
    slug: "memulai-pekerjaan",
    title: "Hari Baik Memulai Pekerjaan Baru",
    keyword: "hari baik memulai pekerjaan menurut primbon jawa",
    desc: "Hari pertama kerja atau memulai jabatan baru menurut primbon Jawa baiknya dipilih pada hari yang memperkuat watak weton Anda — misalnya Kamis untuk karier yang butuh wawasan, atau Senin untuk peran yang butuh kelembutan dan relasi.",
    tips: [
      "Sesuaikan hari mulai dengan karakter weton dan bidang pekerjaan.",
      "Pahing dan Kliwon dianggap kuat untuk peran kepemimpinan dan spiritual.",
      "Yang terpenting tetap persiapan — hari baik adalah penyempurna, bukan pengganti kesiapan.",
    ],
  },
  {
    slug: "membangun-rumah",
    title: "Hari Baik Membangun Rumah",
    keyword: "hari baik membangun rumah menurut primbon jawa",
    desc: "Memulai pembangunan rumah menurut primbon Jawa adalah momen besar — peletakan batu pertama baiknya jatuh pada hari dengan neptu besar yang selaras dengan weton kepala keluarga. Hari Kamis dan pasaran Pahing sering dipilih untuk fondasi yang 'kuat'.",
    tips: [
      "Hitung weton kepala keluarga sebagai acuan utama, bukan weton tukang atau kontraktor.",
      "Pahing (neptu 9) sering dipilih agar rumah 'kokoh' seperti energinya.",
      "Sebagian tradisi menghindari pasaran Wage untuk memulai pembangunan.",
      "Arah hadap rumah juga diperhitungkan dalam primbon — konsultasikan ke sesepuh bila ragu.",
    ],
  },
  {
    slug: "lamaran",
    title: "Hari Baik Lamaran",
    keyword: "hari baik lamaran menurut primbon jawa",
    desc: "Lamaran adalah pintu menuju pernikahan — menurut primbon Jawa, tanggal lamaran baiknya sudah mulai diselaraskan dengan weton kedua calon. Pasaran Legi yang 'manis' sering dipilih agar prosesi berjalan lancar dan disambut baik kedua keluarga.",
    tips: [
      "Mulai hitung neptu kedua calon sejak tahap lamaran, bukan baru saat menikah.",
      "Legi identik dengan penerimaan dan kemanisan — cocok untuk pertemuan dua keluarga.",
      "Hasil hitungan kategori Jodoh atau Ratu dianggap awal yang baik.",
    ],
  },
  {
    slug: "khitan",
    title: "Hari Baik Khitan",
    keyword: "hari baik khitan menurut primbon jawa",
    desc: "Khitanan adalah acara besar dalam tradisi Jawa-Islam — pemilihan harinya menurut primbon diselaraskan dengan weton anak, agar prosesnya lancar dan pemulihannya cepat. Banyak keluarga memilih pasaran Legi atau hari Jumat yang dianggap bertuah.",
    tips: [
      "Acuan utamanya adalah weton anak yang akan dikhitan, bukan weton orang tua.",
      "Jumat dan Legi sering dipilih karena dianggap membawa berkah.",
      "Gabungkan dengan pertimbangan medis dan jadwal dokter — hari baik adalah pelengkap.",
    ],
  },
  {
    slug: "aqiqah",
    title: "Hari Baik Aqiqah",
    keyword: "hari baik aqiqah menurut primbon jawa",
    desc: "Aqiqah untuk bayi baru lahir dalam tradisi Jawa-Islam sering dijadwalkan pada hari ketujuh, tetapi bila jatuh di tanggal lain, keluarga primbon memilih hari yang selaras dengan weton sang bayi agar acara membawa berkah.",
    tips: [
      "Hitung weton bayi dari tanggal lahirnya dengan kalkulator di atas.",
      "Bila aqiqah tidak bisa di hari ketujuh, pilih tanggal dengan pasaran Legi atau Pahing.",
      "Selaraskan juga dengan weton kedua orang tua bila keluarga menghendaki.",
    ],
  },
  {
    slug: "bepergian-jauh",
    title: "Hari Baik Bepergian Jauh",
    keyword: "hari baik bepergian menurut primbon jawa",
    desc: "Merantau, mudik, atau perjalanan jauh menurut primbon Jawa baiknya dimulai pada hari yang 'ringan' untuk weton Anda — tujuannya keselamatan di jalan dan kelancaran di tempat tujuan. Pasaran Kliwon dan hari Rabu sering disebut baik untuk memulai perjalanan.",
    tips: [
      "Hitung weton Anda, lalu hindari memulai perjalanan pada hari yang hitungannya 'bentrok' dengan weton.",
      "Rabu (energi 'daun', luwes) dan Kliwon dipercaya melindungi perjalanan.",
      "Untuk merantau, sebagian tradisi juga memperhitungkan arah tujuan perjalanan.",
    ],
  },
  {
    slug: "potong-rambut-kuku",
    title: "Hari Baik Potong Rambut & Kuku",
    keyword: "hari baik potong rambut potong kuku menurut islam dan primbon",
    desc: "Dalam tradisi Jawa dan anjuran Islam, memotong rambut dan kuku punya hari-hari yang dianggap lebih baik. Anjuran populer menyebut hari Jumat sebagai hari baik, sementara primbon Jawa menambahkan perhitungan berdasarkan pasaran.",
    tips: [
      "Jumat umumnya dianggap hari terbaik untuk bersih diri dalam tradisi Islam-Jawa.",
      "Sebagian primbon menyarankan menghindari hari weton Anda sendiri untuk memotong kuku malam hari.",
      "Tradisi ini lebih ke anjuran adab, bukan larangan keras.",
    ],
  },
];

export const FAQ_HOME = [
  {
    q: "Apa itu weton?",
    a: "Weton adalah gabungan hari lahir (Senin–Minggu) dan pasaran Jawa (Legi, Pahing, Pon, Wage, Kliwon). Ada 35 kombinasi weton, dan masing-masing punya nilai neptu yang dipakai untuk membaca watak, rezeki, dan kecocokan jodoh menurut primbon Jawa.",
  },
  {
    q: "Bagaimana cara menghitung weton?",
    a: "Cukup masukkan tanggal lahir di kalkulator di atas. Sistem kami menentukan hari dan pasaran Jawa dari tanggal tersebut, lalu menjumlahkan neptunya. Anda tidak perlu menghafal tabel neptu atau menghitung manual.",
  },
  {
    q: "Apa itu neptu?",
    a: "Neptu adalah nilai angka dari hari dan pasaran. Neptu hari: Minggu 5, Senin 4, Selasa 3, Rabu 7, Kamis 8, Jumat 6, Sabtu 9. Neptu pasaran: Legi 5, Pahing 9, Pon 7, Wage 4, Kliwon 8. Weton = neptu hari + neptu pasaran.",
  },
  {
    q: "Bagaimana cara menghitung kecocokan jodoh weton?",
    a: "Jumlahkan neptu weton Anda dan pasangan, lalu bagi 8 dan ambil sisanya. Sisa 1=Pegat, 2=Ratu, 3=Jodoh, 4=Topo, 5=Tinari, 6=Padu, 7=Sujanan, 0=Pesthi. Setiap kategori punya makna tersendiri dalam primbon Jawa.",
  },
  {
    q: "Apakah hasil hitungan weton menentukan nasib?",
    a: "Tidak. Weton adalah warisan budaya Jawa untuk perenungan dan pertimbangan, bukan vonis mutlak. Banyak pasangan 'Pegat' yang langgeng dan banyak 'Jodoh' yang gagal — gunakan sebagai bahan refleksi, bukan pengganti komunikasi dan usaha.",
  },
  {
    q: "Apakah kalkulator ini gratis?",
    a: "Ya, 100% gratis dan tanpa perlu mendaftar. Semua perhitungan berjalan di perangkat Anda sendiri — tanggal lahir yang Anda masukkan tidak dikirim ke server kami.",
  },
];
