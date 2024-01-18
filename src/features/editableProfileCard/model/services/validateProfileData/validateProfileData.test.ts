import { Country } from '../../../../../entities/Country'
import { ValidateProfileError } from '../../consts/consts'
import { validateProfileData } from './validateProfileData'
import { Currency } from '@/shared/const/common'

const data = {
    firstname: 'John',
    lastname: 'Snow',
    age: 22,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Toronto',
    username: 'admin',
}
describe('validateProfileData', () => {
    test('succes', async () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })

    test('without first and last name', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: '',
        })
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    })
    test('incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        })
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
    })
    test('incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        })
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    })
    test('incorrect all', async () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ])
    })
})
