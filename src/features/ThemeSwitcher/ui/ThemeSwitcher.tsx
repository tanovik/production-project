import { classNames } from '@/shared/lib/classNames/classNames'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { memo } from 'react'
import { Theme } from '@/shared/const/theme'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(({ className }) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {
                theme === Theme.DARK
                    ? <LightIcon />
                    : <DarkIcon />
            }
        </Button>

    )
})
