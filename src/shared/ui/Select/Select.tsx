import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, memo, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    readonly?: boolean
    onChange?: (value: string) => void

}
export const Select: React.FC<SelectProps> = memo((props) => {
    const { className, label, options, value, onChange, readonly } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        if (onChange != null) {
            onChange(e.target.value)
        }
    }

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])

    return (
        <div className={classNames(cls.selectWrapper, {}, [className ?? ''])}>
            {label && (
                <span className={cls.label} >
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange= {onChangeHandler}
                disabled={readonly}>
                {optionList}
            </select>
        </div>
    )
}
)
