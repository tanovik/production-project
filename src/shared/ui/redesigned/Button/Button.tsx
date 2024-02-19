import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'

export type ButtonVariant = 'clear' | 'outline' | 'filled'

export type ButtonColor = 'normal' | 'success' | 'error'

export type ButtonSize = 'm' | 'l' | 'xl'

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
	
    color?: ButtonColor;

    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        variant = 'outline',
        square,
        size = 'm',
        fullWidth,
        disabled,
        addonLeft,
        addonRight,
        color = 'normal',
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.square]: square as boolean,
        [cls.disabled]: disabled as boolean,
        [cls.fullWidth]: fullWidth as boolean,
        [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    }
    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [
                className,
                cls[variant],
                cls[size],
                cls[color],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            <div className={cls.addonLeft}>{addonLeft}</div>
            {children}
            <div className={cls.addonRight}>{addonRight}</div>
        </button>
    )
})
