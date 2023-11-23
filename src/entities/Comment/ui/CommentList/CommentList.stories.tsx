import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const meta = {
    title: 'entities/CommentList',
    component: CommentList,
    tags: ['autodocs']
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' }
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '1', username: 'Petya' }
            }
        ]
    }
}
export const Dark: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' }
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '1', username: 'Petya' }
            }
        ]
    }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true
    }
}
