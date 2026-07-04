<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useDock } from '@/composables/useDock'
import { useProjectModal } from '@/composables/useProjectModal'
import TopBar from '@/components/TopBar.vue'
import Dock from '@/components/Dock.vue'
import TerminalHero from '@/components/TerminalHero.vue'
import AboutCard from '@/components/AboutCard.vue'
import SkillsCard from '@/components/SkillsCard.vue'
import ContactCard from '@/components/ContactCard.vue'
import WorkCard from '@/components/WorkCard.vue'
import ProjectsCard from '@/components/ProjectsCard.vue'
import EduCard from '@/components/EduCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'

const { activeCard, maximize, restore } = useDock()
const { modalOpen, activeProject, closeProject } = useProjectModal()

function onKeyDown(e) {
  if (e.key === 'Escape') {
    if (modalOpen.value) {
      closeProject()
    } else if (activeCard.value) {
      restore()
    }
  }
}

onMounted(() => window.addEventListener('keydown', onKeyDown))
onUnmounted(() => window.removeEventListener('keydown', onKeyDown))
</script>

<template>
  <TopBar />
  <Dock :active-card="activeCard" @maximize="maximize" />

  <div id="backdrop" :class="{ show: activeCard }" @click="restore" />

  <div
    id="app-height"
    class="h-screen w-screen pt-9 pl-4 md:pl-20 pr-3 pb-3 md:pr-4 md:pb-4 overflow-hidden"
  >
    <div class="bento">
      <TerminalHero
        :maximized="activeCard === 'hero-card'"
        @restore="restore"
        class="md:col-span-5 md:row-start-1 md:row-span-3"
      />

      <AboutCard
        :maximized="activeCard === 'about-card'"
        @restore="restore"
        class="md:col-start-6 md:col-span-4 md:row-start-1 md:row-span-3"
      />

      <SkillsCard
        :maximized="activeCard === 'skills-card'"
        @restore="restore"
        class="md:col-start-10 md:col-span-3 md:row-start-1 md:row-span-4"
      />

      <ContactCard
        :maximized="activeCard === 'contact-card'"
        @restore="restore"
        class="md:col-start-10 md:col-span-3 md:row-start-5 md:row-span-2"
      />

      <WorkCard
        :maximized="activeCard === 'work-card'"
        @restore="restore"
        class="md:col-span-3 md:row-start-4 md:row-span-3"
      />

      <ProjectsCard
        :maximized="activeCard === 'projects-card'"
        @restore="restore"
        class="md:col-start-4 md:col-span-4 md:row-start-4 md:row-span-3"
      />

      <EduCard
        :maximized="activeCard === 'edu-card'"
        @restore="restore"
        class="md:col-start-8 md:col-span-2 md:row-start-4 md:row-span-3"
      />
    </div>
  </div>

  <ProjectModal :open="modalOpen" :project="activeProject" @close="closeProject" />
</template>

<style>
.bento {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 14px;
  height: 100%;
}

#backdrop {
  position: fixed;
  inset: 0;
  background: rgba(8, 2, 7, 0.55);
  z-index: 50;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease;
}

#backdrop.show {
  opacity: 1;
  pointer-events: auto;
}

@media (max-width: 900px) {
  #app-height {
    padding-left: 12px !important;
    padding-bottom: 76px !important;
    height: auto !important;
    overflow: visible !important;
  }
  .bento {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .bento > * {
    min-height: 220px;
  }
}
</style>
