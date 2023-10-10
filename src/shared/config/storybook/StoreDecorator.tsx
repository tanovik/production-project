import { type Decorator } from '@storybook/react'
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (StoryComponent) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
)
