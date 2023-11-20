import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlesPageProps {
    className?: string
    children?: React.ReactNode
}
const ArticlesPage: React.FC<ArticlesPageProps> = ({ className, children }) => {
    const { t } = useTranslation('articles')
    return (
        <div className={classNames(cls.articlesPage, {}, [className ?? ''])}>
            {t('Articles Page')}
        </div>
    )
}

export default memo(ArticlesPage)
