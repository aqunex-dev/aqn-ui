import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UISectionTitle from './UISectionTitle.vue'

const meta: Meta<typeof UISectionTitle> = {
  title: 'Components/UISectionTitle',
  component: UISectionTitle,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'select', options: ['left', 'center'] },
  },
  args: {
    eyebrow: 'Features',
    title: '必要なものはすべて揃っています',
    description: 'ヒーロー・ヘッダー・フッターと同じタイポグラフィと言語感に合わせたセクション見出しです。',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Left: Story = {}

export const Center: Story = {
  args: { align: 'center' },
}
