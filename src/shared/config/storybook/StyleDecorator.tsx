import { type Decorator } from '@storybook/react'
// eslint-disable-next-line tanovik-plugin/layer-imports
import '@/app/styles/index.scss'

export const StyleDecorator: Decorator = (StoryComponent) => {
    return (
        <div>
            <StoryComponent />
        </div>
    )
}
