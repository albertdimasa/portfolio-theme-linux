# Perbaikan Layout & Konten

## Root cause

Setiap komponen punya `style="grid-column: 1 / -1"` pada root `<div>` yang meng-override grid placement classes dari App.vue.

## Perbaikan 1: Hapus `style="grid-column: 1 / -1"` + redundant classes dari setiap komponen

### TerminalHero.vue baris 13-16
```diff
-  <div
-    :class="['win', 'terminal', { maximized }]"
-    style="grid-column: 1 / -1"
-    class="md:col-span-5 row-span-3"
-  >
+  <div :class="['win', 'terminal', { maximized }]">
```

### AboutCard.vue baris 13
```diff
-  <div :class="['win', { maximized }]" class="md:col-span-4 row-span-3" style="grid-column: 1 / -1">
+  <div :class="['win', { maximized }]">
```

### SkillsCard.vue baris 13
```diff
-  <div :class="['win', { maximized }]" class="md:col-span-3 row-span-4" style="grid-column: 1 / -1">
+  <div :class="['win', { maximized }]">
```

### ContactCard.vue baris 13
```diff
-  <div :class="['win', { maximized }]" class="md:col-span-3 row-span-2" style="grid-column: 1 / -1">
+  <div :class="['win', { maximized }]">
```

### WorkCard.vue baris 13
```diff
-  <div :class="['win', { maximized }]" class="md:col-span-3 row-span-3" style="grid-column: 1 / -1">
+  <div :class="['win', { maximized }]">
```

### ProjectsCard.vue baris 15
```diff
-  <div :class="['win', { maximized }]" class="md:col-span-4 row-span-3" style="grid-column: 1 / -1">
+  <div :class="['win', { maximized }]">
```

### EduCard.vue baris 13
```diff
-  <div :class="['win', { maximized }]" class="md:col-span-2 row-span-3" style="grid-column: 1 / -1">
+  <div :class="['win', { maximized }]">
```

## Perbaikan 2: Tambah grid classes di App.vue untuk TerminalHero

### App.vue baris 30
```diff
-      <TerminalHero :maximized="activeCard === 'hero-card'" @restore="restore" />
+      <TerminalHero
+        :maximized="activeCard === 'hero-card'"
+        @restore="restore"
+        class="md:col-span-5 md:row-start-1 md:row-span-3"
+      />
```

## Perbaikan 3: Fix duplikat location di TerminalHero detail view

### TerminalHero.vue baris 94-100 — ganti duplikat location dengan phone number
```diff
-            <div
-              class="flex items-center gap-2 px-3 py-1.5 rounded-md"
-              style="background: rgba(255, 255, 255, 0.06)"
-            >
-              <span>\u{1F4CD}</span>
-              <span style="color: #d8cbd5" v-html="t('hero.location')" />
-            </div>
+            <div
+              class="flex items-center gap-2 px-3 py-1.5 rounded-md"
+              style="background: rgba(255, 255, 255, 0.06)"
+            >
+              <span>\u{1F4DE}</span>
+              <span style="color: #d8cbd5">+6285745974148</span>
+            </div>
```

## Perbaikan 4: Tambah role IT Support (ke-4) di WorkCard detail view

### WorkCard.vue — tambah setelah seksi Teacher (baris 104), sebelum `</div>` baris 105
```vue
        <div class="pb-3 border-b" style="border-color: var(--panel-border)">
          <p class="font-medium text-sm">
            IT Support
            <span class="font-mono text-xs font-normal" style="color: var(--muted-dark)"
              >— PT Victoria Care Indonesia Tbk.</span
            >
          </p>
          <p
            class="font-mono text-[11px] mb-2"
            style="color: var(--orange)"
            v-html="t('work.detail_date4')"
          />
          <ul
            class="text-xs leading-relaxed space-y-1"
            style="color: var(--text-dark); list-style: disc; padding-left: 16px"
          >
            <li v-html="t('work.detail_bullet4_1')" />
            <li v-html="t('work.detail_bullet4_2')" />
            <li v-html="t('work.detail_bullet4_3')" />
          </ul>
        </div>
```

## Perbaikan 5: Tambah 2 proyek ke useProjectModal.js

### useProjectModal.js — tambah setelah proyek ke-3 (baris 30-31)
```js
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
```

## Perbaikan 6: Tambah school2_detail di EduCard

### EduCard.vue — tambah setelah `<p class="text-xs leading-snug" v-html="t('edu.school2_program')" />` (baris 53)
```vue
          <p
            class="text-xs mt-1"
            style="color: var(--muted-dark)"
            v-html="t('edu.school2_detail')"
          />
```

## Perbaikan 7: Tambah translations di useI18n.js

### Di objek `id:` — tambah:
```js
'work.detail_date4': 'Sep 2022–Mar 2023 · Jakarta Barat',
'work.detail_bullet4_1': 'Membantu masalah jaringan dan hardware hingga 10 masalah per hari.',
'work.detail_bullet4_2': 'Mendukung Warehouse Management System (WMS) Web App.',
'work.detail_bullet4_3': 'Membuat modul baru untuk Warehouse Management System (WMS).',
'projects.date4': 'Juni 2022',
'projects.detail_desc4': 'Fungsi kasir, admin, dan supplier. Terintegrasi dengan thermal printer 58mm dan fitur export laporan Excel. Dibangun dalam 1 bulan.',
'projects.date5': 'Februari 2022',
'projects.detail_desc5': 'Fungsi registrasi santri, otorisasi dan verifikasi dari admin, serta bukti pendaftaran. Dibangun dalam 2 minggu.',
'edu.school2_detail': 'Mempelajari: management creativity &amp; business innovation, English for conversation, ethics in international business, general psychology, international business policy &amp; trade theory, dan Thai culture.',
```

### Di objek `en:` — tambah:
```js
'work.detail_date4': 'Sep 2022–Mar 2023 · West Jakarta',
'work.detail_bullet4_1': 'Resolved network and hardware issues up to 10 problems per day.',
'work.detail_bullet4_2': 'Supported Warehouse Management System (WMS) Web App.',
'work.detail_bullet4_3': 'Created new modules for the Warehouse Management System (WMS).',
'projects.date4': 'June 2022',
'projects.detail_desc4': 'Cashier, admin, and supplier functions. Integrated with 58mm thermal printer and Excel export. Built in 1 month.',
'projects.date5': 'February 2022',
'projects.detail_desc5': 'Student registration functions with admin authorization, verification, and registration proof. Built in 2 weeks.',
'edu.school2_detail': 'Studied: management creativity &amp; business innovation, English for conversation, ethics in international business, general psychology, international business policy &amp; trade theory, and Thai culture.',
```

## Verifikasi

```bash
bun run build
bun run format
```
