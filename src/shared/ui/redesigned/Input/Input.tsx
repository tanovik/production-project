import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import {
    memo,
    type InputHTMLAttributes,
    useState,
    useEffect,
    useRef,
    type ReactNode,
} from 'react'
import { HStack } from '../Stack'
import { Text } from '../Text'

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'readOnly' | 'size'
>
type InputSize = 's' | 'm' | 'l'

interface InputProps extends HTMLInputProps {
    className?: string
    label?: string
    size?: InputSize
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean
    readonly?: boolean
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
}

export const Input: React.FC<InputProps> = memo(
    ({
        className,
        value,
        onChange,
        type = 'text',
        placeholder = '',
        autofocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    }) => {
        const ref = useRef<HTMLInputElement>(null)

        const [isFocused, setIsFocused] = useState(false)

        useEffect(() => {
            if (autofocus) {
                setIsFocused(true)
                ref.current?.focus()
            }
        }, [autofocus])

       
        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
            onChange?.(e.target.value);
        };

        const onBlur = (): void => {
            setIsFocused(false)
        }

        const onFocus = (): void => {
            setIsFocused(true)
        }

        const mods: Mods = {
            [cls.readonly]: readonly,
            [cls.focused]: isFocused,
            [cls.withAddonLeft]: Boolean(addonLeft),
            [cls.withAddonRight]: Boolean(addonRight),
        }

        const input = (
            <div className={classNames(cls.inputWrapper, mods, [className, cls[size]])}>
                <div className={cls.addonLeft}>{addonLeft}</div>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    readOnly={readonly}
                    placeholder={placeholder}
                    {...otherProps}
                ></input>
                <div className={cls.addonRight}>{addonRight}</div>
            </div>
        )


        if (label) {
            return (
                <HStack max gap='8'>
                    <Text text={label}/>
                    {input}
                </HStack>
            )}


        return input
    },
)
