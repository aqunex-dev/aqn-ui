import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UIInput from './UIInput.vue'

const meta: Meta<typeof UIInput> = {
  title: 'Components/UIInput',
  component: UIInput,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    type: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  render: (args) => ({
    components: { UIInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<div class="max-w-sm p-4"><UIInput v-bind="args" v-model="value" /></div>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'メールアドレス', type: 'email', placeholder: 'you@example.com' },
}

export const Password: Story = {
  args: { label: 'パスワード', type: 'password', placeholder: '••••••••', autocomplete: 'current-password' },
}

export const WithError: Story = {
  args: { label: 'メールアドレス', placeholder: 'you@example.com', error: '正しいメールアドレスを入力してください' },
}

export const LoginPair: Story = {
  render: () => ({
    components: { UIInput },
    setup() {
      const email = ref('')
      const password = ref('')
      return { email, password }
    },
    template: `
      <form class="max-w-sm space-y-4 p-4" @submit.prevent>
        <UIInput v-model="email" label="メールアドレス" type="email" placeholder="you@example.com" autocomplete="email" required />
        <UIInput v-model="password" label="パスワード" type="password" placeholder="••••••••" autocomplete="current-password" hint="8文字以上で入力" required />
      </form>
    `,
  }),
}
