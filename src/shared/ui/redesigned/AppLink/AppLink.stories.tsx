import type { Meta, StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator'
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
// import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'text',
        variant : 'primary',
    },
}
Primary.decorators = [StoreDecorator({})]

export const Red: Story = {
    args: {
        children: 'text',
        variant : 'red',
    },
}
Red.decorators = [StoreDecorator({})]

// export const PrimaryDark: Story = {
//     args: {
//         children: 'text',
//         theme: AppLinkTheme.PRIMARY,
//     },
// }
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

// export const SecondaryDark: Story = {
//     args: {
//         children: 'text',
//         theme: AppLinkTheme.SECONDARY,
//     },
// }
// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

