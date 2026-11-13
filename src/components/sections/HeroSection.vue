<script setup lang="ts">
import {
  Download,
  ArrowUpRight,
  MapPin,
  ChevronDown,
} from 'lucide-vue-next'
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
    <div class="relative z-10 max-w-6xl mx-auto w-full">
      <!-- Apresentação Principal -->
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

      <!-- Descrição Concisa -->
      <div class="max-w-2xl mb-10">
        <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
          {{ content.personalInfo.shortBio }}
        </p>
      </div>

      <!-- Ações: Botões e Localização Quadrada -->
      <div class="flex flex-wrap items-center gap-3.5 text-xs font-mono">
        <!-- CTA Primário: Ver Projetos -->
        <a
          href="#projetos"
          @click="scrollToSection($event, 'projetos')"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg uppercase tracking-wider font-bold bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.02]"
        >
          <span>{{ content.ui.heroCtaProjects }}</span>
          <ArrowUpRight class="w-3.5 h-3.5" />
        </a>

        <!-- CTA Secundário: Baixar Currículo em PDF -->
        <a
          href="/curriculo/curriculo.pdf"
          download="curriculo-deborah-goulart.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-lg uppercase tracking-wider font-bold border border-zinc-300 dark:border-zinc-800 text-zinc-950 dark:text-zinc-100 hover:border-zinc-950 dark:hover:border-zinc-100 bg-white/40 dark:bg-black/30 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-[1.02]"
        >
          <span>{{ content.ui.heroCtaResume }}</span>
          <Download class="w-3.5 h-3.5" />
        </a>

        <!-- Localização Rio de Janeiro, RJ (Badge Quadrado) -->
        <div class="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white/40 dark:bg-black/30 backdrop-blur-md text-zinc-900 dark:text-zinc-100 font-bold uppercase tracking-wider shadow-sm">
          <MapPin class="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
          <span>Rio de Janeiro, RJ</span>
        </div>
      </div>
    </div>

    <!-- Indicador de Scroll Sutil e Neutro (centralizado) -->
    <div class="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center pointer-events-auto">
      <a
        href="#habilidades"
        @click="scrollToSection($event, 'habilidades')"
        aria-label="Rolar para baixo"
        class="text-zinc-400/40 hover:text-zinc-950 dark:text-zinc-500/40 dark:hover:text-white transition-all duration-300 cursor-pointer p-2 hover:scale-110"
      >
        <ChevronDown class="w-5 h-5 stroke-[1.5] animate-bounce" />
      </a>
    </div>
  </section>
</template>
