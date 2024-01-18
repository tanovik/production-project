import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
]

export const NoAuth: Story = {
    args: {},
}
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
]
