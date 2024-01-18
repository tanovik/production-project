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
    max?: boolean
}

export const Card: React.FC<CardProps> = memo(
    ({ className, theme = CardTheme.NORMAL, children, max, ...otherProps }) => {
        return (
            <div
                className={classNames(cls.card, { [cls.max]: max }, [
                    className,
                    cls[theme],
                ])}
                {...otherProps}
            >
                {children}
            </div>
        )
    },
)
