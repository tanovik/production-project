import { Currency } from '@/shared/const/common'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type ProfileSchema } from '../types/editableProfileCardSchema'
import { Country } from '../../../../entities/Country'
import { ValidateProfileError } from '../consts/consts'

const data = {
    firstname: 'John',
    lastname: 'Snow',
    age: 22,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Toronto',
    username: 'admin'
}
describe('profileSlice', () => {
    test('test setReadonly', () => {
        const state: DeepPartialType<ProfileSchema> = { readonly: false }

        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true })
    })

    test('test cancelEdit', () => {
        const state: DeepPartialType<ProfileSchema> = { data, form: { username: '' } }

        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({ readonly: true, validateErrors: undefined, form: data, data })
    })

    test('test update profile', () => {
        const state: DeepPartialType<ProfileSchema> = { form: { username: '123' } }

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123456'
            })
        )).toEqual({
            form: { username: '123456' }
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartialType<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined
        })
    })

    test('test update profile service fullfiled', () => {
        const state: DeepPartialType<ProfileSchema> = {
            isLoading: true
        }

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data
        })
    })
})
