import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    data: undefined,
    error: undefined

}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        // setAuthData: (state, action: PayloadAction<User>) => {
        //     state.authData = action.payload
        // },
        // initAuthData: (state) => {
        //     const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
        //     if (user) {
        //         state.authData = JSON.parse(user)
        //     }
        // },
        // logout: (state) => {
        //     state.authData = undefined
        //     localStorage.removeItem(USER_LOCALSTORAGE_KEY)
        // }
    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
