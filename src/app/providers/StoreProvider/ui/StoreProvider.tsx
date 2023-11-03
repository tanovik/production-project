import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
    children?: React.ReactNode
    initialState?: DeepPartialType<StateSchema>
    asyncReducers?: DeepPartialType<ReducersMapObject<StateSchema>>
}
export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        navigate
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
