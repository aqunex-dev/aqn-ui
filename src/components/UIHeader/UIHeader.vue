<script setup lang="ts">
import { PhList } from '@phosphor-icons/vue'
import { onMounted, onUnmounted, ref } from 'vue'
import UIThemeToggle from '../UIThemeToggle/UIThemeToggle.vue'

export type UIHeaderVariant = 'landing' | 'dashboard'

const props = withDefaults(
  defineProps<{
    variant?: UIHeaderVariant
    /** dashboard用: モバイルでSidebar開閉ボタンを表示する */
    showMenuButton?: boolean
    showThemeToggle?: boolean
  }>(),
  {
    variant: 'landing',
    showMenuButton: true,
    showThemeToggle: true,
  },
)

const emit = defineEmits<{
  'menu-click': []
}>()

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleMenuClick() {
  emit('menu-click')
}
</script>

<template>
  <!-- ダッシュボード用: Sidebarと連結するstickyバー -->
  <header
    v-if="props.variant === 'dashboard'"
    class="sticky top-0 z-30 flex h-16 w-full shrink-0 items-center gap-2 border-b border-gray-200 bg-white/85 px-4 backdrop-blur-md sm:px-6 dark:border-white/10 dark:bg-dark-800/85"
  >
    <button
      v-if="props.showMenuButton"
      type="button"
      aria-label="メニューを開く"
      class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
      @click="handleMenuClick"
    >
      <PhList class="h-5 w-5" />
    </button>

    <div class="flex min-w-0 flex-1 items-center gap-4">
      <slot name="logo" />
      <slot />
    </div>

    <div class="flex shrink-0 items-center gap-2 sm:gap-3">
      <slot name="end" />
      <UIThemeToggle v-if="props.showThemeToggle" />
    </div>
  </header>

  <!-- ランディング用: 従来のfixedバー (後方互換) -->
  <header
    v-else
    :class="[
      'fixed top-0 left-0 w-full z-50',
      isOpen
        ? 'bg-white dark:bg-dark'
        : isScrolled
          ? 'bg-white/85 dark:bg-[#121316]/85 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-xl'
          : 'bg-transparent',
    ]"
  >
    <div
      :class="[
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300',
        isScrolled ? 'py-3' : 'py-5',
      ]"
    >
      <div class="flex justify-between items-center">
        <slot name="logo" />

        <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <slot />
        </nav>

        <div class="hidden md:flex items-center space-x-5 text-sm">
          <slot name="end" />
          <UIThemeToggle v-if="props.showThemeToggle" />
        </div>

        <div class="flex md:hidden items-center space-x-2">
          <UIThemeToggle v-if="props.showThemeToggle" />
          <button
            type="button"
            aria-label="メニューを開く"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            @click="isOpen = !isOpen"
          >
            <PhList class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="md:hidden bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800 px-4 pt-4 pb-6 space-y-3"
    >
      <div
        class="transition-transform duration-300"
        :style="{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }"
      >
        <slot name="mobile" />
      </div>
    </div>
  </header>
</template>
