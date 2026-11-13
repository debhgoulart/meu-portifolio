<script setup lang="ts">
import { computed } from 'vue'
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content } = useContent()
const currentYear = computed(() => new Date().getFullYear())

</script>

<template>
  <footer class="border-t border-zinc-200/60 dark:border-zinc-800/60 py-12 px-6 sm:px-10 lg:px-12 relative z-10 font-mono text-xs transition-colors duration-500">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-1 text-center sm:text-left">
        <p class="font-sans font-bold text-sm text-zinc-950 dark:text-white">
          {{ content.personalInfo.name }}
        </p>
        <p class="text-zinc-500 dark:text-zinc-400">
          © {{ currentYear }} • {{ content.ui.rightsReserved }} • VUE 3 + TYPESCRIPT + NEAT WEBGL
        </p>
      </div>

      <div class="flex items-center gap-2.5">
        <a
          :href="content.personalInfo.social.github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Deborah Goulart"
          class="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800 bg-white/20 dark:bg-white/5 backdrop-blur-md transition-colors"
        >
          <Github class="w-4 h-4" />
        </a>

        <a
          :href="content.personalInfo.social.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Deborah Goulart"
          class="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800 bg-white/20 dark:bg-white/5 backdrop-blur-md transition-colors"
        >
          <Linkedin class="w-4 h-4" />
        </a>

        <a
          :href="'mailto:' + content.personalInfo.social.email"
          aria-label="E-mail de Deborah Goulart"
          class="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800 bg-white/20 dark:bg-white/5 backdrop-blur-md transition-colors"
        >
          <Mail class="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
