import { NavLink, type LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { type ReactNode, memo } from 'react'

export type AppLinkVariant = 'primary' | 'red';


interface AppLinkProps extends LinkProps {
    className?: string
    children?: ReactNode
    variant?: AppLinkVariant
    activeClassName?: string
}

export const AppLink: React.FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.appLink, { [activeClassName]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    )
})
