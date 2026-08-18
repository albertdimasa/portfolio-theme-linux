import { ref } from 'vue'

const translations = {
  id: {
    'topbar.title': 'Aktivitas',
    'topbar.prompt': 'albert@portfolio: ~',
    'dock.home': 'Beranda',
    'dock.about': 'Tentang',
    'dock.skills': 'Pembelajaran',
    'dock.work': 'Pengalaman',
    'dock.projects': 'Proyek',
    'dock.edu': 'Pendidikan',
    'dock.contact': 'Kontak',
    'hero.win_title': 'albert@portfolio: ~',
    'hero.whoami': 'whoami',
    'hero.name': 'Dimas Albert Abraham',
    'hero.title':
      'Full-Stack Developer &amp; <span style="color:var(--orange);">SAP ABAPer</span> (3+ tahun), spesialis Laravel &amp; Nuxt.js untuk aplikasi enterprise.',
    'hero.bio':
      '3+ tahun mengemban peran SAP ABAPer &amp; Full-Stack Developer — membangun arsitektur ERP berskala besar, integrasi enterprise SAP, hingga aplikasi web kustom berperforma tinggi.',
    'hero.btn_contact': 'Hubungi Saya',
    'hero.btn_work': 'Lihat Karya',
    'hero.cat_cmd': 'cat profesional_summary.md',
    'hero.detail_p1':
      'Results-oriented Full-Stack Developer dan <strong style="color:var(--orange);">SAP ABAPer dengan 3+ tahun pengalaman</strong>. Berspesialisasi pada ekosistem <strong style="color:var(--orange);">Laravel</strong>, framework <strong style="color:var(--orange);">Nuxt.js</strong>, dan modul <strong style="color:#fff;">SAP ABAP</strong>, terbukti berpengalaman merancang serta memelihara sistem <strong style="color:#fff;">ERP enterprise kompleks</strong> hingga aplikasi web kustom berperforma tinggi.',
    'hero.detail_p2':
      'Menjembatani integrasi back-end enterprise yang solid dengan antarmuka front-end yang mulus, cepat, reaktif, dan ramah SEO. Bersemangat menulis kode bersih dan memecahkan tantangan teknis terdekopel untuk solusi skalabel.',
    'hero.location': 'Gresik, Indonesia',
    'about.win_title': 'about.md — Text Editor',
    'about.header': '# Tentang Saya',
    'about.p1':
      'Saya seorang Full-Stack Developer dan SAP ABAPer dengan 3+ tahun pengalaman, berspesialisasi di ekosistem Laravel, Nuxt.js, dan pengembangan sistem ERP/SAP enterprise.',
    'about.p2':
      'Saya merancang sistem backend yang kokoh serta antarmuka reaktif modern, memadukan keahlian integrasi enterprise dengan pengembangan web modern.',
    'about.detail_header': '# Tentang Saya — detail',
    'about.detail_p1':
      'Saya seorang <strong>Full-Stack Developer</strong> dan <strong>SAP ABAPer</strong> dengan lebih dari 3 tahun pengalaman. Berpengalaman luas dalam pengembangan <strong>Laravel, Nuxt.js</strong>, serta penyesuaian modul dan integrasi sistem <strong>SAP ABAP</strong> enterprise.',
    'about.detail_p2':
      'Dengan menghubungkan logika bisnis back-end yang andal dan antarmuka front-end yang reaktif serta ramah SEO, saya berkomitmen menghadirkan solusi perangkat lunak yang bersih, skalabel, dan bernilai tinggi bagi organisasi enterprise.',
    'about.values_label': 'NILAI UTAMA',
    'skills.win_title': 'what-i-learned --list',
    'skills.header': 'Apa Yang Saya Pelajari',
    'skills.verbose_cmd': '# what-i-learned --verbose',
    'skills.detail_header': '# Dokumentasi & Pembelajaran Arsitektur',
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
    'work.role0': 'SAP ABAPer',
    'work.company0': 'Yada Technology · Agu 2026–Sekarang',
    'work.role1': 'Back End Developer',
    'work.company1': 'OMNI IT CONSULTING · Jan 2023–Jul 2026',
    'work.role2': 'ABAPer &amp; PI Technician',
    'work.company2': 'PT Sinergi Informatika Semen Indonesia · Mei 2023–Jan 2025',
    'work.role3': 'Teacher – Part Time',
    'work.company3': 'ALGORITHMICS · Sep 2024–Feb 2025',
    'work.detail_date0': 'Agu 2026–Sekarang · Bandung, Jawa Barat',
    'work.detail_bullet0_1':
      'Ditempatkan di PT Kereta Api Indonesia (Persero) untuk menguji, memelihara, serta mengembangkan modul SAP ABAP dan integrasi sistem enterprise.',
    'work.detail_date1': 'Jan 2023–Jul 2026 · Remote',
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
    'edu.activities_label': 'Pengalaman / Kegiatan',
    'modal.problem_label': 'MASALAH',
    'modal.solution_label': 'SOLUSI',
    'modal.stack_label': 'STACK',
  },
  en: {
    'topbar.title': 'Activities',
    'topbar.prompt': 'albert@portfolio: ~',
    'dock.home': 'Home',
    'dock.about': 'About',
    'dock.skills': 'Learnings',
    'dock.work': 'Experience',
    'dock.projects': 'Projects',
    'dock.edu': 'Education',
    'dock.contact': 'Contact',
    'hero.win_title': 'albert@portfolio: ~',
    'hero.whoami': 'whoami',
    'hero.name': 'Dimas Albert Abraham',
    'hero.title':
      'Full-Stack Developer &amp; <span style="color:var(--orange);">SAP ABAPer</span> (3+ years), specializing in Laravel &amp; Nuxt.js for enterprise applications.',
    'hero.bio':
      '3+ years combining SAP ABAPer &amp; Full-Stack Developer roles — building large-scale ERP architectures, SAP enterprise integrations, and high-performance custom web applications.',
    'hero.btn_contact': 'Contact Me',
    'hero.btn_work': 'View Work',
    'hero.cat_cmd': 'cat professional_summary.md',
    'hero.detail_p1':
      'Results-oriented Full-Stack Developer and <strong style="color:var(--orange);">SAP ABAPer with 3+ years of experience</strong>. Specializing in the <strong style="color:var(--orange);">Laravel</strong> ecosystem, <strong style="color:var(--orange);">Nuxt.js</strong> framework, and <strong style="color:#fff;">SAP ABAP</strong> modules, proven in designing and maintaining <strong style="color:#fff;">complex enterprise ERP systems</strong> to high-performance custom web sites.',
    'hero.detail_p2':
      'Bridging solid enterprise back-end logic with seamless, fast, reactive, and SEO-friendly front-end interfaces. Passionate about writing clean code and solving complex technical challenges for scalable solutions.',
    'hero.location': 'Gresik, Indonesia',
    'about.win_title': 'about.md — Text Editor',
    'about.header': '# About Me',
    'about.p1':
      'I am a Full-Stack Developer and SAP ABAPer with over 3 years of experience, specializing in Laravel, Nuxt.js, and enterprise ERP/SAP development.',
    'about.p2':
      'I bridge robust backend logic with seamless reactive interfaces, combining enterprise integration skills with modern web development.',
    'about.detail_header': '# About Me — details',
    'about.detail_p1':
      'I am a <strong>Full-Stack Developer</strong> and <strong>SAP ABAPer</strong> with over 3 years of experience. Specializing in <strong>Laravel, Nuxt.js</strong>, and enterprise <strong>SAP ABAP</strong> module customization and system integrations.',
    'about.detail_p2':
      'By connecting reliable back-end business logic and reactive, SEO-friendly front-end interfaces, I am committed to delivering clean, maintainable, and high-value software solutions for enterprise organizations.',
    'about.values_label': 'CORE VALUES',
    'skills.win_title': 'what-i-learned --list',
    'skills.header': 'What I Learned',
    'skills.verbose_cmd': '# what-i-learned --verbose',
    'skills.detail_header': '# Architecture Documentation &amp; Learnings',
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
    'work.role0': 'SAP ABAPer',
    'work.company0': 'Yada Technology · Aug 2026–Present',
    'work.role1': 'Back End Developer',
    'work.company1': 'OMNI IT CONSULTING · Jan 2023–July 2026',
    'work.role2': 'ABAPer &amp; PI Technician',
    'work.company2': 'PT Sinergi Informatika Semen Indonesia · May 2023–Jan 2025',
    'work.role3': 'Teacher – Part Time',
    'work.company3': 'ALGORITHMICS · Sep 2024–Feb 2025',
    'work.detail_date0': 'Aug 2026–Present · Bandung, West Java',
    'work.detail_bullet0_1':
      'Stationed at PT Kereta Api Indonesia (Persero) to test, maintain, and develop SAP ABAP modules and enterprise system integrations.',
    'work.detail_date1': 'Jan 2023–July 2026 · Remote',
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
    'edu.activities_label': 'Activities / Experience',
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
