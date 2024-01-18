import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'

const meta = {
    title: 'entities/NotificationList',
    component: NotificationList,
    tags: ['autodocs'],
} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {},
}
Normal.decorators = [StoreDecorator({})]

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'Like this post',
                },
                {
                    id: '2',
                    title: 'Notification 2',
                    description: 'Like this post',
                },
                {
                    id: '3',
                    title: 'Notification 3',
                    description: 'Like this post',
                },
            ],
        },
    ],
}
