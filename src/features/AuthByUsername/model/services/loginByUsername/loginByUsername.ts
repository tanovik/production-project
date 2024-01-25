import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type User, userActions } from '../../../../../entities/User'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
ThunkConfig<string>
>('login/loginByUsername', async (authData: LoginByUsernameProps, thunkAPI) => {
    try {
        const response = await thunkAPI.extra.api.post<User>('/login', authData)
        if (!response.data) {
            throw new Error()
        }
        // localStorage.setItem(
        //     USER_LOCALSTORAGE_KEY,
        //     JSON.stringify(response.data),
        // )
        thunkAPI.dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (err) {
        console.log('err', err)
        return thunkAPI.rejectWithValue('error')
    }
})
