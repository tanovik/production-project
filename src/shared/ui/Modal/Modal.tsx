import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    children?: React.ReactNode
    isOpen: boolean
    onClose?: () => void

}

const ANIMATION_DELAY = 300

export const Modal: React.FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme()
    console.log('theme', theme)
    const closeHandler = useCallback((): void => {
        if (onClose != null) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }
    // each rerender creates a new func so its better to use useCallback
    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearInterval(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing

    }
    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className ?? '', theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>

                    <div
                        className={cls.content}
                        onClick={onContentClick}>
                        {children}
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry
                    </div>
                </div>
            </div>
        </Portal>
    )
}
