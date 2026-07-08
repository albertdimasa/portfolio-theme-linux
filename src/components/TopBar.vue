<script setup>
import { useI18n } from '@/composables/useI18n'
import { useClock } from '@/composables/useClock'

const { t } = useI18n()
const { clock } = useClock()
</script>

<template>
  <div
    id="topbar"
    class="fixed top-0 left-0 right-0 h-7 flex items-center justify-between px-3.5 z-60 text-xs select-none"
    style="
      background: rgba(22, 4, 18, 0.88);
      backdrop-filter: blur(6px);
      color: #ede9ec;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    "
  >
    <div class="flex items-center gap-3.5">
      <span class="font-mono opacity-60" v-html="t('topbar.prompt')" />
    </div>
    <div class="flex items-center gap-2.5 opacity-90 font-mono">
      <span>&#x1F4F6;</span><span>&#x1F50A;</span><span>&#x1F50B;</span>
      <span>{{ clock }}</span>
    </div>
  </div>
</template>
