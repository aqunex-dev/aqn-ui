<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    description?: string
    eyebrow?: string
    align?: 'left' | 'center'
  }>(),
  {
    align: 'left',
  },
)

const alignClass = computed(() =>
  props.align === 'center' ? 'items-center text-center' : 'items-start text-left',
)
const descClass = computed(() => (props.align === 'center' ? 'mx-auto' : ''))
</script>

<template>
  <div :class="['flex flex-col gap-3', alignClass]">
    <p
      v-if="props.eyebrow"
      class="text-sm font-bold tracking-wider uppercase text-primary"
    >
      {{ props.eyebrow }}
    </p>
    <h2
      class="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white"
    >
      {{ props.title }}
    </h2>
    <p
      v-if="props.description"
      :class="['text-base text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed', descClass]"
    >
      {{ props.description }}
    </p>
    <div v-if="$slots.default" class="pt-1">
      <slot />
    </div>
  </div>
</template>
