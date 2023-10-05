import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
    children?: React.ReactNode
}
export const LoginForm: React.FC<LoginFormProps> = ({ className, children }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.loginForm, {}, [className ?? ''])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter usename')}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter password')}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    )
}
