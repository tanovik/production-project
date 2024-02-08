import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { Country } from '@/entities/Country'
import AvatarImg from '@/shared/assets/tests/storybook.jpg'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Currency } from '@/entities/Currency'

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {},
}
Normal.decorators = [
    StoreDecorator({
        profile: {
            form: {
                firstname: 'John',
                lastname: 'Snow',
                age: 22,
                currency: Currency.USD,
                country: Country.Canada,
                city: 'Toronto',
                username: 'admin',
                avatar: AvatarImg,
            },
            isLoading: false,
            readonly: true,
        },
    }),
]
export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                firstname: 'John',
                lastname: 'Snow',
                age: 22,
                currency: Currency.USD,
                country: Country.Canada,
                city: 'Toronto',
                username: 'admin',
                avatar: AvatarImg,
            },
            isLoading: false,
            readonly: true,
        },
    }),
]
