import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'

export type AppStore = ReturnType<typeof configureStore>

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
): AppStore {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer

        // async reducers:
        // loginForm?: loginReducer

    }
    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
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
// export type AppDispatch = typeof store.dispatch
