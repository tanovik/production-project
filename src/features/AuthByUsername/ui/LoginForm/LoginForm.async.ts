import { type FC, lazy } from 'react'
import { type LoginFormProps } from './LoginForm'

// работающий код
export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    async () => await import('./LoginForm'),
)

