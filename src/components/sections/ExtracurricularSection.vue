<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import {
  Cpu,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Building2,
} from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

// Aba ativa: inicia com Redbone
const activeTab = ref<'redbone' | 'hackingu'>('redbone')

const activeExperience = computed(() => {
  return (
    content.value.extracurriculars.find((e) => e.id === activeTab.value) ||
    content.value.extracurriculars[0]
  )
})

// Controle do Carrossel de Fotos
const currentSlide = ref(0)
const isPaused = ref(false)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

const totalSlides = computed(() => activeExperience.value.images.length)

const nextSlide = () => {
  if (totalSlides.value <= 1) return
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const prevSlide = () => {
  if (totalSlides.value <= 1) return
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

// Autoplay a cada 4 segundos
const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    if (!isPaused.value && totalSlides.value > 1) {
      nextSlide()
    }
  }, 4000)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

watch(activeTab, () => {
  currentSlide.value = 0
})

// Suporte a arraste (Drag com Mouse e Touch Swipe)
const startX = ref(0)
const isDragging = ref(false)

const handleTouchStart = (e: TouchEvent) => {
  if (!e.touches[0]) return
  startX.value = e.touches[0].clientX
  isPaused.value = true
}

const handleTouchEnd = (e: TouchEvent) => {
  isPaused.value = false
  if (!e.changedTouches[0]) return
  const endX = e.changedTouches[0].clientX
  const diff = startX.value - endX
  if (Math.abs(diff) > 40) {
    if (diff > 0) nextSlide()
    else prevSlide()
  }
}

const handleMouseDown = (e: MouseEvent) => {
  startX.value = e.clientX
  isDragging.value = true
  isPaused.value = true
}

const handleMouseUp = (e: MouseEvent) => {
  if (!isDragging.value) return
  isDragging.value = false
  isPaused.value = false
  const diff = startX.value - e.clientX
  if (Math.abs(diff) > 40) {
    if (diff > 0) nextSlide()
    else prevSlide()
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section
    id="extracurriculares"
    class="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto space-y-10">
      <!-- Cabeçalho da Seção -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {{ content.ui.extracurricularTitle || 'Experiências Adicionais & Pesquisa' }}
          </h2>
        </div>

        <!-- Seletor de Abas Integrado -->
        <div class="flex items-center gap-2 p-1.5 rounded-xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md font-mono text-xs shrink-0 self-start sm:self-auto">
          <button
            type="button"
            @click="activeTab = 'redbone'"
            class="px-5 py-2.5 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            :class="
              activeTab === 'redbone'
                ? 'bg-blue-600 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md scale-[1.02]'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
            "
          >
            <Cpu class="w-4 h-4" />
            <span>Redbone // Robótica</span>
          </button>

          <button
            type="button"
            @click="activeTab = 'hackingu'"
            class="px-5 py-2.5 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer"
            :class="
              activeTab === 'hackingu'
                ? 'bg-blue-600 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md scale-[1.02]'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
            "
          >
            <ShieldAlert class="w-4 h-4" />
            <span>HackingU // Cibersegurança</span>
          </button>
        </div>
      </div>

      <!-- Conteúdo de Robótica & Pesquisa sem card/borda externa -->
      <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Coluna Esquerda: Carrossel de Fotos Ampliado Verticalmente -->
          <div
            class="lg:col-span-5 relative w-full h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/40 dark:border-white/10 bg-[#000E2B]/90 shadow-2xl select-none group"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
            @mousedown="handleMouseDown"
            @mouseup="handleMouseUp"
          >
            <!-- Imagem ativa com transição suave -->
            <transition
              mode="out-in"
              enter-active-class="transition duration-500 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-300 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <img
                :key="activeExperience.images[currentSlide] || currentSlide"
                :src="activeExperience.images[currentSlide] || '/images/extracurricular/redbone-1.jpg'"
                :alt="activeExperience.name + ' - Foto ' + (currentSlide + 1)"
                draggable="false"
                class="w-full h-full object-cover object-center pointer-events-none"
              />
            </transition>

            <!-- Overlay sutil -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#000E2B]/85 via-transparent to-[#000E2B]/25 pointer-events-none"></div>

            <!-- Controles de Navegação Anterior / Próximo -->
            <div
              v-if="totalSlides > 1"
              class="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none"
            >
              <button
                type="button"
                @click.stop="prevSlide"
                aria-label="Foto anterior"
                class="pointer-events-auto p-2.5 rounded-full bg-[#000E2B]/80 hover:bg-[#0B0D4E] text-white backdrop-blur-md border border-white/25 dark:border-blue-500/30 transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-xl hover:scale-110"
              >
                <ChevronLeft class="w-5 h-5" />
              </button>

              <button
                type="button"
                @click.stop="nextSlide"
                aria-label="Próxima foto"
                class="pointer-events-auto p-2.5 rounded-full bg-[#000E2B]/80 hover:bg-[#0B0D4E] text-white backdrop-blur-md border border-white/25 dark:border-blue-500/30 transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-xl hover:scale-110"
              >
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>

            <!-- Indicadores de slide (Dots) no rodapé do carrossel -->
            <div
              v-if="totalSlides > 1"
              class="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 pointer-events-auto"
            >
              <button
                v-for="(_, idx) in activeExperience.images"
                :key="idx"
                type="button"
                @click="goToSlide(idx)"
                :aria-label="'Ir para foto ' + (idx + 1)"
                class="h-2 rounded-full transition-all duration-300 cursor-pointer"
                :class="
                  currentSlide === idx
                    ? 'w-8 bg-white shadow-md'
                    : 'w-2 bg-white/40 hover:bg-white/80'
                "
              ></button>
            </div>
          </div>

          <!-- Coluna Direita: Título, Contexto, Descrição e Competências -->
          <div class="lg:col-span-7 space-y-7">
            <div class="space-y-3">
              <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span class="inline-flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100 font-bold">
                  <Building2 class="w-4 h-4" />
                  {{ activeExperience.institution }}
                </span>
                <span>•</span>
                <span class="inline-flex items-center gap-1.5">
                  <Calendar class="w-4 h-4" />
                  {{ activeExperience.period }}
                </span>
              </div>

              <h3 class="text-3xl sm:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
                {{ activeExperience.name }}
              </h3>
            </div>

            <p class="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {{ activeExperience.description }}
            </p>

            <!-- Tópicos práticos desenvolvidos -->
            <div class="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <div class="flex flex-wrap gap-2.5">
                <span
                  v-for="topic in activeExperience.topics"
                  :key="topic"
                  class="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-white/50 dark:bg-white/5 text-zinc-900 dark:text-zinc-200 border border-white/40 dark:border-white/10 backdrop-blur-md"
                >
                  • {{ topic }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
