<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { NeatGradient } from '@firecms/neat'
import type { NeatConfig } from '@firecms/neat'
import { useTheme } from '../../composables/useTheme'

const { isDark } = useTheme()
const canvasRef = ref<HTMLCanvasElement | null>(null)
const hasWebGLError = ref(false)
let neatInstance: NeatGradient | null = null

const darkConfig: NeatConfig = {
  colors: [
    {
      color: '#000000',
      enabled: true,
    },
    {
      color: '#001129',
      enabled: true,
    },
    {
      color: '#0F0025',
      enabled: true,
    },
    {
      color: '#0F0814',
      enabled: true,
    },
    {
      color: '#001129',
      enabled: true,
    },
  ],
  speed: 5,
  horizontalPressure: 4,
  verticalPressure: 4,
  waveFrequencyX: 3,
  waveFrequencyY: 2,
  waveAmplitude: 1,
  secondaryWaveEnabled: false,
  secondaryWaveFrequencyX: 3,
  secondaryWaveFrequencyY: 3,
  secondaryWaveAmplitude: 5,
  secondaryWaveSpeed: 0.6,
  secondaryWaveAngle: 1,
  shadows: 2,
  highlights: 2,
  colorBrightness: 1,
  colorSaturation: -3,
  wireframe: false,
  antialias: false,
  colorBlending: 7,
  backgroundColor: '#010101',
  backgroundAlpha: 1,
  grainScale: 6,
  grainSparsity: 0.1,
  grainIntensity: 0.125,
  grainSpeed: 0.1,
  resolution: 0.75,
  yOffset: -480,
  yOffsetWaveMultiplier: 2.2,
  yOffsetColorMultiplier: 2.5,
  yOffsetFlowMultiplier: 2.8,
  flowDistortionA: 0.4,
  flowDistortionB: 3,
  flowScale: 3.3,
  flowEase: 0.53,
  flowEnabled: false,
  enableProceduralTexture: false,
  transparentTextureVoid: false,
  textureMode: 'bitmap',
  bakeEdgeSoftness: 1,
  textureVoidLikelihood: 0.06,
  textureVoidWidthMin: 10,
  textureVoidWidthMax: 500,
  textureBandDensity: 0.8,
  textureColorBlending: 0.06,
  textureSeed: 333,
  textureEase: 0.68,
  proceduralBackgroundColor: '#003FFF',
  textureShapeTriangles: 20,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 10,
  domainWarpEnabled: false,
  domainWarpIntensity: 0,
  domainWarpScale: 3,
  vignetteIntensity: 0,
  vignetteRadius: 0.8,
  fresnelEnabled: false,
  fresnelPower: 2,
  fresnelIntensity: 0.5,
  fresnelColor: '#FFFFFF',
  iridescenceEnabled: false,
  iridescenceIntensity: 0.5,
  iridescenceSpeed: 1,
  prismEdgeEnabled: false,
  prismEdgeIntensity: 0.5,
  prismEdgeThinness: 3,
  prismEdgeSpread: 1,
  prismEdgeSpeed: 0.5,
  prismEdgeRipple: 1,
  bloomIntensity: 0,
  bloomThreshold: 0.7,
  chromaticAberration: 0,
  shapeType: 'plane',
  shapeRotationX: 0,
  shapeRotationY: 0,
  shapeRotationZ: 0,
  shapeAutoRotateSpeedX: 0,
  shapeAutoRotateSpeedY: 0,
  sphereRadius: 15,
  torusRadius: 15,
  torusTube: 5,
  cylinderRadius: 10,
  cylinderHeight: 40,
  planeBend: 0,
  planeTwist: 0,
  silhouetteFade: 0.25,
  cylinderFade: 0.08,
  ribbonFade: 0.05,
  flatShading: true,
  cameraLock: true,
  cameraX: 0,
  cameraY: 0,
  cameraZ: 0,
  cameraRotationX: 0,
  cameraRotationY: 0,
  cameraRotationZ: 0,
  cameraZoom: 1,
}

const lightConfig: NeatConfig = {
  colors: [
    {
      color: '#FFFFFF',
      enabled: true,
    },
    {
      color: '#EFE2CE',
      enabled: true,
    },
    {
      color: '#D5ECEB',
      enabled: true,
    },
    {
      color: '#E4E4E4',
      enabled: true,
    },
    {
      color: '#F6FFFF',
      enabled: true,
    },
  ],
  speed: 4,
  horizontalPressure: 4,
  verticalPressure: 5,
  waveFrequencyX: 4,
  waveFrequencyY: 3,
  waveAmplitude: 2,
  secondaryWaveEnabled: false,
  secondaryWaveFrequencyX: 3,
  secondaryWaveFrequencyY: 3,
  secondaryWaveAmplitude: 5,
  secondaryWaveSpeed: 0.6,
  secondaryWaveAngle: 1,
  shadows: 5,
  highlights: 7,
  colorBrightness: 1,
  colorSaturation: -3,
  wireframe: false,
  antialias: false,
  colorBlending: 7,
  backgroundColor: '#FFFFFF',
  backgroundAlpha: 1,
  grainScale: 4,
  grainSparsity: 0.06,
  grainIntensity: 0.175,
  grainSpeed: 0.3,
  resolution: 0.35,
  yOffset: 290,
  yOffsetWaveMultiplier: 5,
  yOffsetColorMultiplier: 4.5,
  yOffsetFlowMultiplier: 5.5,
  flowDistortionA: 0.4,
  flowDistortionB: 3,
  flowScale: 3.3,
  flowEase: 0.53,
  flowEnabled: true,
  enableProceduralTexture: false,
  transparentTextureVoid: false,
  textureMode: 'bitmap',
  bakeEdgeSoftness: 1,
  textureVoidLikelihood: 0.06,
  textureVoidWidthMin: 10,
  textureVoidWidthMax: 500,
  textureBandDensity: 0.8,
  textureColorBlending: 0.06,
  textureSeed: 333,
  textureEase: 0.48,
  proceduralBackgroundColor: '#FFFFFF',
  textureShapeTriangles: 20,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 10,
  domainWarpEnabled: true,
  domainWarpIntensity: 0.05,
  domainWarpScale: 0.5,
  vignetteIntensity: 0,
  vignetteRadius: 0.8,
  fresnelEnabled: false,
  fresnelPower: 2,
  fresnelIntensity: 0.5,
  fresnelColor: '#FFFFFF',
  iridescenceEnabled: false,
  iridescenceIntensity: 0.5,
  iridescenceSpeed: 1,
  prismEdgeEnabled: false,
  prismEdgeIntensity: 0.5,
  prismEdgeThinness: 3,
  prismEdgeSpread: 1,
  prismEdgeSpeed: 0.5,
  prismEdgeRipple: 1,
  bloomIntensity: 0,
  bloomThreshold: 0.7,
  chromaticAberration: 0,
  shapeType: 'plane',
  shapeRotationX: 0,
  shapeRotationY: 0,
  shapeRotationZ: 0,
  shapeAutoRotateSpeedX: 0,
  shapeAutoRotateSpeedY: 0,
  sphereRadius: 15,
  torusRadius: 15,
  torusTube: 5,
  cylinderRadius: 10,
  cylinderHeight: 40,
  planeBend: 0,
  planeTwist: 0,
  silhouetteFade: 0.25,
  cylinderFade: 0.08,
  ribbonFade: 0.05,
  flatShading: true,
  cameraLock: true,
  cameraX: 0,
  cameraY: 0,
  cameraZ: 0,
  cameraRotationX: 0,
  cameraRotationY: 0,
  cameraRotationZ: 0,
  cameraZoom: 1,
}

const handleScroll = () => {
  if (neatInstance && typeof window !== 'undefined') {
    neatInstance.yOffset = window.scrollY
  }
}

const initNeat = () => {
  if (!canvasRef.value) return

  if (neatInstance) {
    try {
      neatInstance.destroy()
    } catch (e) {
      console.warn('Erro ao destruir instância NEAT:', e)
    }
    neatInstance = null
  }

  try {
    const currentConfig = isDark.value ? darkConfig : lightConfig
    neatInstance = new NeatGradient({
      ref: canvasRef.value,
      ...currentConfig,
    })
    neatInstance.yOffset = window.scrollY
  } catch (err) {
    console.error('Falha ao inicializar o NEAT WebGL Gradient:', err)
    hasWebGLError.value = true
  }
}

watch(isDark, () => {
  initNeat()
})

onMounted(() => {
  initNeat()
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
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
    class="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none"
    :class="isDark ? 'bg-black' : 'bg-white'"
    aria-hidden="true"
  >
    <canvas
      v-if="!hasWebGLError"
      id="gradient"
      ref="canvasRef"
      class="w-full h-full block opacity-90 transition-opacity duration-1000"
      style="width: 100%; height: 100%"
    ></canvas>

    <!-- Fallback estático em caso de indisponibilidade de WebGL -->
    <div
      v-else
      class="w-full h-full relative"
      :class="isDark ? 'bg-[#010101]' : 'bg-white'"
    >
      <template v-if="isDark">
        <div class="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-3xl opacity-35 bg-[#001129]/60"></div>
        <div class="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30 bg-[#0F0025]/60"></div>
      </template>
    </div>
  </div>
</template>
