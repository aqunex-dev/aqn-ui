import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIAccordion from './UIAccordion.vue'

const meta: Meta<typeof UIAccordion> = {
  title: 'Components/UIAccordion',
  component: UIAccordion,
  tags: ['autodocs'],
  argTypes: {
    question: { control: 'text' },
    answer: { control: 'text' },
  },
  args: {
    question: 'AQN-UIとは何ですか？',
    answer: 'AQN-UIはVue 3 + Tailwind CSSで構築された軽量なUIコンポーネント集です。ダークモードに対応しています。',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LongText: Story = {
  args: {
    question: 'ダークモードには対応していますか？長い質問文の表示確認用ストーリーです。',
    answer:
      'はい、対応しています。Tailwind CSSのdarkバリアント（.darkクラス）を利用しており、UIThemeToggleコンポーネントと組み合わせることでライト／ダークを切り替えられます。本文が長い場合の折り返しや余白の確認にお使いください。'.repeat(2),
  },
}
