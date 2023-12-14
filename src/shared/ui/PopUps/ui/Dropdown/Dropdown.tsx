import { Menu } from '@headlessui/react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Fragment, type ReactElement, type ReactNode } from 'react'
import { AppLink } from '../../../AppLink/AppLink'
import { type DropdownDirection } from '@/shared/types/ui'
import cls from './Dropdown.module.scss'
import popupCls from '../../styles/popup.module.scss'
import { mapDirectionClass } from '../../styles/consts'

export interface DropdownItem {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

interface DropdownProps {
    className?: string
    items: DropdownItem[]
    direction?: DropdownDirection
    trigger: ReactNode
}

export function Dropdown (props: DropdownProps): ReactNode {
    const {
        className, trigger, items, direction = 'bottom left'
    } = props

    const menuClasses = [mapDirectionClass[direction]]

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            {/* <Menu.Items > */}
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean }): ReactElement => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, { [popupCls.active]: active })}
                        >
                            {item.content}
                        </button>
                    )

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                key={item.href}
                                disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        )
                    }

                    return (
                        <Menu.Item
                            as={Fragment}
                            key={item.href}
                            disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}
