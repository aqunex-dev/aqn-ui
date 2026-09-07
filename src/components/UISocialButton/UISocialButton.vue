<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    block?: boolean
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  {
    label: '',
    block: true,
    type: 'button',
    disabled: false,
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :class="[
      'inline-flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-bold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white/5 dark:border-white/10 dark:text-gray-200 dark:hover:border-white/20 dark:hover:bg-white/10',
      props.block ? 'w-full' : '',
    ]"
    @click="(e) => emit('click', e)"
  >
    <span v-if="$slots.icon" class="inline-flex h-5 w-5 items-center justify-center [&_svg]:h-5 [&_svg]:w-5" aria-hidden="true">
      <slot name="icon" />
    </span>
    <span>
      <slot>{{ props.label }}</slot>
    </span>
  </button>
</template>
