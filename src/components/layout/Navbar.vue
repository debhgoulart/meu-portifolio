<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'
import { useScrollSpy } from '../../composables/useScrollSpy'
import { useContent } from '../../composables/useContent'

const { content, currentLang, setLanguage } = useContent()
const isMobileMenuOpen = ref(false)

const sectionIds = ['hero', 'sobre', 'experiencia', 'formacao', 'habilidades', 'projetos', 'contato']
const { activeSection } = useScrollSpy(sectionIds, 120)

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (e: MouseEvent, href: string) => {
  e.preventDefault()
  closeMobileMenu()
  const targetId = href.replace('#', '')
  const el = document.getElementById(targetId)
  if (el) {
    const yOffset = -50
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none transition-colors duration-300"
  >
    <div
      class="w-full px-6 sm:px-10 lg:px-12 py-6 sm:py-8 flex items-center justify-between"
    >
      <div class="flex items-center gap-4 sm:gap-6 pointer-events-auto">
        <a
          href="#hero"
          @click="scrollToSection($event, '#hero')" 
          class="text-sm sm:text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50 hover:opacity-70 dark:hover:text-white transition-all"
        >
          Deborah Goulart
        </a>

        <div class="flex items-center gap-1.5 text-xs font-mono tracking-wider">
          <button
            type="button"
            @click="setLanguage('pt')"
            class="transition-colors cursor-pointer"
            :class="
              currentLang === 'pt'
                ? 'text-zinc-950 dark:text-zinc-100 font-bold border-b border-zinc-950 dark:border-zinc-100'
                : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-950 dark:hover:text-white'
            "
          >
            pt
          </button>
          <span class="text-zinc-300 dark:text-zinc-700">/</span>
          <button
            type="button"
            @click="setLanguage('en')"
            class="transition-colors cursor-pointer"
            :class="
              currentLang === 'en'
                ? 'text-zinc-950 dark:text-zinc-100 font-bold border-b border-zinc-950 dark:border-zinc-100'
                : 'text-zinc-400 dark:text-zinc-600 hover:text-zinc-950 dark:hover:text-white'
            "
          >
            en
          </button>
        </div>
      </div>

      <div class="flex items-center gap-5 sm:gap-7 pointer-events-auto">
        <nav
          class="hidden md:flex items-center gap-5 lg:gap-7 text-xs sm:text-sm font-medium tracking-tight"
          aria-label="Navegação Principal"
        >
          <a
            v-for="link in content.navLinks"
            :key="link.href"
            :href="link.href"
            @click="scrollToSection($event, link.href)"
            class="transition-all duration-200 cursor-pointer capitalize hover:text-zinc-950 dark:hover:text-white"
            :class="
              activeSection === link.href.replace('#', '')
                ? 'text-zinc-950 dark:text-white font-bold underline underline-offset-4 decoration-white-600 dark:decoration-white-400'
                : 'text-zinc-600 dark:text-zinc-400'
            "
          >
            {{ link.label }}
          </a>
        </nav>

        <button
          type="button"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Alternar menu de navegação"
          class="md:hidden text-xs font-mono uppercase tracking-wider text-zinc-900 dark:text-zinc-100 hover:text-zinc-950 dark:hover:text-white py-1 px-2 border border-zinc-300 dark:border-zinc-800 rounded bg-white/70 dark:bg-black/70 backdrop-blur-md transition-colors"
        >
          <span v-if="!isMobileMenuOpen">menu</span>
          <span v-else>close</span>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden pointer-events-auto mx-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-black/95 backdrop-blur-2xl space-y-4 shadow-2xl"
      >
        <div class="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
          <span class="font-bold text-sm text-zinc-950 dark:text-zinc-50">Deborah Goulart</span>
          <button
            type="button"
            @click="closeMobileMenu"
            aria-label="Fechar menu"
            class="text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <div class="space-y-3 pt-1">
          <a
            v-for="link in content.navLinks"
            :key="link.href"
            :href="link.href"
            @click="scrollToSection($event, link.href)"
            class="block text-base capitalize tracking-tight transition-colors hover:text-zinc-950 dark:hover:text-white"
            :class="
              activeSection === link.href.replace('#', '')
                ? 'text-zinc-950 dark:text-white font-bold'
                : 'text-zinc-600 dark:text-zinc-400'
            "
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
