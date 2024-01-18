import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
// import { Theme } from 'app/providers/ThemeProvider'
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    tags: ['autodocs'],
} satisfies Meta<typeof EditableProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: { id: '1' },
}
Light.decorators = [StoreDecorator({})]

// export const Dark: Story = {
//     args: {}
// }
