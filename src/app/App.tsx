import 'app/styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';



const App = () => {
const {theme, toggleTheme} = useTheme();
  
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls11', 'class32'])}>
        {/* <div className={`app ${theme}`}> */}
            
            <Navbar/>
            <AppRouter/>
           
        </div>
    );
};

export default App;