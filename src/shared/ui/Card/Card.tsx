import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { type HTMLAttributes, memo } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
}

export const Card: React.FC<CardProps> = memo(({ className, children, ...otherProps }) => {
    return (
        <div className={classNames(cls.card, {}, [className ?? ''])}
            {...otherProps}>
            {children}
        </div>
    )
})
