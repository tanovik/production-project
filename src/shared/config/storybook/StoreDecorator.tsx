import { type Decorator } from '@storybook/react'
// TODO
import { StoreProvider, type StateSchema } from '@/app/providers/StoreProvider'

import { articlesPageReducer } from '@/pages/ArticlesPage/testing'
import { loginReducer } from '@/features/AuthByUsername/testing'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '@/entities/Article/testing'
import { profileReducer } from '@/features/editableProfileCard/testing'
import { addCommentFormReducer } from '@/features/AddCommentForm/testing'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing'

const defaultAsyncReducer: ReducersList = {
    // const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
    addCommentForm: addCommentFormReducer,
    articleDetails: articleDetailsReducer,
    articlesPage: articlesPageReducer,
    articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator =
    (
        state: DeepPartialType<StateSchema>,
        asyncReducers?: ReducersList,
        // asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ): Decorator =>
    (StoryComponent) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    )
