import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticleDetailesPageProps {
    className?: string
    children?: React.ReactNode
}
const ArticleDetailesPage: React.FC<ArticleDetailesPageProps> = ({ className, children }) => {
    const { t } = useTranslation('article')
    return (
        <div className={classNames(cls.ArticleDetailesPage, {}, [className ?? ''])}>
            {t('Article Detailes')}
        </div>
    )
}

export default memo(ArticleDetailesPage)
