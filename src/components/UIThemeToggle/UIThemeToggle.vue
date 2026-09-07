<script setup lang="ts">
import { PhMoon, PhSun } from '@phosphor-icons/vue'

const isDark = defineModel<boolean>({ default: false })

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <button
    type="button"
    :aria-label="isDark ? 'ライトモードに切り替える' : 'ダークモードに切り替える'"
    :title="isDark ? 'ライトモードに切り替える' : 'ダークモードに切り替える'"
    class="inline-flex items-center justify-center w-9 h-9 rounded-lg border transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-100 border-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/10 dark:border-white/10"
    @click="toggleTheme"
  >
    <PhSun v-if="isDark" :size="18" />
    <PhMoon v-else :size="18" />
  </button>
</template>
