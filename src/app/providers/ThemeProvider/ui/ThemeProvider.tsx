import React, { useMemo, useState } from 'react'
import { Theme, ThemeContext } from '../lib/ThemeContext'

export const LOCAL_STORAGE_THEME_KEY = 'theme'
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
    children: React.ReactNode
    initialTheme?: Theme
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
