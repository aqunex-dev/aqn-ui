import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIButton from './UIButton.vue'

const meta: Meta<typeof UIButton> = {
  title: 'Components/UIButton',
  component: UIButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    autoLoading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    components: { UIButton },
    setup() {
      return { args }
    },
    template: '<UIButton v-bind="args">ボタン</UIButton>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = { args: { variant: 'secondary' } }

export const Outline: Story = { args: { variant: 'outline' } }

export const Ghost: Story = { args: { variant: 'ghost' } }

export const Loading: Story = { args: { loading: true } }

export const Controlled: Story = {
  name: '親制御loading',
  render: () => ({
    components: { UIButton },
    data() {
      return { busy: false }
    },
    methods: {
      async onSave() {
        this.busy = true
        try {
          await new Promise((r) => setTimeout(r, 2000))
        } finally {
          this.busy = false
        }
      },
    },
    template: '<div class="p-4"><UIButton :loading="busy" @click="onSave">保存する（2秒）</UIButton></div>',
  }),
}

export const AutoLoading: Story = {
  name: '自動autoLoading',
  render: () => ({
    components: { UIButton },
    methods: {
      async onSave() {
        // Promiseを返すだけでボタン側が解決までスピナーを表示・二重押し防止する
        await new Promise((r) => setTimeout(r, 2000))
      },
    },
    template: '<div class="p-4"><UIButton auto-loading @click="onSave">保存する（2秒）</UIButton></div>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { UIButton },
    template: `
      <div class="flex flex-wrap gap-3 p-4">
        <UIButton variant="primary">Primary</UIButton>
        <UIButton variant="secondary">Secondary</UIButton>
        <UIButton variant="outline">Outline</UIButton>
        <UIButton variant="ghost">Ghost</UIButton>
        <UIButton variant="primary" loading>Loading</UIButton>
        <UIButton variant="primary" disabled>Disabled</UIButton>
      </div>
    `,
  }),
}
