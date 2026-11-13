<script setup lang="ts">
import { onMounted } from 'vue'
import InteractiveGradient from './components/background/InteractiveGradient.vue'
import Navbar from './components/layout/Navbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ExtracurricularSection from './components/sections/ExtracurricularSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Footer from './components/layout/Footer.vue'
import BackToTop from './components/common/BackToTop.vue'
import { useTheme } from './composables/useTheme'
import { useLanguage } from './composables/useLanguage'

const { initTheme } = useTheme()
const { initLanguage } = useLanguage()

onMounted(() => {
  initTheme()
  initLanguage()
})
</script>

<template>
  <div class="relative min-h-screen text-zinc-950 dark:text-zinc-50 selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-950 font-sans transition-colors duration-500">
    <InteractiveGradient />
    <Navbar />

    <main class="relative z-10">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExtracurricularSection />
      <ContactSection />
    </main>

    <Footer />
    <BackToTop />
  </div>
</template>
