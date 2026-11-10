<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Check, Copy, Linkedin, Github, MessageSquare, ArrowUpRight } from 'lucide-vue-next'
import SectionHeading from '../common/SectionHeading.vue'
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
  <section id="contato" class="py-24 sm:py-32 px-6 sm:px-10 lg:px-12 relative transition-colors duration-500">
    <div class="max-w-5xl mx-auto">
      <SectionHeading
        tag="06 // CONTATO"
        :title="content.ui.contactTitle"
        :subtitle="content.ui.contactSubtitle"
        :centered="true"
      />

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <div
          class="md:col-span-7 glass-card p-6 sm:p-10 flex flex-col justify-between font-sans"
        >
          <div>
            <div class="p-3 rounded-xl bg-white/40 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 w-fit border border-white/40 dark:border-white/10 backdrop-blur-md mb-6">
              <MessageSquare class="w-6 h-6" />
            </div>

            <h3 class="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-2">
              {{ content.ui.contactTitle }}
            </h3>

            <p class="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
              {{ content.ui.contactSubtitle }}
            </p>

            <div
              class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md font-mono"
            >
              <div class="flex items-center gap-2.5 px-2 truncate">
                <Mail class="w-4 h-4 text-zinc-500 shrink-0" />
                <span class="text-xs sm:text-sm text-zinc-950 dark:text-zinc-100 font-bold truncate">
                  {{ content.personalInfo.social.email }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <button
                  type="button"
                  @click="copyEmail"
                  class="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
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
                  class="flex-1 sm:flex-none inline-flex items-center justify-center gap-1 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-sm"
                >
                  <span>{{ content.ui.openBtn }}</span>
                  <ArrowUpRight class="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 font-mono text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
            <span>{{ content.ui.responseTime }}</span>
            <span>RIO // GMT-3</span>
          </div>
        </div>

        <div class="md:col-span-5 flex flex-col gap-4 justify-between font-sans">
          <a
            :href="content.personalInfo.social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-6 glass-card hover:scale-[1.01] flex items-center justify-between cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-xl bg-white/40 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md group-hover:scale-105 transition-transform">
                <Linkedin class="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-base font-bold text-zinc-950 dark:text-white transition-colors">
                  LinkedIn [↗]
                </h4>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  /in/debhgoulart
                </p>
              </div>
            </div>
            <ArrowUpRight class="w-5 h-5 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
          </a>

          <a
            :href="content.personalInfo.social.github"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-6 glass-card hover:scale-[1.01] flex items-center justify-between cursor-pointer"
          >
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-xl bg-white/40 dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border border-white/40 dark:border-white/10 backdrop-blur-md group-hover:scale-105 transition-transform">
                <Github class="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-base font-bold text-zinc-950 dark:text-white transition-colors">
                  GitHub [↗]
                </h4>
                <p class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  @debhgoulart
                </p>
              </div>
            </div>
            <ArrowUpRight class="w-5 h-5 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
          </a>

          <div class="p-6 glass-card font-mono">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs uppercase tracking-wider text-zinc-950 dark:text-white font-bold">
                [ CONTATO // DIRETO ]
              </span>
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <p class="text-xs text-zinc-600 dark:text-zinc-400">
              Aberta a desafios em engenharia de software e desenvolvimento de soluções corporativas escaláveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
