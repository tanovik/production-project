import { type StateSchema } from '@/app/providers/StoreProvider'
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from './getArticleDetails'

describe('getArticleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle'
        }
        const state: DeepPartialType<StateSchema> = {
            articleDetails: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state data', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
    })
    test('should return error', () => {
        const state: DeepPartialType<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state error', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
    })
    test('should return isLoading', () => {
        const state: DeepPartialType<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state isLoading', () => {
        const state: DeepPartialType<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false)
    })
})
