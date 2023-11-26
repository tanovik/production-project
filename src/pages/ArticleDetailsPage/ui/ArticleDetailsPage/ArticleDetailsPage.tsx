import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleCommentsReducer, getArticleComments } from '../../model/slices/ArticleCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleComments: articleCommentsReducer
}
const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article')
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const comments = useSelector(getArticleComments.selectAll)
    const commentIsLoading = useSelector(getArticleCommentsIsLoading)
    const navigate = useNavigate()
    const onSendComment = useCallback((text: string): void => {
        dispatch(addCommentForArticle(text))
    }, [dispatch])

    const onBackToList = useCallback((): void => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
    })

    if (!id) {
        return <div className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
            {t('This article is not found')}
        </div>
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Back to the list')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Comments')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList comments={comments} isLoading={commentIsLoading}/>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
