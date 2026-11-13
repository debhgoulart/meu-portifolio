<script setup lang="ts">
import { ref } from 'vue'
import {
  Mail,
  Check,
  Copy,
  Linkedin,
  Github,
  ArrowUpRight,
  Phone,
} from 'lucide-vue-next'
import { useContent } from '../../composables/useContent'

const { content } = useContent()
const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(content.value.personalInfo.social.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error('Falha ao copiar:', err)
  }
}
</script>

<template>
  <section
    id="contato"
    class="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto">
      <!-- Cabeçalho da Seção Alinhado à Esquerda -->
      <div class="mb-12 md:mb-16">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
          {{ content.ui.contactTitle || 'Iniciar Conexão' }}
        </h2>
        <p class="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl">
          {{ content.ui.contactSubtitle }}
        </p>
      </div>

      <!-- Card Unificado de Contato com Divisão Vertical -->
      <div class="glass-card rounded-3xl border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl transition-all duration-500 relative">
        <!-- Linha divisória vertical sutil no desktop (com recuo superior e inferior) -->
        <div class="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px -translate-x-1/2 bg-zinc-200/60 dark:bg-zinc-800/60 pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-2 items-center">
          <!-- Lado Esquerdo: E-mail e WhatsApp -->
          <div class="p-7 sm:p-10 lg:p-12 flex flex-col justify-center gap-4 font-sans">
            <!-- Card de E-mail com Copiar e Abrir -->
            <div
              class="p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono transition-all duration-300 hover:border-white/60 dark:hover:border-white/30"
            >
              <div class="flex items-center gap-3 truncate">
                <div class="p-3 rounded-xl bg-white/60 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md shrink-0">
                  <Mail class="w-5 h-5" />
                </div>
                <div class="truncate">
                  <span class="text-xs text-zinc-500 dark:text-zinc-400 block font-sans font-medium">E-mail</span>
                  <span class="text-xs sm:text-sm text-zinc-950 dark:text-zinc-100 font-bold truncate block">
                    {{ content.personalInfo.social.email }}
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  type="button"
                  @click="copyEmail"
                  class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                  :class="
                    copied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white/60 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 border border-white/40 dark:border-white/10'
                  "
                  :aria-label="copied ? content.ui.copySuccess : content.ui.copyBtn"
                >
                  <Check v-if="copied" class="w-3.5 h-3.5" />
                  <Copy v-else class="w-3.5 h-3.5" />
                  <span>{{ copied ? content.ui.copySuccess : content.ui.copyBtn }}</span>
                </button>

                <a
                  :href="'mailto:' + content.personalInfo.social.email"
                  class="inline-flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-sm"
                >
                  <span>{{ content.ui.openBtn }}</span>
                  <ArrowUpRight class="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <!-- Card WhatsApp -->
            <a
              :href="'https://wa.me/5521965991791'"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 hover:border-white/60 dark:hover:border-white/30 transition-all duration-300 hover:scale-[1.01] cursor-pointer block"
            >
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-xs uppercase tracking-wider text-zinc-950 dark:text-white font-mono font-bold flex items-center gap-2">
                  <Phone class="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />
                  <span>WhatsApp // Mensagem Direta</span>
                </span>
                <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p class="text-xs text-zinc-600 dark:text-zinc-400 font-sans mb-1.5">
                Disponível para contato direto e retorno rápido.
              </p>
              <div class="flex items-center justify-between text-xs font-mono font-bold text-zinc-950 dark:text-white">
                <span>{{ content.personalInfo.phone }}</span>
                <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

          <!-- Linha horizontal suave no mobile (com recuo lateral) -->
          <div class="block lg:hidden mx-8 h-px bg-zinc-200/60 dark:bg-zinc-800/60"></div>

          <!-- Lado Direito: LinkedIn e GitHub -->
          <div class="p-7 sm:p-10 lg:p-12 flex flex-col justify-center gap-4 font-sans bg-white/[0.02] dark:bg-black/20">
            <!-- Card LinkedIn -->
            <a
              :href="content.personalInfo.social.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 hover:border-white/60 dark:hover:border-white/30 flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              <div class="flex items-center gap-4">
                <div class="p-3 rounded-xl bg-white/60 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform">
                  <Linkedin class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="text-base font-bold text-zinc-950 dark:text-white transition-colors">
                    LinkedIn
                  </h4>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    /in/deborahgoulart
                  </p>
                </div>
              </div>
              <ArrowUpRight class="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <!-- Card GitHub -->
            <a
              :href="content.personalInfo.social.github"
              target="_blank"
              rel="noopener noreferrer"
              class="group p-5 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 hover:border-white/60 dark:hover:border-white/30 flex items-center justify-between cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              <div class="flex items-center gap-4">
                <div class="p-3 rounded-xl bg-white/60 dark:bg-white/10 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform">
                  <Github class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="text-base font-bold text-zinc-950 dark:text-white transition-colors">
                    GitHub
                  </h4>
                  <p class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    @debhgoulart
                  </p>
                </div>
              </div>
              <ArrowUpRight class="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>