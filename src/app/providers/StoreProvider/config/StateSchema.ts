import { type ReducersMapObject, type EnhancedStore, type AnyAction, type CombinedState } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type CounterSchema } from 'entities/Counter'
import { type ProfileSchema } from 'entities/Profile'
import { type UserSchema } from 'entities/User'
import { type AddCommentFormSchema } from 'features/AddCommentForm'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ScrollSaveSchema } from 'features/ScrollSave'
import {
    type ArticleDetailsPageSchema
} from 'pages/ArticleDetailsPage'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type Reducer } from 'react'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollSave: ScrollSaveSchema

    // async reducers
    loginForm?: LoginSchema
    profile?: ProfileSchema
    addCommentForm?: AddCommentFormSchema
    articleDetails?: ArticleDetailsSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema

}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecordType<StateSchemaKey, boolean>

export interface ReducerManagerType {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer<StateSchema[StateSchemaKey], AnyAction>) => void
    remove: (key: StateSchemaKey) => void
    // true - isMounted, false - notMounted/unMounted
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManagerType
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
