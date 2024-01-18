import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
    test('should return error', () => {
        const state: DeepPartialType<StateSchema> = {
            profile: {
                error: 'error',
            },
        }
        expect(getProfileError(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual(undefined)
    })
})
