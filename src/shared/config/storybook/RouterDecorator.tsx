import { type Decorator } from '@storybook/react'
import 'app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator: Decorator = (StoryComponent) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    )
}
