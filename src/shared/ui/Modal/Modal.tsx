import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { type MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    children?: React.ReactNode
    isOpen: boolean
    onClose?: () => void
    lazy?: boolean

}

const ANIMATION_DELAY = 300

export const Modal: React.FC<ModalProps> = ({ className, children, isOpen, onClose, lazy }) => {
    const [isClosing, setIsClosing] = useState(false)

    const [isMounted, setIsMounted] = useState(false)

    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const { theme } = useTheme()

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    const closeHandler = useCallback((): void => {
        if (onClose != null) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    // each rerender creates a new func so its better to use useCallback
    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing

    }

    if (lazy && !isMounted) {
        return null
    }
    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className ?? '', theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>

                    <div
                        className={cls.content}
                        onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
