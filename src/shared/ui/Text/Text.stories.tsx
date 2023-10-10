import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextTheme } from './Text'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs']
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text'
    }
}
export const Error: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text',
        theme: TextTheme.ERROR
    }
}

export const OnlyTiitle: Story = {
    args: {
        title: 'Title Title Title'
    }
}

export const OnlyText: Story = {
    args: {
        text: 'Text Text Text'
    }
}
export const PrimaryTextDark: Story = {
    args: {
        title: 'Title Title Title',
        text: 'Text Text Text'
    }
}
PrimaryTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTiitleDark: Story = {
    args: {
        title: 'Title Title Title'
    }
}
OnlyTiitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark: Story = {
    args: {
        text: 'Text Text Text'
    }
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
