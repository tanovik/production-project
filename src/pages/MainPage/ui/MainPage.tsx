import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
    const { t } = useTranslation()
    return (
        <div>
            <BugButton/>
            {t('Главная')}
        </div>
    )
}

export default MainPage
