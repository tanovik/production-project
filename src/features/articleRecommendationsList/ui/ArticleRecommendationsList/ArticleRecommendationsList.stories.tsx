import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
import { type Article } from '@/entities/Article'

const meta = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
}

export const FetchCall: Story = {
    args: {},
}
FetchCall.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
}

FetchCall.decorators = [StoreDecorator({})]
