import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIBadge from './UIBadge.vue'

const meta: Meta<typeof UIBadge> = {
  title: 'Components/UIBadge',
  component: UIBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'gray', 'success', 'warning', 'danger'] },
    dot: { control: 'boolean' },
  },
  render: (args) => ({
    components: { UIBadge },
    setup() {
      return { args }
    },
    template: '<UIBadge v-bind="args">バッジ</UIBadge>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => ({
    components: { UIBadge },
    template: `
      <div class="flex flex-wrap gap-2 p-4">
        <UIBadge variant="primary" dot>公開中</UIBadge>
        <UIBadge variant="gray">下書き</UIBadge>
        <UIBadge variant="success" dot>成功</UIBadge>
        <UIBadge variant="warning">注意</UIBadge>
        <UIBadge variant="danger">エラー</UIBadge>
      </div>
    `,
  }),
}
