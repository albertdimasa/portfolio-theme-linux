import { ref } from 'vue'

const translations = {
  id: {
    'topbar.title': 'Aktivitas',
    'topbar.prompt': 'albert@portfolio: ~',
    'dock.home': 'Beranda',
    'dock.about': 'Tentang',
    'dock.skills': 'Keahlian',
    'dock.work': 'Pengalaman',
    'dock.projects': 'Proyek',
    'dock.edu': 'Pendidikan',
    'dock.contact': 'Kontak',
    'hero.win_title': 'albert@portfolio: ~',
    'hero.whoami': 'whoami',
    'hero.name': 'Dimas Albert Abraham',
    'hero.title':
      'Full-Stack Developer, spesialis <span style="color:var(--orange);">Laravel &amp; Nuxt.js</span> untuk aplikasi enterprise.',
    'hero.bio':
      '3+ tahun membangun aplikasi web dari ujung ke ujung — dari arsitektur ERP berskala besar hingga situs khusus berperforma tinggi. Berbasis di Gresik, bekerja dengan tim di mana saja.',
    'hero.btn_contact': 'Hubungi Saya',
    'hero.btn_work': 'Lihat Karya',
    'hero.cat_cmd': 'cat profesional_summary.md',
    'hero.detail_p1':
      'Results-oriented Full-Stack Developer dengan lebih dari <strong style="color:#fff;">3 tahun pengalaman</strong> yang berspesialisasi di ekosistem <strong style="color:var(--orange);">Laravel</strong> dan framework <strong style="color:var(--orange);">Nuxt.js</strong>, terbukti mampu merancang dan memelihara aplikasi web yang kokoh — mulai dari sistem <strong style="color:#fff;">ERP kompleks</strong> hingga situs kustom berperforma tinggi.',
    'hero.detail_p2':
      'Menjembatani logika back-end yang kuat dengan antarmuka front-end yang mulus, menggunakan Nuxt.js untuk menghadirkan pengalaman pengguna yang cepat, reaktif, dan ramah SEO. Bersemangat menulis kode bersih dan memecahkan tantangan teknis untuk solusi skalabel bagi audiens global.',
    'hero.location': 'Gresik, Indonesia',
    'about.win_title': 'about.md — Text Editor',
    'about.header': '# Tentang Saya',
    'about.p1':
      'Saya seorang Full-Stack Developer dengan lebih dari 3 tahun pengalaman, khusus di ekosistem Laravel dan Nuxt.js. Saya merancang dan memelihara aplikasi web yang kokoh — mulai dari sistem ERP yang kompleks hingga situs kustom berperforma tinggi.',
    'about.p2':
      'Saya menghubungkan logika back-end yang kuat dengan antarmuka front-end yang mulus, dan selalu bersemangat menulis kode yang bersih serta mudah dipelihara untuk solusi yang melayani audiens global.',
    'about.detail_header': '# Tentang Saya — detail',
    'about.detail_p1':
      'Saya seorang <strong>Full-Stack Developer</strong> dengan lebih dari 3 tahun pengalaman, khusus di ekosistem <strong>Laravel</strong> dan framework <strong>Nuxt.js</strong>. Saya merancang dan memelihara aplikasi web yang kokoh — mulai dari sistem ERP yang kompleks hingga situs kustom berperforma tinggi.',
    'about.detail_p2':
      'Dengan menjembatani logika back-end yang kuat dan antarmuka front-end yang mulus, saya menggunakan Nuxt.js untuk menghadirkan pengalaman yang <strong>ramah SEO, reaktif, dan cepat</strong>. Saya bersemangat menulis kode yang bersih, mudah dipelihara, dan memecahkan tantangan teknis rumit untuk memberikan solusi perangkat lunak yang skalabel bagi audiens global.',
    'about.values_label': 'NILAI UTAMA',
    'skills.win_title': 'skills --list',
    'skills.lang_label': 'BAHASA',
    'skills.framework_label': 'FRAMEWORK',
    'skills.tools_label': 'TOOLS &amp; INFRA',
    'skills.verbose_cmd': '# all-skills --verbose',
    'skills.detail_lang': 'BAHASA PEMROGRAMAN',
    'skills.detail_frontend': 'FRAMEWORK — FRONTEND',
    'skills.detail_backend': 'FRAMEWORK — BACKEND',
    'skills.detail_tools': 'DEVELOPER TOOLS',
    'skills.detail_devops': 'DEVOPS &amp; INFRA',
    'skills.detail_sap': 'SAP PLATFORMS',
    'skills.courses_label': 'KURSUS ONLINE',
    'contact.win_title': 'contact --send',
    'contact.detail_header': '# Contact',
    'contact.location': 'Gresik, Indonesia',
    'work.win_title': 'work_history.log',
    'work.role1': 'Back End Developer',
    'work.company1': 'OMNI IT CONSULTING · Jan 2023–Sekarang',
    'work.role2': 'ABAPer &amp; PI Technician',
    'work.company2': 'PT Sinergi Informatika Semen Indonesia · Mei 2023–Jan 2025',
    'work.role3': 'Teacher – Part Time',
    'work.company3': 'ALGORITHMICS · Sep 2024–Feb 2025',
    'work.detail_date1': 'Jan 2023–Sekarang · Remote',
    'work.detail_bullet1_1':
      'Merancang sistem ERP end-to-end menggunakan Laravel dan React.js, diperluas dengan microservices Express.js dan notifikasi OneSignal.',
    'work.detail_bullet1_2':
      'Memimpin siklus hidup ERP untuk 2 klien dan maintenance untuk 2 klien lain, menghadirkan solusi yang stabil dan skalabel.',
    'work.detail_bullet1_3':
      'Membimbing tim 2 developer melalui setiap fase SDLC — dari perencanaan hingga deployment.',
    'work.detail_date2': 'Mei 2023–Jan 2025 · Gresik',
    'work.detail_bullet2_1': 'Menyelesaikan lebih dari 163 task dan terus bertambah.',
    'work.detail_bullet2_2':
      'Mengembangkan dan memodifikasi program menggunakan SE38, membuat RFC via SE37 untuk integrasi sistem.',
    'work.detail_bullet2_3':
      'Merancang Smartforms, mengembangkan keahlian di BAPI, Enhancements, dan BDC.',
    'work.detail_date3': 'Sep 2024–Feb 2025 · Remote',
    'work.detail_bullet3_1':
      'Mengelola 10 kelas (grup &amp; privat) dengan pendekatan yang disesuaikan untuk setiap siswa.',
    'work.detail_bullet3_2': 'Mengajar lebih dari 100 jam kepada hingga 60 siswa.',
    'work.detail_bullet3_3':
      'Berkordinasi aktif dengan orang tua untuk memantau dan melaporkan progres belajar.',
    'work.detail_date4': 'Sep 2022–Mar 2023 · Jakarta Barat',
    'work.detail_bullet4_1': 'Membantu masalah jaringan dan hardware hingga 10 masalah per hari.',
    'work.detail_bullet4_2': 'Mendukung Warehouse Management System (WMS) Web App.',
    'work.detail_bullet4_3': 'Membuat modul baru untuk Warehouse Management System (WMS).',
    'projects.win_title': 'projects',
    'projects.desc1': 'Katalog Elektronik Riset &amp; Inovasi Sumenep',
    'projects.desc2': 'Catat order masuk &amp; retur barang',
    'projects.desc3': 'Catat pemasukan &amp; pengeluaran kas',
    'projects.desc4': 'Fungsi kasir, admin, dan supplier',
    'projects.desc5': 'Sistem pendaftaran santri baru',
    'projects.detail_header': '# Semua Proyek',
    'projects.date1': 'Oktober 2025',
    'projects.detail_desc1':
      'Sistem katalog digital terpusat untuk riset dan inovasi daerah, dioptimalkan untuk tampilan Digital Signage.',
    'projects.date2': 'Desember 2022',
    'projects.detail_desc2':
      'Website pencatatan order masuk dan retur barang, dibangun dalam 1 bulan.',
    'projects.date3': 'November 2022',
    'projects.detail_desc3':
      'Website pencatatan pemasukan dan pengeluaran kas, dibangun dalam 1 minggu.',
    'projects.date4': 'Juni 2022',
    'projects.detail_desc4':
      'Fungsi kasir, admin, dan supplier. Terintegrasi dengan thermal printer 58mm dan fitur export laporan Excel. Dibangun dalam 1 bulan.',
    'projects.date5': 'Februari 2022',
    'projects.detail_desc5':
      'Fungsi registrasi santri, otorisasi dan verifikasi dari admin, serta bukti pendaftaran. Dibangun dalam 2 minggu.',
    'edu.win_title': 'edu.log',
    'edu.degree': 'S.Kom. Informatika',
    'edu.school': 'Universitas Internasional Semen Indonesia',
    'edu.detail_header': '# riwayat pendidikan',
    'edu.school1_name': 'Universitas Internasional Semen Indonesia',
    'edu.school1_degree': 'S.Kom. Informatika — <strong>GPA 3.74/4.0</strong>',
    'edu.school1_scholarship': 'Penerima PPA Dikti Scholarship 2019 (1 Semester)',
    'edu.school2_log': 'Nov 2019 · Rajamangala University of Technology Krungthep',
    'edu.school2_name': 'Rajamangala University of Technology Krungthep',
    'edu.school2_date': 'November 2019 · Bangkok, Thailand',
    'edu.school2_program': 'Sit In Student — terpilih dari 10 orang untuk program 3 minggu.',
    'edu.school2_detail':
      'Mempelajari: management creativity &amp; business innovation, English for conversation, ethics in international business, general psychology, international business policy &amp; trade theory, dan Thai culture.',
    'edu.edu3_title': 'Assistant Lecturer',
    'edu.edu3_date': 'Oct 2021 - Jan 2022 · 4 mos',
    'edu.edu3_desc':
      'Membantu koreksi tugas dan konsultasi terkait tugas pemrograman pada mata kuliah kecerdasan buatan.',
    'edu.edu3_skills': 'Skills: Artificial Intelligence (AI)',
    'edu.edu4_title': 'Campus Ambassador',
    'edu.edu4_type': 'Freelance',
    'edu.edu4_date': 'Oct 2019 - Nov 2021 · 2 yrs 2 mos',
    'edu.edu4_location': 'Gresik, East Java, Indonesia',
    'edu.edu4_desc':
      'Sebagai campus ambassador, saya bekerja langsung dengan calon mahasiswa atau orang tua mereka untuk memperkenalkan kampus UISI. Selain itu, beberapa kegiatan lain yang saya lakukan antara lain:<ul class="list-disc pl-4 mt-1"><li>Mempromosikan kampus ke siswa SMA.</li><li>Menjadi master of ceremony atau moderator di sebuah acara.</li><li>Mendukung acara untuk memperkenalkan kampus.</li></ul>',
    'edu.edu4_skills': 'Skills: Public Speaking, Marketing',
    'edu.edu5_title': 'Sahabat Kemahasiswaan',
    'edu.edu5_type': 'Internship',
    'edu.edu5_date': 'May 2021 - Oct 2021 · 6 mos',
    'edu.edu5_location': 'Gresik, East Java, Indonesia',
    'edu.edu5_desc':
      'Selama magang, saya mendapatkan banyak pengetahuan di bidang administrasi dan desain. Selanjutnya, tindakan saya adalah sebagai berikut:<ul class="list-disc pl-4 mt-1"><li>Meninjau Terms Of Reference (TOR) dan laporan pertanggungjawaban (PJK) dari organisasi mahasiswa di UISI</li><li>Mendesain feed instagram, sertifikat, dan lain-lain</li><li>Input data di Simkatmawa</li></ul>',
    'edu.edu5_skills': 'Skills: Canva, Office Administration',
    'modal.problem_label': 'MASALAH',
    'modal.solution_label': 'SOLUSI',
    'modal.stack_label': 'STACK',
  },
  en: {
    'topbar.title': 'Activities',
    'topbar.prompt': 'albert@portfolio: ~',
    'dock.home': 'Home',
    'dock.about': 'About',
    'dock.skills': 'Skills',
    'dock.work': 'Experience',
    'dock.projects': 'Projects',
    'dock.edu': 'Education',
    'dock.contact': 'Contact',
    'hero.win_title': 'albert@portfolio: ~',
    'hero.whoami': 'whoami',
    'hero.name': 'Dimas Albert Abraham',
    'hero.title':
      'Full-Stack Developer, specializing in <span style="color:var(--orange);">Laravel &amp; Nuxt.js</span> for enterprise applications.',
    'hero.bio':
      '3+ years building web applications end-to-end — from large-scale ERP architectures to high-performance custom sites. Based in Gresik, working with teams anywhere.',
    'hero.btn_contact': 'Contact Me',
    'hero.btn_work': 'View Work',
    'hero.cat_cmd': 'cat professional_summary.md',
    'hero.detail_p1':
      'Results-oriented Full-Stack Developer with over <strong style="color:#fff;">3 years of experience</strong> specializing in the <strong style="color:var(--orange);">Laravel</strong> ecosystem and <strong style="color:var(--orange);">Nuxt.js</strong> framework, proven in designing and maintaining robust web applications — from <strong style="color:#fff;">complex ERP systems</strong> to high-performance custom sites.',
    'hero.detail_p2':
      'Bridging strong back-end logic with seamless front-end interfaces, using Nuxt.js to deliver fast, reactive, and SEO-friendly user experiences. Passionate about writing clean code and solving technical challenges for scalable solutions serving a global audience.',
    'hero.location': 'Gresik, Indonesia',
    'about.win_title': 'about.md — Text Editor',
    'about.header': '# About Me',
    'about.p1':
      'I am a Full-Stack Developer with more than 3 years of experience, specializing in the Laravel and Nuxt.js ecosystems. I design and maintain robust web applications — from complex ERP systems to high-performance custom sites.',
    'about.p2':
      'I bridge strong back-end logic with seamless front-end interfaces, always passionate about writing clean, maintainable code for solutions that serve a global audience.',
    'about.detail_header': '# About Me — details',
    'about.detail_p1':
      'I am a <strong>Full-Stack Developer</strong> with over 3 years of experience, specializing in the <strong>Laravel</strong> ecosystem and <strong>Nuxt.js</strong> framework. I design and maintain robust web applications — from complex ERP systems to high-performance custom sites.',
    'about.detail_p2':
      'By bridging strong back-end logic and seamless front-end interfaces, I use Nuxt.js to deliver <strong>SEO-friendly, reactive, and fast</strong> experiences. I am passionate about writing clean, maintainable code and solving complex technical challenges to deliver scalable software solutions for a global audience.',
    'about.values_label': 'CORE VALUES',
    'skills.win_title': 'skills --list',
    'skills.lang_label': 'LANGUAGES',
    'skills.framework_label': 'FRAMEWORKS',
    'skills.tools_label': 'TOOLS &amp; INFRA',
    'skills.verbose_cmd': '# all-skills --verbose',
    'skills.detail_lang': 'PROGRAMMING LANGUAGES',
    'skills.detail_frontend': 'FRAMEWORKS — FRONTEND',
    'skills.detail_backend': 'FRAMEWORKS — BACKEND',
    'skills.detail_tools': 'DEVELOPER TOOLS',
    'skills.detail_devops': 'DEVOPS &amp; INFRA',
    'skills.detail_sap': 'SAP PLATFORMS',
    'skills.courses_label': 'ONLINE COURSES',
    'contact.win_title': 'contact --send',
    'contact.detail_header': '# Contact',
    'contact.location': 'Gresik, Indonesia',
    'work.win_title': 'work_history.log',
    'work.role1': 'Back End Developer',
    'work.company1': 'OMNI IT CONSULTING · Jan 2023–Present',
    'work.role2': 'ABAPer &amp; PI Technician',
    'work.company2': 'PT Sinergi Informatika Semen Indonesia · May 2023–Jan 2025',
    'work.role3': 'Teacher – Part Time',
    'work.company3': 'ALGORITHMICS · Sep 2024–Feb 2025',
    'work.detail_date1': 'Jan 2023–Present · Remote',
    'work.detail_bullet1_1':
      'Designed end-to-end ERP systems using Laravel and React.js, extended with Express.js microservices and OneSignal notifications.',
    'work.detail_bullet1_2':
      'Led the ERP lifecycle for 2 clients and maintenance for 2 other clients, delivering stable and scalable solutions.',
    'work.detail_bullet1_3':
      'Mentored a team of 2 developers through every SDLC phase — from planning to deployment.',
    'work.detail_date2': 'May 2023–Jan 2025 · Gresik',
    'work.detail_bullet2_1': 'Completed over 163 tasks and counting.',
    'work.detail_bullet2_2':
      'Developed and modified programs using SE38, created RFCs via SE37 for system integration.',
    'work.detail_bullet2_3':
      'Designed Smartforms, developed expertise in BAPI, Enhancements, and BDC.',
    'work.detail_date3': 'Sep 2024–Feb 2025 · Remote',
    'work.detail_bullet3_1':
      'Managed 10 classes (group &amp; private) with a tailored approach for each student.',
    'work.detail_bullet3_2': 'Taught over 100 hours to up to 60 students.',
    'work.detail_bullet3_3':
      'Actively coordinated with parents to monitor and report learning progress.',
    'work.detail_date4': 'Sep 2022–Mar 2023 · West Jakarta',
    'work.detail_bullet4_1': 'Resolved network and hardware issues up to 10 problems per day.',
    'work.detail_bullet4_2': 'Supported Warehouse Management System (WMS) Web App.',
    'work.detail_bullet4_3': 'Created new modules for the Warehouse Management System (WMS).',
    'projects.win_title': 'projects/ (click for details)',
    'projects.desc1': 'Sumenep Research &amp; Innovation E-Catalog',
    'projects.desc2': 'Track incoming orders &amp; returns',
    'projects.desc3': 'Track income &amp; expenses',
    'projects.desc4': 'Cashier, admin, and supplier functions',
    'projects.desc5': 'Student registration functions',
    'projects.detail_header': '# All Projects',
    'projects.date1': 'October 2025',
    'projects.detail_desc1':
      'A centralized digital catalog system for regional research and innovation, optimized for Digital Signage display.',
    'projects.date2': 'December 2022',
    'projects.detail_desc2':
      'Website for tracking incoming orders and goods returns, built in 1 month.',
    'projects.date3': 'November 2022',
    'projects.detail_desc3': 'Website for tracking income and expenses, built in 1 week.',
    'projects.date4': 'June 2022',
    'projects.detail_desc4':
      'Cashier, admin, and supplier functions. Integrated with 58mm thermal printer and Excel export. Built in 1 month.',
    'projects.date5': 'February 2022',
    'projects.detail_desc5':
      'Student registration functions with admin authorization, verification, and registration proof. Built in 2 weeks.',
    'edu.win_title': 'edu.log',
    'edu.degree': 'S.Kom. Informatics',
    'edu.school': 'Universitas Internasional Semen Indonesia',
    'edu.detail_header': '# education history',
    'edu.school1_name': 'Universitas Internasional Semen Indonesia',
    'edu.school1_degree': 'S.Kom. Informatics — <strong>GPA 3.74/4.0</strong>',
    'edu.school1_scholarship': 'PPA Dikti Scholarship Recipient 2019 (1 Semester)',
    'edu.school2_log': 'Nov 2019 · Rajamangala University of Technology Krungthep',
    'edu.school2_name': 'Rajamangala University of Technology Krungthep',
    'edu.school2_date': 'November 2019 · Bangkok, Thailand',
    'edu.school2_program': 'Sit In Student — selected from 10 candidates for a 3-week program.',
    'edu.school2_detail':
      'Studied: management creativity &amp; business innovation, English for conversation, ethics in international business, general psychology, international business policy &amp; trade theory, and Thai culture.',
    'edu.edu3_title': 'Assistant Lecturer',
    'edu.edu3_date': 'Oct 2021 - Jan 2022 · 4 mos',
    'edu.edu3_desc':
      'Help with assignment corrections and consulting related to assignments about programming in artificial intelligence courses.',
    'edu.edu3_skills': 'Skills: Artificial Intelligence (AI)',
    'edu.edu4_title': 'Campus Ambassador',
    'edu.edu4_type': 'Freelance',
    'edu.edu4_date': 'Oct 2019 - Nov 2021 · 2 yrs 2 mos',
    'edu.edu4_location': 'Gresik, East Java, Indonesia',
    'edu.edu4_desc':
      'As a campus ambassador, I work directly with prospective students or their parents to introduce the UISI campus. Apart from that, some other activities that I do include the following:<ul class="list-disc pl-4 mt-1"><li>Promote campus to high school students.</li><li>Be a master of ceremony or moderator at an event.</li><li>Support an event to introduce campus.</li></ul>',
    'edu.edu4_skills': 'Skills: Public Speaking, Marketing',
    'edu.edu5_title': 'Sahabat Kemahasiswaan',
    'edu.edu5_type': 'Internship',
    'edu.edu5_date': 'May 2021 - Oct 2021 · 6 mos',
    'edu.edu5_location': 'Gresik, East Java, Indonesia',
    'edu.edu5_desc':
      'During the internship, I gained a lot of knowledge in the fields of administration and design. Subsequently, my actions were as follows:<ul class="list-disc pl-4 mt-1"><li>Review Terms Of Reference (TOR) and accountability reports (PJK) from student organizations at UISI</li><li>Design instagram feeds, certificates, and etc</li><li>Input data on Simkatmawa</li></ul>',
    'edu.edu5_skills': 'Skills: Canva, Office Administration',
    'modal.problem_label': 'PROBLEM',
    'modal.solution_label': 'SOLUTION',
    'modal.stack_label': 'STACK',
  },
}

const currentLang = ref('id')

export function useI18n() {
  function t(key) {
    return translations[currentLang.value]?.[key] ?? key
  }

  function setLang(lang) {
    currentLang.value = lang
  }

  function toggleLang() {
    currentLang.value = currentLang.value === 'id' ? 'en' : 'id'
  }

  return { currentLang, t, setLang, toggleLang }
}
