<script setup lang="ts">
const props = defineProps<{
    title: string,
    description: string,

    image: string
}>()
</script>

<template>
    <section class="relative min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full" id="top">

        <div class="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <img :src="props.image" alt="Hero Background"
                class="w-full h-full object-cover object-right opacity-40 dark:opacity-60 scale-105" />

            <div class="absolute inset-0 bg-white/40 dark:bg-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white dark:from-[#121316] to-transparent">
            </div>
        </div>

        <div
            class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4 sm:py-8">

            <div class="lg:col-span-7 space-y-4 sm:space-y-5">
                <h1
                    class="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md text-gray-900 dark:text-white">
                    {{ props.title }}
                </h1>

                <p
                    class="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed drop-shadow-sm">
                    {{ props.description }}
                </p>

                <div class="pt-2 flex items-center space-x-4">
                    <slot />
                </div>
            </div>
        </div>
    </section>
</template>
