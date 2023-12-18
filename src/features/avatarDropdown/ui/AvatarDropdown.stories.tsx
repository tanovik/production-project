import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

const meta = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    tags: ['autodocs']
} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}
Light.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
