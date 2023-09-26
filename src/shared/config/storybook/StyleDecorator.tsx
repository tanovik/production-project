import { type Decorator } from '@storybook/react'
import 'app/styles/index.scss'

export const StyleDecorator: Decorator = (StoryComponent) => {
    return (
        <div>
            <StoryComponent />
        </div>
    )
}
