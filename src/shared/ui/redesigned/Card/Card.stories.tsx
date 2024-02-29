import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { Text } from '../Text/Text'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/redesigned/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
}

export const Dark: Story = {
    args: {
        children: <Text title="test" text="text text" />,
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
