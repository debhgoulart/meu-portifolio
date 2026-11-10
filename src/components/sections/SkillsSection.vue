<script setup lang="ts">
import { Server, Layout, Database, Wrench, ShieldCheck } from 'lucide-vue-next'
import SectionHeading from '../common/SectionHeading.vue'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Backend':
      return Server
    case 'Frontend':
      return Layout
    case 'Banco de Dados':
    case 'Databases':
      return Database
    case 'Infraestrutura & Ferramentas':
    case 'Infrastructure & Tools':
      return Wrench
    case 'Testes & Qualidade':
    case 'Testing & Quality':
      return ShieldCheck
    default:
      return Server
  }
}
</script>

<template>
  <section id="habilidades" class="py-20 sm:py-28 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <SectionHeading
        tag="04 // STACK"
        title="Habilidades & Arsenal Técnico"
        subtitle="Competências aplicadas na construção de sistemas corporativos, categorizadas por camadas de engenharia."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cat, index) in content.skillCategories"
          :key="cat.category"
          class="glass-card p-6 sm:p-7 flex flex-col justify-between"
          :class="index === 0 || index === 1 ? 'md:col-span-1' : ''"
        >
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div
                class="p-2.5 rounded-lg bg-white/30 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/30 dark:border-white/10 backdrop-blur-md"
              >
                <component :is="getCategoryIcon(cat.category)" class="w-5 h-5" />
              </div>
              <div>
                <span class="font-mono text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold block">
                  LAYER 0{{ index + 1 }}
                </span>
                <h3 class="text-lg font-bold text-zinc-950 dark:text-white">
                  {{ cat.category }}
                </h3>
              </div>
            </div>

            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed font-normal">
              {{ cat.description }}
            </p>
          </div>

          <div class="flex flex-wrap gap-2 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 font-mono">
            <span
              v-for="skill in cat.items"
              :key="skill.name"
              class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all"
              :class="
                skill.highlight
                  ? 'bg-white/50 dark:bg-white/10 text-zinc-950 dark:text-zinc-100 border border-white/40 dark:border-white/20 font-bold backdrop-blur-md'
                  : 'bg-white/20 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-white/20 dark:border-white/5 backdrop-blur-md'
              "
            >
              <span
                v-if="skill.highlight"
                class="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-100"
              ></span>
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
