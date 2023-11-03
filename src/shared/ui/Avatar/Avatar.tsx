import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

export const Avatar: React.FC<AvatarProps> = ({ className, src, alt, size = 100 }) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    return (
        <img
            src={src}
            style= {styles}
            alt = {alt}
            className={classNames(cls.avatar, {}, [className])}
        />
    )
}
