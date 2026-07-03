import { ref, onMounted, onUnmounted } from 'vue'

export function useClock() {
  const clock = ref('--:--')
  let interval

  function update() {
    const now = new Date()
    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
    const hh = String(now.getHours()).padStart(2, '0')
    const mm = String(now.getMinutes()).padStart(2, '0')
    clock.value = `${days[now.getDay()]} ${hh}:${mm}`
  }

  onMounted(() => {
    update()
    interval = setInterval(update, 10000)
  })

  onUnmounted(() => clearInterval(interval))

  return { clock }
}
