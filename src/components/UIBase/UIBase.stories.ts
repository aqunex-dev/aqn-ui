import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { PhHouse, PhTable, PhUsers } from '@phosphor-icons/vue'
import UIBase from './UIBase.vue'
import UIHeader from '../UIHeader/UIHeader.vue'
import UISidebar from '../UISidebar/UISidebar.vue'
import UISidebarGroup from '../UISidebar/UISidebarGroup.vue'
import UISidebarItem from '../UISidebar/UISidebarItem.vue'

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

export const Dashboard: Story = {
  render: () => ({
    components: { UIBase, UIHeader, UISidebar, UISidebarGroup, UISidebarItem, PhHouse, PhUsers, PhTable },
    setup() {
      const sidebarOpen = ref(false)
      return { sidebarOpen }
    },
    template: `
      <UIBase variant="dashboard">
        <template #sidebar>
          <UISidebar headerless v-model:open="sidebarOpen">
            <template #logo>
              <div class="px-1 text-base font-bold text-gray-900 dark:text-white">AQUNEX</div>
            </template>
            <UISidebarGroup title="メニュー">
              <UISidebarItem label="ダッシュボード" href="#" active>
                <template #icon><PhHouse :size="20" /></template>
              </UISidebarItem>
              <UISidebarItem label="ユーザー" href="#" :badge="12">
                <template #icon><PhUsers :size="20" /></template>
              </UISidebarItem>
              <UISidebarItem label="レポート" href="#">
                <template #icon><PhTable :size="20" /></template>
              </UISidebarItem>
            </UISidebarGroup>
          </UISidebar>
        </template>
        <template #header>
          <UIHeader variant="dashboard" @menu-click="sidebarOpen = true">
            <h1 class="truncate text-base font-bold">ダッシュボード</h1>
            <template #end>
              <span class="hidden text-sm text-gray-500 sm:block dark:text-gray-400">admin@example.com</span>
            </template>
          </UIHeader>
        </template>
        <div class="p-6 sm:p-8">
          <h1 class="mb-2 text-2xl font-bold">ダッシュボード</h1>
          <p class="text-sm text-gray-600 dark:text-gray-300">UIBase variant="dashboard" + Sidebar / Header 連結例です。Header左のボタンでSidebarを開閉できます。</p>
        </div>
      </UIBase>
    `,
  }),
}

export const DashboardCollapsed: Story = {
  render: () => ({
    components: { UIBase, UIHeader, UISidebar, UISidebarGroup, UISidebarItem, PhHouse, PhUsers, PhTable },
    setup() {
      const sidebarOpen = ref(false)
      return { sidebarOpen }
    },
    template: `
      <UIBase variant="dashboard">
        <template #sidebar>
          <UISidebar headerless v-model:open="sidebarOpen" collapsed>
            <template #logo>
              <div class="px-1 text-base font-bold text-gray-900 dark:text-white">AQUNEX</div>
            </template>
            <template #logo-collapsed>
              <div class="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-base font-bold text-white">A</div>
            </template>
            <UISidebarGroup title="メニュー">
              <UISidebarItem label="ダッシュボード" href="#" active>
                <template #icon><PhHouse :size="20" /></template>
              </UISidebarItem>
              <UISidebarItem label="ユーザー" href="#" :badge="12">
                <template #icon><PhUsers :size="20" /></template>
              </UISidebarItem>
              <UISidebarItem label="レポート" href="#">
                <template #icon><PhTable :size="20" /></template>
              </UISidebarItem>
            </UISidebarGroup>
            <UISidebarGroup title="設定">
              <UISidebarItem label="一般設定" href="#">
                <template #icon><PhHouse :size="20" /></template>
              </UISidebarItem>
            </UISidebarGroup>
          </UISidebar>
        </template>
        <template #header>
          <UIHeader variant="dashboard" @menu-click="sidebarOpen = true">
            <h1 class="truncate text-base font-bold">ダッシュボード</h1>
          </UIHeader>
        </template>
        <div class="p-6 sm:p-8">
          <h1 class="mb-2 text-2xl font-bold">ダッシュボード</h1>
          <p class="text-sm text-gray-600 dark:text-gray-300">collapsed時はロゴがアイコンに切り替わり、セクション名の代わりに区切り線が表示されます。Sidebarはmainのpaddingの影響を受けません。</p>
        </div>
      </UIBase>
    `,
  }),
}
