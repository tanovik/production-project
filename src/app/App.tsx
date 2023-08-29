import 'app/styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

const App = (): JSX.Element => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app',
            { hovered: true, selected: false },
            [theme, 'cls11', 'class32'])}>
            {/* <div className={`app ${theme}`}> */}
            <Suspense fallback=''>

                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    )
}

export default App
