<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { PhEye, PhEyeSlash } from '@phosphor-icons/vue'

const props = withDefaults(
  defineProps<{
    label?: string
    hint?: string
    error?: string
    type?: string
    placeholder?: string
    disabled?: boolean
    required?: boolean
    autocomplete?: string
  }>(),
  {
    type: 'text',
    disabled: false,
    required: false,
  },
)

const model = defineModel<string>({ default: '' })

const id = useId()
const showPassword = ref(false)

const isPassword = computed(() => props.type === 'password')
const inputType = computed(() => {
  if (!isPassword.value) return props.type
  return showPassword.value ? 'text' : 'password'
})
const describedBy = computed(() => {
  if (props.error) return `${id}-error`
  if (props.hint) return `${id}-hint`
  return undefined
})
</script>

<template>
  <div class="w-full">
    <label
      v-if="props.label"
      :for="id"
      class="mb-1.5 block text-sm font-bold text-gray-900 dark:text-white"
    >
      {{ props.label }}
      <span v-if="props.required" class="text-red-500" aria-hidden="true">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        v-model="model"
        :type="inputType"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :required="props.required"
        :autocomplete="props.autocomplete"
        :aria-invalid="!!props.error"
        :aria-describedby="describedBy"
        :class="[
          'w-full rounded-xl border px-4 py-2.5 text-sm transition-all duration-300 bg-white text-gray-900 border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-white/5 dark:text-white dark:border-white/10 dark:placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed',
          props.error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : '',
          isPassword ? 'pr-11' : '',
        ]"
      />
      <button
        v-if="isPassword"
        type="button"
        :aria-label="showPassword ? 'パスワードを非表示' : 'パスワードを表示'"
        :title="showPassword ? 'パスワードを非表示' : 'パスワードを表示'"
        class="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
        @click="showPassword = !showPassword"
      >
        <PhEyeSlash v-if="showPassword" :size="18" />
        <PhEye v-else :size="18" />
      </button>
    </div>
    <p v-if="props.error" :id="`${id}-error`" role="alert" class="mt-1.5 text-xs text-red-600 dark:text-red-400">
      {{ props.error }}
    </p>
    <p
      v-else-if="props.hint"
      :id="`${id}-hint`"
      class="mt-1.5 text-xs text-gray-500 dark:text-gray-400"
    >
      {{ props.hint }}
    </p>
  </div>
</template>
