import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
    className?: string
    children?: React.ReactNode
}
const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = ({ className, children }) => {
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
            {t('This article is not found')}
        </div>
    }
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
            <ArticleDetails id={id}/>
        </div>
    )
}

export default memo(ArticleDetailsPage)
