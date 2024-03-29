import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { memo } from 'react'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}


interface AppLinkProps extends LinkProps {
    className?: string
    children?: React.ReactNode
    theme?: AppLinkTheme
}

/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const AppLink: React.FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [
                className ?? '',
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
