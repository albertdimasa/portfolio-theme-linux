<script setup>
import { useI18n } from '@/composables/useI18n'

defineProps({
  maximized: { type: Boolean, default: false },
})

const emit = defineEmits(['restore'])
const { t } = useI18n()
</script>

<template>
  <div :class="['win', 'terminal', { maximized }]">
    <div class="win-bar">
      <div class="flex items-center gap-1.5 min-w-0">
        <span class="app-icon" style="background: var(--orange)" />
        <span class="win-title" v-html="t('hero.win_title')" />
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <span class="ctrl-dot" />
        <span class="ctrl-dot" />
        <span class="ctrl-dot close app-close" @click="emit('restore')" />
      </div>
    </div>
    <div class="win-body flex flex-col justify-center gap-3">
      <div v-if="!maximized" class="flex flex-col gap-3">
        <p class="font-mono text-xs flex items-center">
          <span class="prompt-user">albert@portfolio</span><span class="prompt-sep">:</span
          ><span class="prompt-path">~</span><span class="prompt-sep">$</span>&nbsp;
          <span class="text-[var(--term-green)]" v-html="t('hero.whoami')" />
          <span class="terminal-cursor ml-1">▋</span>
        </p>
        <h1
          class="text-4xl md:text-5xl font-bold leading-[1.05] text-white"
          v-html="t('hero.name')"
        />
        <p class="text-lg md:text-xl" style="color: #d8cbd5" v-html="t('hero.title')" />
        <p class="text-sm max-w-md" style="color: #b9acb6" v-html="t('hero.bio')" />
        <div class="flex gap-3 pt-2">
          <a
            href="https://wa.me/6285745974148"
            target="_blank"
            class="btn-primary text-sm px-4 py-2 rounded-lg"
            v-html="t('hero.btn_contact')"
          />
        </div>
      </div>
      <div v-else class="flex flex-col gap-4">
        <p class="font-mono text-xs flex items-center">
          <span class="prompt-user">albert@portfolio</span><span class="prompt-sep">:</span
          ><span class="prompt-path">~</span><span class="prompt-sep">$</span>&nbsp;
          <span class="text-[var(--term-green)]" v-html="t('hero.cat_cmd')" />
          <span class="terminal-cursor ml-1">▋</span>
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex-1 min-w-[200px]">
            <p
              class="text-sm leading-relaxed"
              style="color: #d8cbd5"
              v-html="t('hero.detail_p1')"
            />
            <p
              class="text-sm leading-relaxed mt-3"
              style="color: #b9acb6"
              v-html="t('hero.detail_p2')"
            />
          </div>
          <div class="flex flex-col gap-1.5 text-sm" style="min-width: 170px">
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-md"
              style="background: rgba(255, 255, 255, 0.06)"
            >
              <span>📍</span>
              <span style="color: #d8cbd5" v-html="t('hero.location')" />
            </div>
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-md"
              style="background: rgba(255, 255, 255, 0.06)"
            >
              <span>✉️</span>
              <a
                href="mailto:albertabraham28@gmail.com"
                class="text-[var(--orange)] hover:underline"
              >
                albertabraham28@gmail.com
              </a>
            </div>
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-md"
              style="background: rgba(255, 255, 255, 0.06)"
            >
              <span>📞</span>
              <a
                href="https://wa.me/6285745974148"
                target="_blank"
                style="color: #d8cbd5"
                class="hover:underline"
                >+6285745974148</a
              >
            </div>
            <div
              class="flex items-center gap-2 px-3 py-1.5 rounded-md"
              style="background: rgba(255, 255, 255, 0.06)"
            >
              <span>🔗</span>
              <a
                href="http://linkedin.com/in/dimas-albert-abraham"
                target="_blank"
                class="text-[var(--orange)] hover:underline"
              >
                LinkedIn
              </a>
              <span style="color: var(--muted-dark)">·</span>
              <a
                href="https://github.com/albertdimasa"
                target="_blank"
                class="text-[var(--orange)] hover:underline"
              >
                GitHub
              </a>
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
.terminal {
  background: linear-gradient(180deg, var(--term-bg1), var(--term-bg2));
}
.terminal .win-bar {
  background: #22071a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
.prompt-user {
  color: var(--term-green);
  font-weight: 700;
}
.prompt-sep {
  color: #f2f1f0;
}
.prompt-path {
  color: var(--term-blue);
  font-weight: 700;
}
.terminal-cursor {
  color: var(--term-green);
  font-size: 11px;
  animation: blink 1s steps(2, start) infinite;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.app-close {
  cursor: pointer;
}
.btn-primary {
  background: var(--orange);
  color: #fff;
  font-weight: 500;
  transition:
    filter 0.15s ease,
    transform 0.15s ease;
  display: inline-block;
}
.btn-primary:hover {
  filter: brightness(1.06);
  transform: translateY(-1px);
}
.btn-ghost {
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #f5f1f4;
  transition: background 0.15s ease;
  display: inline-block;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
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
