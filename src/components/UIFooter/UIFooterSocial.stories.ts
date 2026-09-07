import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIFooterSocial from './UIFooterSocial.vue'

const meta: Meta<typeof UIFooterSocial> = {
  title: 'Components/UIFooter/UIFooterSocial',
  component: UIFooterSocial,
  tags: ['autodocs'],
  argTypes: {
    href: { control: 'text' },
    label: { control: 'text' },
  },
  render: (args) => ({
    components: { UIFooterSocial },
    setup() {
      return { args }
    },
    template: `
      <div class="flex items-center space-x-3 p-4">
        <UIFooterSocial v-bind="args">
          <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"/></svg>
        </UIFooterSocial>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: 'https://github.com',
    label: 'GitHub',
  },
}
