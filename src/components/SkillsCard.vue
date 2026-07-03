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
    <div class="win-body flex flex-col gap-4 overflow-auto">
      <div v-if="!maximized" class="flex flex-col gap-4">
        <div>
          <p
            class="font-mono text-[11px] mb-2"
            style="color: var(--muted-dark)"
            v-html="t('skills.lang_label')"
          />
          <div class="flex flex-wrap gap-1.5">
            <span class="tag">PHP</span><span class="tag">JavaScript</span
            ><span class="tag">HTML</span> <span class="tag">CSS</span><span class="tag">SQL</span
            ><span class="tag">ABAP</span>
          </div>
        </div>
        <div>
          <p
            class="font-mono text-[11px] mb-2"
            style="color: var(--muted-dark)"
            v-html="t('skills.framework_label')"
          />
          <div class="flex flex-wrap gap-1.5">
            <span class="tag">Laravel</span><span class="tag">Nuxt.js</span
            ><span class="tag">Vue.js</span> <span class="tag">Express.js</span
            ><span class="tag">Livewire</span> <span class="tag">Tailwind</span
            ><span class="tag">Bootstrap</span>
          </div>
        </div>
        <div>
          <p
            class="font-mono text-[11px] mb-2"
            style="color: var(--muted-dark)"
            v-html="t('skills.tools_label')"
          />
          <div class="flex flex-wrap gap-1.5">
            <span class="tag">Docker</span><span class="tag">Git</span
            ><span class="tag">Postman</span> <span class="tag">VPS</span
            ><span class="tag">Supabase</span><span class="tag">SAP</span>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4">
        <p class="font-mono text-xs" style="color: #4e9a06" v-html="t('skills.verbose_cmd')" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: var(--muted-dark)"
              v-html="t('skills.detail_lang')"
            />
            <div class="flex flex-wrap gap-1.5">
              <span class="tag">PHP</span><span class="tag">JavaScript</span
              ><span class="tag">HTML</span> <span class="tag">CSS</span><span class="tag">SQL</span
              ><span class="tag">ABAP</span>
            </div>
          </div>
          <div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: var(--muted-dark)"
              v-html="t('skills.detail_frontend')"
            />
            <div class="flex flex-wrap gap-1.5">
              <span class="tag">Vue.js</span><span class="tag">Nuxt.js</span
              ><span class="tag">jQuery</span> <span class="tag">Livewire</span
              ><span class="tag">Tailwind CSS</span><span class="tag">Bootstrap</span>
            </div>
          </div>
          <div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: var(--muted-dark)"
              v-html="t('skills.detail_backend')"
            />
            <div class="flex flex-wrap gap-1.5">
              <span class="tag">Laravel</span><span class="tag">Express.js</span>
            </div>
          </div>
          <div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: var(--muted-dark)"
              v-html="t('skills.detail_tools')"
            />
            <div class="flex flex-wrap gap-1.5">
              <span class="tag">Git</span><span class="tag">SQLyog</span
              ><span class="tag">Supabase</span> <span class="tag">Postman</span
              ><span class="tag">VS Code</span>
            </div>
          </div>
          <div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: var(--muted-dark)"
              v-html="t('skills.detail_devops')"
            />
            <div class="flex flex-wrap gap-1.5">
              <span class="tag">Docker</span><span class="tag">VPS</span>
            </div>
          </div>
          <div>
            <p
              class="font-mono text-[11px] mb-2"
              style="color: var(--muted-dark)"
              v-html="t('skills.detail_sap')"
            />
            <div class="flex flex-wrap gap-1.5">
              <span class="tag">Business One</span><span class="tag">ECC</span
              ><span class="tag">S/4HANA</span>
            </div>
          </div>
        </div>
        <div class="border-t pt-3" style="border-color: var(--panel-border)">
          <p
            class="font-mono text-[11px] mb-2"
            style="color: var(--muted-dark)"
            v-html="t('skills.courses_label')"
          />
          <div class="flex flex-wrap gap-1.5 text-xs" style="color: var(--muted-dark)">
            <span>Dicoding — DevOps (2023)</span><span style="opacity: 0.4">·</span>
            <span>Dicoding — Back-End (2022)</span><span style="opacity: 0.4">·</span>
            <span>Dicoding — AWS Cloud (2022)</span><span style="opacity: 0.4">·</span>
            <span>Codepolitan — JavaScript (2023)</span><span style="opacity: 0.4">·</span>
            <span>HackerRank — SQL Basic (2023)</span><span style="opacity: 0.4">·</span>
            <span>FreeCodeCamp — Responsive Web Design (2022)</span>
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
