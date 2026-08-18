<script setup>
import { ref, onMounted } from 'vue'

const show = ref(true)
const fading = ref(false)
const bootStep = ref(0)

const bootLogs = [
  '[  OK  ] Started System Initialization.',
  '[  OK  ] Loaded SAP ABAP & Laravel Enterprise Modules.',
  '[  OK  ] Mounting Bento Grid Desktop Environment...',
]

onMounted(() => {
  const interval = setInterval(() => {
    if (bootStep.value < bootLogs.length - 1) {
      bootStep.value++
    } else {
      clearInterval(interval)
      setTimeout(() => {
        fading.value = true
        setTimeout(() => {
          show.value = false
        }, 500)
      }, 400)
    }
  }, 350)
})
</script>

<template>
  <div v-if="show" :class="['boot-splash', { fade: fading }]">
    <div class="boot-content">
      <!-- Ubuntu Logo Circle -->
      <div class="logo-wrapper">
        <div class="ubuntu-logo">
          <svg viewBox="0 0 100 100" class="w-16 h-16 text-white">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#E95420" stroke-width="8" />
            <circle cx="50" cy="18" r="6" fill="#fff" />
            <circle cx="22" cy="66" r="6" fill="#fff" />
            <circle cx="78" cy="66" r="6" fill="#fff" />
          </svg>
        </div>
      </div>

      <!-- System Title -->
      <h2 class="font-mono text-lg font-bold text-white tracking-widest uppercase mt-4">
        ALBERT <span style="color: var(--orange)">WORKSTATION</span> LTS
      </h2>

      <!-- Boot Logs -->
      <div class="font-mono text-xs text-slate-300 mt-6 h-16 flex flex-col items-center gap-1">
        <p v-for="(log, idx) in bootLogs.slice(0, bootStep + 1)" :key="idx" class="boot-log-item">
          {{ log }}
        </p>
      </div>

      <!-- Loading Dots -->
      <div class="dots flex gap-2 mt-4">
        <span class="dot" /><span class="dot" /><span class="dot" /><span class="dot" /><span
          class="dot"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.boot-splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #11030e;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity 0.5s ease;
}
.boot-splash.fade {
  opacity: 0;
  pointer-events: none;
}
.boot-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.logo-wrapper {
  position: relative;
  animation: logoPulse 1.5s infinite ease-in-out;
}
@keyframes logoPulse {
  0%,
  100% {
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(233, 84, 32, 0.4));
  }
  50% {
    transform: scale(1.06);
    filter: drop-shadow(0 0 22px rgba(233, 84, 32, 0.8));
  }
}
.boot-log-item {
  animation: fadeIn 0.2s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e95420;
  animation: dotBounce 1.2s infinite ease-in-out;
}
.dots .dot:nth-child(2) {
  animation-delay: 0.15s;
}
.dots .dot:nth-child(3) {
  animation-delay: 0.3s;
}
.dots .dot:nth-child(4) {
  animation-delay: 0.45s;
}
.dots .dot:nth-child(5) {
  animation-delay: 0.6s;
}
@keyframes dotBounce {
  0%,
  80%,
  100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1.3);
  }
}
</style>
