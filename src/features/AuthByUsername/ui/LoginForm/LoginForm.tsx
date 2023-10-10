import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../..//model/selectors/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { type ThunkDispatch } from '@reduxjs/toolkit'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
    children?: React.ReactNode
}
export const LoginForm: React.FC<LoginFormProps> = memo(({ className, children }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const { username, password, error, isLoading } = useSelector(getLoginState)

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
    )
})
