<script setup lang="ts">
import { computed } from 'vue';

export interface AppLogoProps {
  readonly size?: 'md' | 'lg'
  readonly showPoweredBy?: boolean
  readonly enableLink?: boolean,

  readonly logo: {
    black: string,
    white: string
  }
}

const props = withDefaults(defineProps<AppLogoProps>(), {
  size: 'md',
  showPoweredBy: true,
  enableLink: true,
  alt: 'AQUNEX',
})

const logoHeightClass = computed(() => (props.size === 'lg' ? 'h-9' : 'h-8'))
</script>

<template>
  <div class="inline-flex group">
    <span class="flex items-center">
      <img
        :src="props.logo.black"
        alt="Logo"
        :class="[logoHeightClass, 'w-auto', props.logo.white ? 'dark:hidden' : '']"
      />
      <img
        :src="props.logo.white"
        alt="Logo"
        :class="[logoHeightClass, 'w-auto', props.logo.black ? 'hidden dark:block' : '']"
      />
    </span>
  </div>
</template>
