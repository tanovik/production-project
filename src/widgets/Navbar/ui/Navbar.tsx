import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '../../../entities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { HStack } from 'shared/ui/Stack'
import { NotificationButton } from 'features/notificationButton'
import { AvatarDropdown } from 'features/avatarDropdown'

interface NavbarProps {
    className?: string
}
export const Navbar: React.FC<NavbarProps> = memo(({ className }) => {
    const { t } = useTranslation()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuthData)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Articles App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Create a new article')}
                </AppLink>
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        )
    }
    return (
        <header className={classNames(cls.navbar, {}, [className])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>

            {isAuthModal && <LoginModal isOpen={isAuthModal}
                onClose={onCloseModal}/>}
        </header>
    )
}
)
