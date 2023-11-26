import { type ReducersMapObject, type EnhancedStore, type AnyAction, type CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AddCommentFormSchema } from 'features/AddCommentForm'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ArticleCommentsSchema } from 'pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type Reducer } from 'react'
import { type NavigateOptions, type To } from 'react-router-dom'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleComments?: ArticleCommentsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema

}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManagerType {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer<StateSchema[StateSchemaKey], AnyAction>) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManagerType
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
