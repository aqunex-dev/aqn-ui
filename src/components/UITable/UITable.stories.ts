import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UITable from './UITable.vue'
import UIBadge from '../UIBadge/UIBadge.vue'

const sampleColumns = [
  { key: 'name', label: '名前' },
  { key: 'email', label: 'メール' },
  { key: 'role', label: '権限' },
  { key: 'status', label: '状態', align: 'center' as const },
]

const sampleRows = [
  { name: '山田 太郎', email: 'taro@example.com', role: '管理者', status: '有効' },
  { name: '佐藤 花子', email: 'hanako@example.com', role: '編集者', status: '有効' },
  { name: '鈴木 一郎', email: 'ichiro@example.com', role: '閲覧者', status: '停止中' },
]

const meta: Meta<typeof UITable> = {
  title: 'Components/UITable',
  component: UITable,
  tags: ['autodocs'],
  args: {
    columns: sampleColumns,
    rows: sampleRows,
  },
  render: (args) => ({
    components: { UITable, UIBadge },
    setup() {
      return { args }
    },
    template: `
      <div class="p-4">
        <UITable v-bind="args">
          <template #cell-status="{ value }">
            <UIBadge :variant="value === '有効' ? 'success' : 'danger'" dot>{{ value }}</UIBadge>
          </template>
        </UITable>
      </div>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Striped: Story = {
  args: { columns: sampleColumns, rows: sampleRows, striped: true },
}

export const Empty: Story = {
  args: { columns: sampleColumns, rows: [] },
}
