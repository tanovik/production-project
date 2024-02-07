import { Flex, type FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps): React.ReactNode => {
    return <Flex direction="row" {...props} />
}
