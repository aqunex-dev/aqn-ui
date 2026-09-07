<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
const props = defineProps<{
  shortDescription: string,
  author: string
}>();
</script>


<template>
  <footer
    class="bg-gray-50 text-gray-900 dark:bg-dark dark:text-white border-t border-gray-200 dark:border-subtle pt-12 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">

        <div class="md:col-span-2 space-y-4">
          <slot name="logo" />

          <p class="text-sm max-w-sm text-gray-600 dark:text-gray-400">
            {{ props.shortDescription }}
          </p>

          <div class="flex items-center space-x-3 pt-2">
            <slot name="social-link" />
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-900 dark:text-white">リンク</h3>
          <ul class="space-y-2.5 text-sm">
            <slot name="link" />
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-900 dark:text-white">リソース</h3>
          <ul class="space-y-2.5 text-sm">
            <slot name="resources" />
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-900 dark:text-white">規約・情報</h3>
          <ul class="space-y-2.5 text-sm">
            <slot name="legal" />
          </ul>
        </div>

      </div>
      <div
        class="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-500">
        <p>&copy; {{ currentYear }} {{ props.author }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
