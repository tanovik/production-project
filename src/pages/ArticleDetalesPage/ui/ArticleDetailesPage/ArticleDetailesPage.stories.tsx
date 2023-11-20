import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailesPage from './ArticleDetailesPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'pages/ArticleDetailesPage',
    component: ArticleDetailesPage,
    tags: ['autodocs']
} satisfies Meta<typeof ArticleDetailesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
}

export const Dark: Story = {
    args: {}
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
