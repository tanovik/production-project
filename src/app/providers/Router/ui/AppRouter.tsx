import { getUserAuhtData } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

const AppRouter = (): JSX.Element => {
    const isAuth = useSelector(getUserAuhtData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.authOnly && !isAuth) {
                return false
            }
            return true
        })
    }, [isAuth])
    return (
        <Routes>
            {/* <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} /> */}
            {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader/>}>
                            <div className="page-rapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    )
}

export default memo(AppRouter)
