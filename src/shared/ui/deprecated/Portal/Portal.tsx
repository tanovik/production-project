import { createPortal } from 'react-dom'

interface PortalProps {
    children: React.ReactNode
    container?: HTMLElement
}
/**
 * устарел, используем новые компоненты из папки redesigned 
 * @deprecated
 */
export const Portal: React.FC<PortalProps> = ({
    children,
    container = document.body,
}) => {
    return createPortal(children, container)
}
