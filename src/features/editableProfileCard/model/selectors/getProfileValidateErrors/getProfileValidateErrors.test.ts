import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../consts/consts'

describe('getProfileValidateErrors', () => {
    test('should work with filled state', () => {
        const validateErrors = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE,
        ]
        const state: DeepPartialType<StateSchema> = {
            profile: {
                validateErrors,
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            validateErrors,
        )
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(
            undefined,
        )
    })
})
