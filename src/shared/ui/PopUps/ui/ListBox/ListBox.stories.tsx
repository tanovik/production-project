import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
    title: 'shared/ListBox',
    component: ListBox,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
}

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
}

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
}

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
}

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
}
