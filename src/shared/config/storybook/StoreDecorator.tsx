import { type Decorator } from '@storybook/react'
// TODO
import { StoreProvider, type StateSchema } from '@/app/providers/StoreProvider'
// eslint-disable-next-line
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
// eslint-disable-next-line
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
// eslint-disable-next-line
import { AddCommentFormReducer } from '@/features/AddCommentForm/model/slices/AddCommentFormSlice'
// eslint-disable-next-line
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices'
// eslint-disable-next-line
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slice/articlesPageSlice'
// eslint-disable-next-line
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice'

const defaultAsyncReducer: ReducersList = {
// const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
    addCommentForm: AddCommentFormReducer,
    articleDetails: articleDetailsReducer,
    articlesPage: articlesPageReducer,
    articleDetailsPage: articleDetailsPageReducer
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
