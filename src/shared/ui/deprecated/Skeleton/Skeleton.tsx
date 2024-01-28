import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import { type CSSProperties, memo } from 'react'

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    border?: string
}
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const Skeleton: React.FC<SkeletonProps> = memo(
    ({ className, height, width, border }) => {
        const styles: CSSProperties = {
            width,
            height,
            borderRadius: border,
        }

        return (
            <div
                className={classNames(cls.skeleton, {}, [className ?? ''])}
                style={styles}
            />
        )
    },
)
