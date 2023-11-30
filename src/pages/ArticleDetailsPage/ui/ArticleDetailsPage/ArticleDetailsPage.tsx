import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/ArticleCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Page } from 'widgets/Page/Page'
import {
    getArticleRecommendations
} from '../../model/slices/ArticleRecommendationsSlice'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations'
import { fetchArticleRecommendations }
    from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slices'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}
const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentIsLoading = useSelector(getArticleCommentsIsLoading)
    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)

    const onSendComment = useCallback((text: string): void => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecommendations())
    })

    if (!id) {
        return <Page className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
            {t('This article is not found')}
        </Page>
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <Page className={classNames(cls.articleDetailsPage, {}, [className ?? ''])}>
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Recommended')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text className={cls.commentTitle} title={t('Comments')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList comments={comments} isLoading={commentIsLoading}/>
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
