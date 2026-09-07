<script setup>
import { PhGlobe, PhList } from '@phosphor-icons/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import UIThemeToggle from '../UIThemeToggle/UIThemeToggle.vue'

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
</script>

<template>
  <header :class="[
    'fixed top-0 left-0 w-full z-50',
    isOpen
      ? 'bg-white dark:bg-dark'
      : isScrolled
        ? 'bg-white/85 dark:bg-[#121316]/85 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-xl'
        : 'bg-transparent'
  ]">
    <div :class="[
      'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300',
      isScrolled ? 'py-3' : 'py-5'
    ]">
      <div class="flex justify-between items-center">

        <slot name="logo" />

        <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <slot />
        </nav>

        <div class="hidden md:flex items-center space-x-5 text-sm">
          <slot name="end" />
          <UIThemeToggle />
        </div>

        <div class="flex md:hidden items-center space-x-2">
          <UIThemeToggle />
          <button @click="isOpen = !isOpen" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <PhList class="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>

    <div v-if="isOpen" class="md:hidden bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800 px-4 pt-4 pb-6 space-y-3">
      <div class="transition-transform duration-300" :style="{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }">
        <slot name="mobile" />
      </div>
    </div>
  </header>
</template>
