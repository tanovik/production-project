import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    // const toggle = (): any => {
    //     void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    // }
    const toggle = async (): Promise<any> => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames('', {}, [className ?? ''])}
            theme={ThemeButton.CLEAR}
            onClick={() => {
                void toggle()
            }}>
            {/* onClick={toggle}> */}
            {t('Язык')}
        </Button>
    )
}
