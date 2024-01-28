import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextSize, TextTheme } from './Text'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
    },
}
export const Error: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        theme: TextTheme.ERROR,
    },
}

export const OnlyTiitle: Story = {
    args: {
        title: 'Title Title Title',
    },
}

export const OnlyText: Story = {
    args: {
        text: 'Text Text Text',
    },
}
export const PrimaryTextDark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
    },
}
PrimaryTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTiitleDark: Story = {
    args: {
        title: 'Title Title Title',
    },
}
OnlyTiitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
    args: {
        text: 'Text Text Text',
    },
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeS: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        size: TextSize.S,
    },
}

export const SizeM: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        size: TextSize.M,
    },
}

export const SizeL: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        size: TextSize.L,
    },
}
