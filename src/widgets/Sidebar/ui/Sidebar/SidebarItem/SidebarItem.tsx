import cls from './SidebarItem.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '../../../../../entities/User'
import { type SidebarItemType } from '../../../model/types/sidebar'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface SidebarItemProps {
    item: SidebarItemType
    collapsed: boolean
    key: string
}
export const SidebarItem: React.FC<SidebarItemProps> = memo(
    ({ item, collapsed }) => {
        const { t } = useTranslation()

        const isAuth = useSelector(getUserAuthData)

        if (item.authOnly && !isAuth) {
            return null
        }
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <AppLink
                        to={item.path}
                        className={classNames(cls.itemRedesigned, {
                            [cls.collapsedRedesigned]: collapsed,
                        })}
                        activeClassName={cls.active}
                    >
                        <Icon Svg={item.Icon} />
                        <span className={cls.link}>{t(item.text)}</span>
                    </AppLink>
                }
                off={
                    <AppLinkDeprecated
                        theme={AppLinkTheme.SECONDARY}
                        to={item.path}
                        className={classNames(cls.item, {
                            [cls.collapsed]: collapsed,
                        })}
                    >
                        <item.Icon className={cls.icon} />
                        <span className={cls.link}>{t(item.text)}</span>
                    </AppLinkDeprecated>
                }
            />

        )
    },
)
