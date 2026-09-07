import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIFooter from './UIFooter.vue'
import UIFooterLink from './UIFooterLink.vue'
import UIFooterSocial from './UIFooterSocial.vue'

const meta: Meta<typeof UIFooter> = {
  title: 'Components/UIFooter',
  component: UIFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    shortDescription: { control: 'text' },
    author: { control: 'text' },
  },
  args: {
    shortDescription: 'AQN-UIはVue 3向けのシンプルで拡張性のあるUIコンポーネントライブラリです。',
    author: 'AQUNEX',
  },
  render: (args) => ({
    components: { UIFooter, UIFooterLink, UIFooterSocial },
    setup() {
      return { args }
    },
    template: `
      <UIFooter v-bind="args">
        <template #logo>
          <div class="font-bold text-xl">AQUNEX</div>
        </template>
        <template #social-link>
          <UIFooterSocial href="https://x.com" label="X">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2Zm-1.1 18h1.7L7 3.9H5.2L17.8 20Z"/></svg>
          </UIFooterSocial>
          <UIFooterSocial href="https://github.com" label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"/></svg>
          </UIFooterSocial>
        </template>
        <template #link>
          <UIFooterLink to="#">ホーム</UIFooterLink>
          <UIFooterLink to="#"> about</UIFooterLink>
          <UIFooterLink to="#">お問い合わせ</UIFooterLink>
        </template>
        <template #resources>
          <UIFooterLink to="#">ドキュメント</UIFooterLink>
          <UIFooterLink to="#">Storybook</UIFooterLink>
          <UIFooterLink to="#">リリースノート</UIFooterLink>
        </template>
        <template #legal>
          <UIFooterLink to="#">利用規約</UIFooterLink>
          <UIFooterLink to="#">プライバシーポリシー</UIFooterLink>
        </template>
      </UIFooter>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Minimal: Story = {
  args: {
    shortDescription: 'スロット未指定の最小構成です。',
    author: 'AQUNEX',
  },
  render: (args) => ({
    components: { UIFooter },
    setup() {
      return { args }
    },
    template: '<UIFooter v-bind="args" />',
  }),
}
