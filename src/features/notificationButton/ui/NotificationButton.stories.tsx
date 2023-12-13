import type { Meta, StoryObj } from '@storybook/react'
import { NotificationButton } from './NotificationButton'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
    title: 'pages/NotificationButton',
    component: NotificationButton,
    tags: ['autodocs']
} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
