import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const MainPage = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <Page data-testid={ 'MainPage'}>
            {/* <BugButton/> */}
            {t('Main Page')}
            {/* <Counter/> */}
        </Page>
    )
}

export default MainPage
