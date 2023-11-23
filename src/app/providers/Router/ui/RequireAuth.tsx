import { getUserAuhtData } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export function RequireAuth ({ children }: { children: React.JSX.Element }): React.JSX.Element {
    const auth = useSelector(getUserAuhtData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    return children
}
