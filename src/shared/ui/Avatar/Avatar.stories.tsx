import type { Meta, StoryObj } from '@storybook/react'
import AvatarImg from 'shared/assets/tests/storybook.jpg'
import 'app/styles/index.scss'

import { Avatar } from './Avatar'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        src: AvatarImg,
        alt: 'avatar',
        size: 150
    }
}
export const Small: Story = {
    args: {
        src: AvatarImg,
        alt: 'avatar',
        size: 50
    }
}
