<script setup lang="ts">
import { PhCaretDown } from '@phosphor-icons/vue';
import { ref, useId } from 'vue';

const isOpen = ref(false);

const toggleFaq = (): void => {
  isOpen.value = !isOpen.value;
};

const props = defineProps<{
    question: string,
    answer: string
}>()
const id = useId();

</script>

<template>
    <div
        class="rounded-2xl overflow-hidden transition-all duration-300 bg-white border border-gray-200 hover:border-gray-300 shadow-sm dark:bg-[#181a1f]/80 dark:border-gray-800/80 dark:hover:border-gray-700 dark:shadow-none">
        <button type="button" :aria-expanded="isOpen" :aria-controls="`faq-answer-${id}`"
            @click="toggleFaq"
            class="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <span class="text-lg font-bold flex items-center gap-3 text-gray-900 dark:text-white">
                <span class="text-primary font-extrabold text-xl" aria-hidden="true">Q.</span>
                {{ question }}
            </span>

            <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 text-gray-500 dark:text-gray-300"
                :class="{ 'rotate-180 text-primary': isOpen }">
                <PhCaretDown :size="20" />
            </div>
        </button>

        <div v-show="isOpen" :id="`faq-answer-${id}`"
            class="px-6 pb-6 text-base leading-relaxed border-t pt-4 flex gap-3 text-gray-600 border-gray-100 dark:text-gray-300 dark:border-gray-800/40">
            <span class="font-extrabold text-xl shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true">A.</span>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>
