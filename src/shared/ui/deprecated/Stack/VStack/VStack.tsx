import { Flex, type FlexProps } from '../Flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const VStack = (props: VStackProps): React.ReactNode => {
    const { align = 'start' } = props
    return <Flex {...props} direction="column" align={align} />
}
