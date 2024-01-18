import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileData } from './getProfileData'
import { Currency } from '@/shared/const/common'
import { Country } from '../../../../../entities/Country'

describe('getProfileData', () => {
    test('should return profile data', () => {
        const data = {
            firstname: 'John',
            lastname: 'Snow',
            age: 22,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Toronto',
            username: 'admin',
        }
        const state: DeepPartialType<StateSchema> = {
            profile: {
                data,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
