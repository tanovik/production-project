import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const AboutPage = (): JSX.Element => {
    const { t } = useTranslation()
    return <Page data-testid={'AboutPage'}>{t('About Page')}</Page>
}

export default AboutPage
