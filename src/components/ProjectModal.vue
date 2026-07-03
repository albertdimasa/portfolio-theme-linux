<script setup>
import { useI18n } from '@/composables/useI18n'

defineProps({
  open: { type: Boolean, default: false },
  project: { type: Object, default: null },
})

const emit = defineEmits(['close'])
const { t } = useI18n()

function onOverlayClick(e) {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <div
    id="modal-overlay"
    :class="{ open }"
    class="fixed inset-0 z-80 flex items-center justify-center"
    style="background: rgba(10, 2, 8, 0.65); backdrop-filter: blur(3px); display: none"
    @click="onOverlayClick"
  >
    <div
      v-if="project"
      id="modal-box"
      class="win"
      style="width: min(560px, 90vw); max-height: 82vh; overflow: auto"
    >
      <div class="win-bar">
        <div class="flex items-center gap-1.5 min-w-0">
          <span class="app-icon" style="background: var(--orange)" />
          <span id="modal-path" class="win-title">{{ project.path }}</span>
        </div>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          <span class="ctrl-dot" /><span class="ctrl-dot" />
          <span class="ctrl-dot close" style="cursor: pointer" @click="emit('close')" />
        </div>
      </div>
      <div class="win-body">
        <h3 class="text-2xl font-bold mb-3">{{ project.title }}</h3>
        <p
          class="font-mono text-[11px] mb-1"
          style="color: var(--orange)"
          v-html="t('modal.problem_label')"
        />
        <p class="text-sm mb-4 leading-relaxed">{{ project.problem }}</p>
        <p
          class="font-mono text-[11px] mb-1"
          style="color: #4e9a06"
          v-html="t('modal.solution_label')"
        />
        <p class="text-sm mb-4 leading-relaxed">{{ project.solution }}</p>
        <p
          class="font-mono text-[11px] mb-2"
          style="color: var(--muted-dark)"
          v-html="t('modal.stack_label')"
        />
        <div class="flex flex-wrap gap-1.5">
          <span v-for="tag in project.stack" :key="tag" class="tag">{{ tag }}</span>
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
#modal-overlay.open {
  display: flex !important;
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
</style>
