import { ref } from 'vue'

const THEME_KEY = 'debhg_theme_preference'
const isDark = ref(true)

export function useTheme() {
  const toggleTheme = () => {
    // Modo escuro permanente
    applyTheme()
  }

  const setTheme = (_dark: boolean) => {
    // Modo escuro permanente
    applyTheme()
  }

  const applyTheme = () => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    root.classList.add('dark')
    localStorage.setItem(THEME_KEY, 'dark')
  }

  const initTheme = () => {
    applyTheme()
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
    initTheme,
  }
}
