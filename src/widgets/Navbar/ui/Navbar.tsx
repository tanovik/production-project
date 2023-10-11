import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuhtData, userActions } from 'entities/User'

interface NavbarProps {
    className?: string
}
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useSelector(getUserAuhtData)
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])
    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])
    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className ?? ''])}>

                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Log out')}
                </Button>
                <LoginModal isOpen={isAuthModal}
                    onClose={onCloseModal}/>

            </div>
        )
    }
    return (
        <div className={classNames(cls.navbar, {}, [className ?? ''])}>

            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Log in')}
            </Button>

            {isAuthModal && <LoginModal isOpen={isAuthModal}
                onClose={onCloseModal}/>}
        </div>
    )
}
