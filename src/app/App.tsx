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
import { ToggleFeatures } from '@/shared/lib/features'
import { MainLayout } from '@/shared/layouts/MainLayout'

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
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div 
                    id='app'
                    className={classNames('app', {}, [theme])}>
               
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            {/* <AppRouter /> */}
                            {inited && <AppRouter />}
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div 
                    id='app'
                    className={classNames('app_redesigned', {}, [theme])}>
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                        />
                        
                    </Suspense>
                </div>
            }
        />
    );

    // return (
    //     <div
    //         className={classNames('app', { hovered: true, selected: false }, [
    //             theme,
    //             'cls11',
    //             'class32',
    //         ])}
    //     >
    //         <Suspense fallback="">
    //             <Navbar />

    //             <div className="content-page">
    //                 <Sidebar />
    //                 {inited && <AppRouter />}
    //             </div>
    //         </Suspense>
    //     </div>
    // )
}

export default App
