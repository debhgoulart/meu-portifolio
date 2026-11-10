<script setup lang="ts">
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Layers, MapPin, Terminal } from 'lucide-vue-next'
import SectionHeading from '../common/SectionHeading.vue'
import { useContent } from '../../composables/useContent'

const { content } = useContent()
</script>

<template>
  <section id="experiencia" class="py-20 sm:py-28 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <SectionHeading
        tag="02 // TRAJETÓRIA"
        title="Experiência Profissional"
        subtitle="Ciclo completo de desenvolvimento, sustentação e modernização de ecossistemas corporativos."
      />

      <div class="space-y-8">
        <div
          v-for="exp in content.experiences"
          :key="exp.id"
          class="glass-card p-6 sm:p-10 transition-colors"
        >
          <!-- Cabeçalho do Card de Experiência -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200/60 dark:border-zinc-800/60">
            <div class="space-y-2">
              <div class="flex flex-wrap items-center gap-2.5 font-mono">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-white/40 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md">
                  <Briefcase class="w-3.5 h-3.5" />
                  {{ exp.role }}
                </span>
                <span
                  v-if="exp.isCurrent"
                  class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  PERÍODO ATUAL
                </span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                {{ exp.company }}
              </h3>

              <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span class="flex items-center gap-1">
                  <Calendar class="w-3.5 h-3.5 text-zinc-500" />
                  {{ exp.period }}
                </span>
                <span class="flex items-center gap-1">
                  <MapPin class="w-3.5 h-3.5 text-zinc-500" />
                  {{ exp.location }}
                </span>
              </div>
            </div>

            <div class="hidden md:flex items-center gap-2">
              <span class="p-3 rounded-xl bg-white/30 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-white/30 dark:border-white/10 backdrop-blur-md">
                <Layers class="w-6 h-6" />
              </span>
            </div>
          </div>

          <!-- Resumo de Atuação -->
          <p class="mt-6 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
            {{ exp.description }}
          </p>

          <!-- Destaques das Atividades Relevantes -->
          <div class="mt-8 space-y-3">
            <h4 class="font-mono text-xs uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Terminal class="w-3.5 h-3.5 text-zinc-500" />
              Responsabilidades & Entregas Chave
            </h4>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div
                v-for="(achievement, i) in exp.achievements"
                :key="i"
                class="flex items-start gap-3 p-3.5 rounded-xl bg-white/30 dark:bg-white/5 border border-white/30 dark:border-white/10 backdrop-blur-md"
              >
                <CheckCircle2 class="w-4 h-4 text-zinc-900 dark:text-zinc-100 mt-0.5 shrink-0" />
                <span class="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {{ achievement }}
                </span>
              </div>
            </div>
          </div>

          <!-- Tecnologias e Ferramentas Empregadas -->
          <div class="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <div class="flex flex-wrap items-center gap-2 font-mono">
              <span class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mr-2 flex items-center gap-1">
                <ChevronRight class="w-3.5 h-3.5" />
                STACK:
              </span>
              <span
                v-for="skill in exp.skills"
                :key="skill"
                class="px-2.5 py-1 rounded-md text-xs font-medium bg-white/30 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-white/30 dark:border-white/10 backdrop-blur-md"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
