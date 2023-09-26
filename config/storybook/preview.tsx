import type { Preview } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouterDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouteDecorator],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }

}

export default preview
