import { Suspense, memo, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter = (): JSX.Element => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (<Suspense fallback={<PageLoader/>}>
            {route.element}
        </Suspense>)
        return (<Route
            key={route.path}
            path={route.path}
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        />)
    }, [])

    return (
        <Routes>
            {/* <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} /> */}
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default memo(AppRouter)
