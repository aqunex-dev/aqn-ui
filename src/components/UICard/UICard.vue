<script setup lang="ts">
import { computed } from 'vue'

export type UICardPadding = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    padding?: UICardPadding
    hover?: boolean
  }>(),
  {
    padding: 'md',
    hover: false,
  },
)

const paddingClass = computed(() => {
  switch (props.padding) {
    case 'sm':
      return 'p-4'
    case 'lg':
      return 'p-8'
    case 'md':
    default:
      return 'p-6'
  }
})
</script>

<template>
  <div
    :class="[
      'rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm dark:bg-[#181a1f]/80 dark:border-gray-800/80 dark:shadow-none transition-all duration-300',
      props.hover ? 'hover:border-gray-300 dark:hover:border-gray-700' : '',
    ]"
  >
    <div v-if="$slots.header" class="border-b border-gray-100 dark:border-gray-800/40">
      <slot name="header" />
    </div>
    <div :class="paddingClass">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="border-t border-gray-100 dark:border-gray-800/40 bg-gray-50/50 dark:bg-white/[0.02]"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
