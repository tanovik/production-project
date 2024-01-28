import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo } from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    inverted?: boolean
}
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const Icon: React.FC<IconProps> = memo(
    ({ className, Svg, inverted, ...otherProps }) => {
        return (
            <Svg
                className={classNames(inverted ? cls.inverted : cls.icon, {}, [
                    className,
                ])}
                {...otherProps}
            />
        )
    },
)
