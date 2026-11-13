<script setup lang="ts">
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  ShieldCheck,
  Coffee,
  Leaf,
  Server,
  Globe,
  Key,
  Package,
  Layout,
  FileCode2,
  Braces,
  Wind,
  Sparkles,
  Code,
  HardDrive,
  Table,
  Workflow,
  Box,
  Cpu,
  Terminal,
  LineChart,
  Search,
  CheckCircle2,
  Shield,
  RefreshCw,
  FileCheck,
} from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content } = useContent()

// Mapeamento de ícones específicos para cada tecnologia
const getSkillIcon = (name: string) => {
  const norm = name.toLowerCase()
  if (norm.includes('java 17') || norm.includes('java')) return Coffee
  if (norm.includes('spring')) return Leaf
  if (norm.includes('node')) return Server
  if (norm.includes('api') || norm.includes('rest')) return Globe
  if (norm.includes('jwt') || norm.includes('token') || norm.includes('auth')) return Key
  if (norm.includes('maven')) return Package

  if (norm.includes('vue')) return Layout
  if (norm.includes('typescript')) return FileCode2
  if (norm.includes('javascript')) return Braces
  if (norm.includes('tailwind')) return Wind
  if (norm.includes('quasar')) return Sparkles
  if (norm.includes('html') || norm.includes('css')) return Code

  if (norm.includes('postgres')) return Database
  if (norm.includes('oracle')) return HardDrive
  if (norm.includes('mysql')) return Database
  if (norm.includes('sql')) return Table
  if (norm.includes('modelagem')) return Workflow

  if (norm.includes('docker')) return Box
  if (norm.includes('jenkins')) return Cpu
  if (norm.includes('git')) return GitBranch
  if (norm.includes('linux')) return Terminal
  if (norm.includes('grafana')) return LineChart
  if (norm.includes('graylog')) return Search
  if (norm.includes('wildfly')) return Server

  if (norm.includes('junit')) return CheckCircle2
  if (norm.includes('mockito')) return Shield
  if (norm.includes('clean code')) return Sparkles
  if (norm.includes('refatora')) return RefreshCw
  if (norm.includes('teste')) return FileCheck

  return Code2
}

const getCategoryIcon = (category: string) => {
  const norm = category.toLowerCase()
  if (norm.includes('back')) return Code2
  if (norm.includes('front')) return Palette
  if (norm.includes('banco') || norm.includes('data')) return Database
  if (norm.includes('devops') || norm.includes('ferramenta') || norm.includes('tool')) return GitBranch
  if (norm.includes('teste') || norm.includes('test') || norm.includes('qualidade')) return ShieldCheck
  return Code2
}
</script>

<template>
  <section
    id="habilidades"
    class="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Título Alinhado à Esquerda (no canto, igual aos outros) -->
      <div class="mb-16 md:mb-20">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          Tecnologias & Habilidades
        </h2>
      </div>

      <!-- Grid com 5 colunas verticais (estilo Prints 2 e 3) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4.5 items-stretch">
        <div
          v-for="cat in content.skillCategories"
          :key="cat.category"
          class="glass-card p-5 sm:p-5.5 rounded-2xl flex flex-col items-center text-center border border-white/20 dark:border-white/10 hover:border-white/40 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 group hover:-translate-y-1"
        >
          <!-- Ícone do Cabeçalho da Categoria -->
          <div
            class="p-3.5 rounded-2xl bg-white/50 dark:bg-[#000E2B]/80 text-zinc-950 dark:text-blue-100 border border-white/40 dark:border-blue-900/50 mb-4 group-hover:scale-110 group-hover:bg-blue-600/15 dark:group-hover:bg-[#0B0D4E] group-hover:border-blue-400/40 transition-all"
          >
            <component :is="getCategoryIcon(cat.category)" class="w-6 h-6" />
          </div>

          <!-- Título da Categoria -->
          <h3 class="text-lg font-bold text-zinc-950 dark:text-white mb-6 tracking-tight">
            {{ cat.category }}
          </h3>

          <!-- Divisor sutil -->
          <div class="w-12 h-px bg-zinc-200 dark:bg-zinc-800 mb-6"></div>

          <!-- Lista vertical de tecnologias com ícone para cada uma -->
          <ul class="w-full space-y-3 text-left">
            <li
              v-for="skill in cat.items"
              :key="skill.name"
              class="flex items-center gap-3 p-2 rounded-lg text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5 transition-colors group/item"
            >
              <div class="p-1.5 rounded-md bg-blue-600/10 dark:bg-[#000E2B]/80 text-zinc-900 dark:text-blue-200 border border-transparent dark:border-blue-900/30 group-hover/item:bg-blue-600/20 dark:group-hover/item:bg-[#0B0D4E] group-hover/item:text-blue-900 dark:group-hover/item:text-white shrink-0 transition-colors">
                <component :is="getSkillIcon(skill.name)" class="w-3.5 h-3.5" />
              </div>
              <span class="truncate font-medium">{{ skill.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
