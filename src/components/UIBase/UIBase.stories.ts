import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIBase from './UIBase.vue'

const meta: Meta<typeof UIBase> = {
  title: 'Components/UIBase',
  component: UIBase,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  render: () => ({
    components: { UIBase },
    template: `
      <UIBase>
        <template #header>
          <div class="bg-gray-100 dark:bg-white/5 px-8 py-4 text-sm font-bold">Header Slot</div>
        </template>
        <div class="px-8 py-16 max-w-3xl mx-auto">
          <h1 class="text-2xl font-bold mb-4">Main Slot</h1>
          <p class="text-gray-600 dark:text-gray-300">UIBaseはheader / default(main) / footerの3スロットを持つレイアウトシェルです。</p>
        </div>
        <template #footer>
          <div class="bg-gray-100 dark:bg-white/5 px-8 py-4 text-sm text-center">Footer Slot</div>
        </template>
      </UIBase>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutSlots: Story = {
  render: () => ({
    components: { UIBase },
    template: `
      <UIBase>
        <div class="px-8 py-16 text-center text-gray-500">スロット未指定時はmainのみ表示されます。</div>
      </UIBase>
    `,
  }),
}
