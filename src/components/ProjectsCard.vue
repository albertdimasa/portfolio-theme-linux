<script setup>
import { useI18n } from '@/composables/useI18n'
import { useProjectModal } from '@/composables/useProjectModal'

defineProps({
  maximized: { type: Boolean, default: false },
})

const emit = defineEmits(['restore'])
const { t } = useI18n()
const { projects, openProject } = useProjectModal()
</script>

<template>
  <div :class="['win', { maximized }]">
    <div class="win-bar">
      <div class="flex items-center gap-1.5 min-w-0">
        <span class="app-icon" style="background: var(--orange)" />
        <span class="win-title" v-html="t('projects.win_title')" />
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <span class="ctrl-dot" /><span class="ctrl-dot" /><span
          class="ctrl-dot close app-close"
          @click="emit('restore')"
        />
      </div>
    </div>
    <div class="win-body overflow-auto">
      <div v-if="!maximized" class="grid grid-rows-3 gap-2">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="proj-tile p-3 flex items-center justify-between"
          @click="openProject(i)"
        >
          <div>
            <p class="text-sm font-medium">{{ project.title }}</p>
            <p
              class="text-xs"
              style="color: var(--muted-dark)"
              v-html="t(`projects.desc${i + 1}`)"
            />
          </div>
          <span class="font-mono text-xs" style="color: var(--orange)">→</span>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4">
        <p
          class="font-mono text-xs"
          style="color: var(--orange)"
          v-html="t('projects.detail_header')"
        />
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="pb-4"
          :class="{ 'border-b': i < projects.length - 1 }"
          style="border-color: var(--panel-border)"
        >
          <p class="text-sm font-medium mb-1">{{ project.title }}</p>
          <p
            class="font-mono text-[11px] mb-1"
            style="color: var(--muted-dark)"
            v-html="t(`projects.date${i + 1}`)"
          />
          <p
            class="font-mono text-[11px] mb-1"
            style="color: var(--orange)"
            v-html="t('modal.problem_label')"
          />
          <p
            class="text-xs leading-relaxed mb-2"
            style="color: var(--text-dark)"
          >{{ project.problem }}</p>
          <p
            class="font-mono text-[11px] mb-1"
            style="color: #4e9a06"
            v-html="t('modal.solution_label')"
          />
          <p
            class="text-xs leading-relaxed mb-2"
            style="color: var(--text-dark)"
          >{{ project.solution }}</p>
          <div class="flex flex-wrap gap-1">
            <span v-for="tag in project.stack" :key="tag" class="tag">{{ tag }}</span>
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
  overflow: auto;
  flex: 1;
  min-height: 0;
  color: var(--text-dark);
  scrollbar-width: none;
}
.win-body::-webkit-scrollbar {
  display: none;
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
.proj-tile {
  cursor: pointer;
  border: 1px solid var(--panel-border);
  background: #fff;
  border-radius: 9px;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease,
    background 0.15s ease;
}
.proj-tile:hover {
  border-color: var(--orange);
  background: #fff3ee;
  transform: translateY(-2px);
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
