<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  PhCheckCircle,
  PhInfo,
  PhWarningCircle,
  PhX,
  PhXCircle,
} from '@phosphor-icons/vue'

export type UIAlertVariant = 'error' | 'warning' | 'success' | 'info'

const props = withDefaults(
  defineProps<{
    variant?: UIAlertVariant
    title?: string
    description?: string
    errors?: string[]
    dismissible?: boolean
    showIcon?: boolean
  }>(),
  {
    variant: 'error',
    title: undefined,
    description: undefined,
    errors: undefined,
    dismissible: false,
    showIcon: true,
  },
)

const emit = defineEmits<{
  close: []
}>()

const visible = ref(true)

const role = computed(() => (props.variant === 'error' || props.variant === 'warning' ? 'alert' : 'status'))

const containerClass = computed(() => {
  switch (props.variant) {
    case 'warning':
      return 'bg-amber-50 border-amber-200 dark:bg-amber-500/10 dark:border-amber-500/20'
    case 'success':
      return 'bg-green-50 border-green-200 dark:bg-green-500/10 dark:border-green-500/20'
    case 'info':
      return 'bg-sky-50 border-sky-200 dark:bg-sky-500/10 dark:border-sky-500/20'
    case 'error':
    default:
      return 'bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/20'
  }
})

const iconClass = computed(() => {
  switch (props.variant) {
    case 'warning':
      return 'text-amber-600 dark:text-amber-400'
    case 'success':
      return 'text-green-600 dark:text-green-400'
    case 'info':
      return 'text-sky-600 dark:text-sky-400'
    case 'error':
    default:
      return 'text-red-600 dark:text-red-400'
  }
})

const titleClass = computed(() => {
  switch (props.variant) {
    case 'warning':
      return 'text-amber-800 dark:text-amber-200'
    case 'success':
      return 'text-green-800 dark:text-green-200'
    case 'info':
      return 'text-sky-800 dark:text-sky-200'
    case 'error':
    default:
      return 'text-red-800 dark:text-red-200'
  }
})

const bodyClass = computed(() => {
  switch (props.variant) {
    case 'warning':
      return 'text-amber-700 dark:text-amber-300/90'
    case 'success':
      return 'text-green-700 dark:text-green-300/90'
    case 'info':
      return 'text-sky-700 dark:text-sky-300/90'
    case 'error':
    default:
      return 'text-red-700 dark:text-red-300/90'
  }
})

function handleClose() {
  visible.value = false
  emit('close')
}

defineExpose({ visible })
</script>

<template>
  <div
    v-if="visible"
    :role="role"
    :class="[
      'w-full rounded-xl border px-4 py-3 transition-all duration-300',
      containerClass,
    ]"
  >
    <div class="flex items-start gap-2.5">
      <span v-if="props.showIcon" :class="['mt-0.5 shrink-0', iconClass]" aria-hidden="true">
        <slot name="icon">
          <PhXCircle v-if="props.variant === 'error'" :size="20" weight="fill" />
          <PhWarningCircle v-else-if="props.variant === 'warning'" :size="20" weight="fill" />
          <PhCheckCircle v-else-if="props.variant === 'success'" :size="20" weight="fill" />
          <PhInfo v-else :size="20" weight="fill" />
        </slot>
      </span>

      <div class="min-w-0 flex-1 text-sm leading-6">
        <p v-if="props.title || $slots.title" :class="['font-bold', titleClass]">
          <slot name="title">{{ props.title }}</slot>
        </p>

        <div v-if="props.errors?.length" :class="[bodyClass, props.title || $slots.title ? 'mt-1' : '']">
          <ul v-if="props.errors.length > 1" class="list-disc space-y-0.5 pl-5">
            <li v-for="(message, index) in props.errors" :key="`${index}-${message}`">
              {{ message }}
            </li>
          </ul>
          <p v-else>{{ props.errors[0] }}</p>
        </div>

        <div
          v-else-if="props.description || $slots.default"
          :class="[bodyClass, props.title || $slots.title ? 'mt-0.5' : '']"
        >
          <slot>{{ props.description }}</slot>
        </div>

        <slot v-else name="default" />
      </div>

      <button
        v-if="props.dismissible"
        type="button"
        aria-label="閉じる"
        :class="[
          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          iconClass,
          'hover:bg-black/5 dark:hover:bg-white/10',
        ]"
        @click="handleClose"
      >
        <PhX :size="16" weight="bold" />
      </button>
    </div>
  </div>
</template>
