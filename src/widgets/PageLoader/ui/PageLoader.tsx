import './PageLoader.scss'
import { Loader } from '@/shared/ui/deprecated/Loader'

interface PageLoaderProps {
    className?: string
    children?: React.ReactNode
}
export const PageLoader: React.FC<PageLoaderProps> = ({
    className,
    children,
}) => {
    return <Loader />
}
