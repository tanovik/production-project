import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: false,
                password: '',
                username: 'name'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('name')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
