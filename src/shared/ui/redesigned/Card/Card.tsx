import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { type HTMLAttributes, memo } from 'react'


export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';

export type CardBorder = 'round_border' | 'normal_border'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
    variant?: CardVariant;
    max?: boolean;
    padding?: CardPadding;
    border?: CardBorder;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

export const Card: React.FC<CardProps> = memo(
    ({ className, variant = 'normal', children, max, 
        border = 'normal_border', padding = '8', ...otherProps }) => {

        const paddingClass = mapPaddingToClass[padding];

        return (
            <div
                className={classNames(cls.card, { [cls.max]: max }, [
                    className,
                    cls[variant],
                    cls[paddingClass],
                    cls[border],
                ])}
                {...otherProps}
            >
                {children}
            </div>
        )
    },
)
