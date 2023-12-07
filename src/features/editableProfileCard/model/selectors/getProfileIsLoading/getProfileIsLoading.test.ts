import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
    test('should work with filled state', () => {
        const state: DeepPartialType<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = { }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined)
    })
})
