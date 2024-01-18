import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    tags: ['autodocs'],
} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
}
Normal.decorators = [StoreDecorator({})]

export const Dark: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
