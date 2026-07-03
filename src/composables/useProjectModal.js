import { ref } from 'vue'

const modalOpen = ref(false)
const activeProject = ref(null)

const projects = [
  {
    title: 'KERIS — Katalog Elektronik Riset & Inovasi Sumenep',
    path: '~/projects/keris.md',
    problem:
      'Pemerintah daerah Sumenep membutuhkan sistem katalog digital terpusat untuk mendokumentasikan dan mempromosikan hasil riset serta inovasi daerah, yang dioptimalkan khusus untuk tampilan Digital Signage.',
    solution:
      'Membangun sistem katalog digital terpusat dengan antarmuka yang dioptimalkan untuk layar Digital Signage, memudahkan pengunjung dan pemangku kepentingan menjelajahi riset dan inovasi secara interaktif.',
    stack: ['PHP', 'Laravel', 'Filament', 'Nuxt 4', 'Tailwind CSS'],
  },
  {
    title: 'Navisya Mart — Website',
    path: '~/projects/navisyamart.md',
    problem:
      'Toko membutuhkan sistem untuk mencatat order masuk dan retur barang secara digital, menggantikan pencatatan manual yang rentan kesalahan dan kehilangan data.',
    solution:
      'Merancang dan mengimplementasikan website untuk mencatat order masuk dan retur barang dalam waktu 1 bulan, dengan alur kerja yang intuitif dan pencatatan yang akurat.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Buku Kas — Website',
    path: '~/projects/bukukas.md',
    problem:
      'Tempat kerja membutuhkan pencatatan pemasukan dan pengeluaran kas yang lebih terstruktur dan dapat diakses kapan saja, menggantikan pembukuan manual.',
    solution:
      'Merancang dan mengimplementasikan website pencatatan arus kas dalam waktu 1 minggu, dengan antarmuka sederhana yang memudahkan input dan pelacakan transaksi harian.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Point of Sales — Website',
    path: '~/projects/pos.md',
    problem:
      'Toko membutuhkan sistem POS yang terintegrasi dengan thermal printer 58mm dan fitur export laporan Excel.',
    solution:
      'Merancang dan mengimplementasikan website POS dengan fungsi kasir, admin, dan supplier, terintegrasi dengan thermal printer 58mm dan export Excel. Dibangun dalam 1 bulan.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Pendaftaran Santri Baru — Website',
    path: '~/projects/santri.md',
    problem:
      'Pondok pesantren membutuhkan sistem pendaftaran santri baru secara digital dengan otorisasi dan verifikasi dari admin.',
    solution:
      'Merancang dan mengimplementasikan website registrasi santri dengan fungsi otorisasi, verifikasi admin, dan bukti pendaftaran. Dibangun dalam 2 minggu.',
    stack: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Bootstrap'],
  },
]

export function useProjectModal() {
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
