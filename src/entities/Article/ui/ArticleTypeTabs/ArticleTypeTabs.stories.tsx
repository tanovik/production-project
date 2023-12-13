import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'
import { ArticleType } from '../../model/consts/articleConsts'

const meta = {
    title: 'entities/ArticleTypeTabs',
    component: ArticleTypeTabs,
    tags: ['autodocs']
} satisfies Meta<typeof ArticleTypeTabs>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        value: ArticleType.ECONOMICS
    }
}

// export const Dark: Story = {
//     args: {}
// }
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
