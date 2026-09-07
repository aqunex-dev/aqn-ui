import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIFooterLink from './UIFooterLink.vue'

const meta: Meta<typeof UIFooterLink> = {
  title: 'Components/UIFooter/UIFooterLink',
  component: UIFooterLink,
  tags: ['autodocs'],
  argTypes: {
    to: { control: 'text' },
  },
  render: (args) => ({
    components: { UIFooterLink },
    setup() {
      return { args }
    },
    template: `
      <ul class="space-y-2.5 text-sm p-4">
        <UIFooterLink v-bind="args">サンプルリンク</UIFooterLink>
      </ul>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    to: '#',
  },
}

export const External: Story = {
  args: {
    to: 'https://example.com',
  },
}
