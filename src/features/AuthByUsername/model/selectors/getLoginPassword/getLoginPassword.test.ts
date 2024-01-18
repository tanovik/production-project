import { getLoginPassword } from './getLoginPassword'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: DeepPartialType<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: false,
                password: '123',
                username: '',
            },
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123')
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual('')
    })
})
