import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UICard from './UICard.vue'
import UIButton from '../UIButton/UIButton.vue'
import UIInput from '../UIInput/UIInput.vue'
import UISocialButton from '../UISocialButton/UISocialButton.vue'

const meta: Meta<typeof UICard> = {
  title: 'Components/UICard',
  component: UICard,
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'select', options: ['sm', 'md', 'lg'] },
    hover: { control: 'boolean' },
  },
  render: (args) => ({
    components: { UICard },
    setup() {
      return { args }
    },
    template: `
      <div class="max-w-md p-4">
        <UICard v-bind="args">
          <template #header><div class="px-6 py-4 font-bold">ヘッダー</div></template>
          カードの本文です。既存のUIAccordionと同じrounded-2xl / border / shadow言語に合わせています。
          <template #footer><div class="px-6 py-3 text-sm text-gray-500">フッター</div></template>
        </UICard>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LoginExample: Story = {
  name: 'Login例（IdP/フォーム合成）',
  render: () => ({
    components: { UICard, UIButton, UIInput, UISocialButton },
    template: `
      <div class="max-w-sm mx-auto p-4">
        <UICard>
          <template #header><div class="px-6 py-4 text-center font-extrabold text-lg">ログイン</div></template>
          <div class="space-y-4">
            <UIInput label="メールアドレス" type="email" placeholder="you@example.com" autocomplete="email" required />
            <UIInput label="パスワード" type="password" placeholder="••••••••" autocomplete="current-password" required />
            <div class="flex justify-end">
              <a href="#" class="text-xs font-bold text-primary-600 hover:opacity-80 dark:text-primary-400">パスワードをお忘れの方</a>
            </div>
            <UIButton block type="submit">ログイン</UIButton>
            <p class="text-center text-xs text-gray-500 dark:text-gray-400">
              アカウントをお持ちでない方
              <a href="#" class="font-bold text-primary-600 hover:opacity-80 dark:text-primary-400">新規登録</a>
            </p>
            <div class="flex items-center gap-3 text-xs text-gray-400"><span class="h-px flex-1 bg-gray-200 dark:bg-white/10" />または<span class="h-px flex-1 bg-gray-200 dark:bg-white/10" /></div>
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
          </div>
        </UICard>
      </div>
    `,
  }),
}

export const RegisterExample: Story = {
  name: '新規登録例',
  render: () => ({
    components: { UICard, UIButton, UIInput, UISocialButton },
    template: `
      <div class="max-w-sm mx-auto p-4">
        <UICard>
          <template #header><div class="px-6 py-4 text-center font-extrabold text-lg">新規登録</div></template>
          <div class="space-y-4">
            <UIInput label="お名前" type="text" placeholder="山田 太郎" autocomplete="name" required />
            <UIInput label="メールアドレス" type="email" placeholder="you@example.com" autocomplete="email" required />
            <UIInput label="パスワード" type="password" placeholder="••••••••" autocomplete="new-password" hint="8文字以上で入力してください" required />
            <label class="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
              <input type="checkbox" required class="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#0a9efa]" />
              <span><a href="#" class="font-bold underline underline-offset-2">利用規約</a>と<a href="#" class="font-bold underline underline-offset-2">プライバシーポリシー</a>に同意します</span>
            </label>
            <UIButton block type="submit">アカウントを作成</UIButton>
            <p class="text-center text-xs text-gray-500 dark:text-gray-400">
              すでにアカウントをお持ちの方
              <a href="#" class="font-bold text-primary-600 hover:opacity-80 dark:text-primary-400">ログイン</a>
            </p>
            <div class="flex items-center gap-3 text-xs text-gray-400"><span class="h-px flex-1 bg-gray-200 dark:bg-white/10" />または<span class="h-px flex-1 bg-gray-200 dark:bg-white/10" /></div>
            <UISocialButton>
              <template #icon>
                <svg viewBox="0 0 24 24" class="w-5 h-5"><path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.3h6.5c-.1 1.1-.8 2.7-2.4 3.8l-.1.1 3.5 2.7.1.1c2.2-2 3.9-5 3.9-8.8Z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.2 0-5.9-2.1-6.8-5l-.1.1-3.6 2.8v.1C3.5 21.4 7.5 24 12 24Z"/><path fill="#FBBC05" d="M5.2 14.4c-.2-.7-.4-1.5-.4-2.4s.1-1.7.4-2.4l-.1-.1-3.6-2.8-.1.1C.5 8.7 0 10.3 0 12s.5 3.3 1.4 4.7l3.8-2.3Z"/><path fill="#EA4335" d="M12 4.7c1.8 0 3 .8 3.7 1.4l3.3-3.2C17.9 1.1 15.2 0 12 0 7.5 0 3.5 2.6 1.4 6.8l3.8 2.9c.9-2.9 3.6-5 6.8-5Z"/></svg>
              </template>
              Googleで登録
            </UISocialButton>
            <UISocialButton>
              <template #icon>
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"/></svg>
              </template>
              GitHubで登録
            </UISocialButton>
          </div>
        </UICard>
      </div>
    `,
  }),
}

export const ForgotPasswordExample: Story = {
  name: 'パスワードリセット例',
  render: () => ({
    components: { UICard, UIButton, UIInput },
    template: `
      <div class="max-w-sm mx-auto p-4">
        <UICard>
          <template #header><div class="px-6 py-4 text-center font-extrabold text-lg">パスワードのリセット</div></template>
          <div class="space-y-4">
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              登録したメールアドレスを入力してください。パスワード再設定用のリンクをお送りします。
            </p>
            <UIInput label="メールアドレス" type="email" placeholder="you@example.com" autocomplete="email" required />
            <UIButton block type="submit">リセットリンクを送信</UIButton>
            <p class="text-center text-xs text-gray-500 dark:text-gray-400">
              <a href="#" class="font-bold text-primary-600 hover:opacity-80 dark:text-primary-400">ログインに戻る</a>
            </p>
          </div>
        </UICard>
      </div>
    `,
  }),
}

export const ForgotPasswordSentExample: Story = {
  name: 'パスワードリセット送信完了例',
  render: () => ({
    components: { UICard, UIButton },
    template: `
      <div class="max-w-sm mx-auto p-4">
        <UICard>
          <template #header><div class="px-6 py-4 text-center font-extrabold text-lg">メールを送信しました</div></template>
          <div class="space-y-4 text-center">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            </div>
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              you@example.com に再設定リンクを送信しました。<br />メールをご確認のうえ、手続きを続けてください。
            </p>
            <UIButton block type="button">ログインに戻る</UIButton>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              メールが届かない場合
              <a href="#" class="font-bold text-primary-600 hover:opacity-80 dark:text-primary-400">再送する</a>
            </p>
          </div>
        </UICard>
      </div>
    `,
  }),
}

export const ResetPasswordExample: Story = {
  name: '新しいパスワード設定例',
  render: () => ({
    components: { UICard, UIButton, UIInput },
    template: `
      <div class="max-w-sm mx-auto p-4">
        <UICard>
          <template #header><div class="px-6 py-4 text-center font-extrabold text-lg">新しいパスワードの設定</div></template>
          <div class="space-y-4">
            <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              新しいパスワードを入力してください。設定後は自動的にログインします。
            </p>
            <UIInput label="新しいパスワード" type="password" placeholder="••••••••" autocomplete="new-password" hint="8文字以上で入力してください" required />
            <UIInput label="新しいパスワード（確認）" type="password" placeholder="••••••••" autocomplete="new-password" required />
            <UIButton block type="submit">パスワードを更新</UIButton>
            <p class="text-center text-xs text-gray-500 dark:text-gray-400">
              <a href="#" class="font-bold text-primary-600 hover:opacity-80 dark:text-primary-400">ログインに戻る</a>
            </p>
          </div>
        </UICard>
      </div>
    `,
  }),
}

export const ResetPasswordErrorExample: Story = {
  name: '新しいパスワード設定エラー例',
  render: () => ({
    components: { UICard, UIButton, UIInput },
    template: `
      <div class="max-w-sm mx-auto p-4">
        <UICard>
          <template #header><div class="px-6 py-4 text-center font-extrabold text-lg">新しいパスワードの設定</div></template>
          <div class="space-y-4">
            <UIInput label="新しいパスワード" type="password" placeholder="••••••••" autocomplete="new-password" hint="8文字以上で入力してください" required />
            <UIInput label="新しいパスワード（確認）" type="password" placeholder="••••••••" autocomplete="new-password" error="パスワードが一致しません" required />
            <UIButton block type="submit">パスワードを更新</UIButton>
          </div>
        </UICard>
      </div>
    `,
  }),
}
