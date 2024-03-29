import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

const AdminPanelPage: React.FC = () => {
    const { t } = useTranslation('about')

    return <Page data-testid={'AdminPanelPage'}>{t('Admin panel')}</Page>
}

export default AdminPanelPage
