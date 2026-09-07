<script setup lang="ts">
const props = defineProps<{
    href: string,
    label: string
}>()
</script>

<template>
    <a :href="props.href" target="_blank" rel="noopener noreferrer"
        class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        :aria-label="props.label">
        <div class="w-5 h-5">
            <slot />
        </div>
    </a>
</template>
