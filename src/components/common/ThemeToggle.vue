<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    @click="toggleTheme"
    :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
    class="relative p-2 rounded-lg transition-colors duration-200 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-white/40 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-md cursor-pointer focus:outline-none"
  >
    <Sun
      v-if="isDark"
      class="w-4 h-4 transition-transform duration-300 hover:rotate-45"
    />
    <Moon
      v-else
      class="w-4 h-4 transition-transform duration-300 hover:-rotate-12"
    />
  </button>
</template>
