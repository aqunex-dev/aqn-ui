<script setup lang="ts">
import type { Component } from 'vue';

const props = defineProps<{
    to: string,

    customLinkComponent?: Component
}>()
</script>

<template>
    <li>
        <component
            v-if="props.customLinkComponent"
            :is="props.customLinkComponent"
            :to="props.to"
            class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
        >
            <slot />
        </component>
        <a :href="props.to"
            class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            v-else>
            <slot />
        </a>
    </li>
</template>
