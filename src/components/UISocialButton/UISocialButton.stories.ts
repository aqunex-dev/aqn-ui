import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UISocialButton from './UISocialButton.vue'

const meta: Meta<typeof UISocialButton> = {
  title: 'Components/UISocialButton',
  component: UISocialButton,
  tags: ['autodocs'],
  render: (args) => ({
    components: { UISocialButton },
    setup() {
      return { args }
    },
    template: `
      <div class="max-w-sm p-4">
        <UISocialButton v-bind="args">
          <template #icon>
            <svg viewBox="0 0 24 24" class="w-5 h-5"><path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.3h6.5c-.1 1.1-.8 2.7-2.4 3.8l-.1.1 3.5 2.7.1.1c2.2-2 3.9-5 3.9-8.8Z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.2 0-5.9-2.1-6.8-5l-.1.1-3.6 2.8v.1C3.5 21.4 7.5 24 12 24Z"/><path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-.1-.1-3.6-2.8-.1.1C.5 8.7 0 10.3 0 12s.5 3.3 1.4 4.7l3.8-2.3Z"/><path fill="#EA4335" d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.5 0 3.5 2.6 1.4 6.8l3.8 2.9c.9-2.9 3.6-5 6.8-5Z"/></svg>
          </template>
          Googleで続ける
        </UISocialButton>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Google: Story = {}

export const IdPList: Story = {
  name: 'IdP一覧',
  render: () => ({
    components: { UISocialButton },
    template: `
      <div class="max-w-sm space-y-3 p-4">
        <UISocialButton>
          <template #icon>
            <svg viewBox="0 0 24 24" class="w-5 h-5"><path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.3h6.5c-.1 1.1-.8 2.7-2.4 3.8l-.1.1 3.5 2.7.1.1c2.2-2 3.9-5 3.9-8.8Z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.2 0-5.9-2.1-6.8-5l-.1.1-3.6 2.8v.1C3.5 21.4 7.5 24 12 24Z"/><path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-.1-.1-3.6-2.8-.1.1C.5 8.7 0 10.3 0 12s.5 3.3 1.4 4.7l3.8-2.3Z"/><path fill="#EA4335" d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.5 0 3.5 2.6 1.4 6.8l3.8 2.9c.9-2.9 3.6-5 6.8-5Z"/></svg>
          </template>
          Googleでログイン
        </UISocialButton>
        <UISocialButton>
          <template #icon>
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"/></svg>
          </template>
          GitHubでログイン
        </UISocialButton>
        <UISocialButton>
          <template #icon>
            <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.6 2H8l4.4 5.9L18.9 2Zm-1.1 18h1.7L7 3.9H5.2L17.8 20Z"/></svg>
          </template>
          Xでログイン
        </UISocialButton>
      </div>
    `,
  }),
}
