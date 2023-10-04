import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter'

type AppStore = ReturnType<typeof configureStore>

export function createReduxStore (initialState?: StateSchema): AppStore {
    return configureStore<StateSchema>({
        reducer: { counter: CounterReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
