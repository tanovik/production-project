import { type Decorator } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

export const ThemeDecorator = (theme: Theme): Decorator => (StoryComponent) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)
