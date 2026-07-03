import { ref } from 'vue'

export function useDock() {
  const activeCard = ref(null)

  function maximize(id) {
    activeCard.value = activeCard.value === id ? null : id
  }

  function restore() {
    activeCard.value = null
  }

  return { activeCard, maximize, restore }
}
