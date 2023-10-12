import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

describe('loginByUsername', () => {
    test('axios post have been called and succes login', async () => {
        const userValue = { username: '123', id: '1' }
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        console.log('result', result)

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('request rejected with error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const thunk = new TestAsyncThunk(loginByUsername)
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('error')
    })
})
// describe('loginByUsername', () => {
//     let dispatch: Dispatch<ThunkDispatch<any, any, any>>
//     let getState: () => StateSchema
//     beforeEach(() => {
//         dispatch = jest.fn()
//         getState = jest.fn()
//     })
//     test('axios post have been called and succes login', async () => {
//         const userValue = { username: '123', id: '1' }
//         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
//         const action = loginByUsername({ username: '123', password: '123' })
//         const result = await action(dispatch, getState, undefined)
//         console.log('result', result)

//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
//         expect(dispatch).toHaveBeenCalledTimes(3)
//         expect(mockedAxios.post).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('fulfilled')
//         expect(result.payload).toEqual(userValue)
//     })

//     test('request rejected with error', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
//         const action = loginByUsername({ username: '123', password: '123' })
//         const result = await action(dispatch, getState, undefined)
//         expect(dispatch).toHaveBeenCalledTimes(2)
//         expect(mockedAxios.post).toHaveBeenCalled()
//         expect(result.meta.requestStatus).toBe('rejected')
//         expect(result.payload).toEqual('error')
//     })
// })
