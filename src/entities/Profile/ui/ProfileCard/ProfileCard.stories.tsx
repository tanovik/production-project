import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from '@/shared/const/common'
import { Country } from '@/entities/Country'
import AvatarImg from '@/shared/assets/tests/storybook.jpg'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        data: {
            firstname: 'John',
            lastname: 'Snow',
            age: 22,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Toronto',
            username: 'admin',
            avatar: AvatarImg,
        },
    },
}

export const WithError: Story = {
    args: {
        error: 'error',
    },
}

export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
