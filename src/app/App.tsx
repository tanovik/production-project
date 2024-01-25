import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { getUserInited, initAuthData  } from '@/entities/User'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { PageLoader } from '@/widgets/PageLoader'

const App = (): JSX.Element => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()
    const inited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])
	
    if(!inited){
        return <PageLoader/>
    }
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
