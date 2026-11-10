<script setup lang="ts">
defineProps<{
  tag?: string
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div
    class="mb-12 md:mb-16"
    :class="centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'"
  >
    <div
      v-if="tag"
      class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2"
    >
      <span>[ {{ tag }} ]</span>
    </div>

    <h2
      class="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight"
    >
      {{ title }}
    </h2>

    <p
      v-if="subtitle"
      class="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
