import type { Preview } from '@storybook/react'
import { RouteDecorator } from '../../src/shared/config/storybook/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenceDecorator'
import { Theme } from '@/shared/const/theme'

const preview: Preview = {
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT),
        RouteDecorator, SuspenseDecorator],
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
