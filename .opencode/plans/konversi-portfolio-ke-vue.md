# Rencana: Konversi Portfolio Static ke Vue 3 + Tailwind

## 1. Update `vite.config.js`

Tambahkan plugin `@tailwindcss/vite`:

```js
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  // ... sisanya tetap
})
```

## 2. Buat `src/assets/main.css`

```css
@import 'tailwindcss';

:root {
  --wall-1: #2c001e;
  --wall-2: #77216f;
  --wall-3: #150014;
  --panel: #f2f1f0;
  --panel-head: #eae8e7;
  --panel-border: #d7d5d3;
  --text-dark: #2b2b2b;
  --muted-dark: #6e6e6e;
  --orange: #e95420;
  --orange-dark: #c34113;
  --purple: #77216f;
  --term-bg1: #300a24;
  --term-bg2: #2c001e;
  --term-green: #8ae234;
  --term-blue: #729fcf;
  --term-text: #f2f1f0;
}

* { box-sizing: border-box; }

html, body {
  height: 100%; margin: 0;
  font-family: 'Ubuntu', sans-serif;
}

body {
  background:
    radial-gradient(circle at 85% 92%, rgba(233,84,32,0.18) 0%, transparent 45%),
    radial-gradient(circle at 12% 100%, rgba(119,33,111,0.35) 0%, transparent 55%),
    linear-gradient(160deg, var(--wall-2) 0%, var(--wall-1) 55%, var(--wall-3) 100%);
  color: var(--text-dark); overflow: hidden;
}

::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.25); border-radius: 8px; }
::-webkit-scrollbar-track { background: transparent; }

@media (max-width: 900px) {
  html, body { height: auto; overflow-y: auto; }
}
```

## 3. Update `src/main.js`

```js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

createApp(App).mount('#app')
```

## 4. Buat `src/composables/useI18n.js`

```js
import { ref, computed } from 'vue'

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
    'hero.title': 'Full-Stack Developer, spesialis <span style="color:var(--orange);">Laravel &amp; Nuxt.js</span> untuk aplikasi enterprise.',
    'hero.bio': '3+ tahun membangun aplikasi web dari ujung ke ujung — dari arsitektur ERP berskala besar hingga situs khusus berperforma tinggi. Berbasis di Gresik, bekerja dengan tim di mana saja.',
    'hero.btn_contact': 'Hubungi Saya',
    'hero.btn_work': 'Lihat Karya',
    'hero.cat_cmd': 'cat profesional_summary.md',
    'hero.detail_p1': 'Results-oriented Full-Stack Developer dengan lebih dari <strong style="color:#fff;">3 tahun pengalaman</strong> yang berspesialisasi di ekosistem <strong style="color:var(--orange);">Laravel</strong> dan framework <strong style="color:var(--orange);">Nuxt.js</strong>, terbukti mampu merancang dan memelihara aplikasi web yang kokoh — mulai dari sistem <strong style="color:#fff;">ERP kompleks</strong> hingga situs kustom berperforma tinggi.',
    'hero.detail_p2': 'Menjembatani logika back-end yang kuat dengan antarmuka front-end yang mulus, menggunakan Nuxt.js untuk menghadirkan pengalaman pengguna yang cepat, reaktif, dan ramah SEO. Bersemangat menulis kode bersih dan memecahkan tantangan teknis untuk solusi skalabel bagi audiens global.',
    'hero.location': 'Gresik, Indonesia',
    'about.win_title': 'about.md — Text Editor',
    'about.header': '# Tentang Saya',
    'about.p1': 'Saya seorang Full-Stack Developer dengan lebih dari 3 tahun pengalaman, khusus di ekosistem Laravel dan Nuxt.js. Saya merancang dan memelihara aplikasi web yang kokoh — mulai dari sistem ERP yang kompleks hingga situs kustom berperforma tinggi.',
    'about.p2': 'Saya menghubungkan logika back-end yang kuat dengan antarmuka front-end yang mulus, dan selalu bersemangat menulis kode yang bersih serta mudah dipelihara untuk solusi yang melayani audiens global.',
    'about.detail_header': '# Tentang Saya — detail',
    'about.detail_p1': 'Saya seorang <strong>Full-Stack Developer</strong> dengan lebih dari 3 tahun pengalaman, khusus di ekosistem <strong>Laravel</strong> dan framework <strong>Nuxt.js</strong>. Saya merancang dan memelihara aplikasi web yang kokoh — mulai dari sistem ERP yang kompleks hingga situs kustom berperforma tinggi.',
    'about.detail_p2': 'Dengan menjembatani logika back-end yang kuat dan antarmuka front-end yang mulus, saya menggunakan Nuxt.js untuk menghadirkan pengalaman yang <strong>ramah SEO, reaktif, dan cepat</strong>. Saya bersemangat menulis kode yang bersih, mudah dipelihara, dan memecahkan tantangan teknis rumit untuk memberikan solusi perangkat lunak yang skalabel bagi audiens global.',
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
    'work.detail_bullet1_1': 'Merancang sistem ERP end-to-end menggunakan Laravel dan React.js, diperluas dengan microservices Express.js dan notifikasi OneSignal.',
    'work.detail_bullet1_2': 'Memimpin siklus hidup ERP untuk 2 klien dan maintenance untuk 2 klien lain, menghadirkan solusi yang stabil dan skalabel.',
    'work.detail_bullet1_3': 'Membimbing tim 2 developer melalui setiap fase SDLC — dari perencanaan hingga deployment.',
    'work.detail_date2': 'Mei 2023–Jan 2025 · Gresik',
    'work.detail_bullet2_1': 'Menyelesaikan lebih dari 163 task dan terus bertambah.',
    'work.detail_bullet2_2': 'Mengembangkan dan memodifikasi program menggunakan SE38, membuat RFC via SE37 untuk integrasi sistem.',
    'work.detail_bullet2_3': 'Merancang Smartforms, mengembangkan keahlian di BAPI, Enhancements, dan BDC.',
    'work.detail_date3': 'Sep 2024–Feb 2025 · Remote',
    'work.detail_bullet3_1': 'Mengelola 10 kelas (grup &amp; privat) dengan pendekatan yang disesuaikan untuk setiap siswa.',
    'work.detail_bullet3_2': 'Mengajar lebih dari 100 jam kepada hingga 60 siswa.',
    'work.detail_bullet3_3': 'Berkordinasi aktif dengan orang tua untuk memantau dan melaporkan progres belajar.',
    'projects.win_title': 'projects',
    'projects.desc1': 'Katalog Elektronik Riset &amp; Inovasi Sumenep',
    'projects.desc2': 'Catat order masuk &amp; retur barang',
    'projects.desc3': 'Catat pemasukan &amp; pengeluaran kas',
    'projects.detail_header': '# Semua Proyek',
    'projects.date1': 'Oktober 2025',
    'projects.detail_desc1': 'Sistem katalog digital terpusat untuk riset dan inovasi daerah, dioptimalkan untuk tampilan Digital Signage.',
    'projects.date2': 'Desember 2022',
    'projects.detail_desc2': 'Website pencatatan order masuk dan retur barang, dibangun dalam 1 bulan.',
    'projects.date3': 'November 2022',
    'projects.detail_desc3': 'Website pencatatan pemasukan dan pengeluaran kas, dibangun dalam 1 minggu.',
    'edu.win_title': 'edu.log',
    'edu.degree': 'S.Kom. Informatika',
    'edu.school': 'Universitas Internasional Semen Indonesia',
    'edu.detail_header': '# riwayat pendidikan',
    'edu.school1_name': 'Universitas Internasional Semen Indonesia',
    'edu.school1_degree': 'S.Kom. Informatika — <strong>GPA 3.74/4.0</strong>',
    'edu.school1_scholarship': 'Penerima PPA Dikti Scholarship 2019 (1 Semester)',
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
    'hero.title': 'Full-Stack Developer, specializing in <span style="color:var(--orange);">Laravel &amp; Nuxt.js</span> for enterprise applications.',
    'hero.bio': '3+ years building web applications end-to-end — from large-scale ERP architectures to high-performance custom sites. Based in Gresik, working with teams anywhere.',
    'hero.btn_contact': 'Contact Me',
    'hero.btn_work': 'View Work',
    'hero.cat_cmd': 'cat professional_summary.md',
    'hero.detail_p1': 'Results-oriented Full-Stack Developer with over <strong style="color:#fff;">3 years of experience</strong> specializing in the <strong style="color:var(--orange);">Laravel</strong> ecosystem and <strong style="color:var(--orange);">Nuxt.js</strong> framework, proven in designing and maintaining robust web applications — from <strong style="color:#fff;">complex ERP systems</strong> to high-performance custom sites.',
    'hero.detail_p2': 'Bridging strong back-end logic with seamless front-end interfaces, using Nuxt.js to deliver fast, reactive, and SEO-friendly user experiences. Passionate about writing clean code and solving technical challenges for scalable solutions serving a global audience.',
    'hero.location': 'Gresik, Indonesia',
    'about.win_title': 'about.md — Text Editor',
    'about.header': '# About Me',
    'about.p1': 'I am a Full-Stack Developer with more than 3 years of experience, specializing in the Laravel and Nuxt.js ecosystems.',
    'about.p2': 'I bridge strong back-end logic with seamless front-end interfaces, always passionate about writing clean, maintainable code.',
    'about.detail_header': '# About Me — details',
    'about.detail_p1': 'I am a <strong>Full-Stack Developer</strong> with over 3 years of experience, specializing in the <strong>Laravel</strong> ecosystem and <strong>Nuxt.js</strong> framework.',
    'about.detail_p2': 'By bridging strong back-end logic and seamless front-end interfaces, I use Nuxt.js to deliver <strong>SEO-friendly, reactive, and fast</strong> experiences.',
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
    'work.detail_bullet1_1': 'Designed end-to-end ERP systems using Laravel and React.js, extended with Express.js microservices and OneSignal notifications.',
    'work.detail_bullet1_2': 'Led the ERP lifecycle for 2 clients and maintenance for 2 other clients, delivering stable and scalable solutions.',
    'work.detail_bullet1_3': 'Mentored a team of 2 developers through every SDLC phase — from planning to deployment.',
    'work.detail_date2': 'May 2023–Jan 2025 · Gresik',
    'work.detail_bullet2_1': 'Completed over 163 tasks and counting.',
    'work.detail_bullet2_2': 'Developed and modified programs using SE38, created RFCs via SE37 for system integration.',
    'work.detail_bullet2_3': 'Designed Smartforms, developed expertise in BAPI, Enhancements, and BDC.',
    'work.detail_date3': 'Sep 2024–Feb 2025 · Remote',
    'work.detail_bullet3_1': 'Managed 10 classes (group &amp; private) with a tailored approach for each student.',
    'work.detail_bullet3_2': 'Taught over 100 hours to up to 60 students.',
    'work.detail_bullet3_3': 'Actively coordinated with parents to monitor and report learning progress.',
    'projects.win_title': 'projects/ (click for details)',
    'projects.desc1': 'Sumenep Research &amp; Innovation E-Catalog',
    'projects.desc2': 'Track incoming orders &amp; returns',
    'projects.desc3': 'Track income &amp; expenses',
    'projects.detail_header': '# All Projects',
    'projects.date1': 'October 2025',
    'projects.detail_desc1': 'A centralized digital catalog system for regional research and innovation, optimized for Digital Signage display.',
    'projects.date2': 'December 2022',
    'projects.detail_desc2': 'Website for tracking incoming orders and goods returns, built in 1 month.',
    'projects.date3': 'November 2022',
    'projects.detail_desc3': 'Website for tracking income and expenses, built in 1 week.',
    'edu.win_title': 'edu.log',
    'edu.degree': 'S.Kom. Informatics',
    'edu.school': 'Universitas Internasional Semen Indonesia',
    'edu.detail_header': '# education history',
    'edu.school1_name': 'Universitas Internasional Semen Indonesia',
    'edu.school1_degree': 'S.Kom. Informatics — <strong>GPA 3.74/4.0</strong>',
    'edu.school1_scholarship': 'PPA Dikti Scholarship Recipient 2019 (1 Semester)',
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

  return { currentLang, t, setLang }
}
```

## 5. Buat `src/composables/useClock.js`

```js
import { ref, onMounted, onUnmounted } from 'vue'

export function useClock() {
  const clock = ref('--:--')
  let interval

  function update() {
    const now = new Date()
    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
    const hh = String(now.getHours()).padStart(2, '0')
    const mm = String(now.getMinutes()).padStart(2, '0')
    clock.value = `${days[now.getDay()]} ${hh}:${mm}`
  }

  onMounted(() => {
    update()
    interval = setInterval(update, 10000)
  })

  onUnmounted(() => clearInterval(interval))

  return { clock }
}
```

## 6. Buat `src/composables/useDock.js`

```js
import { ref } from 'vue'

export function useDock() {
  const activeCard = ref(null)

  function maximize(id) {
    activeCard.value = activeCard.value === id ? null : id
  }

  function restore() {
    activeCard.value = null
  }

  return { activeCard, maximize, restore }
}
```

## 7. Buat `src/composables/useProjectModal.js`

```js
import { ref } from 'vue'

const projects = [
  {
    title: 'KERIS — Katalog Elektronik Riset & Inovasi Sumenep',
    path: '~/projects/keris.md',
    problem: 'Pemerintah daerah Sumenep membutuhkan sistem katalog digital terpusat untuk mendokumentasikan dan mempromosikan hasil riset serta inovasi daerah, yang dioptimalkan khusus untuk tampilan Digital Signage.',
    solution: 'Membangun sistem katalog digital terpusat dengan antarmuka yang dioptimalkan untuk layar Digital Signage, memudahkan pengunjung dan pemangku kepentingan menjelajahi riset dan inovasi secara interaktif.',
    stack: ['PHP', 'Laravel', 'Filament', 'Nuxt 4', 'Tailwind CSS'],
  },
  {
    title: 'Navisya Mart — Website',
    path: '~/projects/navisyamart.md',
    problem: 'Toko membutuhkan sistem untuk mencatat order masuk dan retur barang secara digital.',
    solution: 'Merancang dan mengimplementasikan website untuk mencatat order masuk dan retur barang dalam waktu 1 bulan.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Buku Kas — Website',
    path: '~/projects/bukukas.md',
    problem: 'Tempat kerja membutuhkan pencatatan pemasukan dan pengeluaran kas yang lebih terstruktur.',
    solution: 'Merancang dan mengimplementasikan website pencatatan arus kas dalam waktu 1 minggu.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
]

export function useProjectModal() {
  const modalOpen = ref(false)
  const activeProject = ref(null)

  function openProject(i) {
    activeProject.value = projects[i]
    modalOpen.value = true
  }

  function closeProject() {
    modalOpen.value = false
    activeProject.value = null
  }

  return { projects, modalOpen, activeProject, openProject, closeProject }
}
```

## 8. Komponen Vue

Buat 10 komponen di `src/components/`:

### `TopBar.vue`

```vue
<script setup>
import { useI18n } from '@/composables/useI18n'
import { useClock } from '@/composables/useClock'

const { t } = useI18n()
const { clock } = useClock()
</script>

<template>
  <div
    id="topbar"
    class="fixed top-0 left-0 right-0 h-7 flex items-center justify-between px-3.5 z-60 text-xs"
    style="background: rgba(22,4,18,0.88); backdrop-filter: blur(6px); color: #EDE9EC; border-bottom: 1px solid rgba(255,255,255,0.06);"
  >
    <div class="flex items-center gap-3.5">
      <span class="font-bold tracking-wide" v-html="t('topbar.title')" />
      <span class="font-mono opacity-60" v-html="t('topbar.prompt')" />
    </div>
    <div class="flex items-center gap-2.5 opacity-90 font-mono">
      <span>📶</span><span>🔊</span><span>🔋</span>
      <span>{{ clock }}</span>
    </div>
  </div>
</template>
```

### `Dock.vue`

```vue
<script setup>
import { useI18n } from '@/composables/useI18n'

const { t, currentLang, setLang } = useI18n()

defineProps({
  activeCard: { type: String, default: null },
})

const emit = defineEmits(['maximize'])

const items = [
  { id: 'hero-card', icon: '🏠', key: 'dock.home', style: 'background:#E9542033;' },
  { id: 'about-card', icon: '👤', key: 'dock.about', style: 'background:#729FCF33;' },
  { id: 'skills-card', icon: '🛠️', key: 'dock.skills', style: 'background:#8AE23433;' },
  null,
  { id: 'work-card', icon: '💼', key: 'dock.work', style: 'background:#77216F55;' },
  { id: 'projects-card', icon: '📁', key: 'dock.projects', style: 'background:#E9542033;' },
  { id: 'edu-card', icon: '🎓', key: 'dock.edu', style: 'background:#729FCF33;' },
  null,
  { id: 'contact-card', icon: '✉️', key: 'dock.contact', style: 'background:#8AE23433;' },
]
</script>

<template>
  <div
    id="dock"
    class="fixed left-2 top-11 bottom-3 w-14 flex flex-col items-center py-2.5 gap-2 z-55 rounded-2xl"
    style="background: rgba(20,4,17,0.55); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.06);"
  >
    <template v-for="(item, i) in items" :key="i">
      <div v-if="!item" class="w-[26px] h-px my-0.5" style="background: rgba(255,255,255,0.14);" />
      <button
        v-else
        :class="['dock-icon', { active: activeCard === item.id }]"
        :style="item.style"
        :title="t(item.key)"
        @click="emit('maximize', item.id)"
      >
        {{ item.icon }}
      </button>
    </template>
    <div class="w-[26px] h-px my-0.5" style="background: rgba(255,255,255,0.14);" />
    <button
      :class="['dock-icon lang', { active: currentLang === 'id' }]"
      @click="setLang('id')"
    >
      ID
    </button>
    <button
      :class="['dock-icon lang', { active: currentLang === 'en' }]"
      @click="setLang('en')"
    >
      EN
    </button>
  </div>
</template>

<style scoped>
.dock-icon {
  width: 38px; height: 38px; border-radius: 11px;
  display: flex; align-items: center; justify-content: center;
  font-size: 17px; cursor: pointer;
  transition: transform .15s ease, background .15s ease;
  background: rgba(255,255,255,0.06);
}
.dock-icon:hover { transform: scale(1.08); background: rgba(255,255,255,0.14); }
.dock-icon.active { background: rgba(255,255,255,0.18); font-weight: 700; color: #fff; }
.dock-icon.lang { font-size: 12px; font-weight: 700; letter-spacing: .5px; font-family: 'Ubuntu Mono', monospace; color: #999; }
.dock-icon.lang.active { color: #fff; background: rgba(255,255,255,0.18); }

@media (max-width: 900px) {
  #dock {
    left: 0; right: 0; top: auto; bottom: 0; width: 100%; height: 60px;
    flex-direction: row; justify-content: space-around; align-items: center;
    border-radius: 16px 16px 0 0; padding: 6px; gap: 4px; z-index: 70;
  }
  .dock-icon { width: 34px; height: 34px; font-size: 15px; flex-shrink: 0; }
}
</style>
```

### `TerminalHero.vue`

```vue
<script setup>
import { useI18n } from '@/composables/useI18n'

defineProps({
  maximized: { type: Boolean, default: false },
})

const emit = defineEmits(['restore'])
const { t } = useI18n()
</script>

<template>
  <div
    :class="['win terminal', { maximized }]"
    style="grid-column: 1 / -1;"
    class="md:col-span-5 row-span-3"
  >
    <div class="win-bar">
      <div class="flex items-center gap-1.5 min-w-0">
        <span class="app-icon" style="background: var(--orange);" />
        <span class="win-title" v-html="t('hero.win_title')" />
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <span class="ctrl-dot" /><span class="ctrl-dot" />
        <span class="ctrl-dot close app-close" @click="emit('restore')" />
      </div>
    </div>
    <div class="win-body flex flex-col justify-center gap-3">
      <!-- Summary -->
      <div v-if="!maximized" class="flex flex-col gap-3">
        <p class="font-mono text-xs">
          <span class="prompt-user">albert@portfolio</span
          ><span class="prompt-sep">:</span
          ><span class="prompt-path">~</span
          ><span class="prompt-sep">$</span>
          <span class="text-[var(--term-green)]" v-html="t('hero.whoami')" />
        </p>
        <h1 class="text-4xl md:text-5xl font-bold leading-[1.05] text-white" v-html="t('hero.name')" />
        <p class="text-lg md:text-xl" style="color: #D8CBD5;" v-html="t('hero.title')" />
        <p class="text-sm max-w-md" style="color: #B9ACB6;" v-html="t('hero.bio')" />
      </div>
      <!-- Detail -->
      <div v-else class="flex flex-col gap-4">
        <p class="font-mono text-xs">
          <span class="prompt-user">albert@portfolio</span
          ><span class="prompt-sep">:</span
          ><span class="prompt-path">~</span
          ><span class="prompt-sep">$</span>
          <span class="text-[var(--term-green)]" v-html="t('hero.cat_cmd')" />
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex-1 min-w-[200px]">
            <p class="text-sm leading-relaxed" style="color: #D8CBD5;" v-html="t('hero.detail_p1')" />
            <p class="text-sm leading-relaxed mt-3" style="color: #B9ACB6;" v-html="t('hero.detail_p2')" />
          </div>
          <div class="flex flex-col gap-1.5 text-sm" style="min-width: 170px;">
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-md" style="background: rgba(255,255,255,0.06);">
              <span>📍</span><span style="color: #D8CBD5;" v-html="t('hero.location')" />
            </div>
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-md" style="background: rgba(255,255,255,0.06);">
              <span>✉️</span>
              <a href="mailto:albertabraham28@gmail.com" class="text-[var(--orange)] hover:underline">albertabraham28@gmail.com</a>
            </div>
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-md" style="background: rgba(255,255,255,0.06);">
              <span>🔗</span>
              <a href="http://linkedin.com/in/dimas-albert-abraham" target="_blank" class="text-[var(--orange)] hover:underline">LinkedIn</a>
              <span style="color: var(--muted-dark);">·</span>
              <a href="https://github.com/albertdimasa" target="_blank" class="text-[var(--orange)] hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.win {
  background: var(--panel);
  border: 1px solid var(--panel-border);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 14px 34px rgba(0,0,0,0.38), 0 2px 6px rgba(0,0,0,0.25);
}
.win.maximized {
  position: fixed !important;
  top: 36px; left: 84px; right: 12px; bottom: 12px;
  z-index: 58; border-radius: 12px;
  animation: maximizeIn .18s ease;
}
.win.maximized .win-body { padding: 28px 34px; overflow: auto; }
.terminal { background: linear-gradient(180deg, var(--term-bg1), var(--term-bg2)); }
.terminal .win-bar { background: #22071A; border-bottom: 1px solid rgba(255,255,255,0.08); }
.win-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 7px 10px; background: var(--panel-head);
  border-bottom: 1px solid var(--panel-border); flex-shrink: 0;
}
.win-title {
  font-family: 'Ubuntu Mono', monospace; font-size: 11px; color: var(--muted-dark);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.app-icon { width: 14px; height: 14px; border-radius: 4px; flex-shrink: 0; }
.win-body { padding: 16px 18px; overflow: hidden; flex: 1; min-height: 0; color: var(--text-dark); }
.ctrl-dot { width: 11px; height: 11px; border-radius: 50%; background: #C9C6C4; }
.ctrl-dot.close { background: var(--orange); }
.prompt-user { color: var(--term-green); font-weight: 700; }
.prompt-sep { color: #F2F1F0; }
.prompt-path { color: var(--term-blue); font-weight: 700; }
.app-close { cursor: pointer; }

@keyframes maximizeIn {
  0% { opacity: 0; transform: scale(0.94); }
  100% { opacity: 1; transform: scale(1); }
}

@media (max-width: 900px) {
  .win.maximized { left: 8px; right: 8px; top: 36px; bottom: 72px; }
}
</style>
```

### `AboutCard.vue`, `SkillsCard.vue`, `ContactCard.vue`, `WorkCard.vue`, `ProjectsCard.vue`, `EduCard.vue`, `ProjectModal.vue`

(Komponen serupa dengan pola yang sama — scoped styles, `useI18n`, prop `maximized`, emit `restore`. Detail lengkap ada di `example/index.html`)

## 9. Update `src/App.vue`

```vue
<script setup>
import { useDock } from '@/composables/useDock'
import { useProjectModal } from '@/composables/useProjectModal'
import TopBar from '@/components/TopBar.vue'
import Dock from '@/components/Dock.vue'
import TerminalHero from '@/components/TerminalHero.vue'
import AboutCard from '@/components/AboutCard.vue'
import SkillsCard from '@/components/SkillsCard.vue'
import ContactCard from '@/components/ContactCard.vue'
import WorkCard from '@/components/WorkCard.vue'
import ProjectsCard from '@/components/ProjectsCard.vue'
import EduCard from '@/components/EduCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'

const { activeCard, maximize, restore } = useDock()
const { modalOpen, activeProject, closeProject } = useProjectModal()
</script>

<template>
  <TopBar />
  <Dock :active-card="activeCard" @maximize="maximize" />

  <div
    id="backdrop"
    :class="{ show: activeCard }"
    class="fixed inset-0 z-50 transition-opacity duration-150"
    style="background: rgba(8,2,7,0.55); pointer-events: none; opacity: 0;"
    @click="restore"
  />

  <div
    id="app-height"
    class="h-screen w-screen pt-9 pl-4 md:pl-20 pr-3 pb-3 md:pr-4 md:pb-4 overflow-hidden"
  >
    <div class="bento">
      <TerminalHero :maximized="activeCard === 'hero-card'" @restore="restore" />
      <AboutCard :maximized="activeCard === 'about-card'" @restore="restore" />
      <SkillsCard :maximized="activeCard === 'skills-card'" @restore="restore" />
      <ContactCard :maximized="activeCard === 'contact-card'" @restore="restore" />
      <WorkCard :maximized="activeCard === 'work-card'" @restore="restore" />
      <ProjectsCard :maximized="activeCard === 'projects-card'" @restore="restore" />
      <EduCard :maximized="activeCard === 'edu-card'" @restore="restore" />
    </div>
  </div>

  <ProjectModal :open="modalOpen" :project="activeProject" @close="closeProject" />
</template>

<style>
.bento {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 14px;
  height: 100%;
}

@media (max-width: 900px) {
  #app-height {
    padding-left: 12px !important;
    padding-bottom: 76px !important;
    height: auto !important;
    overflow: visible !important;
  }
  .bento { display: flex; flex-direction: column; height: auto; }
  .bento > * { min-height: 220px; }
}

#backdrop.show {
  opacity: 1 !important;
  pointer-events: auto !important;
}
</style>
```

## 10. Update `index.html`

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dimas Albert Abraham — Full-Stack Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

## 11. Pindahkan CV

```bash
cp example/CV\ -\ Dimas\ Albert\ Abraham.pdf public/
```

## 12. Verifikasi

```bash
bun run build
```

---

**Catatan:** Jika ada permission restriction yang mencegah eksekusi langsung, implementasi manual bisa dilakukan dengan mengikuti langkah-langkah di atas.
