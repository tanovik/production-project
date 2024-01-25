import React, { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'
import { Theme } from '@/shared/const/theme'
import { useJsonSettings } from '@/entities/User'


interface ThemeProviderProps {
    children: React.ReactNode
    initialTheme?: Theme
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    initialTheme,
}) => {
    const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
    const [isThemeInited, setThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
	
    useEffect(() => {
        if (!isThemeInited) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited]);
	
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
