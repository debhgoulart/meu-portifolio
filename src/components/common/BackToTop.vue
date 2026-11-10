<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

const checkScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-95"
  >
    <button
      v-if="isVisible"
      type="button"
      @click="scrollToTop"
      aria-label="Voltar ao topo da página"
      class="fixed bottom-6 right-6 z-40 p-2.5 rounded-lg bg-zinc-950/85 text-white dark:bg-zinc-100/90 dark:text-zinc-950 border border-white/20 dark:border-zinc-800 shadow-md backdrop-blur-md hover:opacity-85 active:scale-95 transition-all cursor-pointer"
    >
      <ArrowUp class="w-4 h-4" />
    </button>
  </transition>
</template>
