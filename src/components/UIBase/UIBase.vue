<script setup lang="ts">
export type UIBaseVariant = 'landing' | 'dashboard'

const props = withDefaults(
  defineProps<{
    variant?: UIBaseVariant
  }>(),
  {
    variant: 'landing',
  },
)
</script>

<template>
  <div
    v-if="props.variant === 'dashboard'"
    class="flex h-screen w-full overflow-hidden bg-gray-50 text-gray-900 dark:bg-dark dark:text-white"
  >
    <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
      <slot name="header" />

      <div class="flex flex-1 min-h-0 overflow-hidden">
        <slot name="sidebar" />

        <main class="min-w-0 flex-1 overflow-y-auto bg-gray-50 text-gray-900 dark:bg-dark dark:text-white">
          <slot />
        </main>
      </div>

      <slot name="footer" />
    </div>
  </div>

  <div
    v-else
    class="flex h-screen w-full flex-col overflow-hidden bg-white text-gray-900 dark:bg-dark dark:text-white"
  >
    <slot name="header" />

    <main class="flex-1 overflow-y-auto bg-white text-gray-900 dark:bg-dark dark:text-white">
      <slot />
    </main>

    <slot name="footer" />
  </div>
</template>
