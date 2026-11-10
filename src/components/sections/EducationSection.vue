<script setup lang="ts">
import { GraduationCap, Award, Shield, Bot, Calendar, Building, Sparkles } from 'lucide-vue-next'
import SectionHeading from '../common/SectionHeading.vue'
import { useContent } from '../../composables/useContent'

const { content } = useContent()
</script>

<template>
  <section id="formacao" class="py-20 sm:py-28 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <SectionHeading
        tag="03 // FORMAÇÃO"
        title="Formação & Extensão Acadêmica"
        subtitle="Fundamentação teórica sólida e envolvimento ativo em iniciativas e grupos de pesquisa."
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Card Principal da Graduação com Vidro Fosco -->
        <div
          class="lg:col-span-6 glass-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between gap-4 mb-6">
              <div class="p-3 rounded-xl bg-white/30 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/30 dark:border-white/10 backdrop-blur-md">
                <GraduationCap class="w-6 h-6" />
              </div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold bg-white/40 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md">
                <Award class="w-3.5 h-3.5" />
                {{ content.education.grade }}
              </span>
            </div>

            <h3 class="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white mb-2">
              {{ content.education.degree }}
            </h3>

            <p class="text-sm sm:text-base font-medium text-zinc-700 dark:text-zinc-300 mb-4 flex items-center gap-2">
              <Building class="w-4 h-4 text-zinc-500" />
              {{ content.education.institution }}
            </p>

            <div class="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400 mb-6">
              <Calendar class="w-3.5 h-3.5 text-zinc-500" />
              <span>{{ content.education.period }}</span>
              <span class="mx-1">•</span>
              <span class="text-emerald-700 dark:text-emerald-400 font-semibold uppercase">{{ content.education.status }}</span>
            </div>

            <p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              {{ content.education.description }}
            </p>
          </div>

          <div class="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60">
            <div class="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
              <Sparkles class="w-3.5 h-3.5 text-zinc-500" />
              <span>COEFICIENTE DE RENDIMENTO: 8,9 / 10</span>
            </div>
          </div>
        </div>

        <!-- Coluna de Grupos Extracurriculares com Vidro Fosco -->
        <div class="lg:col-span-6 flex flex-col gap-6 justify-between">
          <div
            v-for="(extra, idx) in content.extracurriculars"
            :key="extra.name"
            class="flex-1 glass-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between gap-4 mb-4">
                <div class="flex items-center gap-3">
                  <div class="p-2.5 rounded-xl bg-white/30 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/30 dark:border-white/10 backdrop-blur-md">
                    <Shield v-if="idx === 0" class="w-5 h-5" />
                    <Bot v-else class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-zinc-950 dark:text-white">
                      {{ extra.name }}
                    </h4>
                    <span class="font-mono text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">
                      [{{ extra.badge }}]
                    </span>
                  </div>
                </div>
              </div>

              <p class="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                {{ extra.description }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              <span
                v-for="topic in extra.topics"
                :key="topic"
                class="px-2.5 py-1 rounded-md bg-white/30 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 border border-white/30 dark:border-white/10 backdrop-blur-md"
              >
                {{ topic }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
