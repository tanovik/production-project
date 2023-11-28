import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import React, { type HTMLAttributeAnchorTarget, memo } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget

}
const getSkeletons = (view: ArticleView): React.ReactNode[] => {
    return new Array(view === ArticleView.PLATE ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        ))
}

export const ArticleList: React.FC<ArticleListProps> =
memo(({ className, articles, isLoading, view = ArticleView.PLATE, target }) => {
    const { t } = useTranslation()
    const renderArticle = (article: Article): React.ReactNode => {
        return <ArticleListItem
            article={article}
            view={view}
            target={target}
            className={cls.card}
            key={article.id}
        />
    }
    if (!isLoading && (articles.length === 0)) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text title={t('This article is not found')} size={TextSize.L}/>
            </div>
        )
    }
    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}

        </div>
    )
})
