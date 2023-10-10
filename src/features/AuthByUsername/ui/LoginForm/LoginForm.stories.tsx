import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import 'app/styles/index.scss'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs']
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
}
Primary.decorators = [StoreDecorator({
    loginForm: { username: 'qwe', password: '123', isLoading: false }
})]

export const WithError: Story = {
    args: {}
}
WithError.decorators = [StoreDecorator({
    loginForm: { username: 'qwe', password: '123', isLoading: false, error: 'ERROR' }
})]

export const Loading: Story = {
    args: {}
}
Loading.decorators = [StoreDecorator({
    loginForm: { username: '', password: '', isLoading: true }
})]
