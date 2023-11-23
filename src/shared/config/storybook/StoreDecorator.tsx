import { type Decorator } from '@storybook/react'
import { StoreProvider, type StateSchema } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { AddCommentFormReducer } from 'features/AddCommentForm/model/slices/AddCommentFormSlice'
import { articleCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/ArticleCommentsSlice'

const defaultAsyncReducer: ReducersList = {
// const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleComments: articleCommentsReducer,
    addCommentForm: AddCommentFormReducer
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
