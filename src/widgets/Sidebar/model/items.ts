import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RouterPath.main,
        Icon: MainIcon,
        text: 'Main Page'
    },
    {
        path: RouterPath.about,
        Icon: AboutIcon,
        text: 'About Page'
    },
    {
        path: RouterPath.profile,
        Icon: ProfileIcon,
        text: 'Profile Page'
    }
]
