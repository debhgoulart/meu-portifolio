<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Github,
  ExternalLink,
  Cpu,
  ArrowUpRight,
} from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

const viewMode = ref<'project' | 'index'>('project')
const selectedCategory = ref<string>('all')

const categories = computed(() => {
  return [
    { id: 'all', label: content.value.ui.allCategories },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'Backend', label: 'Backend' },
    { id: 'Frontend', label: 'Frontend' },
  ]
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return content.value.projects
  }
  return content.value.projects.filter((p) => p.category === selectedCategory.value)
})

const getCategoryCount = (catId: string) => {
  if (catId === 'all') return content.value.projects.length
  return content.value.projects.filter((p) => p.category === catId).length
}
</script>

<template>
  <section id="projetos" class="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-zinc-200/60 dark:border-zinc-800/60 mb-12">
        <div>
          <div class="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            [ 05 // WORK ARCHIVE ]
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Sistemas & Projetos
          </h2>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="flex items-center gap-1 text-xs font-mono">
            <button
              v-for="cat in categories"
              :key="cat.id"
              type="button"
              @click="selectedCategory = cat.id"
              class="px-3 py-1.5 rounded-md transition-colors cursor-pointer"
              :class="
                selectedCategory === cat.id
                  ? 'text-zinc-950 dark:text-white font-bold bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/20 backdrop-blur-md shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              "
            >
              {{ cat.label }} [{{ getCategoryCount(cat.id) }}]
            </button>
          </div>

          <div class="h-4 w-px bg-zinc-300 dark:bg-zinc-800 hidden sm:block"></div>

          <div class="flex items-center gap-1 text-xs font-mono border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-md p-1 rounded-md">
            <button
              type="button"
              @click="viewMode = 'project'"
              class="px-3 py-1.5 rounded-md text-[11px] font-semibold transition-colors cursor-pointer"
              :class="
                viewMode === 'project'
                  ? 'bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
              "
            >
              {{ content.ui.projectView }}
            </button>

            <button
              type="button"
              @click="viewMode = 'index'"
              class="px-3 py-1.5 rounded-md text-[11px] font-semibold transition-colors cursor-pointer"
              :class="
                viewMode === 'index'
                  ? 'bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
              "
            >
              {{ content.ui.indexView }}
            </button>
          </div>
        </div>
      </div>

      <div v-if="viewMode === 'project'" class="space-y-12 sm:space-y-16">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="glass-card p-6 sm:p-10 space-y-8"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-200/50 dark:border-zinc-800/60 pb-4">
            <div class="flex items-center gap-3">
              <span class="font-bold text-zinc-950 dark:text-white">[{{ project.index || '01' }}]</span>
              <span class="uppercase tracking-wider">{{ project.title }}</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="px-2.5 py-1 rounded-md bg-white/30 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10 backdrop-blur-md">
                {{ project.category }}
              </span>
              <span>{{ project.year || '2024' }}</span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-6">
              <h3 class="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                {{ project.title }}
              </h3>

              <p class="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                {{ project.description }}
              </p>

              <div v-if="project.architecture && project.architecture.length > 0" class="pt-4 space-y-3">
                <span class="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold flex items-center gap-1.5">
                  <Cpu class="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
                  Arquitetura & Engenharia de Software
                </span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div
                    v-for="(arch, idx) in project.architecture"
                    :key="idx"
                    class="p-3.5 rounded-xl border border-white/30 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-100 mt-1.5 shrink-0"></span>
                    <span class="leading-relaxed">{{ arch }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 space-y-6 lg:border-l lg:border-zinc-200/60 dark:lg:border-zinc-800/60 lg:pl-8">
              <div class="space-y-1">
                <span class="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400 block">
                  Escopo / Função
                </span>
                <p class="text-sm font-bold text-zinc-950 dark:text-white">
                  {{ project.role || 'Engenharia Full Stack' }}
                </p>
              </div>

              <div class="space-y-2">
                <span class="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400 block">
                  Stack Tecnológica
                </span>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/30 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-white/30 dark:border-white/10 backdrop-blur-md"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div v-if="project.metrics" class="space-y-1">
                <span class="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400 block">
                  Contexto Institucional
                </span>
                <p class="text-xs font-mono text-zinc-700 dark:text-zinc-300">
                  {{ project.metrics }}
                </p>
              </div>

              <div class="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col gap-2.5 font-mono text-xs">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-between w-full py-3 px-4 rounded-lg font-bold uppercase bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-950 transition-colors shadow-sm cursor-pointer"
                >
                  <span class="flex items-center gap-2">
                    <Github class="w-4 h-4" />
                    {{ content.ui.viewGithub }}
                  </span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>

                <a
                  v-if="project.liveUrl && project.liveUrl !== '#'"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-lg font-bold uppercase border border-zinc-300 dark:border-zinc-700 bg-white/20 dark:bg-white/5 backdrop-blur-md text-zinc-950 dark:text-zinc-100 hover:border-zinc-950 dark:hover:border-zinc-100 transition-colors cursor-pointer"
                >
                  <span>{{ content.ui.viewDemo }}</span>
                  <ExternalLink class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div v-else class="space-y-0 border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="border-b border-zinc-200/60 dark:border-zinc-800/60 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-white/20 dark:hover:bg-white/5 px-4 rounded-lg transition-colors"
        >
          <div class="flex items-center gap-4 sm:gap-6 min-w-0">
            <span class="font-mono text-xs sm:text-sm font-bold text-zinc-500">
              [{{ project.index || '01' }}]
            </span>
            <div class="space-y-1 min-w-0">
              <h3 class="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 dark:text-white truncate">
                {{ project.title }}
              </h3>
              <p class="font-mono text-xs text-zinc-500 truncate">
                {{ project.technologies.join(' • ') }}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4 font-mono text-xs shrink-0">
            <span class="text-zinc-500 hidden md:inline-block">
              {{ project.year }}
            </span>
            <span class="px-2.5 py-1 rounded-md bg-white/30 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10 backdrop-blur-md">
              {{ project.category }}
            </span>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-950 dark:hover:border-zinc-100 transition-colors"
              :aria-label="'Ver ' + project.title + ' no GitHub'"
            >
              <ArrowUpRight class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
