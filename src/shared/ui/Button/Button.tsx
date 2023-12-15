import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { memo, type ButtonHTMLAttributes } from 'react'

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    fullWidth?: boolean

}
export const Button: React.FC<ButtonProps> = memo((props) => {
    const {
        className, children, theme = ButtonTheme.OUTLINE
        , square, size = ButtonSize.M, fullWidth,
        disabled,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: square as boolean,
        [cls.disabled]: disabled as boolean,
        [cls.fullWidth]: fullWidth as boolean
    }
    return (
        <button
            type='button'
            className={classNames(cls.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
)
