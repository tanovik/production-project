import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo } from 'react'

interface IconProps {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    inverted?: boolean
}
export const Icon: React.FC<IconProps> = memo(({ className, Svg, inverted }) => {
    return (
        <Svg className={ classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
    )
})
