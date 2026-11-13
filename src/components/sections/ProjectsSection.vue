<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Github,
  ExternalLink,
  Calendar,
  ChevronDown,
  ChevronUp,
} from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

// Controle de exibição: começa com 3, libera mais 2 a cada clique
const visibleCount = ref(3)

const visibleProjects = computed(() => {
  return content.value.projects.slice(0, visibleCount.value)
})

const showMore = () => {
  visibleCount.value = Math.min(visibleCount.value + 2, content.value.projects.length)
}

const showLess = () => {
  visibleCount.value = 3
}
</script>

<template>
  <section
    id="projetos"
    class="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Título Limpo sem subtítulo e sem tag numerada -->
      <div class="mb-16 md:mb-20">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          {{ content.ui.projectsTitle || 'Projetos em Destaque' }}
        </h2>
      </div>

      <!-- Lista de Projetos (Layout Editorial inspirado no Print 1) -->
      <div class="space-y-16 sm:space-y-24">
        <article
          v-for="project in visibleProjects"
          :key="project.id"
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-16 sm:pb-24 border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-b-0 transition-all duration-500"
        >
          <!-- Coluna Esquerda: Preview / Ilustração / Imagem Demo -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-md aspect-[16/11] rounded-2xl overflow-hidden glass-card p-2 border border-white/30 dark:border-white/10 group shadow-2xl">
              <div class="w-full h-full rounded-xl overflow-hidden relative bg-zinc-950/40">
                <img
                  :src="project.image || '/images/projects/project-demo.jpg'"
                  :alt="project.title"
                  loading="lazy"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                <div class="absolute bottom-3 left-3 flex items-center gap-2">
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {{ project.category }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Coluna Direita: Título com ponto acentuado, Narrativa, Stack e Botões -->
          <div class="lg:col-span-7 space-y-5">
            <!-- Meta: Apenas Data e Categoria, sem [01] e sem indicativos Corporativo // MVP -->
            <div class="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <Calendar class="w-3.5 h-3.5" />
              <span>{{ project.date || project.year }}</span>
              <span>•</span>
              <span class="text-zinc-700 dark:text-zinc-300 font-medium">{{ project.category }}</span>
            </div>

            <!-- Título com ponto acentuado preto/branco (estilo Print 1) -->
            <h3 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
              {{ project.title }}<span class="text-zinc-400 dark:text-zinc-500">.</span>
            </h3>

            <!-- Parágrafos de Narrativa Técnica -->
            <div class="space-y-3 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                {{ project.description }}
              </p>
            </div>

            <!-- Tecnologias Utilizadas -->
            <div class="pt-2">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/50 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-white/40 dark:border-white/10 backdrop-blur-md"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Botões Estilizados (Preto e Branco) -->
            <div class="pt-4 flex flex-wrap items-center gap-3.5 text-xs font-mono">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 border-2 border-zinc-300 dark:border-zinc-700 hover:border-zinc-950 dark:hover:border-white hover:bg-white/30 dark:hover:bg-white/10 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.02]"
                :aria-label="'Ver ' + project.title + ' no GitHub'"
              >
                <Github class="w-4 h-4" />
                <span>{{ content.ui.viewGithub }}</span>
              </a>

              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold uppercase tracking-wider bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-all duration-200 cursor-pointer shadow-md hover:scale-[1.02]"
                :aria-label="'Ver demonstração online de ' + project.title"
              >
                <span>{{ content.ui.viewDemo }}</span>
                <ExternalLink class="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Botões de Ação: Ver Mais e Ver Menos -->
      <div class="mt-16 flex items-center justify-center gap-4">
        <button
          v-if="visibleCount < content.projects.length"
          type="button"
          @click="showMore"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
        >
          <span>Ver mais</span>
          <ChevronDown class="w-4 h-4" />
        </button>

        <button
          v-if="visibleCount > 3"
          type="button"
          @click="showLess"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5 transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
        >
          <span>Ver menos</span>
          <ChevronUp class="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
</template>
