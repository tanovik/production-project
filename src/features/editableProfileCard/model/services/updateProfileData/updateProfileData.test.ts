import { Country } from '../../../../../entities/Country'
import { ValidateProfileError } from '../../consts/consts'
import { updateProfileData } from './updateProfileData'
import { Currency } from '@/shared/const/common'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
    firstname: 'John',
    lastname: 'Snow',
    age: 22,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Toronto',
    username: 'admin',
    id: '1',
}
describe('updateProfileData', () => {
    test('succes', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })

        thunk.api.put.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            },
        })
        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ])
    })
})
