<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { NeatGradient } from '@firecms/neat'
import type { NeatColor } from '@firecms/neat'
import { useTheme } from '../../composables/useTheme'

const { isDark } = useTheme()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const hasWebGLError = ref(false)
let neatInstance: NeatGradient | null = null
let animationFrameId: number | null = null

// Paleta Clara — Tons suaves e muito claros de roxo pastel e lavanda, sem saturação excessiva
const lightColors: NeatColor[] = [
  { color: '#ffffff', enabled: true },
  { color: '#faf5ff', enabled: true },
  { color: '#f3e8ff', enabled: true },
  { color: '#ede9fe', enabled: true },
  { color: '#f5f3ff', enabled: true },
]

// Paleta Escura — Tons escuros e profundos de roxo, sem elementos neon
const darkColors: NeatColor[] = [
  { color: '#000000', enabled: true },
  { color: '#0f051c', enabled: true },
  { color: '#1e0a36', enabled: true },
  { color: '#2d0f50', enabled: true },
  { color: '#18072c', enabled: true },
]

// Parâmetros de física e interpolação do mouse
const currentX = ref(0.5)
const currentY = ref(0.5)
const targetX = ref(0.5)
const targetY = ref(0.5)
let lastInteractionTime = Date.now()
let prefersReducedMotion = false

const handleMouseMove = (event: MouseEvent) => {
  if (prefersReducedMotion) return
  const { clientX, clientY } = event
  const width = window.innerWidth || 1
  const height = window.innerHeight || 1

  targetX.value = clientX / width
  targetY.value = clientY / height
  lastInteractionTime = Date.now()
}

const handleTouchMove = (event: TouchEvent) => {
  if (prefersReducedMotion || !event.touches[0]) return
  const touch = event.touches[0]
  const width = window.innerWidth || 1
  const height = window.innerHeight || 1

  targetX.value = touch.clientX / width
  targetY.value = touch.clientY / height
  lastInteractionTime = Date.now()
}

const updateAnimationLoop = () => {
  if (!neatInstance) return

  const now = Date.now()
  const timeSinceInteraction = now - lastInteractionTime

  if (prefersReducedMotion) {
    neatInstance.speed = 0.6
    neatInstance.waveAmplitude = 0.8
    return
  }

  // Interpolação suave (lerp)
  const lerpFactor = 0.035
  currentX.value += (targetX.value - currentX.value) * lerpFactor
  currentY.value += (targetY.value - currentY.value) * lerpFactor

  // Movimento ambiente orgânico e sutil
  const t = now * 0.0006
  let ambientOffsetX = Math.sin(t) * 0.1
  let ambientOffsetY = Math.cos(t * 0.8) * 0.1

  if (timeSinceInteraction < 1500) {
    ambientOffsetX *= 0.2
    ambientOffsetY *= 0.2
  }

  const effectiveX = Math.min(Math.max(currentX.value + ambientOffsetX, 0.05), 0.95)
  const effectiveY = Math.min(Math.max(currentY.value + ambientOffsetY, 0.05), 0.95)

  try {
    neatInstance.horizontalPressure = 2.0 + effectiveX * 2.0
    neatInstance.verticalPressure = 1.8 + effectiveY * 1.8
    neatInstance.waveAmplitude = 2.2 + Math.hypot(effectiveX - 0.5, effectiveY - 0.5) * 1.8
    neatInstance.waveFrequencyX = 1.6 + effectiveX * 0.8
    neatInstance.waveFrequencyY = 1.6 + effectiveY * 0.8
  } catch {
    // Proteger caso o contexto WebGL esteja atualizando
  }

  animationFrameId = requestAnimationFrame(updateAnimationLoop)
}

const updatePalette = () => {
  if (!neatInstance) return
  try {
    const isDarkTheme = isDark.value
    neatInstance.colors = isDarkTheme ? darkColors : lightColors
    neatInstance.backgroundColor = isDarkTheme ? '#000000' : '#ffffff'
    neatInstance.colorBlending = isDarkTheme ? 6.5 : 5.0
    neatInstance.colorBrightness = isDarkTheme ? 1.4 : 1.05
    neatInstance.grainIntensity = isDarkTheme ? 0.03 : 0.015
  } catch (err) {
    console.warn('Erro ao atualizar paleta NEAT:', err)
  }
}

watch(isDark, () => {
  updatePalette()
})

onMounted(() => {
  if (!canvasRef.value) return

  if (typeof window !== 'undefined' && window.matchMedia) {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  try {
    const isDarkTheme = isDark.value
    neatInstance = new NeatGradient({
      ref: canvasRef.value,
      colors: isDarkTheme ? darkColors : lightColors,
      backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
      speed: prefersReducedMotion ? 0.6 : 1.4,
      horizontalPressure: 2.8,
      verticalPressure: 2.6,
      waveFrequencyX: 1.8,
      waveFrequencyY: 1.8,
      waveAmplitude: 2.5,
      secondaryWaveEnabled: true,
      secondaryWaveFrequencyX: 2.0,
      secondaryWaveFrequencyY: 1.8,
      secondaryWaveAmplitude: 2.4,
      secondaryWaveSpeed: 0.6,
      secondaryWaveAngle: 0.78,
      shadows: isDarkTheme ? 3.5 : 1.5,
      highlights: isDarkTheme ? 2.5 : 3.0,
      colorSaturation: isDarkTheme ? 2.8 : 2.0,
      colorBrightness: isDarkTheme ? 1.4 : 1.05,
      colorBlending: isDarkTheme ? 6.5 : 5.0,
      grainIntensity: isDarkTheme ? 0.03 : 0.015,
      grainScale: 1.5,
      grainSparsity: 0.1,
      grainSpeed: 0.3,
      renderScale: typeof window !== 'undefined' && window.devicePixelRatio > 1.5 ? 0.8 : 1,
    })

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    animationFrameId = requestAnimationFrame(updateAnimationLoop)
  } catch (err) {
    console.error('Falha ao inicializar o NEAT WebGL Gradient:', err)
    hasWebGLError.value = true
  }
})

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }

  if (typeof window !== 'undefined') {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('touchmove', handleTouchMove)
  }

  if (neatInstance) {
    try {
      neatInstance.destroy()
    } catch (e) {
      console.warn('Erro ao destruir instância NEAT:', e)
    }
    neatInstance = null
  }
})
</script>

<template>
  <div
    class="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none transition-colors duration-1000"
    aria-hidden="true"
  >
    <!-- Canvas WebGL com NEAT ocupando toda a tela -->
    <canvas
      v-if="!hasWebGLError"
      ref="canvasRef"
      class="w-full h-full block opacity-85 dark:opacity-90 transition-opacity duration-1000"
    ></canvas>

    <!-- Fallback em gradiente CSS suave -->
    <div
      v-else
      class="w-full h-full relative"
      :class="isDark ? 'fallback-dark' : 'fallback-light'"
    >
      <div
        class="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-3xl opacity-35"
        :class="isDark ? 'bg-purple-950/40' : 'bg-purple-200/40'"
      ></div>
      <div
        class="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30"
        :class="isDark ? 'bg-indigo-950/40' : 'bg-indigo-100/50'"
      ></div>
    </div>

    <!-- Máscara sutil de contraste para manter excelente legibilidade em toda a página -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-700"
      :class="isDark ? 'bg-black/30' : 'bg-white/40'"
    ></div>
  </div>
</template>

<style scoped>
.fallback-dark {
  background: radial-gradient(circle at 50% 30%, #150827 0%, #000000 85%);
}

.fallback-light {
  background: radial-gradient(circle at 50% 30%, #faf5ff 0%, #ffffff 85%);
}
</style>
