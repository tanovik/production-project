import { useContext } from 'react'
import { Theme, ThemeContext } from './ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '../ui/ThemeProvider'

interface useThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme (): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme?.(newTheme)
        // setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    // return { theme, toggleTheme }
    return { theme: theme as Theme, toggleTheme }
}
