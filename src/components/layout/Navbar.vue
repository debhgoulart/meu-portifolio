<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { X, Sun, Moon } from 'lucide-vue-next'
import { useScrollSpy } from '../../composables/useScrollSpy'
import { useContent } from '../../composables/useContent'
import { useTheme } from '../../composables/useTheme'

const { content, currentLang, setLanguage } = useContent()
const { isDark, toggleTheme } = useTheme()
const isMobileMenuOpen = ref(false)
const isVisible = ref(true)

let lastScrollY = 0
const SCROLL_THRESHOLD = 8

const handleScroll = () => {
  if (typeof window === 'undefined') return
  const currentScrollY = window.scrollY

  // Sempre visível próximo ao topo
  if (currentScrollY <= 40) {
    isVisible.value = true
    lastScrollY = currentScrollY
    return
  }

  // Não esconde se o menu mobile estiver aberto
  if (isMobileMenuOpen.value) {
    isVisible.value = true
    lastScrollY = currentScrollY
    return
  }

  const diff = currentScrollY - lastScrollY

  // Se rolou para baixo além do limiar -> esconde a barra
  if (diff > SCROLL_THRESHOLD && currentScrollY > 60) {
    isVisible.value = false
  }
  // Se rolou para cima além do limiar -> mostra a barra
  else if (diff < -SCROLL_THRESHOLD) {
    isVisible.value = true
  }

  lastScrollY = currentScrollY
}

const sectionIds = ['hero', 'habilidades', 'projetos', 'extracurriculares', 'contato']
const { activeSection } = useScrollSpy(sectionIds, 120)

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (e: MouseEvent, href: string) => {
  e.preventDefault()
  closeMobileMenu()
  isVisible.value = true
  const targetId = href.replace('#', '')
  const el = document.getElementById(targetId)
  if (el) {
    const yOffset = -50
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    lastScrollY = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none transition-all duration-300 ease-in-out"
    :class="isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'"
  >
    <!-- BOTÃO PT/EN: NO EXTREMO CANTO ESQUERDO DO SITE -->
    <div class="absolute left-3 sm:left-6 lg:left-8 top-5 sm:top-7 pointer-events-auto z-50">
      <div
        class="inline-flex items-center p-0.5 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-xs font-mono text-[10px] font-bold uppercase select-none"
        role="group"
        aria-label="Seleção de idioma / Language selection"
      >
        <button
          type="button"
          @click="setLanguage('pt')"
          :aria-pressed="currentLang === 'pt'"
          class="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center transition-all duration-200 cursor-pointer"
          :class="
            currentLang === 'pt'
              ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-xs'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
          "
        >
          pt
        </button>
        <button
          type="button"
          @click="setLanguage('en')"
          :aria-pressed="currentLang === 'en'"
          class="w-5.5 h-5.5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center transition-all duration-200 cursor-pointer"
          :class="
            currentLang === 'en'
              ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-xs'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
          "
        >
          en
        </button>
      </div>
    </div>

    <!-- BOTÃO DARK/LIGHT MODE: NO EXTREMO CANTO DIREITO DO SITE -->
    <div class="absolute right-3 sm:right-6 lg:right-8 top-5 sm:top-7 pointer-events-auto z-50">
      <button
        type="button"
        @click="toggleTheme"
        :aria-label="isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'"
        :title="isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'"
        class="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-black/60 backdrop-blur-md flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-950 dark:hover:border-zinc-100 transition-all cursor-pointer shadow-xs active:scale-95 focus:outline-none"
      >
        <Sun v-if="isDark" class="w-3.5 h-3.5" />
        <Moon v-else class="w-3.5 h-3.5" />
      </button>
    </div>

    <!-- NAVBAR ORIGINAL: POSIÇÃO E DESIGN 100% PRESERVADOS -->
    <div class="px-6 sm:px-10 lg:px-12 py-5 sm:py-7">
      <div
        class="max-w-6xl mx-auto w-full flex items-center justify-between"
      >
        <div class="flex items-center gap-4 sm:gap-6 pointer-events-auto pl-12 sm:pl-0">
          <a
            href="#hero"
            @click="scrollToSection($event, '#hero')" 
            class="text-sm sm:text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50 hover:opacity-70 dark:hover:text-white transition-all"
          >
            Deborah Goulart
          </a>
        </div>

        <div class="flex items-center gap-5 sm:gap-7 pointer-events-auto pr-9 sm:pr-0">
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
                  ? 'text-zinc-950 dark:text-white font-bold underline underline-offset-4 decoration-zinc-950 dark:decoration-white'
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
    </div>

    <!-- Dropdown Menu Mobile -->
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
