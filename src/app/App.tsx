import 'app/styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme, 'cls11', 'class32'])}>
            {/* <div className={`app ${theme}`}> */}
            <Suspense fallback=''>

                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;