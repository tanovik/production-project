import { type Decorator } from '@storybook/react'
// eslint-disable-next-line tanovik-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'
import { type Theme } from '@/shared/const/theme'

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (StoryComponent) => (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    )
