import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import MainIcon from 'shared/assets/icons/MainIcon.svg'

interface SidebarProps {
    className?: string
}
export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)
    const onToggle = (): void => {
        setCollapsed(prev => !prev)
    }
    const { t } = useTranslation()

    return (
        <div
            data-testid = "sidebar"
            className={classNames(cls.sidebar,
                { [cls.collapsed]: collapsed },
                [className ?? ''])}>
            <Button
                data-testId="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}>
                {collapsed ? '>' : '<' }
            </Button>
            <div className={cls.items}>
                <div>

                    <AppLink
                        to={RouterPath.main}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>
                <div >
                    <AppLink
                        to={RouterPath.about}
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.item}>
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </div>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className= {cls.lang} short={collapsed}/>
            </div>

        </div>
    )
}
