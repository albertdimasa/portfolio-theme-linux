<script setup>
import { useI18n } from '@/composables/useI18n'

const { t, currentLang, toggleLang } = useI18n()

defineProps({
  activeCard: { type: String, default: null },
})

const emit = defineEmits(['maximize'])

const items = [
  { id: 'hero-card', icon: '\u{1F3E0}', key: 'dock.home', style: 'background:#E9542033;' },
  { id: 'about-card', icon: '\u{1F464}', key: 'dock.about', style: 'background:#729FCF33;' },
  {
    id: 'skills-card',
    icon: '\u{1F6E0}\uFE0F',
    key: 'dock.skills',
    style: 'background:#8AE23433;',
  },
  null,
  { id: 'work-card', icon: '\u{1F4BC}', key: 'dock.work', style: 'background:#77216F55;' },
  { id: 'projects-card', icon: '\u{1F4C1}', key: 'dock.projects', style: 'background:#E9542033;' },
  { id: 'edu-card', icon: '\u{1F393}', key: 'dock.edu', style: 'background:#729FCF33;' },
  null,
  {
    id: 'contact-card',
    icon: '\u{2709}\uFE0F',
    key: 'dock.contact',
    style: 'background:#8AE23433;',
  },
]
</script>

<template>
  <div
    id="dock"
    class="fixed left-2 top-11 bottom-3 w-14 flex flex-col items-center py-2.5 gap-2 z-55 rounded-2xl"
    style="
      background: rgba(20, 4, 17, 0.55);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.06);
    "
  >
    <template v-for="(item, i) in items" :key="i">
      <div
        v-if="!item"
        class="w-[26px] h-px my-0.5"
        style="background: rgba(255, 255, 255, 0.14)"
      />
      <button
        v-else
        :class="['dock-icon', { active: activeCard === item.id }]"
        :style="item.style"
        :title="t(item.key)"
        @click="emit('maximize', item.id)"
      >
        {{ item.icon }}
      </button>
    </template>
    <div class="w-[26px] h-px my-0.5" style="background: rgba(255, 255, 255, 0.14)" />
    <button
      :class="['dock-icon', 'lang', { active: true }]"
      @click="toggleLang"
      :title="currentLang === 'id' ? 'Switch to EN' : 'Ganti ke ID'"
    >
      {{ currentLang === 'id' ? 'EN' : 'ID' }}
    </button>
  </div>
</template>

<style scoped>
.dock-icon {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    background 0.15s ease;
  background: rgba(255, 255, 255, 0.06);
}
.dock-icon:hover {
  transform: scale(1.08);
  background: rgba(255, 255, 255, 0.14);
}
.dock-icon.active {
  background: rgba(255, 255, 255, 0.18);
  font-weight: 700;
  color: #fff;
}
@media (max-width: 900px) {
  #dock {
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 16px 16px 0 0;
    padding: 6px;
    gap: 4px;
    z-index: 70;
  }
  .dock-icon {
    width: 34px;
    height: 34px;
    font-size: 15px;
    flex-shrink: 0;
  }
}
</style>
