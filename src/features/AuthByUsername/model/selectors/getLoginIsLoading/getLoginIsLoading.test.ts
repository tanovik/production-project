import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
                isLoading: true,
                password: '',
                username: ''
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})
