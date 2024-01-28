import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { memo, useCallback } from 'react'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from '../../../assets/icons/CopyIcon.svg'

interface CodeProps {
    className?: string
    text: string
}
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const Code: React.FC<CodeProps> = memo(({ className, text }) => {
    const onCopyCode = useCallback((): void => {
        navigator.clipboard.writeText(text)
    }, [text])
    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                onClick={onCopyCode}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    )
})
