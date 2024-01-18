import { ArticleType } from '@/entities/Article'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'

const meta = {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleTypeTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        value: ArticleType.ECONOMICS,
    },
}
