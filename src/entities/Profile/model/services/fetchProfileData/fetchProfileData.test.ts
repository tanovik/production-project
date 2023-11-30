import { Country } from '../../../../Country'
import { fetchProfileData } from './fetchProfileData'
import { Currency } from 'shared/const/common'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const data = {
    firstName: 'John',
    lastName: 'Snow',
    age: 22,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Toronto',
    username: 'admin'
}
describe('fetchProfileData', () => {
    test('succes', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const result = await thunk.callThunk('1')

        console.log('result', result)
        expect(thunk.api.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('request rejected with error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk('1')
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('error')
    })
})
