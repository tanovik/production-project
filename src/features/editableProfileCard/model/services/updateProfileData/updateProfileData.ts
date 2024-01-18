import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { type Profile } from '@/entities/Profile'
import { ValidateProfileError } from '../../consts/consts'

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const formData = getProfileForm(thunkAPI.getState())
    const errors = validateProfileData(formData)
    if (errors.length > 0) {
        return thunkAPI.rejectWithValue(errors)
    }

    try {
        const response = await thunkAPI.extra.api.put<Profile>(
            '/profile/' + formData.id,
            formData,
        )
        // const response = await thunkAPI.extra.api.put<Profile>(`/profile/${formData.id}`, formData)
        if (!response.data) {
            throw new Error()
        }
        return response.data
    } catch (err) {
        console.log('err', err)
        return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
})
