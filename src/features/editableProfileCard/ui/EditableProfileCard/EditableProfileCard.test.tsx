import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { type Profile } from '@/entities/Profile'
import { Country } from '../../../../entities/Country'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'
import { profileReducer } from '../../model/slice/profileSlice'
import { EditableProfileCard } from './EditableProfileCard'
import { Currency } from '@/shared/const/common'

const profile: Profile = {
    id: '1',
    firstName: 'admin',
    lastName: 'admin',
    age: 465,
    currency: Currency.USD,
    country: Country.Australia,
    city: 'Moscow',
    username: 'admin213'
}

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile
        },
        user: {
            authData: { id: '1', username: 'admin' }
        }
    },
    asyncReducers: {
        profile: profileReducer
    }
}

describe('features/EditableProfileCard', () => {
    test('Readonly mode should switch', async () => {
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
    })

    test('When canceling, the values must be reset', async () => {
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
    })

    test('An error should pop up', async () => {
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
    })

    test('If there are no validation errors, a PUT request should go to the server', async () => {
        const mockPutReq = jest.spyOn($api, 'put')
        componentRender(<EditableProfileCard id="1" />, options)
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

        expect(mockPutReq).toHaveBeenCalled()
    })
})
