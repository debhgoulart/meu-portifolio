<script setup lang="ts">
import { onMounted } from 'vue'
import InteractiveGradient from './components/background/InteractiveGradient.vue'
import Navbar from './components/layout/Navbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
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
  <div class="relative min-h-screen text-zinc-950 dark:text-zinc-50 selection:bg-purple-900/10 selection:text-purple-900 dark:selection:bg-purple-400/20 dark:selection:text-purple-200 font-sans transition-colors duration-500">
    <InteractiveGradient />
    <Navbar />

    <main class="relative z-10">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <Footer />
    <BackToTop />
  </div>
</template>
