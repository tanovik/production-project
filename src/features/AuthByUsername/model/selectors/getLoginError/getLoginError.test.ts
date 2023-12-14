import { type StateSchema } from '@/app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartialType<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: false,
                password: '',
                username: ''
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = { }
        expect(getLoginError(state as StateSchema)).toEqual('')
    })
})
