import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { memo, useCallback } from 'react'
import { Button, ButtonTheme } from '../../deprecated/Button/Button'
import CopyIcon from '../../../assets/icons/CopyIcon.svg'
import CopyIconNew from '../../../assets/icons/redesigned/copy.svg'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '../Icon'

interface CodeProps {
    className?: string
    text: string
}

export const Code: React.FC<CodeProps> = memo(({ className, text }) => {
   
    const onCopyCode = useCallback((): void => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(cls.codeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopyCode}
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                    />
                    <code>{text}</code>
                </pre>
            }
            off={
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
            }
        />
       
    )
})
