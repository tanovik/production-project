import { type Decorator } from '@storybook/react'
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducer: ReducersList = {
// const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
}

export const StoreDecorator = (
    state: DeepPartialType<StateSchema>,
    asyncReducers?: ReducersList
    // asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
): Decorator => (StoryComponent) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
)
