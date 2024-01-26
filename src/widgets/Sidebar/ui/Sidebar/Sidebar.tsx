import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button'
import { SidebarItem } from './SidebarItem/SidebarItem'
import { useState, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from '@/shared/ui/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/AppLogo'

interface SidebarProps {
    className?: string
}
export const Sidebar: React.FC<SidebarProps> = memo(({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const sidebarItemsList = useSelector(getSidebarItems)

    const onToggle = (): void => {
        setCollapsed((prev) => !prev)
    }

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemsList],
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.sidebarRedesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo className={cls.appLogo} />
                    ON
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapseBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.XL}
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStack role="navigation" gap="8" className={cls.items}>
                        {itemsList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} className={cls.lang} />
                    </div>
                </aside>
            }
        />
    );

    // return (
    //     <aside
    //         data-testid="sidebar"
    //         className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
    //             className,
    //         ])}
    //     >
    //         <Button
    //             data-testid="sidebar-toggle"
    //             onClick={onToggle}
    //             className={cls.collapseBtn}
    //             theme={ButtonTheme.BACKGROUND_INVERTED}
    //             square
    //             size={ButtonSize.XL}
    //         >
    //             {collapsed ? '>' : '<'}
    //         </Button>
    //         <VStack role={'navigation'} gap={'8'} className={cls.items}>
    //             {itemsList}
    //         </VStack>
    //         <div className={cls.switchers}>
    //             <ThemeSwitcher />
    //             <LangSwitcher className={cls.lang} short={collapsed} />
    //         </div>
    //     </aside>
    // )
})
