<script setup lang="ts">
import { computed } from 'vue'
import {
  Download,
  ArrowUpRight,
  MapPin,
  ChevronDown,
} from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content, currentLang } = useContent()

const cvHref = computed(() => {
  return currentLang.value === 'en'
    ? '/curriculo/curriculo-en.pdf'
    : '/curriculo/curriculo.pdf'
})

const cvDownloadName = computed(() => {
  return currentLang.value === 'en'
    ? 'resume-deborah-goulart.pdf'
    : 'curriculo-deborah-goulart.pdf'
})

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
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
        <!-- Coluna Esquerda: Apresentação, Bio e Botões -->
        <div class="lg:col-span-8 flex flex-col justify-between py-1">
          <div>
            <!-- Apresentação Principal -->
            <div class="space-y-4 mb-8">
              <h1
                class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-zinc-950 dark:text-white leading-[1.08]"
              >
                {{ content.personalInfo.name }}
              </h1>

              <div class="flex flex-wrap items-center gap-3">
                <h2
                  class="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-200"
                >
                  {{ content.personalInfo.title }}
                </h2>
              </div>

              <p
                v-if="content.personalInfo.subtitle"
                class="text-lg sm:text-2xl text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed max-w-2xl pt-2"
              >
                {{ content.personalInfo.subtitle }}
              </p>
            </div>

            <!-- Bio / Descrição -->
            <div class="max-w-2xl mb-6 sm:mb-7">
              <p class="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                {{ content.personalInfo.shortBio }}
              </p>
            </div>
          </div>

          <!-- Ações: Botões e Localização Quadrada -->
          <div class="flex flex-wrap items-center gap-3.5 text-xs font-mono pt-1 sm:pt-2">
            <!-- CTA Primário: Ver Projetos -->
            <a
              href="#projetos"
              @click="scrollToSection($event, 'projetos')"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-lg uppercase tracking-wider font-bold bg-blue-600 hover:bg-blue-700 text-white dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.02]"
            >
              <span>{{ content.ui.heroCtaProjects }}</span>
              <ArrowUpRight class="w-3.5 h-3.5" />
            </a>

            <!-- CTA Secundário: Baixar Currículo em PDF -->
            <a
              :href="cvHref"
              :download="cvDownloadName"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-lg uppercase tracking-wider font-bold border border-zinc-300 dark:border-blue-900/50 text-zinc-950 dark:text-zinc-100 hover:border-blue-600 dark:hover:border-blue-400 bg-white/40 dark:bg-[#000E2B]/60 backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-[1.02]"
            >
              <span>{{ content.ui.heroCtaResume }}</span>
              <Download class="w-3.5 h-3.5" />
            </a>

            <!-- Localização Rio de Janeiro, RJ (Badge Quadrado) -->
            <div class="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-zinc-300 dark:border-blue-900/50 bg-white/40 dark:bg-[#000E2B]/60 backdrop-blur-md text-zinc-900 dark:text-zinc-100 font-bold uppercase tracking-wider shadow-sm">
              <MapPin class="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              <span>Rio de Janeiro, RJ</span>
            </div>
          </div>
        </div>

        <!-- Coluna Direita: Foto de Perfil Vertical com Quina igual aos Botões -->
        <div class="lg:col-span-4 flex flex-col items-center lg:items-stretch justify-center">
          <div
            class="relative w-full max-w-xs sm:max-w-sm lg:max-w-none h-full min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] aspect-[3/4] lg:aspect-auto rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-700/60 shadow-xl group"
          >
            <img
              src="/images/profile.png"
              :alt="content.personalInfo.name"
              class="absolute inset-0 w-full h-full object-cover object-[center_15%] select-none transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="eager"
            />
          </div>
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
