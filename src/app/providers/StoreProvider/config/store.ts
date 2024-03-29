import {
    type ReducersMapObject,
    configureStore,
    type AnyAction,
    type CombinedState,
    type Reducer,
    type EmptyObject,
    type MiddlewareArray,
    type ThunkMiddleware,
    type Middleware,
} from '@reduxjs/toolkit'
import { type ThunkExtraArg, type StateSchema } from './StateSchema'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from '@/shared/api/api'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { ScrollSaveReducer } from '@/features/ScrollSave'
import { rtkApi } from '@/shared/api/rtkApi'

export type AppStore = ReturnType<typeof configureStore>

type createReduxStoreReturnType = ToolkitStore<
EmptyObject & StateSchema,
AnyAction,
MiddlewareArray<
[
    ThunkMiddleware<
    CombinedState<StateSchema>,
    AnyAction,
    ThunkExtraArg
    >,
    Middleware<unknown>,
]
>
>

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
): createReduxStoreReturnType {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: ScrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }
    const reducerManager = createReducerManager(rootReducers)

    const extraArg: ThunkExtraArg = {
        api: $api,
    }
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<
        CombinedState<StateSchema>,
        AnyAction
        >,
        // reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    })

    // @ts-expect-error
    store.reducerManager = reducerManager
    return store
}

// export function configureStore (initialState) {
//     const reducerManager = createReducerManager(staticReducers)

// Create a store with the root reducer function being the one exposed by the manager.
// const store = createStore(reducerManager.reduce, initialState)

// Optional: Put the reducer manager on the store so it is easily accessible
// store.reducerManager = reducerManager
// }

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
