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
      color: '#000E2B',
      enabled: true,
    },
    {
      color: '#0B0D4E',
      enabled: true,
    },
    {
      color: '#575E6D',
      enabled: true,
    },
    {
      color: '#000000',
      enabled: false,
    },
    {
      color: '#000000',
      enabled: false,
    },
  ],
  speed: 4,
  horizontalPressure: 4,
  verticalPressure: 5,
  waveFrequencyX: 1,
  waveFrequencyY: 2,
  waveAmplitude: 10,
  secondaryWaveEnabled: false,
  secondaryWaveFrequencyX: 3,
  secondaryWaveFrequencyY: 3,
  secondaryWaveAmplitude: 5,
  secondaryWaveSpeed: 0.6,
  secondaryWaveAngle: 1,
  shadows: 4,
  highlights: 7,
  colorBrightness: 1,
  colorSaturation: 0,
  wireframe: false,
  antialias: false,
  colorBlending: 7,
  backgroundColor: '#00A2FF',
  backgroundAlpha: 1,
  grainScale: 4,
  grainSparsity: 0,
  grainIntensity: 0.2,
  grainSpeed: 2.2,
  resolution: 0.65,
  yOffset: -120,
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
      color: '#90A6C9',
      enabled: true,
    },
    {
      color: '#82A5AD',
      enabled: true,
    },
    {
      color: '#bfd7ea',
      enabled: true,
    },
    {
      color: '#FFFFFF',
      enabled: true,
    },
    {
      color: '#BEDBFF',
      enabled: true,
    },
    {
      color: '#D5BCFF',
      enabled: false,
    },
  ],
  speed: 4,
  horizontalPressure: 4,
  verticalPressure: 3,
  waveFrequencyX: 0,
  waveFrequencyY: 0,
  waveAmplitude: 0,
  secondaryWaveEnabled: false,
  secondaryWaveFrequencyX: 3,
  secondaryWaveFrequencyY: 3,
  secondaryWaveAmplitude: 5,
  secondaryWaveSpeed: 0.6,
  secondaryWaveAngle: 1,
  shadows: 2,
  highlights: 7,
  colorBrightness: 1,
  colorSaturation: 8,
  wireframe: false,
  antialias: false,
  colorBlending: 5,
  backgroundColor: '#FF0000',
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 0,
  resolution: 0.5,
  yOffset: -120,
  yOffsetWaveMultiplier: 1.5,
  yOffsetColorMultiplier: 1.8,
  yOffsetFlowMultiplier: 2,
  flowDistortionA: 5,
  flowDistortionB: 7.7,
  flowScale: 2.6,
  flowEase: 0.36,
  flowEnabled: false,
  enableProceduralTexture: false,
  transparentTextureVoid: false,
  textureMode: 'bitmap',
  bakeEdgeSoftness: 1,
  textureVoidLikelihood: 0.22,
  textureVoidWidthMin: 120,
  textureVoidWidthMax: 150,
  textureBandDensity: 1.9,
  textureColorBlending: 0.12,
  textureSeed: 333,
  textureEase: 0.75,
  proceduralBackgroundColor: '#D0DBFB',
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
    :class="isDark ? 'bg-[#000E2B]' : 'bg-[#bfd7ea]'"
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
      :class="isDark ? 'bg-[#000E2B]' : 'bg-[#bfd7ea]'"
    >
      <template v-if="isDark">
        <div class="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-3xl opacity-35 bg-[#0B0D4E]/60"></div>
        <div class="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30 bg-[#00A2FF]/30"></div>
      </template>
      <template v-else>
        <div class="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-3xl opacity-35 bg-[#90A6C9]/60"></div>
        <div class="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-3xl opacity-30 bg-[#BEDBFF]/60"></div>
      </template>
    </div>
  </div>
</template>
