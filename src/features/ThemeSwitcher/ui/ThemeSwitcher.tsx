import { classNames } from '@/shared/lib/classNames/classNames'
import ThemeIcon from '@/shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { memo, useCallback } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User'
import { Icon } from '@/shared/ui/Icon'

interface ThemeSwitcherProps {
    className?: string
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(
    ({ className }) => {
        const { toggleTheme } = useTheme()
        const dispatch = useAppDispatch()

        const onToggleHandler = useCallback(() => {
            toggleTheme((newTheme) => {
                dispatch(saveJsonSettings({ theme: newTheme }))
            })
        }, [dispatch, toggleTheme])

        return (
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onToggleHandler}
                className={classNames('', {}, [className])}
            >
                <Icon Svg={ThemeIcon} width={40} height={40} inverted />
            </Button>
        )
    },
)
