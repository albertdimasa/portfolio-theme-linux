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
        <span class="app-icon" style="background: var(--purple)" />
        <span class="win-title" v-html="t('about.win_title')" />
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <span class="ctrl-dot" /><span class="ctrl-dot" /><span
          class="ctrl-dot close app-close"
          @click="emit('restore')"
        />
      </div>
    </div>
    <div class="win-body flex flex-col gap-2 overflow-auto">
      <div v-if="!maximized" class="flex flex-col gap-2">
        <p class="font-mono text-xs" style="color: var(--orange)" v-html="t('about.header')" />
        <p class="text-sm leading-relaxed" v-html="t('about.p1')" />
        <p
          class="text-sm leading-relaxed"
          style="color: var(--muted-dark)"
          v-html="t('about.p2')"
        />
      </div>
      <div v-else class="flex flex-col gap-3">
        <p
          class="font-mono text-xs"
          style="color: var(--orange)"
          v-html="t('about.detail_header')"
        />
        <p class="text-sm leading-relaxed" v-html="t('about.detail_p1')" />
        <p class="text-sm leading-relaxed" v-html="t('about.detail_p2')" />
        <div class="border-t pt-3" style="border-color: var(--panel-border)">
          <p
            class="font-mono text-xs mb-2"
            style="color: var(--muted-dark)"
            v-html="t('about.values_label')"
          />
          <div class="flex flex-wrap gap-2">
            <span class="tag">Clean Code</span>
            <span class="tag">Web Performance</span>
            <span class="tag">REST API Design</span>
            <span class="tag">WCAG Standards</span>
            <span class="tag">Scalability</span>
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
