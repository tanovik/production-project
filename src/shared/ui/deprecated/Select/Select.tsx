import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { type ChangeEvent, useMemo, type ReactElement } from 'react'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: Array<SelectOption<T>>
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const Select = <T extends string>(
    props: SelectProps<T>,
): ReactElement => {
    const { className, label, options, value, onChange, readonly } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        if (onChange != null) {
            onChange(e.target.value as T)
        }
    }

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        ))
    }, [options])

    return (
        <div className={classNames(cls.selectWrapper, {}, [className ?? ''])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    )
}
