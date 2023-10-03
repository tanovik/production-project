import { createPortal } from 'react-dom'

interface PortalProps {
    children: React.ReactNode
    container?: HTMLElement
}
export const Portal: React.FC<PortalProps> = ({ children, container = document.body }) => {
    return createPortal(children, container)
}
