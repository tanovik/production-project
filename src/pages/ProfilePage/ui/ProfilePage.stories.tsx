import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { Currency } from 'shared/const/common'
import { Country } from 'entities/Country'
import AvatarImg from 'shared/assets/tests/storybook.jpg'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs']
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {}
}
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            firstName: 'John',
            lastName: 'Snow',
            age: 22,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Toronto',
            username: 'admin',
            avatar: AvatarImg
        },
        isLoading: false,
        readonly: true
    }
})]
export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            firstName: 'John',
            lastName: 'Snow',
            age: 22,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Toronto',
            username: 'admin',
            avatar: AvatarImg
        },
        isLoading: false,
        readonly: true
    }
})]