import { Fragment, useMemo, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '../../../../redesigned/Stack'
import { Button } from '../../../Button/Button'
import cls from './ListBox.module.scss'
import { type DropdownDirection } from '@/shared/types/ui'
import { mapDirectionClass } from '../../styles/consts'
import popupCls from '../../styles/popup.module.scss'

export interface ListBoxItem<T extends string> {
    value: T
    content: ReactNode
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    items?: Array<ListBoxItem<T>>
    className?: string
    value?: T
    defaultValue?: string
    onChange: (value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

export function ListBox<T extends string>(props: ListBoxProps<T>): ReactNode {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props

    const optionsClasses = [mapDirectionClass[direction], popupCls.menu]

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="4">
            {label && <span>{`${label} >`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.listBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    // disabled={readonly}
                    className={cls.trigger}
                >
                    <Button disabled={readonly} variant={'filled'}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}
