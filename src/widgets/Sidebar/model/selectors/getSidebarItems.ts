import ArticleIcon from '@/shared/assets/icons/ArticleIcon.svg'
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.svg'
import AboutIcon from '@/shared/assets/icons/AboutIcon.svg'
import MainIcon from '@/shared/assets/icons/MainIcon.svg'
import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from '../../../../entities/User'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Main',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'About',
        },
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: 'Articles',
                authOnly: true,
            },
        )
    }

    return sidebarItemsList
})
