import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UIStat from './UIStat.vue'

const meta: Meta<typeof UIStat> = {
  title: 'Components/UIStat',
  component: UIStat,
  tags: ['autodocs'],
  argTypes: {
    trendDirection: { control: 'select', options: ['up', 'down', 'neutral'] },
  },
  args: {
    label: '月間アクティブユーザー',
    value: '12,480',
    trend: '+12.5%',
    trendDirection: 'up',
    description: '前月比',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Grid: Story = {
  render: () => ({
    components: { UIStat },
    template: `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        <UIStat label="売上" value="¥1.2M" trend="+8.1%" trend-direction="up" description="前月比" />
        <UIStat label="解約率" value="1.8%" trend="-0.4pt" trend-direction="down" description="前月比" />
        <UIStat label="待機中" value="24件" trend="±0" description="サポートチケット" />
      </div>
    `,
  }),
}
