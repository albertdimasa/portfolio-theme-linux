<script setup>
import { useI18n } from '@/composables/useI18n'

defineProps({
  maximized: { type: Boolean, default: false },
})

const emit = defineEmits(['restore'])
const { t } = useI18n()
</script>

<template>
  <div :class="['win', { maximized }]">
    <div class="win-bar">
      <div class="flex items-center gap-1.5 min-w-0">
        <span class="app-icon" style="background: #8ae234" />
        <span class="win-title" v-html="t('skills.win_title')" />
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <span class="ctrl-dot" /><span class="ctrl-dot" /><span
          class="ctrl-dot close app-close"
          @click="emit('restore')"
        />
      </div>
    </div>
    <div class="win-body flex flex-col gap-3 overflow-auto">
      <div v-if="!maximized" class="flex flex-col h-full justify-between gap-2">
        <div>
          <div class="flex items-center gap-2 mb-1.5">
            <a
              href="https://larahand.web.id"
              target="_blank"
              rel="noopener noreferrer"
              class="font-mono text-xs font-bold hover:underline flex items-center gap-1 badge-pulse"
              style="color: #4e9a06"
            >
              <span>⚡ larahand.web.id</span>
              <span class="text-[10px]">↗</span>
            </a>
          </div>
          <p class="text-xs leading-relaxed text-slate-700">
            Dokumentasi komprehensif arsitektur Laravel: Service Container, Dependency Injection,
            Repositories Layer, Event Driven, hingga Queue Jobs.
          </p>
        </div>
        <div class="flex flex-wrap gap-1 mt-1">
          <span class="tag">Laravel Architecture</span>
          <span class="tag">Services &amp; Repositories</span>
          <span class="tag">Events &amp; Queues</span>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4">
        <p class="font-mono text-xs" style="color: #4e9a06" v-html="t('skills.verbose_cmd')" />
        <div class="border p-4 rounded-lg bg-white/50" style="border-color: var(--panel-border)">
          <h3 class="text-base font-bold text-slate-800 mb-2 flex items-center gap-2">
            <a
              href="https://larahand.web.id"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline flex items-center gap-1"
            >
              <span>🌐 larahand.web.id</span>
              <span class="text-xs">↗</span>
            </a>
            <span
              class="text-xs font-normal font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800"
              >Laravel Architecture Guide</span
            >
          </h3>
          <p class="text-xs leading-relaxed text-slate-700 mb-3">
            Dokumentasi komprehensif ini dirancang khusus untuk membantu memahami pemisahan logika
            bisnis melalui single-action classes, penggunaan ulang perilaku lewat PHP Traits,
            manajemen objek via Service Container, penerapan Dependency Injection, pengelolaan
            logika bisnis kompleks via Services Layer, abstraksi akses database lewat Repositories
            Layer, auto-wiring via PHP Reflection API, pemecahan N+1 Query Problem, hingga
            arsitektur terdekopel berbasis Model Observers, Events &amp; Listeners, serta Queue Jobs
            di Laravel.
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span class="tag">Single-Action Classes</span>
            <span class="tag">PHP Traits</span>
            <span class="tag">Service Container</span>
            <span class="tag">Dependency Injection</span>
            <span class="tag">Services Layer</span>
            <span class="tag">Repositories Layer</span>
            <span class="tag">Reflection API</span>
            <span class="tag">N+1 Fix</span>
            <span class="tag">Events &amp; Listeners</span>
            <span class="tag">Queue Jobs</span>
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
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.38),
    0 2px 6px rgba(0, 0, 0, 0.25);
}
.win.maximized {
  position: fixed !important;
  top: 36px;
  left: 84px;
  right: 12px;
  bottom: 12px;
  z-index: 58;
  border-radius: 12px;
  animation: maximizeIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.win.maximized .win-body {
  padding: 28px 34px;
  overflow: auto;
}
.win-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 10px;
  background: var(--panel-head);
  border-bottom: 1px solid var(--panel-border);
  flex-shrink: 0;
}
.win-title {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 11px;
  color: var(--muted-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.app-icon {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  flex-shrink: 0;
}
.win-body {
  padding: 16px 18px;
  overflow: hidden;
  flex: 1;
  min-height: 0;
  color: var(--text-dark);
}
.ctrl-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #c9c6c4;
}
.ctrl-dot.close {
  background: var(--orange);
}
.app-close {
  cursor: pointer;
}
.tag {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 10.5px;
  padding: 3px 8px;
  border-radius: 6px;
  border: 1px solid var(--panel-border);
  background: #fff;
  color: var(--muted-dark);
  white-space: nowrap;
}
.badge-pulse {
  animation: pulseGlow 2s infinite ease-in-out;
}
@keyframes pulseGlow {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.03);
  }
}

@keyframes maximizeIn {
  0% {
    opacity: 0;
    transform: scale(0.94);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 900px) {
  .win.maximized {
    left: 8px;
    right: 8px;
    top: 36px;
    bottom: 72px;
  }
}
</style>
