import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import React, { memo } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: Article[]
    isLoading: boolean
    view?: ArticleView

}
const getSkeletons = (view: ArticleView): React.ReactNode[] => {
    return new Array(view === ArticleView.PLATE ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        ))
}

export const ArticleList: React.FC<ArticleListProps> =
memo(({ className, articles, isLoading, view = ArticleView.PLATE }) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        )
    }

    const renderArticle = (article: Article): React.ReactNode => {
        return <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    }
    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    )
})
