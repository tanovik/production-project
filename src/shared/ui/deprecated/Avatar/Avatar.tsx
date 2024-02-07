import { type Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'
import { AppImage } from '../../redesigned/AppImage'
import UserIcon from '../../../assets/icons/user-filled.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
    fallbackInverted?: boolean
}
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const Avatar: React.FC<AvatarProps> = ({
    className,
    src,
    alt,
    size = 100,
    fallbackInverted,
}) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        }
    }, [size])

    const mods: Mods = {}

    const fallback = <Skeleton width={size} height={size} border="50%" />

    const errorFallback = (
        <Icon
            inverted={fallbackInverted}
            width={size}
            height={size}
            Svg={UserIcon}
        />
    )

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            alt={alt}
            className={classNames(cls.avatar, mods, [className])}
        />
    )
}
