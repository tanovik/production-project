import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
// import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

const meta = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    tags: ['autodocs']
    // decorators: [withMock]
} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        articleId: '1'
    }
}
Normal.decorators = [StoreDecorator({
    user: {
        authData: { id: '1' }
    }
})]

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4
                }
            ]
        }
    ]
}
export const WithoutRate: Story = {
    args: {
        articleId: '1'
    }
}
WithoutRate.decorators = [StoreDecorator({
    user: {
        authData: { id: '1' }
    }
})]

WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: []
        }
    ]
}
// export const Dark: Story = {
//     args: {}
// }
