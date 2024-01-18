import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartialType<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: true,
                password: '',
                username: '',
            },
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})
