import ArticleIcon from 'shared/assets/icons/ArticleIcon.svg'
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../types/sidebar'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { getUserAuhtData } from 'entities/User'

export const getSidebarItems = createSelector(
    getUserAuhtData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Main'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About'
            }
        ]

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Profile',
                    authOnly: true

                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Articles',
                    authOnly: true

                }
            )
        }

        return sidebarItemsList
    }
)
