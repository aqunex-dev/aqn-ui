import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIHero from './UIHero.vue'

const meta: Meta<typeof UIHero> = {
  title: 'Components/UIHero',
  component: UIHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
  },
  args: {
    title: 'シンプルで速いVue UIキット',
    description: 'AQN-UIはTailwind CSSベースの軽量コンポーネント集です。ヒーロー、ヘッダー、フッターからすぐにLPを組み立てられます。',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop',
  },
  render: (args) => ({
    components: { UIHero },
    setup() {
      return { args }
    },
    template: `
      <UIHero v-bind="args">
        <button class="px-6 py-3 rounded-xl bg-[#0a9efa] text-white text-sm font-bold hover:opacity-90">はじめる</button>
        <a href="#" class="text-sm font-bold underline underline-offset-4">ドキュメント</a>
      </UIHero>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutActions: Story = {
  render: (args) => ({
    components: { UIHero },
    setup() {
      return { args }
    },
    template: '<UIHero v-bind="args" />',
  }),
}
