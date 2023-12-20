import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}
export const LangSwitcher: React.FC<LangSwitcherProps> = memo(({ className, short }) => {
    const { t, i18n } = useTranslation()

    // const toggle = (): any => {
    //     void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    // }
    const toggle = async (): Promise<any> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={() => {
                void toggle()
            }}>
            {/* onClick={toggle}> */}
            {t(short ? 'Short language' : 'Language')}
        </Button>
    )
})
