import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
    title: 'shared/redesigned/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Text',
    },
}

export const Clear: Story = {
    args: {
        children: 'Text',
        // theme: ButtonTheme.CLEAR,
        variant:'clear',

    },
}

export const Outline: Story = {
    args: {
        children: 'Text',
        // theme: ButtonTheme.OUTLINE,
        variant:'outline',

    },
}
export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        // theme: ButtonTheme.OUTLINE,
        // size: ButtonSize.L,
        variant:'outline',
        size: 'l',
    },
}
export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        // theme: ButtonTheme.OUTLINE,
        variant:'outline',
        size: 'xl',
    },
}
export const OutlineDark: Story = {
    args: {
        children: 'Text',
        // theme: ButtonTheme.OUTLINE,
        variant:'outline',
    },
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        // theme: ButtonTheme.BACKGROUND,
        variant:'clear',
    },
}
export const BackgroundThemeInverted: Story = {
    args: {
        children: 'Text',
        // theme: ButtonTheme.BACKGROUND_INVERTED,
        variant:'clear',
    },
}
export const Square: Story = {
    args: {
        children: '>',
        // theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        variant:'clear',
    },
}

export const SquareSizeL: Story = {
    args: {
        children: '>',
        // theme: ButtonTheme.BACKGROUND_INVERTED,
        variant:'clear',
        square: true,
        size: 'l',

    },
}
export const SquareSizeXL: Story = {
    args: {
        children: '>',
        // theme: ButtonTheme.BACKGROUND_INVERTED,
        variant:'clear',
        square: true,
        size: 'xl',
    },
}
export const Disabled: Story = {
    args: {
        children: '>',
        // theme: ButtonTheme.OUTLINE,
        variant:'outline',
        disabled: true,
    },
}
