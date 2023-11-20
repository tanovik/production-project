import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg'
import ArticleIcon from 'shared/assets/icons/ArticleIcon.svg'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        Icon: MainIcon,
        text: 'Main'
    },
    {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: 'About'
    },
    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true

    },
    {
        path: RouterPath.articles,
        Icon: ArticleIcon,
        text: 'Articles',
        authOnly: true

    }
]
