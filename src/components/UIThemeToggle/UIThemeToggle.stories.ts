import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UIThemeToggle from './UIThemeToggle.vue'

const meta: Meta<typeof UIThemeToggle> = {
  title: 'Components/UIThemeToggle',
  component: UIThemeToggle,
  tags: ['autodocs'],
  render: () => ({
    components: { UIThemeToggle },
    setup() {
      const modelValue = ref(false)
      return { modelValue }
    },
    template: '<UIThemeToggle v-model="modelValue" />',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Dark: Story = {
  render: () => ({
    components: { UIThemeToggle },
    setup() {
      const modelValue = ref(true)
      return { modelValue }
    },
    template: '<div class="dark p-4 bg-[#121316] inline-block rounded-xl"><UIThemeToggle v-model="modelValue" /></div>',
  }),
}
