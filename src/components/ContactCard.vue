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
        <span class="app-icon" style="background: var(--orange)" />
        <span class="win-title" v-html="t('contact.win_title')" />
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <span class="ctrl-dot" /><span class="ctrl-dot" /><span
          class="ctrl-dot close app-close"
          @click="emit('restore')"
        />
      </div>
    </div>
    <div class="win-body flex flex-col gap-2 text-sm">
      <div v-if="!maximized" class="flex flex-col gap-2">
        <a
          href="mailto:albertabraham28@gmail.com"
          class="text-sm hover:underline break-all"
          style="color: var(--orange)"
        >
          albertabraham28@gmail.com
        </a>
        <p class="text-xs" style="color: var(--muted-dark)">+6285745974148</p>
        <div class="flex gap-3 text-sm" style="color: var(--muted-dark)">
          <a
            href="https://github.com/albertdimasa"
            target="_blank"
            class="hover:text-black transition-colors"
            >GitHub</a
          >
          <span>·</span>
          <a
            href="http://linkedin.com/in/dimas-albert-abraham"
            target="_blank"
            class="hover:text-black transition-colors"
            >LinkedIn</a
          >
        </div>
      </div>
      <div v-else class="flex flex-col gap-3">
        <p
          class="font-mono text-xs"
          style="color: var(--orange)"
          v-html="t('contact.detail_header')"
        />
        <div class="flex items-center gap-3 py-2">
          <span style="font-size: 18px">\u{2709}\uFE0F</span>
          <a
            href="mailto:albertabraham28@gmail.com"
            class="text-sm hover:underline"
            style="color: var(--orange)"
          >
            albertabraham28@gmail.com
          </a>
        </div>
        <div
          class="flex items-center gap-3 py-2 border-t"
          style="border-color: var(--panel-border)"
        >
          <span style="font-size: 18px">\u{1F4DE}</span>
          <span class="text-sm" style="color: var(--text-dark)">+6285745974148</span>
        </div>
        <div
          class="flex items-center gap-3 py-2 border-t"
          style="border-color: var(--panel-border)"
        >
          <span style="font-size: 18px">\u{1F4CD}</span>
          <span class="text-sm" style="color: var(--text-dark)" v-html="t('contact.location')" />
        </div>
        <div
          class="flex items-center gap-3 py-2 border-t"
          style="border-color: var(--panel-border)"
        >
          <span style="font-size: 18px">\u{1F517}</span>
          <div class="flex gap-3">
            <a
              href="https://github.com/albertdimasa"
              target="_blank"
              class="text-sm hover:underline"
              style="color: var(--orange)"
              >GitHub</a
            >
            <span style="color: var(--muted-dark)">·</span>
            <a
              href="http://linkedin.com/in/dimas-albert-abraham"
              target="_blank"
              class="text-sm hover:underline"
              style="color: var(--orange)"
              >LinkedIn</a
            >
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
  animation: maximizeIn 0.18s ease;
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
