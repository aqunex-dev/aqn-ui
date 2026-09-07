import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UILogo from './UILogo.vue'

const meta: Meta<typeof UILogo> = {
  title: 'Components/UILogo',
  component: UILogo,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['md', 'lg'] },
    showPoweredBy: { control: 'boolean' },
    enableLink: { control: 'boolean' },
  },
  args: {
    size: 'md',
    showPoweredBy: true,
    enableLink: true,
    logo: {
      black: 'https://dummyimage.com/120x32/000/fff&text=LOGO',
      white: 'https://dummyimage.com/120x32/fff/000&text=LOGO',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const SingleAsset: Story = {
  args: {
    logo: {
      black: 'https://dummyimage.com/120x32/000/fff&text=LOGO',
      white: '',
    },
  },
}
