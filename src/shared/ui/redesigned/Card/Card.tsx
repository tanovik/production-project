import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { type HTMLAttributes, memo } from 'react'


export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';


interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card: React.FC<CardProps> = memo(
    ({ className, variant = 'normal', children, max, padding = '8', ...otherProps }) => {

        const paddingClass = mapPaddingToClass[padding];

        return (
            <div
                className={classNames(cls.card, { [cls.max]: max }, [
                    className,
                    cls[variant],
                    cls[paddingClass],
                ])}
                {...otherProps}
            >
                {children}
            </div>
        )
    },
)
