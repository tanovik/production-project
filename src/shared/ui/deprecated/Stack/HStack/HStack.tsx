import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const HStack = (props: HStackProps): React.ReactNode => {
    return <Flex direction="row" {...props} />
}
