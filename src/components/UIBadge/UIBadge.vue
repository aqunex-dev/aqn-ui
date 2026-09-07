<script setup lang="ts">
import { computed } from 'vue'

export type UIBadgeVariant = 'primary' | 'gray' | 'success' | 'warning' | 'danger'

const props = withDefaults(
  defineProps<{
    variant?: UIBadgeVariant
    dot?: boolean
  }>(),
  {
    variant: 'gray',
    dot: false,
  },
)

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary/10 text-primary-600 dark:text-primary-400'
    case 'success':
      return 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400'
    case 'warning':
      return 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
    case 'danger':
      return 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
    case 'gray':
    default:
      return 'bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300'
  }
})

const dotClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary'
    case 'success':
      return 'bg-green-500'
    case 'warning':
      return 'bg-amber-500'
    case 'danger':
      return 'bg-red-500'
    default:
      return 'bg-gray-400'
  }
})
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-0.5 text-xs font-bold leading-5',
      variantClass,
    ]"
  >
    <span v-if="props.dot" :class="['h-1.5 w-1.5 rounded-full', dotClass]" aria-hidden="true" />
    <slot />
  </span>
</template>
