import { type Decorator } from '@storybook/react'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator: Decorator = (StoryComponent) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    )
}
