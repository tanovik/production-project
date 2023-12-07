import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileForm } from './getProfileForm'
import { Currency } from 'shared/const/common'
import { Country } from '../../../../../entities/Country'

describe('getProfileForm', () => {
    test('should return profile form', () => {
        const data = {
            firstName: 'John',
            lastName: 'Snow',
            age: 22,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Toronto',
            username: 'admin'
        }
        const state: DeepPartialType<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = { }
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
