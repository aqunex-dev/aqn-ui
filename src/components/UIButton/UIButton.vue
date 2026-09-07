<script setup lang="ts">
import { computed, getCurrentInstance, ref } from 'vue'

export type UIButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type UIButtonSize = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: UIButtonVariant
    size?: UIButtonSize
    type?: 'button' | 'submit' | 'reset'
    loading?: boolean
    autoLoading?: boolean
    disabled?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    loading: false,
    autoLoading: false,
    disabled: false,
    block: false,
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const instance = getCurrentInstance()
const internalLoading = ref(false)
const isLoading = computed(() => props.loading || internalLoading.value)
const isDisabled = computed(() => props.disabled || isLoading.value)

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15'
    case 'outline':
      return 'border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:bg-transparent dark:border-white/10 dark:text-gray-200 dark:hover:border-white/20 dark:hover:bg-white/5'
    case 'ghost':
      return 'text-gray-600 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-white/5'
    case 'primary':
    default:
      return 'bg-primary text-white hover:opacity-90 shadow-sm'
  }
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm rounded-lg'
    case 'lg':
      return 'px-6 py-3 text-base rounded-xl'
    case 'md':
    default:
      return 'px-5 py-2.5 text-sm rounded-xl'
  }
})

const collectClickHandlers = () => {
  const vProps = instance?.vnode.props ?? {}
  const fns: Array<(e: MouseEvent) => unknown> = []
  const push = (v: unknown) => {
    if (Array.isArray(v)) {
      v.forEach(push)
    } else if (typeof v === 'function') {
      fns.push(v as (e: MouseEvent) => unknown)
    }
  }
  push(vProps['onClick'])
  push(vProps['onClickOnce'])
  return fns
}

const onClick = async (e: MouseEvent) => {
  if (isDisabled.value) {
    e.preventDefault()
    return
  }
  // 親制御モード: 従来どおり発火のみ。スピナーは :loading で親が指示する
  if (!props.autoLoading) {
    emit('click', e)
    return
  }
  // 自動モード: 親の @click ハンドラの戻り値(Promise)を待つ間スピナーを表示する。
  // emit()経由だと戻り値が取得できないため、vnode上のリスナを直接呼び出す（emitとの二重実行を避ける）。
  const handlers = collectClickHandlers()
  if (handlers.length === 0) return
  internalLoading.value = true
  try {
    await Promise.all(handlers.map((fn) => fn(e)))
  } finally {
    internalLoading.value = false
  }
}
</script>

<template>
  <button
    :type="props.type"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :aria-busy="isLoading"
    :class="[
      'inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed',
      variantClass,
      sizeClass,
      props.block ? 'w-full' : '',
    ]"
    @click="onClick"
  >
    <svg
      v-if="isLoading"
      class="animate-spin h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
      />
    </svg>
    <slot />
  </button>
</template>
