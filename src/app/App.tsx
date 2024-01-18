import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from '@/entities/User'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

const App = (): JSX.Element => {
    const { theme } = useTheme()
    const dispatch = useDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div
            className={classNames('app', { hovered: true, selected: false }, [
                theme,
                'cls11',
                'class32',
            ])}
        >
            {/* <div className={`app ${theme}`}> */}
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}

export default App
