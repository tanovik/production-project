import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
    const { t } = useTranslation()
    return (
        <div>
            {/* <BugButton/> */}
            {t('Главная')}
            <Counter/>
        </div>
    )
}

export default MainPage
