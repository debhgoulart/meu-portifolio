<script setup lang="ts">
import { Github, Linkedin, Mail, Download } from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

const scrollToSection = (e: MouseEvent, targetId: string) => {
  e.preventDefault()
  const el = document.getElementById(targetId)
  if (el) {
    const yOffset = -50
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[96vh] flex flex-col justify-center pt-28 sm:pt-36 pb-20 px-6 sm:px-10 lg:px-12"
  >
    <div class="relative z-10 max-w-5xl mx-auto w-full">
      <div class="space-y-4 mb-8">
        <h1
          class="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.05]"
        >
          {{ content.personalInfo.name }}
        </h1>

        <div class="flex flex-wrap items-center gap-3">
          <h2
            class="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-200"
          >
            {{ content.personalInfo.title }}
          </h2>
        </div>

        <p
          class="text-lg sm:text-2xl text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed max-w-3xl pt-2"
        >
          {{ content.personalInfo.subtitle }}
        </p>
      </div>

      <div class="max-w-2xl mb-10">
        <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          {{ content.personalInfo.shortBio }}
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3.5 text-xs font-mono">
        <a
          href="/curriculo/curriculo.pdf"
          download="curriculo-deborah-goulart.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg uppercase tracking-wider font-bold bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors cursor-pointer shadow-sm"
        >
          <span>{{ content.ui.heroCtaResume }}</span>
          <Download class="w-3.5 h-3.5" />
        </a>

        <a
          href="#contato"
          @click="scrollToSection($event, 'contato')"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg uppercase tracking-wider font-bold border border-zinc-300 dark:border-zinc-800 text-zinc-950 dark:text-zinc-100 hover:border-zinc-950 dark:hover:border-zinc-100 bg-white/30 dark:bg-black/30 backdrop-blur-md transition-colors cursor-pointer"
        >
          <span>{{ content.ui.heroCtaContact }}</span>
        </a>

        <div class="h-5 w-px bg-zinc-300 dark:bg-zinc-800 hidden sm:block mx-1"></div>

        <div class="flex items-center gap-2">
          <a
            :href="content.personalInfo.social.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Deborah Goulart"
            class="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 bg-white/20 dark:bg-black/20 backdrop-blur-md transition-colors"
          >
            <Github class="w-4 h-4" />
          </a>

          <a
            :href="content.personalInfo.social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Deborah Goulart"
            class="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 bg-white/20 dark:bg-black/20 backdrop-blur-md transition-colors"
          >
            <Linkedin class="w-4 h-4" />
          </a>

          <a
            :href="'mailto:' + content.personalInfo.social.email"
            aria-label="E-mail de Deborah Goulart"
            class="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 bg-white/20 dark:bg-black/20 backdrop-blur-md transition-colors"
          >
            <Mail class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
