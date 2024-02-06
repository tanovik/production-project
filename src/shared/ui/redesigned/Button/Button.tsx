import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
     */
    variant?: ButtonVariant;
    /**
     * Флаг, делающий кнопку квадратной
     */
    square?: boolean;
    /**
     * Размер кнопки в соответствии с дизайн системой
     */
    size?: ButtonSize;
    /**
     * Флаг, отвечающий за работу кнопки
     */
    disabled?: boolean;
    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
    /**
     * Увеличивает кнопку на всю свободную ширину
     */
    fullWidth?: boolean;
}

// export enum ButtonTheme {
//     CLEAR = 'clear',
//     CLEAR_INVERTED = 'clearInverted',
//     OUTLINE = 'outline',
//     OUTLINE_RED = 'outline_red',
//     BACKGROUND = 'background',
//     BACKGROUND_INVERTED = 'backgroundInverted',
// }
// export enum ButtonSize {
//     M = 'size_m',
//     L = 'size_l',
//     XL = 'size_xl',
// }

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     className?: string
//     theme?: ButtonTheme
//     square?: boolean
//     size?: ButtonSize
//     disabled?: boolean
//     fullWidth?: boolean
// }

export const Button: React.FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        variant = 'outline',
        // theme = ButtonTheme.OUTLINE,
        square,
        size = 'm',
        fullWidth,
        disabled,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square as boolean,
        [cls.disabled]: disabled as boolean,
        [cls.fullWidth]: fullWidth as boolean,
    }
    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [
                className,
                cls[variant],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
})
