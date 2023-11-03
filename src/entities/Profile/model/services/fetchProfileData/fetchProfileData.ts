import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData =
createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile')
            return response.data
        } catch (err) {
            console.log('err', err)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
