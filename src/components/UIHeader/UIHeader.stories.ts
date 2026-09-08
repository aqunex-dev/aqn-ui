import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIHeader from './UIHeader.vue'

const meta: Meta<typeof UIHeader> = {
  title: 'Components/UIHeader',
  component: UIHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => ({
    components: { UIHeader },
    setup() {
      return { args }
    },
    template: `
      <UIHeader v-bind="args">
        <template #logo>
          <div class="font-bold text-xl dark:text-white">Logo</div>
        </template>
        <template #default>
          <a href="#" class="hover:text-primary">Home</a>
          <a href="#" class="hover:text-primary">About</a>
          <a href="#" class="hover:text-primary">Services</a>
          <a href="#" class="hover:text-primary">Contact</a>
        </template>
        <template #mobile>
          <div class="flex flex-col space-y-2">
            <a href="#" class="block py-1 dark:text-white">Home</a>
            <a href="#" class="block py-1 dark:text-white">About</a>
            <a href="#" class="block py-1 dark:text-white">Services</a>
            <a href="#" class="block py-1 dark:text-white">Contact</a>
          </div>
        </template>
      </UIHeader>
      <div class="h-[150vh] pt-24 px-8 bg-gray-50 dark:bg-gray-900">
        <p class="text-gray-600 dark:text-gray-400">
          スクロール時の動作を確認するために高さを設けています。
        </p>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Scrolled: Story = {
  decorators: [
    () => ({
      template: '<div class="pt-20"><story /></div>',
      mounted() {
        window.scrollY = 50
        window.dispatchEvent(new Event('scroll'))
      },
    }),
  ],
}

export const Dashboard: Story = {
  args: { variant: 'dashboard' },
  render: (args) => ({
    components: { UIHeader },
    setup() {
      return { args }
    },
    template: `
      <UIHeader v-bind="args" @menu-click="() => {}">
        <h1 class="truncate text-base font-bold">ダッシュボード</h1>
        <template #end>
          <span class="hidden text-sm text-gray-500 sm:block dark:text-gray-400">admin@example.com</span>
        </template>
      </UIHeader>
      <div class="h-[120vh] bg-gray-50 px-8 pt-8 dark:bg-dark">
        <p class="text-gray-600 dark:text-gray-400">variant="dashboard" のstickyバー。Sidebarの開閉ボタン（menu-click）と連結します。</p>
      </div>
    `,
  }),
}
