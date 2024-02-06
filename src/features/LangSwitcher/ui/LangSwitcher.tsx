import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import { ToggleFeatures } from '@/shared/lib/features'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}
export const LangSwitcher: React.FC<LangSwitcherProps> = memo(
    ({ className, short }) => {
        const { t, i18n } = useTranslation()
		
        const toggle = async (): Promise<any> => {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Button 
                        variant="clear" 
                        onClick={() => {
                            void toggle()
                        }} >
                        {t(short ? 'Short language' : 'Language')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        className={classNames('', {}, [className])}
                        theme={ButtonTheme.CLEAR}
                        // onClick={toggle}
                        onClick={() => {
        				        void toggle()
        				    }}
                    >
                        {t(short ? 'Short language' : 'Language')}
                    </ButtonDeprecated>
                }
            />
		
        )
    },
)

