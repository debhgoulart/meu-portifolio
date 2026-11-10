<script setup lang="ts">
import { Code, Database, Server, ShieldCheck, HeartHandshake, Compass } from 'lucide-vue-next'
import SectionHeading from '../common/SectionHeading.vue'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

const highlights = [
  {
    icon: Server,
    code: 'SYS // ARCH',
    title: 'Backend & APIs Escaláveis',
    description: 'Projetando microsserviços e APIs RESTful em Java e Spring Boot com foco em estabilidade, contratos bem definidos e escalabilidade.',
  },
  {
    icon: Database,
    code: 'DATA // RELATIONAL',
    title: 'Modelagem de Dados',
    description: 'Bancos relacionais com PostgreSQL e Oracle, garantindo integridade referencial, índices otimizados e consultas eficientes.',
  },
  {
    icon: Code,
    code: 'UI // COMPONENT',
    title: 'Frontend Reativo & Moderno',
    description: 'Interfaces dinâmicas e fluidas com Vue.js 3, Composition API e TypeScript, integradas sem atrito ao ecossistema de APIs.',
  },
  {
    icon: ShieldCheck,
    code: 'SEC // QUALITY',
    title: 'Qualidade, Testes & Segurança',
    description: 'Adoção constante de boas práticas, testes com Mockito/JUnit, autenticação JWT robusta e princípios de segurança aplicados à arquitetura.',
  },
]
</script>

<template>
  <section id="sobre" class="py-20 sm:py-28 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <SectionHeading
        tag="01 // SOBRE"
        title="Construindo soluções com curiosidade analítica e método"
        subtitle="Trajetória acadêmica, vivência profissional no setor público e motivações na tecnologia."
      />

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Texto descritivo em primeira pessoa com alto contraste -->
        <div class="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">
          <p
            v-for="(paragraph, index) in content.personalInfo.aboutParagraphs"
            :key="index"
            class="first-of-type:text-zinc-950 dark:first-of-type:text-white first-of-type:font-medium"
          >
            {{ paragraph }}
          </p>

          <div class="pt-4 flex flex-wrap gap-2.5 font-mono text-xs">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md text-zinc-800 dark:text-zinc-200">
              <Compass class="w-3.5 h-3.5 text-zinc-500" />
              ORIENTADA A SOLUÇÕES
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md text-zinc-800 dark:text-zinc-200">
              <HeartHandshake class="w-3.5 h-3.5 text-zinc-500" />
              COLABORAÇÃO EM EQUIPE
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/30 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md text-zinc-800 dark:text-zinc-200">
              <Server class="w-3.5 h-3.5 text-zinc-500" />
              ARQUITETURA EM CAMADAS
            </span>
          </div>
        </div>

        <!-- Cards com textura de vidro fosco (Frosted Glass) -->
        <div class="lg:col-span-5 grid grid-cols-1 gap-4">
          <div
            v-for="item in highlights"
            :key="item.title"
            class="glass-card p-5 hover:scale-[1.01]"
          >
            <div class="flex items-start gap-4">
              <div
                class="p-2.5 rounded-lg bg-white/40 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md shrink-0"
              >
                <component :is="item.icon" class="w-5 h-5" />
              </div>
              <div class="space-y-1">
                <span class="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider block">
                  {{ item.code }}
                </span>
                <h3 class="text-base font-bold text-zinc-950 dark:text-white">
                  {{ item.title }}
                </h3>
                <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
