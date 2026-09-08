import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { PhGear, PhHouse, PhTable, PhUsers } from '@phosphor-icons/vue'
import UISidebar from './UISidebar.vue'
import UISidebarGroup from './UISidebarGroup.vue'
import UISidebarItem from './UISidebarItem.vue'

const meta: Meta<typeof UISidebar> = {
  title: 'Components/UISidebar',
  component: UISidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    open: { control: 'boolean' },
    collapsed: { control: 'boolean' },
    headerless: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const navTemplate = (extra = '') => `
  <UISidebar v-bind="args" ${extra}>
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
        <template #icon><PhGear :size="20" /></template>
      </UISidebarItem>
    </UISidebarGroup>
    <template #footer>
      <div class="rounded-xl bg-gray-50 px-3 py-2.5 text-xs text-gray-500 dark:bg-white/5 dark:text-gray-400">v0.1.0</div>
    </template>
  </UISidebar>
`

export const Default: Story = {
  args: { open: true, collapsed: false },
  render: (args) => ({
    components: { UISidebar, UISidebarGroup, UISidebarItem, PhHouse, PhUsers, PhTable, PhGear },
    setup() {
      return { args }
    },
    template: `<div class="flex min-h-screen bg-gray-50 dark:bg-dark">${navTemplate()}</div>`,
  }),
}

export const Collapsed: Story = {
  args: { open: true, collapsed: true },
  render: (args) => ({
    components: { UISidebar, UISidebarGroup, UISidebarItem, PhHouse, PhUsers, PhTable, PhGear },
    setup() {
      return { args }
    },
    template: `<div class="flex min-h-screen bg-gray-50 dark:bg-dark">${navTemplate()}</div>`,
  }),
}

export const MobileDrawer: Story = {
  args: { open: true, collapsed: false },
  render: (args) => ({
    components: { UISidebar, UISidebarGroup, UISidebarItem, PhHouse, PhUsers, PhTable, PhGear },
    setup() {
      return { args }
    },
    template: `
      <div class="min-h-screen bg-gray-50 p-8 dark:bg-dark">
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">open=true でモバイル用ドロワー＋オーバーレイ表示を確認できます。</p>
        ${navTemplate(`@close="args.open = false" @update:open="v => args.open = v"`)}
      </div>
    `,
  }),
}

export const Headerless: Story = {
  args: { open: true, collapsed: false, headerless: true },
  render: (args) => ({
    components: { UISidebar, UISidebarGroup, UISidebarItem, PhHouse, PhUsers, PhTable, PhGear },
    setup() {
      return { args }
    },
    template: `<div class="flex min-h-screen bg-gray-50 dark:bg-dark">${navTemplate()}</div>`,
  }),
}

export const HeaderlessCollapsed: Story = {
  args: { open: true, collapsed: true, headerless: true },
  render: (args) => ({
    components: { UISidebar, UISidebarGroup, UISidebarItem, PhHouse, PhUsers, PhTable, PhGear },
    setup() {
      return { args }
    },
    template: `<div class="flex min-h-screen bg-gray-50 dark:bg-dark">${navTemplate()}</div>`,
  }),
}
