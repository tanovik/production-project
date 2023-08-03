import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';


interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button 
        theme={ThemeButton.CLEAR}
        onClick={toggleTheme} 
        className={classNames(cls.themeSwitcher, {}, [className])}
        >
             {
                theme === Theme.DARK
                    ? <LightIcon />
                    : <DarkIcon /> 
            }
        </Button>
        // <button 
        // // theme={Themebutton.CLEAR}
        // onClick={toggleTheme} 
        // className={classNames(cls.themeSwitcher, {}, [className])}
        // >
        //     {
        //         theme === Theme.DARK
        //             ? <LightIcon />
        //             : <DarkIcon /> 
        //     }
        // </button>
    );
};