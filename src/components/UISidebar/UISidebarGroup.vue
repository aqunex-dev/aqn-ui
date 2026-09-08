<script setup lang="ts">
import { computed, inject } from 'vue'
import type { ComputedRef } from 'vue'

const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: undefined,
  },
)

const sidebarCollapsed = inject<ComputedRef<boolean> | boolean>('uisidebar:collapsed', false)

const isCollapsed = computed(() =>
  typeof sidebarCollapsed === 'boolean' ? sidebarCollapsed : sidebarCollapsed.value,
)
</script>

<template>
  <section aria-label="ナビゲーショングループ" class="group mb-4 last:mb-0">
    <p
      v-if="props.title"
      :class="[
        'mb-1.5 truncate px-3 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500',
        isCollapsed ? 'lg:hidden' : '',
      ]"
    >
      {{ props.title }}
    </p>
    <!-- collapsed時(デスクトップ)はタイトルの代わりに区切り線を表示 (先頭グループの線は非表示) -->
    <div
      v-if="props.title && isCollapsed"
      aria-hidden="true"
      class="mx-3 my-2 hidden h-px bg-gray-200 group-first:hidden lg:block dark:bg-white/10"
    />
    <div class="space-y-1">
      <slot />
    </div>
  </section>
</template>
