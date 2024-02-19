import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Input } from '@/shared/ui/redesigned/Input'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}
const initialReducers: ReducersList = {
    loginForm: loginReducer,
}
const LoginForm: React.FC<LoginFormProps> = memo(({ className, onSuccess }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onChangeUsername = useCallback(
        (val: string) => {
            dispatch(loginActions.setUsername(val))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (val: string) => {
            dispatch(loginActions.setPassword(val))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, onSuccess, password, username])

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        gap="16"
                        className={classNames(cls.loginForm, {}, [className])}
                    >
                        <Text title={t('Authorization form')} />
                        {error && (
                            <Text
                                text={t('You entered an incorrect login or password')}
                                variant="error"
                            />
                        )}
                        <Input
                            autofocus
                            type="text"
                            className={cls.input}
                            placeholder={t('Enter usename')}
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
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                    </VStack>
                }
                off={
                    <div className={classNames(cls.loginForm, {}, [className])}>
                        <TextDeprecated title={t('Authorization form')} />
                        {error && (
                            <TextDeprecated
                                text={t('You entered an incorrect login or password')}
                                theme={TextTheme.ERROR}
                            />
                        )}
                        <InputDeprecated
                            autofocus
                            type="text"
                            className={cls.input}
                            placeholder={t('Enter usename')}
                            onChange={onChangeUsername}
                            value={username}
                        />
                        <InputDeprecated
                            type="text"
                            className={cls.input}
                            placeholder={t('Enter password')}
                            onChange={onChangePassword}
                            value={password}
                        />
                        <ButtonDeprecated
                            theme={ButtonTheme.OUTLINE}
                            className={cls.loginBtn}
                            onClick={onLoginClick}
                            disabled={isLoading}
                        >
                            {t('Log in')}
                        </ButtonDeprecated>
                    </div>
                }
            />
           
        </DynamicModuleLoader>
    )
})
export default LoginForm
