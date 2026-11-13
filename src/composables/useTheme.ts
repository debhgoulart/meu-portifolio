import { ref } from 'vue'

const THEME_KEY = 'debhg_theme_preference'
const isDark = ref(true)

export function useTheme() {
  const applyTheme = (dark: boolean) => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.classList.remove('light')
      localStorage.setItem(THEME_KEY, 'dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
      localStorage.setItem(THEME_KEY, 'light')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const setTheme = (dark: boolean) => {
    if (isDark.value === dark) return
    isDark.value = dark
    applyTheme(dark)
    if (typeof window !== 'undefined') {
      window.location.reload()
    }
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'light') {
      isDark.value = false
    } else {
      isDark.value = true
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
