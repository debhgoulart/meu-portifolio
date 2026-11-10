import { computed } from 'vue'
import { useLanguage } from './useLanguage'
import { contentPT, contentEN } from '../data/portfolioData'
import type { LocalizedContent } from '../data/portfolioData'

export function useContent() {
  const { currentLang, setLanguage, toggleLanguage, initLanguage } = useLanguage()

  const content = computed<LocalizedContent>(() => {
    return currentLang.value === 'en' ? contentEN : contentPT
  })

  return {
    currentLang,
    content,
    setLanguage,
    toggleLanguage,
    initLanguage,
  }
}
