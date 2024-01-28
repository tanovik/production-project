import type { Meta, StoryObj } from '@storybook/react'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'
import { Select } from './Select'

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'Enter value',
        readonly: false,
        options: [
            { value: '1', content: 'First' },
            { value: '123', content: 'Second' },
            { value: '1234', content: 'Third' },
        ],
    },
}
