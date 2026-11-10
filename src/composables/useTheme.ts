import { ref } from 'vue'

const THEME_KEY = 'debhg_theme_preference'
const isDark = ref(true) // default to dark modern aesthetic

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  const setTheme = (dark: boolean) => {
    isDark.value = dark
    applyTheme(dark)
  }

  const applyTheme = (dark: boolean) => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light')
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem(THEME_KEY)
    if (stored) {
      isDark.value = stored === 'dark'
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark
    }
    applyTheme(isDark.value)
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
    initTheme,
  }
}
