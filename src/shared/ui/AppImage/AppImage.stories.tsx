import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/AppImage',
    component: AppImage,
    tags: ['autodocs'],
} satisfies Meta<typeof AppImage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}

export const Dark: Story = {
    args: {},
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
