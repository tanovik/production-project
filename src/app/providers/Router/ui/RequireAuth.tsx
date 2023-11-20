import { getUserAuhtData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'

export function RequireAuth ({ children }: { children: React.JSX.Element }): React.JSX.Element {
    const auth = useSelector(getUserAuhtData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RouterPath.main} state={{ from: location }} replace />
    }

    return children
}
