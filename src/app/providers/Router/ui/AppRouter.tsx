import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = (): JSX.Element => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} /> */}
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-rapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
