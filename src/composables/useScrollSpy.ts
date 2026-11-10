import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const activeSection = ref(sectionIds[0] || '')

  const onScroll = () => {
    const scrollPosition = window.scrollY + offset
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const sectionId = sectionIds[i]
      const el = document.getElementById(sectionId)
      if (el) {
        const top = el.offsetTop
        if (scrollPosition >= top) {
          activeSection.value = sectionId
          break
        }
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { activeSection }
}
