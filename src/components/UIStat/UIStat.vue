<script setup lang="ts">
import { computed } from 'vue'

export type UIStatTrend = 'up' | 'down' | 'neutral'

const props = withDefaults(
  defineProps<{
    label: string
    value: string
    description?: string
    trend?: string
    trendDirection?: UIStatTrend
  }>(),
  {
    trendDirection: 'neutral',
  },
)

const trendClass = computed(() => {
  switch (props.trendDirection) {
    case 'up':
      return 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400'
    case 'down':
      return 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
    default:
      return 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300'
  }
})
</script>

<template>
  <div
    class="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 dark:bg-[#181a1f]/80 dark:border-gray-800/80 dark:shadow-none transition-all duration-300"
  >
    <div class="flex items-start justify-between gap-4">
      <p class="text-sm font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
        {{ props.label }}
      </p>
      <span v-if="$slots.icon" class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-300">
        <slot name="icon" />
      </span>
    </div>
    <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      {{ props.value }}
    </p>
    <div class="mt-2 flex items-center gap-2 flex-wrap">
      <span
        v-if="props.trend"
        :class="['inline-flex items-center rounded-lg px-2 py-0.5 text-xs font-bold', trendClass]"
      >
        {{ props.trend }}
      </span>
      <p v-if="props.description" class="text-sm text-gray-600 dark:text-gray-400">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
