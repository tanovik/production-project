import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { type ThunkDispatch } from '@reduxjs/toolkit'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
    className?: string
    children?: React.ReactNode
}
const initialReducers: ReducersList = {
    loginForm: loginReducer
}
const LoginForm: React.FC<LoginFormProps> = memo(({ className, children }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback((val: string) => {
        dispatch(loginActions.setUsername(val))
    }, [dispatch])

    const onChangePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, password, username])

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}
        >
            <div className={classNames(cls.loginForm, {}, [className ?? ''])}>
                <Text title={t('Authorization form')} />
                {error && <Text
                    text={t('You entered an incorrect login or password')}
                    theme={TextTheme.ERROR}/>}
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter usename')}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    className={cls.input}
                    placeholder={t('Enter password')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Log in')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})
export default LoginForm
