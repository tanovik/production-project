import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { type SidebarItemType, SidebarItemsList } from '../../model/items'
import { SidebarItem } from './SidebarItem/SidebarItem'
import { type ReactNode, useState, memo } from 'react'

interface SidebarProps {
    className?: string
}
export const Sidebar: React.FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid = "sidebar"
            className={classNames(cls.sidebar,
                { [cls.collapsed]: collapsed },
                [className ?? ''])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}>
                {collapsed ? '>' : '<' }
            </Button>
            <div className={cls.items}>
                {SidebarItemsList.map((item: SidebarItemType): ReactNode => {
                    return <SidebarItem
                        item={item}
                        collapsed = {collapsed}
                        key={item.path}
                    />
                })}

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className= {cls.lang} short={collapsed}/>
            </div>

        </div>
    )
})
