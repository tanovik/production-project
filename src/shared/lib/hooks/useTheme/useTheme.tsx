import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Theme } from '../../../const/theme'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage'

interface useThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme (): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = (): void => {
        let nextheme: Theme
        switch (theme) {
            case Theme.DARK:
                nextheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                nextheme = Theme.PURPLE
                break
            case Theme.PURPLE:
                nextheme = Theme.DARK
                break
            default:
                nextheme = Theme.LIGHT
        }

        setTheme?.(nextheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextheme)
    }

    return { theme: theme || Theme.LIGHT, toggleTheme }
}
