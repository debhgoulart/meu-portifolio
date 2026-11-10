import { ref } from 'vue'

export type Language = 'pt' | 'en'

const currentLang = ref<Language>('pt')

export function useLanguage() {
  const setLanguage = (lang: Language) => {
    currentLang.value = lang
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('debhg_lang_preference', lang)
    }
  }

  const toggleLanguage = () => {
    setLanguage(currentLang.value === 'pt' ? 'en' : 'pt')
  }

  const initLanguage = () => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('debhg_lang_preference') as Language | null
      if (stored === 'pt' || stored === 'en') {
        currentLang.value = stored
      }
    }
  }

  return {
    currentLang,
    setLanguage,
    toggleLanguage,
    initLanguage,
  }
}
