import { classNames } from '@/shared/lib/classNames/classNames'
import { Popover as HPopover } from '@headlessui/react'
import { type DropdownDirection } from '@/shared/types/ui'
import { type ReactElement, type ReactNode } from 'react'
import { mapDirectionClass } from '../../styles/consts'
import cls from './Popover.module.scss'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
    className?: string
    direction?: DropdownDirection
    trigger: ReactNode
    children: ReactNode
}

export function Popover(props: PopoverProps): ReactElement {
    const { className, trigger, direction = 'bottom right', children } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <HPopover
            className={classNames(cls.popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button as={'div'} className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}
