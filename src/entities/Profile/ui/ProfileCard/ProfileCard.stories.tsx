import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from '@/entities/Country'
import AvatarImg from '@/shared/assets/tests/storybook.jpg'
import { Currency } from '@/entities/Currency'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator'

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

const data = {
    firstname: 'John',
    lastname: 'Snow',
    age: 22,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Toronto',
    username: 'admin',
    avatar: AvatarImg,
}

export const Primary: Story = {
    args: {
        data
    },
}
export const PrimaryRedesigned: Story = {
    args: {
        data
    },
}

PrimaryRedesigned.decorators = [NewDesignDecorator]


export const WithError: Story = {
    args: {
        error: 'error',
    },
}
export const WithErrorRedesigned: Story = {
    args: {
        error: 'error',
    },
}

WithErrorRedesigned.decorators = [NewDesignDecorator]


export const Loading: Story = {
    args: {
        isLoading: true,
    },
}
export const LoadingRedesigned: Story = {
    args: {
        isLoading: true,
    },
}

LoadingRedesigned.decorators = [NewDesignDecorator]
