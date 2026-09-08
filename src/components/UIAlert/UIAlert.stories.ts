import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UIAlert from './UIAlert.vue'
import UIInput from '../UIInput/UIInput.vue'
import UIButton from '../UIButton/UIButton.vue'

const meta: Meta<typeof UIAlert> = {
  title: 'Components/UIAlert',
  component: UIAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['error', 'warning', 'success', 'info'] },
    title: { control: 'text' },
    description: { control: 'text' },
    dismissible: { control: 'boolean' },
    showIcon: { control: 'boolean' },
  },
  render: (args) => ({
    components: { UIAlert },
    setup() {
      return { args }
    },
    template: '<div class="max-w-md p-4"><UIAlert v-bind="args" /></div>',
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const ErrorDefault: Story = {
  args: {
    variant: 'error',
    title: 'ログインに失敗しました',
    description: 'メールアドレスまたはパスワードが正しくありません。',
  },
}

export const ErrorList: Story = {
  args: {
    variant: 'error',
    title: '入力内容を確認してください',
    errors: [
      'メールアドレスの形式が正しくありません',
      'パスワードは8文字以上で入力してください',
    ],
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'セッションの有効期限が近づいています',
    description: '5分以内に再ログインが必要になる場合があります。',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'ログインしました',
    description: 'ダッシュボードにリダイレクトします。',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'メンテナンスのお知らせ',
    description: '本日 23:00〜24:00 はログインできない時間帯があります。',
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'error',
    title: 'ログインに失敗しました',
    description: 'しばらく待ってからもう一度お試しください。',
    dismissible: true,
  },
}

export const WithoutTitle: Story = {
  args: {
    variant: 'error',
    description: 'メールアドレスまたはパスワードが正しくありません。',
  },
}

export const LoginForm: Story = {
  render: () => ({
    components: { UIAlert, UIInput, UIButton },
    setup() {
      const email = ref('')
      const password = ref('')
      const failed = ref(true)
      return { email, password, failed }
    },
    template: `
      <form class="max-w-sm space-y-4 p-4" @submit.prevent="failed = true">
        <UIAlert
          v-if="failed"
          variant="error"
          title="ログインに失敗しました"
          description="メールアドレスまたはパスワードが正しくありません。"
          dismissible
          @close="failed = false"
        />
        <UIInput v-model="email" label="メールアドレス" type="email" placeholder="you@example.com" autocomplete="email" required />
        <UIInput v-model="password" label="パスワード" type="password" placeholder="••••••••" autocomplete="current-password" required />
        <UIButton type="submit" block>ログイン</UIButton>
      </form>
    `,
  }),
}
