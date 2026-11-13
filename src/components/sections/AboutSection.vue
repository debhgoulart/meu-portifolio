<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import {
  Server,
  HeartHandshake,
  Compass,
  Cpu,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Calendar,
  Building2,
} from 'lucide-vue-next'
import SectionHeading from '../common/SectionHeading.vue'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

// Controle da aba de experiências adicionais (começando com a Redbone)
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

// Autoplay a cada 4 segundos (para a Redbone ou quando há múltiplos slides)
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

// Reset do slide ao trocar de aba
watch(activeTab, () => {
  currentSlide.value = 0
})

// Suporte a arraste (Drag e Touch Swipe)
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
    id="sobre"
    class="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto space-y-16">
      <!-- Cabeçalho -->
      <SectionHeading
        :tag="content.ui.aboutTag"
        :title="content.ui.aboutTitle"
        :subtitle="content.ui.aboutSubtitle"
      />

      <!-- Bio Principal -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-8 space-y-5 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
          <p
            v-for="(paragraph, index) in content.personalInfo.aboutParagraphs"
            :key="index"
            :class="index === 0 ? 'text-zinc-950 dark:text-white font-medium text-lg sm:text-xl' : ''"
          >
            {{ paragraph }}
          </p>

          <div class="pt-2 flex flex-wrap gap-2.5 font-mono text-xs">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md text-zinc-900 dark:text-zinc-200">
              <Compass class="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />
              ORIENTADA A SOLUÇÕES
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md text-zinc-900 dark:text-zinc-200">
              <HeartHandshake class="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />
              TRABALHO EM EQUIPE
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md text-zinc-900 dark:text-zinc-200">
              <Server class="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />
              BACKEND ROBUSTO & TESTES
            </span>
          </div>
        </div>

        <div class="lg:col-span-4 p-6 glass-card space-y-4 font-mono text-xs">
          <div class="flex items-center gap-2 text-zinc-950 dark:text-white font-bold uppercase tracking-wider">
            <Sparkles class="w-4 h-4 text-zinc-400" />
            <span>Foco Técnico</span>
          </div>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans text-sm">
            Engenharia de software com ênfase em microsserviços, modelagem relacional em PostgreSQL e Oracle, segurança de APIs e interfaces reativas modernas.
          </p>
          <div class="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-2 text-zinc-500 dark:text-zinc-400">
            <div class="flex justify-between">
              <span>LOCALIZAÇÃO:</span>
              <span class="font-bold text-zinc-900 dark:text-zinc-200">Rio de Janeiro, RJ</span>
            </div>
            <div class="flex justify-between">
              <span>FORMAÇÃO:</span>
              <span class="font-bold text-zinc-900 dark:text-zinc-200">Ciência da Computação</span>
            </div>
            <div class="flex justify-between">
              <span>ESTÁGIO ATUAL:</span>
              <span class="font-bold text-zinc-900 dark:text-zinc-200">CREA-RJ</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Único de Experiências Adicionais (Redbone & HackingU) -->
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div>
            <div class="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-bold mb-1">
              [ PESQUISA & ATIVIDADES EXTRACURRICULARES ]
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              {{ content.ui.extracurricularTitle }}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              {{ content.ui.extracurricularSubtitle }}
            </p>
          </div>

          <!-- Seletor de Abas no topo do card -->
          <div class="flex items-center gap-2 p-1 rounded-xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md font-mono text-xs">
            <button
              type="button"
              @click="activeTab = 'redbone'"
              class="px-4 py-2 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer"
              :class="
                activeTab === 'redbone'
                  ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md scale-[1.02]'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              "
            >
              <Cpu class="w-3.5 h-3.5" />
              <span>Redbone // Robótica</span>
            </button>

            <button
              type="button"
              @click="activeTab = 'hackingu'"
              class="px-4 py-2 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer"
              :class="
                activeTab === 'hackingu'
                  ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-md scale-[1.02]'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              "
            >
              <ShieldAlert class="w-3.5 h-3.5" />
              <span>HackingU // Cibersegurança</span>
            </button>
          </div>
        </div>

        <!-- O Card Único Interativo -->
        <article
          class="glass-card p-6 sm:p-10 transition-all duration-500 border border-white/30 dark:border-white/10"
        >
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <!-- Coluna Esquerda: Carrossel de Fotos com Autoplay e Arraste -->
            <div
              class="lg:col-span-5 relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/40 dark:border-white/10 bg-zinc-950/80 shadow-2xl select-none group"
              @mouseenter="isPaused = true"
              @mouseleave="isPaused = false"
              @touchstart="handleTouchStart"
              @touchend="handleTouchEnd"
              @mousedown="handleMouseDown"
              @mouseup="handleMouseUp"
            >
              <!-- Imagem ativa -->
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
                  :alt="activeExperience.name + ' - Slide ' + (currentSlide + 1)"
                  draggable="false"
                  class="w-full h-full object-cover object-center pointer-events-none"
                />
              </transition>

              <!-- Overlay escuro suave com badge do projeto -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

              <!-- Indicador de arraste / navegação -->
              <div class="absolute top-3 left-3 pointer-events-none">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {{ activeExperience.badge }}
                </span>
              </div>

              <!-- Controles de Navegação Anterior / Próximo -->
              <div
                v-if="totalSlides > 1"
                class="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none"
              >
                <button
                  type="button"
                  @click.stop="prevSlide"
                  aria-label="Foto anterior"
                  class="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-lg"
                >
                  <ChevronLeft class="w-4 h-4" />
                </button>

                <button
                  type="button"
                  @click.stop="nextSlide"
                  aria-label="Próxima foto"
                  class="pointer-events-auto p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 group-hover:opacity-100 cursor-pointer shadow-lg"
                >
                  <ChevronRight class="w-4 h-4" />
                </button>
              </div>

              <!-- Indicadores de slide (Dots) no rodapé do carrossel -->
              <div
                v-if="totalSlides > 1"
                class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-auto"
              >
                <button
                  v-for="(_, idx) in activeExperience.images"
                  :key="idx"
                  type="button"
                  @click="goToSlide(idx)"
                  :aria-label="'Ir para foto ' + (idx + 1)"
                  class="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
                  :class="
                    currentSlide === idx
                      ? 'w-6 bg-white shadow-sm'
                      : 'w-1.5 bg-white/40 hover:bg-white/70'
                  "
                ></button>
              </div>
            </div>

            <!-- Coluna Direita: Título e Descrição ao lado -->
            <div class="lg:col-span-7 space-y-6">
              <div class="space-y-2">
                <div class="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span class="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 font-bold">
                    <Building2 class="w-3.5 h-3.5" />
                    {{ activeExperience.institution }}
                  </span>
                  <span>•</span>
                  <span class="inline-flex items-center gap-1">
                    <Calendar class="w-3.5 h-3.5" />
                    {{ activeExperience.period }}
                  </span>
                </div>

                <h4 class="text-2xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  {{ activeExperience.name }}
                </h4>

                <p
                  v-if="activeExperience.role"
                  class="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-semibold"
                >
                  [ {{ activeExperience.role }} ]
                </p>
              </div>

              <p class="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                {{ activeExperience.description }}
              </p>

              <!-- Tópicos práticos desenvolvidos -->
              <div class="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-2.5">
                <span class="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold block">
                  Competências & Práticas Aplicadas:
                </span>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="topic in activeExperience.topics"
                    :key="topic"
                    class="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white/50 dark:bg-white/5 text-zinc-900 dark:text-zinc-200 border border-white/40 dark:border-white/10 backdrop-blur-md"
                  >
                    • {{ topic }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
