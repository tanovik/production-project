import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from '../../types/profile'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData =
createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const formData = getProfileForm(thunkAPI.getState())
        try {
            const response = await thunkAPI.extra.api.put<Profile>('/profile', formData)
            return response.data
        } catch (err) {
            console.log('err', err)
            return thunkAPI.rejectWithValue('error')
        }
    }
)
