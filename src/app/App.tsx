import { Route, Routes } from 'react-router-dom';
import 'app/styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';



const App = () => {
const {theme, toggleTheme} = useTheme();
  
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls11', 'class32'])}>
        {/* <div className={`app ${theme}`}> */}
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;