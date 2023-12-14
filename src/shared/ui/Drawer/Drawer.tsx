import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import React, { memo, type ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'
import { Portal } from '../Portal/Portal'
import { useModal } from 'shared/lib/hooks/useModal/useModal'

interface DrawerProps {
    className?: string
    children: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        onClose,
        lazy,
        isOpen
    } = props

    const { isClosing, isMounted, close } = useModal({ animationDelay: 300, onClose, isOpen })

    const { theme } = useTheme()

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }
    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close} />
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    )
})
