import ArticleIconDeprecated from '@/shared/assets/icons/ArticleIconDeprecated.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/ProfileIconDeprecated.svg'
import AboutIconDeprecated from '@/shared/assets/icons/AboutIconDeprecated.svg'
import MainIconDeprecated from '@/shared/assets/icons/MainIconDeprecated.svg'
import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from '../../../../entities/User'
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router'
import { toggleFeatures } from '@/shared/lib/features'
import MainIcon from '@/shared/assets/icons/redesigned/home.svg';
import ArticleIcon from '@/shared/assets/icons/redesigned/article.svg';
import AboutIcon from '@/shared/assets/icons/redesigned/Info.svg';
import ProfileIcon from '@/shared/assets/icons/redesigned/avatar.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => MainIconDeprecated,
                on: () => MainIcon,
            }),
            text: 'Main',
        },
        {
            path: getRouteAbout(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => AboutIconDeprecated,
                on: () => AboutIcon,
            }),
            text: 'About',
        },
    ]

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ProfileIconDeprecated,
                    on: () => ProfileIcon,
                }),
                text: 'Profile',
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticleIconDeprecated,
                    on: () => ArticleIcon,
                }),
                text: 'Articles',
                authOnly: true,
            },
        )
    }

    return sidebarItemsList
})
