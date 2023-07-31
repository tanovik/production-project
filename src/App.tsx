import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './components/pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './components/pages/MainPage/MainPage.async';
import { Suspense} from 'react';
import { useTheme } from './themes/useTheme';
import { classNames } from './helpers/classNames/classNames';



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
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;