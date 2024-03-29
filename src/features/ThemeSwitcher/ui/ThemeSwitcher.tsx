import { classNames } from '@/shared/lib/classNames/classNames'
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { memo, useCallback } from 'react'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { saveJsonSettings } from '@/entities/User'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ThemeIcon from '@/shared/assets/icons/redesigned/theme.svg';
import { ToggleFeatures } from '@/shared/lib/features'

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
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
                off={
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onToggleHandler}
                        className={classNames('', {}, [className])}
                    >
                        <IconDeprecated Svg={ThemeIconDeprecated} width={40} height={40} inverted />
                    </Button>
                }
            />
        )
    },
)
