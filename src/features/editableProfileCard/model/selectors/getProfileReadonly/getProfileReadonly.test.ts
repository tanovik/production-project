import { type StateSchema } from '@/app/providers/StoreProvider'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
    test('should work with filled state', () => {
        const state: DeepPartialType<StateSchema> = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartialType<StateSchema> = { }
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
    })
})
