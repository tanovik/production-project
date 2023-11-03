import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}
Light.decorators = [StoreDecorator({
    profile: { data: { firstName: 'Lana' }, isLoading: false, readonly: true }
})]

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: { data: { firstName: 'Lana' }, isLoading: false, readonly: true }
})]
