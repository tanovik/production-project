import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo } from 'react'

interface IconProps {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}
export const Icon: React.FC<IconProps> = memo(({ className, Svg }) => {
    return (
        <Svg className={classNames(cls.icon, {}, [className])} />
    )
})
