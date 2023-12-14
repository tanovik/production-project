import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { type HTMLAttributes, memo } from 'react'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    theme?: CardTheme
}

export const Card: React.FC<CardProps> = memo(({
    className,
    theme = CardTheme.NORMAL, children, ...otherProps
}) => {
    return (
        <div className={classNames(cls.card, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </div>
    )
})
