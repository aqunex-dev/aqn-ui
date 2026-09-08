<script setup lang="ts">
import { computed, inject } from 'vue'
import type { ComputedRef } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    href?: string
    active?: boolean
    badge?: string | number
  }>(),
  {
    href: undefined,
    active: false,
    badge: undefined,
  },
)

const sidebarCollapsed = inject<ComputedRef<boolean> | boolean>('uisidebar:collapsed', false)

const isCollapsed = computed(() =>
  typeof sidebarCollapsed === 'boolean' ? sidebarCollapsed : sidebarCollapsed.value,
)

const itemClass = computed(() =>
  props.active
    ? 'bg-primary/10 text-primary-600 dark:bg-primary/15 dark:text-primary-400'
    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white',
)
</script>

<template>
  <a
    :href="props.href ?? '#'"
    :aria-current="props.active ? 'page' : undefined"
    :title="isCollapsed ? props.label : undefined"
    :class="[
      'group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      itemClass,
      isCollapsed ? 'lg:justify-center lg:px-0' : '',
    ]"
  >
    <span v-if="$slots.icon" class="inline-flex h-5 w-5 shrink-0 items-center justify-center" aria-hidden="true">
      <slot name="icon" />
    </span>
    <!-- collapsed時はデスクトップのみラベルを隠す (モバイルDrawer内では常に表示) -->
    <span :class="['min-w-0 flex-1 truncate text-left', isCollapsed ? 'lg:hidden' : '']">{{ props.label }}</span>
    <span
      v-if="props.badge !== undefined"
      :class="[
        'inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-md bg-gray-100 px-1.5 text-xs font-bold text-gray-600 dark:bg-white/10 dark:text-gray-300',
        isCollapsed ? 'lg:hidden' : '',
      ]"
      aria-label="件数"
    >
      {{ props.badge }}
    </span>
  </a>
</template>
