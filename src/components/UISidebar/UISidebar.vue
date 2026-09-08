<script setup lang="ts">
import { computed, provide, useSlots } from 'vue'
import { PhX } from '@phosphor-icons/vue'

const props = withDefaults(
    defineProps<{
        open?: boolean
        collapsed?: boolean
        headerless?: boolean
    }>(),
    {
        open: false,
        collapsed: false,
        headerless: false,
    },
)

const emit = defineEmits<{
    'update:open': [value: boolean]
    close: []
}>()

provide(
    'uisidebar:collapsed',
    computed(() => props.collapsed),
)

const slots = useSlots()
const hasCollapsedLogo = computed(() => !!slots['logo-collapsed'])

function handleClose() {
    emit('update:open', false)
    emit('close')
}
</script>

<template>
    <div v-if="props.open" class="fixed inset-0 z-40 bg-black/50 lg:hidden" aria-hidden="true" @click="handleClose" />

    <aside :aria-hidden="!props.open" :class="[
        'static z-auto flex h-full shrink-0 flex-col border-r border-gray-200 bg-white transition-all duration-300 dark:border-white/10 dark:bg-dark-800',

        'max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:top-0 max-lg:z-50 max-lg:h-screen',

        'max-lg:transition-transform',
        props.open ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full',

        props.collapsed ? 'w-64 lg:w-20' : 'w-64',
    ]">
        <div v-if="!props.headerless"
            class="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-gray-100 px-4 dark:border-white/5">
            <div class="min-w-0 flex-1 overflow-hidden">
                <div class="lg:hidden">
                    <slot name="logo" />
                </div>
                <div class="hidden lg:block" :class="props.collapsed ? 'text-center' : ''">
                    <slot v-if="props.collapsed && hasCollapsedLogo" name="logo-collapsed" />
                    <slot v-else name="logo" />
                </div>
            </div>
            <button type="button" aria-label="メニューを閉じる"
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                @click="handleClose">
                <PhX :size="18" weight="bold" />
            </button>
        </div>

        <div v-else class="flex shrink-0 justify-end p-2 lg:hidden">
            <button type="button" aria-label="メニューを閉じる"
                class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                @click="handleClose">
                <PhX :size="18" weight="bold" />
            </button>
        </div>

        <nav aria-label="サイドナビゲーション" class="min-h-0 flex-1 overflow-y-auto px-3 py-4">
            <slot />
        </nav>

        <div v-if="$slots.footer" class="shrink-0 border-t border-gray-100 px-3 py-3 dark:border-white/5">
            <slot name="footer" />
        </div>
    </aside>
</template>
