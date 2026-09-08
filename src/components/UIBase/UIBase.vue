<script setup lang="ts">
export type UIBaseVariant = 'landing' | 'dashboard'

const props = withDefaults(
  defineProps<{
    /** dashboardを指定するとsidebarスロットを持つ2カラム配置になる */
    variant?: UIBaseVariant
  }>(),
  {
    variant: 'landing',
  },
)
</script>

<template>
  <div v-if="props.variant === 'dashboard'"
    class="flex min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-dark dark:text-white">

    <div class="flex min-w-0 flex-1 flex-col">
      <slot name="header" />

      <div class="flex">
        <slot name="sidebar" />
        <main class="min-w-0 grow bg-gray-50 text-gray-900 dark:bg-dark dark:text-white">
          <slot />
        </main>

      </div>

      <slot name="footer" />
    </div>
  </div>

  <div v-else class="min-h-screen w-full bg-white text-gray-900 dark:bg-dark dark:text-white flex flex-col">
    <slot name="header" />

    <main class="grow bg-white text-gray-900 dark:bg-dark dark:text-white">
      <slot />
    </main>

    <slot name="footer" />
  </div>
</template>
