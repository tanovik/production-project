import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator'

const meta = {
    title: 'entities/CommentCard',
    component: CommentCard,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

const comment = {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' }
}

export const Normal: Story = {
    args: {
        comment
    }
}

export const Dark: Story = {
    args: {
        comment
    }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading: Story = {
    args: {
        comment,
        isLoading: true,
    },
}
export const NormalRedesigned: Story = {
    args: {
        comment
    }
}
NormalRedesigned.decorators = [ NewDesignDecorator]


export const DarkRedesigned: Story = {
    args: {
        comment
    }
}
DarkRedesigned.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator]

export const LoadingRedesigned: Story = {
    args: {
        comment,
        isLoading: true,
    },
}
LoadingRedesigned.decorators = [ThemeDecorator(Theme.DARK), NewDesignDecorator]
