import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
}
